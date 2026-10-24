<div align="center">

# CSky AI (॥ आकाश ॥)
### Frontier Open-Weight Intelligence Under an Open Sky

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-green?style=flat-square&logo=greensock)](https://greensock.com/gsap/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ed?style=flat-square&logo=docker)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-Apache_2.0-orange?style=flat-square)](LICENSE)

*A modern web platform and foundation model suite pairing frontier AI deduction with traditional Vedic sacred geometry, animated GSAP flowing fluted glass heroes, and verifiable open weights.*

[Explore Models](#-the-six-celestial-foundation-models) • [Architecture](#-visual-architecture--deep-dive) • [Quickstart](#-quickstart) • [Docker Deployment](#-docker-deployment)

</div>

---

## ✦ The Six Celestial Foundation Models

CSky AI provides transparent, auditable open weights designed for inspectability and sovereignty:

| Model | Sanskrit & Scale | Role & Architecture | Color Theme | License |
| :--- | :--- | :--- | :--- | :--- |
| **Akash** | आकाश · **405B** | Flagship multi-step reasoning, formal theorem verification & deep logic | Celestial Rose (`#E11D48`) | Open Research |
| **Agni** | अग्नि · **120B** | High-throughput code synthesis, compiler verification & autonomous swarms | Solar Flame (`#EA580C`) | Apache 2.0 |
| **Drishti** | दृष्टि · **70B** | Enterprise production workhorse balancing latency, cost, and depth | Golden Amber (`#D97706`) | Apache 2.0 |
| **Prithvi** | पृथ्वी · **32B** | Grounded multimodal foundation for 3D spatial reasoning & 4K documents | Terracotta Bronze (`#C2410C`) | Apache 2.0 |
| **Soma** | सोम · **14B** | Distilled Lean 4 theorem proving & Olympiad-level mathematical logic | Lunar Indigo (`#4F46E5`) | Apache 2.0 |
| **Vayu** | वायु · **8B** | Ultra-compact edge model running offline on consumer laptops & devices | Mint Sage (`#059669`) | Apache 2.0 |

---

## ✦ Platform Highlights

### 1. Dynamic Flowing Fluted Glass Hero (`AnimatedBarsBackground`)
- **Canvas-driven GSAP Harmonics:** Real sinusoidal wave generation customized per model (e.g. Akash Cosmic Ether Pillars, Drishti Prismatic Eye Focal Axis, Vayu Kinetic Fluttering Reeds).
- **Vedic Sacred Geometry Watermarks:** Intricately etched background mandalas and yantras featuring authentic geometric topologies (Surya Mandala, Akash Cosmos, Drishti Eye Yantra, Agni Panchagni Triangles, Prithvi Bhupura Fortress, Soma Chandra Crescent).
- **Optical Depth-of-Field Refraction:** Multi-layer composite with ambient halo glow, optical dispersion, and masked crisp focal geometry.

### 2. Interactive Architecture Visualizer (`ModelArchitectureDiagram`)
- Replaces static code dumps with an interactive 4-layer transformer topology:
  1. **Rotary Position Embedding (RoPE)** with 200k context sequence length.
  2. **Grouped-Query Attention (GQA)** with 8 KV heads for memory efficiency.
  3. **SwiGLU Non-Linear Reasoning Engine** with intermediate projection expansion.
  4. **Native Block Quantization** supporting FP8 and 4-bit inference kernels.

### 3. Live Multi-Step Chain-of-Thought Deduction Demo (`InteractiveReasoningDemo`)
- Real-time interactive deduction visualizer showcasing token generation speed, cognitive latency, verified proof steps, and safety bounds.

### 4. Adaptive Navigation & Theming (`Navbar`)
- Dynamic navbar CTA with CSS transitions that harmonizes color palettes with active models (`#E11D48` for Akash, `#EA580C` for Agni, `#D97706` for Drishti, etc.).
- Comprehensive Mega-Menu dropdown with instant access to model specs and software tooling.

---

## ✦ Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack, React 19)
- **Styling:** Tailwind CSS v4
- **Animation:** GSAP (GreenSock Animation Platform)
- **Typography:** Geist & Geist Mono
- **Deployment:** Docker Multi-stage Standalone (`output: "standalone"`)

---

## ✦ Quickstart

### Prerequisites
- Node.js 20+
- npm 10+ (or pnpm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/CSky-Developments/AI.git
cd AI

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## ✦ Docker Deployment

The application is pre-configured with `output: "standalone"` in `next.config.ts` for minimal production Docker container images:

```bash
# Build the Docker image
docker build -t csky-ai .

# Run the container
docker run -p 3000:3000 csky-ai
```

The server binds to `0.0.0.0:3000` with production optimization.

---

## ✦ Project Structure

```
├── public/                 # Static assets, branding & SVG emblems
├── src/
│   ├── app/                # Next.js App Router (layout, page, globals)
│   ├── components/         # Modular UI components
│   │   ├── views/          # Overview, Models, Manifesto, EarlyAccess, ProductView
│   │   ├── AnimatedBarsBackground.tsx # GSAP fluted glass wave canvas
│   │   ├── TraditionalSymbols.tsx     # Sacred geometry SVGs & watermarks
│   │   ├── ModelArchitectureDiagram.tsx # Interactive 4-layer topology
│   │   ├── InteractiveReasoningDemo.tsx # Chain-of-thought deduction trace
│   │   ├── BenchmarkComparisonChart.tsx # Animated benchmark evaluation
│   │   ├── Navbar.tsx      # Adaptive color-shifting navigation
│   │   └── Logo.tsx        # Dynamic 4-bar brand logo
│   └── data/               # Product and model configuration metadata
├── Dockerfile              # Multi-stage standalone container specification
├── next.config.ts          # Standalone output & Turbopack configurations
└── package.json
```

---

## ✦ License

Open-source under the [Apache 2.0 License](LICENSE). Models released under their respective open weights licenses.
