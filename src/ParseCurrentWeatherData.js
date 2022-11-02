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



  useEffect(() => {
    if (currentWeatherData) {  
      let dateOriginalForm = new Date(currentWeatherData.dt * 1000);
      getDateAtLocation(dateOriginalForm);
      getTimeAtTargetLocation(dateOriginalForm);
    }
  });
}