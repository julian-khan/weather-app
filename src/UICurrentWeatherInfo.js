import GetWeatherIcon from './GetWeatherIcon';


export default function UICurrentWeatherInfo({processedCurrentWeatherData, units, todayMinAndMax}) {

const formatUnits = (units) => {
  let outputStr = null;
  units === 'metric'? outputStr = ' °C' : outputStr = '°F';
  return outputStr;
};

  if (processedCurrentWeatherData)  { return (
    <div>
      <div className='flex justify-center'> 
      <span className='text-3xl px-3'>{processedCurrentWeatherData.name}</span>
      <span> <GetWeatherIcon processedCurrentWeatherData={processedCurrentWeatherData} />
      </span>
    </div>
    <div>{processedCurrentWeatherData.temp}{formatUnits(units)}; </div>


  <div>
    <span>Min: {todayMinAndMax[0]} {formatUnits(units)}</span> <span>Max: {todayMinAndMax[0]} {formatUnits(units)} </span>
  </div>
  </div>

  );
    };
    
  }