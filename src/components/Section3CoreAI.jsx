import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Activity, Sun, Move, BrainCircuit } from 'lucide-react';

const NoiseCard = ({ icon: Icon, title, description, source, delay, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="bg-bg-dark-card/40 p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-500 group flex flex-col"
    >
      <div className="text-accent mb-6 group-hover:scale-110 transition-transform origin-left opacity-80 group-hover:opacity-100">
        <Icon size={28} strokeWidth={1} />
      </div>
      <h4 className="text-xl font-normal tracking-wide text-text-white mb-3">{title}</h4>
      <p className="text-text-muted text-sm mb-6 flex-grow leading-relaxed font-light">{description}</p>
      {source && (
        <div className="text-[11px] text-text-subtle pt-4 border-t border-white/5 font-light tracking-wide">
          Source: {source}
        </div>
      )}
    </motion.div>
  );
};

export default function Section3CoreAI() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [countMin, setCountMin] = useState(0);
  const [countMax, setCountMax] = useState(0);

  useEffect(() => {
    if (inView) {
      animate(0, 6, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (value) => setCountMin(Math.round(value)),
      });
      animate(0, 19, {
        duration: 3,
        ease: "easeOut",
        onUpdate: (value) => setCountMax(Math.round(value)),
      });
    }
  }, [inView]);

  const noiseSources = [
    {
      icon: Activity,
      title: "Scalp Blood Flow",
      description: "The dominant contaminant. Scalp vasculature shares the same optical path as the brain signal, requiring sophisticated subtraction.",
      source: null
    },
    {
      icon: Sun,
      title: "Melanin Absorption",
      description: "SNR degrades measurably. Melanin in the epidermis aggressively absorbs near-infrared light, directly attenuating signal penetration.",
      source: "Roy et al. 2024, Journal of Biomedical Optics"
    },
    {
      icon: Move,
      title: "Motion Artifacts",
      description: "Head movement, jaw clenching, and ambient light shifts cause broadband frequency pollution that mimics physiological signals.",
      source: null
    },
    {
      icon: BrainCircuit,
      title: "Skull Attenuation",
      description: "Thickness ranges from 2.5mm to 10.5mm across individuals, drastically changing photon scattering profiles continuously.",
      source: "Strangman et al. 2014"
    }
  ];

  return (
    <section className="min-h-screen py-32 section-base px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Core Stat Header */}
        <div className="text-center mb-24 max-w-4xl">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-text-muted text-lg tracking-wide font-light mb-12 uppercase italic"
          >
            "The AI's primary job isn't prediction — it's extraction."
          </motion.h3>

          <div className="relative inline-block mb-6">
            {/* Soft Glow effect */}
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-accent blur-[100px] pointer-events-none rounded-full"
            ></motion.div>
            
            <h2 className="text-7xl md:text-9xl font-light text-gradient-gold tracking-tighter tabular-nums relative z-10">
              {countMin}–{countMax}<span className="text-accent text-5xl md:text-7xl font-light ml-1">%</span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-3xl text-text-white mt-4 font-light tracking-tight"
          >
            of total photon path is actual brain signal
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="text-xs text-text-subtle mt-4 font-light tracking-wide uppercase"
          >
            Source: Strangman et al. 2014, NeuroImage — 3,555 Monte Carlo simulations
          </motion.p>
        </div>

        {/* Noise Grid */}
        <div className="w-full">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-white/10 flex-grow"></div>
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-sm font-medium tracking-[0.2em] text-text-body uppercase"
            >
              The 81–94% Noise Landscape
            </motion.h3>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {noiseSources.map((source, idx) => (
              <NoiseCard key={idx} {...source} inView={inView} delay={1.4 + (idx * 0.15)} />
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-24 p-6 md:p-8 rounded-2xl border border-white/5 bg-bg-dark-card/20 text-center max-w-4xl"
        >
          <p className="text-lg md:text-xl text-text-muted font-light leading-relaxed">
            Separating the <span className="text-accent">6–19% brain signal</span> from the <span className="text-text-white">81–94% noise</span> is the foundational AI challenge. <br className="hidden md:block"/> Everything downstream depends on flawless extraction.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
