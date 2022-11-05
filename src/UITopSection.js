import {useState, useEffect} from 'react';

export default function UITopSection({processedCurrentWeatherData, todayMinAndMax}) {
  /* The weather icons used are from Wikimedia Commons:
  https://commons.wikimedia.org/wiki/Category:Weather_icons 
  */

    return (
      <div>
        <div>{processedCurrentWeatherData.name}</div> // Add weather image depending on weather inline with city name
        <div>
          Today: {processedCurrentWeatherData.weather[0].main}
        </div>

        <div>
          <span>Min: {todayMinAndMax[0]}</span>
          <span>Max: {todayMinAndMax[1]}</span>
        </div>




      </div>
    );

    };