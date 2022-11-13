import ClearDay from './weather-icons/icons/ClearDay';
import CloudsDay from './weather-icons/icons/CloudsDay';
import ManyClouds from './weather-icons/icons/ManyClouds';
import ShowersDay from './weather-icons/icons/ShowersDay';
import Snow from './weather-icons/icons/Snow';
import {ErrorNotFound} from './weather-icons/icons/ErrorNotFound';

export default function DailySummary5D({daySummary, units}) {

  const getWeatherIcon = (daySummary) => {
    const weatherDesc = daySummary.weather;
    const visibility = daySummary.averageVisibility;
    const VisibilityCutoff = 8000; // This value for the visibility cutoff is arbitrary.

    if (weatherDesc === 'Clear') {
      return <ClearDay />
    } else if (weatherDesc === 'Clouds' && visibility > VisibilityCutoff) {
      return <CloudsDay />
    } else if (weatherDesc === 'Clouds' && visibility < VisibilityCutoff) {
      return <ManyClouds />
    } else if (weatherDesc === 'Rain') {
      return <ShowersDay />
    } else if (weatherDesc === 'Snow') { 
      return <Snow />
    } else return <ErrorNotFound />
  };

  return (
    <div>
      <div>
        {daySummary.dayOfWeek}
      </div>
      <div>
       {getWeatherIcon(daySummary)}
      </div>
      <div>
        {daySummary.MinAndMaxTemp[0]}
      </div>
      <div>
      {daySummary.MinAndMaxTemp[1]}
      </div>
    </div>
  );
    };