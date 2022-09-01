import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Image from 'next/image'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='uppercase text-sm py-4 px-4'>I'd love to chat, get in touch:</h2>
            <div className='grid md:grid-cols-5 grid-cols-1 gap-8'>

                {/*Left details*/}
                <div className='md:col-span-2 w-full'>
                    <div className='lg:p-4 h-full'>
                        <div className='text-center'>
                            <Image src="/../public/headshot.png" width='200' height='200' alt='/' />
                        </div>
                        <div className='text-center'>
                            <h2 className='py-4'>Annie Seaward</h2>
                            <p className='uppercase text-sm tracking-widest font-bold'>A Student Software Developer</p>
                            <p className='py-4'>I am open to new oppurtunities.<br />Contact me and let's talk.</p>
                        </div>
                        <div className='flex items-center justify-between py-4 w-[70%] mx-auto'>
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
                </div>

                {/*Right contact form*/}
                <div className='md:col-span-3 w-full h-auto tracking-widest'>
                    <div className='p-4'>
                        <form>

                            <div className='grid flex-col py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name: </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                            </div>

                            <div className='grid flex-col py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Email: </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                                </div>
                            </div>

                            <div className='grid flex-col py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Subject: </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                            </div>

                            <div className='grid flex-col py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Message: </label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10"></textarea>
                                </div>
                            </div>

                            <button className='w-full p-4 text-gray-100 mt-4 hover:scale-105 ease-in duration-75'>
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>

            </div>

            {/*Scroll Button*/}
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                    </div>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Contact