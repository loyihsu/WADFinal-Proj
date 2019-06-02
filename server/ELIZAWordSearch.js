wordSearch = function (msg, engLexicon) {
    var wordSearchResult = "";

    var wordSearchMatch = msg.match(/which (\w+).(verb|noun|adjective)/i);

    var number = 0;

    if (wordSearchMatch) {
        var allMatches;
        var wds = wordSearchMatch[1];

        if (wds.match(/\d/g)) {
            number = eval(wds);
        }

        if (msg.indexOf("verb") > -1) {
            allMatches = engLexicon.find({ POS: "verb" });
        } else if (msg.indexOf("noun") > -1) {
            allMatches = engLexicon.find({ POS: "noun" });
        } else if (msg.indexOf("adjective") > -1) {
            allMatches = engLexicon.find({ POS: "adjective" });
        }

        if (allMatches !== undefined) {
            allMatches = allMatches.fetch();

            if (allMatches.length <= number) {
                wordSearchResult = "Well... I don't know that much words!";
            } else if (number != 0) {
                wordSearchResult += "There you go: ";

                if (number >= 3) {
                    for (i = 0; i < number; i++) {
                        var randomNumber = Math.floor(Math.random() * allMatches.length);
                        wordSearchResult += allMatches[randomNumber].Word;

                        if (i <= number - 3) {
                            wordSearchResult += ", ";
                        } else if (i == number - 2) {
                            wordSearchResult += ", and "
                        } else if (i == number - 1) {
                            wordSearchResult += ".";
                        }
                    }
                } else if (number == 2) {
                    for (i = 0; i < number; i++) {
                        var randomNumber = Math.floor(Math.random() * allMatches.length);
                        wordSearchResult += allMatches[randomNumber].Word;

                        if (i == number - 2) {
                            wordSearchResult += " and "
                        } else if (i == number - 1) {
                            wordSearchResult += ".";
                        }
                    }
                } else if (number == 1) {
                    var randomNumber = Math.floor(Math.random() * allMatches.length);
                    wordSearchResult += allMatches[randomNumber].Word;

                    wordSearchResult += ".";
                }
            } else {
                wordSearchResult = "";
            }
        } else {
            wordSearchResult = "Sorry, I got nothing for you.";
        }
    }

    return wordSearchResult;
};

