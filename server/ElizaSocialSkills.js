var commonGreetings = [
  "Hello", "What's up?", "How are you"
];

var commonFarewells = [
  "Bye", "See you", "See ya", "Goodbye"
]

socialResponse = function(msg)
{
    var responseType = "";
    var upperCaseMsg = msg.toUpperCase();

    for (i = 0; i < commonGreetings.length; i++)
    {
      var greeting = commonGreetings[i].toUpperCase();
      if (upperCaseMsg.indexOf(greeting) > -1)
      {
        responseType = "greetings";
        break;
      }
    }

    for (i = 0; i < commonFarewells.length; i++)
    {
      var farewell = commonFarewells[i].toUpperCase();
      if (upperCaseMsg.indexOf(farewell) > -1)
      {
        responseType = "farewells";
        break;
      }
    }

    if(responseType === "greetings")
    {
      return "Hi, nice to meet you!"
    } else if (responseType === "farewells")
    {
      return "See you soon!"
    } else {
      return "";
    }
}
