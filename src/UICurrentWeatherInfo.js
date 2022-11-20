import GetWeatherIcon from './GetWeatherIcon';
import capitaliseString from './functions/capitaliseString'
import formatUnits from './functions/formatUnits';

export default function UICurrentWeatherInfo({processedCurrentWeatherData, units, todayMinAndMax}) {



  if (processedCurrentWeatherData && units && todayMinAndMax)  { 
    return (
    <div className='flex flex-col items-center my-8'>
      <div className='flex items-center'> 
      <span className='text-xl sm:text-4xl md:text-5xl px-3'>{processedCurrentWeatherData.name}</span>
      <span> <GetWeatherIcon processedCurrentWeatherData={processedCurrentWeatherData} />
      </span>
    </div>
    <div className='text-xl sm:text-2xl md:text-3xl'>{capitaliseString(processedCurrentWeatherData.weather[0].description)}, {processedCurrentWeatherData.temp}{formatUnits(units)}</div>

  <div className='text-md sm:text-xl md:text-2xl'>
    <span>Min: {todayMinAndMax[0]} {formatUnits(units)}</span> <span>Max: {todayMinAndMax[1]} {formatUnits(units)} </span>
  </div>
  </div>
  );
    };
  }