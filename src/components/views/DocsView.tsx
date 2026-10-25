"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedBarsBackground } from "@/components/AnimatedBarsBackground";
import { PageBackgroundSymbols } from "@/components/PageBackgroundSymbols";
import {
  AkashSymbol,
  AgniSymbol,
  DrishtiSymbol,
  PrithviSymbol,
  SomaSymbol,
  VayuSymbol,
} from "@/components/TraditionalSymbols";

interface DocsViewProps {
  onNavigate: (tab: string) => void;
}

export function DocsView({ onNavigate }: DocsViewProps) {
  const [activeLang, setActiveLang] = useState<string>("python");
  const [copiedCode, setCopiedCode] = useState(false);

  const SNIPPETS: Record<string, { title: string; filename: string; code: string }> = {
    python: {
      title: "Python SDK (csky-py)",
      filename: "deduce.py",
      code: `import csky

# Initialize client (works with hosted endpoint or local vLLM cluster)
client = csky.Client(
    api_key="csky_live_sovereign_key",
    base_url="https://api.csky.ai/v1" # Or local: "http://localhost:8000/v1"
)

# Stream step-by-step reasoning proof from Akash 405B
response = client.reasoning.create(
    model="csky-akash-405b",
    messages=[
        {"role": "user", "content": "Prove that the sum of the first n odd integers equals n^2."}
    ],
    temperature=0.0,
    stream=True,
    verify_proof=True,
    language="hi-IN" # Native Indic multilingual support
)

for chunk in response:
    if chunk.reasoning_step:
        print(f"[Step {chunk.reasoning_step.index}] {chunk.reasoning_step.proof}")
    elif chunk.delta.content:
        print(chunk.delta.content, end="", flush=True)`,
    },
    typescript: {
      title: "TypeScript / Node.js SDK",
      filename: "infer.ts",
      code: `import { CSkyAI } from "@csky/ai";

const csky = new CSkyAI({
  apiKey: process.env.CSKY_API_KEY,
  endpoint: "https://api.csky.ai/v1",
});

async function main() {
  const completion = await csky.chat.completions.create({
    model: "csky-drishti-70b",
    messages: [
      { role: "system", content: "You are an expert compiler engineer." },
      { role: "user", content: "Synthesize a zero-allocation concurrent ring buffer in Rust." }
    ],
    response_format: { type: "json_object" },
  });

  console.log(completion.choices[0].message.content);
}

main();`,
    },
    curl: {
      title: "cURL / REST API",
      filename: "request.sh",
      code: `curl https://api.csky.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $CSKY_API_KEY" \\
  -d '{
    "model": "csky-agni-120b",
    "messages": [
      {"role": "user", "content": "Audit this smart contract for reentrancy vulnerabilities."}
    ],
    "temperature": 0.1,
    "max_tokens": 4096
  }'`,
    },
    vllm: {
      title: "vLLM High-Throughput Cluster",
      filename: "launch-cluster.sh",
      code: `# Launch Akash 405B FP8 across 4x H100 GPUs with continuous batching
python3 -m vllm.entrypoints.openai.api_server \\
  --model csky/akash-405b-fp8 \\
  --tensor-parallel-size 4 \\
  --max-model-len 204800 \\
  --kv-cache-dtype fp8 \\
  --port 8000 \\
  --enforce-eager`,
    },
    ollama: {
      title: "Ollama Local Edge Execution",
      filename: "run-local.sh",
      code: `# Run Vayu 8B locally on an Apple Silicon Mac or RTX laptop
ollama run csky/vayu:8b

# Or run Soma 14B for formal math logic
ollama run csky/soma:14b-q8`,
    },
  };

  const currentSnippet = SNIPPETS[activeLang] || SNIPPETS.python;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const capabilities = [
    {
      title: "Sub-30ms Streaming",
      desc: "Optimized speculative kernels stream reasoning steps with immediate first-token response.",
      icon: <AkashSymbol size={22} color="#2563EB" />,
      color: "from-blue-500/10 to-transparent",
    },
    {
      title: "Guaranteed AST JSON",
      desc: "Compile-time Abstract Syntax Tree constraints enforce 100% valid schema adherence.",
      icon: <AgniSymbol size={22} color="#EA580C" />,
      color: "from-orange-500/10 to-transparent",
    },
    {
      title: "Autonomous Tool Calling",
      desc: "Pass OpenAPI specs and Python function signatures directly into model loops.",
      icon: <DrishtiSymbol size={22} color="#059669" />,
      color: "from-emerald-500/10 to-transparent",
    },
    {
      title: "Air-Gapped Deployment",
      desc: "Zero external dependencies. Host weights in sovereign, offline on-premise environments.",
      icon: <PrithviSymbol size={22} color="#4F46E5" />,
      color: "from-indigo-500/10 to-transparent",
    },
  ];

  return (
    <div className="bg-[#F8FAFE] min-h-screen relative overflow-hidden text-[#0F1B2D]">
      {/* Universal Page Background Sacred Geometry in Gray */}
      <PageBackgroundSymbols theme="docs" />

      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20">
        <AnimatedBarsBackground theme="access" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/75 backdrop-blur-md border border-[#E2E8F0] shadow-2xs mb-6 text-xs font-heading font-medium text-[#0284c7]">
            <span>✦</span>
            <span>॥ सूत्र मण्डल ॥ · Developer Documentation & SDKs</span>
            <span>✦</span>
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#0F1B2D] leading-[1.08]">
            Deploy open intelligence in three lines.
          </h1>

          <p className="font-body text-lg sm:text-xl text-[#334155] mt-5 max-w-2xl mx-auto leading-relaxed">
            Drop-in OpenAI SDK compatibility for hosted endpoints, or native single-command launch with vLLM, TensorRT-LLM, and Ollama.
          </p>
        </div>
      </section>

      {/* 2. INTERACTIVE CODE SHOWCASE & 2x2 MATRIX (From Reference Screenshot 2026-10-25 111339.png) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Code Box Card */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="card-premium group relative overflow-hidden bg-white rounded-[32px] p-6 sm:p-8 border border-[#E8EDF2] shadow-sm hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2 mb-6">
                  <h3 className="font-heading font-bold text-2xl text-[#0F1B2D]">
                    SDK &amp; Platform Quickstart
                  </h3>
                  <span className="font-mono text-xs text-[#2563eb] font-semibold">
                    {currentSnippet.filename}
                  </span>
                </div>

                {/* Dark Terminal Container */}
                <div className="rounded-2xl bg-[#0F1B2D] border border-[#334155]/60 overflow-hidden shadow-2xl">
                  {/* Top Bar */}
                  <div className="px-5 py-3.5 bg-[#17253D] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    </div>

                    {/* Language Switcher Tabs */}
                    <div className="flex flex-wrap items-center gap-1">
                      {Object.keys(SNIPPETS).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setActiveLang(lang)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-heading font-medium transition-colors cursor-pointer ${
                            activeLang === lang
                              ? "bg-[#2563eb] text-white shadow-xs"
                              : "text-white/60 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {lang === "python"
                            ? "Python"
                            : lang === "typescript"
                            ? "TypeScript"
                            : lang === "curl"
                            ? "cURL"
                            : lang === "vllm"
                            ? "vLLM"
                            : "Ollama"}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={handleCopy}
                      className="font-mono text-xs text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedCode ? "✓ Copied" : "Copy"}
                    </button>
                  </div>

                  {/* Code Body */}
                  <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm text-[#93c5fd] overflow-x-auto leading-relaxed max-h-[380px]">
                    <pre className="whitespace-pre">
                      <code>{currentSnippet.code}</code>
                    </pre>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[#64748B]">
                    pip install csky &middot; npm i @csky/ai
                  </div>
                  <button
                    data-magnetic
                    onClick={() => onNavigate("access")}
                    className="w-full sm:w-auto py-3 px-6 rounded-full bg-[#0F1B2D] hover:bg-black text-white font-body font-medium text-xs sm:text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Generate API Token →
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: 2x2 Capabilities Matrix + Mini Pills (From Reference Screenshot 111339.png) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap, idx) => (
                <FadeIn key={cap.title} delay={idx * 70}>
                  <div className="card-premium bg-white rounded-[24px] p-5 border border-[#E8EDF2] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                    <div
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${cap.color} rounded-bl-full pointer-events-none`}
                    />
                    <div className="w-9 h-9 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center mb-3">
                      {cap.icon}
                    </div>
                    <h4 className="font-heading font-bold text-sm text-[#0F1B2D]">
                      {cap.title}
                    </h4>
                    <p className="font-body text-xs text-[#64748B] mt-1.5 leading-snug">
                      {cap.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Bottom 3 Mini SDK Integration Pills (Reference 111339.png) */}
            <FadeIn delay={280}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="card-premium bg-white rounded-2xl p-3.5 border border-[#E8EDF2] text-left hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="font-heading font-bold text-xs text-[#0F1B2D]">OpenAPI 3.1</div>
                  <p className="font-body text-[11px] text-[#64748B] mt-0.5">Strict schema adherence</p>
                </div>
                <div className="card-premium bg-white rounded-2xl p-3.5 border border-[#E8EDF2] text-left hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="font-heading font-bold text-xs text-[#0F1B2D]">Python SDK</div>
                  <p className="font-body text-[11px] text-[#64748B] mt-0.5">Type-safe streaming client</p>
                </div>
                <div className="card-premium bg-white rounded-2xl p-3.5 border border-[#E8EDF2] text-left hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="font-heading font-bold text-xs text-[#0F1B2D]">vLLM Engine</div>
                  <p className="font-body text-[11px] text-[#64748B] mt-0.5">Continuous batching FP8</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. CORE REST ENDPOINT REFERENCE BENTO CARDS */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <FadeIn delay={100}>
          <div className="card-premium group relative overflow-hidden bg-white rounded-[32px] p-8 md:p-10 border border-[#E8EDF2] shadow-sm hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <span className="text-xs font-heading font-semibold text-[#0284c7] uppercase tracking-wider">
              API Reference
            </span>
            <h3 className="font-heading font-bold text-2xl text-[#0F1B2D] mt-2">
              Core REST endpoints
            </h3>

            <div className="mt-8 space-y-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-mono text-xs font-bold">
                    POST
                  </span>
                  <code className="font-mono text-xs sm:text-sm text-[#0F1B2D]">
                    /v1/chat/completions
                  </code>
                </div>
                <span className="text-xs font-body text-[#64748B]">
                  OpenAI-compatible chat &amp; reasoning token generation
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 font-mono text-xs font-bold">
                    GET
                  </span>
                  <code className="font-mono text-xs sm:text-sm text-[#0F1B2D]">
                    /v1/models
                  </code>
                </div>
                <span className="text-xs font-body text-[#64748B]">
                  Inspect loaded celestial models &amp; quantization state
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-purple-100 text-purple-800 font-mono text-xs font-bold">
                    POST
                  </span>
                  <code className="font-mono text-xs sm:text-sm text-[#0F1B2D]">
                    /v1/reasoning/verify
                  </code>
                </div>
                <span className="text-xs font-body text-[#64748B]">
                  Formal Lean 4 mathematical proof tree verification
                </span>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => onNavigate("access")}
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-body font-medium text-xs sm:text-sm rounded-full px-8 py-3.5 transition-colors shadow-md hover:shadow-lg cursor-pointer"
              >
                Create API Key &amp; Start Building →
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
