import {useState, useEffect} from 'react';

export default function LocationForm({changeLocationName}) {
    const [formValue, setFormValue] = useState('Perth');


    function handleChange(event) {
        setFormValue(event.target.value);
        console.log(formValue);
    };
    
    function handleSubmit(event) {
        event.preventDefault();
        changeLocationName(formValue);
        //event.target.value ? setFormValue(event.target.value) : setFormValue('');
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