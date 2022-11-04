import {useState, useEffect, useRef} from 'react';

export default function LocationForm({locationName, setLocationName}) {
    const [formValue, setFormValue] = useState('Perth');
//change the value of the form to be passed in as a prop (do not keep the state in this component)

    function handleChange(event) {
        setFormValue(event.target.value);
    };
    
    function handleSubmit(event) {
        event.preventDefault();
        setLocationName(formValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
            Location:
            <input type="text" value={formValue} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    };