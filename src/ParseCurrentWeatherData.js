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

 


  const compileCurrentWeatherInfo = (currentWeatherData) => {
    // This function will recursively iterate through the current weather prop (depth-first
    // search), pushing the required properties and their values to a new object to be returned.

    let currentWeatherInfo = {};

    const isObject = (value) => {
      return !!(value && typeof value === "object" && !Array.isArray(value));
    };

    const keysToPush = ['weather', 'wind', 'name', 'clouds', 'main', 'description', 'temp', 
    'visibility', 'feels_like', 'humidity', 'clouds', 'dt', 'sunrise', 'sunset']

    for (const prop in currentWeatherData) {
      if (!isObject(prop)) {
        console.log(prop)
        return
      }

      if (keysToPush.includes(`${prop}`)) {
        console.log(prop)
        currentWeatherInfo.prop = currentWeatherData.prop;
      }
    }
    console.log(currentWeatherInfo);


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