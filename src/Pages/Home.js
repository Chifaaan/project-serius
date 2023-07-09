import Carrousel from '../Components/Carousel';
import AnimeRec from '../Components/AnimeRecDisplay';
import Footer from'../Components/Footer';
import CategoryCard from '../Components/Category';
import MovieRec from '../Components/MovieRecDisplay'

function Home() {
    return (
        <div className="bottom-0 bg-[#F5F5F5]">
        <div class=" bg-auto bg-center relative bg-cover h-full"
        style={{backgroundColor:'#F5F5F5' }}>
            <Carrousel />

            <CategoryCard />

            <AnimeRec />
            <MovieRec />
            
        </div>
        <Footer />
    </div>
    );
  }
  
  export default Home;
  