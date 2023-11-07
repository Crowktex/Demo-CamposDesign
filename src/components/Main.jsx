import React from 'react';
import porsche from '../assets/porsche.mp4';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";


const Main = () => {
  return (
    <div className=' w-full h-full main'>
        <video className='w-full h-screen object-cover' src={porsche} autoPlay loop muted></video>
        <div className='absolute w-full h-full top-0 flex flex-col justify-center items-center content text-6xl text-white bg-black bg-opacity-80'>
            <h1 className=' '>Campos Design</h1>
            <p className='text-5xl'>Race Liveries</p>             
        </div>
        
    </div>
  )
}

export default Main