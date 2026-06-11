"use client";
import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import { experiences } from "../../constants";

export const Timeline = () => {
  const containerRef = useRef(null);

  // Optimized Scroll Logic: using scaleY instead of calculating pixel heights
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 80%"],
  });

  return (
    <section 
      id="experience-section" 
      className="w-full bg-[#050505] min-h-screen pt-32 pb-20 relative text-white flex flex-col items-center overflow-hidden"
    >
      
      {/* 
        Brutalist Header 
        Massive typography paired with widely spaced metadata.
      */}
      <div className="w-full max-w-7xl px-6 mb-20 flex flex-col items-start border-b border-white/20 pb-8">
        <motion.h2 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[10px] tracking-[0.5em] uppercase text-white/50 mt-6"
        >
          04 // Operational History
        </motion.p>
      </div>

      {/* 
        Timeline Container 
      */}
      <div className="w-full max-w-7xl px-6">
        <div ref={containerRef} className="relative w-full pb-10 pl-8 md:pl-16">
          
          {/* 
            The Brutalist Track Line 
            Replaced the red gradient with a strict 1px pure white border.
          */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 origin-top">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute inset-0 w-full bg-white origin-top"
            />
          </div>

          {/* Timeline Items */}
          {experiences.map((item, index) => (
            <div
              key={index}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-white/10 group"
            >
              {/* 
                Geometric Node 
                Replaced rounded circles with sharp squares that invert on hover.
              */}
              <div className="absolute -left-[37px] md:-left-[69px] top-16 w-3 h-3 bg-[#050505] border border-white/50 group-hover:bg-white transition-colors duration-500 z-10" />

              {/* Left Column: Date & Title */}
              <div className="md:col-span-5 flex flex-col">
                <h3 className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4">
                  {item.date}
                </h3>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2 group-hover:pl-2 transition-all duration-300">
                  {item.title}
                </h2>
                <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/70">
                  {item.job}
                </h3>
              </div>

              {/* Right Column: Content */}
              <div className="md:col-span-7 flex flex-col space-y-6 md:pt-10">
                {item.contents.map((content, idx) => (
                  <p 
                    key={idx} 
                    className="text-[10px] md:text-[11px] tracking-[0.15em] leading-loose uppercase text-white/50 group-hover:text-white/80 transition-colors duration-300"
                  >
                    {content}
                  </p>
                ))}
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Timeline;