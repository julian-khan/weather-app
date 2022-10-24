import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

import LocationForm from './LocationForm';
import GetLongAndLat from './GetLongAndLat';


function App() {

  const [locationName, setLocationName] = useState('Perth!2!');

  const changeLocationName = (location) => {
    setLocationName(location);
  };


  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=' + 
    'b1ab53cd687ca486f76e739d8fc1a32b')
    .then(response => response.json())
    .then(data => setWeatherData(data))
  },[]);

  
  return (
    <div>
      
       <LocationForm changeLocationName={changeLocationName}/>
       <GetLongAndLat locationName={locationName} />
      {`Current weather: `}
  
    </div>
  );
};

export default App;
