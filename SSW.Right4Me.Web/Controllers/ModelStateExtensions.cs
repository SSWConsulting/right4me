using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace SSW.Right4Me.Web.Controllers
{
    public static class ModelStateExtensions
    {

        public static Dictionary<string, string[]> ToErrorsDictionary(this ModelStateDictionary modelState)
        {
            return modelState.ToDictionary(
                kvp => kvp.Key,
                kvp => kvp.Value.Errors.Select(e => e.ErrorMessage).ToArray()
            );
        }

    }
}
