import {useState, useEffect} from 'react';
import GetCurrentWeatherData from './GetCurrentWeatherData';

export default function UITopSection({processedCurrentWeatherData, todayMinAndMax}) {
  /* The weather icons used are from Wikimedia Commons:
  https://commons.wikimedia.org/wiki/Category:Weather_icons 
  */

  
    return (

      <div className='sm:text-center lg:text-left'>
          <h1 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline ">A weather app</span>
          </h1>
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
  }