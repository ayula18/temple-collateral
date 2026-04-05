import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ChevronDown } from 'lucide-react';

export default function Section1Hero() {
  return (
    <section className="relative min-h-screen section-base flex flex-col justify-center items-center px-6 overflow-hidden">
      
      {/* Background ambient effect & Subtle contour lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 mix-blend-screen pointer-events-none origin-[50%_65%] animate-float-bg"
          style={{
            backgroundImage: 'repeating-radial-gradient(circle at 50% 65%, transparent 0, transparent 40px, rgba(226, 206, 158, 0.15) 40px, rgba(226, 206, 158, 0.15) 41px)',
            maskImage: 'radial-gradient(circle at 50% 65%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 65%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)'
          }}
        ></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent blur-[150px] opacity-10"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto space-y-10">
        


        {/* Title */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-8xl font-normal tracking-tight leading-[1.1] text-accent drop-shadow-sm pb-2"
        >
          From Signal to Trust
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-text-body max-w-2xl font-light leading-relaxed tracking-wide"
        >
          Building Temple's Intelligence Layer. A first-principles framework for AI pipeline, dataset strategy & evaluation.
        </motion.p>

        {/* Hardware Device Display */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.9 }}
           className="mt-6 relative"
        >
          <div
            className="relative cursor-pointer group animate-float-device"
          >
            <img 
              src="/temple_device_hires_transparent.png" 
              alt="Temple AI Hardware Device" 
              className="relative z-10 w-[186px] md:w-[233px] h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] filter transition-all duration-700 group-hover:brightness-110 group-hover:scale-105"
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 text-text-subtle"
      >
        <span className="text-xs tracking-widest uppercase font-light">Scroll</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} strokeWidth={1.5} />
        </motion.div>
      </motion.div>

    </section>
  );
}
