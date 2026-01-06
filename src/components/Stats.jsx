import React, { useEffect, useRef } from "react";
// Using your preferred import style
import { motion, useInView, useMotionValue, useSpring } from "motion/react";

// --- Helper Component for the Number Counter ---
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Motion value starting at 0
  const motionValue = useMotionValue(0);
  
  // Spring physics for smooth "landing" on the final number
  const springValue = useSpring(motionValue, {
   
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  // Update the text content directly for performance
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="font-bold" />;
};

// --- Main Stats Component ---
const Stats = () => {
  const statsData = [
    {
      id: 1,
      value: 12,
      suffix: "+",
      label: "Projects Completed",
      desc: "Delivered scalable web solutions",
    },
    {
      id: 2,
      value: 2,
      suffix: "+",
      label: "Years Experience",
      desc: "Specialized in Front-end & Back-end",
    },
    {
      id: 3,
      value: 15,
      suffix: "+",
      label: "Technologies",
      desc: "React, .NET, Tailwind, & more",
    },
    {
      id: 4,
      value: 99,
      suffix: "%",
      label: "Client Satisfaction",
      desc: "Based on feedback & repeat work",
    },
  ];

  return (
    <section className="w-full py-20 bg-midnight relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[200px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
          <motion.h2 
          initial={{ opacity: 0, x: -80 }}
           whileInView={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: -80 }}
         transition={{ delay: 0.6}}
         
          className=" lg:text-7xl text-5xl mb-10 text-white text-center
          font-bold">
            Stats
          </motion.h2>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group bg-[#10102b] border border-white/5 p-8
               rounded-2xl flex flex-col items-center text-center 
               shadow-lg hover:shadow-purple-500/10 transition-shadow 
               cursor-pointer"
            >
              {/* Animated Number */}
              <div className="lg:flex hidden text-5xl md:text-6xl text-transparent
               bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 
               group-hover:from-red-900 group-hover:to-red-500 
               transition-all duration-300">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              {/* Animated Number */}
              <div className=" lg:hidden flex text-5xl md:text-6xl text-transparent
               bg-clip-text bg-gradient-to-b from-red-900 to-red-500 ">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <h3 className="text-xl font-bold text-white mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;