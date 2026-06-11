import React, { useState } from 'react'
import Project from './Project'
import { myProjects } from '../constants'
import { useMotionValue, useSpring, motion, AnimatePresence } from 'motion/react'

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false)
  const [preview, setPreview] = useState(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { damping: 15, stiffness: 100 })
  const springY = useSpring(y, { damping: 15, stiffness: 100 })

  const handleMouseMove = (e) => {
    if (showProjects) {
      x.set(e.clientX + 20)
      y.set(e.clientY - 20)
    }
  }

  return (
    <section
      id="portfolio-section"
      className="bg-[#050505] min-h-screen relative text-white flex flex-col justify-center overflow-hidden w-full"
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence mode="wait">
        {!showProjects ? (
          <motion.div
            key="portfolio-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50, filter: 'blur(5px)' }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="flex flex-col items-center justify-center w-full px-6 py-20 z-10"
          >
            <div className="relative flex justify-center items-center w-full max-w-4xl mx-auto h-[300px] md:h-[450px] mb-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute left-[5%] md:left-[15%] w-32 md:w-56 h-48 md:h-80 grayscale z-0 border border-white/10"
              >
                <img
                  src={myProjects[0]?.image || 'assets/neggaaaa_compressed.png'}
                  alt="Project Thumbnail Left"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute right-[5%] md:right-[15%] w-32 md:w-56 h-48 md:h-80 grayscale z-0 border border-white/10"
              >
                <img
                  src={myProjects[2]?.image || 'assets/neggaaaa_compressed.png'}
                  alt="Project Thumbnail Right"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative z-10 w-40 md:w-64 h-56 md:h-96 grayscale drop-shadow-2xl border border-white/20 bg-[#0a0a0a]"
              >
                <img
                  src={myProjects[1]?.image || 'assets/neggaaaa_compressed.png'}
                  alt="Project Thumbnail Center"
                  className="w-full h-full object-cover opacity-80"
                />
              </motion.div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-4xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter leading-none mb-4 z-20 text-center"
            >
              My Portfolio
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-[8px] md:text-[10px] tracking-[0.4em] uppercase text-white/50 mb-12 text-center"
            >
              Hello I am Seddik Fullstack Developer
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={() => setShowProjects(true)}
              className="px-12 py-4 border border-white/10 bg-black/50 backdrop-blur-sm text-white text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-500 z-20"
            >
              View Project
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="portfolio-list"
            initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full max-w-7xl mx-auto pt-32 pb-20 relative"
          >
            <button
              onClick={() => setShowProjects(false)}
              className="absolute top-16 md:top-20 left-6 text-white/40 hover:text-white flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase transition-colors z-50"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="1.5"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Return to cover
            </button>

            <div className="w-full px-6 mb-16 flex flex-col items-start border-b border-white/20 pb-8 mt-12">
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                Selected Works
              </h2>
            </div>

            <div className="hidden md:block px-6 relative">
              {myProjects.map((project) => (
                <Project key={project.id} {...project} setPreview={setPreview} />
              ))}

              {preview && (
                <motion.img
                  className="fixed top-0 left-0 z-[300] object-cover h-[350px] w-[450px] border border-white/20 pointer-events-none grayscale opacity-90 shadow-2xl shadow-black"
                  style={{ x: springX, y: springY }}
                  src={preview}
                  alt="Project Preview"
                />
              )}
            </div>

            <div className="block md:hidden px-6 space-y-8 pb-10">
              {myProjects.map((project, index) => (
                <Project
                  key={project.id || index}
                  {...project}
                  setPreview={setPreview}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects