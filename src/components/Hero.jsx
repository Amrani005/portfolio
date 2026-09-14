import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  // State to manage which view is active
  const [showDetails, setShowDetails] = useState(false)

  return (
    <section 
      id='hero-section' 
      className="min-h-screen bg-black flex items-center justify-center p-6 md:p-12 relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!showDetails ? (
          
          <motion.div 
            key="minimal-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50, filter: "blur(5px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center w-full mt-30"
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
         
          <motion.div 
            key="detailed-view"
            initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12
             w-full max-w-[1400px] items-center lg:-mb-80 relative lg:mt-10 mt-40"
          >
            
            <button 
              onClick={() => setShowDetails(false)}
              className="absolute -top-16 lg:top-4 left-0 text-white/40
               hover:text-white flex items-center gap-4 text-[10px]
                tracking-[0.3em] uppercase transition-colors z-50 "
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Return to cover
            </button>

            {/* Left Side: Main Title & Blue Button */}
            <div className="z-10 lg:-mt-60 flex flex-col justify-center order-2 lg:order-1 pt-10 lg:pt-0">
               <div className="w-16 h-1 bg-white mb-8"></div>
               <h2 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                 I'm Seddik, a<br/>Web Developer
               </h2>
               <p className="text-gray-400 text-sm mb-10 max-w-md leading-relaxed pr-4">
                 Over the last 4 years, I developed my frontend and backend dev skills to deliver dynamic software and web applications.
               </p>
               <button className="w-16 h-16 bg-[#0d6efd] rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(13,110,253,0.3)]">
                 <svg className="w-6 h-6 translate-y-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                 </svg>
               </button>
            </div>

            {/* Center Side: Cutout Portrait Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:-top-10 lg:-mt-45 flex justify-center items-end order-1
               lg:order-2 h-[400px] lg:h-[700px] w-full
               lg:mb-90"
            >
              {/* Note: I removed the brutalist border and grayscale to match the new cutout style */}
              <img 
                src="assets/neggaaaa_compressed.png" 
                alt="Seddik" 
                className="w-full h-full lg:h-[55%] rounded-full
                 object-bottom drop-shadow-2xl z-10"
              />
            </motion.div>

            {/* Right Side: Information & Socials */}
            <div className="z-10 lg:-mt-60 flex flex-col justify-center space-y-12 order-3 lg:pl-10 pb-10 lg:pb-0">
               
               {/* About Me Section */}
               <div>
                 <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">About Me</h3>
                 <p className="text-[#a0a0a0] text-sm leading-relaxed mb-5 max-w-sm">
                   Over the last 4 years, I developed my frontend and backend dev skills to deliver dynamic software and web applications.
                 </p>
                 <a href="#about" className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:text-gray-300 transition-colors w-max border-b border-white/20 pb-1">
                   Learn More <span>→</span>
                 </a>
               </div>

               {/* My Work Section */}
               <div>
                 <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">My Work</h3>
                 <p className="text-[#a0a0a0] text-sm leading-relaxed mb-5 max-w-sm">
                   I specialize in building robust and scalable applications across front-end and back-end. I focus on clean architecture and maintainable code, leveraging AI-assisted tools to enhance productivity, speed up iteration, and deliver reliable solutions efficiently.
                 </p>
                 <a href="#portfolio-section" className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:text-gray-300 transition-colors w-max border-b border-white/20 pb-1">
                   Browse Portfolio <span>→</span>
                 </a>
               </div>

               {/* Follow Me Section */}
               <div>
                 <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">Follow Me</h3>
                 <div className="flex gap-5 text-white">
                    
                    <a href="https://www.instagram.com/seddik_amrani/" className="hover:text-pink-500 transition-colors"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
                    <a href="https://www.linkedin.com/in/seddik-gaming-95b36a286/" className="hover:text-blue-700 transition-colors"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>     
                    <a href="https://github.com/Amrani005" className="hover:text-gray-400 transition-colors"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
                 </div>
               </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero