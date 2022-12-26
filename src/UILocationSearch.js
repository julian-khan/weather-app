import { useState } from "react";

export default function LocationForm({ setLocationName }) {
  const [formValue, setFormValue] = useState("");
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setFormValue(event.target.value);
  }


  function isValidForm(event) {
    let errors = {};
    let formIsValid = true;

    if (!formValue) {
      formIsValid = false;
      errors["form-value"] = "Cannot be empty";
    } else if (typeof formValue !== "undefined" && !formValue.match(/^[a-zA-Z ]+$/)) {
      formIsValid = false;
      errors["form-value"] = "Only letters are permitted";
      } else if (formValue.length < 3) {
        formIsValid = false;
        errors["form-value"] = "Entered city name is too short";
      }
    setErrors(errors)
    return formIsValid
  }

  function formSubmit(event) {
    event.preventDefault();
    if (isValidForm(event)) {
      setLocationName(formValue);
      console.log('test, form is valid')
    } else {
      alert('Form has errors')
    }

  }

  return (
    <form
      onSubmit={formSubmit}
      className="mx-auto mt-6 mb-6 w-2/4 min-w-[450px] max-w-[800px]"
    >
      <label
        htmlFor="city-search"
        className="sr-only mb-2 text-sm font-medium dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="text"
          id="city-search"
          value={formValue}
          onChange={handleChange}
          className="text-md block
                w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 italic text-black focus:border-blue-500
                focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400
                dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search by entering the name of a city..."
          required=""
        />

        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 rounded-lg bg-sky-500 px-4 
                py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Search
        </button>
      </div>
    </form>
  );
}
