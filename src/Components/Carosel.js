import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography } from '@material-tailwind/react';
import ButtonItem from './Button';

const carousel = [
    { 
        image: "https://4kwallpapers.com/images/wallpapers/chainsaw-man-manga-series-2022-series-3440x1440-8914.jpg",
        titleUrl: "https://cdn.discordapp.com/attachments/622422904914706452/1126867119544479886/image-removebg-preview_9.png",
        description: "Chainsaw Man follows the story of Denji, an impoverished young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws.",
        imageUrl:"https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/65a20c13-b27b-49d8-9040-5eb8ecaba11e/cool-poster-art-for-chainsaw-man-created-by-vincent-aseo.jpg",
        DiaimageUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/npdB6eFzizki0WaZ1OvKcJrWe97.jpg",
        title:"Chainsaw Man",
        Year:"2022",
          synopsis:"Denji dirampok dari kehidupan remajanya yang normal, tidak memiliki apa-apa selain hutang ayahnya yang sangat besar. Teman satu-satunya adalah hewan peliharaannya, Pochita, iblis gergaji mesin, yang dengannya dia membunuh iblis demi uang yang pasti berakhir di saku yakuza. Yang bisa dilakukan Denji hanyalah memimpikan kehidupan yang baik dan sederhana: hidup dengan makanan enak dan pacar cantik di sisinya. Tapi tindakan pengkhianatan rakus oleh yakuza menyebabkan kematian Denji yang brutal dan terlalu cepat, menghancurkan semua harapan dia untuk mencapai kebahagiaan. Hebatnya, kontrak lama memungkinkan Pochita untuk bergabung dengan almarhum Denji dan memberikan kekuatan iblis padanya, mengubahnya menjadi hibrida yang mampu mengubah bagian tubuhnya menjadi gergaji mesin. Karena kemampuan baru Denji menimbulkan risiko yang signifikan bagi masyarakat, pemburu setan elit Biro Keamanan Publik, Makima, membawanya masuk, membiarkannya hidup selama dia mematuhi perintahnya. Dipandu oleh janji kehidupan konten bersama seorang wanita yang menarik, Denji mencurahkan segalanya dan bertarung dengan sekuat tenaga untuk mewujudkan mimpinya yang naif.",
          
          Skor:"8.58",
          Author:"Tatsuki Fujimoto",
          Genre:"Action, Gore, Monster, Comedy",
          WatchUrl:"https://stream2.otakuturu.app/web/index.html#!/details?id=87f8df724ff90af3d98b494243a6b729&context=tvshows&serverId=1b7779efbf81436aaac185d4b27dadbb",
          RevUrl:"https://myanimelist.net/anime/44511/Chainsaw_Man",
    },
    { 
        image: "https://wallpapercave.com/wp/wp10506816.jpg",
        titleUrl: "https://logos-world.net/wp-content/uploads/2022/01/Attack-on-Titan-Logo.png",
        description: "Slide 2 Description",
        imageUrl:"https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/01/05/How-to-watch-Attack-on-Titan-Final-Season-Part-2.jpg",
        DiaimageUrl:"https://photo.kontan.co.id/photo/2020/12/10/86894998p.jpg",
        title:"Shingekki No Kyoujin",
        Year:"2013",
        synopsis:"Berabad-abad yang lalu, umat manusia dibantai hingga hampir punah oleh makhluk humanoid mengerikan yang disebut Titans, memaksa manusia bersembunyi ketakutan di balik tembok konsentris yang sangat besar. Apa yang membuat raksasa ini benar-benar menakutkan adalah selera mereka akan daging manusia tidak lahir dari rasa lapar, tetapi tampaknya karena kesenangan. Untuk memastikan kelangsungan hidup mereka, sisa-sisa umat manusia mulai hidup dalam penghalang pertahanan, menghasilkan seratus tahun tanpa satu pun pertemuan titan. Namun, ketenangan yang rapuh itu segera hancur ketika Titan kolosal berhasil menembus tembok luar yang konon tak tertembus, menyalakan kembali perjuangan untuk bertahan hidup melawan kekejian pemakan manusia. Setelah menyaksikan kerugian pribadi yang mengerikan di tangan makhluk yang menyerang, Eren Yeager mendedikasikan hidupnya untuk membasmi mereka dengan mendaftar ke Survey Corps, unit militer elit yang memerangi humanoid tanpa ampun di luar perlindungan tembok. Eren, adik angkatnya Mikasa Ackerman, dan teman masa kecilnya Armin Arlert bergabung dalam perang brutal melawan para Titan dan berlomba untuk menemukan cara mengalahkan mereka sebelum tembok terakhir ditembus.",
        Skor:"8.54",
        Author:"Hajime Isayama",
        Genre:"Action, Gore, Fantasy, Monster",
        WatchUrl:"https://anoboy.monster/2016/04/shingeki-no-kyojin-attack-titan-indo/",
        RevUrl:"https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",
        
        
    },
    { 
        image: "https://wallpapercave.com/wp/wp12101204.jpg",
        titleUrl: "https://cdn.discordapp.com/attachments/622422904914706452/1126867991322169514/image-removebg-preview_10.png",
        description: "Slide 3 Description",
        imageUrl:"https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/65a20c13-b27b-49d8-9040-5eb8ecaba11e/cool-poster-art-for-chainsaw-man-created-by-vincent-aseo.jpg",
        DiaimageUrl:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/npdB6eFzizki0WaZ1OvKcJrWe97.jpg",
        title:"Chainsaw Man",
        Year:"2022",
        synopsis:"Denji dirampok dari kehidupan remajanya yang normal, tidak memiliki apa-apa selain hutang ayahnya yang sangat besar. Teman satu-satunya adalah hewan peliharaannya, Pochita, iblis gergaji mesin, yang dengannya dia membunuh iblis demi uang yang pasti berakhir di saku yakuza. Yang bisa dilakukan Denji hanyalah memimpikan kehidupan yang baik dan sederhana: hidup dengan makanan enak dan pacar cantik di sisinya. Tapi tindakan pengkhianatan rakus oleh yakuza menyebabkan kematian Denji yang brutal dan terlalu cepat, menghancurkan semua harapan dia untuk mencapai kebahagiaan. Hebatnya, kontrak lama memungkinkan Pochita untuk bergabung dengan almarhum Denji dan memberikan kekuatan iblis padanya, mengubahnya menjadi hibrida yang mampu mengubah bagian tubuhnya menjadi gergaji mesin. Karena kemampuan baru Denji menimbulkan risiko yang signifikan bagi masyarakat, pemburu setan elit Biro Keamanan Publik, Makima, membawanya masuk, membiarkannya hidup selama dia mematuhi perintahnya. Dipandu oleh janji kehidupan konten bersama seorang wanita yang menarik, Denji mencurahkan segalanya dan bertarung dengan sekuat tenaga untuk mewujudkan mimpinya yang naif.",
        Skor:"8.89",
        Author:"Tatsuki Fujimoto",
        Genre:"Action, Gore, Monster, Comedy",
        WatchUrl:"https://stream2.otakuturu.app/web/index.html#!/details?id=87f8df724ff90af3d98b494243a6b729&context=tvshows&serverId=1b7779efbf81436aaac185d4b27dadbb",
        RevUrl:"https://myanimelist.net/anime/44511/Chainsaw_Man",

    },
];

const Jumbotron = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:100000,
        appendDots: (dots) => (
            <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                <ul style={{ margin: '0' }}> {dots} </ul>
            </div>
        ),
        fade: true,
        width: 500,
    };

    return (
        <div className="relative bg-gray-800 h-fit -pb-10">
            <Slider {...settings} className='overflow-hidden'>
                {carousel.map((item, index) => (
                    <div key={index}>
                        <img className="object-cover w-full max-h-[70vh] opacity-60 -mt-37" src={item.image} alt={`Jumbotron ${index + 1}`} />
                        <div className="absolute inset-0 bg-gradient-to-r from-black items-left w-[40%]">
                            <div className="ml-10 mt-[2rem] place-items-left text-left w-3/4 md:w-2/4 opacity-100">
                                <Typography 
                                    className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
                                    color="yellow"
                                    textGradient
                                >
                                  Popular Now!
                                </Typography>
                                <img 
                                className="-mb-6 h-[10rem] mt-40"
                                src={item.titleUrl}>
                                  </img>
                                <Typography 
                                    className="text-lg text-white"
                                    color="white"
                                    >
                                    {item.description}

                                </Typography>

                                <div className="flex justify-left gap-2">
                                <ButtonItem 
                                imageUrl={item.imageUrl}
                                DiaimageUrl={item.DiaimageUrl}
                                title={item.title}
                                Year={item.Year}
                                synopsis={item.synopsis}

                              
                                Author={item.Author}
                                Genre={item.Genre}
                                WatchUrl={item.WatchUrl}
                                RevUrl={item.RevUrl}/>
                                  
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Jumbotron;