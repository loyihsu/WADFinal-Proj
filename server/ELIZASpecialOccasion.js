
var specialOccasions = {
    Christmas: { month: 12, date: 25 },
    NewYear: { month: 1, date: 1 }
    /* More festivals? */
};

specialOccasion = function(msg)
{
    thisMsg = msg.toLowerCase();
    
    var cur = new Date();
    
    var cur_Date = cur.getDate();
    var cur_Month = cur.getMonth() + 1;
    
    if (thisMsg.indexOf("merry christmas") > -1)
    {
        var Christmas = specialOccasions["Christmas"];
        
        if (cur_Month == Christmas.month && cur_Date == Christmas.date)
        {
            return "Merry Christmas!";
        } else if (cur_Month == Christmas.month) {
            if (cur_Date < Christmas.date)
            {
                return "Well, it's a little early... But if you insist: Merry Chrismas!";
            } else {
                return "Well... Merry... LATE Chritmas?";
            }
        } else if (cur_Month >= Christmas.month - 7) {
            return "Well, it's a little early... But if you insist: Merry Chrismas!";
        } else if (cur_Month < Christmas.month - 7) {
            return "Well... Merry... LATE Chritmas?";
        }
    } else if (thisMsg.indexOf("happy new year") > -1)
    {
        var NewYear = specialOccasions["NewYear"];
        
        if (cur_Month == NewYear.month && cur_Date == NewYear.date)
        {
            return "Happy New Year!";
        } else if (cur_Month < NewYear.month + 5) {
            return "A late happy new year... I like it, haha! Thanks!";
        } else if (cur_Month >= NewYear.month + 5) {
            return "Happy... OLD year!";
        }
    }
    
    return "";
}

