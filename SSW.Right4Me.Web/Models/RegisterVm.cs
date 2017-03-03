using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using FluentValidation;
using FluentValidation.Attributes;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Server.Kestrel.Internal.Infrastructure;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using SSW.Right4Me.Domain;

namespace SSW.Right4Me.Web.Models
{
    [Validator(typeof(RegisterVmValidator))]
    public class RegisterVm
    {
        public string UserName { get; set; }

        public string Password { get; set; }

        public string ConfirmPassword { get; set; }

        public string Email { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
    }

    public class RegisterVmValidator : AbstractValidator<RegisterVm>
    {
        public RegisterVmValidator()
        {
            RuleFor(m => m.Email).NotEmpty().WithMessage("Required");
            RuleFor(m => m.UserName).NotEmpty().WithMessage("Required");
            RuleFor(m => m.FirstName).NotEmpty().WithMessage("Required");
            RuleFor(m => m.LastName).NotEmpty().WithMessage("Required");
            RuleFor(m => m.Password).NotEmpty().WithMessage("Required");

            RuleFor(m => m.ConfirmPassword)
                .Must((model, val, context) =>
                {
                    return model.Password != null && model.ConfirmPassword != null &&
                           model.Password.Equals(model.ConfirmPassword);
                })
                .WithMessage("Password fields must match");
        }
    }

    public static class RegisterVmMappings
    {
        public static readonly Expression<Func<UserProfile, RegisterVm>> Projection = userProfile => new RegisterVm()
        {
            UserName = userProfile.UserName,
            Email = userProfile.Email,
            FirstName = userProfile.FirstName,
            LastName = userProfile.LastName
        };

        public static Func<UserProfile, RegisterVm> ToVm => Projection.Compile();

        public static UserProfile ToEntity(this RegisterVm model, UserProfile profile)
        {
            profile.LastName = model.LastName;
            profile.FirstName = model.FirstName;
            profile.Email = model.Email;
            profile.UserName = model.UserName;

            return profile;
        }
    }
}
