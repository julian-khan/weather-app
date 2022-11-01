import {useState, useEffect} from 'react';

export default function ParseCurrentWeatherData({currentWeatherData}) {
  let [dateAtTargetLocation, setDateAtTargetLocation] = useState(null);

  const getDateAtLocation = () => {
  let dateOriginalForm = new Date(currentWeatherData.dt * 1000);
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  setDateAtTargetLocation(dateOriginalForm.toLocaleDateString("en-US", options));
  }

  const getTimeAtTargetLocation = () => {
    
  }





  useEffect(() => {
    if (currentWeatherData) {  
      getDateAtLocation();
      getTimeAtTargetLocation();
    }
  });
}