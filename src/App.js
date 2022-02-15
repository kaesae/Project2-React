import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import { react, useEffect, useState } from 'react'
import ChangeCountryForm from './Components/Form';

function App() {
  const [displayCases, setDisplayCases] = useState([])
  const [displayVaccinated, setDisplayVaccinated] = useState([])



  const casesUrl = "https://covid-api.mmediagroup.fr/v1/cases?country=US"
  const vaccinatedUrl = "https://covid-api.mmediagroup.fr/v1/vaccines?country=US"
  





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

  // const getDeaths = () => {
  //   fetch(deathsUrl)
  //     .then ((response) => response.json())
  //     .then ((data) => setDisplayDeaths(data))
  //     .catch (() => console.log("you're dead"))
  // }

  // useEffect (() => {
  //   getDeaths()
  // }, [])


  // const getSelectedCountry = () = {
  // }

  // const handleStats = () => {
  //   setSelectedCountry();
  // }





  // Handle Change Location
  const handleChangeCountry = () => {
    
  }

  return (
    <div className="App">
      <header>
        <img src='https://tn.com.ar/resizer/aEeDGyIIhQse4rMvChv_RkbELsk=/1023x0/smart/filters:quality(60)/cloudfront-us-east-1.images.arcpublishing.com/artear/P3GH4U63HNAIRBLZMIPWZPZZEE.jpg'></img>
      </header>
      <main>
        <h2 className='Location'>Location: {' '}
          {displayCases.All 
          ? displayCases.All.country 
        : ''}
        </h2>

        <div className='CovidStats'>
        <h2 className='Covid'>Covid-19 Statistics</h2>
        
        <div className='Cases'>
          <h3>Cases</h3>
          <h6>
            {displayCases.All 
            ? displayCases.All.confirmed 
            : ''}
          </h6>
        </div>

        <div className='Vaccinated'>
          <h3>Vaccinated</h3>
          <h6>
            {displayVaccinated.All 
            ? displayVaccinated.All.administered 
            : ''}
          </h6>
        </div>

        <div className='Deaths'>
          <h3>Deaths</h3>
          <h6>
            {displayCases.All  
            ? displayCases.All.deaths 
            : ''}
          </h6>
        </div>
        </div>

        <Routes>
          <Route />
        </Routes>
      </main>

      <footer>
        <ChangeCountryForm />
      </footer>
    </div>
  );
}

export default App;

// Create useState and set it to all the countries

// set useState to display information of Cuba

// Add form to make it change countries

// divy into components