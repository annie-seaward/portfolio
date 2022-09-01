import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full tracking-widest'>
        <div className='max-w-[1240px] mx-auto px-2 pt-16 flex flex-col justify-center h-full'>
            <h2 className='uppercase text-sm py-4 px-4'>Technologies I'm loving learning:</h2>
            <div className='flex flex-wrap gap-8 justify-center items-center'>

                <div className='px-6 hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-rows-2 gap-0.5 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/skills/html.png' width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-rows-2 gap-0.5 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/skills/css.png' width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-rows-2 gap-0.5 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/skills/javascript.png' width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-rows-2 gap-0.5 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/skills/react.png' width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-rows-2 gap-0.5 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/skills/nextjs.png' width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NextJS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-rows-2 gap-0.5 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/skills/tailwind.png' width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-rows-2 gap-0.5 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/skills/github.png' width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>GitHub</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills