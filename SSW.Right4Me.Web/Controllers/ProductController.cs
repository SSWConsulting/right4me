using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SSW.Right4Me.Db;
using SSW.Right4Me.Domain;
using SSW.Right4Me.Web.Models;

namespace SSW.Right4Me.Web.Controllers
{
    public class ProductController : Controller
    {

        private readonly Right4MeDbContext _dataCtx;

        public ProductController(Right4MeDbContext dataCtx)
        {
            _dataCtx = dataCtx;
        }

        [Route("/api/product")]
        [HttpGet]
        public ProductVm Get(int id)
        {
            var model = _dataCtx.Products
                .FirstOrDefault(p => p.Id == id)
                ?.ToVm() ?? new ProductVm();

            var reviews = _dataCtx.Reviews.Include(r => r.User).Where(r => r.ProductId == id).ToList();
            model.Reviews = reviews.Select(ReviewVmMappings.Projection.Compile()).ToList();
            model.AccessibilityReviews =
                _dataCtx.AccessibilityReviews.Where(r => r.Review.ProductId == id)
                    .GroupBy(r => r.AccessibilityNeed).ToList()
                    .Select(
                        g => new AccessibilityReviewVm
                        {
                            AccessibilityNeedId = g.Key.Id,
                            AccessibilityNeed = g.Key.Name,
                            Rating = Convert.ToInt32(g.Average(r => r.Rating))
                        }).ToList();

            return model;
        }

        [Route("/api/product/category/{id}")]
        [HttpGet]
        public List<ProductVm> GetByCategory(ProductCategory id)
        {
            if (id == 0)
                _dataCtx.Products.Select(ProductVmMappings.Projection).ToList();
            return _dataCtx.Products.Where(p => p.Category == id).Select(ProductVmMappings.Projection).ToList();
        }

        [Route("/api/product")]
        [HttpPost]
        public JsonResult Post([FromBody]ProductVm model)
        {
            if (ModelState.IsValid)
            {
                var entity = _dataCtx.Products.FirstOrDefault(p => p.Id == model.Id)
                             ?? new Product();
                model.ToEntity(entity);
                if (entity.Id == 0) _dataCtx.Products.Add(entity);
                _dataCtx.SaveChanges();
                return Json(entity.ToVm());
            }
            else
            {
                Response.StatusCode = 422;
                return Json(ModelState.ToErrorsDictionary());
            }
        }

    }
}
