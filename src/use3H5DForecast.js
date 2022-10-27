import { useState, useEffect } from 'react';
//A custom hook

export default function use3H5DForecast(longitude, latitude) {
  const [stored3H5DWeatherData, setStored3H5DWeatherData] = useState(null);

  //modify below useEffect function to fetch required 3H5D data
    useEffect(() => {
console.log('in new', longitude, latitude);
/*
        fetch(`api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=` + `b1ab53cd687ca486f76e739d8fc1a32b`)
        .then(response => response.json())
        .then(data => {setStored3H5DWeatherData(data);
        //console.log('tester in use3...', stored3H5DWeatherData, data)
      })
        .catch((error) => console.log(error));
      });

      */

      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=` + `b1ab53cd687ca486f76e739d8fc1a32b`)
      .then(response => console.log('here', response.json()))
      //.then(data => {setStored3H5DWeatherData(data);
      //console.log('tester in use3...', stored3H5DWeatherData, data)
    })
    

    return stored3H5DWeatherData;
    };