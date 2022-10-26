import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

import LocationForm from './LocationForm';
import GetLongAndLat from './GetLongAndLat';
import GetWeatherData from './GetWeatherData';


function App() {

  const [locationName, setLocationName] = useState('Perth');

  const [longitude, setLongitude] = useState(115.857048);
  const [latitude, setLatitude] = useState(-31.953512);

  const [weatherData, setWeatherData] = useState(null);
    

  return (
    <div>
       <LocationForm locationName = {locationName} setLocationName={setLocationName}/>
       <GetLongAndLat locationName={locationName} setLongitude={setLongitude} setLatitude={setLatitude}/>
       <GetWeatherData longitude={longitude} latitude={latitude} setWeather = {setWeatherData} />
       {console.log('test in app.js', weatherData)}
    </div>
  );
};

export default App;
