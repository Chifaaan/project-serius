import Carrousel from '../Components/Carousel';
import CardSlider from '../Components/CardSlider';
import MovieDisplay from '../Components/MovieDisplay';
import Carosel from '../Components/Carosel';
import Footer from'../Components/Footer';
import ListDisplay from '../Components/ListDisplay';

function AnimeList() {
    return (
        <div className="bottom-0">
        <div class="h-[150vh] bg-auto bg-center relative bg-cover h-screen"
        style={{backgroundColor:'#F5F5F5' }}>
            
            <ListDisplay />
            
        </div>
        <Footer />
    </div>
    );
  }
  
  export default AnimeList;
  