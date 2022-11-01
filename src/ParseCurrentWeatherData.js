import {useState, useEffect} from 'react';

export default function ParseCurrentWeatherData({currentWeatherData}) {

//const [summaries3H5D, setSummaries3H5D] = useState(null);
console.log('currentweather...', currentWeatherData);

const getCurrentDateAndTime = () => {

  //finish this function's logic so that time automatically updates whenever a minute passes. Do not display seconds.

let currentDate = new Date(currentWeatherData.dt * 1000);
// Hours part from the timestamp
let hours = currentDate.getHours();
// Minutes part from the timestamp
let minutes = "0" + currentDate.getMinutes();
// Seconds part from the timestamp
let seconds = "0" + currentDate.getSeconds();
}

  useEffect(() => {
    if (currentWeatherData) {  
    }
  });
}