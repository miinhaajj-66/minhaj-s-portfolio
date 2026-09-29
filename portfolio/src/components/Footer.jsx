import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Footer() {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const scaleText = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const yText = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scrollTorchX = useTransform(scrollYProgress, [0.3, 1], ['-30%', '50%']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <footer ref={footerRef} id="contact" className="bg-[#111111] text-[#F4F4F4] min-h-[70vh] flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 relative overflow-hidden z-20">
      
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-20">
        
        {/* Left Column */}
        <div className="flex flex-col space-y-4">
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-white/60">Services</p>
          <ul className="space-y-2 font-mono text-sm tracking-[0.1em] uppercase">
            <li className="hover:text-white cursor-pointer transition-colors">Web Development</li>
          </ul>
        </div>

        {/* Center Column */}
        <div className="flex flex-col space-y-4 md:items-center">
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-white/60">Experience</p>
          <p className="text-xl font-medium tracking-wide">Startup Ecosystem & Development</p>
          <a href="#projects" className="relative inline-block mt-2 font-mono text-sm tracking-[0.1em] uppercase group">
            View Work
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#f4f4f4] transition-transform origin-left scale-x-100 group-hover:scale-x-0"></span>
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#ff2a2a] transition-transform origin-right scale-x-0 group-hover:scale-x-100"></span>
          </a>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4 md:items-end">
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-white/60">Status</p>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-lg font-medium tracking-wide">Kerala, India</p>
          </div>
          <p className="font-mono text-sm text-white/60 mt-4">© 2026</p>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center my-20">
        <motion.h1 
          className="text-[10vw] leading-none font-black tracking-tighter cursor-default whitespace-nowrap"
          style={{ 
            scale: scaleText, 
            opacity: opacityText, 
            y: yText,
            '--scroll-x': scrollTorchX,
            color: 'transparent',
            backgroundImage: `radial-gradient(circle 20vw at var(--mouse-x, var(--scroll-x)) var(--mouse-y, 50%), #ffffff 0%, #333333 30%, #000000 80%)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={(e) => {
            e.currentTarget.style.removeProperty('--mouse-x');
            e.currentTarget.style.removeProperty('--mouse-y');
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Minhaj
        </motion.h1>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-sm font-mono text-white/60 tracking-widest pt-8 border-t border-white/10">
        <div className="flex flex-col space-y-2 md:text-left text-center">
          <p>Built with React & Framer</p>
          <p>Designed for excellence.</p>
        </div>
        
        <div className="text-center">
          <a href="mailto:miinhaaj@gmail.com" className="relative group text-white hover:text-[#ff2a2a] transition-colors text-lg font-medium">
            miinhaaj@gmail.com
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#ff2a2a] transition-all group-hover:w-full"></span>
          </a>
        </div>

        <div className="md:text-right text-center flex justify-center md:justify-end space-x-6">
          <a href="https://muhammedhisham.lovable.app" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Website</a>
          <a href="https://linkedin.com/in/muhammad-hisham985" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>

    </footer>
  );
}
