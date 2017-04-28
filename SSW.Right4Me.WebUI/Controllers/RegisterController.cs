using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SSW.Right4Me.Domain;
using SSW.Right4Me.WebUI.Models;

namespace SSW.Right4Me.WebUI.Controllers
{
    public class RegisterController : Controller
    {
        private readonly UserManager<UserProfile> _userManager;
        private readonly SignInManager<UserProfile> _signInManager;

        public RegisterController(UserManager<UserProfile> userManager, 
            SignInManager<UserProfile> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [Route("api/register")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody]RegisterVm model)
        {

            if (ModelState.IsValid)
            {
                var userProfile = new UserProfile();
                model.ToEntity(userProfile);
                var result = await _userManager.CreateAsync(userProfile, model.Password);
                if (result.Succeeded)
                {
                    // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=532713
                    // Send an email with this link
                    //var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    //var callbackUrl = Url.Action("ConfirmEmail", "Account", new { userId = user.Id, code = code }, protocol: HttpContext.Request.Scheme);
                    //await _emailSender.SendEmailAsync(model.Email, "Confirm your account",
                    //    "Please confirm your account by clicking this link: <a href=\"" + callbackUrl + "\">link</a>");
                    await _signInManager.SignInAsync(userProfile, isPersistent: false);

                    return Content("ok");
                }
                else
                {
                    Response.StatusCode = 422;
                    return Json(new Dictionary<string, string[]>() {
                    {
                        string.Empty, result.Errors.Select(e => e.Description).ToArray()   
                    }});
                } 
            }
            Response.StatusCode = 422;
            return Json(ModelState.ToErrorsDictionary());
        }
    }
}
