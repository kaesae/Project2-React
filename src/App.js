import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import { react, useEffect, useState } from 'react'

function App() {
  const [statsList, setStatsList] = useState({
    All: {}
  })


  const getStatsList = () => {
    const url = "https://covid-api.mmediagroup.fr/v1/vaccines?country=France"
    fetch(url)
      .then ((response) => response.json())
      .then ((data) => setStatsList(data))
      .catch (() => console.log("you're infected"))
      console.log(statsList)
  }

  useEffect (() => {
    getStatsList()
  }, [])


  // const displayStats = statsList.map((administered, population, index) => {
  //   return (
  //     <div key={index}>
  //       <li>{administered}</li>
  //       <li>{population}</li>
  //     </div>
  //   )
  // });



  // const displayStatsList = statsList.map((stats, index) => {
  //   return (
  //     <div key={index}>
  //       <p></p>
  //     </div>
  //   )
  // });

  return (
    <div className="App">
      
      <nav>
          <h1><Link to='/stats'>Covid-19 Stats</Link></h1>
          <h3><Link to='/something'>Cases</Link></h3>
          <h3><Link to='/something'>Vaccinated</Link></h3>
          <h3><Link to='/something'>Deaths</Link></h3>
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
