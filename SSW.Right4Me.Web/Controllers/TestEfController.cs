using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using NuGet.Protocol.Core.v3;
using SSW.Right4Me.Db;

namespace SSW.Right4Me.Web.Controllers
{
    [Route("api/[controller]")]
    public class TestEfController : Controller
    {

        private readonly Right4MeDbContext _dataCtx;

        public TestEfController(Right4MeDbContext dataCtx)
        {
            _dataCtx = dataCtx;
        }

        [HttpGet("[action]")]
        public IEnumerable<string> TestValues()
        {
            return _dataCtx.TestEntities.Select(t => t.TestValue);
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
