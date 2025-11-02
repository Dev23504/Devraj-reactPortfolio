import React, { useEffect, useRef, useState } from 'react'
import { name } from './constact';
import Foter from './Foter';

const Home = () => {

 const ref =useRef(0);
 const [text,setText]=useState('')

 useEffect(()=>{

  const interval=setInterval(()=>{
    if(ref.current < name.length){
      ref.current++
      setText(()=> text + name [ref.current -1])
    }
  },500)
  return()=> clearInterval(interval)
 },[text])
  return (
    <div className='area relative z-0 bg-[#1a1a1a]  w-screen h-screen  ' id='home'>
          <ul className='circles'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            
          </ul>
         <div className='hero relative h-[calc(100vh)] flex justify-center items-center' id='hero'>
              <div  className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
                <h1 className='text-6xl sm:text-7xl font-extrabold mt-2 text-white '>Hello, I'm <span className='text-yellow-200 font-extrabold'>{text}</span></h1>
                <p className='mt-3 text-xl text-white '>I love to learn and implement my knowledge in building interesting project .</p>
              </div>
            </div>
         
    </div>
  )
}

export default Home
