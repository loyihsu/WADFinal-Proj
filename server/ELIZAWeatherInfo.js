weatherInfo = function(msg)
{
    var time = "present";
    var weatherRegexp = /(weather|temperature).*in (\w+)/i;
    var timeRegexp = /will|tomorrow/ig;
    var weatherRequest = msg.match(weatherRegexp);

    if (weatherRequest === null)
    {
      return "";
    } else {

      if (msg.match(timeRegexp) !== null)
      {
          time = "future";
      }

      var lastArrayPosition = weatherRequest.length-1;
      var targetCity = weatherRequest[lastArrayPosition];

      var APIKey = "addbc77a53b24fbcc357b91922364320";

      var wtInfoURL;

      if (time === "present")
      {
        wtInfoURL = "http://api.openweathermap.org/data/2.5/weather?APPID="+APIKey+"&q="+targetCity+"&units=metric";
      } else {
        wtInfoURL = "http://api.openweathermap.org/data/2.5/forcast?APPID="+APIKey+"&q="+targetCity+"&units=metric&cnt=24";
      }

      HTTP.get(wtInfoURL, processWtData);
    }
}

var processWtData = function(error, result) {
  var wtData = result.data;
  if (error !== null)
  {
    if (wtData.cod == 404)
    {
      console.log("Sorry, I don't know this city.");
      return "Sorry, I don't know this city.";
    } else {
      return "Sorry, but there's an Internet connection issue.";
    }
  } else {
    var searchResult = "It's "+ wtData.weather[0].description + ",\nand the current temperature is "+wtData.main.temp+"C.\n";
    searchResult += "The maximum temperature today is "+ wtData.main.temp_max + "C.,\nand the lowest temperature is "+wtData.main.temp_min+"C.\n";
    searchResult += "The wind speed is " + wtData.wind.speed + " m/s.";
    console.log(searchResult);
    return searchResult;
  }
};
