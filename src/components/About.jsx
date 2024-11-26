import React from 'react'
import about from '../assets/About.png'
import CV from '../assets/Suyog Rai CV.pdf'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='mt-10'>
      <motion.div whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}} transition={{duration:1,delay:0.3}} className='flex justify-center'>
        <h1 className='text-2xl font-extrabold tracking-widest xl:text-3xl'>ABOUT <span className='text-green-600'>ME</span></h1>
      </motion.div>
      <div className='flex flex-col sm:flex-row my-11'>
        <motion.div whileInView={{x:0,opacity:1}} initial={{x:-100,opacity:0}} transition={{duration:1,delay:0.3}} ta className='hidden sm:w-1/2 sm:flex justify-center items-center'>
            <img src={about} alt="" className=''/>
        </motion.div>
        <motion.div whileInView={{x:0,opacity:1}} initial={{x:100,opacity:0}} transition={{duration:1,delay:0.3}} className='sm:w-1/2 text-wrap'>
            <p className='text-center sm:text-left'>
            Hi, I'm Suyog Rai, a passionate front-end developer with a love for crafting interactive and visually engaging web experiences. With a strong foundation in <span className=' text-green-400'>HTML, CSS, JavaScript, TailwindCSS and React</span>, I enjoy building sleek, user-friendly interfaces. I have a knack for tackling complex challenges, whether it’s optimizing performance or adding delightful functionality to websites.
            </p>
            <p className='hidden sm:block mt-3'>
            I’m constantly learning and evolving in the world of web development, and I love taking on new challenges that push my skills further. Whether it's collaborating with teams or working on solo projects, my goal is to deliver high-quality solutions that make an impact.
            </p>
            <div className='flex pt-9 justify-center '>
              <a href={CV} download="Suyog Rai" className='bg-gradient-to-r from-green-200 via-slate-300 to-green-600 text-black hover:opacity-65 hover:scale-105 transition-all duration-300 ease-in-out font-semibold py-2 px-4 rounded-2xl'>Download Resume</a>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
