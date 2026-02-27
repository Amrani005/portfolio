import React from 'react'
import { Navigation } from '../constants'
import { useState } from 'react'
import {AnimatePresence, motion} from 'motion/react'
import { div } from 'motion/react-client'

const header = () => {
    const [isOpen,setIsOpen] = useState(false);
    const handleClick = () =>{
        setIsOpen(!isOpen);
    }
     const scrollToForm = () => {
     document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' });
   
    };
    
    
    
  return ( 
    <div >
        <div className={` mt-4 bg-black/30 fixed text-red-800 text-3 px-3 lg:p-5 
      md:p-5 justify-between flex items-center shadow-xl w-[85%]
        h-17 md:justify-between lg:left-30 left-8 backdrop-blur-lg z-100   ${isOpen ? 'rounded-t-3xl  ':'rounded-full '}   
     `}>
       <p onClick={scrollToForm} className='text-3xl cursor-pointer  font-bold '> Seddik</p>

         <div className='hidden md:hidden lg:hidden px-5 xl:flex gap-15 text-xl  text-zinc-100
        '>
            {Navigation.map((item)=>(
               <a href={item.href} className='text-white text-xl  cursor-pointer 
                duration-300 hover:scale-[1.1] hover:text-red-700  '>
                    {item.name}
               </a>
            ))}
            
         </div>

         <div className='flex  xl:hidden cursor-pointer duration-300 '>
            <button onClick={()=>handleClick()} className='cursor-pointer' >
                 <img src={!isOpen?'assets/menu.svg':'assets/close.svg'} className='w-13 h-13  rounded-xl' />
                    
            </button>

         </div>

          
            

         

         
    </div>
    <AnimatePresence>

    
    {isOpen && (
            <motion.div 
              initial={{opacity:0, y:-10}}
              animate={{opacity:1, y:0}}
              exit={{opacity:0, y:-10}}
              transition={{duration:0.4}}
              className='flex flex-col fixed top-20 items-center
                z-100 w-[85%] h-[50%] bg-black/30 backdrop-blur-lg
                rounded-b-3xl left-8'
            >
              <div className='flex flex-col gap-5 mt-8 ' >
                {Navigation.map((item)=>(
                  
                    <a href={item.href}  className='text-white text-3xl hover:text-red-600
                       cursor-pointer text-center  font-bold duration-300 hover:scale-110 mb-10 '>
                     {item.name}
                   </a>
                  
                    
                ))}</div>
               
            </motion.div>
         )}
         </AnimatePresence>
    </div>
   
  )
}

export default header
