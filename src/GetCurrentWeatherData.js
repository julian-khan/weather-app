import React, {Component} from 'react';

class GetCurrentWeatherData extends Component {
  constructor(props) {
    super(props);
    this.GetCurrentWeatherData = this.GetCurrentWeatherData.bind(this);
   }

  GetCurrentWeatherData() { 
    //Need to secure API key with backend when implement it
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + this.props.latitude + '&lon=' + this.props.longitude + '&appid=' + 
    'b1ab53cd687ca486f76e739d8fc1a32b' + '&units=metric')
    .then(response => response.json())
    .then(data => {this.props.setWeather(data)
    console.log('fetching', )});
    }

   componentDidUpdate(prevProps) {
    if (this.props.longitude !== prevProps.longitude) { 
    this.GetCurrentWeatherData();
    }
    }

  render() {
    return 
  };

};

export default GetCurrentWeatherData;
