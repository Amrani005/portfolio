
import React from 'react'
import { motion } from 'motion/react'

const ParallaxBackgrounds = () => {
  return (
    <section className='absolute w-full h-full bg-cover  '>
        <div className='relative  lg:w-screen h-screen overflow-y-hidden '> 
          <motion.div 
           
          >
            <img src="assets/sky.jpg" 
               className='absolute h-screen -z-0 w-full brightness-60'
              />

          </motion.div>

           <motion.div
           
           >
            
            <img src="assets/mountain-1.png" 
               className='hidden lg:flex md:flex absolute h-screen z-5 w-full brightness-60'
              />
           </motion.div>

           <motion.div 
            
           >
             
               <img src="assets/mountain-2.png" 
               className='absolute h-screen w-full z-1 w-full brightness-60'
              />
           </motion.div>

           <motion.div
            
           >
             <img src="assets/mountain-3.png" 
               className='absolute h-screen  w-full brightness-75'
              />

           </motion.div>

           <motion.div
           
           >
             <img src="assets/planets.png" 
               className='absolute h-screen  w-full brightness-75'
              />

           </motion.div>
              
              

              
        </div>
    </section>
  )
}

export default ParallaxBackgrounds
