
var calculatorReply = [
                       "It equals to %w%.", "It's %w%."
];

calculator = function(msg)
{
    var replyMsg;
    
    if (msg.match(/(\+|-|\*|\/)/g))
    {
        var pos = msg.length;
        var end = msg.length;
        
        for (i = 0; i < msg.length; i++)
        {
            if (msg[i] == "+" || msg[i] == "-" || msg[i] == "*" || msg[i] == "/")
            {
                if (i < pos)
                {
                    pos = i;
                    break;
                }
            }
        }
        
        for (i= pos; i >= 0; i--)
        {
            if (msg[i] == " ")
            {
                pos = i;
                break;
            }
        }
        
        for (i = msg.length; i >= 0; i--)
        {
            if (msg[i] >= "0" && msg[i] <= "9")
            {
                end = i+1;
                break;
            }
        }
        
        var formula = msg.substring(pos,end);
        
        try {
            var results = eval(formula);
            var u = randomNum(calculatorReply.length, 0);
            replyMsg = calculatorReply[u];
            
            replyMsg = replyMsg.replace("%w%", results);
        } catch (e) {
            replyMsg = "";
        }
    } else {
        replyMsg = "";
    }
    
    return replyMsg;
}
