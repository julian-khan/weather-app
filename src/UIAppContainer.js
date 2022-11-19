import UITopSection from './UITopSection';
import UIContactMeHeader from './UIContactMeHeader';
import UILocationSearch from './UILocationSearch';
import UICurrentWeatherInfo from './UICurrentWeatherInfo';
import UITodayWeatherInfoGrid from './UITodayWeatherInfoGrid'
import UIFiveDayForecast from './UIFiveDayForecast';

export default function UIAppContainer({setLocationName, processedCurrentWeatherData, threeHDDailySummaries, units}) {
  let todayMinAndMax = null;

  if (threeHDDailySummaries) { 
    todayMinAndMax = threeHDDailySummaries[0].MinAndMaxTemp
}

  const createUITopSection = () => {
    return <UITopSection processedCurrentWeatherData={processedCurrentWeatherData} todayMinAndMax={todayMinAndMax} />;
  }

  if(setLocationName && processedCurrentWeatherData && threeHDDailySummaries && units) {
      return (
        <div>
          <UIContactMeHeader /> 
          {processedCurrentWeatherData && todayMinAndMax? createUITopSection() : null}
          <div> 
            
          </div>
          <div>
            <UILocationSearch setLocationName={setLocationName}/>
          </div>
          <UICurrentWeatherInfo processedCurrentWeatherData={processedCurrentWeatherData} units={units} todayMinAndMax={todayMinAndMax}/>
          <div className='sm:text-center lg:text-left -mb-14'>
            <h2 className="text-center text-xl tracking-tight text-gray-900 sm:text-xl md:text-3xl">
              <span className="block py-8 ">Currently:</span>
            </h2>
          </div>    
          <UITodayWeatherInfoGrid processedCurrentWeatherData={processedCurrentWeatherData} units={units}/>


          <UIFiveDayForecast threeHDDailySummaries={threeHDDailySummaries} units={units}/>
        </div>
      );
  }
};