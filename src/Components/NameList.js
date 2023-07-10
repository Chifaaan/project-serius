import React from 'react'
import Pannur from './Pannur';
import Iwan from './Iwan';
import { Typography } from "@material-tailwind/react";

const NameList = () => {
  return (
    <div className='bg-tertiary p-10 md:p-7 sm:p-3 mx-auto my-10 rounded-3xl shadow-xl text-primary max-w-[90vw] flex-col justify-center' id='trending'>
          <Typography variant="h2" color="blue-gray" className="mb-4 text-center">
            Meet the Team
          </Typography>

        <div className='flex mx-auto flex-wrap gap-10 '>
        <Pannur/>
        <Iwan/>

        </div>
        
    </div>
  )
}

export default NameList