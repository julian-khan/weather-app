import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

import LocationForm from './LocationForm';
import GetLongAndLat from './GetLongAndLat';


function App() {

  const [locationName, setLocationName] = useState('Perth');

  const changeLocationName = (location) => {
    setLocationName(location);
  };

  const [longitude, setLongitude] = useState(115.857048);
  const [latitude, setLatitude] = useState(-31.953512);


  /*
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {  //fix this so that it responds to result of getlongandlat.js
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=' + 
    'b1ab53cd687ca486f76e739d8fc1a32b')
    .then(response => response.json())
    .then(data => setWeatherData(data))
  },[]);
*/
  
  return (
    <div>
      
       <LocationForm setLocationName={setLocationName}/>
       <GetLongAndLat locationName={locationName} setLongitude={setLongitude} setLatitude={setLatitude}/>

       {console.log('in app.js', longitude, latitude)}
  
    </div>
  );
};

export default App;
