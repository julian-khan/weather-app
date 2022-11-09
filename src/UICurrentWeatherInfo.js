import GetWeatherIcon from './GetWeatherIcon';
import capitaliseString from './functions/capitaliseString'

export default function UICurrentWeatherInfo({processedCurrentWeatherData, units, todayMinAndMax}) {

const formatUnits = (units) => {
  let outputStr = null;
  units === 'metric'? outputStr = ' °C' : outputStr = '°F';
  return outputStr;
};

  if (processedCurrentWeatherData && units && todayMinAndMax)  { 
    return (
    <div className='flex flex-col items-center'>
      <div className='flex'> 
      <span className='text-3xl px-3'>{processedCurrentWeatherData.name}</span>
      <span> <GetWeatherIcon processedCurrentWeatherData={processedCurrentWeatherData} />
      </span>
    </div>
    <div className='text-xl'>{capitaliseString(processedCurrentWeatherData.weather[0].description)}, {processedCurrentWeatherData.temp}{formatUnits(units)}</div>

  <div className='text-sm'>
    <span>Min: {todayMinAndMax[0]} {formatUnits(units)}</span> <span>Max: {todayMinAndMax[0]} {formatUnits(units)} </span>
  </div>
  </div>
  );
    };
  }