import GetWeatherIcon from './GetWeatherIcon';


export default function UICurrentWeatherInfo({processedCurrentWeatherData}) {

 

  if (processedCurrentWeatherData)  { return (
    <div>
      <div> 
      <span>{processedCurrentWeatherData.name}</span>
      <span> <GetWeatherIcon processedCurrentWeatherData={processedCurrentWeatherData} />
      </span>
    </div>
  <div>
    <span>Min: </span> <span>Max: </span>
  </div>
  </div>

  );
    };
    
  }