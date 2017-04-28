using System.Linq;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SSW.Right4Me.Db;
using SSW.Right4Me.Domain;
using SSW.Right4Me.WebUI.Models;

namespace SSW.Right4Me.WebUI.Controllers
{
    public class UserProfileController : Controller
    {
        private readonly UserManager<UserProfile> _userManager;
        private readonly Right4MeDbContext _dataContext;

        public UserProfileController(UserManager<UserProfile> userManager
            , Right4MeDbContext dataContext)
        {
            _userManager = userManager;
            _dataContext = dataContext;
        }

        [Route("/api/UserProfile")]
        [HttpGet]
        public UserProfileVm UserProfile()
        {
            if (User.Identity.IsAuthenticated)
            {
                var userProfile = _dataContext.Users
                    .Include(u => u.AccessibilityNeeds)
                    .ThenInclude(an => an.AccessibilityNeed)
                    .FirstOrDefault(u => u.UserName == User.Identity.Name);

                var userProfileVm = UserProfileVmMappings.ToVm(userProfile);

                return userProfileVm;
            }
            Response.StatusCode = 403;
            return null;
        }

        private static object myLock = new object();

        [Route("/api/UpdateUserProfile")]
        [HttpPost]
        public JsonResult UpdateUserProfile([FromBody] UserProfileVm model)
        {
            lock (myLock) // HACK: arrgghh we keep gertting two simultaneous requests!
            {

                if (!User.Identity.IsAuthenticated)
                {
                    Response.StatusCode = 403;
                    return null;
                }
                if (!ModelState.IsValid)
                {
                    return Json(ModelState.ToErrorsDictionary());
                }


                var userProfile = _dataContext.Users
                    .Include(u => u.AccessibilityNeeds)
                    .ThenInclude(an => an.AccessibilityNeed)
                    .FirstOrDefault(u => u.UserName == User.Identity.Name);
                var reloadedModel = UserProfileVmMappings.ToEntity(_dataContext, model, userProfile);
                return Json(reloadedModel);
            }
        }
    }
}
