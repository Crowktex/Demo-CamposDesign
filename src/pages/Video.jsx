import React from 'react'
import porsche from '../assets/porsche.mp4'
import { Link } from 'react-router-dom'


function Video() {
  return (
    <div className=' w-full h-full main'>
        <video className=' blur-sm w-full h-screen object-cover' src={porsche} autoPlay loop muted></video>
        <div className='absolute w-full h-full top-0 flex flex-col justify-center items-center content text-5xl text-white bg-black bg-opacity-80'>
            <h1 className=' '>Campos Design</h1>
            <p className='text-4xl'>Race Liveries</p>  
            <div className='my-4'>
            <Link className='duration-500 text-3xl bg-transparent hover:bg-red-600 hover:animate-pulse text-red-600 font-semibold hover:text-zinc-950 py-2 px-4 border border-red-500 hover:border-transparent rounded' to='/Home'> Start!</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Video