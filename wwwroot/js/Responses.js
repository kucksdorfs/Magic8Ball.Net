(function (m8b) {
    var _responses = [];
    _responses[0] = { responseType: "Positive", text: "It is certain." };
    _responses[1] = { responseType: "Positive", text: "It is decidedly so." };
    _responses[2] = { responseType: "Positive", text: "Without a doubt." };
    _responses[3] = { responseType: "Positive", text: "Yes - definitely." };
    _responses[4] = { responseType: "Positive", text: "You may rely on it." };
    _responses[5] = { responseType: "Positive", text: "As I see it, yes." };
    _responses[6] = { responseType: "Positive", text: "Most likely." };
    _responses[7] = { responseType: "Positive", text: "Outlook good." };
    _responses[8] = { responseType: "Positive", text: "Yes." };
    _responses[9] = { responseType: "Positive", text: "Signs point to yes." };

    _responses[10] = { responseType: "Noncommittal", text: "Reply hazy, try again." };
    _responses[11] = { responseType: "Noncommittal", text: "Ask again later." };
    _responses[12] = { responseType: "Noncommittal", text: "Better not tell you now." };
    _responses[13] = { responseType: "Noncommittal", text: "Cannot predict now." };
    _responses[14] = { responseType: "Noncommittal", text: "Concentrate and ask again." };

    _responses[15] = { responseType: "Negative", text: "Don't count on it." };
    _responses[16] = { responseType: "Negative", text: "My reply is no." };
    _responses[17] = { responseType: "Negative", text: "My sources say no." };
    _responses[18] = { responseType: "Negative", text: "Outlook not so good." };
    _responses[19] = { responseType: "Negative", text: "Very doubtful." };

    m8b.Responses = _responses;
})(window.Magic8Ball = window.Magic8Ball || {});