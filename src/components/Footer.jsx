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
              <a href="https://www.linkedin.com/in/seddik-gaming-95b36a286/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a href="https://www.instagram.com/seddik_amrani/" className="hover:text-pink-500 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
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