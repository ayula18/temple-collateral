import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Network, ShieldCheck, Rocket } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, desc, delay, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1, delay, ease: "easeOut" }}
    whileHover={{ y: -8 }}
    className="bg-bg-dark-card/20 backdrop-blur-sm rounded-2xl border border-white/5 p-10 relative overflow-hidden group flex flex-col h-full hover:border-white/10 transition-all duration-500"
  >
    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5 group-hover:bg-gradient-gold transition-colors"></div>
    
    <div className="mb-8 opacity-50 group-hover:opacity-100 group-hover:text-accent transition-all duration-500 text-text-muted">
      <Icon size={40} strokeWidth={1} />
    </div>
    
    <h3 className="text-2xl font-light text-text-white mb-6 tracking-wide">{title}</h3>
    
    <p className="text-text-body leading-relaxed font-light flex-grow text-sm md:text-base">
      {desc}
    </p>
  </motion.div>
);

export default function Section7WhyMe() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      icon: Network,
      title: "Systems Thinking",
      desc: "Built end-to-end AI pipelines at Mosaic Wellness (4-stage pipeline → 80% creative acceptance, 4× testing velocity). Led 0→1 at LevelUp AI. I think from sensor to user, not just the model."
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity Mindset",
      desc: "CS degree in Cyber Security. Trained to think about attack surfaces, failure modes, and adversarial inputs. Applied to health AI: how does the network fail gracefully? Where can the data be spoofed?"
    },
    {
      icon: Rocket,
      title: "0→1 Execution Speed",
      desc: "Shipped Flowstate Wealth MVP as first employee in 2 months. Co-founded Socialtix — 15+ projects shipped in 4-week cycles. Built Bunchup from zero to 2,000+ signups. I know how to move fast in ambiguity."
    }
  ];

  return (
    <section className="min-h-screen py-32 section-base px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-28 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-normal text-text-white mb-8 tracking-tight"
          >
            Why Me — My Angle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-text-muted font-light leading-relaxed"
          >
            "I'm not an ML researcher. I'm a builder who ships systems and thinks deeply about what can go wrong."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-stretch">
          {values.map((val, idx) => (
            <ValueCard key={idx} {...val} inView={inView} delay={0.5 + idx * 0.2} />
          ))}
        </div>

      </div>
    </section>
  );
}
