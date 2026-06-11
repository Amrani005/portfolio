import React, { useRef } from 'react'
import Card from './Card'
import { Globe } from './ui/Globe'
import CopyText from './ui/CopyText'
import { FrameWorks } from './ui/FrameWorks'
import { motion } from 'framer-motion'

const About = () => {
  const grid2container = useRef();

  return (
    <section id='about-section' className='bg-[#050505] min-h-screen pt-32 pb-20 relative text-white flex flex-col items-center'>
      
      {/* 
        Brutalist Header 
      */}
      <div className="w-full max-w-7xl px-6 mb-16 flex flex-col items-start border-b border-white/20 pb-8">
        <motion.h2 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[10px] tracking-[0.5em] uppercase text-white/50 mt-6"
        >
          Developer Dossier // System Architecture
        </motion.p>
      </div>

      {/* 
        Strict Wireframe Grid Layout 
        Achieved using gap-0 and border-collapse techniques.
      */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1 }}
        className="w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/20"
      >
        
        {/* Cell 1: Introduction */}
        <div className="border-b border-r border-white/20 p-10 md:p-16 relative overflow-hidden group">
          <h3 className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-10">01 // Identity</h3>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 relative z-10 group-hover:text-white transition-colors">
            Hi, I'm Seddik
          </h1>
          <p className="text-[11px] tracking-[0.2em] uppercase leading-loose text-white/60 relative z-10 max-w-md">
            Over the last 4 years, I developed my frontend and backend dev skills to deliver dynamic software and web applications.
          </p>
          {/* Desaturated Image */}
          <img 
            src="assets/coding-pov.png" 
            alt="Coding POV"
            className="absolute -right-10 -bottom-10 w-2/3 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700" 
          />
        </div>

        {/* Cell 2: Philosophy (Floating Cards) */}
        <div className="border-b border-r border-white/20 p-10 md:p-16 relative overflow-hidden flex flex-col">
          <h3 className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-10 z-20 relative">02 // Philosophy</h3>
          
          <div ref={grid2container} className="relative flex-grow min-h-[300px] flex items-center justify-center">
            <p className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white/10 z-0">
              Code is Craft
            </p>
            {/* The Cards remain absolutely positioned based on your original logic */}
            <Card text="SOLID" style={{rotate:"90deg",left:"70%",bottom:"30%"}} containerRef={grid2container} />
            <Card text="SRP" style={{rotate:"-45deg",left:"0%",top:"55%"}} containerRef={grid2container} />
            <Card text="GRASP" style={{rotate:"20deg",left:"38%",top:"10%"}} containerRef={grid2container} />
            <Card text="Design Principles" style={{rotate:"75deg",left:"20%",top:"30%"}} containerRef={grid2container} />
            <Card text="Design Patterns" style={{rotate:"-30deg",left:"45%",top:"60%"}} containerRef={grid2container} />
          </div>
        </div>

        {/* Cell 3: Tech Stack (Spans 2 columns on desktop) */}
        <div className="md:col-span-2 border-b border-r border-white/20 p-10 md:p-16 relative flex flex-col md:flex-row gap-12 items-center group">
          <div className="w-full md:w-1/3">
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-10">03 // Tech Stack</h3>
            <p className="text-[11px] tracking-[0.2em] uppercase leading-loose text-white/60">
              I specialize in building robust and scalable applications across front-end and back-end. I focus on clean architecture and maintainable code, leveraging AI-assisted tools to enhance productivity, speed up iteration, and deliver reliable solutions efficiently.
            </p>
          </div>
          <div className="w-full md:w-2/3 relative min-h-[300px] flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
            <FrameWorks />
          </div>
        </div>

        {/* Cell 4: Time Zone */}
        <div className="border-b border-r border-white/20 p-10 md:p-16 relative group overflow-hidden">
          <h3 className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-10 relative z-10">04 // Location</h3>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 relative z-10">
            Time Zone
          </h1>
          <p className="text-[11px] tracking-[0.2em] uppercase leading-loose text-white/60 relative z-10">
            Based in Algeria [UTC+1]
            <br />Open to remote work worldwide.
          </p>
          
          {/* Globe positioned as an architectural overlay */}
          <div className="absolute top-0 right-0 w-[150%] h-[150%] translate-x-[20%] -translate-y-[20%] opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000 pointer-events-none">
            <Globe />
          </div>
        </div>

        {/* Cell 5: Contact CTA */}
        <div className="border-b border-r border-white/20 p-10 md:p-16 flex flex-col justify-between group hover:bg-white transition-colors duration-500">
          <div>
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-10 group-hover:text-black/40 transition-colors">05 // Initiate</h3>
            <p className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 group-hover:text-black transition-colors">
              Do you want to start a project together?
            </p>
          </div>
          
          <div className="group-hover:invert transition-all duration-500 origin-left">
            {/* The CopyText component will invert perfectly if it inherits standard colors */}
            <CopyText />
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default About