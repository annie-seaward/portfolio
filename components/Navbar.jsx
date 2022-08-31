import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {FiDownload} from 'react-icons/fi'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#242629]' : 'fixed w-full h-20 z-[100] bg-[#242629] text-[#fffffe]'}>
        {/*Top Bar*/}
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <h1 className='font-mono text-[#4fc4cf]'>{'<'}as/{'>'}</h1>
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-small uppercase hover:border-b-4 border-[#4fc4cf]'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-small uppercase hover:border-b-4 border-[#4fc4cf]'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-small uppercase hover:border-b-4 border-[#4fc4cf]'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='ml-10 text-small uppercase hover:border-b-4 border-[#4fc4cf]'>Projects</li>
                    </Link>
                    <Link href='/#contact'>
                        <li className='ml-10 text-small uppercase hover:border-b-4 border-[#4fc4cf]'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden cursor-pointer mr-4'>
                    <AiOutlineMenu  size={25} color='#4fc4cf'/>
                </div>
            </div>
        </div>

        {/*Overlay for smaller screens*/}
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#242629] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div className='flex justify-between w-full items-center'>
                    <h1 className='font-mono text-[#4fc4cf]'>{'<'}as/{'>'}</h1>
                    <div onClick={handleNav} className='scale-105 cursor-pointer  hover:scale-125 ease-in duration-75'>
                        <AiOutlineClose size={20} color='#4fc4cf' />
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-b-4 border-[#4fc4cf]'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-b-4 border-[#4fc4cf]'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-b-4 border-[#4fc4cf]'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-b-4 border-[#4fc4cf]'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-b-4 border-[#4fc4cf]'>Contact</li>
                        </Link>
                        <button class='bg-[#994ff3] hover:bg-[#994ff3]/60 text-[#fffffe] py-2 px-4 my-4 rounded inline-flex items-center'>
                            <FiDownload />
                            <span className='pl-4'>Download CV</span>
                        </button>
                    </ul>
                    <div className='pt-10'>
                        <p className='uppercase tracking-widest text-[#994ff3]'>
                            Let's Connect
                        </p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full p-3 scale-125 cursor-pointer  hover:scale-150 ease-in duration-75'>
                                <FaLinkedinIn color='#4fc4cf' />
                            </div>
                            <div className='rounded-full p-3 scale-125 cursor-pointer  hover:scale-150 ease-in duration-75'>
                                <FaGithub color='#4fc4cf' />
                            </div>
                            <div className='rounded-full p-3 scale-125 cursor-pointer  hover:scale-150 ease-in duration-75'>
                                <AiOutlineTwitter color='#4fc4cf' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar