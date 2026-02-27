import React from 'react'
import { motion } from 'motion/react'

const Skills = () => {
  return (
    <section className='flex flex- font-bold p-10 '>
           <motion.h1 
             initial={{x:-50,opacity:0}}
             animate={{x:0,opacity:1}}
             transition={{duration:0.3}}
             className='text-5xl text-white'>
             My Skills
           </motion.h1>
            <motion.div 
             initial={{x:-50,opacity:0}}
             animate={{x:0,opacity:1}}
             transition={{duration:0.6}}
             className=''>
                <div className=''>
                   
                </div>
            </motion.div>
    </section>
  )
}
 
export default Skills
