using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SSW.Right4Me.Db;
using SSW.Right4Me.Domain;
using SSW.Right4Me.Web.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace SSW.Right4Me.Web.Controllers
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
