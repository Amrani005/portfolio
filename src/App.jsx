import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Stats from './components/Stats'
import Skills from './components/Skills'

const App = () => {
  return (
    <div className='bg-black flex flex-col w-[100%]  h-full'>
      <Header/>
      <Hero/>
      <Stats/>
      <About/>
      <Projects/>
      <Skills/>
      <Experiences/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
