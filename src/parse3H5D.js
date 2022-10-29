import {useState, useEffect} from 'react';
import * as dataHandling from './dataHandling3H5DModule'

export default function Parse3H5D({data3H5D}) {
//will take the original full 3h5d json object as a prop
const [separated3HDailyData, setSeparated3HDailyData] = useState(null);

const [day1Data, setDay1Data] = useState(null);
const [day2Data, setDay2Data] = useState(null);
const [day3Data, setDay3Data] = useState(null);
const [day4Data, setDay4Data] = useState(null);
const [day5Data, setDay5Data] = useState(null);

//keep the day1 to day5 data as objects

    useEffect(() => {
      console.log('props for 3h5d data handling', data3H5D);
     


          })

  return 
      };