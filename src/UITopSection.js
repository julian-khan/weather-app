import {useState, useEffect} from 'react';

export default function UITopSection({processedCurrentWeatherData, todayMinAndMax}) {
  
    return (
      <div>
        <div>{processedCurrentWeatherData.name}</div> // Add weather image depending on weather inline with city name
        <div>
          {processedCurrentWeatherData.weather[0].main}
        </div>


      </div>
    );

    };