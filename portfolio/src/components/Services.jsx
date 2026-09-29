import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative w-full bg-white text-black py-32 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20 relative">
          <div className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-sm font-bold tracking-widest uppercase mb-8">
            My Services
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
            Driving your brand to <span className="text-[#ff2a2a] italic font-serif font-light">new heights</span>
          </h2>
        </div>

        {/* Single Service Card */}
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            className="w-full bg-white border border-gray-200 rounded-[2rem] p-12 md:p-16 shadow-2xl relative text-center group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.8, type: 'spring', bounce: 0.4 }
            }}
            whileHover={{ 
              scale: 1.02, 
              backgroundColor: '#FF2A2A', 
              color: 'white',
              borderColor: '#FF2A2A',
              boxShadow: '0 20px 50px rgba(255, 42, 42, 0.3)'
            }}
            viewport={{ margin: "-100px" }}
          >
            {/* Hole punch decoration */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-gray-200 shadow-inner group-hover:bg-[#FF2A2A] group-hover:border-[#FF2A2A]"></div>
            
            <div className="mt-8">
              <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Web Development</h3>
              <p className="opacity-80 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
                Building modern, robust, and scalable web applications tailored to your business needs. 
                From beautiful, responsive front-end interfaces to powerful back-end systems, I deliver full-stack solutions 
                that drive engagement and growth.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
