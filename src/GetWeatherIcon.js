import ClearDay from './weather-icons/icons/ClearDay';
import ClearNight from './weather-icons/icons/ClearNight';
import CloudsDay from './weather-icons/icons/CloudsDay';
import CloudsNight from './weather-icons/icons/CloudsNight';
import ManyClouds from './weather-icons/icons/ManyClouds';
import Showers from './weather-icons/icons/Showers';
import ShowersNight from './weather-icons/icons/ShowersNight';
import Snow from './weather-icons/icons/Snow';
import Storm from './weather-icons/icons/Storm';



export default function GetWeatherIcon ({processedCurrentWeatherData}) { //make this function generic so that it can be reused for 5-day daily components

console.log('current weather', processedCurrentWeatherData)

  
  const currentDateTime = processedCurrentWeatherData.dt;
  const todaySunsetDateTime = processedCurrentWeatherData.sunset;
  const weatherDesc = processedCurrentWeatherData.weather[0].main;

  const isDay = (currentDt, sunsetDt) => {
    //Takes two Unix timestamps as arguments
    return currentDt < sunsetDt? true : false;
  }


  /*
  if (isDay(currentDateTime, todaySunsetDateTime) && weatherDesc === 'Clear') {
    return <img src={'./weather-icons/icons/' + weatherIconMapping.clearDay} />
  } else if (isDay(currentDateTime, todaySunsetDateTime) && weatherDesc === 'Clouds') {
    return <CloudsDay />
  }
*/
  return  ( 

  <div>  
    <ClearDay />
    <CloudsDay />
    <CloudsNight />
    <ClearNight />
    <ManyClouds/>
    <Showers />
    <ShowersNight />
    <Storm />
    <Snow />
   

  </div>
  );

};


