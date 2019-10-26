
namespace Magic8Ball.Net.Models
{
    using Magice8Ball.Net.Models.Attributes;
    using System.Collections.Generic;
    using System;

    public class EightBallResponses
    {
        private static Random rnd;

        static EightBallResponses()
        {
            rnd = new Random();
        }

        public String name
        {
            get
            {
                return "kucksdorfs";
            }
        }
        public Magic8Ball response { get; set; }

        public int delay { get; set; } = 0;

        public List<EightBallResponses> children { get; set; }

        public static EightBallResponses GetRandomResponse()
        {
            return new EightBallResponses()
            {
                response = (Magic8Ball)rnd.Next(0, 19),
                delay = 0
            };
        }
    }

    public enum Magic8Ball
    {
        [EightBallResponseTextAttribute(Text = "It is certain.", ResponseType = ResponseType.Positive)]
        ItIsCertain = 0,
        [EightBallResponseTextAttribute(Text = "It is decidedly so.", ResponseType = ResponseType.Positive)]
        ItIsDecidedlySo = 1,
        [EightBallResponseTextAttribute(Text = "Without a doubt.", ResponseType = ResponseType.Positive)]
        WithoutADoubt = 2,
        [EightBallResponseTextAttribute(Text = "Yes - definitely.", ResponseType = ResponseType.Positive)]
        YesDefinitely = 3,
        [EightBallResponseTextAttribute(Text = "You may rely on it.", ResponseType = ResponseType.Positive)]
        YouMayRelyOnIt = 4,
        [EightBallResponseTextAttribute(Text = "As I see it, yes.", ResponseType = ResponseType.Positive)]
        AsISeeItYes = 5,
        [EightBallResponseTextAttribute(Text = "Most likely.", ResponseType = ResponseType.Positive)]
        MostLikely = 6,
        [EightBallResponseTextAttribute(Text = "Outlook good.", ResponseType = ResponseType.Positive)]
        OutlookGood = 7,
        [EightBallResponseTextAttribute(Text = "Yes.", ResponseType = ResponseType.Positive)]
        Yes = 8,
        [EightBallResponseTextAttribute(Text = "Signs point to yes.", ResponseType = ResponseType.Positive)]
        SignsPointToYes = 9,
        [EightBallResponseTextAttribute(Text = "Reply hazy, try again.", ResponseType = ResponseType.NonCommittal)]
        ReplyHazyTryAgain = 10,
        [EightBallResponseTextAttribute(Text = "Ask again later.", ResponseType = ResponseType.NonCommittal)]
        AskAgainLater = 11,
        [EightBallResponseTextAttribute(Text = "Better not tell you now.", ResponseType = ResponseType.NonCommittal)]
        BetterNotTellYouNow = 12,
        [EightBallResponseTextAttribute(Text = "Cannot predict now.", ResponseType = ResponseType.NonCommittal)]
        CannotPredictNow = 13,
        [EightBallResponseTextAttribute(Text = "Concentrate and ask again.", ResponseType = ResponseType.NonCommittal)]
        ConcentrateAndAskAgain = 14,
        [EightBallResponseTextAttribute(Text = "Don't count on it.", ResponseType = ResponseType.Negative)]
        DontCountOnIt = 15,
        [EightBallResponseTextAttribute(Text = "My reply is no.", ResponseType = ResponseType.Negative)]
        MyReplyIsNo = 16,
        [EightBallResponseTextAttribute(Text = "My sources say no.", ResponseType = ResponseType.Negative)]
        MySourcesSayNo = 17,
        [EightBallResponseTextAttribute(Text = "Outlook not so good.", ResponseType = ResponseType.Negative)]
        OutlookNotSoGood = 18,
        [EightBallResponseTextAttribute(Text = "Very doubtful", ResponseType = ResponseType.Negative)]
        VeryDoubtful = 19
    }
}

