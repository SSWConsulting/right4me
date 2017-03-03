using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using FluentValidation;
using FluentValidation.Attributes;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Server.Kestrel.Internal.Infrastructure;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using SSW.Right4Me.Domain;

namespace SSW.Right4Me.Web.Models
{
    [Validator(typeof(ProductVmValidator))]
    public class ProductVm
    {

        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Image { get; set; }

        public string Url { get; set; }

        public ProductCategory? Category { get; set; }

        public List<AccessibilityReviewVm> AccessibilityReviews { get; set; } = new List<AccessibilityReviewVm>();

        public List<ReviewVm> Reviews { get; set; } = new List<ReviewVm>();

    }




    public class ProductVmValidator : AbstractValidator<ProductVm>
    {
        public ProductVmValidator()
        {
            RuleFor(m => m.Title).NotEmpty().WithMessage("Required");
            // RuleFor(m => m.Description).NotEmpty().WithMessage("Required");
        }
    }



    public static class ProductVmMappings
    {
        public static readonly Expression<Func<Product, ProductVm>> Projection = product => new ProductVm()
        {
            Id = product.Id,
            Description = product.Description,
            Title = product.Title,
            Category = product.Category,
            Image = product.Image,
            Url = product.Url
        };


        public static ProductVm ToVm(this Product product)
        {
            return Projection.Compile().Invoke(product);
        }

        public static Product ToEntity(this ProductVm model, Product product)
        {
            product.Description = model.Description;
            product.Category = model.Category;
            product.Image = model.Image;
            product.Title = model.Title;
            product.Url = model.Url;

            return product;
        }
    }
}
