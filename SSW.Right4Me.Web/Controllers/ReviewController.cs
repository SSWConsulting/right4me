using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SSW.Right4Me.Db;
using SSW.Right4Me.Domain;
using SSW.Right4Me.Web.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace SSW.Right4Me.Web.Controllers
{
    [Route("api/[controller]")]
    public class ReviewController : Controller
    {
        private readonly Right4MeDbContext _dataCtx;

        public ReviewController(Right4MeDbContext dataCtx)
        {
            _dataCtx = dataCtx;
        }

        // GET: api/values
        //[HttpGet]
        //[Route("/api/review/product/{id}")]
        //public IEnumerable<ReviewVm> GetReviewsByProduct(int id)
        //{
        //    _dataCtx.AccessibilityReviews.
        //}

        // GET api/values/5
        [HttpGet("{id}")]
        public ReviewVm Get(int id)
        {
            if (!User.Identity.IsAuthenticated) return new ReviewVm();

            var userProfile = _dataCtx.Users.FirstOrDefault(u => u.UserName == User.Identity.Name);
            var userId = new Guid(userProfile.Id);

            var entity = _dataCtx.Reviews.Include(r => r.Product).Include(r => r.User).FirstOrDefault(r => r.ProductId == id && r.UserId == userId);

            var model = entity != null ? ReviewVmMappings.Projection.Compile().Invoke(entity) : null;

            return model ??
                _dataCtx.Products.Where(r => r.Id == id).Select(p =>
                  new ReviewVm
                  {
                      ProductId = id,
                      ProductName = p.Title,
                      UserId = userId
                  }).FirstOrDefault();
        }

        // POST api/values
        [HttpPost]
        public JsonResult Post([FromBody]ReviewVm model)
        {
            if (ModelState.IsValid)
            {
                var userId = model.UserId.ToString();
                var needs = _dataCtx.UserProfileAccessibilityNeeds.Where(n => n.UserProfile.Id == userId);
                model.AccessibilityReviews = needs.Select(n => new AccessibilityReviewVm
                {
                    AccessibilityNeedId = n.AccessibilityNeed.Id,
                    Rating = model.Rating
                }).ToList();

                var entity = _dataCtx.Reviews.FirstOrDefault(p => p.Id == model.Id) ?? new Review();
                model.ToEntity(entity);
                if (entity.Id == 0) _dataCtx.Reviews.Add(entity);
                _dataCtx.SaveChanges();
                return Json(entity.ToVm());
            }
            else
            {
                Response.StatusCode = 422;
                return Json(ModelState.ToErrorsDictionary());
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
