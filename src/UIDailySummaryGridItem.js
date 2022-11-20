import ClearDay from './weather-icons/icons/ClearDay';
import CloudsDay from './weather-icons/icons/CloudsDay';
import ManyClouds from './weather-icons/icons/ManyClouds';
import ShowersDay from './weather-icons/icons/ShowersDay';
import Snow from './weather-icons/icons/Snow';
import {ErrorNotFound} from './weather-icons/icons/ErrorNotFound';

import formatUnits from "./functions/formatUnits";

export default function UIDailySummaryGridItem({daySummary, units}) {

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
    } else if (weatherDesc === 'Rain' || weatherDesc === 'Drizzle') {
      return <ShowersDay />
    } else if (weatherDesc === 'Snow') { 
      return <Snow />
    } else return <ErrorNotFound />
  };

  return (
    <div className='flex justify-between items-center rounded-md border-zinc-400 border-4 my-1 py-1 px-3'>

      <div className='w-36'>
        {daySummary.dayOfWeek}
      </div>
      <div>
       {getWeatherIcon(daySummary)}
      </div>
      <div>
        Min: {daySummary.MinAndMaxTemp[0]} {formatUnits(units)}
      </div>
      <div>
      Max: {daySummary.MinAndMaxTemp[1]} {formatUnits(units)}
      </div>
    </div>
  );
    };