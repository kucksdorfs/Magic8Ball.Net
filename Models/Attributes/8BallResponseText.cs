namespace Magice8Ball.Net.Models.Attributes
{
    using System;

    public enum ResponseType
    {
        Positive,
        Negative,
        NonCommittal
    }

    [AttributeUsage(AttributeTargets.Field)]
    public class EightBallResponseTextAttribute : Attribute
    {
        public String Text { get; set; }
        public ResponseType ResponseType { get; set; }
    }
}
