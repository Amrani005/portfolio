import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] text-white border-t border-white/20 pt-20 pb-10 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Top Section: Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
              SEDDIK
            </h2>
            <p className="text-[10px] tracking-[0.2em] uppercase leading-loose text-white/50 max-w-xs">
              Crafting secure, scalable, and user-centric web solutions. 
              <br /><br />
              Based in Algeria [UTC+1]
              <br />Working Globally.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-8">
              // Navigation
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#hero-section" className="text-[11px] font-bold tracking-[0.2em] uppercase hover:text-white/50 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about-section" className="text-[11px] font-bold tracking-[0.2em] uppercase hover:text-white/50 transition-colors">About</a>
              </li>
              <li>
                <a href="#portfolio-section" className="text-[11px] font-bold tracking-[0.2em] uppercase hover:text-white/50 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#contact-section" className="text-[11px] font-bold tracking-[0.2em] uppercase hover:text-white/50 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col">
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-8">
              // Socials
            </h3>
            <div className="flex space-x-6">
              {/* GitHub */}
              <a href="https://github.com/Amrani005" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-10"></div>

        {/* Bottom Section: Copyright & Massive Text */}
        <div className="flex flex-col items-center justify-center pt-10">
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-white/90 text-center mb-16">
            Thanks for watching
          </h1>

          <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.3em] uppercase text-white/40">
            <p>
              &copy; {currentYear} SEDDIK // ALL RIGHTS RESERVED.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>

        </div>
        
      </div>
    </footer>
  );
};

export default Footer;