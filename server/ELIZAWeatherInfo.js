weatherInfo = function (msg) {
  var time = "present";
  var weatherRegexp = /(weather|temperature).*in (\w+)/i;
  var timeRegexp = /will|tomorrow/ig;
  var weatherRequest = msg.match(weatherRegexp);

  if (weatherRequest === null) {
    return "";
  } else {

    if (msg.match(timeRegexp) !== null) {
      time = "future";
    }

    var lastArrayPosition = weatherRequest.length - 1;
    var targetCity = weatherRequest[lastArrayPosition];


    var APIKey = "addbc77a53b24fbcc357b91922364320";

    var wtInfoURL;

    if (time === "present") {
      wtInfoURL = "http://api.openweathermap.org/data/2.5/weather?APPID=" + APIKey + "&q=" + targetCity + "&units=metric";
    } else {
      wtInfoURL = "http://api.openweathermap.org/data/2.5/forecast?APPID=" + APIKey + "&q=" + targetCity + "&units=metric&cnt=24";
    }

    try {

      var wtData = HTTP.get(wtInfoURL);

      wtData = wtData.data;

      if (time === "present") {
        var wtDataMsg = "It's " + wtData.weather[0].description + ", and the current temperature is " + wtData.main.temp + " C. ";

        wtDataMsg += "The maximum temperature today is " + wtData.main.temp_max + " C., and the lowest temperature is " + wtData.main.temp_min + " C. ";
        wtDataMsg += "The wind speed is " + wtData.wind.speed + " m/s.";
      } else {
        wtData = wtData.list[23];

        var wtDataMsg = "It's " + wtData.weather[0].description + " tomorrow, and the expected temperature is " + wtData.main.temp + " C. ";

        wtDataMsg += "The maximum temperature tomorrow will be " + wtData.main.temp_max + " C., and the lowest temperature will be " + wtData.main.temp_min + " C. ";
        wtDataMsg += "The wind speed will be " + wtData.wind.speed + " m/s.";
      }

      return wtDataMsg;

    } catch (e) {

      if (e.response.data.cod == 404) {
        return "Sorry, I don't know this city.";
      } else {
        return "Sorry, but there's an Internet connection issue.";
      }
    }
  }
}
