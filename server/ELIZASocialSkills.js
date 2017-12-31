var commonGreetings = [
                       "Hello", "What's up?", "How are you"
                       ];

var commonFarewells = [
                       "Bye", "See you", "See ya", "Goodbye"
                       ];

var commonApologies = [
                       "Excuse me", "Sorry"
                       ];


var greetingReplys = [
                      "Hi, nice to meet you!", "What's up?", "How's it going?", "How are you doing?"
                      ];

var farewareReplys = [
                      "See you soon!", "See you later!", "Cheers!", "Bye bye!", "Peace!"
                      ];

var apologyReplys = [
                     "That's okay.", "Don't worry about it.", "Don't sweat.", "Not a big deal.", "Don't be.", "No biggie."
                      ];


socialResponse = function(msg)
{
    var responseType = "";
    var upperCaseMsg = msg.toUpperCase();
    
    for (i = 0; i < commonGreetings.length; i++)
    {
        var greeting = commonGreetings[i].toUpperCase();
        if (upperCaseMsg.indexOf(greeting) > -1)
        {
            responseType = "greetings";
            break;
        }
    }
    
    for (i = 0; i < commonFarewells.length; i++)
    {
        var farewell = commonFarewells[i].toUpperCase();
        if (upperCaseMsg.indexOf(farewell) > -1)
        {
            responseType = "farewells";
            break;
        }
    }
    for (i = 0; i < commonApologies.length; i++)
    {
        var apology = commonApologies[i].toUpperCase();
        if (upperCaseMsg.indexOf(apology) > -1)
        {
            responseType = "apology";
            break;
        }
    }
    
    if(responseType === "greetings")
    {
        var u = randomNum(greetingReplys.length,0);
        return greetingReplys[u];
    } else if (responseType === "farewells")
    {
        var u = randomNum(farewareReplys.length,0);
        return farewareReplys[u];
    } else if (responseType === "apology")
    {
        var u = randomNum(apologyReplys.length,0);
        return apologyReplys[u];
    } else {
        return "";
    }
};

