import {useState, useEffect} from 'react';
import UITopSection from './UITopSection';

export default function AppUIContainer({processedCurrentWeatherData}) {

    return (
      <div>
       <UITopSection processedCurrentWeatherData={processedCurrentWeatherData}/>
      </div>

    );

    };