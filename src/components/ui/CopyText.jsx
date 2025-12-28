import React, { useEffect, useState } from 'react'
import { AnimatePresence, scale } from 'motion/react';
import { motion } from 'motion/react';

const CopyText = () => {
    const [copied,setCopied]=useState(false);
    const [text,setText]= useState("Copy Email Adress");
    const email = "superamrani@gmail.com"


    const handleCopy=()=>{
        navigator.clipboard.writeText(email)
        setCopied(true);
        setText("Email Copied!")

        setTimeout(()=>{
            setCopied(false);
            setText("Copy Email Adress")
        },3000);
    }
  return (
    <div> 
        <motion.button className=' relative headtext bg-black text-white rounded-full
         px-1 py-4 w-[14rem] cursor-pointer md:p-2 '
          onClick={handleCopy} 
          whileHover={{y:-6}}
          whileTap={{scale:1.05}}
          
        >
            <AnimatePresence node="wait">
           
            <motion.p 
             className='flex justify-center items-center text-center 
              gap-2  '
              key="copied"
              whileTap={{scale:1.05}}
              transition={{duration:400}}
              
            > 
                <img src={`${!copied ? 'assets/copy.svg':'src/assets/copy-done.svg'} `}  className='w-5 h-5' />
               {text}
            </motion.p>
          </AnimatePresence>
        </motion.button>
      
    </div>
  )
}

export default CopyText
