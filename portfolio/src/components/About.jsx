import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#ff2a2a] pt-32 pb-48 overflow-hidden">
      {/* Floating Stars Decoration */}
      <motion.div 
        className="absolute top-20 right-20 text-black text-4xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        ✦
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-10 text-black text-6xl opacity-50"
        animate={{ scale: [1, 1.5, 1], rotate: [0, -90, -180] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        ✦
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - ID Badge */}
        <div className="relative flex justify-center py-10">
          {/* Lanyard Line */}
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-4 h-[150px] bg-black rounded-b-md z-0 shadow-lg"></div>
          {/* Metal Clip */}
          <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-8 h-12 border-4 border-gray-300 rounded-md z-10"></div>
          
          <motion.div 
            className="bg-[#1a1a1a] p-6 rounded-3xl w-80 shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-20 mt-16 relative"
            initial={{ rotate: -5, y: 20, opacity: 0 }}
            whileInView={{ rotate: -3, y: 0, opacity: 1 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-80 rounded-2xl overflow-hidden mb-6 border-4 border-[#333]">
              <img src="/minhaj 1.png" alt="Minhaj Profile" className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-white text-2xl font-bold uppercase tracking-widest mb-1">Minhaj</h3>
              <p className="text-[#ff2a2a] text-sm font-mono font-bold tracking-widest">DEVELOPER PASS</p>
              <div className="mt-4 flex justify-center space-x-2">
                <div className="w-full h-2 bg-[#333] rounded"></div>
                <div className="w-full h-2 bg-[#ff2a2a] rounded"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Content */}
        <div>
          <motion.h2 
            className="text-7xl md:text-9xl font-black text-black mb-8 tracking-tighter"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Hello!
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-12"
          >
            <p className="mb-6">
              I'm <span className="text-black font-black uppercase">Minhaj</span>, a Full-Stack Developer building modern, responsive web applications with the MERN stack.
            </p>
            <p className="text-[#ffcccc]">
              Currently pursuing a <span className="text-white font-semibold">MERN Stack Full-Stack Development course</span> while gaining <span className="text-white font-semibold">real-world project experience at Edex Life School</span>, with a focus on practical problem-solving and continuous learning.
            </p>
          </motion.div>

          {/* Tech Logos & CV Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12 mt-12">
            <div className="flex gap-8">
              {[
                { icon: <FaHtml5 />, name: 'HTML5' },
                { icon: <FaCss3Alt />, name: 'CSS3' },
                { icon: <FaPython />, name: 'Python' }
              ].map((tech, i) => (
                <motion.div 
                  key={tech.name}
                  className="text-6xl text-black drop-shadow-xl hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  viewport={{ once: true }}
                  title={tech.name}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/Minhaj cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.3)] flex items-center justify-center border-2 border-transparent hover:border-[#ff2a2a]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              View CV
            </motion.a>
          </div>
        </div>
      </div>

      {/* Torn Paper Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V73.4C108.6,35.4,251,18.4,411.3,42.4,591,69.2,746,132.8,913,111.4c110.1-14.1,208.5-51,287-94V120H0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
