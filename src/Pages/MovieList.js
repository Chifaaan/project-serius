
import Footer from'../Components/Footer';
import MovieDisplay from '../Components/listMovieDisplay';

function MovieList() {
    return (
        <div className="bottom-0 bg-[#F5F5F5]">
        <div class="bg-auto bg-center relative bg-cover xl:h-full h-full"
        style={{backgroundColor:'#F5F5F5' }}>

            <MovieDisplay />
            
        </div>
        <Footer />
    </div>
    );
  }
  
  export default MovieList;
  