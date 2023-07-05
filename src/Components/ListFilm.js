import React from 'react';
import Trending1 from './Trending1';
import Trending2 from './Trending2';
import Trending3 from './Trending3';

function ListFilm(){
    return(
        <div className='bg-orange-400 p-10 md:p-7 sm:p-3 mx-auto my-10 rounded-3xl shadow-xl text-primary max-w-[75vw] flex-col justify-center' id='trending'>
        <h1 className='text-3xl font-bold pb-5 text-center'>Lagi Ngetop!🔥</h1>

        <div className='flex mx-auto flex-wrap'>
        <Trending1/>
        <Trending2/>
        <Trending3/>
        </div>
        
    </div>
    )
}

export default ListFilm;