using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SSW.Right4Me.Domain;

namespace SSW.Right4Me.Db
{
    public class Right4MeDbContext : IdentityDbContext<UserProfile>
    {
        public Right4MeDbContext(DbContextOptions<Right4MeDbContext> options) : base(options) { }

        public DbSet<TestEntity> TestEntities { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<AccessibilityNeed> AccessibilityNeeds { get; set; }

        public DbSet<UserProfileAccessibilityNeed> UserProfileAccessibilityNeeds { get; set; }

        public DbSet<Review> Reviews { get; set; }

        public DbSet<AccessibilityReview> AccessibilityReviews { get; set; }
    }

}
