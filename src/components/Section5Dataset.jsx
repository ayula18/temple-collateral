import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Database, Users, AlertTriangle, ShieldCheck, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const ExpandablePhaseCard = ({ phase, title, icon: Icon, isExpanded, onClick, children }) => {
  return (
    <motion.div 
      className={clsx(
        "w-full rounded-2xl border transition-all duration-500 overflow-hidden",
        isExpanded 
          ? "bg-bg-dark-card border-accent shadow-[0_0_30px_rgba(226,206,158,0.05)]" 
          : "bg-bg-dark-card/40 border-white/5 hover:border-white/10 hover:bg-bg-dark-card/60"
      )}
    >
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
      >
        <div className="flex items-center gap-6">
          <div className={clsx(
            "p-3 rounded-xl transition-colors duration-500",
            isExpanded ? "bg-accent/10 text-accent" : "bg-white/5 text-text-muted group-hover:text-text-white"
          )}>
            <Icon size={28} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-text-muted uppercase mb-1">
              Phase {phase}
            </h4>
            <h3 className={clsx(
              "text-lg md:text-2xl font-light tracking-wide transition-colors duration-500",
              isExpanded ? "text-accent" : "text-text-white"
            )}>
              {title}
            </h3>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={clsx("transition-colors", isExpanded ? "text-accent" : "text-text-muted group-hover:text-text-white")}
        >
          <ChevronDown size={24} strokeWidth={1} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-white/5 text-text-body font-light leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Section5Dataset() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedPhase, setExpandedPhase] = useState(null);

  return (
    <section className="min-h-screen py-32 section-base px-6 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-normal text-text-white mb-6 tracking-tight"
          >
            Proprietary Dataset Strategy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-text-muted font-light tracking-wide leading-relaxed max-w-3xl mx-auto"
          >
            Temple's first 10,000 hours of validated CBF data will be the most defensible asset in the wearable industry. Here's how to build it right from day one.
          </motion.p>
        </div>

        <div className="space-y-4 mb-24 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ExpandablePhaseCard 
              phase={1} 
              title="Ground Truth Collection" 
              icon={Target}
              isExpanded={expandedPhase === 1}
              onClick={() => setExpandedPhase(expandedPhase === 1 ? null : 1)}
            >
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm font-semibold text-text-white mb-2 uppercase tracking-wide">The Problem</h5>
                  <p>Temple's device gives you a number. But how do you know that number is correct? You need a "source of truth" to train and validate against. For cerebral blood flow, the gold standard is MRI-ASL (Arterial Spin Labeling). The second best is Transcranial Doppler (TCD), a handheld ultrasound a technician presses against the temple.</p>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-text-white mb-2 uppercase tracking-wide">The Plan</h5>
                  <p>Partner with 2-3 research hospitals (AIIMS, NIMHANS, or similar institutions). Run controlled lab sessions where subjects simultaneously wear the Temple device AND undergo TCD measurement. This gives you paired data: "Temple said X, clinical device said Y." Every paired session generates ground truth labels for training.</p>
                </div>
                <div className="p-5 bg-[#111] rounded-xl border border-white/5">
                  <h5 className="font-semibold text-accent mb-3 text-sm tracking-wide">Protocol Design</h5>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Subjects wear Temple device + TCD simultaneously</li>
                    <li><span className="text-text-white font-medium">Standardized protocol:</span> 5 min rest, 5 min cognitive task (n-back), 5 min physical exertion (cycling), 5 min recovery, 5 min rest</li>
                    <li><span className="text-text-white font-medium">Record environment:</span> room temperature, lighting, humidity</li>
                    <li><span className="text-text-white font-medium">Log metadata:</span> age, sex, skin tone (Fitzpatrick scale), caffeine intake, sleep hours, hydration</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/5 text-accent font-medium">
                    Target: 500+ hours of paired (Temple + clinical truth) data across 200+ subjects in first 6 months.
                  </div>
                </div>
              </div>
            </ExpandablePhaseCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ExpandablePhaseCard 
              phase={2} 
              title="Context Layer Architecture" 
              icon={Database}
              isExpanded={expandedPhase === 2}
              onClick={() => setExpandedPhase(expandedPhase === 2 ? null : 2)}
            >
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm font-semibold text-text-white mb-2 uppercase tracking-wide">The Problem</h5>
                  <p>A CBF reading of 650 mL/min means nothing without context. Is the person running or sleeping? Did they just drink coffee? Are they at sea level or 3,000m altitude? Raw signal without metadata is uninterpretable noise.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#111] rounded-lg border border-white/5">
                    <h6 className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Physiological</h6>
                    <ul className="space-y-1 text-sm list-inside list-disc">
                      <li>HR, HRV, Skin Temp</li>
                      <li>Posture (IMU state)</li>
                      <li>Activity classification</li>
                      <li>Nutrition & Hydration</li>
                    </ul>
                  </div>
                   <div className="p-4 bg-[#111] rounded-lg border border-white/5">
                    <h6 className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Environmental</h6>
                    <ul className="space-y-1 text-sm list-inside list-disc">
                      <li>Ambient Temperature</li>
                      <li>Altitude/Barometric pressure</li>
                      <li>Time of day</li>
                      <li>Circadian phase</li>
                    </ul>
                  </div>
                   <div className="p-4 bg-[#111] rounded-lg border border-white/5">
                    <h6 className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Session</h6>
                    <ul className="space-y-1 text-sm list-inside list-disc">
                      <li>Activity Duration</li>
                      <li>Transition events</li>
                      <li>Signal quality score</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 border-l-2 border-accent bg-accent/5 italic text-text-white">
                  "The same CBF value can mean 'healthy and exercising' or 'resting but dangerously low'. Context turns a number into an insight. The metadata schema must be locked before the first collection session."
                </div>
              </div>
            </ExpandablePhaseCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ExpandablePhaseCard 
              phase={3} 
              title="Demographic Coverage Matrix" 
              icon={Users}
              isExpanded={expandedPhase === 3}
              onClick={() => setExpandedPhase(expandedPhase === 3 ? null : 3)}
            >
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm font-semibold text-text-white mb-2 uppercase tracking-wide">The Problem</h5>
                  <p>Melanin concentration reduces fNIRS signal quality (peer-reviewed: r = -0.49, Roy et al. 2024). Skull thickness varies 2.5-10.5mm and changes with age and sex. A model trained only on young male athletes with light skin will fail silently on older women with darker skin.</p>
                </div>
                <div className="p-5 bg-[#111] rounded-xl border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-accent mb-2 text-sm tracking-wide">Skin Tone (Fitzpatrick I-VI)</h5>
                    <p className="text-sm mb-1">Minimum 15% representation from each: I-II, III-IV, V-VI.</p>
                     <p className="text-sm text-warning">Flag if model accuracy diverges &gt; 5% between any two groups.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-accent mb-2 text-sm tracking-wide">Age Brackets</h5>
                    <p className="text-sm">18-30, 30-45, 45-60, 60+ (Female skulls thin 36-60% from age 20 to 100). Minimum 50 subjects per bracket.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-accent mb-2 text-sm tracking-wide">Sex</h5>
                    <p className="text-sm">Balanced male/female representation. Separate baseline calibration curves (hormones affect CBF).</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-accent mb-2 text-sm tracking-wide">Fitness Level</h5>
                    <p className="text-sm">Elite athletes vs recreational vs sedentary. Resting CBF baselines differ significantly.</p>
                  </div>
                </div>
              </div>
            </ExpandablePhaseCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <ExpandablePhaseCard 
              phase={4} 
              title="Edge Case Library" 
              icon={AlertTriangle}
              isExpanded={expandedPhase === 4}
              onClick={() => setExpandedPhase(expandedPhase === 4 ? null : 4)}
            >
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm font-semibold text-text-white mb-2 uppercase tracking-wide">The Problem</h5>
                  <p>The model matters most in unusual conditions. But unusual conditions are, by definition, rare in natural data collection. You have to deliberately seek them out.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 border border-white/5 rounded-lg bg-bg-dark">
                    <h6 className="text-text-white text-sm font-semibold mb-2">Medical Events</h6>
                    <ul className="text-sm space-y-1 list-disc pl-4 text-text-muted">
                      <li>Migraine episodes (CBF changes in aura)</li>
                      <li>Post-concussion readings</li>
                      <li>Hyperventilation (CBF drops 30-40%)</li>
                      <li>Vasovagal episodes (fainting)</li>
                    </ul>
                  </div>
                  <div className="p-4 border border-white/5 rounded-lg bg-bg-dark">
                    <h6 className="text-text-white text-sm font-semibold mb-2">Lifestyle</h6>
                    <ul className="text-sm space-y-1 list-disc pl-4 text-text-muted">
                      <li>Caffeine withdrawal (+15% CBF)</li>
                      <li>Alcohol consumption (rebound constriction)</li>
                      <li>Sleep deprivation (24h+)</li>
                      <li>High altitude (above 2,500m)</li>
                    </ul>
                  </div>
                  <div className="p-4 border border-white/5 rounded-lg bg-bg-dark">
                    <h6 className="text-text-white text-sm font-semibold mb-2">Environmental</h6>
                    <ul className="text-sm space-y-1 list-disc pl-4 text-text-muted">
                      <li>Extreme cold (vasoconstriction)</li>
                      <li>Extreme heat (basal vasodilation)</li>
                      <li>High humidity (sensor adhesion)</li>
                      <li>Direct sunlight (light interference)</li>
                    </ul>
                  </div>
                  <div className="p-4 border border-[rgba(226,206,158,0.2)] rounded-lg bg-accent/5">
                     <h6 className="text-accent text-sm font-semibold mb-2">Device Placements</h6>
                    <ul className="text-sm space-y-1 list-disc pl-4 text-text-white/80">
                      <li>Sensor off-center (5mm, 10mm)</li>
                      <li>Wet skin (post-shower/sweat)</li>
                      <li>Rapid head rotation (sports)</li>
                      <li>Hair obstruction textures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ExpandablePhaseCard>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ExpandablePhaseCard 
              phase={5} 
              title="Data Governance" 
              icon={ShieldCheck}
              isExpanded={expandedPhase === 5}
              onClick={() => setExpandedPhase(expandedPhase === 5 ? null : 5)}
            >
              <div className="space-y-6">
                <div>
                   <h5 className="text-sm font-semibold text-text-white mb-2 uppercase tracking-wide">Day 1 Non-negotiables</h5>
                   <p>Data privacy and structural reproducibility must be built into the database architecturally, not layered on top as policies later.</p>
                </div>
                <div className="p-5 bg-[#111] rounded-xl border border-white/5 space-y-4">
                  <div>
                    <h5 className="font-semibold text-accent mb-1 text-sm tracking-wide">Consent Architecture</h5>
                    <p className="text-sm">Granular opt-in for data usage (personal ONLY vs anonymized research vs cohort benchmarking). DPDP Act and GDPR compliance baked in natively.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-accent mb-1 text-sm tracking-wide">Versioning & Reproducibility</h5>
                    <p className="text-sm">Every model trained on specific dataset versions (v1.0, v1.1). Dataset changes trigger new versions. Deleted user data triggers model retraining.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-accent mb-1 text-sm tracking-wide">De-identification</h5>
                    <p className="text-sm">Raw CBF time-series can be used for biometric identification. All research datasets are fully anonymized and temporally randomized.</p>
                  </div>
                </div>
              </div>
            </ExpandablePhaseCard>
          </motion.div>

        </div>

        {/* The Moat Argument */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 1, delay: 0.8 }}
           className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-bg-dark border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent blur-[100px] opacity-10 rounded-full"></div>
          
          <h3 className="text-2xl md:text-3xl font-light text-text-white mb-6 relative z-10 tracking-tight">The Moat Argument</h3>
          
          <div className="space-y-4 text-text-body font-light leading-relaxed relative z-10 text-lg">
            <p>
              Every wearable company's real asset is their data flywheel. Whoop has 4+ billion heart rate days. Oura has millions of sleep scores. Apple has hundreds of millions of Watch users tracking PPG data.
            </p>
            <p>
              None of them have a single second of continuous, labeled, cerebral blood flow data from a consumer wearable.
            </p>
            <p className="text-text-white">
              Temple's first mover advantage isn't the hardware. Hardware can be reverse-engineered. <span className="text-accent font-normal">The advantage is the proprietary dataset:</span> every hour of validated, contextually labeled, demographically diverse CBF data creates compounding distance from any competitor who starts later.
            </p>
            <p className="pt-4 border-t border-white/10">
              The dataset trains better models. Better models attract more users. More users generate more data. The flywheel spins. But only if the collection framework is right from day one. Retrofitting data quality is 10x harder than building it right the first time.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
