import React, {Component} from 'react';

class GetWeatherData extends Component {
  constructor(props) {
    super(props);

    this.state = {weatherData: ''};

    this.getWeatherData = this.getWeatherData.bind(this);
   }

  getWeatherData() { 
      //fix this so that it responds to result of getlongandlat.js. Need to also secure API key with backend when implement it

    console.log(this.props.longitude, this.props.latitude);

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + this.props.latitude + '&lon=' + this.props.longitude + '&appid=' + 
    'b1ab53cd687ca486f76e739d8fc1a32b')
    .then(response => response.json())
    .then(data => this.setState({weatherData: data}));
    }

   componentDidUpdate() {
    //this.getWeatherData();
   }

  render() {
    //change so that this button is rendered by a UI component, not this fetch component (single responsibility principle)
    return <button className='refresh-button' onClick={this.getWeatherData}>Refresh {console.log(this.state.weatherData)}</button>
  };

};

export default GetWeatherData;
