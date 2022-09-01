import React from 'react'
import Image from 'next/image'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsPersonLinesFill} from 'react-icons/bs'
import {MdOutlineWavingHand} from 'react-icons/md'
import {RoughNotation} from "react-rough-notation"

const Main = () => {
  return (
    <div id='main' className='w-full md:h-screen p-2 flex items-center md:py-16 pt-[15%]'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 text-center'>
            <div className='m-auto flex items-center justify-center hover:scale-105 ease-in duration-300'>
                <Image src="/../public/headshot.png" width='400' height='400' alt='/' />
            </div>
            <div className='w-full h-auto m-auto col-span-2'>
                <h1 className='py-4 flex justify-center items-center'>
                    Hi <MdOutlineWavingHand className='mx-4 text-4xl' color="8bd3dd" />, I'm Annie 
                </h1>
                <h2 className='uppercase text-sm tracking-widest'>
                    <RoughNotation type="underline" show={true} color="#8bd3dd" multiline="true">
                    A Student Software Developer
                    </RoughNotation>
                </h2>
                <br/>
                <p className='py-4 max-w-[80%] m-auto'>
                    I am a{' '}
                    <RoughNotation type="highlight" show={true} color="#8bd3dd" animationDelay="1000" multiline="true">Combined STEM student</RoughNotation>, focussing in  <RoughNotation type="box" show={true} color="#f582ae" animationDelay="1500" multiline="true" >Computer Science</RoughNotation>, particularly <RoughNotation type="underline" show={true} color="#7f5af0" animationDelay="1500" multiline="true" >web development</RoughNotation>, with innovation design and earth science.
                    <br/><br/>
                    I am passionate about all things technology, coding and design.
                    Currently, I am focused on learning how to create <RoughNotation type="highlight" show={true} color="#f582ae" animationDelay="2000" multiline="true">beautiful, reponsive and interactive web applications.</RoughNotation>
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <RoughNotation 
                        className='p-3 cursor-pointer hover:scale-105 ease-in duration-75' 
                        type="circle" show={true} color="#7f5af0" animationDelay="2500">
                            <FaLinkedinIn />
                    </RoughNotation>
                    <RoughNotation 
                        className='p-3 cursor-pointer hover:scale-105 ease-in duration-75'
                        type="circle" show={true} color="#7f5af0" animationDelay="2500">
                            <FaGithub />
                    </RoughNotation>
                    <RoughNotation 
                        className='p-3 cursor-pointer hover:scale-105 ease-in duration-75'
                        type="circle" show={true} color="#7f5af0" animationDelay="2500">
                            <AiOutlineMail />
                    </RoughNotation>
                    <RoughNotation 
                        className='p-3 cursor-pointer hover:scale-105 ease-in duration-75'
                        type="circle" show={true} color="#7f5af0" animationDelay="2500">
                            <BsPersonLinesFill />
                    </RoughNotation>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main