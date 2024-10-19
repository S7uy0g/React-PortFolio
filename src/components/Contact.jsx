import React from 'react'
import { contact } from './ContactDetails.js'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='my-10'>
      <motion.div whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}} transition={{duration:1,delay:0.3}} className='flex justify-center'>
        <h1 className='text-2xl font-extrabold tracking-widest xl:text-3xl text-green-600'>CONTACTS</h1>
      </motion.div>
      <div className='contatcs mt-5'>
        <div className='contacts my-2'>
            <motion.p whileInView={{x:0,opacity:1}} initial={{x:-50,opacity:0}} transition={{duration:1,delay:0.3}} className='underline'>Phone Number</motion.p>
            <motion.p whileInView={{x:0,opacity:1}} initial={{x:50,opacity:0}} transition={{duration:1,delay:0.3}}>{contact.number}</motion.p>
        </div>
        <div className='contacts my-2'>
            <motion.p whileInView={{x:0,opacity:1}} initial={{x:-50,opacity:0}} transition={{duration:1,delay:0.3}} className='underline'>Email</motion.p>
            <motion.p whileInView={{x:0,opacity:1}} initial={{x:50,opacity:0}} transition={{duration:1,delay:0.3}}>{contact.email}</motion.p>
        </div>
        <div className='contacts my-2'>
            <motion.p whileInView={{x:0,opacity:1}} initial={{x:-50,opacity:0}} transition={{duration:1,delay:0.3}} className='underline'>Linkedin</motion.p>
            <motion.a whileInView={{x:0,opacity:1}} initial={{x:50,opacity:0}} transition={{duration:1,delay:0.3}} href={contact.linkedin}>{contact.name}</motion.a>
        </div>
      </div>
    </div>
  )
}

export default Contact
