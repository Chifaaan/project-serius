import React from 'react';
import Dialogue from './Dialog';
import Dialog2 from './Dialog2';

function ListFilm(){
    return(
        <div className='bg-tertiary p-10 md:p-7 sm:p-3 mx-auto my-10 rounded-3xl shadow-xl text-primary max-w-[75vw] flex-col justify-center' id='trending'>
        <h1 className='text-3xl font-bold pb-5 text-center'>Lagi Ngetop!🔥</h1>

        <div className='flex mx-auto flex-wrap'>
        <Dialogue/>
        <Dialog2/>

        </div>
        
    </div>
    )
}

export default ListFilm;