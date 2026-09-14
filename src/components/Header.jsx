import React, { useState, useEffect } from 'react';
import { Navigation } from '../constants';
import { motion } from 'motion/react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  // Track the current section on scroll to update the active state
  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      
      Navigation.forEach((item) => {
        if (item.href && item.href.startsWith('#') && item.href.length > 1) {
          const element = document.querySelector(item.href);
          
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = item.href;
            }
          }
        } else if (item.href === '/' && window.scrollY < 150) {
          current = '/';
        }
      });
      
      if (current) setActiveSection(current);
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  const scrollToForm = () => {
    document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl 
      p-2 md:px-6 md:py-3 flex justify-between items-center 
      bg-[#0a0a0a]/50 backdrop-blur-2xl border border-white/10 rounded-full 
      z-[80] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
    >
      
      {/* Logo */}
      <p 
        onClick={scrollToForm} 
        className="text-lg md:text-2xl cursor-pointer font-bold text-white tracking-tight ml-2 md:ml-0"
      >
        Seddik
      </p>

      {/* Unified iOS-Style Navigation */}
      <nav className="flex items-center gap-1 md:gap-2">
        {Navigation.map((item) => {
          const isActive = activeSection === item.href;
          
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveSection(item.href)}
              className={`relative px-3 py-2 md:px-5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium transition-colors duration-300 z-10 
                ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              {/* Active State Glass Pill */}
              {isActive && (
                <motion.div
                  layoutId="activeHeaderIndicator"
                  className="absolute inset-0 bg-white/10 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-md rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;