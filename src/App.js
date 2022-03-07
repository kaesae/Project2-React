import './CSS/Mobile.css';
import './CSS/Tablet.css';
import './CSS/PC.css';
import { Link, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer';
import Header from './Components/Header';
import BioPage from './Components/BioPage';
import APIPage from './Components/APIPage';
import Main from './Components/Main';

function App() {

  return (
    <div className="App">

      <nav>
        <p><button><Link to='/bio'>Meet the Creator</Link></button></p>
        <p><Link to='/api'>API Info</Link></p>
        <p><Link to='/covid'>Covid Stats</Link></p>
      </nav>

      <Header />

      <Routes>
        <Route path='/covid' element={<Main />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path='/api' element={<APIPage />} />
      </Routes>
 
      <Footer />
    </div>
  );
}

export default App;