
import Footer from'../Components/Footer';
import ListDisplay from '../Components/ListDisplay';

function AnimeList() {
    return (
        <div className="bottom-0 bg-[#F5F5F5]">
        <div class="bg-auto bg-center relative bg-cover xl:h-full h-full"
        style={{backgroundColor:'#F5F5F5' }}>

            <ListDisplay />
            
        </div>
        <Footer />
    </div>
    );
  }
  
  export default AnimeList;
  