import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // Skill categories mapping your specific background and approach
  const skillCategories = [
    {
      id: "01",
      title: "Fullstack Engineering",
      subtitle: "Web & Mobile Architecture",
      description: "Building robust, scalable applications from the ground up. Focused on clean architecture, maintainable codebases, and high-performance deployments.",
      tools: ["Next.js", "React Native", "TypeScript", "Prisma", "Tailwind CSS"]
    },
    {
      id: "02",
      title: "AI & System Logic",
      subtitle: "Data-Driven Development",
      description: "Leveraging machine learning models and AI-assisted workflows to accelerate iteration, build complex logic, and automate scalable systems.",
      tools: ["TensorFlow", "PyTorch", "OpenAI API", "Python", "Data Structures"]
    },
    {
      id: "03",
      title: "Neuromarketing & UX",
      subtitle: "Behavioral Design",
      description: "Designing interfaces rooted in cognitive psychology and neuromarketing. Minimizing cognitive load and driving user conversion through strategic visual hierarchies.",
      tools: ["Conversion Optimization", "A/B Testing", "User Psychology", "Framer Motion", "GSAP"]
    },
    {
      id: "04",
      title: "Leadership & Strategy",
      subtitle: "Creator-Founder Mindset",
      description: "Directing project lifecycles with an anti-toxic productivity approach. Analyzing business requirements to architect systems that align with high-level market strategies.",
      tools: ["System Architecture", "Project Management", "Agile", "Technical Leadership"]
    }
  ];

  return (
    <section id="skills-section" className="bg-[#050505] min-h-screen pt-32 pb-20 relative text-white flex flex-col items-center">
      
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
          Capabilities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[10px] tracking-[0.5em] uppercase text-white/50 mt-6"
        >
          Technical Arsenal // Strategic Logic
        </motion.p>
      </div>

      {/* 
        Wireframe Grid Layout 
      */}
      <div className="w-full max-w-7xl px-6">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/20"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="p-10 md:p-16 border-b border-r border-white/20 flex flex-col justify-between group hover:bg-white hover:text-black transition-colors duration-500 cursor-default"
            >
              {/* Top Section: ID & Titles */}
              <div className="mb-12">
                <h3 className="text-[10px] tracking-[0.4em] uppercase text-white/40 group-hover:text-black/40 transition-colors mb-8">
                  {category.id} // {category.subtitle}
                </h3>
                <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
                  {category.title}
                </h4>
                <p className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase leading-loose text-white/60 group-hover:text-black/70 transition-colors">
                  {category.description}
                </p>
              </div>

              {/* Bottom Section: Tool Tags */}
              <ul className="flex flex-wrap gap-3">
                {category.tools.map((tool, i) => (
                  <li 
                    key={i}
                    className="border border-white/20 group-hover:border-black/20 px-4 py-2 text-[9px] tracking-[0.2em] uppercase text-white/80 group-hover:text-black transition-colors"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Skills;