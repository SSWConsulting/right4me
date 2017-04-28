using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SSW.Right4Me.Db;
using SSW.Right4Me.WebUI.Models;

namespace SSW.Right4Me.WebUI.Controllers
{
    public class AccessibilityNeedsController : Controller
    {
        private readonly Right4MeDbContext _dataContext;

        public AccessibilityNeedsController(Right4MeDbContext dataContext)
        {
            _dataContext = dataContext;
        }

        [Route("/api/AccessibilityNeeds")]
        [HttpGet]
        public AccessibilityNeedVm[] Get()
        {
            return _dataContext.AccessibilityNeeds
                .AsQueryable()
                .Select(AccessibilityNeedVmMappings.Projection)
                .ToArray();
        }
    }
}
