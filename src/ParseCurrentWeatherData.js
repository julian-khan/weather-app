import {useState, useEffect} from 'react';

export default function ParseCurrentWeatherData({currentWeatherData}) {
  let [dateAtTargetLocation, setDateAtTargetLocation] = useState(null);

  const getDateAtLocation = (dateObj) => {

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  setDateAtTargetLocation(dateObj.toLocaleDateString("en-US", options));
  }

  const getTimeAtTargetLocation = () => {
    
  }





  useEffect(() => {
    if (currentWeatherData) {  
      let dateOriginalForm = new Date(currentWeatherData.dt * 1000);
      getDateAtLocation(dateOriginalForm);
      getTimeAtTargetLocation(dateOriginalForm);
    }
  });
}