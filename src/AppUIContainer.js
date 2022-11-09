import UITopSection from './UITopSection';
import ContactMeHeader from './ContactMeHeader';
import UILocationSearch from './UILocationSearch';
import UICurrentWeatherInfo from './UICurrentWeatherInfo';
import UITodayWeatherInfoGrid from './UITodayWeatherInfoGrid'

export default function AppUIContainer({setLocationName, processedCurrentWeatherData, threeHDDailySummaries, units}) {
  let todayMinAndMax = null;

  if (threeHDDailySummaries) { 
    todayMinAndMax = threeHDDailySummaries[0].MinAndMaxTemp
}

const createUITopSection = () => {
  return <UITopSection processedCurrentWeatherData={processedCurrentWeatherData} todayMinAndMax={todayMinAndMax} />;
}

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
        <UITodayWeatherInfoGrid />

      </div>

    );

    };