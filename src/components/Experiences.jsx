import { p } from 'motion/react-client'
import React from 'react'
import { experiences } from '../constants'
import { Timeline } from './ui/Timeline'
import { motion } from 'motion/react'

const  Experiences = () => {
  return (
    <section className=' mt-20 c-space  '>
        <motion.h1
          initial={{y:50,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:0.6,duration:1}}
          className='text-5xl lg:text-7xl font-bold mb-20 text-center'>
            Experiences
        </motion.h1> 
        <Timeline/>
    </section>
  )
}

export default Experiences
