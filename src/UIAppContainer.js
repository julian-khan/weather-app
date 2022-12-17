import UITopSection from './UITopSection';
import UIContactMeHeader from './UIContactMeHeader';
import UILocationSearch from './UILocationSearch';
import SettingsIcon from './weather-icons/icons/SettingsIcon';
import UICurrentWeatherInfo from './UICurrentWeatherInfo';
import UISectionHeading from './UISectionHeading';
import UITodayWeatherInfoGrid from './UITodayWeatherInfoGrid'
import UIFiveDayForecastGrid from './UIFiveDayForecastGrid';

export default function UIAppContainer({setLocationName, processedCurrentWeatherData, threeHDDailySummaries, units, setUnits, viewMode, setViewMode}) {
  let todayMinAndMax = null;

  if (threeHDDailySummaries) { 
    todayMinAndMax = threeHDDailySummaries[0].MinAndMaxTemp
}

  const createUITopSection = () => {
    return <UITopSection processedCurrentWeatherData={processedCurrentWeatherData} todayMinAndMax={todayMinAndMax} />;
  }

  if(setLocationName && processedCurrentWeatherData && threeHDDailySummaries && units) {
      return (
        <div className='min-w-[600px] bg-white dark:bg-slate-800'>
          <UIContactMeHeader viewMode={viewMode} setViewMode={setViewMode} units={units} setUnits={setUnits}/> 
          <div className='flex justify-end'> 
          </div>
          {processedCurrentWeatherData && todayMinAndMax? createUITopSection() : null}
          <div className='flex items-center'>
            <UILocationSearch setLocationName={setLocationName}/>
          </div>
          <UICurrentWeatherInfo processedCurrentWeatherData={processedCurrentWeatherData} units={units} todayMinAndMax={todayMinAndMax}/>
          <UISectionHeading headingName={'Currently:'}/>
          <UITodayWeatherInfoGrid processedCurrentWeatherData={processedCurrentWeatherData} units={units}/>
          <UISectionHeading headingName={'Five-day forecast:'} />
          <UIFiveDayForecastGrid threeHDDailySummaries={threeHDDailySummaries} units={units}/>
        </div>
      );
  }
};