import HeroText from './HeroText'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <section id='hero-section' className="min-h-screen bg-midnight flex items-center 
    justify-center p-4 md:p-10">
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 
      w-full max-w-7xl items-center border border-white/10
       p-8 md:p-16 rounded-[2rem] bg-gradient-to-b from-white/[0.03]
        to-transparent">
        
        {/* Left Side: Your HeroText Information */}
        <div className="z-10">
           <HeroText />
           
           {/* Integrated Buttons (CTAs) */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 2 }}
             className="flex flex-wrap gap-4 mt-10"
           >
             <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
               View Projects
             </button>
             <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all">
               My Skills
             </button>
           </motion.div>
        </div>

        {/* Right Side: Your Photo with Motion Animation */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative group"
        >
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border border-white/10">
            <img 
              src="assets/neggaaaa.png" 
              alt="Seddik" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
            />
          </div>
          
          {/* Decorative background element for depth without 3D */}
          <div className="absolute -inset-4 bg-red-600/10 blur-3xl rounded-full z-0 group-hover:bg-red-600/20 transition-all" />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero