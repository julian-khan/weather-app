import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

import LocationForm from './LocationForm';
import GetLongAndLat from './GetLongAndLat';
import GetCurrentWeatherData from './GetCurrentWeatherData';
import use3H5DForecast from './use3H5DForecast';


function App() {

  const [locationName, setLocationName] = useState('Perth');

  const [longitude, setLongitude] = useState(115.857048);
  const [latitude, setLatitude] = useState(-31.953512);

  const [currentWeatherData, setCurrentWeatherData] = useState(null);

  const retrieved3H5DWeatherData = use3H5DForecast(longitude, latitude);

  console.log('retrieved from custom hook', retrieved3H5DWeatherData)
    

  return (

    <div>
       <LocationForm locationName = {locationName} setLocationName={setLocationName}/>
       <GetLongAndLat locationName={locationName} setLongitude={setLongitude} setLatitude={setLatitude}/>
       <GetCurrentWeatherData longitude={longitude} latitude={latitude} setWeather = {setCurrentWeatherData} />

    </div>
  );
};

export default App;
