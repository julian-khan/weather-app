import './App.css';
import {useState} from 'react';

//Data fetching and processing components
import GetLongAndLat from './GetLongAndLat';
import GetCurrentWeatherData from './GetCurrentWeatherData';
import use3H5DForecast from './use3H5DForecast';
import Parse3H5D from './Parse3H5D';
import ParseCurrentWeatherData from './ParseCurrentWeatherData';

//UI components
import UIAppContainer from './UIAppContainer';

function App() {
  const [viewMode, setViewMode] = useState('light')
  
  const [units, setUnits] = useState('metric'); // implement a button to toggle units (deg C and deg F)

  const [locationName, setLocationName] = useState('Perth');

  const [longitude, setLongitude] = useState(115.857048);
  const [latitude, setLatitude] = useState(-31.953512);
//combine longitude and latitude into one state variable - an array or standard object

  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [processedCurrentWeatherData, setProcessedCurrentWeatherData] = useState(null);


  const threeH5DData = use3H5DForecast(longitude, latitude, units);
  const [threeHDDailySummaries, setThreeHDDailySummaries] = useState(null);

  
  return (
    <div className={viewMode}>
  
      <GetLongAndLat locationName={locationName} setLongitude={setLongitude} setLatitude={setLatitude}/>
      <GetCurrentWeatherData longitude={longitude} latitude={latitude} setWeather = {setCurrentWeatherData} />
      <ParseCurrentWeatherData currentWeatherData={currentWeatherData} setProcessedCurrentWeatherData={setProcessedCurrentWeatherData}/>
      <Parse3H5D threeH5DData={threeH5DData} setThreeHDDailySummaries={setThreeHDDailySummaries}/>

      <UIAppContainer 
      processedCurrentWeatherData={processedCurrentWeatherData} 
      threeHDDailySummaries={threeHDDailySummaries}
      setLocationName = {setLocationName} 
      units = {units}
      viewMode={viewMode}
      setViewMode = {setViewMode}
      />

    </div>
  );
};

export default App;
