import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start exit animation after the fill animation (1.6s) + brief wait (0.4s)
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Give time for shutter animation to complete before unmounting
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100000] bg-[#ff2a2a] flex items-center justify-center overflow-hidden"
          initial={{ y: 0 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
          }}
        >
          <motion.div
            className="relative text-7xl md:text-9xl font-black tracking-tighter"
            exit={{
              scale: 0.9,
              opacity: 0,
              transition: { duration: 0.4, ease: 'easeInOut' }
            }}
          >
            {/* Background Text */}
            <div className="text-black/20">Minhaj</div>

            {/* Foreground Text Fill */}
            <motion.div
              className="absolute inset-0 text-white overflow-hidden"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
            >
              Minhaj
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
