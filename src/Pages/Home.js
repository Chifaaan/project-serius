import Carrousel from '../Components/Carousel';
import MovieDisplay from '../Components/MovieDisplay';
import Footer from'../Components/Footer';

function Home() {
    return (
        <div className="bottom-0 bg-[#F5F5F5]">
        <div class=" bg-auto bg-center relative bg-cover h-full"
        style={{backgroundColor:'#F5F5F5' }}>
            <Carrousel />
            <MovieDisplay />
            
        </div>
        <Footer />
    </div>
    );
  }
  
  export default Home;
  