import { p } from 'motion/react-client'
import React from 'react'
import { experiences } from '../constants'
import { Timeline } from './ui/Timeline'
import { motion } from 'motion/react'

const  Experiences = () => {
  return (
    <section className=' mt-20 c-space  '>
       
        <Timeline/>
    </section>
  )
}

export default Experiences
