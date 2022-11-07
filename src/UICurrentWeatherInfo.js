import {getWeatherIcon} from './functions/getWeatherIcon';


export default function UICurrentWeatherInfo({processedCurrentWeatherData}) {

  console.log(processedCurrentWeatherData)
console.log('testing function', getWeatherIcon(processedCurrentWeatherData))



 

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