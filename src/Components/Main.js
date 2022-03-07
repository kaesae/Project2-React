import DisplayCases from './DisplayCases';
import DisplayVaccinated from './DisplayVaccinated';
import DisplayDeaths from './DisplayDeaths';
import { useEffect, useState } from 'react'

const Main = () => {
  const [displayCases, setDisplayCases] = useState([])
  const [displayVaccinated, setDisplayVaccinated] = useState([])
  const [value, setValue] = useState("");

  const casesUrl = "https://covid-api.mmediagroup.fr/v1/cases?country=US"
  const vaccinatedUrl = "https://covid-api.mmediagroup.fr/v1/vaccines?country=US"

  const getCases = () => {
    fetch(casesUrl)
      .then ((response) => response.json())
      .then ((data) => setDisplayCases(data))
  }

  useEffect (() => {
    getCases()
  }, [])

  const getVaccinated = () => {
    fetch(vaccinatedUrl)
      .then ((response) => response.json())
      .then ((data) => setDisplayVaccinated(data))
  }

  useEffect (() => {
    getVaccinated()
  }, [])


  const handleChange = (event) => {
    setValue(event.target.value);
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCasesUrl = `https://covid-api.mmediagroup.fr/v1/cases?country=${value}`
    const newVaccinatedUrl = `https://covid-api.mmediagroup.fr/v1/vaccines?country=${value}`
  
    fetch(newCasesUrl)
        .then((response) => response.json())
        .then((data) => setDisplayCases(data))

    fetch(newVaccinatedUrl)
        .then((response) => response.json())
        .then((data) => setDisplayVaccinated(data))
  };


    return(
      <main>
        <h2 className='Location'>📍Location: {' '}
            {displayCases.All 
            ? displayCases.All.country 
            : ''}
        </h2>

        <div className='CovidStats'>
            <h2 className='Covid'>Covid-19 Statistics</h2>
            
            <DisplayCases displayCases={displayCases} />
            <DisplayVaccinated displayVaccinated={displayVaccinated} />
            <DisplayDeaths displayCases={displayCases} />

            <form onSubmit={handleSubmit}>
                <input type="text" value={value} placeholder="Enter Zip Code" onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
      </main>
    )
}

export default Main;