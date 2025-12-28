import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-black flex flex-col w-[100%]  h-full'>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Experiences/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
