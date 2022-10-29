import {useState, useEffect} from 'react';
import * from './dataHandling3H5DModule'

export default function parse3H5D(props) {
//will take the original full 3h5d json object as a prop
const [data3H5D, setdata3H5D] = useState(props);
const [separated3HDailyData, setSeparated3HDailyData] = useState(null);

const [day1Data, setDay1Data] = useState(null);
const [day2Data, setDay2Data] = useState(null);
const [day3Data, setDay3Data] = useState(null);
const [day4Data, setDay4Data] = useState(null);
const [day5Data, setDay5Data] = useState(null);

    useEffect(() => {
      console.log('data-handling 3H5D component re-rendering');
       


          })

  return 
      };