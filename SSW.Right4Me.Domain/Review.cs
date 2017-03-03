using System;
using System.Collections.Generic;

namespace SSW.Right4Me.Domain
{
    public class Review
    {
        public int Id { get; set; }

        public string Description { get; set; }

        public int Rating { get; set; }

        public int ProductId { get; set; }
        public virtual Product Product { get; set; }

        public Guid UserId { get; set; }
        public virtual UserProfile User { get; set; }

        public virtual ICollection<AccessibilityReview> AccessibilityReviews { get; set; } = new List<AccessibilityReview>();
    }
}