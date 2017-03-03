using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SSW.Right4Me.Domain
{
    public class AccessibilityNeed
    {
        public int Id  { get; set; }

        public string Name { get; set; }

        public string  Logo { get; set; }

        public virtual ICollection<UserProfileAccessibilityNeed> UserProfiles { get; set; }
    }
}
