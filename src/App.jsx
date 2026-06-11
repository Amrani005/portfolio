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
import * as Sentry from '@sentry/react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetailsPage from './components/ProjectDetails';

const App = () => {
  return (
    <Router>
      <div className='bg-black flex flex-col w-[100%]  h-full'>
        <Header/>
        <Routes>
           <Route path="/" element={
              <>
             <Hero/>
             <Stats/>
             <About/>
             <Projects/>
             <Skills/>
             <Experiences/>
             <Contact/>
             <Footer/>
              </>
                 } />
            <Route path="/project/:id" element={<ProjectDetailsPage />} />
        </Routes>
       
      </div>
    </Router>
  )
}

export default Sentry.withProfiler(App)
