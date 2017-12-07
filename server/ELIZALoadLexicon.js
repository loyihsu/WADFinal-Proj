loadEngLexicon = function(engLexicon) {
  engLexicon.remove({});

  var lexiconList = Assets.getText("engLexicon_1000.csv");

  if (lexiconList.indexOf("\r\n")> -1)
  {
    lexiconList.replace(/\r\n/g, "\n");
  }

  lexiconList = lexiconList.split("\n");

  for (i = 0; i < lexiconList.length; i++)
  {
      lexiconList[i] = lexiconList[i].split(",");
  }
  var colNames = lexiconList[0];

  for (row = 1; row < lexiconList.length; row++)
  {
    var word = {};
    for (col = 0; col < lexiconList[row].length; col++)
    {
      var colName = colNames[col];
      word[colName] = lexiconList[row][col];
    }
    engLexicon.insert(word);
  }
};
