import {useState, useEffect} from 'react';

export default function LocationForm({setLocationName}) {
    const [formValue, setFormValue] = useState('Perth');



    function handleSubmit(event) {
        event.preventDefault();
        setLocationName(formValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
            Location:
            <input type="text" value={formValue} onChange={() => {}}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    };