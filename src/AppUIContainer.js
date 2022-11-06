import UITopSection from './UITopSection';
import ContactMeHeader from './ContactMeHeader';
import UILocationSearch from './UILocationSearch';
import UICurrentWeatherInfo from './UICurrentWeatherInfo';

export default function AppUIContainer({setLocationName, processedCurrentWeatherData, threeHDDailySummaries}) {
  let todayMinAndMax = null;

  if (threeHDDailySummaries) { 
    todayMinAndMax = threeHDDailySummaries[0].MinAndMaxTemp
}

const createUITopSection = () => {
  return <UITopSection processedCurrentWeatherData={processedCurrentWeatherData} todayMinAndMax={todayMinAndMax} />;
}

    return (
      <div>
        {processedCurrentWeatherData && todayMinAndMax? createUITopSection() : null}
        <div> 
          <ContactMeHeader /> 
        </div>
        <div>
          <UILocationSearch setLocationName={setLocationName}/>
        </div>
        <UICurrentWeatherInfo processedCurrentWeatherData={processedCurrentWeatherData} />

      </div>

    );

    };