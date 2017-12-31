var randomResponses = {
  neutral: [
    "Could you tell me more about %w%?"
  ],
  emotional: [
    "You seem a bit emotional when talking about %w%.", "Keep calm and tell me more about %w%."
  ],
  suspicious: [
    "%w% is a very tricky thing."
  ]
};

chooseRandomResponse = function(msg, msgWordPOS, emotion, engLexicon) {
  var finalChoice = "", keyword="", synonym="";
  var emotionResponses = randomResponses[emotion];

  var msgWords = msg.split(" ");

  for (i = msgWordPOS.length-1; i > -1; i--)
  {
      if (msgWordPOS[i] === "noun")
      {
        keyword = msgWords[i];
        console.log (keyword);
        var searchResult = engLexicon.findOne({Word: keyword});
        if (searchResult !== undefined)
        {
          synonym = searchResult.Synonym;
          break;
        }
      }
  }

  var numOfChoices = emotionResponses.length;
  var randomNum = Math.random();
  randomNum *= numOfChoices;
  randomNum = Math.floor(randomNum);
  finalChoice = emotionResponses[randomNum];

  if (synonym !== "")
  {
    finalChoice = finalChoice.replace("%w%", synonym);
  } else {

    if (finalChoice.indexOf("%w%") == 0)
    {
      finalChoice = finalChoice.replace("%w%", "This");
    } else {
      finalChoice = finalChoice.replace("%w%", "this");
    }
  }

  return finalChoice;
};
