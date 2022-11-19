import UITopSection from './UITopSection';
import UIContactMeHeader from './UIContactMeHeader';
import UILocationSearch from './UILocationSearch';
import UICurrentWeatherInfo from './UICurrentWeatherInfo';
import UISectionHeading from './UISectionHeading';
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
          <UISectionHeading headingName={'Currently:'} />
          <UITodayWeatherInfoGrid processedCurrentWeatherData={processedCurrentWeatherData} units={units}/>
          <UISectionHeading headingName={'Five-day forecast:'} />
          <UIFiveDayForecast threeHDDailySummaries={threeHDDailySummaries} units={units}/>
        </div>
      );
  }
};