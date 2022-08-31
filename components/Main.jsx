import React from 'react'
import Image from 'next/image'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsPersonLinesFill} from 'react-icons/bs'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Main = () => {
  return (
    <div id='main' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 text-center'>
            <div className='w-full h-auto m-auto col-span-2'>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm Annie 👋🏻
                </h1>
                <h2 className='uppercase text-sm tracking-widest text-gray-600'>
                    <RoughNotation type="underline" show={true} color="#8bd3dd">
                    A Student Software Developer
                    </RoughNotation>
                </h2>
                <br/>
                <p className='py-4 text-gray-600 max-w-[80%] m-auto'>
                    I am a{' '}
                    <RoughNotation type="highlight" show={true} color="#8bd3dd" animationDelay="1000">
                        Combined STEM student
                    </RoughNotation>
                    , focussing in{' '}
                    <RoughNotation type="box" show={true} color="#f582ae" animationDelay="1500">
                    web development
                    </RoughNotation>
                    , with innovation design and earth science.
                    <br/><br/>
                    I am passionate about all things technology, coding and design.
                    Currently, I am focused on learning how to create <RoughNotation type="highlight" show={true} color="#f582ae" animationDelay="2000">beautiful, reponsive and interactive web applications</RoughNotation>.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
                        <BsPersonLinesFill />
                    </div>
                </div>
            </div>
            <div className='w-full h-auto m-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src="/../public/headshot.png" width='800' height='800' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default Main