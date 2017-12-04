posIdentifier = function(msg, engLexicon)
{
  var msgWords = msg.split(" ");
  var msgWordsPOS = [];

  for (i = 0; i < msgWords.length; i++)
  {
    var cur = msgWords[i];
    var wordInfo = engLexicon.findOne({Word: cur});
    if (wordInfo !== undefined)
    {
        msgWordsPOS.push(wordInfo.POS);
    } else {
        msgWordsPOS.push("na");
    }
  }

  return msgWordsPOS;

};
