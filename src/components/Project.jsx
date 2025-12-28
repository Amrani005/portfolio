import React, { useState } from 'react'
import { myProjects } from '../constants'
import ProjectDetails from './ProjectDetails'
import { motion } from 'motion/react'



const Project = ({ title, description,subDescription,href,
  image,tags,setPreview}) => {

    const [hidden,setHidden]=useState(false);

    
  return (
    <>
       <div className='flex-wrap  gap-5 py-10 justify-between
        sm:flex sm:space-y-0 lg:px-100  overflow-hidden  ' onMouseEnter={()=>setPreview(image)}
        onMouseLeave={()=>setPreview(null)} >
        <div>
         <p className='text-xl md:text-2xl lg:text-2xl mb-2'>{title}</p>
         <div className='flex  text-sm   gap-5  text-yellow-600 font-bold'>
           {tags.map((tag)=>(
            <span key={tag.id}> {tag.name} </span>
           ))}
         </div>
        </div>
      
      <button onClick={()=>setHidden(true)} className='flex items-center mt-18  gap-2 cursor-pointer hover-animation'>
        Read More
        <img src="src/assets/arrow-right.svg" className='w-5'/>
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
