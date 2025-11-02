import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Foter = () => {
  return (
    <div className='bg-slate-900 p-4' style={{cursor: 'default'}}>
    <div className='flex justify-between flex-wrap gap-4'>
        <p className='text-white text-center w-full sm:w-auto font-light'>@ 2024 Devraj Singh. All rights reserved.</p>

        <div className='text-white flex justify-around sm:w-[250px] w-full'>
            
            <a href='mailto:devrajsinghsisodiya72@gmail.com' className='trasition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:translate-y-1' style={{cursor: 'pointer'}}>
            <IoIosMail  className='text-xl'/>
            </a>
            <a href='https://linkedin.com/in/devraj-singh-b53b04284' target='blank' className='trasition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:translate-y-1' style={{cursor: 'pointer'}}>
                <FaLinkedin className='text-xl'/>
            </a>
            <a href='https://https://github.com/Dev23504' target='blank'className='trasition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:translate-y-1' style={{cursor: 'pointer'}}>
                <FaGithub className='text-xl'/>
            </a>
        </div>
    </div>
     
      
    </div>
  )
}

export default Foter
