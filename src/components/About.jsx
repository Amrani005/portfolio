import { i, section } from 'motion/react-client'
import React from 'react'
import Card from './Card'
import { useRef } from 'react'
import { Globe } from './ui/Globe'
import CopyText from './ui/CopyText'
import { FrameWorks } from './ui/FrameWorks'
import { easeInOut, motion } from 'motion/react'


const About = () => {
  const grid2container = useRef();
  return (
   <section id='about-section' className='c-space  bg-midnight '>
      <motion.h2 
       initial={{x:-50,opacity:0}}
       whileInView={{x:0,opacity:1}}
       
       transition={{delay:0.6}}
      className='text-5xl lg:text-7xl md:text-6xl text-white 
      h-full w-full flex font-bold mt-12 lg:justify-center lg:-mb-30 '>
        About me 
      </motion.h2>

      <motion.div
       initial={{y:50,opacity:0}}
       whileInView={{y:0,opacity:1}}
       transition={{delay:1,duration:1}}
      className='grid pb-10 grid-cols-1 md:grid-cols-6 md:auto-rows-[18rem]
       mt-12  gap-4 lg:p-50'>
        {/* Grid 1 */}
        <div className='grid-1 grid-default-color   '
        >
          <img src="assets/coding-pov.png" 
          className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3rem] 
          md:-right-50 md:inset-y-10 lg:scale-[2.5]  ' />
            
              <h1 className='headtext translate-y-26 lg:translate-y-102 '>Hi,I'Am Seddik</h1>
              <p className='subtext translate-y-28 lg:translate-y-105 '>
               Over the last 4 years, I develope my frontend and backend dev
               skills to deliver dynamic and software and web applications
              </p>
            <div className='absolute inset-x-0
             -bottom-10 h-1/2 md:h-1.3 bg-gradient-to-t from-indigo 
             duration-3000 '/>
        </div>
        {/* Grid 2 */}
        <div className='grid-2
         grid-default-color '>
          <div ref={grid2container} className=' items-center flex justify-center w-full h-full'>
            <p className='uppercase text-5xl items-end text-center 
             text-gray-500 '>
            code is craft
          </p>
          <Card 
           text="SOLID"
           style={{rotate:"90deg",left:"70%",bottom:"30%"}}
           containerRef={grid2container}
          />
          <Card 
           text="SRP"
           style={{rotate:"-45deg",left:"0%",top:"55%"}}
           containerRef={grid2container}
          />
          <Card 
           text="GRASP"
           style={{rotate:"20deg",left:"38%",top:"10%"}}
           containerRef={grid2container}
          />
          <Card 
           text="Design Principles"
           style={{rotate:"75deg",left:"20%",top:"30%"}}
           containerRef={grid2container}
          />
          <Card 
           text="Design Patterns"
           style={{rotate:"-30deg",left:"45%",top:"60%"}}
           containerRef={grid2container}
          />
         
         

          </div>
          
        </div>
        {/* Grid 3 */}
        <div className='grid-3
         grid-black-color '>
          <div className='w-[50%] z-10 '>
            <h1 className='headtext  '>
            Time Zone

          </h1>
          <p  className='subtext '>
            I'm based in Algeria,and open to remote work worldwide
          </p>
          <div className='absolute left-[30%] top-[10%] '>
            
            <Globe/>
          </div>
          </div>
          
            
        </div>
        {/* Grid 4 */}
        <div className='grid-4
          grid-special-color '>
            <div className='items-center justify-center flex flex-col '>
              <p className='headtext text-center py-5 text-2xl justify-center'>
               Do you want to start a project togeher
              </p>
             <CopyText/>
              
            </div>
           
        </div>
        {/* Grid 5 */}
        <div className='grid-5
        grid-default-color '>
          <p className='headtext'>
            Tech Stack
          </p>
          <p className='text-neutral-400 text-sm md:text-base text-pretty
           w-[50%] lg:w-[50%] '>
               I specialize in building robust and scalable applications across front-end and back-end.
               I focus on clean architecture and maintainable code, and I
               leverage AI-assisted tools to enhance productivity, 
               speed up iteration, and deliver reliable solutions  
               efficiently.
          </p>
          <div className='absolute inset-y-0  start-[50%] w-full h-full 
            scale-[0.9] lg:-top-25 md:-top-25 '>
             <FrameWorks/>
          </div>
        </div>

      </motion.div>
   </section>
  )
}

export default About
