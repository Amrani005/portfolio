import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Using standard framer-motion import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form Submitted', formData);
    alert("Message sent! (Simulated)");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact-section" 
      className="w-full bg-[#050505] min-h-screen py-32 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* 
          Brutalist 2-Column Split 
          Using sharp borders to divide the sections visually
        */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 border border-white/20"
        >
          
          {/* =========================================
              LEFT COLUMN: TEXT & INFO
              ========================================= */}
          <div className="p-10 md:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/20 flex flex-col justify-between relative group">
            
            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-8">
                Contact
              </h2>
              <p className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/50 leading-loose max-w-sm">
                I specialize in building robust and scalable applications. Whether you need a secure backend or a stunning frontend, I am available for new opportunities and remote collaboration worldwide.
              </p>
            </div>

            <div className="space-y-12">
              {/* Location Block */}
              <div>
                <h4 className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-3">
                  Address
                </h4>
                <p className="text-sm md:text-base font-bold uppercase tracking-widest text-white">
                  Oran, Algeria [UTC+1]
                </p>
              </div>

              {/* Email Block */}
              <div>
                <h4 className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-3">
                  E-mail
                </h4>
                <a 
                  href="mailto:superamrani@gmail.com" 
                  className="text-sm md:text-base font-bold uppercase tracking-widest text-white hover:text-white/60 transition-colors"
                >
                  superamrani@gmail.com
                </a>
              </div>
            </div>
            
            {/* Minimalist Watermark */}
            <div className="absolute top-10 right-10 text-[10px] tracking-[0.4em] uppercase text-white/10 pointer-events-none">
              05 // End
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: MINIMALIST FORM
              ========================================= */}
          <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-[#0a0a0a]">
            
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-16">
              Contact Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-10 w-full max-w-md">
              
              {/* Name Input */}
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white text-[11px] tracking-[0.2em] uppercase placeholder-white/30 focus:outline-none focus:border-white transition-colors rounded-none"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Email Input */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your e-mail"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white text-[11px] tracking-[0.2em] uppercase placeholder-white/30 focus:outline-none focus:border-white transition-colors rounded-none"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Message Input */}
              <div className="relative group">
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Message"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white text-[11px] tracking-[0.2em] uppercase placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none rounded-none"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Brutalist Submit Button */}
              <button
                type="submit"
                className="mt-8 border border-white/20 py-5 px-10 text-[10px] tracking-[0.4em] font-bold uppercase text-white hover:bg-white hover:text-black transition-all duration-500 w-fit"
              >
                Send Message
              </button>
              
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;