import UITopSection from './UITopSection';
import ContactMeHeader from './ContactMeHeader';
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
          <ContactMeHeader /> 
          {processedCurrentWeatherData && todayMinAndMax? createUITopSection() : null}
          <div> 
            
          </div>
          <div>
            <UILocationSearch setLocationName={setLocationName}/>
          </div>
          <UICurrentWeatherInfo processedCurrentWeatherData={processedCurrentWeatherData} units={units} todayMinAndMax={todayMinAndMax}/>
          <UITodayWeatherInfoGrid processedCurrentWeatherData={processedCurrentWeatherData} units={units}/>


          <UIFiveDayForecast threeHDDailySummaries={threeHDDailySummaries} units={units}/>
        </div>
      );
  }
};