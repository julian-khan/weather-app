import GetWeatherIcon from './functions/GetWeatherIcon';


export default function UICurrentWeatherInfo({processedCurrentWeatherData}) {

if (processedCurrentWeatherData) {  
  GetWeatherIcon(processedCurrentWeatherData)
}



 

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