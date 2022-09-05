import React from 'react'
import ouClassification from '../public/ou-screenshot.png'
import Image from 'next/image'
import Link from 'next/link'
import {RoughNotation} from "react-rough-notation"

const first = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[40vh] lg:h-[30vh] relative'>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
                <h2 className='py-2'>OU Degree Classification Calculator</h2>
                <h3>HTML | CSS | Vanilla JS</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 md:grid md:grid-cols-5 gap-8 pt-8'>
            {/*LEFT*/}
            <div className='mb-8'>
                <RoughNotation 
                            className='p-2'
                            type="box" show={true} color="#7f5af0">
                    <div className='md:col-span-1'>
                        <div className='pl-2'>
                            <p className='font-bold pb-2'>Technologies</p>
                        </div>
                        <ul className='grid grid-cols-2 gap-x-4 md:grid-cols-1'>
                            <li className='py-2 flex items-center cursor-default'>HTML 5</li>
                            <li className='py-2 flex items-center cursor-default'>CSS 3</li>
                            <li className='py-2 flex items-center cursor-default'>Vanilla JS</li>
                            <li className='py-2 flex items-center cursor-default'>Responsive Web Design</li>
                            <li className='py-2 flex items-center cursor-default'>Functional Programming Patterns</li>
                        </ul>
                </div>
                </RoughNotation>
            </div>

            {/*CENTER*/}
            <div className='col-span-4'>
                <div className='lg:grid grid-cols-2 grid-flow-row gap-8'>       
                    <div>  
                        <p className='py-2 text-gray-600'>
                        This application allows a user to input their Open University module results and returns the final classification they should achieve.

                        The program has been written according to the official Open Univerity guidelines, shared <a className='text-blue-700 underline' href="https://help.open.ac.uk/documents/policies/working-out-your-class-of-honours/files/50/honours-class-working-out.pdf">here</a>. 

                        The project has been made using vanilla HTML, CSS and JavaScript. The website has been styled to be mobile responsive.
                        </p>

                        <div className='flex gap-8' >
                            <Link href='https://annie-seaward.github.io/ou-classification-calculator/'>
                                <p className='min-w-[100px] text-center my-8 py-3 rounded-md bg-[#8bd3dd] uppercase text-sm font-bold cursor-pointer hover:text-black hover:bg-[#6ccedb]'>Demo</p>
                            </Link>
                            <Link href='https://github.com/annie-seaward/ou-classification-calculator'>
                                <p className='min-w-[100px] text-center my-8 py-3 rounded-md bg-[#8bd3dd] uppercase text-sm font-bold cursor-pointer hover:text-black hover:bg-[#6ccedb]'>Code</p>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <Image className='rounded-xl float-right object-cover h-48 w-96' src={ouClassification} alt='/' />
                    </div>
                </div>
                
                
                <Link href='/#projects'>
                    <p className='underline cursor-pointer text-right'>Back To Projects</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default first