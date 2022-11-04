import {useState} from 'react';

export default function LocationForm({setLocationName}) {
    const [formValue, setFormValue] = useState('Perth');

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