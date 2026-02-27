import React, { useState } from 'react'
import Project from './Project'
import { myProjects } from '../constants'
import { useMotionValue, useSpring,motion } from 'motion/react'



const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x,{damping:10,stiffness:50})
  const springY = useSpring(y,{damping:10,stiffness:50})
  const handleMouseMove = (e)=>{
    x.set(e.clientX + 20)
    y.set(e.clientY - 20)
  }
  const [preview,setPreview]= useState(null );

  return (
    <div id='portfolio-section' className='c-space  bg-midnight  '  onMouseMove={handleMouseMove}>
    
      <motion.h1
       initial={{x:-80,opacity:0}}
       whileInView={{x:0,opacity:1}}
       transition={{}}
       className='text-5xl lg:text-7xl md:text-6xl text-white 
        flex font-bold mt-10
      justify-center mb-29  '
     
      >
        My Selected Projects
      </motion.h1>
         
      <div className='bg-gradient-to-r   from-transparent via-neutral-700
      mt-12 h-[1px] w-full mb-5  '/>
        <div className='hidden md:block'>
          {myProjects.map((project)=>(
           <Project {...project}  setPreview={setPreview} />
          ))} 
          {preview &&  (
           <motion.img className="fixed  top-0 z-300 object-cover h-56 rounded-lg
           shadow-lg pointer-event-none w-80" 
           style={{x:springX,y:springY}} 
           src={preview} />
          )}
        
        </div>

        <div className='block md:hidden space-y-10 px-4 pb-10'>
        {myProjects.map((project, index) => (
          <motion.div
            key={project.id || index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[#1A1A2E] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 flex flex-col"
          >
            {/* Project Image Area */}
            <div className="w-full h-56 overflow-hidden relative bg-neutral-900">
              {/* Replace 'project.image' with whatever your thumbnail property is named */}
              <img 
                src={project.image || project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details Area */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Optional: Add a button or tags section here for mobile users to tap */}
              <button className="w-full py-3 rounded-lg bg-neutral-800 text-white font-semibold text-sm hover:bg-neutral-700 transition-colors border border-neutral-700">
                View Project
              </button>
            </div>
          </motion.div>
        ))}
      </div>


    </div>
  )
}

export default Projects


