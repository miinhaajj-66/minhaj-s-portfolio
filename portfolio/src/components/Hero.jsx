import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero({ videoRef }) {
  const [isMuted, setIsMuted] = useState(false);
  const [showWorkModal, setShowWorkModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);


  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2.5,
      }
    }
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black flex items-center">
      {/* Full-screen Video Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', background: '#000' }}>
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }}></div>
        <video
          ref={videoRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(0.35)',
            minWidth: '300%',
            minHeight: '300%',
            width: 'auto',
            height: 'auto',
            zIndex: 0,
          }}
          className="opacity-90"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        >
          <source src="/minhaj videooo.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-6 md:px-12 z-20 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.h1 variants={fadeUpItem} className="text-4xl md:text-6xl font-light text-white mb-2">
            Hi, I'm a
          </motion.h1>
          <motion.h2 variants={fadeUpItem} className="text-5xl md:text-7xl lg:text-8xl font-black text-stroke uppercase tracking-tight mb-6">
            Full Stack<br/>Developer
          </motion.h2>
          
          <motion.p variants={fadeUpItem} className="text-white/80 max-w-lg mb-10 text-lg md:text-xl font-light leading-relaxed">
            I specialize in React.js, Node.js, and modern web applications. 
            Focused on crafting scalable, high-performance, and visually stunning digital experiences.
          </motion.p>
          
          <motion.div variants={fadeUpItem} className="flex flex-wrap gap-4">
            <button 
              onClick={() => setShowWorkModal(true)}
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </button>
            <button 
              onClick={() => setShowContactModal(true)}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-colors duration-300"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 to-white/60 mb-4"></div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <FaArrowDown className="text-white/60 text-sm" />
        </motion.div>
      </motion.div>

      {/* View Work Modal */}
      <AnimatePresence>
        {showWorkModal && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-[#111111] border border-white/10 p-8 md:p-12 rounded-[2rem] max-w-3xl w-full relative shadow-[0_0_50px_rgba(255,42,42,0.15)]"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button 
                onClick={() => setShowWorkModal(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                ✕
              </button>
              
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest mb-2">Selected Works</h3>
              <p className="text-white/50 font-mono text-sm tracking-widest mb-10">CLICK TO VISIT LIVE SITES</p>
              
              <div className="grid grid-cols-1 gap-6">

                <div className="group block p-8 border border-white/10 rounded-2xl bg-black transition-all duration-300 hover:border-[#ff2a2a] hover:shadow-[0_0_30px_rgba(255,42,42,0.2)]">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold text-[#ff2a2a] uppercase tracking-wide">Planora – Travel Planner</h4>
                    <span className="text-4xl font-black text-white/10">01</span>
                  </div>
                  <p className="text-white/60 font-mono text-sm tracking-widest uppercase mb-4">Full Stack Developer</p>
                  <p className="text-white/60 leading-relaxed mb-6">A full-stack travel planning web application built using the MERN stack, designed to help users explore destinations, plan trips, and manage their travel experiences.</p>
                  <div className="flex flex-wrap gap-2">
                    {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/80">{tag}</span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-[#111111] border border-white/10 p-8 md:p-12 rounded-[2rem] max-w-xl w-full relative shadow-[0_0_50px_rgba(255,42,42,0.15)]"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button 
                onClick={() => setShowContactModal(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                ✕
              </button>
              
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest mb-2">Let's Connect</h3>
              <p className="text-white/50 font-mono text-sm tracking-widest mb-10">CHOOSE YOUR PLATFORM</p>
              
              <div className="flex flex-col space-y-4">
                
                <a href="https://wa.me/919778263390" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-6 border border-white/10 rounded-2xl hover:border-[#25D366] bg-black transition-all duration-300">
                  <div className="flex flex-col">
                    <h4 className="text-xl font-bold text-white group-hover:text-[#25D366] transition-colors">WhatsApp</h4>
                    <p className="text-white/40 text-sm font-mono">+91 9778263390</p>
                  </div>
                  <div className="text-white text-xl group-hover:translate-x-2 transition-transform">→</div>
                </a>

                <a href="https://linkedin.com/in/Minhaj-Kp" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-6 border border-white/10 rounded-2xl hover:border-[#0077b5] bg-black transition-all duration-300">
                  <div className="flex flex-col">
                    <h4 className="text-xl font-bold text-white group-hover:text-[#0077b5] transition-colors">LinkedIn</h4>
                    <p className="text-white/40 text-sm font-mono">Professional Network</p>
                  </div>
                  <div className="text-white text-xl group-hover:translate-x-2 transition-transform">→</div>
                </a>

                <a href="https://www.instagram.com/miiinhajj._" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-6 border border-white/10 rounded-2xl hover:border-[#E1306C] bg-black transition-all duration-300">
                  <div className="flex flex-col">
                    <h4 className="text-xl font-bold text-white group-hover:text-[#E1306C] transition-colors">Instagram</h4>
                    <p className="text-white/40 text-sm font-mono">miiinhajj._</p>
                  </div>
                  <div className="text-white text-xl group-hover:translate-x-2 transition-transform">→</div>
                </a>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
