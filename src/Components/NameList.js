import React from 'react'
import Pannur from './Pannur';
import Iwan from './Iwan';

const NameList = () => {
  return (
    <div className='bg-tertiary p-10 md:p-7 sm:p-3 mx-auto my-10 rounded-3xl shadow-xl text-primary max-w-[90vw] flex-col justify-center' id='trending'>
        <h1 className='text-3xl font-bold pb-5 text-center'>Meet the Team</h1>

        <div className='flex mx-auto flex-wrap '>
        <Pannur/>
        <Iwan/>

        </div>
        
    </div>
  )
}

export default NameList