import UITopSection from './UITopSection';
import LocationForm from './LocationForm';

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
        <div>A Weather App</div>
        <div> Contact me: //Insert email and linkedin icons and implement required logic</div>
        <div>
          <LocationForm setLocationName={setLocationName}/>
        </div>
       {processedCurrentWeatherData && todayMinAndMax? createUITopSection() : null}
       
      </div>

    );

    };