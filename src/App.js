import './App.css';
import {useState, useEffect} from 'react';

//Data fetching and processing components
import GetCurrentWeatherData from './GetCurrentWeatherData';
import use3H5DForecast from './use3H5DForecast';
import Parse3H5D from './Parse3H5D';
import ParseCurrentWeatherData from './ParseCurrentWeatherData';

//UI components
import UIAppContainer from './UIAppContainer';

function App() {
  const [viewMode, setViewMode] = useState('light')
  const [units, setUnits] = useState('metric');
  const [locationName, setLocationName] = useState('Perth');

  const [longitude, setLongitude] = useState(115.857048);
  const [latitude, setLatitude] = useState(-31.953512);

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

    useLongAndLat()
//combine longitude and latitude into one state variable - an array or standard object

  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [processedCurrentWeatherData, setProcessedCurrentWeatherData] = useState(null);


  const threeH5DData = use3H5DForecast(longitude, latitude, units);
  const [threeHDDailySummaries, setThreeHDDailySummaries] = useState(null);

 //add this prop to parse3H5D: 
 // currentTemp={processedCurrentWeatherData.temp} 
 
  return (
    <div className={viewMode}>
      <GetCurrentWeatherData longitude={longitude} latitude={latitude} setWeather = {setCurrentWeatherData} units={units}/>
      <ParseCurrentWeatherData currentWeatherData={currentWeatherData} setProcessedCurrentWeatherData={setProcessedCurrentWeatherData}/>
      <Parse3H5D threeH5DData={threeH5DData} setThreeHDDailySummaries={setThreeHDDailySummaries} /> 

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
