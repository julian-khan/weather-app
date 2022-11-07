import CloudsDay from './weather-icons/icons/CloudsDay';


export default function GetWeatherIcon ({processedCurrentWeatherData}) { //make this function generic so that it can be reused for 5-day daily components

console.log('current weather', processedCurrentWeatherData)

  
  const currentDateTime = processedCurrentWeatherData.dt;
  const todaySunsetDateTime = processedCurrentWeatherData.sunset;
  const weatherDesc = processedCurrentWeatherData.weather[0].main;

  const isDay = (currentDt, sunsetDt) => {
    //Takes two Unix timestamps as arguments
    return currentDt < sunsetDt? true : false;
  }

  console.log()
  
   const weatherIconMapping = {
      clearDay: "weather-clear.svg",
      clearNight: "weather-clear-night.svg",
      cloudsDay: "weather-clouds.svg",
      cloudsNight: "weather-clouds-nights.svg",
      fewCloudsDay: "weather-few-clouds.svg", 
      fewCloudsNight: "weather-few-clouds-night.svg",
      freezingRain: "weather-freezing-rain.svg",
      hail: "weather-hail.svg",
      manyClouds: "weather-many-clouds.svg",
      overcast: "weather-overcast.svg",
      showersDay: "weather-showers-day.svg",
      showersNight: "weather-showers-night.svg",
      showers: "weather-showers.svg",
      snow: "weather-snow.svg",
      stormNight: "weather-storm-night.svg",
      stormDay: "weather-storm.svg"
    }

    const iconDirectory = './weather-icons/icons/';

  
  if (isDay(currentDateTime, todaySunsetDateTime) && weatherDesc === 'Clear') {
    return <img src={'./weather-icons/icons/' + weatherIconMapping.clearDay} />
  } else if (isDay(currentDateTime, todaySunsetDateTime) && weatherDesc === 'Clouds') {
    return <CloudsDay />
  }



};


