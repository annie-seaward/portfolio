import React from 'react'
import {GiGraduateCap} from 'react-icons/gi'
import {FaFreeCodeCamp} from 'react-icons/fa'
import {AiFillCode} from 'react-icons/ai'
import {RoughNotation} from "react-rough-notation"

const About = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
        <div class="grid md:grid-cols-3 gap-12 text-center max-w-[75%] mx-auto ">
            <div class="mb-6 md:mb-0">
                <div class="flex justify-center mb-6">
                    <GiGraduateCap size={80} color="#f582ae" />
                </div>
                <p class="italic font-bold">BSc Combined STEM | <RoughNotation type="highlight" show={true} color="#8bd3dd">The Open University</RoughNotation></p>
                <p class="text-lg my-4 text-gray-500">
                I am currently studying part-time for a degree in Combined STEM, focussing in Computer Science. I am on-track to graduate with a first-class degree.
                </p>
            </div>
            <div class="mb-6 md:mb-0">
                <div class="flex justify-center mb-6">
                    <AiFillCode size={80} color="#8bd3dd" />
                </div>
                <p class="italic font-bold">Full-Stack Bootcamp | <RoughNotation type="highlight" show={true} color="#8bd3dd">NorthCoders</RoughNotation></p>
                <p class="text-lg my-4 text-gray-500">
                I am due to start a 12-week Full-Stack development in October. Covering backend development with Express JS and PostSQL, and frontend development with React JS.
                </p>
            </div>
            <div class="mb-0">
                <div class="flex justify-center mb-6">
                    <FaFreeCodeCamp size={80} color="#7f5af0" />
                </div>
                <p class="italic font-bold">Self-Taught | <RoughNotation type="highlight" show={true} color="#8bd3dd">Free Code Camp</RoughNotation></p>
                <p class="text-lg my-4 text-gray-500">
                I have enjoyed completing both the Responsive Web Design, and JavaScript Algorithms and Data Structures certificates.
                </p>
            </div>
        </div>
    </div>  
    )
}

export default About