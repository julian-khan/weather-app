import {useState, useEffect} from 'react';

export default function ParseCurrentWeatherData({currentWeatherData}) {
  let [dateAtTargetLocation, setDateAtTargetLocation] = useState(null);
  let [timeAtTargetLocation, setTimeAtTargetLocation] = useState(null);

  const getDateAtLocation = (dateObj) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setDateAtTargetLocation(dateObj.toLocaleDateString("en-US", options)); //change to "en-GB"
    }

  const getTimeAtTargetLocation = (dateObj) => {
    const options = {hour12: 'true', hour: 'numeric', minute: 'numeric'}
    setTimeAtTargetLocation(dateObj.toLocaleString('en-GB', options))    
  }

const handleCurrentWeatherCompiling = (currentWeatherData) => {
/* This function is passed the raw current weather data and modifies the compiledCurrentWeatherInfo
  object contained within its function scope, to be passed as a prop to UI elements. */

  let compiledCurrentWeatherInfo = {};
  compileCurrentWeatherInfo(currentWeatherData, compiledCurrentWeatherInfo);
  console.log('see if it worked', compiledCurrentWeatherInfo)
  // det the function works and then set state with it. NOTE: the error is in the line
  // compiledCurrentWeatherInfo[arrayData[i][0]] = arrayData[i][1] when try to add 'temp' to dict
}

  const compileCurrentWeatherInfo = (currentWeatherObj, compiledCurrentWeatherInfo) => {
    // This function will recursively iterate through the current weather prop (depth-first
    // search), pushing the required properties and their values to a new object to be returned.

    const isObject = (value) => {
      return value && typeof value === "object" && !Array.isArray(value);
    };

    const keysToPush = ['weather', 'wind', 'name', 'clouds', 'description', 'temp', 
    'visibility', 'feels_like', 'humidity', 'clouds', 'dt', 'sunrise', 'sunset']

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
      let dateOriginalForm = new Date(currentWeatherData.dt * 1000);
      getDateAtLocation(dateOriginalForm);
      getTimeAtTargetLocation(dateOriginalForm);

      handleCurrentWeatherCompiling(currentWeatherData);
      
    }
  });
}