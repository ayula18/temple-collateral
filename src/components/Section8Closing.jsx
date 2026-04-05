import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain } from 'lucide-react';

export default function Section8Closing() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  const statements = [
    "The device captures the signal.",
    "The AI makes it meaningful.",
    "The dataset makes it defensible.",
    "The evaluation makes it trustworthy."
  ];

  return (
    <section className="min-h-[90vh] py-32 bg-bg-dark flex flex-col justify-center items-center px-6 relative overflow-hidden" ref={ref}>
      
      {/* Background Particles/Glow */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none opacity-20">
        <motion.div 
          animate={{ opacity: [0.1, 0.4, 0.1], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[800px] h-[800px] bg-accent rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Animated Brain Icon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative text-accent mb-16 opacity-80"
        >
          <motion.div
            animate={{ boxShadow: ['0 0 10px rgba(208,188,147,0.1)', '0 0 30px rgba(208,188,147,0.3)', '0 0 10px rgba(208,188,147,0.1)'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full"
          />
          <Brain size={48} strokeWidth={1} className="relative z-10" />
        </motion.div>

        {/* Staggered Statements */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center space-y-6 mb-24 max-w-3xl"
        >
          {statements.map((stmt, idx) => (
            <motion.p 
              key={idx}
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-light text-text-white tracking-wide"
            >
              {stmt}
            </motion.p>
          ))}
        </motion.div>

        {/* Final Golden CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 3 }}
        >
          <button className="relative group overflow-hidden rounded-full font-sans shadow-lg transition-transform hover:scale-105 active:scale-95 bg-gradient-gold p-[1px]">
            <div className="bg-gradient-gold text-bg-dark rounded-full px-12 py-5 flex flex-col items-center justify-center min-w-[280px]">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-1 opacity-80">I Want To Help Build</span>
              <span className="text-xl font-medium tracking-wide">All Four</span>
            </div>
            {/* Subtle glow hover effect */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
          </button>
        </motion.div>

      </div>

      {/* Footer / Contact */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 3.5 }}
        className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-bg-dark/80 backdrop-blur-md py-8 px-6 z-20"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-[0.15em] text-text-subtle font-medium">
          <div className="text-text-muted">AYUSH LAHOTI</div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
            <a href="mailto:ayush_lahoti@pg26.mesaschool.co" className="hover:text-text-white transition-colors">ayush_lahoti@pg26.mesaschool.co</a>
            <span className="hidden md:inline h-3 w-px bg-white/10"></span>
            <span>9404131807</span>
            <span className="hidden md:inline h-3 w-px bg-white/10"></span>
            <a href="#" className="hover:text-text-white transition-colors">LinkedIn</a>
            <span className="hidden md:inline h-3 w-px bg-white/10"></span>
            <a href="#" className="hover:text-text-white transition-colors">Portfolio</a>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
