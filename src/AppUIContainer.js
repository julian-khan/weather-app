import UITopSection from './UITopSection';
import LocationForm from './LocationForm';

export default function AppUIContainer({setLocationName, processedCurrentWeatherData, threeHDDailySummaries}) {

    return (
      <div>
        <div>A Weather App</div>
        <div>
          <LocationForm setLocationName={setLocationName}/>
        </div>
       <UITopSection processedCurrentWeatherData={processedCurrentWeatherData} todayMinAndMax = {threeHDDailySummaries[0].MinAndMaxTemp}/>
      </div>

    );

    };