import profile from '../assets/Profile2.png'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { motion } from 'framer-motion'

const container=(delay)=>({
    Lhidden:{x:-100,opacity:0},
    Rhidden:{x:100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:1,delay:delay}
    }
})

const hero = () => {
  return (
    <div className="flex justify-center py-20 mt-10 items-center text-center sm:text-start">
        <div className="sm:w-1/2 w-full px-3 flex flex-col"> 
            <motion.p variants={container(0.2)} initial="Lhidden" animate="visible"  className="text-sm xl:text-lg antialiased tracking-wider py-2">HELLO, <span className="text-green-600">MY NAME IS</span></motion.p>
            <motion.h1 variants={container(0.3)} initial="Lhidden" animate="visible"  className="text-5xl xl:text-7xl py-2 tracking-widest font-extrabold"><span className="text-green-600">SUYOG</span> RAI</motion.h1>
            <motion.p variants={container(0.5)} initial="Lhidden" animate="visible"  className="text-base xl:text-sm antialiased tracking-wider py-2">I AM <span className="italic text-xl xl:text-2xl tracking-normal text-transparent bg-gradient-to-r from-green-200 via-slate-300 to-green-600 bg-clip-text">Web Developer</span></motion.p>
            <motion.p variants={container(0.7)} initial="Lhidden" animate="visible" className="py-2">
                I'm a passionate <span className="text-green-600">Front-End Developer</span><span className="hidden sm:block">
                specializing in crafting modern, responsive, and user-friendly web experiences. 
                With a strong eye for design and a focus on performance, I bring ideas to life in the browser, turning complex problems into elegant, functional solutions.
                </span>
            </motion.p>
            <motion.div variants={container(0.7)} initial="Lhidden" animate="visible" className='flex justify-center sm:justify-start gap-5 mt-2'>
                <a href="https://github.com/S7uy0g" target='_blank'><FaGithub className='heroicons'/></a>
                <a href="https://www.linkedin.com/in/suyog-rai-b142b62aa" target='_blank'><FaLinkedin className='heroicons'/></a>
                <a href="https://www.instagram.com/not_suyog.rai/" target='_blank'><FaInstagram className='heroicons'/></a>
                <a href="https://www.facebook.com/suyog.rai.549" target='_blank'><FaFacebook className='heroicons'/></a>
            </motion.div>
        </div>
        <motion.div variants={container(0.7)} initial="Rhidden" animate="visible" className=" w-full lg:w-1/2 flex-auto px-3 hidden sm:block">
            <div className="flex justify-center">
                <img src={profile} alt="" className='rounded-full shadow-2xl'/>
            </div>
        </motion.div>
    </div>
  )
}

export default hero
