import React from 'react'
import { PROJECTS } from '../components/Projects.js'
import { motion } from 'framer-motion'



const Project = () => {
  return (
    <div className='my-20'>
        <motion.div whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}} transition={{duration:1,delay:0.3}} className='flex justify-center'>
            <h1 className='text-2xl font-extrabold tracking-widest xl:text-3xl text-green-600'>PROJECTS</h1>
        </motion.div>
        <div className='flex flex-col items-center'>
            {PROJECTS.map((project, index) => (
            <motion.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:0.9,delay:0.4}} key={index} className='flex my-10 mb-10 w-[300px] h-auto md:w-full flex-col md:flex-row border-4 rounded-2xl border-gray-900 '>
                <img src={project.photo} alt={project.photo} className='w-[300px] h-[200px] rounded-t-2xl md:rounded-xl' />
                <div className='md:ml-10 text-center md:text-left text-wrap flex flex-col justify-around'>
                    <h1 className='tracking-widest font-bold text-xl text-green-600'>{project.name}</h1>
                    <div>
                        <p className='tracking-widest font-bold text-green-600 underline decoration-2'>Description</p>
                        <p>{project.discription}</p>
                    </div>
                    <div className='flex justify-evenly md:justify-start md:gap-5'>
                        {project.tools.map((tool,index)=>(
                            <div key={index} className=''>
                                <p className='bg-gray-900 px-4 py-1 my-2 rounded-xl text-green-400'>{tool}</p>
                            </div>
                        ))}
                    </div>
                    <div className='my-2 sm:mb-1'>
                        <a href={project.url} target='_blank' className='bg-gradient-to-r from-green-200 via-slate-300 to-green-600 text-black hover:opacity-65 hover:scale-105 transition-all duration-300 ease-in-out font-semibold py-1 px-4 rounded-2xl'>LINK</a>
                    </div>
                </div>
            </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Project