
import React from 'react'
import { motion } from 'motion/react'

const ParallaxBackgrounds = () => {
  return (
    <section className='absolute w-full h-full bg-cover  '>
        <div className='relative  lg:w-screen h-screen overflow-y-hidden '> 
          <motion.div 
           animate={{}}
           initial={{}}
          >
            <img src="src/assets/sky.jpg" 
               className='absolute h-screen -z-0 w-full brightness-80'
              />

          </motion.div>

           <motion.div
           animate={{y:0,opacity:1}}
           initial={{y:-50,opacity:0}}
           transition={{delay:0.5}}
           >
            
            <img src="src/assets/mountain-1.png" 
               className='hidden lg:flex md:flex absolute h-screen z-5 w-full brightness-60'
              />
           </motion.div>

           <motion.div 
            animate={{y:0,opacity:1}}
            initial={{y:-50,opacity:0}}
            transition={{delay:0.7}}
           >
             
               <img src="src/assets/mountain-2.png" 
               className='absolute h-screen w-full z-1 w-full brightness-60'
              />
           </motion.div>

           <motion.div
            animate={{y:0,opacity:1}}
            initial={{y:0,opacity:0}}
            transition={{delay:1.2}}
           >
             <img src="src/assets/mountain-3.png" 
               className='absolute h-screen  w-full brightness-75'
              />

           </motion.div>
              
              

              
        </div>
    </section>
  )
}

export default ParallaxBackgrounds
