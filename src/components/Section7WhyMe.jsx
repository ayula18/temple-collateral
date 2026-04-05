import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* ───────────────────────── Part 1: Intersection Visual ──────────────── */

const IntersectionVisual = ({ inView }) => {
  const circles = [
    { label: 'Neuroscience', sub: 'Understands the brain', cx: 50, cy: 28 },
    { label: 'ML Engineering', sub: 'Builds the models', cx: 28, cy: 72 },
    { label: 'Hardware', sub: 'Designs the sensor', cx: 72, cy: 72 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="flex flex-col items-center mb-20"
    >
      {/* SVG Venn */}
      <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E2CE9E" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#E2CE9E" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Three overlapping circles */}
          {circles.map((c, i) => (
            <motion.circle
              key={i}
              cx={c.cx}
              cy={c.cy}
              r={28}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={0.4}
              initial={{ r: 0, opacity: 0 }}
              animate={inView ? { r: 28, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
            />
          ))}

          {/* Center intersection glow */}
          <circle cx={50} cy={55} r={12} fill="url(#glow)" />
        </svg>

        {/* Labels overlaid on the SVG */}
        {circles.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 + i * 0.15 }}
            className="absolute text-center"
            style={{
              left: `${c.cx}%`,
              top: `${c.cy}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span className="text-text-white text-xs md:text-sm font-medium tracking-wide block">{c.label}</span>
            <span className="text-text-muted text-[10px] md:text-xs font-light italic block mt-0.5">{c.sub}</span>
          </motion.div>
        ))}

        {/* Center label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ top: '14%' }}
        >
          <span className="text-accent text-[11px] md:text-sm font-light leading-snug italic text-center max-w-[180px] md:max-w-[220px]">
            "I obsess over the space between all three"
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ───────────────────────── Part 1b: Provocations ────────────────────── */


const BridgingLine = ({ inView }) => (
  <motion.p
    initial={{ opacity: 0 }}
    animate={inView ? { opacity: 1 } : {}}
    transition={{ duration: 1, delay: 2.2 }}
    className="text-center text-text-subtle text-sm font-light mb-32 max-w-2xl mx-auto"
  >
    Every team has domain experts. Not every team has someone whose job is to ask whether the pieces actually fit together.
  </motion.p>
);

/* ───────────────────── Part 2: Problems That Rhyme ──────────────────── */

const rhymeCards = [
  {
    left: "Mosaic Wellness had an influencer campaign pipeline that was 100% manual and took 15 days per cycle. I built a 4-stage AI automation on n8n: discovery via Apify, LLM brand-fit scoring, web scraping, script generation. Cut it to 30 minutes. 80% creative acceptance rate.",
    right: "Temple's signal pipeline has a similar structure: messy raw input, multiple processing stages, quality gate at the end before anything reaches the user. Different domain, same architectural instinct. I think in pipelines.",
  },
  {
    left: "Bunchup was a meetup app for strangers. The core problem wasn't product, it was trust. Nobody wants to meet someone they can't verify. I built facial verification, anonymous hosting, mutual connections, and host-led screening. 2,000+ signups through community-driven growth.",
    right: "Temple has a trust problem too. A device making claims about your brain needs to earn trust through transparency, not just accuracy. Confidence scores, honest 'insufficient signal' states, demographic fairness. I've designed trust architectures before, just in a different context.",
  },
];

const RhymeCards = ({ inView }) => (
  <div className="space-y-6 mb-32 max-w-5xl mx-auto">
    {rhymeCards.map((card, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-white/5 overflow-hidden"
      >
        {/* Left — muted context */}
        <div className="p-8 md:p-10 bg-bg-dark-card/30">
          <h4 className="text-[10px] font-bold tracking-[0.2em] text-text-subtle uppercase mb-4">What I Built</h4>
          <p className="text-text-muted text-sm md:text-base font-light leading-relaxed">{card.left}</p>
        </div>

        {/* Right — accent-highlighted */}
        <div className="p-8 md:p-10 bg-bg-dark-card/50 border-t md:border-t-0 md:border-l border-accent/20 relative">
          <div className="absolute top-0 left-0 md:top-0 md:bottom-0 md:left-0 w-full md:w-[2px] h-[2px] md:h-full bg-accent/40"></div>
          <h4 className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-4">Why It Rhymes With Temple</h4>
          <p className="text-text-white text-sm md:text-base font-light leading-relaxed">{card.right}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

/* ───────────────────── Part 3: The Obsession ────────────────────────── */

const Obsession = ({ inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1, delay: 0.5 }}
    className="max-w-3xl mx-auto text-center"
  >
    <p className="text-lg md:text-xl text-accent font-light italic leading-relaxed tracking-wide">
      "Temple is building something that doesn't exist yet: a device that makes the brain readable in real time. Not a better fitness tracker. An entirely new category of human data. The team solving this will face decisions nobody has a playbook for. I want to be part of that team."
    </p>
  </motion.div>
);

/* ───────────────────── Composed Section ─────────────────────────────── */

export default function Section7WhyMe() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="min-h-screen py-32 section-base px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-normal text-text-white mb-6 tracking-tight"
          >
            The Gap I Fill
          </motion.h2>
        </div>

        {/* Part 1 */}
        <IntersectionVisual inView={inView} />
        <BridgingLine inView={inView} />

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-white/5 flex-grow"></div>
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-subtle">Problems That Rhyme</span>
          <div className="h-px bg-white/5 flex-grow"></div>
        </div>

        {/* Part 2 */}
        <RhymeCards inView={inView} />

        {/* Part 3 */}
        <Obsession inView={inView} />

      </div>
    </section>
  );
}
