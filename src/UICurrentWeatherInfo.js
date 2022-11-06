import {getWeatherIcon} from './functions/getWeatherIcon';


export default function UICurrentWeatherInfo({processedCurrentWeatherData}) {

console.log(getWeatherIcon())



 

  if (processedCurrentWeatherData)  { return (
    <div>
      <div> 
      <span>{processedCurrentWeatherData.name}</span>
      <span>weather icon**</span>
    </div>
  <div>
    <span>Min: </span> <span>Max: </span>
  </div>
  </div>

  );
    };
    
  }