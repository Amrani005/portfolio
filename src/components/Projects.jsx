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
    <div className='c-space  bg-midnight '  onMouseMove={handleMouseMove}>
    
      <motion.h1
       initial={{x:-80,opacity:0}}
       whileInView={{x:0,opacity:1}}
       transition={{delay:0.8,duration:1}}
       className='text-5xl lg:text-7xl md:text-6xl text-white 
        flex font-bold mt-10
      justify-center mb-29  '
     
      >
        My Selected Projects
      </motion.h1>
         
      <div className='bg-gradient-to-r from-transparent via-neutral-700
      mt-12 h-[1px] w-full mb-5  '/>
        <div>
       {myProjects.map((project)=>(
        <Project {...project}  setPreview={setPreview} />
       ))} 
       {preview &&  (
        <motion.img className="fixed top-0 z-300 object-cover h-56 rounded-lg
        shadow-lg pointer-event-none w-80" 
        style={{x:springX,y:springY}} 
        src={preview} />
       )}
        
      </div>
    </div>
  )
}

export default Projects


