import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'

const App = () => {
  return (
    
    <div className='overflow-x-hidden'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>
      <Navbar/>
      <div className='container mx-auto px-8'>
        <section id='home'>
          <Hero />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='skills'>
          <Skills/>
        </section>
        <section id='projects'>
          <Project/>
        </section>
        <section id='contacts'>
          <Contact/>
        </section>
      </div>
    </div>
  )
}

export default App
