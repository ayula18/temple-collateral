import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertTriangle, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ stat, title, source, type, details, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isPeerReviewed = type === 'peer-reviewed';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="bg-bg-dark-card/50 backdrop-blur-md rounded-2xl p-8 shadow-sm border border-white/5 cursor-pointer hover:border-white/10 transition-all group"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-3xl md:text-4xl font-normal text-gradient-gold mb-2 group-hover:drop-shadow-md transition-all">{stat}</h3>
          <p className="text-text-dark font-light tracking-wide mb-4 text-lg">{title}</p>
        </div>
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide ${isPeerReviewed ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
          {isPeerReviewed ? <CheckCircle2 size={12} /> : <AlertTriangle size={12} />}
          <span>{isPeerReviewed ? 'Peer-reviewed' : 'Preliminary'}</span>
        </div>
      </div>
      
      <div className="text-xs text-text-subtle mb-2 flex items-center justify-between font-light tracking-wide">
        <span>Source: {source}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-text-muted group-hover:text-accent transition-colors"
        >
          <ChevronRight size={18} strokeWidth={1.5} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="pt-5 mt-5 border-t border-white/5 text-sm text-text-body leading-relaxed font-light"
          >
            {details}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Section2Opportunity() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      stat: "~17% higher",
      title: "CBF lying down vs standing",
      source: "Possnig et al. 2025, Experimental Physiology, n=17",
      type: "peer-reviewed",
      details: "Original study designed for spaceflight bed-rest research. Found total CBF was 1,078 mL/min supine vs 891 mL/min seated (P = 0.0006). Notably, CBF decreased back to upright-equivalent after 3 days of bed rest, suggesting autoregulatory adaptation."
    },
    {
      stat: "0.3–0.74%",
      title: "annual CBF decline with age",
      source: "Mokhber et al. 2021, Neuroradiology Journal",
      type: "peer-reviewed",
      details: "Reported 0.45–0.74%/year in gray matter and 0.3%/year in white matter. Established literature attributes decline to vascular aging and endothelial dysfunction. Continue's novel contribution is the hypothesized causal link to chronic gravitational stress."
    },
    {
      stat: "~7% increase",
      title: "CBF with daily inversion",
      source: "Continue Research own data, 40-day study",
      type: "preliminary",
      details: "N=10 uncontrolled pilot using Temple's proprietary device. No control group, no blinding, no randomization. Device not independently validated. Classified as preliminary/exploratory."
    }
  ];

  return (
    <section className="min-h-screen py-32 section-base px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-6 opacity-80">The Gap</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal text-text-white leading-[1.15] mb-10 tracking-tight">
              The brain's signals are missing from the wearable revolution.
            </h3>
            <div className="space-y-6 text-lg text-text-body font-light leading-relaxed">
              <p>
                Every wearable today measures the body's periphery — heart rate, SpO₂, skin temp, movement. These are downstream echoes of what the brain has already decided.
              </p>
              <p>
                Cerebral blood flow (CBF) is the most information-rich signal about cognitive state, fatigue, and brain health — but until now required an MRI to measure.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-text-subtle text-xs font-medium tracking-[0.2em] uppercase mb-2">What Continue Established</h2>
            {cards.map((card, idx) => (
              <StatCard key={idx} {...card} delay={0.2 + (idx * 0.15)} />
            ))}
          </div>

        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 p-10 md:p-14 bg-bg-dark-card/30 rounded-2xl border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-gold"></div>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-text-white flex items-start">
            <span className="text-accent text-5xl mr-6 leading-none pt-2 opacity-50 font-serif">"</span>
            Whether or not the gravity-causation link is validated, continuous CBF monitoring unlocks a data category no consumer device captures. The hypothesis creates the 'why.' The device is the 'how.' The AI is the 'what makes it work.'
          </p>
        </motion.div>
      </div>
    </section>
  );
}
