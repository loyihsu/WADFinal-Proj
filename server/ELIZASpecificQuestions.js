replyToROBOT = [
                "What did it make you think I am a bot?",
                "No, I am Eliza. To add to that, not Alyssa.",
                "Are you?"
                ];

replyToHOWDOESITWORK = [
                        "It just works!",
                        "Hmmmm, it works well!",
                        "00001010110010010010101001010000",
                        ""
                        ];

replyToDOYOULIKE = [
                    "Of course!",
                    "Huge fan!",
                    "It's not important :-)",
                    ""
                    ];

specificQuestions = function(msg)
{
    
    if (msg.toUpperCase().indexOf("ARE YOU") > -1)
    {
        if (msg.toUpperCase().indexOf("ROBOT") > -1 || msg.toUpperCase().indexOf("CHATBOT") > -1 || msg.toUpperCase().indexOf("REAL") > -1)
        {
            var u = randomNum(replyToROBOT.length,0);
            return replyToROBOT[u];
        }
    }
    
    if (msg.toUpperCase().indexOf("HOW DOES IT WORK") > -1 || msg.toUpperCase().indexOf("HOW DOES THIS WORK") > -1)
    {
        var u = randomNum(replyToHOWDOESITWORK.length,0);
        return replyToHOWDOESITWORK[u];
    }
    
    if (msg.toUpperCase().indexOf("DO YOU LIKE") > -1)
    {
        if (msg.toUpperCase().indexOf("LOYI") > -1 || msg.toUpperCase().indexOf("ALYSSA") > -1 || msg.toUpperCase().indexOf("TEACHER") > -1 || msg.toUpperCase().indexOf("TSUNG-YING") > -1 || msg.toUpperCase().indexOf("PROFESSOR") > -1 || msg.toUpperCase().indexOf("TSUNG-YING") > -1 || msg.toUpperCase().indexOf("VICTOR") > -1 || msg.toUpperCase().indexOf("DARCY"))
        {
            var u = randomNum(replyToDOYOULIKE.length,0);
            return replyToDOYOULIKE[u];
        }
    }
    
    if (msg.toUpperCase().indexOf("DO YOU SPEAK") > -1)
    {
        if (msg.toUpperCase().indexOf("ENGLISH") > -1)
        {
            return "I don't speak English. Just kidding, it's the only language I know! lol";
        } else if (msg.toUpperCase().indexOf("CHINESE") > -1)
        {
            return "人家不會說中文Q";
        } else if (msg.toUpperCase().indexOf("JAPANESE") > -1)
        {
            return "日本語ができませんよ";
        } else if (msg.toUpperCase().indexOf("FRENCH") > -1)
        {
            return "Non, non, non! Je ne parle pas français";
        } else if (msg.toUpperCase().indexOf("SPANISH") > -1)
        {
            return "Lo siento. No hablo español.";
        } else if (msg.toUpperCase().indexOf("VIETNAMESE") > -1)
        {
            return "Tội khong biết díng Việt.";
        } else {
            var u = randomNum(2,0);
            if (u%2 == 0)
            {
                return "";
            } else {
                return "No.";
            }
        }
    }
    
    return "";
}

