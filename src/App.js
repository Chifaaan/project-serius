import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import AnimeList from './Pages/AnimeList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar fullWidth/>
        <Routes>

          <Route index element ={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<AnimeList />} />
          <Route path="/About" element={<AnimeList />} />
          {/*<Route path="/About" element={<About />} />*/}

      
        </Routes>
    </div>
  );
}

export default App;
