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
    
  return (
    <div>
      
       <LocationForm setLocationName={setLocationName}/>
       <GetLongAndLat locationName={locationName} setLongitude={setLongitude} setLatitude={setLatitude}/>
       <GetWeatherData longitude={longitude} latitude={latitude} />

       {console.log('in app.js', longitude, latitude)}
  
    </div>
  );
};

export default App;
