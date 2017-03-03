using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using FluentValidation.Attributes;

namespace SSW.Right4Me.Web.Models
{
    [Validator(typeof(LoginVmValidator))]
    public class LoginVm
    {
        public string UserName { get; set; }

        public string Password { get; set; }
    }

    public class LoginVmValidator : AbstractValidator<LoginVm>
    {
        public LoginVmValidator()
        {
            RuleFor(m => m.UserName).NotEmpty().WithMessage("Required");
            RuleFor(m => m.Password).NotEmpty().WithMessage("Required");
        }
    }
}
