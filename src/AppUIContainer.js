import {useState, useEffect} from 'react';
import UITopSection from './UITopSection';

export default function AppUIContainer({processedCurrentWeatherData}) {

    return (
      <div>
        <div>A Weather App</div>
       <UITopSection processedCurrentWeatherData={processedCurrentWeatherData}/>
      </div>

    );

    };