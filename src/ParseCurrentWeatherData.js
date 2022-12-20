import {useEffect} from 'react';
import getTimeAtTargetLocation from './functions/getTimeAtTargetLocation';

export default function ParseCurrentWeatherData({currentWeatherData, setProcessedCurrentWeatherData}) {
  
  const getDateAtLocation = (dateObj) => { //rename to indicate that the function is setting the date
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'};
    return dateObj.toLocaleDateString("en-US", options); //change to "en-GB"
    }
    
  const handleCurrentWeatherCompiling = (currentWeatherData) => {
  /* This function is passed the raw current weather data and modifies the compiledCurrentWeatherInfo
    object contained within its function scope, to be passed as a prop to UI elements. */
    let compiledCurrentWeatherInfo = {};
    compileCurrentWeatherInfo(currentWeatherData, compiledCurrentWeatherInfo);
    const timeAdjustmentms = currentWeatherData.timezone * 1000;

    let dateOriginalForm = new Date(Date.now() + timeAdjustmentms);
    compiledCurrentWeatherInfo['date'] = getDateAtLocation(dateOriginalForm);

    const parsedTime = getTimeAtTargetLocation(dateOriginalForm);
    compiledCurrentWeatherInfo['time'] = parsedTime;

      if (compiledCurrentWeatherInfo.hasOwnProperty('sunrise')) {
        const sunriseDate = new Date(compiledCurrentWeatherInfo.sunrise * 1000 + timeAdjustmentms);
        compiledCurrentWeatherInfo.sunriseFormatted = getTimeAtTargetLocation(sunriseDate);
      }

      if (compiledCurrentWeatherInfo.hasOwnProperty('sunset')) {
        const sunsetDate = new Date(compiledCurrentWeatherInfo.sunset * 1000 + timeAdjustmentms);
        compiledCurrentWeatherInfo.sunsetFormatted = getTimeAtTargetLocation(sunsetDate);
      }

      if (compiledCurrentWeatherInfo.hasOwnProperty('temp')) {
        compiledCurrentWeatherInfo.temp = compiledCurrentWeatherInfo.temp.toFixed(0);
      }

      if (compiledCurrentWeatherInfo.hasOwnProperty('feels_like')) {
        compiledCurrentWeatherInfo.feels_like = compiledCurrentWeatherInfo.feels_like.toFixed(0);
      }
    setProcessedCurrentWeatherData(compiledCurrentWeatherInfo);
  }

  const compileCurrentWeatherInfo = (currentWeatherObj, compiledCurrentWeatherInfo) => {
    // This function will recursively iterate through the current weather prop (depth-first
    // search), pushing the required properties and their values to a new object to be returned.

    const isObject = (value) => {
      return value && typeof value === "object" && !Array.isArray(value);
    };

    const keysToPush = ['weather', 'wind', 'name', 'clouds', 'description', 'temp', 
    'visibility', 'feels_like', 'humidity', 'clouds', 'timezone', 'dt', 'sunrise', 'sunset']

    const arrayData = Object.entries(currentWeatherObj);

    for (let i = 0; i <= arrayData.length - 1; i++) {
      if (keysToPush.includes(arrayData[i][0])) {
        compiledCurrentWeatherInfo[arrayData[i][0]] = arrayData[i][1]
      }
      if (isObject(arrayData[i][1])) {
        compileCurrentWeatherInfo(arrayData[i][1], compiledCurrentWeatherInfo)
      }
    }
    return 
  }

  useEffect(() => {
    if (currentWeatherData) {  
      handleCurrentWeatherCompiling(currentWeatherData);
    }
  }, [currentWeatherData]);
}