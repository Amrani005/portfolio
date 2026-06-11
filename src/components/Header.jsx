import React, { useState } from 'react';
import { Navigation } from '../constants';
import { AnimatePresence, motion } from 'motion/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if(!isOpen)
    setIsOpen(true);
    else
    setIsOpen(false);
  };
 
  const scrollToForm = () => {
    document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); 
  };

  return (
    <>
      {/* Main Floating Header */}
      <header className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%]
       max-w-4xl py-3 px-6 md:px-8 flex justify-between items-center
         backdrop-blur  z-[100] border border-white/10 rounded-full shadow-2xl">
        
        {/* Logo */}
        <p 
          onClick={scrollToForm} 
          className="text-2xl md:text-3xl cursor-pointer font-bold 
          text-white tracking-tight"
        >
          Seddik
        </p>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-zinc-300">
          {Navigation.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-base font-medium transition-all duration-300 hover:text-white hover:-translate-y-0.5"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center">
          <button onClick={handleClick} className="cursor-pointer p-1 active:scale-95 transition-transform">
            <img 
              src={!isOpen ? 'assets/menu.svg' : 'assets/close.svg'} 
              alt="Menu Toggle" 
              className="w-7 h-7" 
            />
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-28 left-1/2 -translate-x-1/2 w-[90%]
             max-w-sm flex flex-col items-center  backdrop-blur-xl border border-white/10 rounded-3xl z-[90] py-8 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-6 w-full px-6">
              {Navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className="text-zinc-300 text-2xl font-semibold text-center 
                  py-2 transition-all duration-300 hover:text-red-600 hover:scale-105"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;