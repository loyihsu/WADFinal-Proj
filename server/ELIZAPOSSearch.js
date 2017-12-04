POSSearch = function(msg, engLexicon) {
  var posSearchResults = "";

  var posq = "What is the POS of the word ";

  if (msg.indexOf(posq) > -1)
  {
    if (msg.indexOf("?") > -1)
    {
      var theWord = msg.substring(posq.length, msg.length - 1);
    } else {
      var theWord = msg.substring(posq.length, msg.length);
    }

    var theMatch;

    theMatch = engLexicon.findOne({Word: theWord});

    if (theMatch !== undefined)
    {
      var aoran;
      if (theMatch.POS.charAt(0) == "a" || theMatch.POS.charAt(0) == "e" || theMatch.POS.charAt(0) == "i" || theMatch.POS.charAt(0) == "o" || theMatch.POS.charAt(0) == "u")
      {
        aoran = "an";
      } else {
        aoran = "a";
      }
      posSearchResults += "The POS of the word \"" + theMatch.Word + "\" is "+ aoran +" " + theMatch.POS + ".";
    } else {
      posSearchResults = "Sorry, I don't know the word.";
    }
  }

  return posSearchResults;
};
