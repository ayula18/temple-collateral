# Frontend Prompt: Temple AI Collateral — Interactive Web Experience

## What This Is

You are building an **interactive, single-page web experience** that serves as a job interview collateral for **Ayush Lahoti** applying to **Temple** (Deepinder Goyal's brain blood-flow monitoring wearable startup). This replaces a static PPTX with something far more memorable — an interactive microsite that demonstrates both the candidate's thinking AND their ability to build.

The page walks the viewer (interviewer: **Kaashika Prajaapat**, IIT Delhi CS grad, AI engineer at Temple) through a first-principles framework for building Temple's intelligence layer — covering AI pipeline architecture, proprietary dataset strategy, and AI safety/evaluation.

**The goal:** Impress a deeply technical interviewer by showing systems thinking, research depth, and builder instincts — NOT by pretending to be an ML researcher.

---

## Design Theme & Visual Language

### Temple's Brand Identity (match this closely)
Temple's website (temple.com) is **ultra-minimal, dark, and premium**. Key characteristics:
- **Near-black background** — not pure black, more like `#0A0E1A` or `#0B1120` (deep navy-black)
- **Minimal text** — their site literally says "Coming Soon" and one tagline
- **Tagline:** *"The future of health starts where no one's looking. Inside your brain."*
- **Accent color:** Teal/mint green (`#00D4AA` or similar) — used sparingly
- **Typography:** Clean, modern sans-serif. Likely Inter, DM Sans, or similar
- **Zero visual clutter** — extreme whitespace, no unnecessary elements
- **Feel:** Scientific, premium, frontier-tech — like if Apple designed a neuroscience lab

### Continue Research (temple's parent research org) Design Cues
- Clean scientific layout
- Data visualizations with teal/green accents on dark backgrounds
- Citation-heavy, credibility-focused presentation
- Mix of dark sections and light sections for contrast

### Design Rules for This Build
1. **Dark-dominant** with alternating dark/light sections (sandwich structure)
2. **Accent color: `#00D4AA`** (teal/mint) — used for highlights, interactive elements, hover states, key stats
3. **Secondary colors:** `#131D35` (dark navy for cards), `#F3F5F9` (light sections), `#7B8DB5` (muted text)
4. **Typography:** Use Inter or DM Sans. Big, bold section headers (48-64px). Clean body text (16-18px). Generous line height (1.6-1.8)
5. **Animations:** Subtle scroll-triggered reveals (fade-up, not flashy). Smooth transitions. Nothing that feels gimmicky.
6. **No stock images.** Use SVG illustrations, data visualizations, and animated diagrams instead.
7. **Mobile responsive** — this might be viewed on a phone during the interview

---

## Page Structure (8 Sections)

### Section 1: Hero / Cover
**Dark background**

Content:
- Small brain icon (SVG, animated pulse glow in teal)
- Title: **"From Signal to Trust"**
- Subtitle: **"Building Temple's Intelligence Layer"**
- Description: "A First-Principles Framework for AI Pipeline, Dataset Strategy & Evaluation"
- Author: "Ayush Lahoti" with email (ayush_lahoti@pg26.mesaschool.co) and phone (9404131807)
- Subtle scroll indicator at bottom (animated chevron or "scroll to explore")

Design notes:
- Title should be large (56-72px), bold, white
- Subtitle in accent teal
- Think Apple keynote energy — minimal, confident, spacious
- Optional: very subtle particle/dot grid animation in background (think neural network nodes faintly connecting)

---

### Section 2: The Opportunity + Continue Research Context
**Light background section**

Content — two columns:

**Left Column — "The Gap"**
Every wearable today measures the body's periphery — heart rate, SpO₂, skin temp, movement. These are downstream echoes of what the brain has already decided. Cerebral blood flow (CBF) is the most information-rich signal about cognitive state, fatigue, and brain health — but until now required an MRI to measure.

**Right Column — "What Continue Research Established"**
Three data points displayed as interactive stat cards (click/hover to expand):

1. **~17% higher CBF lying down vs standing**
   - Source: Possnig et al. 2025, *Experimental Physiology*, n=17
   - Tag: ✅ Peer-reviewed
   - Expanded detail: Original study designed for spaceflight bed-rest research. Found total CBF was 1,078 mL/min supine vs 891 mL/min seated (P = 0.0006). Notably, CBF decreased back to upright-equivalent after 3 days of bed rest, suggesting autoregulatory adaptation.

2. **0.3–0.74% annual CBF decline with age**
   - Source: Mokhber et al. 2021, *Neuroradiology Journal*
   - Tag: ✅ Peer-reviewed, widely replicated
   - Expanded detail: Reported 0.45–0.74%/year in gray matter and 0.3%/year in white matter. Established literature attributes decline to vascular aging and endothelial dysfunction. Continue's novel contribution is the hypothesized causal link to chronic gravitational stress.

3. **~7% CBF increase with daily inversion (n=10 pilot)**
   - Source: Continue Research own data, 40-day study
   - Tag: ⚠️ Preliminary — awaiting independent validation
   - Expanded detail: N=10 uncontrolled pilot using Temple's proprietary device. No control group, no blinding, no randomization. Device not independently validated. Classified as preliminary/exploratory.

**Bottom callout bar (dark background):**
*"Whether or not the gravity-causation link is validated, continuous CBF monitoring unlocks a data category no consumer device captures. The hypothesis creates the 'why.' The device is the 'how.' The AI is the 'what makes it work.'"*

Design notes:
- Stat cards should have subtle hover effect (slight lift + shadow)
- Tags (peer-reviewed vs preliminary) should be visually distinct (green badge vs amber badge)
- Expandable cards — click to reveal source details (accordion or modal)

---

### Section 3: The Core AI Problem
**Dark background**

Content:

**Big hero stat in center:**
- Number: **6–19%**
- Label: "of total photon path is actual brain signal"
- Source: Strangman et al. 2014, NeuroImage — 3,555 Monte Carlo simulations

**Tagline above stat:**
*"The AI's primary job isn't prediction — it's extraction."*

**Right/below: Noise sources** (displayed as 4 interactive cards or an animated breakdown visualization)

1. **Scalp blood flow** — Dominant contaminant — shares optical path with brain signal
2. **Melanin absorption** — SNR degrades measurably (r = −0.49 with melanin index). Source: Roy et al. 2024, *Journal of Biomedical Optics*, n=35
3. **Motion artifacts** — Head movement, jaw clenching, ambient light shifts
4. **Skull attenuation** — Thickness ranges 2.5–10.5mm across individuals. Source: Strangman et al. 2014

**Bottom callout:**
"Separating the 6–19% brain signal from the 81–94% noise is the foundational AI challenge. Everything downstream depends on this."

Design notes:
- The 6–19% number should be HUGE (80-120px), in teal, animated count-up on scroll
- Consider an interactive pie/donut chart showing signal vs noise breakdown
- Noise source cards could have icons and expand on click
- This is the "wow, this person understands the physics" slide — make it visually impactful

---

### Section 4: Sensor-to-Insight Architecture + Metrics
**Light background**

Content — **Interactive pipeline diagram:**

6 stages connected by animated arrows/lines:

| Stage | Label | Description | Zone |
|-------|-------|-------------|------|
| 1 | Signal Acquisition | Optical sensor + IMU data | On-device |
| 2 | Noise Removal | Motion artifact correction, scalp blood flow subtraction | On-device |
| 3 | Feature Extraction | Hemoglobin concentration changes, pulsatility indices | On-device |
| 4 | Embedded ML Inference | On-device, <100ms latency, real-time state classification | On-device |
| 5 | Cloud Analytics | Longitudinal trends, anomaly detection, cohort benchmarks | Cloud |
| 6 | User Insight | Actionable metric + confidence score + "insufficient data" fallback | Cloud |

**Interactive behavior:**
- Each stage is a clickable card
- On click/hover: expand to show technical detail of what happens at that stage
- Visual divider between stages 4 and 5 showing "ON-DEVICE • LOW LATENCY" vs "CLOUD • LONGITUDINAL"
- Animated data flow particles moving through the pipeline (subtle)

**Below pipeline — "What Becomes Measurable":**
4 metric cards in a 2×2 grid:

1. **Cognitive Load** — CBF increases ~12% during demanding tasks (established fNIRS literature)
2. **Fatigue Detection** — Predictable CBF pattern shifts with mental fatigue
3. **Recovery Quality** — Post-exercise CBF normalization rate as readiness signal
4. **Training Readiness** — Composite score from baseline CBF + recovery trajectory

Design notes:
- Pipeline should be THE centerpiece of the page — make it beautiful
- Consider a horizontal scroll pipeline on mobile
- Animated data flow particles give it that "alive system" feel
- Each pipeline stage could have a small icon (wave, chip, brain, cloud, eye)

---

### Section 5: Proprietary Dataset Strategy
**Light background (slightly different shade) or subtle gradient**

Content:

**Header:** "Proprietary Dataset Strategy"
**Subtext:** *"The questions I'd ask on Day 1 — because the dataset IS the long-term moat."*

**4 question cards in 2×2 grid (interactive — flip or expand on click):**

**Card 1 — "Where does ground truth come from?"**
Gold standard for CBF is MRI-ASL — but you can't MRI someone mid-workout. Bridge validation options: transcranial Doppler (portable but operator-dependent) or controlled lab sessions with paired clinical measurements. Requires hospital/research partnerships from week one.

**Card 2 — "What context must accompany every reading?"**
Raw CBF is meaningless without: activity state (resting/exercising/sleeping), posture (upright/supine/inverted), hydration and caffeine intake, ambient temperature, time of day. The metadata schema is as important as the signal data itself.

**Card 3 — "How do we ensure demographic robustness?"**
Melanin concentration affects NIR signal quality (peer-reviewed, quantified). Skull thickness varies by age and sex. Training data must cover these variations — or the model will have blind spots where it matters most.

**Card 4 — "Which edge cases must be deliberately collected?"**
Migraines, post-concussion states, caffeine withdrawal, altitude changes, extreme heat/cold. These are conditions where the model matters most and where failure is most dangerous — and they won't appear naturally in early adopter data.

**Bottom statement (italic, muted):**
*"Whoop, Oura, and Apple have billions of peripheral data points. None have a single second of continuous, labeled cerebral blood flow data from a consumer wearable. Temple's first validated CBF dataset will be the most defensible asset in the wearable industry."*

Design notes:
- Cards should have a left accent bar in teal
- Consider flip-card animation (front shows question, back shows answer)
- OR accordion expand on click
- Each card should have a distinct icon (target, database, users, warning)

---

### Section 6: AI Safety & Evaluation Framework
**Dark background**

Content — **Two columns:**

**Left column — "Why Standard Eval Isn't Enough" (3 problem cards):**

1. **Confident wrong answers kill trust**
   "Your cognitive function is declining" — if wrong, causes anxiety and unnecessary medical visits. Health AI needs "insufficient signal" as a valid output.

2. **Accuracy ≠ clinical validity**
   95% aggregate accuracy can mask systematic failure for specific demographics. Pulse oximeters showed 3× undetected low oxygen in darker skin (Sjoding et al. 2020, NEJM, n=10,789).

3. **Unexpected usage creates liability**
   Athletes will make training decisions. Coaches will bench players. Insurance companies will ask for data. Graceful degradation isn't optional.

**Right column — "The 4-Layer Framework" (interactive numbered layers):**

| Layer | Name | Description |
|-------|------|-------------|
| L1 | Signal Quality Gate | Suppress output if SNR below threshold. Never guess. Show "adjusting sensor" instead. |
| L2 | Accuracy Validation | Bland-Altman analysis vs clinical CBF per demographic cohort. Track bias by skin tone, age, skull region. |
| L3 | Adversarial Testing | Extreme motion, temperature, sensor shift, sweat. Define graceful degradation for each. Map attack surfaces. |
| L4 | Drift Monitoring | Track per-cohort accuracy as user demographics shift. Auto-trigger retraining when thresholds breach. |

Design notes:
- Problem cards should have red/amber warning icons
- Framework layers should be teal-accented numbered badges (L1, L2, L3, L4)
- Consider an interactive pyramid or concentric circle visualization for the layers
- Hover on each layer reveals detail
- This section should feel authoritative and structured

---

### Section 7: Why Me — My Angle
**Light background**

Content:

**Header:** "Why Me — My Angle"
**Subtext:** *"I'm not an ML researcher. I'm a builder who ships systems and thinks about what can go wrong."*

**3 value proposition cards (tall cards, side by side):**

**Card 1 — Systems Thinking**
Built end-to-end AI pipelines at Mosaic Wellness (4-stage n8n pipeline → 80% creative acceptance, 4× testing velocity). Led 0→1 at LevelUp AI — scoping hallucination-free SLM, designing UX, standing up cross-functional teams. I think from sensor to user, not just the model.

**Card 2 — Cybersecurity Mindset → AI Safety**
CS degree in Cyber Security. Trained to think about attack surfaces, failure modes, and adversarial inputs. Applied to health AI: how does the model fail gracefully? Where can the data pipeline be spoofed? What happens when the sensor is worn wrong? This is the lens almost no other ML intern brings.

**Card 3 — 0→1 Execution Speed**
Shipped Flowstate Wealth MVP as first employee — discovery to launch in 2 months, enabled 200+ portfolio reviews. Co-founded Socialtix — 15+ projects shipped with a 5-person team in 4-5 week cycles. Built Bunchup from zero to 2,000+ signups and ₹10L pre-seed. I know how to move fast in ambiguity.

Design notes:
- Cards should have teal top accent bar
- Icons for each (circuit/chip, lock/shield, chart/rocket)
- Subtle hover lift effect
- Keep this section concise — Kaashika can read the resume herself

---

### Section 8: Closing
**Dark background**

Content:
- Centered brain icon (animated subtle pulse)
- 4-line statement (each line appears with staggered animation):
  - "The device captures the signal."
  - "The AI makes it meaningful."
  - "The dataset makes it defensible."
  - "The evaluation makes it trustworthy."
- CTA in teal: **"I want to help build all four."**
- Divider line
- Contact: Ayush Lahoti | ayush_lahoti@pg26.mesaschool.co | 9404131807 | LinkedIn | Portfolio

Design notes:
- Each line should animate in sequentially on scroll (typewriter or fade-up with delay)
- The CTA should have a subtle glow/pulse
- This is the emotional close — make it clean and impactful
- Optional: subtle particle animation in background

---

## Technical Requirements

- **Framework:** React (Next.js or Vite) or vanilla HTML/CSS/JS — whatever ships fastest
- **Animations:** Use Framer Motion, GSAP, or CSS animations for scroll-triggered reveals
- **Responsive:** Must work on mobile (interview might happen on a phone/tablet)
- **Performance:** Fast load, no heavy assets. SVG for icons, minimal JS bundle
- **Deployment:** Should be deployable on Vercel/Netlify with one click
- **No backend needed** — all content is static

## Key Interaction Patterns

1. **Scroll-triggered animations** — sections fade/slide in as you scroll
2. **Expandable cards** — click to reveal detailed source information and technical depth
3. **Interactive pipeline** — click each stage to see detail
4. **Animated stat counters** — numbers count up when scrolled into view
5. **Smooth scroll navigation** — optional fixed nav dots on the side for jumping between sections

## Color Reference

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-dark` | `#0B1120` | Dark section backgrounds |
| `--bg-dark-card` | `#131D35` | Card backgrounds on dark sections |
| `--bg-light` | `#F3F5F9` | Light section backgrounds |
| `--bg-card` | `#FFFFFF` | Card backgrounds on light sections |
| `--accent` | `#00D4AA` | Primary accent — highlights, CTAs, interactive elements |
| `--accent-dim` | `#0A8F73` | Darker accent for hover states |
| `--text-white` | `#FFFFFF` | Primary text on dark backgrounds |
| `--text-dark` | `#1A2138` | Primary text on light backgrounds |
| `--text-body` | `#3D4663` | Body text on light backgrounds |
| `--text-muted` | `#7B8DB5` | Secondary/muted text |
| `--text-subtle` | `#6B7A9E` | Tertiary text, sources, captions |
| `--warning` | `#FF6B6B` | Warning icons, problem indicators |
| `--success` | `#00D4AA` | Same as accent — for "peer-reviewed" badges |
| `--pending` | `#F0A500` | For "preliminary/awaiting validation" badges |

## Typography

| Element | Size | Weight | Font |
|---------|------|--------|------|
| Hero title | 56-72px | 800 | Inter or DM Sans |
| Section title | 36-44px | 700 | Inter or DM Sans |
| Subsection title | 20-24px | 600 | Inter or DM Sans |
| Body text | 16-18px | 400 | Inter or DM Sans |
| Card title | 16-18px | 600 | Inter or DM Sans |
| Card body | 14-15px | 400 | Inter or DM Sans |
| Source citations | 12-13px | 400 | Inter or DM Sans |
| Stat numbers | 80-120px | 800 | Inter or DM Sans |

## What NOT to Do

- ❌ Don't make it look like a generic portfolio site
- ❌ Don't use gradients everywhere — Temple's aesthetic is flat, minimal, dark
- ❌ Don't add unnecessary animations that distract from content
- ❌ Don't use stock photos or AI-generated images
- ❌ Don't make it text-heavy — use visual hierarchy to guide the eye
- ❌ Don't forget mobile — this WILL be viewed on a phone
- ❌ Don't use bright colors beyond the teal accent — the palette is restrained
- ❌ Don't add a chatbot, newsletter signup, or any other noise — this is a focused collateral piece

## What TO Do

- ✅ Make the pipeline diagram the visual hero of the page
- ✅ Use scroll-triggered animations that feel intentional, not decorative
- ✅ Show source credibility clearly (peer-reviewed vs preliminary badges)
- ✅ Make interactive elements feel rewarding (good hover states, smooth transitions)
- ✅ Keep sections breathing — generous padding (80-120px between sections)
- ✅ Use the dark/light alternation to create visual rhythm
- ✅ Make the closing section feel like a mic drop
- ✅ Ensure fast load time — under 3 seconds
