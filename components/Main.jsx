import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
    <div id='main' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 text-center'>
            <div className='w-full h-auto m-auto col-span-2'>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#5651e5]'>Annie</span> 👋🏻
                </h1>
                <h2 className='uppercase text-sm tracking-widest text-gray-600'>
                    A Student Software Developer
                </h2>
                <p className='py-4 text-gray-600 max-w-[80%] m-auto'>
                    I am a Combined STEM student, focussing in computer science and web development. 
                    <br/><br/>
                    I am passionate about all things technology, coding and design.
                    Currently, I am focused on learning how to create <span className='text-[#5651e5]'>beautiful, reponsive and interactive web applications</span>.
                </p>
            </div>
            <div className='w-full h-auto m-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src="/../public/headshot.png" width='800' height='800' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default Main