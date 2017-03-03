using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SSW.Right4Me.Db;
using SSW.Right4Me.Domain;

namespace SSW.Right4Me.Web.Models
{
    public class UserProfileVm
    {

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string UserName { get; set; }

        public IList<AccessibilityNeedVm> AccessibilityNeeds { get; set; }

    }


    public static class UserProfileVmMappings
    {
        public static readonly Expression<Func<UserProfile, UserProfileVm>> Projection = userProfile => new UserProfileVm()
        {
            UserName = userProfile.UserName,
            Email = userProfile.Email,
            FirstName = userProfile.FirstName,
            LastName = userProfile.LastName,
            AccessibilityNeeds = userProfile.AccessibilityNeeds
                .AsQueryable()
                .Select(upan => upan.AccessibilityNeed)
                .Select(AccessibilityNeedVmMappings.Projection)
                .ToList()
        };

        public static Func<UserProfile, UserProfileVm> ToVmFunc => Projection.Compile();

        public static UserProfileVm ToVm(this UserProfile up)
        {
            return ToVmFunc.Invoke(up);
        }


        public static UserProfileVm ToEntity(Right4MeDbContext context, UserProfileVm model, UserProfile entity)
        {
            entity.FirstName = model.FirstName;
            entity.LastName = model.LastName;

            var submittedIds = model.AccessibilityNeeds.Select(an => an.Id)
                .ToList();

            var currentNeedIds = entity.AccessibilityNeeds.Select(e => e.AccessibilityNeed.Id)
                .ToList();

            var toAddIds = submittedIds.Where(id => !currentNeedIds.Contains(id)).Distinct().ToList();
            var toRemoveIds = currentNeedIds.Where(id => !submittedIds.Contains(id)).ToList();

            foreach (var id in toRemoveIds)
            {
                var toRemoveList = entity.AccessibilityNeeds.Where(upan => upan.AccessibilityNeed.Id == id).ToList();
                foreach (var toRemove in toRemoveList)
                {
                    context.UserProfileAccessibilityNeeds.Remove(toRemove);
                    entity.AccessibilityNeeds.Remove(toRemove);
                }
            }
            foreach (var id in toAddIds)
            {
                context.UserProfileAccessibilityNeeds.Add(new UserProfileAccessibilityNeed()
                {
                    UserProfile = entity,
                    AccessibilityNeed = context.AccessibilityNeeds.FirstOrDefault(n => n.Id == id)
                });
            }
            context.SaveChanges();

            // reload and return view model
            var result = context.Users
                .Include(u => u.AccessibilityNeeds)
                .ThenInclude(an => an.AccessibilityNeed)
                .FirstOrDefault(u => u.UserName == entity.UserName)
                .ToVm();

            return result;
        }

    }
}

