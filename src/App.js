import './App.css';
import {useState, useEffect} from 'react';

//Data fetching and processing custom hooks
import useCurrentWeatherData from './useCurrentWeatherData';
import useParse3H5D from './useParse3H5D';
import use3H5DForecast from './use3H5DForecast';

//UI components
import UIAppContainer from './UIAppContainer';

function App() {
  const [viewMode, setViewMode] = useState('light')
  const [units, setUnits] = useState('metric');
  const [locationName, setLocationName] = useState('Perth');

  const [longitude, setLongitude] = useState(115.857048);
  const [latitude, setLatitude] = useState(-31.953512);

  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [processedCurrentWeatherData, setProcessedCurrentWeatherData] = useState(null);

  const threeH5DData = use3H5DForecast(longitude, latitude, units);
  const [threeHDDailySummaries, setThreeHDDailySummaries] = useState(null);

  function useLongAndLat() {
    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=` + locationName + `&limit=1&appid=` + 
        `b1ab53cd687ca486f76e739d8fc1a32b`)
        .then(response => response.json())
        .then(data => {
            setLongitude(data[0].lon);
            setLatitude(data[0].lat);
          })
      });
    return 
    };

  function useRetrieveCurrentWeatherData() {
    useEffect(() => { 
      //Need to secure API key with backend when implement it
      fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + 
      'b1ab53cd687ca486f76e739d8fc1a32b' + '&units=' + units)
      .then(response => response.json())
      .then(data => {setCurrentWeatherData(data)});
      }, [latitude, longitude, units])
    }

    useLongAndLat()
    useRetrieveCurrentWeatherData()
    useCurrentWeatherData(currentWeatherData, setProcessedCurrentWeatherData)
    useParse3H5D(processedCurrentWeatherData, threeH5DData, setThreeHDDailySummaries)

  return (
    <div className={viewMode}> 
      <UIAppContainer 
      processedCurrentWeatherData={processedCurrentWeatherData} 
      threeHDDailySummaries={threeHDDailySummaries}
      setLocationName = {setLocationName} 
      units = {units}
      setUnits={setUnits}
      viewMode={viewMode}
      setViewMode = {setViewMode}
      />
    </div>
  );
};
export default App;
