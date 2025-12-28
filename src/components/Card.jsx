import { motion } from 'motion/react'
import React, { useRef } from 'react'


const Card = ({style,text,image,containerRef}) => {
  return image && !text ? (
    <motion.img
      className='absollute z-15 cursor-grab w-15 h-15'
      src={image}
      drag 
      style={style}
      whileHover={{scale:1.05}}
      dragConstraints={containerRef}
    />
  ):(
    <motion.div className='absolute px-1 py-3 text-xl text-center rounded-full
    cursor-grab ring ring-gray-700 font-extralight bg-storm w-[12rem] '
    style={style}
    drag
    whileHover={{scale:1.05}}
    dragConstraints={containerRef}
    >
      {text}
    </motion.div>
  )
}
 
export default Card
