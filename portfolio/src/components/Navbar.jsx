import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Navbar({ isPlaying, toggleVideo, showAudioPopup }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-4 bg-black/60 backdrop-blur-md' : 'py-8 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 2.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight text-white flex items-center">
            Minhaj
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={`#${link.toLowerCase()}`}
                className="relative text-white/80 hover:text-white transition-colors group text-sm uppercase tracking-widest font-medium"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Hire Me CTA & Video Controls */}
          <div className="hidden md:flex items-center space-x-4 relative">
            <AnimatePresence>
              {showAudioPopup && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute right-[140px] top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#ff2a2a] text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full flex items-center shadow-[0_0_20px_rgba(255,42,42,0.6)]"
                >
                  Want to hear Minhaj? 🎵
                  <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#ff2a2a] rotate-45"></div>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              onClick={toggleVideo}
              title={isPlaying ? "Pause Background Video" : "Play Background Video"}
              className="w-10 h-10 rounded-full bg-transparent border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors relative z-10"
            >
              {isPlaying ? <FaPause className="text-white text-sm" /> : <FaPlay className="text-white text-sm ml-0.5" />}
            </button>
            <button className="px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm tracking-wider font-medium hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,42,42,0.4)] transition-all duration-300">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-50 relative flex items-center space-x-4"
          >
            <div onClick={toggleVideo} className="mr-2">
              {isPlaying ? <FaPause className="text-white" /> : <FaPlay className="text-white" />}
            </div>
            <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#ff2a2a] flex flex-col items-center justify-center"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-black text-white uppercase tracking-widest hover:scale-110 transition-transform"
                >
                  {link}
                </a>
              ))}
              <button className="mt-8 px-8 py-4 rounded-full border border-white bg-transparent text-white text-xl font-bold tracking-widest hover:bg-white hover:text-[#ff2a2a] transition-all">
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
