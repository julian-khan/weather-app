import {useState, useEffect} from 'react';

export default function GetLongAndLat(props) {

    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=` + props.locationName + `&limit=1&appid=` + 
        `b1ab53cd687ca486f76e739d8fc1a32b`)
        .then(response => response.json())
        .then(data => {
            props.setLongitude(data[0].lon);
            props.setLatitude(data[0].lat);
            //console.log(longitude) //fix bug here, lat and long updating twice
        })
      });

    return 

    };