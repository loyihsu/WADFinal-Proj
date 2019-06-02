var commonJokes = [
  "tell me a joke", "something funny", "boring", "a joke", "laught", "funny", "another joke", "joke"
];

var jokeReply = [
  "Q:Why did the blond took her keyboard to the gynecologist? A: Because it was missing a period",
  "I told a chemistry joke. There was no reaction",
  "Two scientists walk into a bar. The first one said, Iwant a cup of H20.The second one follow in and said, I want a cup of H2O,too. He dies. "];

jokeResponse = function (msg) {
  var responseType = "";
  var upperCaseMsg = msg.toUpperCase();

  for (index = 0; index < commonJokes.length; index++) {

    var joke = commonJokes[index].toUpperCase();

    if (upperCaseMsg.indexOf(joke) > -1) {
      responseType = "jokes";
      console.log(responseType);
      break;
    }
  }

  if (responseType === "jokes") {
    var z = randomNum(jokeReply.length, 0);
    replyMsg = jokeReply[z];
    return replyMsg
  }
  else {
    return "";
  }
};
