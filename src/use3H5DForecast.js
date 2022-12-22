import { useState, useEffect } from "react";

export default function use3H5DForecast(longitude, latitude, units) {
  const [stored3H5DWeatherData, setStored3H5DWeatherData] = useState(null);

  useEffect(() => {
    if (longitude && latitude && units) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=b1ab53cd687ca486f76e739d8fc1a32b&units=${units}`
      )
        .then((response) => response.json())
        .then((data) => setStored3H5DWeatherData(data));
    }
  }, [longitude, latitude, units]);
  return stored3H5DWeatherData;
}
