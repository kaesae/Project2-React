import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import { react, useEffect, useState } from 'react'

function App() {
  const [statsList, setStatsList] = useState([])
  const [selectedCountry, setSelectedCountry] = useState ({})

  const url = "https://covid-api.mmediagroup.fr/v1/vaccines"

  //gives me Cuba's and All, need to make it a changeable value later
  const {Cuba, All: { administered }} = statsList
  console.log(Cuba)

// console.log(statsList)

  const getStatsList = () => {
    fetch(url)
      .then ((response) => response.json())
      .then ((data) => setStatsList(data))
      .catch (() => console.log("you're infected"))
  }

  useEffect (() => {
    getStatsList()
  }, [])

  // console.log(statsList)

  //

  // const getSelectedCountry = () = {
    
  // }

  // const handleStats = () => {
  //   setSelectedCountry();
  // }

  // const displayStats = statsList.map((administered, population, index) => {
  //   return (
  //     <div key={index}>
  //       <li>{administered}</li>
  //       <li>{population}</li>
  //     </div>
  //   )
  // });


  // const displayStatsList = () => {
  //   const result = []
  //   for (const country in statsList) {
  //     const covidDetails = {country: country["All"]["administered"]}
  //     result.push(<div>{covidDetails}</div>)
  //   }
  //   return result
  // };

  // Handle Change Location
  // const handleLocationChange = (location) => {

  // }

  return (
    <div className="App">
      
      <nav>
          <h1 className=''>Covid-19 Stats</h1>
          <h3 className='cases'><Link to='/something'>Cases</Link></h3>
          <h2 className='cases'></h2>
          <h3 className='vaccinated'><Link to='/something'>Vaccinated</Link></h3>
          <h2 className='vaccinated'></h2>
          <h3 className='deaths'><Link to='/something'>Deaths</Link></h3>
          <h2 className='deaths'></h2>
      </nav>

      <main>
        <div>Change Locations</div>
        <Routes>
          <Route />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// Create useState and set it to all the countries

// set useState to display information of Cuba

// Add form to make it change countries

// divy into components