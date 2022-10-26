import React, {Component} from 'react';

class GetWeatherData extends Component {
  constructor(props) {
    super(props);
    this.getWeatherData = this.getWeatherData.bind(this);
   }

  getWeatherData() { 
    //Need to secure API key with backend when implement it
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + this.props.latitude + '&lon=' + this.props.longitude + '&appid=' + 
    'b1ab53cd687ca486f76e739d8fc1a32b')
    .then(response => response.json())
    .then(data => {this.props.setWeather(data)
    console.log('fetching', )});
    }

   componentDidUpdate(prevProps) {
    if (this.props.longitude !== prevProps.longitude) { 
    this.getWeatherData();
    }
    }

  render() {
    //change so that this button is rendered by a UI component, not this fetch component (single responsibility principle)
    return <button className='refresh-button' onClick={this.getWeatherData}>Refresh </button>
  };

};

export default GetWeatherData;
