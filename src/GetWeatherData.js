import React, {Component} from 'react';

class GetWeatherData extends Component {
  constructor(props) {
    super(props);
    this.state = {weatherData: ''};
    this.getWeatherData = this.getWeatherData.bind(this);
   }

  getWeatherData () { 
      //fix this so that it responds to result of getlongandlat.js. Need to also secure API key with backend when implement it
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=' + 
    'b1ab53cd687ca486f76e739d8fc1a32b')
    .then(response => response.json())
    .then(data => this.setState({weatherData: data}))
    
  }

  render() {
    return
  };

};

export default GetWeatherData;
