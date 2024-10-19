import React from 'react'
import { DiReact } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { DiHtml5 } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { DiPhp } from 'react-icons/di'
import { motion } from 'framer-motion'
const iconAnimate=(dura)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:dura,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
});

const Skills = () => {
  return (
    <div className='my-10'>
      <motion.div whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}} transition={{duration:1,delay:0.3}} className='flex justify-center'>
        <h1 className='text-2xl font-extrabold tracking-widest xl:text-3xl text-green-600'>SKILLS</h1>
      </motion.div>
      <motion.div whileInView={{x:0,opacity:1}} initial={{x:-100,opacity:0}} transition={{duration:1,delay:0.2}} className='flex justify-center gap-10 my-10'>
        <motion.div variants={iconAnimate(1.5)} initial="initial" animate="animate">
          <DiHtml5 className='icons text-orange-500'/>
        </motion.div>
        <motion.div variants={iconAnimate(1.6)} initial="initial" animate="animate">
         <DiCss3 className='icons text-blue-500'/>
        </motion.div>
        <motion.div variants={iconAnimate(1.7)} initial="initial" animate="animate">
          <DiJavascript1 className='icons text-yellow-400'/>
        </motion.div>
        <motion.div variants={iconAnimate(1.8)} initial="initial" animate="animate">
          <DiReact className='icons text-cyan-400'/>
        </motion.div>
        <motion.div variants={iconAnimate(1.9)} initial="initial" animate="animate">
          <DiPhp className='icons text-blue-500'/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Skills
