import {useState, useEffect} from 'react';
import use3H5DForecast from './use3H5DForecast';
import * as dataHandling from './dataHandling3H5DModule'

export default function Parse3H5D(props) {
//will take the original full 3h5d json object as a prop
const [separated3HDailyData, setSeparated3HDailyData] = useState(null);


  useEffect(() => {
    if (props.threeH5DData) {  setSeparated3HDailyData(dataHandling.separate3H5DDataToDays(props.threeH5DData))
      //continue here
    }

  });


}