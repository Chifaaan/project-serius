import Carrousel from '../Components/Carousel';
import Dialog from '../Components/Trending1';
import ListFilm from '../Components/ListFilm';
import CardSlider from '../Components/CardSlider';
import MovieDisplay from '../Components/MovieDisplay';
import backgroundImage from '../images/OP.jpg';

function Home() {
    return (
        <div class="bg-auto bg-center relative" style={{backgroundImage: 'url(${backgroundImage})',}}>
            <div class="flex">
            <ListFilm />
            </div>

            <MovieDisplay />
        </div>

    );
  }
  
  export default Home;
  