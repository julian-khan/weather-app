import GetWeatherIcon from './GetWeatherIcon';


export default function UICurrentWeatherInfo({processedCurrentWeatherData, units}) {

const formatUnits = (units) => {
  let outputStr = null;
  units === 'metric'? outputStr = ' °C' : outputStr = '°F';
  return outputStr;
};

  if (processedCurrentWeatherData)  { return (
    <div>
      <div> 
      <span>{processedCurrentWeatherData.name}</span>
      <span> <GetWeatherIcon processedCurrentWeatherData={processedCurrentWeatherData} />
      </span>
    </div>
    <div>{processedCurrentWeatherData.temp}; </div>


  <div>
    <span>Min: {formatUnits(units)}</span> <span>Max: {formatUnits(units)} </span>
  </div>
  </div>

  );
    };
    
  }