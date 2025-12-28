import React, { useState } from 'react';
import { motion } from 'motion/react';

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
    // Add your form submission logic here (e.g., EmailJS or API endpoint)
    console.log('Form Submitted', formData);
    alert("Message sent! (Simulated)");
  };

  return (
    <section id="contact" className="w-full py-20 bg-[#050511] text-white 
    overflow-hidden relative">
      
      {/* Background Glow Effect - Matches your site's ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px]
       h-[600px] bg-purple-700/20 rounded-full blur-[120px] 
       pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
            <motion.h2 
            initial={{y:50,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:0.6,}}
            className="text-4xl md:text-5xl font-bold bg-clip-text 
            text-transparent bg-gradient-to-r from-white to-gray-400
             mb-4">
              Get in Touch
            </motion.h2>
            <motion.p
             initial={{x:-50,opacity:0}}
             whileInView={{x:0,opacity:1}}
             transition={{delay:0.9}}
             className="text-gray-400 max-w-2xl mx-auto text-lg">
              Have a project in mind or want to discuss modern web 
              solutions? 
              I'm always open to new opportunities.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Info & CTA */}
          <div className="space-y-8">
            <div className="bg-[#10102b] p-8 rounded-2xl border
             border-white/5 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Let's Build Something Amazing</h3>
              <p className="text-gray-400 mb-8">
                I specialize in building robust and scalable applications. 
                Whether you need a secure backend or a stunning frontend, I'm here to help.
              </p>
              
              <div className="space-y-6">
                {/* Email Item */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600/20 
                  flex items-center justify-center text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Me</p>
                    <p className="text-lg font-medium text-white">superamrani@gmail.com</p>
                  </div>
                </div>

                {/* Location Item (Based on your Algeria mention) */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600/20 
                  flex items-center justify-center text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-lg font-medium text-white">Algeria (Remote Worldwide)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <form onSubmit={handleSubmit} className="bg-[#10102b] p-8 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden">
            {/* Subtle Gradient overlay on form */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              {/* Name Input */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-purple-400 transition-colors">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-[#0a0a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-purple-400 transition-colors">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#0a0a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Message Input */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-purple-400 transition-colors">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="How can I help you?"
                  className="w-full bg-[#0a0a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Submit Button - Matching your 'Copy Email' style */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-lg shadow-lg shadow-purple-600/20 transform transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;