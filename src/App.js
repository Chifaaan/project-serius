import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import AnimeList from './Pages/AnimeList';
import MovieList from './Pages/MovieList';

import './App.css';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Navbar fullWidth/>
        <Routes>

          <Route index element ={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<AnimeList />} />
          <Route path="/movie" element={<MovieList />} />
          <Route path="/About" element={<AboutUs />} />
          {/*<Route path="/About" element={<About />} />*/}

      
        </Routes>
    </div>
  );
}

export default App;
