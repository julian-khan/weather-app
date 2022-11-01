import {useState, useEffect} from 'react';

export default function ParseCurrentWeatherData({currentWeatherData}) {
  let [dateAtTargetLocation, setDateAtTargetLocation] = useState(null);

  const getCurrentDate = () => {
  let dateOriginalForm = new Date(currentWeatherData.dt * 1000);
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  console.log(dateOriginalForm.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
  }



  useEffect(() => {
    if (currentWeatherData) {  
      getCurrentDate();
    }
  });
}