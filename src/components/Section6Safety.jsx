import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldAlert, AlertTriangle, Layers } from 'lucide-react';
import clsx from 'clsx';

const ProblemCard = ({ title, desc, delay, inView }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="bg-bg-dark-card/30 border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:bg-bg-dark-card transition-colors"
  >
    <div className="absolute top-0 left-0 w-1 h-full bg-white/5 opacity-50 group-hover:bg-warning/50 transition-colors"></div>
    <div className="flex items-start gap-5">
      <div className="text-text-muted group-hover:text-warning shrink-0 mt-1 transition-colors">
        <ShieldAlert size={24} strokeWidth={1} />
      </div>
      <div>
        <h4 className="text-text-white font-normal tracking-wide mb-2">{title}</h4>
        <p className="text-text-subtle text-sm leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  </motion.div>
);

export default function Section6Safety() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeLayer, setActiveLayer] = useState(0);

  const problems = [
    { title: "Confident wrong answers kill trust", desc: "\"Your cognitive function is declining\" — if wrong, causes anxiety and unnecessary medical visits. Health AI needs \"insufficient signal\" as a valid output." },
    { title: "Accuracy ≠ clinical validity", desc: "95% aggregate accuracy can mask systematic failure for specific demographics. Pulse oximeters showed 3× undetected low oxygen in darker skin (Sjoding et al. 2020)." },
    { title: "Unexpected usage creates liability", desc: "Athletes will make training decisions. Coaches will bench players. Insurance companies will ask for data. Graceful degradation isn't optional." }
  ];

  const layers = [
    { level: "L1", name: "Signal Quality Gate", desc: "Suppress output if SNR is below baseline threshold. Never guess. Show \"adjusting sensor\" instead." },
    { level: "L2", name: "Accuracy Validation", desc: "Bland-Altman analysis vs clinical CBF per demographic cohort. Track bias by skin tone, age, skull region." },
    { level: "L3", name: "Adversarial Testing", desc: "Extreme motion, temperature, sensor shift, sweat. Define graceful degradation for each. Map attack surfaces." },
    { level: "L4", name: "Drift Monitoring", desc: "Track per-cohort accuracy as user demographics shift. Auto-trigger retraining when thresholds breach." }
  ];

  return (
    <section className="min-h-screen py-32 section-base px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-24 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-text-white mb-8 tracking-tight text-center"
          >
            AI Safety & <br className="md:hidden"/>Evaluation Framework
          </motion.h2>
          <motion.div className="w-16 h-[2px] bg-accent/50" initial={{ width: 0 }} animate={inView ? { width: 64 } : {}} transition={{ duration: 1, delay: 0.5 }}></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column */}
          <div>
            <h3 className="text-text-muted text-[10px] font-medium tracking-[0.2em] uppercase mb-10 flex items-center gap-3">
              <AlertTriangle size={14} className="opacity-70" /> Why Standard Eval Isn't Enough
            </h3>
            <div className="space-y-4">
              {problems.map((prob, idx) => (
                <ProblemCard key={idx} {...prob} delay={0.2 + idx * 0.15} inView={inView} />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-text-white text-[10px] font-medium tracking-[0.2em] uppercase mb-10 flex items-center gap-3">
              <Layers size={14} className="text-accent opacity-70" /> The 4-Layer Framework
            </h3>
            
            <div className="relative flex flex-col pl-4 md:pl-10">
              {/* Vertical connector */}
              <div className="absolute left-10 md:left-16 top-8 bottom-8 w-px bg-white/5 -z-10"></div>
              
              <div className="w-full space-y-6">
                {layers.map((layer, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + idx * 0.15, ease: "easeOut" }}
                    onMouseEnter={() => setActiveLayer(idx)}
                    onClick={() => setActiveLayer(idx)}
                    className={clsx(
                      "relative bg-bg-dark rounded-2xl p-8 cursor-pointer transition-all duration-500 border border-transparent",
                      activeLayer === idx ? "border-white/10 bg-bg-dark-card/50 shadow-2xl md:translate-x-4" : "hover:bg-bg-dark-card/20 border-transparent"
                    )}
                  >
                    {/* Number Badge */}
                    <div className={clsx(
                      "absolute -left-6 md:-left-8 top-8 w-12 h-12 rounded-full border border-bg-dark flex items-center justify-center font-normal transition-all duration-500",
                      activeLayer === idx ? "bg-accent text-bg-dark font-medium shadow-[0_0_15px_rgba(208,188,147,0.3)]" : "bg-bg-dark border-white/10 text-text-muted"
                    )}>
                      {layer.level}
                    </div>

                    <h4 className={clsx("text-2xl font-light mb-3 transition-colors duration-500 tracking-wide", activeLayer === idx ? "text-gradient-gold" : "text-text-white")}>
                      {layer.name}
                    </h4>
                    
                    <AnimatePresence>
                      {activeLayer === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-text-body text-sm font-light leading-relaxed mt-4">
                            {layer.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
