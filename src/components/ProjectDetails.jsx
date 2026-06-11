import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectDetails = ({ 
  title, 
  description, 
  subDescription, 
  href, 
  image, 
  tags, 
  closeModel 
}) => {
  
  // Close modal on Escape key press (adds to the premium feel)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModel();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModel]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/95 backdrop-blur-md p-4 md:p-10">
      
      {/* 
        Brutalist Modal Container
        Sharp edges, pure black, wireframe borders. Split layout on desktop.
      */}
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-6xl bg-[#0a0a0a] border border-white/20 flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
      >
        
        {/* Minimalist Close Button */}
        <button 
          onClick={closeModel}
          className="absolute top-0 right-0 z-50 bg-[#050505] border-l border-b border-white/20 p-4 md:p-6 text-[10px] tracking-[0.3em] uppercase text-white/50 hover:text-white hover:bg-white/5 transition-all flex items-center gap-3 group"
        >
          <span className="hidden md:block group-hover:tracking-[0.4em] transition-all">Close</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* =========================================
            LEFT: PROJECT IMAGERY
            ========================================= */}
        <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-white/20 bg-[#050505] relative overflow-hidden group">
          <div className="absolute top-6 left-6 text-[10px] tracking-[0.4em] uppercase text-white/40 z-10 mix-blend-difference">
            // Visual Data
          </div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 md:h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
          />
        </div>

        {/* =========================================
            RIGHT: PROJECT DATA & CTA
            ========================================= */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
          
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-8">
            {title}
          </h2>

          <div className="space-y-6 mb-12">
            <p className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/60 leading-loose">
              {description}
            </p>
            
            {subDescription && subDescription.map((subDesc, index) => (
              <p key={index} className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/40 leading-loose">
                {subDesc}
              </p>
            ))}
          </div>

          <div className="mt-auto flex flex-col sm:flex-row sm:items-end justify-between gap-10">
            
            {/* Tech Stack Tags */}
            <div>
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {tags && tags.map((tag, index) => (
                  <div 
                    key={index}
                    className="border border-white/20 p-3 bg-[#050505] hover:bg-white hover:invert transition-all duration-300"
                  >
                    <img 
                      src={tag.path} 
                      alt="Tech Tag"
                      className="w-5 h-5 grayscale" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Brutalist CTA Button */}
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-white/20 py-5 px-8 text-[10px] tracking-[0.4em] font-bold uppercase text-white hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-4 w-fit whitespace-nowrap"
            >
              Deploy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
            
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default ProjectDetails;