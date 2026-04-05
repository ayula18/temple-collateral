import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Activity, Zap, Orbit, Cpu, Cloud, Eye, 
  Brain, Battery, TrendingUp, BarChart
} from 'lucide-react';
import clsx from 'clsx';

const PipelineStage = ({ stage, index, isExpanded, onClick }) => {
  const Icon = stage.icon;
  
  return (
    <div className="relative flex flex-col items-center group">
      
      {/* Animated Connector Line (Except for last item) */}
      {index < 5 && (
        <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-white/5 -z-10">
          <motion.div 
            className="h-full bg-accent relative"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
          >
            {/* Particle */}
            <motion.div
              animate={{ x: ["0%", "100%"], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5, ease: "linear" }}
              className="absolute top-1/2 -translate-y-1/2 right-0 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#D0BC93]"
            />
          </motion.div>
        </div>
      )}

      {/* Stage Node */}
      <motion.button
        onClick={onClick}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(
          "relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center transition-all duration-500 shadow-sm border overflow-hidden",
          isExpanded 
            ? "bg-bg-dark-card border-accent shadow-[0_0_20px_rgba(208,188,147,0.15)]" 
            : "bg-bg-dark border-white/10 hover:border-accent/50"
        )}
      >
        <div className={clsx("mb-1 md:mb-2 transition-colors duration-500", isExpanded ? "text-accent" : "text-text-subtle group-hover:text-text-dark")}>
          <Icon size={24} strokeWidth={isExpanded ? 1.5 : 1} />
        </div>
        <span className={clsx("text-[8px] md:text-[9px] font-medium uppercase tracking-[0.1em] text-center leading-tight px-1 md:px-3 transition-colors", isExpanded ? "text-text-white" : "text-text-muted")}>
          {stage.zone === 'On-device' && index === 3 ? "ML Inference" : stage.label}
        </span>
      </motion.button>

      {/* Vertical Mobile Connector */}
      {index < 5 && (
        <div className="lg:hidden w-px h-10 bg-white/5 my-2 relative">
           <motion.div 
            className="w-full bg-accent absolute top-0 left-0"
            animate={{ height: ["0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}
    </div>
  );
};

export default function Section4Pipeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedIndex, setExpandedIndex] = useState(0);

  const stages = [
    { 
      label: "Acquisition", 
      icon: Activity, 
      zone: "On-device",
      shortDesc: "Optical sensor + IMU data capture at highest sampling rate.",
      detailContent: (
        <div className="text-left space-y-6">
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-text-muted mb-3 font-semibold">What the sensor captures:</h4>
            <ul className="list-disc pl-5 space-y-2 text-text-body font-light">
              <li><strong className="text-text-white font-medium">Near-infrared light</strong> at two wavelengths: ~690nm (sensitive to deoxygenated hemoglobin) and ~830nm (sensitive to oxygenated hemoglobin).</li>
              <li>Raw light intensity values at <strong className="text-text-white font-medium">10-100 Hz</strong> sampling rate.</li>
              <li>3-axis accelerometer + 3-axis gyroscope (IMU) for motion tracking.</li>
              <li>Skin temperature at sensor contact point.</li>
              <li>Short-channel reference signal (8mm source-detector distance) capturing scalp-only blood flow.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-text-muted mb-3 font-semibold">Why two wavelengths matter:</h4>
            <p className="text-text-body font-light leading-relaxed">
              Oxygenated and deoxygenated hemoglobin absorb light differently at different wavelengths. By measuring both simultaneously, the system can distinguish between changes in blood oxygenation vs changes in total blood volume. Single wavelength would make this impossible.
            </p>
          </div>
        </div>
      )
    },
    { 
      label: "Denoising", 
      icon: Zap, 
      zone: "On-device",
      shortDesc: "Aggressive motion artifact correction, scalp blood flow subtraction.",
      detailContent: (
        <div className="text-left space-y-6">
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-text-muted mb-3 font-semibold">What gets removed and how:</h4>
            <ul className="space-y-4 text-text-body font-light">
              <li><strong className="text-text-white font-medium block mb-1">1. Motion artifacts:</strong> IMU detects head movement. Adaptive filtering uses accelerometer signal as a reference to identify and subtract motion-correlated noise from the optical signal. Techniques include Kalman filtering and wavelet denoising.</li>
              <li><strong className="text-text-white font-medium block mb-1">2. Scalp blood flow contamination:</strong> Short-channel regression. The 8mm sensor captures ONLY scalp hemodynamics (light doesn't penetrate deep enough to reach brain). This scalp signal is subtracted from the main 30mm sensor reading. What remains is primarily brain signal.</li>
              <li><strong className="text-text-white font-medium block mb-1">3. Ambient light interference:</strong> Bandpass filtering removes frequencies outside the hemodynamic range (0.01-0.2 Hz for brain blood flow). Heartbeat (~1 Hz), breathing (~0.25 Hz), and room lighting fluctuations are filtered out.</li>
              <li><strong className="text-text-white font-medium block mb-1">4. Mayer waves:</strong> Spontaneous oscillations in blood pressure (~0.1 Hz) that appear in both scalp and brain signals. Partially removed via short-channel regression, partially via adaptive filtering.</li>
            </ul>
          </div>
          <div className="p-4 bg-accent/5 rounded-xl border border-accent/10">
            <h4 className="text-sm uppercase tracking-[0.15em] text-accent mb-2 font-semibold">What stays:</h4>
            <p className="text-text-white font-light leading-relaxed">
              Clean hemodynamic signal reflecting actual changes in cerebral blood flow, isolated from physiological and environmental noise.
            </p>
          </div>
        </div>
      )
    },
    { 
      label: "Extraction", 
      icon: Orbit, 
      zone: "On-device",
      shortDesc: "Isolating hemoglobin concentration changes and pulsatility indices.",
      detailContent: (
        <div className="text-left space-y-6">
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-text-muted mb-4 font-semibold">What gets calculated:</h4>
            <ul className="space-y-4 text-text-body font-light">
              <li><strong className="text-text-white font-medium">1. Modified Beer-Lambert Law application:</strong> Converts filtered light intensity changes into concentration changes of oxygenated hemoglobin (HbO2) and deoxygenated hemoglobin (HbR). The math relates how much light was absorbed at each wavelength to how much of each hemoglobin type is present.</li>
              <li><strong className="text-text-white font-medium">2. Total hemoglobin (HbT):</strong> Sum of HbO2 + HbR. Proxy for total blood volume in the measured tissue region.</li>
              <li><strong className="text-text-white font-medium">3. Tissue oxygen saturation (StO2):</strong> Ratio of HbO2 to HbT. Indicates how well the brain tissue is being oxygenated.</li>
              <li><strong className="text-text-white font-medium">4. Pulsatility index:</strong> How much blood flow varies with each heartbeat. Higher pulsatility suggests healthier, more elastic blood vessels. Calculated from the peak-to-trough variation in the hemodynamic signal.</li>
              <li><strong className="text-text-white font-medium">5. Cerebral blood flow velocity estimate:</strong> Rate of change in HbT combined with pulsatility patterns gives an estimate of how fast blood is moving through the measured region.</li>
              <li><strong className="text-text-white font-medium">6. Hemodynamic response function (HRF) parameters:</strong> When the brain activates (thinking, exercising), blood flow increases with a characteristic shape: onset delay (~1-2s), peak (~5-8s), post-stimulus undershoot (~15-20s). Fitting these parameters tells you about neurovascular coupling health.</li>
            </ul>
          </div>
        </div>
      )
    },
    { 
      label: "Edge ML", 
      icon: Cpu, 
      zone: "On-device",
      shortDesc: "Embedded SLM inference. <100ms latency, real-time state classification.",
      detailContent: (
        <div className="text-left space-y-6">
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-text-muted mb-3 font-semibold">What the model does:</h4>
            <div className="space-y-4 text-text-body font-light">
              <p><strong className="text-text-white font-medium">Input:</strong> Time-series of extracted features (HbO2, HbR, HbT, StO2, pulsatility, HRF parameters) fused with IMU data (posture, activity level) and temperature.</p>
              <p><strong className="text-text-white font-medium">Processing:</strong> Likely a lightweight CNN-TCN hybrid architecture. CNN layers extract spatial features across sensor channels. Temporal convolutional layers with dilated causal convolutions capture patterns across time windows (30s to 5min). Total model size constrained to ~4,000-10,000 parameters for embedded deployment.</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-text-muted mb-3 font-semibold">Outputs with confidence scores:</h4>
            <ul className="list-disc pl-5 space-y-2 text-text-body font-light">
              <li><strong className="text-text-white font-medium">Cognitive load level</strong> (low/moderate/high): Based on prefrontal HbO2 increase patterns. CBF increases ~12% during demanding cognitive tasks.</li>
              <li><strong className="text-text-white font-medium">Fatigue state:</strong> Characterized by declining HbO2 amplitude and slower HRF recovery.</li>
              <li><strong className="text-text-white font-medium">Stress vs focus differentiation:</strong> Stress shows bilateral symmetric activation. Focused attention shows lateralized prefrontal activation.</li>
              <li><strong className="text-text-white font-medium">Recovery state:</strong> Post-exercise HbO2 normalization rate compared to personal baseline.</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
             <div className="p-4 bg-warning/5 rounded-xl border border-warning/10">
              <h4 className="text-xs uppercase tracking-[0.1em] text-warning mb-1 font-semibold">Critical Design Rule</h4>
              <p className="text-sm text-text-white font-light">Every output includes a confidence score (0-100%). If signal quality or model confidence falls below threshold, output is suppressed and replaced with "insufficient signal" message. The model must know what it doesn't know.</p>
            </div>
            <div className="p-4 bg-accent/5 rounded-xl border border-accent/10">
              <h4 className="text-xs uppercase tracking-[0.1em] text-accent mb-1 font-semibold">Latency Target</h4>
              <p className="text-sm text-text-white font-light">Full pipeline from raw photon to classified state in under 100ms. No cloud dependency for real-time outputs.</p>
            </div>
          </div>
        </div>
      )
    },
    { 
      label: "Analytics", 
      icon: Cloud, 
      zone: "Cloud",
      shortDesc: "Longitudinal trends, anomaly detection, cohort benchmarks.",
      detailContent: (
        <div className="text-left space-y-6">
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-text-muted mb-4 font-semibold">What happens in the cloud:</h4>
            <ul className="space-y-4 text-text-body font-light">
              <li><strong className="text-text-white font-medium block mb-1">1. Longitudinal baseline tracking:</strong> Your personal CBF patterns over weeks and months. Establishes what "normal" looks like for YOU, not population averages. Detects gradual trends that day-to-day readings miss.</li>
              <li><strong className="text-text-white font-medium block mb-1">2. Anomaly detection:</strong> Sudden deviations from your personal baseline trigger alerts. Example: CBF dropping 15% below your 30-day average without a lifestyle explanation (exercise, sleep, caffeine changes).</li>
              <li><strong className="text-text-white font-medium block mb-1">3. Cohort benchmarking:</strong> How does your CBF profile compare to others in your age, activity level, and fitness cohort? This requires population-level data and is where the proprietary dataset becomes valuable.</li>
              <li><strong className="text-text-white font-medium block mb-1">4. Contextual correlation:</strong> Mapping CBF patterns against logged activities, sleep data, nutrition, and environmental factors. Discovering patterns like "your CBF drops 8% on days with less than 6 hours of sleep" or "your recovery is 2x faster after zone 2 cardio vs HIIT."</li>
              <li><strong className="text-text-white font-medium block mb-1">5. Trend decomposition:</strong> Separating daily fluctuations from weekly patterns from monthly/seasonal trends. Is your CBF genuinely declining over 6 months, or are you just seeing normal variation?</li>
            </ul>
          </div>
        </div>
      )
    },
    { 
      label: "Insight", 
      icon: Eye, 
      zone: "Cloud",
      shortDesc: "Actionable metric + confidence score + 'insufficient data' fallback.",
      detailContent: (
        <div className="text-left space-y-6">
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-text-muted mb-4 font-semibold">What the user actually sees:</h4>
            <ul className="space-y-4 text-text-body font-light">
              <li><strong className="text-text-white font-medium block mb-1">1. Real-time state indicator:</strong> Simple visual (green/amber/red or a score) showing current cognitive readiness. Not raw numbers. Example: "Cognitive readiness: 82/100. You're in a good state for focused work."</li>
              <li><strong className="text-text-white font-medium block mb-1">2. Actionable recommendations:</strong> Based on detected state + historical patterns. "Your CBF recovery is slower than your baseline today. Consider a 20-min break before your next session."</li>
              <li><strong className="text-text-white font-medium block mb-1">3. Trend reports:</strong> Weekly/monthly summaries showing how your brain health metrics are trending. Visualized as simple charts, not raw hemoglobin concentrations.</li>
              <li><strong className="text-text-white font-medium block mb-1">4. Confidence transparency:</strong> Every insight shows how confident the system is. "High confidence" when signal quality was strong and the pattern matches training data well. "Limited data" when conditions were noisy or unusual. Never a confident number from bad data.</li>
            </ul>
          </div>
          <div className="p-4 bg-text-white/5 rounded-xl border border-white/10 mt-6">
            <h4 className="text-sm uppercase tracking-[0.15em] text-text-white mb-2 font-semibold">5. "Insufficient signal" as a valid state</h4>
            <p className="text-text-body font-light leading-relaxed">
              When sensor placement is poor, motion is excessive, or conditions are outside the model's training distribution, the system explicitly says "I can't give you a reliable reading right now" instead of guessing. This is the most important UX decision in the entire product.
            </p>
          </div>
        </div>
      )
    }
  ];

  const metrics = [
    { icon: Brain, title: "Cognitive Load", desc: "CBF increases ~12% during demanding tasks (established fNIRS literature)" },
    { icon: Battery, title: "Fatigue Detection", desc: "Predictable CBF pattern shifts marking the onset of deep mental fatigue." },
    { icon: TrendingUp, title: "Recovery Quality", desc: "Post-exercise CBF normalization rate acting as the ultimate readiness signal." },
    { icon: BarChart, title: "Training Readiness", desc: "Composite score derived from baseline CBF variability and recovery trajectory." },
  ];

  const activeStage = stages[expandedIndex];

  return (
    <section className="min-h-screen py-32 section-base px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-28">
          <h2 className="text-4xl md:text-6xl font-normal text-text-white mb-6 tracking-tight">Sensor-to-Insight Architecture</h2>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto font-light tracking-wide">From raw photon counts to actionable mental state analytics.</p>
        </div>

        {/* Pipeline Visualizer */}
        <div className="mb-32">
          
          {/* Zones Label */}
          <div className="hidden lg:flex justify-between mb-12 relative">
            <div className="w-[60%] flex text-left pl-[4%]">
              <span className="px-4 text-[10px] font-medium tracking-[0.2em] uppercase text-text-subtle bg-bg-dark z-10 relative">On-Device • Low Latency</span>
            </div>
            <div className="w-[40%] flex text-right pr-[4%] justify-end">
              <span className="px-4 text-[10px] font-medium tracking-[0.2em] uppercase text-accent bg-bg-dark z-10 relative">Cloud • Longitudinal</span>
            </div>
             <div className="absolute top-1/2 left-0 w-full h-px bg-white/5"></div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center relative gap-4 lg:gap-0 mt-8">
            {stages.map((stage, idx) => (
              <PipelineStage 
                key={idx} 
                stage={stage} 
                index={idx} 
                isExpanded={expandedIndex === idx}
                onClick={() => setExpandedIndex(idx)} 
              />
            ))}
          </div>

          {/* Expanded Detail Box */}
          <div className="mt-16 lg:mt-24 h-auto min-h-[140px] max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={expandedIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-bg-dark-card/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/5 flex flex-col items-center gap-8"
              >
                {/* Header of Detail Box */}
                <div className="text-center">
                  <div className="flex flex-col items-center gap-3 mb-4">
                    <span className={clsx("px-3 py-1 rounded-full text-[9px] uppercase font-bold tracking-[0.2em]", activeStage.zone === 'On-device' ? "bg-white/5 text-text-muted" : "bg-accent/10 text-accent")}>
                      {activeStage.zone}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-light text-text-white tracking-wide">Stage {expandedIndex + 1}: {activeStage.label}</h3>
                  </div>
                  <p className="text-lg text-text-muted font-light tracking-wide mb-8">{activeStage.shortDesc}</p>
                </div>

                {/* Body of Detail Box */}
                <div className="w-full bg-[#111111] p-6 lg:p-10 rounded-2xl border border-white/5">
                  {activeStage.detailContent}
                </div>
                
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Measurables Grid */}
        <div>
           <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-white/5 flex-grow"></div>
            <h3 className="text-xs font-medium tracking-[0.2em] text-text-body uppercase text-center pt-2">What Becomes Measurable</h3>
            <div className="h-px bg-white/5 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 max-w-5xl mx-auto">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                className="flex items-start gap-6 p-8 bg-bg-dark-card/30 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="text-accent opacity-80 mt-1 shrink-0">
                  <metric.icon size={28} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-xl font-normal text-text-white mb-2 tracking-wide">{metric.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed font-light">{metric.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
