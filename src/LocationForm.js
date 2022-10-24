import {useState, useEffect} from 'react';

export default function LocationForm(props) {

    const [location, setLocation] = useState('Perth');


    function handleChange(event) {
        setLocation(event.target.value)
        console.log(location);
    };
    
    function handleSubmit(event) {
        event.preventDefault();
        setLocation(event.target.value);
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>
            Location:
            <input type="text" value={location} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit" />
          
        </form>
        );
    };