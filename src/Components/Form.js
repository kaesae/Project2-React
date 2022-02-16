import { useState } from "react";

const ChangeCountryForm = (props) => {
    const [value, setValue] = useState("");

    // const baseCasesUrl = "https://covid-api.mmediagroup.fr/v1/cases?country=US"
    // const baseVaccinatedUrl = "https://covid-api.mmediagroup.fr/v1/vaccines?country=US"
      

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const newCasesUrl = `https://covid-api.mmediagroup.fr/v1/cases?country=${value}`;
    //     const newVaccinatedUrl = `https://covid-api.mmediagroup.fr/v1/vaccines?country=${value}`;
    //     // console.log(value)
    //     fetch(newCasesUrl)
    //     .then((response) => response.json())
    //         .then((data) => setDisplayCases(data))
    //         .catch(() => console.log("oops error cases"));
    //     fetch(newVaccinatedUrl)
    //         .then((response) => response.json())
    //         .then((data) => setDisplayCases(data))
    //         .catch(() => console.log("oops error vaccinated"));
    // };


    // create a form that passes the value inputted
    // into the API's new URL
    // which then fetches the Data
    // and updates the state

    const handleChange = (event) => {
    setValue(event.target.value);
    };

    //what do we change props to? maybe nothing
    const handleSubmit = (event) => {
        event.preventDefault();
        props.somethingELSEhere(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="Search by country" onChange={handleChange} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default ChangeCountryForm;

//set value when user types in form
//search for that value in a receipt
//reset the form
//show all