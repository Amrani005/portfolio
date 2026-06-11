import React, { useState } from 'react'
import HeroText from './HeroText'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  // State to manage which view is active
  const [showDetails, setShowDetails] = useState(false)

  return (
    <section 
      id='hero-section' 
      className="min-h-screen mt-30 bg-[#050505] flex items-center justify-center p-6 md:p-12 relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!showDetails ? (
          
          <motion.div 
            key="minimal-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50, filter: "blur(5px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center w-full mt-10"
          >
            {/* Tiny top label */}
            <motion.span 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.2 }}
              className="text-[10px] md:text-xs text-white/50 tracking-[0.6em] uppercase mb-4"
            >
              I am
            </motion.span>
            
            {/* Massive tight name */}
            <motion.h1 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.4 }}
              className="text-7xl md:text-[9rem] lg:text-[13rem] font-black text-white tracking-tighter leading-none mb-6"
            >
              SEDDIK
            </motion.h1>
            
            {/* Tiny bottom label */}
            <motion.span 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.6 }}
              className="text-[10px] md:text-xs text-white/50 tracking-[0.6em] uppercase text-center"
            >
              Fullstack Developer
            </motion.span>

            {/* The Interactive Arrow */}
            <motion.button
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 1.2 }}
              onClick={() => setShowDetails(true)}
              className="mt-20 w-16 h-16 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-500 group"
            >
              <svg 
                className="w-5 h-5 group-hover:translate-y-1.5 transition-transform duration-300" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.button>
          </motion.div>

        ) : (
          /* 
            =============================================================
            VIEW 2: THE ORGANIZED PHOTO & DESCRIPTION LAYOUT
            =============================================================
          */
          <motion.div 
            key="detailed-view"
            initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl items-center relative mt-10"
          >
            
            {/* "Go Back" Arrow */}
            <button 
              onClick={() => setShowDetails(false)}
              className="absolute -top-16 md:-top-24  lg:mt-5 left-0 md:left-8 text-white/40 hover:text-white flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Return to cover
            </button>

            {/* Left Side: HeroText & Information (Organized with a strict left border) */}
            <div className="z-10 flex flex-col justify-center border-l border-white/20 pl-8 md:pl-12">
               <HeroText />
               
               {/* Integrated Brutalist CTAs */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4, duration: 0.8 }}
                 className="flex flex-wrap gap-6 mt-12 cursor-pointer items-center"
               >
                 <a 
                   href="#portfolio-section" 
                   className="px-10 py-5 border border-white/20 text-white text-[10px] tracking-[0.3em] font-medium uppercase hover:bg-white hover:text-black transition-colors duration-400"
                 >
                   View Projects
                 </a>
                 <a 
                   href="#skills-section" 
                   className="px-10 py-5 text-white/40 text-[10px] tracking-[0.3em] font-medium uppercase hover:text-white transition-colors duration-400"
                 >
                   My Skills
                 </a>
               </motion.div>
            </div>

            {/* Right Side: Brutalist Image Presentation */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center md:justify-end"
            >
              {/* Sharp, desaturated, bordered photo container */}
              <div className="relative z-10 w-full max-w-[400px] aspect-[3/4] overflow-hidden bg-[#0a0a0a] border border-white/10">
                <img 
                  src="assets/neggaaaa_compressed.png" 
                  alt="Seddik" 
                  className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero