import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import { react, useEffect, useState } from 'react'
import Footer from './Components/Footer';
import Header from './Components/Header';
import DisplayCases from './Components/DisplayCases';
import DisplayVaccinated from './Components/DisplayVaccinated';
import DisplayDeaths from './Components/DIsplayDeaths';
// import ChangeCountryForm from './Components/Form';

function App() {
  //States
  const [displayCases, setDisplayCases] = useState([])
  const [displayVaccinated, setDisplayVaccinated] = useState([])
  const [value, setValue] = useState("");


  //API URLs
  const casesUrl = "https://covid-api.mmediagroup.fr/v1/cases?country=US"
  const vaccinatedUrl = "https://covid-api.mmediagroup.fr/v1/vaccines?country=US"
  

  //Mounting / setting States of Cases and Vaccinated
  const getCases = () => {
    fetch(casesUrl)
      .then ((response) => response.json())
      .then ((data) => setDisplayCases(data))
      .catch (() => console.log("you're infected"))
  }

  useEffect (() => {
    getCases()
  }, [])

  const getVaccinated = () => {
    fetch(vaccinatedUrl)
      .then ((response) => response.json())
      .then ((data) => setDisplayVaccinated(data))
      .catch (() => console.log("you're unvaccinated"))
  }

  useEffect (() => {
    getVaccinated()
  }, [])


  //Form Change/Submit Functions/Events
  const handleChange = (event) => {
    setValue(event.target.value);
    };

    const newGetCases = () => {
      fetch(casesUrl)
        .then ((response) => response.json())
        .then ((data) => setDisplayCases(data))
        .catch (() => console.log("you're infected"))
    }

    const newGetVaccinated = () => {
      fetch(vaccinatedUrl)
        .then ((response) => response.json())
        .then ((data) => setDisplayVaccinated(data))
        .catch (() => console.log("you're unvaccinated"))
    }

  const handleSubmit = (event) => {
      event.preventDefault();
    //set url with interpolation
    //pass VALUE into URL
    const newCasesUrl = `https://covid-api.mmediagroup.fr/v1/cases?country=${value}`
    const newVaccinatedUrl = `https://covid-api.mmediagroup.fr/v1/vaccines?country=${value}`
  
    //make function run getVaccinated or a new version of it
    fetch(newCasesUrl)
    .then((response) => response.json())
    .then((data) => setDisplayCases(data))
    console.log(newCasesUrl)
    fetch(newVaccinatedUrl)
    .then((response) => response.json())
    .then((data) => setDisplayVaccinated(data))
  };


  return (
    <div className="App">
      <Header />

      <main>
        <h2 className='Location'>Location: {' '}
          {displayCases.All 
          ? displayCases.All.country 
        : ''}
        </h2>

        <div className='CovidStats'>
        <h2 className='Covid'>Covid-19 Statistics</h2>
        
          <DisplayCases displayCases={displayCases}/>

          <DisplayVaccinated displayVaccinated={displayVaccinated} />

            <DisplayDeaths displayCases={displayCases} />
          <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="Search by country" onChange={handleChange} />
            <input type="submit" value="Submit" />
        </form>

        </div>

        <Routes>
          <Route></Route>
        </Routes>
      </main>

      <Footer />
        
    </div>
  );
}

export default App;