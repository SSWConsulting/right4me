using System;
using System.Linq.Expressions;
using SSW.Right4Me.Domain;

namespace SSW.Right4Me.WebUI.Models
{
    public class AccessibilityNeedVm
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }


    public static class AccessibilityNeedVmMappings
    {
        public static readonly Expression<Func<AccessibilityNeed, AccessibilityNeedVm>> Projection = accessibilityNeed => new AccessibilityNeedVm()
        {
           Id = accessibilityNeed.Id,
           Name = accessibilityNeed.Name
        };

        public static Func<AccessibilityNeed, AccessibilityNeedVm> ToVmFunc => Projection.Compile();

        public static AccessibilityNeedVm ToVm(AccessibilityNeed accessibilityNeed)
        {
            return ToVmFunc.Invoke(accessibilityNeed);
        }

    }
}