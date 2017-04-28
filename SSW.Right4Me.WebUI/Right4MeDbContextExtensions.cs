using System.Linq;
using SSW.Right4Me.Db;
using SSW.Right4Me.Domain;

namespace SSW.Right4Me.WebUI
{
    public static class Right4MeDbContextExtensions
    {

        public static void Seed(this Right4MeDbContext ctx)
        {
            SeedTestValues(ctx);
            SeedTestProduct(ctx);
            SeedAccessibilityNeeds(ctx);
        }

        private static void SeedAccessibilityNeeds(Right4MeDbContext ctx)
        {
            if (!ctx.AccessibilityNeeds.Any())
            {
                ctx.AccessibilityNeeds.Add(new AccessibilityNeed()
                {
                    Name = "Vision",
                });
                ctx.AccessibilityNeeds.Add(new AccessibilityNeed()
                {
                    Name = "Mobility",
                });
                ctx.AccessibilityNeeds.Add(new AccessibilityNeed()
                {
                    Name = "Hearing",
                });
                ctx.SaveChanges();
            }
        }

        private static void SeedTestProduct(Right4MeDbContext ctx)
        {
            if (!ctx.Products.Any())
            {
                ctx.Products.Add(new Product()
                {
                    Description = "This is the very first test product",
                    Category = ProductCategory.Technology,
                    Title = "Right4Me Test Product"
                });
                ctx.SaveChanges();
            }
        }


        private static void SeedTestValues(Right4MeDbContext ctx)
        {
            if (!ctx.TestEntities.Any())
            {
                ctx.TestEntities.Add(new TestEntity()
                {
                    TestValue = "Test One",
                });

                ctx.TestEntities.Add(new TestEntity()
                {
                    TestValue = "Test Two",
                });

                ctx.TestEntities.Add(new TestEntity()
                {
                    TestValue = "Test Three",
                });

                ctx.TestEntities.Add(new TestEntity()
                {
                    TestValue = "Test Four",
                });

                ctx.TestEntities.Add(new TestEntity()
                {
                    TestValue = "Test Five",
                });
                ctx.SaveChanges();
            }
        }
    }
}
