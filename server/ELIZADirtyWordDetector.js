var dirtyWords = [
                  "shit",
                  "piss",
                  "fuck",
                  "cunt",
                  "cocksucker",
                  "motherfucker",
                  "tits",
                  "faggot"
                  ];

var defaultResponse = [
                       "That's not something nice to say...",
                       "Hey, that's a little rude!"
                       ];

dirtyWordDetector = function(msg)
{
    var response;
    var upperCaseMsg = msg.toUpperCase();
    
    for (i = 0; i < dirtyWords.length; i++)
    {
        var dirty = dirtyWords[i].toUpperCase();
        if (upperCaseMsg.indexOf(dirty) > -1)
        {
            var u = randomNum(defaultResponse.length, 0);
            return defaultResponse[u];
        }
    }
    return "";
}
    
