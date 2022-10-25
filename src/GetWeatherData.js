import React, {Component} from 'react';

class GetWeatherData extends Component {
  constructor(props) {
    super(props);
    this.state = {longitude: '', latitude: '', weatherData: ''};
    //this.getWeatherData = this.getWeatherData.bind(this);
   }

   componentDidMount() {
    function getWeatherData() { 
      //fix this so that it responds to result of getlongandlat.js. Need to also secure API key with backend when implement it
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=-31.9558964&lon=115.8605801&appid=' + 
    'b1ab53cd687ca486f76e739d8fc1a32b')
    .then(response => response.json())
    .then(data => this.setState({weatherData: data}))
  }

  getWeatherData();
  console.log(weatherData);
   
   };

  render() {
    console.log('hi');
    return
  };

};

export default GetWeatherData;
