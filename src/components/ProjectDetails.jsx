import { img, p } from 'motion/react-client'
import React, { useState } from 'react'
import { motion } from 'motion/react'

const ProjectDetails = ({title, description,subDescription,href,
  image,tags,closeModel}) => {
    
  return (
    <div className={`fixed inset-0 z-100 items-center justify-center w-full h-full
     backdrop-blur-sm p-10  `}  >
        <motion.div  
                initial={{scale:0.5,opacity:0}}
                animate={{scale:1,opacity:1}}
                
                 className={` lg:left-140 relative max-w-2xl border shadow-sm rounded-2xl
         bg-gradient-to-l from-midnight-900 to-navy border-white/10
          `}>
            <button className={`fixed rounded-full  top-5 right-5
             bg-midnight hover:bg-gray-500 `}
             onClick={closeModel}
            >
                <img src="src/assets/close.svg" className='w-6 m-6 '/>
            </button>
             <img src={image} alt={title} className='w-full h-full 
              rounded-t-2xl rounded-b-lg overflow ' />
               <div className='p-3  '>
                  <h5 className='mb-3 text-2xl font-bold text-white'> {title} </h5>
                  <p className='subtext'> {description} </p>
                  {subDescription.map((subDescription)=>(
                    <p className='subtext  '>{subDescription}</p>
                  ))}
                  <div className='flex  flex-col gap-5   items-center justify-between'>
                    <div className='flex  gap-3'>
                       {tags.map((tag)=>(
                        <img 
                         src={tag.path}
                        className='size-10  mt-5 rounded-lg hover-animation'
                        />
                    ))} 
                    </div>
                    <a className='flex  gap-3 hover-animation cursor-pointer'>
                        Viex Project
                        <img src="src/assets/arrow-up.svg"  />
                    </a>
                    
                  </div>
               </div>
        </motion.div>
       
    </div>
  )
}

export default ProjectDetails
