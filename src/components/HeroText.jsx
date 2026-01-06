import React from 'react'
import FlipWords from './ui/FlipWords'
import  {motion} from 'motion/react'


const HeroText = () => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },

  }
  return (
    <div className=' text-center z-60 md:mt-40 md:text-left lg:text-left 
       ruonded-3xl bg-clip-text font-extrabold text-neutral-300 py-50
     -mt-20  font-mono lg:mx-45 md:mx-30 md:-translate-y-30 lg:-translate-y-40 lg:px-10'>
         {/*desktop view */ }
          <div className='flex flex-col  c-space
            md:flex   '>
              <motion.h1 
              initial='hidden'
              animate='visible'
              variants={variants}
              transition={{delay:1}}
               className='text-3xl relative items-center  text-heading lg:text-7xl font-medium mb-6 '>
                 Hi,I'm
                <span className='text-transparent bg-clip-text 
                bg-gradient-to-b lg:from-red-900 lg:text-5xl  lg:to-red-500 
                from-red-900 to-red-500 ml-2'>
                  Seddik
                  </span>
             </motion.h1>

                <motion.p 
                 initial='hidden'
                 animate='visible'
                 variants={variants}
                  transition={{delay:1.2}}
                className='text-5xl text-center  hidden lg:text-5xl 
                 lg:flex md:flex lg:text-left md:text-left text-neutral-300 font-bold
                '>
                    A Developer <br /> Dedicated to Crafting
                </motion.p> 
                <motion.p
                  initial={{y:-50,opacity:0}}
                  animate={{y:0,opacity:1}}
                 transition={{delay:1.4}}
                 className='text-4xl  font-extrabold
                 lg:hidden md:hidden text-center  '>
                  Building
                </motion.p>

                <motion.div 
                  initial='hidden'
                  animate='visible'
                 
                  transition={{delay:1.6}}
                  className=' lg:ml-0 md:ml-0 flex flex-col c-space'
                  
                >
                    
                  <FlipWords words={["Secure","Modern","Smart"]}
                    className=' font-extrabold  text-5xl lg:text-57xl md:text-7xl text-white 
                      md:text-left lg:-translate-x-15  '
                       
                  />
                  <div  className='text-3xl lg:text-5xl font-medium
                   text-neutral-300 flex gap-3   ml-5 lg:ml-0 md:ml-0'>

                  </div>

                    
                </motion.div>
                
                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={variants}
                  transition={{delay:1.8}}
                  className='text-3xl lg:text-5xl font-medium
                   text-neutral-300 flex gap-3 font-bold '
                  >
                     <p className='font-bold'>Web</p> <p className=' flex font-bold lg:hidden md:hidden'> applications</p> <p className='hidden font-bold lg:flex md-flex'>Solutions</p>

                </motion.div>
                
                
             
            </div>
       

        {/*mobile view */ }
    </div>
  )
}

export default HeroText
