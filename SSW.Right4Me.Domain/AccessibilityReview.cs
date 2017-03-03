namespace SSW.Right4Me.Domain
{
    public class AccessibilityReview
    {
        public int Id { get; set; }

        public int ReviewId { get; set; }
        public Review Review { get; set; }

        public int AccessibilityNeedId { get; set; }
        public virtual AccessibilityNeed AccessibilityNeed { get; set; }

        public int Rating { get; set; }
    }
}