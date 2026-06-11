import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// --- Helper Component for the Number Counter ---
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30, // Adjusted for a slightly more rigid, mechanical stop
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  // Removed hardcoded font-bold so it can inherit the massive styling from the parent
  return <span ref={ref} />;
};

// --- Main Stats Component ---
const Stats = () => {
  const statsData = [
    {
      id: 1,
      value: 12,
      suffix: "+",
      label: "Projects Completed",
      desc: "Delivered scalable solutions",
    },
    {
      id: 2,
      value: 2,
      suffix: "+",
      label: "Years Experience",
      desc: "Front-end & Back-end",
    },
    {
      id: 3,
      value: 15,
      suffix: "+",
      label: "Technologies",
      desc: "React, .NET, Node, & more",
    },
    {
      id: 4,
      value: 99,
      suffix: "%",
      label: "Client Satisfaction",
      desc: "Based on repeat work",
    },
  ];

  return (
    <section className="w-full py-32 bg-[#050505] relative overflow-hidden flex flex-col items-center">
      
      {/* 
        Brutalist Section Header 
        Massive font, ultra-tight tracking, strict alignment.
      */}
      <div className="max-w-7xl w-full px-6 mb-16 flex flex-col md:flex-row justify-between items-end border-b border-white/20 pb-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none"
        >
          Stats
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[10px] text-white/50 uppercase tracking-[0.4em] max-w-xs text-right mt-6 md:mt-0"
        >
          A quantitative overview of professional output and technical capacity.
        </motion.p>
      </div>

      {/* Grid Layout: Sharp, unrounded borders with hover inversion */}
      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group border border-white/20 p-10 flex flex-col justify-between 
                         min-h-[240px] bg-transparent text-white transition-colors duration-500 
                         hover:bg-white hover:text-black cursor-default"
            >
              {/* Top Label & Desc */}
              <div>
                <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
                  {stat.label}
                </h3>
                <p className="text-[9px] tracking-[0.2em] uppercase opacity-50 group-hover:opacity-80 transition-opacity">
                  {stat.desc}
                </p>
              </div>

              {/* Animated Number: Inherits text color for smooth inversion */}
              <div className="text-6xl lg:text-8xl font-black tracking-tighter mt-8 self-end transition-colors duration-500">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;