import {useState, useEffect} from 'react';
import * as dataHandling from './dataHandling3H5DModule'

export default function Parse3H5D(props) {
//will take the original full 3h5d json object as a prop
const [summaries3H5D, setSummaries3H5D] = useState(null);

function getSummaries3H5D(separated3H5D) {
  let summarisedDay3H = [];

  for (let i = 0; i <= separated3H5D.length - 1; i++) {
    let dayListOutput = {};
    dayListOutput.dayNumber = i+1;

    const dayForData = separated3H5D[i];

    const weatherDescCount = dataHandling.getDailyWeatherDescriptions(dayForData);
    const mostCommonWeather = dataHandling.getMostCommonWeatherDescription(weatherDescCount);
    dayListOutput.weather = mostCommonWeather;

    const dailyTempArray = dataHandling.getDailyTempArray(dayForData);
    const MinAndMaxTemp = dataHandling.getMinAndMaxTemp(dailyTempArray);
    console.log(MinAndMaxTemp);
    dayListOutput.MinAndMaxTemp = MinAndMaxTemp;

    summarisedDay3H.push(dayListOutput);
}
return summarisedDay3H;
}

  useEffect(() => {
    if (props.threeH5DData) {  
      const separated3H5D = dataHandling.separate3H5DDataToDays(props.threeH5DData);
      const summaryOutput = getSummaries3H5D(separated3H5D);
      setSummaries3H5D(summaryOutput);
    }
  }, [props.threeH5DData]);
}