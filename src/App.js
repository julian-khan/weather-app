import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

import LocationForm from './LocationForm';


function App() {
  const [weatherData, setWeatherData] = useState(null);

  const [locationName, setLocationName] = useState('Perth!2!');

  //delete below func?
  const changeLocationName = (location) => {
    setLocationName(location);
  };


  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=' + 
    'b1ab53cd687ca486f76e739d8fc1a32b')
    .then(response => response.json())
    .then(data => setWeatherData(data))
  },[]);

  
  return (
    <div>
      
       <LocationForm changeLocationName={changeLocationName}/>
      {`Current weather: `}
    <form>
      <button>test</button>
    </form>
   
    </div>
  );
};

export default App;
