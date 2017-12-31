wordSearch = function(msg, engLexicon) {
    var wordSearchResult = "";
    
    var wordSearchMatch = msg.match(/which (\w+).(verb|noun|adjective)/i);
    
    var number = 0;
    
    if (wordSearchMatch)
    {
        var allMatches;
        console.log(wordSearchMatch);
        var wds = wordSearchMatch[1];
        
        if (wds.match(/\d/g))
        {
            number = eval(wds);
        } else {
            // deal with texts
        }
        
        console.log(number);
        
        if (msg.indexOf("verb") > -1)
        {
            allMatches = engLexicon.find({POS: "verb"});
        } else if (msg.indexOf("noun") > -1)
        {
            allMatches = engLexicon.find({POS: "noun"});
        } else if (msg.indexOf("adjective") > -1)
        {
            allMatches = engLexicon.find({POS: "adjective"});
        }
        
        if (allMatches !== undefined)
        {
            allMatches = allMatches.fetch();
            
            wordSearchResult += "There you go: ";
            
            for(i = 0; i < 10; i++)
            {
                var randomNumber = Math.floor(Math.random() * allMatches.length);
                wordSearchResult += allMatches[randomNumber].Word;
                if (i < 8)
                {
                    wordSearchResult += ", ";
                } else if (i == 8) {
                    wordSearchResult += ", and "
                } else if (i == 9) {
                    wordSearchResult += ".";
                }
            }
            
        } else {
            wordSearchResult = "Sorry, I got nothing for you.";
        }
    }
    
    return wordSearchResult;
};

