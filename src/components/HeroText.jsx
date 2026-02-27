import React from 'react'
import FlipWords from './ui/FlipWords'
import { motion } from 'motion/react'

const HeroText = () => {
  // Your original animations - untouched
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    // Added a max-width and horizontal padding to contain the layout professionally on large screens
    <div className='z-50 font-mono w-full max-w-6xl mx-auto px-6 mt-20'>
      <div className='flex flex-col gap-4'>
        
        {/* Hi, I'm Seddik */}
        <motion.h1 
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ delay: 1 }}
          className='text-3xl lg:text-5xl font-medium text-neutral-300 flex items-center'
        >
          Hi, I'm
          <span className='text-transparent bg-clip-text bg-gradient-to-b from-red-900 to-red-500 ml-3 font-bold'>
            Seddik
          </span>
        </motion.h1>

        {/* A Developer Dedicated to */}
        <motion.p 
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ delay: 1.2 }}
          className='text-4xl md:text-5xl lg:text-6xl text-neutral-300 font-bold leading-tight'
        >
          A Full Stack Developer <br className="hidden md:block" /> Dedicated to
        </motion.p> 

        {/* Building + FlipWords */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          // Changed to flex-col on mobile and flex-row on desktop for clean alignment
          className='text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2 flex flex-col md:flex-row md:items-center text-neutral-300'
        >
          <span className="mb-2 md:mb-0">Building</span>
          
          <div className="w-[200px] md:w-[280px] inline-block md:ml-4"> 
            <FlipWords 
              words={["Secure", "Modern", "Smart"]}
              className='font-extrabold text-4xl md:text-5xl lg:text-6xl text-red-500 p-0 m-0'
            />
          </div>
        </motion.div>

        {/* Web Solutions / Applications */}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ delay: 1.8 }}
          // Cleaned up the responsive classes to be more concise
          className='text-3xl lg:text-5xl font-bold text-neutral-300 flex gap-3'
        >
          <p>Web</p> 
          <p className='md:hidden'>applications</p>
          <p className='hidden md:block'>Solutions</p>
        </motion.div>
        
      </div>
    </div>
  )
}

export default HeroText