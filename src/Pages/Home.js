import Carrousel from '../Components/Carousel';
import ListFilm from '../Components/ListFilm';
import CardSlider from '../Components/CardSlider';
import MovieDisplay from '../Components/MovieDisplay';
import bgImage from '../images/OP.jpg';
import Carosel from '../Components/Carosel';

function Home() {
    return (
        <div class="bg-auto bg-center relative bg-cover h-screen"
        style={{backgroundColor:'#F5F5F5' }}>
            <Carrousel />
            <MovieDisplay />
        </div>

    );
  }
  
  export default Home;
  