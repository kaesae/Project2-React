import { useState } from "react";

const ChangeCountryForm = ({newCountry}) => {
    const [value, setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
        }
        const handleSubmit = (event) => {
            event.preventDefault();
            newCountry.filterReceipts(value);
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