import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Database, Users, AlertTriangle } from 'lucide-react';

const FlipCard = ({ question, answer, icon: Icon, delay }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-[320px] perspective-[1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 220, damping: 20 }}
        className="w-full h-full relative preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden bg-bg-dark-card/50 backdrop-blur-md rounded-2xl border border-white/5 p-10 flex flex-col justify-center items-center text-center group"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 group-hover:bg-gradient-gold transition-colors rounded-l-2xl"></div>
          <div className="text-text-muted group-hover:text-accent transition-colors mb-8 opacity-70 group-hover:opacity-100">
            <Icon size={36} strokeWidth={1} />
          </div>
          <h3 className="text-xl md:text-2xl font-light text-text-white tracking-wide">{question}</h3>
          <p className="text-xs font-light tracking-widest text-text-subtle mt-4 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-8 uppercase">Hover to reveal</p>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden bg-[#111111] rounded-2xl shadow-lg border border-accent/30 p-10 flex flex-col justify-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-gold rounded-l-2xl"></div>
          <h4 className="text-text-muted text-[10px] uppercase font-bold tracking-[0.2em] mb-4">The Answer</h4>
          <p className="text-text-white text-base leading-relaxed font-light">
            {answer}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default function Section5Dataset() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const cards = [
    {
      icon: Target,
      question: "Where does ground truth come from?",
      answer: "Gold standard for CBF is MRI-ASL — but you can't MRI someone mid-workout. Bridge validation options: transcranial Doppler (portable but operator-dependent) or controlled lab sessions with paired clinical measurements. Requires hospital/research partnerships from week one."
    },
    {
      icon: Database,
      question: "What context must accompany every reading?",
      answer: "Raw CBF is meaningless without: activity state (resting/exercising/sleeping), posture (upright/supine/inverted), hydration and caffeine intake, ambient temperature, time of day. The metadata schema is as important as the signal data itself."
    },
    {
      icon: Users,
      question: "How do we ensure demographic robustness?",
      answer: "Melanin concentration affects NIR signal quality (peer-reviewed, quantified). Skull thickness varies by age and sex. Training data must cover these variations — or the model will have blind spots where it matters most."
    },
    {
      icon: AlertTriangle,
      question: "Which edge cases must be deliberately collected?",
      answer: "Migraines, post-concussion states, caffeine withdrawal, altitude changes, extreme heat/cold. These are conditions where the model matters most and where failure is most dangerous — and they won't appear naturally in early adopter data."
    }
  ];

  return (
    <section className="min-h-screen py-32 section-base px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-normal text-text-white mb-8 tracking-tight"
          >
            Proprietary Dataset Strategy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-text-muted font-light tracking-wide leading-relaxed"
          >
            "The questions I'd ask on Day 1 — because the dataset IS the long-term moat."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 relative z-10">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
            >
              <FlipCard {...card} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <p className="text-xl md:text-2xl text-text-muted font-light leading-relaxed">
            "Whoop, Oura, and Apple have billions of peripheral data points. None have a single second of continuous, labeled cerebral blood flow data from a consumer wearable. <br className="hidden md:block"/><span className="text-gradient-gold font-normal">Temple's first validated CBF dataset will be the most defensible asset in the wearable industry.</span>"
          </p>
        </motion.div>

      </div>
    </section>
  );
}
