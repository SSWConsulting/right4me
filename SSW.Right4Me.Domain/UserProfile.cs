using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace SSW.Right4Me.Domain
{
    public class UserProfile : IdentityUser
    {

        public string FirstName { get; set; }

        public string LastName { get; set; }


        public virtual ICollection<UserProfileAccessibilityNeed> AccessibilityNeeds { get; set; } = new List<UserProfileAccessibilityNeed>();


    }
}
