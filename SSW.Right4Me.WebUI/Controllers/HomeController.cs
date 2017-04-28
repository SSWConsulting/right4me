using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;

namespace SSW.Right4Me.WebUI.Controllers
{
    [SwaggerIgnore]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
