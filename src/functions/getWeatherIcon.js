

export default function GetWeatherIcon (processedCurrentWeatherData) { //make this function generic so that it can be reused for 5-day daily components
  const currentDateTime = processedCurrentWeatherData.dt;
  const todaySunsetDateTime = processedCurrentWeatherData.sunset;
  const weatherDesc = processedCurrentWeatherData.weather[0].main;

  const isDay = (currentDt, sunsetDt) => {
    //Takes two Unix timestamps as arguments
    return currentDt < sunsetDt? true : false;
  }
  
   const weatherIconMapping = {
      clearDay: "src/weather-icons/icons/weather-clear.svg",
      clearNight: "src/weather-icons/icons/weather-clear-night.svg",
      cloudsDay: "src/weather-icons/icons/weather-clouds.svg",
      cloudsNight: "src/weather-icons/icons/weather-clouds-nights.svg",
      fewCloudsDay: "src/weather-icons/icons/weather-few-clouds.svg", 
      fewCloudsNight: "src/weather-icons/icons/weather-few-clouds-night.svg",
      freezingRain: "src/weather-icons/icons/weather-freezing-rain.svg",
      hail: "src/weather-icons/icons/weather-hail.svg",
      manyClouds: "src/weather-icons/icons/weather-many-clouds.svg",
      overcast: "src/weather-icons/icons/weather-overcast.svg",
      showersDay: "src/weather-icons/icons/weather-showers-day.svg",
      showersNight: "src/weather-icons/icons/weather-showers-night.svg",
      showers: "src/weather-icons/icons/weather-showers.svg",
      snow: "src/weather-icons/icons/weather-snow.svg",
      stormNight: "src/weather-icons/icons/weather-storm-night.svg",
      stormDay: "src/weather-icons/icons/weather-storm.svg"
    }

  if (isDay(currentDateTime, todaySunsetDateTime) && weatherDesc === 'Clear') {
    return
  } 

  return 

};


