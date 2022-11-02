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
  let compiledCurrentWeatherInfo = {};
  compileCurrentWeatherInfo(currentWeatherData, compileCurrentWeatherInfo);
}

  const compileCurrentWeatherInfo = (currentWeatherData) => {
    // This function will recursively iterate through the current weather prop (depth-first
    // search), pushing the required properties and their values to a new object to be returned.

    const isObject = (value) => {
      return value && typeof value === "object" && !Array.isArray(value);
    };

    const keysToPush = ['weather', 'wind', 'name', 'clouds', 'main', 'description', 'temp', 
    'visibility', 'feels_like', 'humidity', 'clouds', 'dt', 'sunrise', 'sunset']

    const arrayData = Object.entries(currentWeatherObj);

    for (let i = 0; i <= arrayData.length - 1; i++) {
      if (keysToPush.includes(arrayData[i][0])) {
        console.log('key included', arrayData[i][0])
        compiledCurrentWeatherInfo[arrayData[i][0]] = arrayData[i][1]
      }
      if (isObject(arrayData[i][1])) {
        compileCurrentWeatherInfo(arrayData[i][1])
      }
    }
  }

  useEffect(() => {
    if (currentWeatherData) {  
      let dateOriginalForm = new Date(currentWeatherData.dt * 1000);
      getDateAtLocation(dateOriginalForm);
      getTimeAtTargetLocation(dateOriginalForm);

      compileCurrentWeatherInfo(currentWeatherData);
    }
  });
}