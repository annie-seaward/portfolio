import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, technologies, backgroundImg, projectUrl}) => {
  return (
    <div className='realtive flex items-center justify-center h-auto w-full p-4 group tracking-widest'>
		<Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
		<div className='hidden group-hover:block absolute'>
		    <h3 className='text-2xl tracking-wider text-center'>{title}</h3>
			<p className='pb-4 pt-2 text-center'>{technologies}</p>
			<Link href={projectUrl}>
            	<p className='text-center py-3 rounded-md bg-[#8bd3dd] text-gray-700 uppercase text-sm font-bold cursor-pointer hover:text-black hover:bg-[#6ccedb] hover:scale-105'>Find out more</p>
       		</Link>
		</div>
	</div>
  )
}

export default ProjectItem