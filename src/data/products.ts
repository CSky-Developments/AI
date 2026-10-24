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
};
