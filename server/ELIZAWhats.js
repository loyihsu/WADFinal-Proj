replyToWhatsNew = [
                   "I just learned to tell some jokes! DO ASK ME!",
                   "I've learned a lot recently. Internet is, you know, Internet.",
                   "I'm planning to lose some pounds.",
                   "I just made my new bot's resolution, like, beat Siri.",
                   "I read some articles about AI. Lots of information!",
                   "There are lots of good dramas on Netflix. I'm into House of Cards."
];

ELIZAWhats = function(msg) {
    msg = msg.replace(/\?/g, "");
    var whatisRegExp = /(what's|what is) (.*)/i;
    var whatisMatch = msg.match(whatisRegExp);
                         
    if (whatisMatch)
    {
        if (whatisMatch[2].toUpperCase() === "NEW")
        {
            var u = randomNum(replyToWhatsNew.length,0);
            return replyToWhatsNew[u];
        } else if (whatisMatch[2].toUpperCase().indexOf("THAT") > -1) {
            return "What do you mean by 'that'?";
        } else {
            var returnString = "I will google it for you... Here you go: ";
            returnString += "http://google.com/search?q=" + whatisMatch[2];
            return returnString;
        }
    }
    
    return "";
}
