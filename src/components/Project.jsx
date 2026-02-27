import React, { useState } from 'react'
import { myProjects } from '../constants'
import ProjectDetails from './ProjectDetails'
import { motion } from 'motion/react'



const Project = ({ title, description,subDescription,href,
  image,tags,setPreview}) => {

    const [hidden,setHidden]=useState(false);

    
  return (
    <>
       <div className='flex-wrap   gap-5 py-7  justify-between
        sm:flex sm:space-y-0 lg:px-100    '
         onMouseEnter={()=>setPreview(image)}
        onMouseLeave={()=>setPreview(null)} >
        <div>
         <p className='text-xl md:text-2xl lg:-translate-x-80  lg:text-2xl mb-2'>{title}</p>
         <div className='flex lg:-translate-x-80 text-sm   gap-5  text-yellow-600 font-bold'>
           {tags.map((tag)=>(
            <span key={tag.id}> {tag.name} </span>
           ))}
         </div>
        </div>
      
      <button onClick={()=>setHidden(true)} className='flex mt-18  
        gap-2 cursor-pointer hover-animation lg:translate-x-80'>
        Read More
        <img src="assets/arrow-right.svg" className='w-5'/>
      </button>
    
      
    </div>
    <div className='bg-gradient-to-r from-transparent via-neutral-700
    to-transparent h-[1px] lg:mx-50   '/>
    {hidden &&
      
      (
        <ProjectDetails 
        title={title}
        description={description}
        subDescription={subDescription}
        href={href}
        tags={tags}
        image={image}
        closeModel={()=>setHidden(false)}
        setPreview={()=>setPreview(null)}
      />
      
      )
    }
      
    </>
    
  )
}

export default Project
