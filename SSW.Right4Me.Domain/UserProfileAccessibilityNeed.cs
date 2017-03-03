namespace SSW.Right4Me.Domain
{
    public class UserProfileAccessibilityNeed
    {
        public int Id { get; set; }

        public virtual AccessibilityNeed AccessibilityNeed { get; set; }

        public virtual UserProfile UserProfile { get; set; }
    }
}