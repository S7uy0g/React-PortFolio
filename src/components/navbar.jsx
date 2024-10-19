import React from 'react'
import { Link } from 'react-scroll'

const navbar = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center  px-5 mx-auto py-3 fixed w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-opacity-95'>
        <div className='text-5xl antialiased font-extrabold text-center cursor-pointer' onClick={reloadPage}>SR</div>
        <div className='flex justify-between gap-1 sm:gap-3 text-sm sm:text-base'>
          <Link to='home' smooth={true} duration={500} className='navbar'>
            Home
          </Link>
          <Link to='about' smooth={true} duration={500} className='navbar'>
            About
          </Link>
          <Link to='skills' smooth={true} duration={500} className='navbar'>
            Skills
          </Link>
          <Link to='projects' smooth={true} duration={500} className='navbar'>
            Projects
          </Link>
          <Link to='contacts' smooth={true} duration={500} className='navbar'>
            Contacts
          </Link>
        </div>
    </div>
  )
}

export default navbar
