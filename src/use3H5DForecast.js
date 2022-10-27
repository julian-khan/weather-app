import { useState, useEffect } from 'react';
//A custom hook

export default function use3H5DForecast(longitude, latitude, units) {
  const [scopedLongitude, setScopedLongitude] = useState(null);
  const [stored3H5DWeatherData, setStored3H5DWeatherData] = useState(null);

    useEffect(() => { 
      if (scopedLongitude !== longitude) { 
        //changed scopedlongitude to be scoped coordinates, pass in long and lat as an object

      setScopedLongitude(longitude);

      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=` 
      + `b1ab53cd687ca486f76e739d8fc1a32b` + `&units=${units}`)
      .then(response => response.json())
      .then(data => setStored3H5DWeatherData(data))
      .catch((error) => console.log(error));
    }
  });
  return stored3H5DWeatherData;
}