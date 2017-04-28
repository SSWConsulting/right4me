using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using FluentValidation;
using FluentValidation.Attributes;
using SSW.Right4Me.Domain;

namespace SSW.Right4Me.WebUI.Models
{
    [Validator(typeof(ReviewVmValidator))]
    public class ReviewVm
    {
        public int Id { get; set; }

        public string Description { get; set; }

        public int Rating { get; set; }

        public int ProductId { get; set; }

        public string ProductName { get; set; }

        public Guid UserId { get; set; }

        public string UserEmail { get; set; }

        public string UserName { get; set; }

        public List<AccessibilityReviewVm> AccessibilityReviews { get; set; } = new List<AccessibilityReviewVm>();
    }

    public class AccessibilityReviewVm
    {
        public int Id { get; set; }
        public int AccessibilityNeedId { get; set; }
        public string AccessibilityNeed { get; set; }
        public int Rating { get; set; }
    }


    public class ReviewVmValidator : AbstractValidator<ReviewVm>
    {
        public ReviewVmValidator()
        {
            RuleFor(m => m.Rating).NotEmpty().GreaterThanOrEqualTo(1).LessThanOrEqualTo(5).WithMessage("Required");
        }
    }

    public static class AccessibilityReviewVmMappings
    {
        public static readonly Expression<Func<AccessibilityReview, AccessibilityReviewVm>> Projection = r => new AccessibilityReviewVm
        {
            Rating = r.Rating,
            AccessibilityNeed = r.AccessibilityNeed != null ? r.AccessibilityNeed.Name : null,
            AccessibilityNeedId = r.AccessibilityNeedId,
            Id = r.Id
        };
    }

    public static class ReviewVmMappings
    {
        public static readonly Expression<Func<Review, ReviewVm>> Projection = review => new ReviewVm()
        {
            Id = review.Id,
            Description = review.Description,
            Rating = review.Rating,
            ProductId = review.ProductId,
            ProductName = review.Product != null ? review.Product.Title : null,
            UserId = review.UserId,
            UserEmail = review.User != null ? review.User.Email : null,
            UserName = review.User != null ? review.User.FirstName + " " + review.User.LastName : null
        };

        public static ReviewVm ToVm(this Review review)
        {
            var vm = Projection.Compile().Invoke(review);
            vm.AccessibilityReviews =
                review.AccessibilityReviews.Select(AccessibilityReviewVmMappings.Projection.Compile()).ToList();
            return vm;
        }

        public static Review ToEntity(this ReviewVm model, Review review)
        {
            review.Description = model.Description;
            review.ProductId = model.ProductId;
            review.Rating = model.Rating;
            review.AccessibilityReviews = model.AccessibilityReviews.Select(r => new AccessibilityReview
            {
                AccessibilityNeedId = r.AccessibilityNeedId,
                Rating = r.Rating
            }).ToList();
            review.UserId = model.UserId;

            return review;
        }
    }
}
