using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;
using SSW.Right4Me.Domain;
using SSW.Right4Me.WebUI.Models;

namespace SSW.Right4Me.WebUI.Controllers
{

    public class LoginController : Controller
    {
        private readonly SignInManager<UserProfile> _signInManager;
        private readonly UserManager<UserProfile> _userManager;

        public LoginController(SignInManager<UserProfile> signInManager, 
            UserManager<UserProfile> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [Route("api/login")]
        [SwaggerResponse(typeof(UserProfileVm))]
        [HttpPost]
        [AllowAnonymous]
        public async Task<JsonResult> Login([FromBody] LoginVm model)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(
                    model.UserName,
                    model.Password,
                    true,
                    false
                );
                if (result.Succeeded)
                {
                    var userProfile = await _userManager.FindByNameAsync(model.UserName);
                    var userProfileVm = UserProfileVmMappings.ToVm(userProfile);
                    return Json(userProfileVm);
                }
                else
                {
                    Response.StatusCode = 422;
                    return Json(new Dictionary<string, string[]>()
                    {
                        {string.Empty, new[] {"Login Failed"}}
                    });

                }
            }
            Response.StatusCode = 422;
            return Json(ModelState.ToErrorsDictionary());
        }

        [Route("api/usercheck")]
        [HttpGet]
        public IActionResult TestLogin()
        {
            if (User.Identity.IsAuthenticated)
            {
                return Content($"in: {User.Identity.Name}");
            }
            else
            {
                return Content("out");
            }
        }


        [Route("api/logout")]
        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            if (User.Identity.IsAuthenticated)
            {
                await _signInManager.SignOutAsync();
            }
            return Content("ok");           
        }
    }
}