export interface ProductConfig {
  id: string;
  category: "model" | "software";
  name: string;
  tagline: string;
  description: string;
  badge: string;
  colorScheme: {
    primary: string; // text & button color
    buttonHover: string;
    light: string; // pill/badge bg
    glow: string;
    bgWash: string; // soft pastel background
    hueRotate: string; // CSS hue-rotate e.g. "145deg" for red, "195deg" for yellow, "285deg" for green
    saturation?: string;
  };
  metrics: { label: string; value: string }[];
  highlights: { title: string; desc: string }[];
  primaryCta: { label: string; action: string };
  secondaryCta?: { label: string; action: string };
  codeSnippet?: { language: string; code: string };
}

export const PRODUCTS_DATA: Record<string, ProductConfig> = {
  // MODELS - INDIAN CELESTIAL SUITE
  "csky-ultra": {
    id: "csky-ultra",
    category: "model",
    name: "Akash",
    tagline: "405B Flagship Reasoning Engine Named After the Infinite Sky",
    description:
      "Akash (आकाश) represents the boundless celestial ether. Built for the most demanding scientific deduction, deep multi-step logic, and architectural analysis. Fully auditable open weights released under our Open Research license.",
    badge: "Flagship Foundation Model (405B)",
    colorScheme: {
      primary: "#E11D48", // Soft vibrant rose red
      buttonHover: "#BE123C",
      light: "#FFE4E6", // Soft blush
      glow: "rgba(225, 29, 72, 0.4)",
      bgWash: "#FFF1F2",
      hueRotate: "145deg", // Blue -> Soft Red
      saturation: "1.25",
    },
    metrics: [
      { label: "Sanskrit Meaning", value: "The Infinite Sky" },
      { label: "Parameters", value: "405 Billion" },
      { label: "Context Window", value: "200k" },
      { label: "License", value: "Open Research" },
    ],
    highlights: [
      {
        title: "Extended Chain-of-Thought",
        desc: "Produces transparent step-by-step reasoning proofs that humans can audit before acting.",
      },
      {
        title: "Native FP8 & 4-bit Quantization",
        desc: "Pre-quantized kernels enable running Akash on 4x H100s or distributed cluster nodes with zero accuracy loss.",
      },
      {
        title: "Multilingual Scientific Mastery",
        desc: "State-of-the-art benchmarks in competitive programming, formal mathematics, and cross-domain synthesis.",
      },
    ],
    primaryCta: { label: "Download Akash (405B)", action: "download" },
    secondaryCta: { label: "Hugging Face Hub", action: "hf" },
    codeSnippet: {
      language: "bash",
      code: "huggingface-cli download csky/akash-405b --local-dir ./akash-405b-fp8",
    },
  },

  "csky-pro": {
    id: "csky-pro",
    category: "model",
    name: "Drishti",
    tagline: "70B Production Model Delivering Unclouded Insight & Vision",
    description:
      "Drishti (दृष्टि) embodies pure sight and focused clarity. It combines the analytical fidelity of frontier models with sub-second token generation latency and permissive Apache 2.0 licensing.",
    badge: "Production Workhorse (70B)",
    colorScheme: {
      primary: "#D97706", // Soft warm amber / golden yellow
      buttonHover: "#B45309",
      light: "#FEF3C7", // Soft warm yellow
      glow: "rgba(217, 119, 6, 0.4)",
      bgWash: "#FEFCE8",
      hueRotate: "195deg", // Blue -> Warm Golden Yellow
      saturation: "1.3",
    },
    metrics: [
      { label: "Sanskrit Meaning", value: "Clear Sight / Vision" },
      { label: "Parameters", value: "70 Billion" },
      { label: "Context Window", value: "128k" },
      { label: "License", value: "Apache 2.0" },
    ],
    highlights: [
      {
        title: "Permissive Commercial Freedom",
        desc: "Licensed under Apache 2.0. Deploy in your own SaaS, internal cloud, or air-gapped on-premise infrastructure.",
      },
      {
        title: "vLLM & TensorRT-LLM Ready",
        desc: "Optimized out of the box for continuous batching and PagedAttention in high-concurrency environments.",
      },
      {
        title: "Zero Data Retention",
        desc: "Run weights completely locally with absolute sovereignty over proprietary enterprise data.",
      },
    ],
    primaryCta: { label: "Download Drishti (70B)", action: "download" },
    secondaryCta: { label: "View Ollama Guide", action: "ollama" },
    codeSnippet: {
      language: "bash",
      code: "ollama run csky/drishti:70b-q8",
    },
  },

  "csky-nano": {
    id: "csky-nano",
    category: "model",
    name: "Vayu",
    tagline: "8B Edge Intelligence Swift as the Wind on Any Device",
    description:
      "Vayu (वायु) signifies the vital breath and swift wind. Ultra-compact, remarkably coherent, and blazing fast. Vayu runs locally on Apple Silicon MacBooks, RTX laptops, and edge devices with single-digit watt power draws.",
    badge: "Edge & On-Device (8B)",
    colorScheme: {
      primary: "#059669", // Soft calm emerald / mint green
      buttonHover: "#047857",
      light: "#D1FAE5", // Soft sage mint
      glow: "rgba(5, 150, 105, 0.4)",
      bgWash: "#F0FDF4",
      hueRotate: "285deg", // Blue -> Soft Mint / Green
      saturation: "1.25",
    },
    metrics: [
      { label: "Sanskrit Meaning", value: "Swift as the Wind" },
      { label: "Parameters", value: "8 Billion" },
      { label: "RAM Footprint", value: "4.8 GB" },
      { label: "Hardware", value: "Mac / PC / Mobile" },
    ],
    highlights: [
      {
        title: "Runs on 8GB RAM",
        desc: "Optimized 4-bit GGUF quantization fits effortlessly on consumer hardware without degrading conversation quality.",
      },
      {
        title: "Zero Cloud Dependencies",
        desc: "Operates 100% offline in airplanes, remote research outposts, and secure air-gapped vaults.",
      },
      {
        title: "Instant Cold Starts",
        desc: "Sub-100ms startup times ideal for command-line helpers, desktop auto-complete, and embedded agents.",
      },
    ],
    primaryCta: { label: "Download Vayu (8B)", action: "download" },
    secondaryCta: { label: "Documentation", action: "docs" },
    codeSnippet: {
      language: "bash",
      code: "curl -fsSL csky.ai/get-vayu.sh | sh",
    },
  },

  "csky-agni": {
    id: "csky-agni",
    category: "model",
    name: "Agni",
    tagline: "120B Cosmic Fire for High-Throughput Code Synthesis & Autonomous Agents",
    description:
      "Agni (अग्नि) channels the sacred transformative flame. Specifically trained for high-velocity algorithmic code synthesis, compiler verification, and multi-agent coordination with zero hallucination.",
    badge: "Code & Agentic Engine (120B)",
    colorScheme: {
      primary: "#EA580C", // Vibrant solar flame orange
      buttonHover: "#C2410C",
      light: "#FFEDD5",
      glow: "rgba(234, 88, 12, 0.4)",
      bgWash: "#FFF7ED",
      hueRotate: "35deg",
      saturation: "1.2",
    },
    metrics: [
      { label: "Sanskrit Meaning", value: "The Cosmic Fire" },
      { label: "Parameters", value: "120 Billion" },
      { label: "Context Window", value: "256k" },
      { label: "License", value: "Apache 2.0" },
    ],
    highlights: [
      {
        title: "Compiler-Verified Code Generation",
        desc: "Integrated formal grammar trees guarantee syntax-correct AST generation across Rust, Go, TypeScript, and Python.",
      },
      {
        title: "Autonomous Tool Use & Multi-Agent Loops",
        desc: "Native support for complex tool calling, sandboxed execution, and asynchronous agent swarm orchestration.",
      },
      {
        title: "High-Throughput Streaming Engine",
        desc: "Optimized FP8 speculative decoding achieves up to 140 tokens/second on 2x H100 GPU clusters.",
      },
    ],
    primaryCta: { label: "Download Agni (120B)", action: "download" },
    secondaryCta: { label: "Hugging Face Hub", action: "hf" },
  },

  "csky-prithvi": {
    id: "csky-prithvi",
    category: "model",
    name: "Prithvi",
    tagline: "32B Grounded Multimodal Foundation for Physical & Spatial Reasoning",
    description:
      "Prithvi (पृथ्वी) represents the steadfast physical earth. A grounded multimodal foundation model capable of processing high-resolution visual documents, complex architectural blueprints, spatial geometry, and video streams.",
    badge: "Grounded Multimodal (32B)",
    colorScheme: {
      primary: "#C2410C", // Warm terracotta / bronze
      buttonHover: "#9A3412",
      light: "#FFEDD5",
      glow: "rgba(194, 65, 12, 0.4)",
      bgWash: "#FFFBF7",
      hueRotate: "25deg",
      saturation: "1.15",
    },
    metrics: [
      { label: "Sanskrit Meaning", value: "The Grounded Earth" },
      { label: "Parameters", value: "32 Billion" },
      { label: "Context Window", value: "128k" },
      { label: "License", value: "Apache 2.0" },
    ],
    highlights: [
      {
        title: "Native 4K Document & Image Attention",
        desc: "Ingests dense financial tables, schematics, and high-DPI scans with zero downsampling artifacts.",
      },
      {
        title: "3D Spatial Geometry & Robotics Grounding",
        desc: "Trained with physical spatial datasets to understand coordinate transformations and depth cues.",
      },
      {
        title: "Compact 16GB Single-GPU Footprint",
        desc: "Easily hosted on a single RTX 4090 or Apple M-series Max chip for confidential local document processing.",
      },
    ],
    primaryCta: { label: "Download Prithvi (32B)", action: "download" },
    secondaryCta: { label: "Model Specs", action: "arch" },
  },

  "csky-soma": {
    id: "csky-soma",
    category: "model",
    name: "Soma",
    tagline: "14B Distilled Mathematical Nectar for Formal Theorem Proving",
    description:
      "Soma (सोम) embodies the celestial nectar of concentrated intellect. Distilled exclusively for formal mathematical proofs, Lean 4 theorem synthesis, and Olympiad-level multi-step deductive derivations.",
    badge: "Formal Logic & Math (14B)",
    colorScheme: {
      primary: "#4F46E5", // Celestial indigo
      buttonHover: "#4338CA",
      light: "#EEF2FF",
      glow: "rgba(79, 70, 229, 0.4)",
      bgWash: "#F8F9FF",
      hueRotate: "245deg",
      saturation: "1.2",
    },
    metrics: [
      { label: "Sanskrit Meaning", value: "The Celestial Nectar" },
      { label: "Parameters", value: "14 Billion" },
      { label: "Context Window", value: "128k" },
      { label: "License", value: "Apache 2.0" },
    ],
    highlights: [
      {
        title: "Native Lean 4 & Coq Theorem Prover",
        desc: "Direct integration with formal proof environments to verify mathematics line-by-line with zero hallucination.",
      },
      {
        title: "96%+ on MATH-500 Benchmarks",
        desc: "Outperforms 70B generalist models on competitive formal deduction benchmarks via targeted distillation.",
      },
      {
        title: "Ultra-Lightweight Distilled Efficiency",
        desc: "Runs smoothly on laptop CPU/GPUs in GGUF Q4_K_M quantization at 8GB RAM footprint.",
      },
    ],
    primaryCta: { label: "Download Soma (14B)", action: "download" },
    secondaryCta: { label: "Lean 4 Guide", action: "lean" },
  },

  // SOFTWARE
  "csky-ide": {
    id: "csky-ide",
    category: "software",
    name: "CSky IDE",
    tagline: "The Agentic Workspace for Deep Technical Thinking",
    description:
      "An intelligent, distraction-free desktop environment engineered from the ground up for software architects, researchers, and systems engineers. Built-in neural context engines and autonomous subagent execution.",
    badge: "Next-Gen Developer Studio",
    colorScheme: {
      primary: "#6366F1", // Soft Indigo
      buttonHover: "#4F46E5",
      light: "#E0E7FF",
      glow: "rgba(99, 102, 241, 0.4)",
      bgWash: "#EEF2FF",
      hueRotate: "60deg", // Blue -> Soft Purple / Indigo
      saturation: "1.2",
    },
    metrics: [
      { label: "Supported Platforms", value: "macOS, Linux, Win" },
      { label: "Engine", value: "Native Rust Core" },
      { label: "Subagent Runtime", value: "Sandboxed Wasm" },
      { label: "Latency", value: "< 12ms UI Response" },
    ],
    highlights: [
      {
        title: "Context-Aware Neural Index",
        desc: "Continuously embeds your entire repository, dependency graph, and git history into real-time working memory.",
      },
      {
        title: "Autonomous Multi-Agent Swarms",
        desc: "Spawn specialized subagents for testing, code refactoring, and documentation while you maintain creative flow.",
      },
      {
        title: "Privacy First & Local Inference",
        desc: "Toggle between hosted CSky API or 100% private local inference powered by Vayu or Drishti.",
      },
    ],
    primaryCta: { label: "Download for Desktop", action: "download" },
    secondaryCta: { label: "Read IDE Guide", action: "guide" },
    codeSnippet: {
      language: "bash",
      code: "# Install CSky IDE via CLI\nbrew install --cask csky-ide",
    },
  },

  "csky-cli": {
    id: "csky-cli",
    category: "software",
    name: "CSky CLI",
    tagline: "Harness Open-Weight Intelligence Directly From Your Shell",
    description:
      "A lightning-fast command-line interface to stream completions, query structured datasets, execute piped terminal automation, and manage local model weights.",
    badge: "Developer CLI & Terminal Tool",
    colorScheme: {
      primary: "#0284C7", // Soft Cyan Sky
      buttonHover: "#0369A1",
      light: "#E0F2FE",
      glow: "rgba(2, 132, 199, 0.4)",
      bgWash: "#F0F9FF",
      hueRotate: "-30deg", // Blue -> Soft Cyan
      saturation: "1.2",
    },
    metrics: [
      { label: "Binary Size", value: "14 MB" },
      { label: "Dependencies", value: "Zero (Static)" },
      { label: "Pipe Support", value: "POSIX Standard" },
      { label: "Speed", value: "Instant Native" },
    ],
    highlights: [
      {
        title: "Pipes & Unix Philosophy",
        desc: "Pipe standard input straight into CSky: `git diff | csky review` or `cat logs.txt | csky find-anomaly`.",
      },
      {
        title: "Weight Manager",
        desc: "Pull, quantize, and verify SHA-256 signatures of Akash, Drishti, and Vayu weights with single-word commands.",
      },
      {
        title: "Headless CI/CD Integration",
        desc: "Incorporate automated code auditing into GitHub Actions and GitLab pipelines in under 3 lines of YAML.",
      },
    ],
    primaryCta: { label: "Install CSky CLI", action: "install" },
    secondaryCta: { label: "CLI Reference", action: "docs" },
    codeSnippet: {
      language: "bash",
      code: "curl -fsSL https://csky.ai/install.sh | sh",
    },
  },

  "csky-app": {
    id: "csky-app",
    category: "software",
    name: "CSky App",
    tagline: "The Modern Interface for Clarified Collaboration",
    description:
      "A distraction-free web and desktop canvas for thinkers and teams. Organize research into structured artifacts, debate strategies, and visualize reasoning steps.",
    badge: "Web & Collaborative Client",
    colorScheme: {
      primary: "#3B82F6", // Soft Brand Blue
      buttonHover: "#2563EB",
      light: "#DBEAFE",
      glow: "rgba(59, 130, 246, 0.4)",
      bgWash: "#EFF6FF",
      hueRotate: "0deg", // Native Blue
      saturation: "1.1",
    },
    metrics: [
      { label: "Platforms", value: "Web, Mac, Windows" },
      { label: "Sync", value: "End-to-End Encrypted" },
      { label: "Export", value: "Markdown, LaTeX, PDF" },
      { label: "Collaboration", value: "Real-time" },
    ],
    highlights: [
      {
        title: "Dynamic Artifacts",
        desc: "Move beyond ephemeral chat logs. Generate living documents, interactive diagrams, and versioned code files.",
      },
      {
        title: "Team Workspaces",
        desc: "Share knowledge bases, models, and custom prompts securely across your entire organization.",
      },
      {
        title: "Keyboard-First Precision",
        desc: "Command palette and intuitive shortcuts designed to keep your hands on the keyboard and out of nested menus.",
      },
    ],
    primaryCta: { label: "Launch Web App", action: "launch" },
    secondaryCta: { label: "Desktop Download", action: "download" },
    codeSnippet: {
      language: "bash",
      code: "# Open in browser instantly or download desktop binary\nopen https://app.csky.ai",
    },
  },

  "csky-extensions": {
    id: "csky-extensions",
    category: "software",
    name: "CSky Extensions",
    tagline: "Bring CSky Intelligence Into the Tools You Already Love",
    description:
      "Native integrations for VS Code, JetBrains IDEs, Chrome, Raycast, and Obsidian. Seamless assistance right where your daily work lives.",
    badge: "Ecosystem & Plugins",
    colorScheme: {
      primary: "#8B5CF6", // Soft Violet
      buttonHover: "#7C3AED",
      light: "#EDE9FE",
      glow: "rgba(139, 92, 246, 0.4)",
      bgWash: "#F5F3FF",
      hueRotate: "80deg", // Blue -> Soft Violet
      saturation: "1.2",
    },
    metrics: [
      { label: "VS Code", value: "Marketplace Verified" },
      { label: "JetBrains", value: "All IDEs Supported" },
      { label: "Chrome / Web", value: "Manifest v3 Native" },
      { label: "Raycast", value: "Official Extension" },
    ],
    highlights: [
      {
        title: "Inline Code Ghost-Text",
        desc: "Contextually accurate multi-line completions tuned on high-reputation open-source codebases.",
      },
      {
        title: "Omni-Present Quick Chat",
        desc: "Summon a floating dialogue via Cmd+Shift+K to summarize docs or generate test cases anywhere.",
      },
      {
        title: "Obsidian Second Brain",
        desc: "Query your entire personal markdown vault with private embeddings stored locally on your machine.",
      },
    ],
    primaryCta: { label: "Install for VS Code", action: "vscode" },
    secondaryCta: { label: "Browse Marketplace", action: "all" },
    codeSnippet: {
      language: "bash",
      code: "code --install-extension csky.csky-ai-assistant",
    },
  },

  "csky-sdk": {
    id: "csky-sdk",
    category: "software",
    name: "CSky SDK",
    tagline: "Type-Safe Client Libraries for Python and TypeScript",
    description:
      "Enterprise-grade SDKs with built-in streaming handlers, automatic retries, exponential backoff, rate-limit budgeting, and native type definitions.",
    badge: "Developer SDK & API",
    colorScheme: {
      primary: "#F43F5E", // Soft Rose Coral
      buttonHover: "#E11D48",
      light: "#FFE4E6",
      glow: "rgba(244, 63, 94, 0.4)",
      bgWash: "#FFF1F2",
      hueRotate: "135deg", // Blue -> Coral Rose
      saturation: "1.2",
    },
    metrics: [
      { label: "Languages", value: "Python, TS, Go, Rust" },
      { label: "Protocol", value: "HTTP/2 + SSE Streaming" },
      { label: "Type Safety", value: "100% Strict" },
      { label: "Runtime", value: "Node, Bun, Deno, PyPy" },
    ],
    highlights: [
      {
        title: "Idiomatic Async Clients",
        desc: "Native async/await generators for seamless streaming responses into UI components and websockets.",
      },
      {
        title: "Zero-Boilerplate Structured Output",
        desc: "Pass Pydantic models or Zod schemas to guarantee strictly typed JSON responses from Akash, Drishti, and Vayu.",
      },
      {
        title: "Automatic Distributed Failover",
        desc: "Automatic failover between self-hosted vLLM clusters and hosted CSky fallback endpoints.",
      },
    ],
    primaryCta: { label: "Install via npm / pip", action: "install" },
    secondaryCta: { label: "SDK Documentation", action: "docs" },
    codeSnippet: {
      language: "bash",
      code: "pip install csky-ai  # or: npm install @csky/sdk",
    },
  },

  "vayu-engine": {
    id: "vayu-engine",
    category: "software",
    name: "CSky Vayu Core",
    tagline: "High-Throughput Local Edge Inference Engine & OpenAI Gateway",
    description:
      "CSky Vayu Core (वायु) is an ultra-fast local inference server engineered for edge machines, laptops, and sovereign cloud clusters. Features native OpenAI-compatible HTTP/SSE streaming, FP8 and 4-bit quantization kernels, dynamic KV-cache memory tracking, and sub-15ms cold start times.",
    badge: "Edge Inference Runtime",
    colorScheme: {
      primary: "#059669", // Mint Sage
      buttonHover: "#047857",
      light: "#D1FAE5",
      glow: "rgba(5, 150, 105, 0.4)",
      bgWash: "#F0FDF4",
      hueRotate: "285deg",
      saturation: "1.25",
    },
    metrics: [
      { label: "API Protocol", value: "OpenAI v1 Compatible" },
      { label: "TTFT Latency", value: "< 14 ms" },
      { label: "Quantization", value: "FP8, Q4_K_M, INT8" },
      { label: "Streaming", value: "Zero-Lag SSE" },
    ],
    highlights: [
      {
        title: "Drop-in OpenAI API Replacement",
        desc: "Point existing OpenAI SDK clients or LangChain pipelines to http://localhost:8000/v1 with zero code modifications.",
      },
      {
        title: "Vedic Celestial Model Support",
        desc: "Native out-of-the-box support for Akash 405B, Drishti 70B, Agni 120B, Prithvi 32B, Soma 14B, and Vayu 8B.",
      },
      {
        title: "Dynamic KV Cache & VRAM Profiling",
        desc: "Real-time telemetry measuring GPU/CPU memory allocation, active token generation throughput, and KV cache efficiency.",
      },
    ],
    primaryCta: { label: "Launch Vayu Engine", action: "launch" },
    secondaryCta: { label: "API Specification", action: "docs" },
    codeSnippet: {
      language: "bash",
      code: "python -m vayu_engine.cli serve --host 127.0.0.1 --port 8000 --model csky/vayu-8b",
    },
  },

  "drishti-guard": {
    id: "drishti-guard",
    category: "software",
    name: "CSky Drishti Guard",
    tagline: "Enterprise AI Safety, Hallucination Auditing & Prompt-Injection Firewall",
    description:
      "CSky Drishti Guard (दृष्टि) delivers production-grade security and reliability for generative AI. Operates as an intelligent reverse proxy that intercepts malicious prompt injections, masks sensitive PII (emails, cards, SSNs, API keys), and verifies factual consistency before tokens reach the user.",
    badge: "Enterprise AI Safety & Firewall",
    colorScheme: {
      primary: "#D97706", // Warm Golden Amber
      buttonHover: "#B45309",
      light: "#FEF3C7",
      glow: "rgba(217, 119, 6, 0.4)",
      bgWash: "#FEFCE8",
      hueRotate: "195deg",
      saturation: "1.3",
    },
    metrics: [
      { label: "Jailbreak Accuracy", value: "99.4%" },
      { label: "PII Latency", value: "< 2.8 ms" },
      { label: "Architecture", value: "Transparent Proxy" },
      { label: "Factual Verifier", value: "Semantic Claim Graph" },
    ],
    highlights: [
      {
        title: "Inbound Attack Firewall",
        desc: "Defends against DAN exploits, delimiter bypasses, indirect prompt injections, and base64 encoded exfiltration attacks.",
      },
      {
        title: "Reversible PII Anonymization",
        desc: "Replaces sensitive data with cryptographic session tokens before LLM inference, flawlessly restoring original values on return.",
      },
      {
        title: "Real-Time Factuality Scoring",
        desc: "Deconstructs generated sentences into atomic factual claims and measures groundedness against reference documents.",
      },
    ],
    primaryCta: { label: "Deploy Drishti Guard", action: "deploy" },
    secondaryCta: { label: "Safety Docs", action: "docs" },
    codeSnippet: {
      language: "bash",
      code: "python -m drishti_guard.cli serve --port 8080 --upstream-url http://127.0.0.1:8000",
    },
  },

  "agni-swarm": {
    id: "agni-swarm",
    category: "software",
    name: "CSky Agni Swarm",
    tagline: "Autonomous Multi-Agent DAG Orchestrator & Tool Sandbox",
    description:
      "CSky Agni Swarm (अग्नि) orchestrates cooperative multi-agent networks to solve enterprise engineering workflows. Uses directed acyclic graph (DAG) task scheduling, parallel execution queues, sandboxed tool runtimes, and persistent SQLite checkpointing.",
    badge: "Multi-Agent DAG Engine",
    colorScheme: {
      primary: "#EA580C", // Vibrant Solar Flame
      buttonHover: "#C2410C",
      light: "#FFEDD5",
      glow: "rgba(234, 88, 12, 0.4)",
      bgWash: "#FFF7ED",
      hueRotate: "35deg",
      saturation: "1.2",
    },
    metrics: [
      { label: "Topology", value: "Topological DAG" },
      { label: "Concurrency", value: "Asyncio Parallel" },
      { label: "Sandbox", value: "Conconfined Subprocess" },
      { label: "State Store", value: "SQLite + JSON" },
    ],
    highlights: [
      {
        title: "Specialized Role Swarms",
        desc: "Built-in roles for System Architects, Algorithmic Coders, Unit Testers, and Security Auditors cooperating autonomously.",
      },
      {
        title: "Path-Conconfined Tool Execution",
        desc: "Agents execute filesystem operations, Python scripts, and API queries within isolated, cryptographically bounded sandboxes.",
      },
      {
        title: "Full Execution Tracing & Replay",
        desc: "Step-by-step telemetry captures all agent messages, tool inputs/outputs, and decision trees for complete human auditability.",
      },
    ],
    primaryCta: { label: "Run Agni Swarm", action: "run" },
    secondaryCta: { label: "Swarm Documentation", action: "docs" },
    codeSnippet: {
      language: "bash",
      code: "python -m agni_swarm.cli run --workflow software-pipeline --goal \"Build high-speed cache\"",
    },
  },

  "akash-auditor": {
    id: "akash-auditor",
    category: "software",
    name: "CSky Akash Auditor",
    tagline: "Frontier AST Code Security Review & Automated Patch Synthesis",
    description:
      "CSky Akash Auditor (आकाश) brings the deductive reasoning of our flagship model to static code analysis. Inspects Abstract Syntax Trees (ASTs) across Python, JavaScript, and Docker to detect vulnerabilities, generating verifiable unified diff patches automatically.",
    badge: "AST Code Security Engine",
    colorScheme: {
      primary: "#E11D48", // Celestial Rose
      buttonHover: "#BE123C",
      light: "#FFE4E6",
      glow: "rgba(225, 29, 72, 0.4)",
      bgWash: "#FFF1F2",
      hueRotate: "145deg",
      saturation: "1.25",
    },
    metrics: [
      { label: "Analysis Engine", value: "AST Visitor Trees" },
      { label: "Standard Output", value: "OASIS SARIF v2.1.0" },
      { label: "Remediation", value: "Automated Unidiff" },
      { label: "Languages", value: "Python, TS, Docker" },
    ],
    highlights: [
      {
        title: "Deterministic Taint & AST Analysis",
        desc: "Discovers SQL injection, command execution risks, hardcoded tokens, insecure deserialization, and dangerous crypto.",
      },
      {
        title: "Automated Git Patch Generation",
        desc: "Synthesizes surgical, compilable unified diff patches that can be reviewed and applied immediately with git apply.",
      },
      {
        title: "GitHub Advanced Security Native",
        desc: "Outputs SARIF 2.1.0 JSON reports that seamlessly integrate with GitHub PR security checks and CI/CD pipelines.",
      },
    ],
    primaryCta: { label: "Scan Codebase", action: "scan" },
    secondaryCta: { label: "SARIF Reference", action: "docs" },
    codeSnippet: {
      language: "bash",
      code: "python -m akash_auditor.cli scan ./src --format sarif --output audit.sarif",
    },
  },

  "prithvi-docsense": {
    id: "prithvi-docsense",
    category: "software",
    name: "CSky Prithvi DocSense",
    tagline: "Multimodal Document Intelligence & Spatial Vision Extraction",
    description:
      "CSky Prithvi DocSense (पृथ्वी) extracts structured intelligence from complex, messy multi-page PDFs, invoices, blueprints, and scanned tables. Maps 2D spatial layouts, computes bounding coordinates, and outputs clean hierarchical JSON and Markdown tables.",
    badge: "Multimodal Document Vision",
    colorScheme: {
      primary: "#C2410C", // Terracotta Bronze
      buttonHover: "#9A3412",
      light: "#FFEDD5",
      glow: "rgba(194, 65, 12, 0.4)",
      bgWash: "#FFFBF7",
      hueRotate: "25deg",
      saturation: "1.15",
    },
    metrics: [
      { label: "Input Formats", value: "PDF, PNG, JPEG, TIFF" },
      { label: "Spatial Output", value: "2D Bounding Boxes" },
      { label: "Table Fidelity", value: "100% Cell Alignment" },
      { label: "Extraction Schema", value: "Invoice & Tabular JSON" },
    ],
    highlights: [
      {
        title: "Spatial Geometry & Layout Parsing",
        desc: "Detects headers, multi-column articles, footnotes, signature lines, and official stamps without downsampling.",
      },
      {
        title: "High-Fidelity Table Extraction",
        desc: "Transforms borderless financial tables and dense spreadsheets into structured JSON arrays and pristine Markdown tables.",
      },
      {
        title: "Automated Invoice & Receipt Parsing",
        desc: "Extracts invoice IDs, vendor info, line items, tax subtotals, and total amounts with spatial bounding box proofs.",
      },
    ],
    primaryCta: { label: "Parse Document", action: "parse" },
    secondaryCta: { label: "Model Specs", action: "docs" },
    codeSnippet: {
      language: "bash",
      code: "python -m prithvi_docsense.cli parse-invoice invoice.pdf --format json",
    },
  },

  "soma-eval": {
    id: "soma-eval",
    category: "software",
    name: "CSky Soma Eval",
    tagline: "Formal LLM Regression & Mathematical Benchmark Suite",
    description:
      "CSky Soma Eval (सोम) enforces mathematical rigor on AI model deployments. Evaluates RAG groundedness, hallucination rates, semantic answer relevance, mathematical reasoning validity, and generates standalone interactive HTML reports with radar metrics.",
    badge: "Formal AI Benchmark Suite",
    colorScheme: {
      primary: "#4F46E5", // Celestial Indigo
      buttonHover: "#4338CA",
      light: "#EEF2FF",
      glow: "rgba(79, 70, 229, 0.4)",
      bgWash: "#F8F9FF",
      hueRotate: "245deg",
      saturation: "1.2",
    },
    metrics: [
      { label: "Core Metrics", value: "Faithfulness & Math Rigor" },
      { label: "Latency Tracking", value: "TTFT, p50, p95, p99" },
      { label: "Visual Reporting", value: "Interactive HTML Radar" },
      { label: "CI/CD Gate", value: "Configurable Exit Codes" },
    ],
    highlights: [
      {
        title: "RAG Faithfulness & Groundedness",
        desc: "Measures claim adherence against reference context, alerting teams whenever hallucination scores exceed safe thresholds.",
      },
      {
        title: "Mathematical Deduction Verification",
        desc: "Verifies Olympiad-level math derivations, symbolic expressions, and Lean 4 formal deduction steps.",
      },
      {
        title: "Publication-Quality HTML Reports",
        desc: "Generates self-contained interactive visual dashboards with SVG radar charts, latency distributions, and cost estimations.",
      },
    ],
    primaryCta: { label: "Run Benchmark", action: "run" },
    secondaryCta: { label: "Metric Guidelines", action: "docs" },
    codeSnippet: {
      language: "bash",
      code: "python -m soma_eval.cli run --dataset rag --output-html report.html",
    },
  },

  "csky-hub": {
    id: "csky-hub",
    category: "software",
    name: "CSky Hub & Studio",
    tagline: "The Unified Mission Control for All CSky AI Engines",
    description:
      "The comprehensive developer portal and real-time interactive studio uniting all 8 CSky products. Test inference, inspect guardrails, design agent swarms, review AST security scans, parse documents, and run benchmark evaluations from one beautiful interface.",
    badge: "Unified Ecosystem Console",
    colorScheme: {
      primary: "#3B82F6", // Brand Sky Blue
      buttonHover: "#2563EB",
      light: "#DBEAFE",
      glow: "rgba(59, 130, 246, 0.4)",
      bgWash: "#EFF6FF",
      hueRotate: "0deg",
      saturation: "1.1",
    },
    metrics: [
      { label: "Playgrounds", value: "8 Live Interactive Studios" },
      { label: "Telemetry", value: "Real-Time Cluster Health" },
      { label: "Design System", value: "Vedic Fluted Glass UI" },
      { label: "Stack", value: "Next.js 16 + React 19" },
    ],
    highlights: [
      {
        title: "Live Interactive Playgrounds",
        desc: "Direct browser-based playgrounds to test streaming completions, test prompt injection attacks, run multi-agent swarms, and audit code.",
      },
      {
        title: "Unified Cluster Health Monitor",
        desc: "Real-time telemetry showing uptime, port bindings, active connections, and latency profiles across all CSky services.",
      },
      {
        title: "Vedic Geometry & Optical Depth",
        desc: "Exquisite architectural styling featuring fluted glass cards, celestial accent colors, and authentic sacred geometry watermarks.",
      },
    ],
    primaryCta: { label: "Open CSky Studio", action: "launch" },
    secondaryCta: { label: "Cluster Telemetry", action: "telemetry" },
    codeSnippet: {
      language: "bash",
      code: "npm --prefix csky-hub run dev  # Opens at http://localhost:3000",
    },
  },
};
