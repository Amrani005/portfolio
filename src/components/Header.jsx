import React from 'react'
import { Navigation } from '../constants'
import { useState } from 'react'
import {motion} from 'motion/react'

const header = () => {
    const [isOpen,setIsOpen] = useState(false);
    const handleClick = () =>{
        setIsOpen(!isOpen);
    }
    
  return (
    <div className={`bg-transparent fixed text-red-800 text-3 p-3 lg:p-5 
      md:p-5 justify-between flex items-center shadow-xl w-full h-17 md:justify-between     ${isOpen ? '  z-100':'backdrop-blur z-100 '}   
     `}>
       <p className='text-3xl  font-bold '> Seddik</p>

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
                 <img src={!isOpen?'/src/assets/menu.svg':'/src/assets/close.svg'} className='w-13 h-13  rounded-xl' />
                    
            </button>

         </div>

         
            {isOpen && (
            <motion.div 
              initial={{opacity:0, x:-10}}
              animate={{opacity:1, x:20}}
              transition={{duration:1}}
             className='flex flex-col  lg:hidden gap-8 text-xl  top-20
               h-screen w-full  -translate-x-8 p-5 text-center pt-20 bg-transparent  
                fixed backdrop-blur z-50'
            >
               {Navigation.map((item)=>(
                    <a href={item.href}  className='text-white text-3xl hover:text-red-600
                       cursor-pointer font-bold duration-300 hover:scale-110 mb-10 '>
                     {item.name}
                   </a>
                ))}
            </motion.div>
         )}

         

         
    </div>
  )
}

export default header
