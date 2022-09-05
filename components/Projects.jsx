import React from 'react'
import ouClassification from '../public/ou-screenshot.png'
import cryptoImg from '../public/crypto.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full p-2'>
		<div className='max-w-[1240px] mx-auto py-8 tracking-widest'>
            <h2 className='uppercase text-sm py-4 px-4'>Some Projects that I've recently made:</h2>
			<div className='grid md:grid-cols-2 gap-8'>

				<ProjectItem 
					title='OU Degree Classification Calculator'
                    technologies='HTML | CSS | Vanilla JS' 
					backgroundImg={ouClassification} 
					projectUrl='/ou-class-calculator' />

				<ProjectItem 
					title='Second Project'
                    technologies='React JS | Tailwind' 
					backgroundImg={cryptoImg} 
					projectUrl='/second' />
				
				<ProjectItem 
					title='Third Project'
                    technologies='React JS | Tailwind' 
					backgroundImg={cryptoImg} 
					projectUrl='/third' />
				
				<ProjectItem 
					title='Fourth Project'
                    technologies='React JS | Tailwind' 
					backgroundImg={cryptoImg} 
					projectUrl='/fourth' />

			</div>

		</div>
    </div>
  )
}

export default Projects