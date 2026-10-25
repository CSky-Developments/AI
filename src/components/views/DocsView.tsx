"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedBarsBackground } from "@/components/AnimatedBarsBackground";

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
    api_key="csky_live_***",  # Or local endpoint: base_url="http://localhost:8000/v1"
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
)

for chunk in response:
    if chunk.reasoning_step:
        print(f"\\n[Step {chunk.reasoning_step.index}] {chunk.reasoning_step.proof}")
    elif chunk.delta.content:
        print(chunk.delta.content, end="", flush=True)`,
    },
    typescript: {
      title: "TypeScript / Node.js SDK",
      filename: "infer.ts",
      code: `import { CSkyAI } from "@csky/ai";

const csky = new CSkyAI({
  apiKey: process.env.CSKY_API_KEY,
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
  -H "Authorization: Bearer csky_live_***" \\
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
    },
    {
      title: "Guaranteed JSON Grammars",
      desc: "Compile-time Abstract Syntax Tree constraints enforce 100% valid schema adherence.",
    },
    {
      title: "Autonomous Tool Calling",
      desc: "Pass OpenAPI specs and Python function signatures directly into model loops.",
    },
    {
      title: "Air-Gapped Local Deployment",
      desc: "Zero external dependencies. Host weights in sovereign, offline on-premise environments.",
    },
  ];

  return (
    <div className="bg-[#F8FAFE] min-h-screen text-[#0F1B2D]">
      {/* 1. HERO (Full viewport, content below fold) */}
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

      {/* 2. INTERACTIVE CODE PLAYGROUND */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <FadeIn delay={100}>
          <div className="bg-[#0F1B2D] rounded-3xl border border-[#334155]/60 overflow-hidden shadow-2xl">
            {/* Terminal Top Bar */}
            <div className="px-6 py-4 bg-[#1E293B]/70 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                <span className="ml-3 font-mono text-xs text-white/50">
                  {currentSnippet.filename}
                </span>
              </div>

              {/* Language Switcher Tabs */}
              <div className="flex flex-wrap items-center gap-1.5">
                {Object.keys(SNIPPETS).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-3 py-1 rounded-lg text-xs font-heading font-medium transition-colors cursor-pointer ${
                      activeLang === lang
                        ? "bg-[#2563eb] text-white"
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
            </div>

            {/* Code Body */}
            <div className="p-6 md:p-8 font-mono text-xs md:text-sm text-[#93c5fd] overflow-x-auto leading-relaxed">
              <pre className="whitespace-pre">{currentSnippet.code}</pre>
            </div>

            {/* Bottom Actions Bar */}
            <div className="px-6 py-4 bg-[#1E293B]/40 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-white/40">
                {currentSnippet.title}
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-body font-medium text-white transition-colors cursor-pointer"
              >
                {copiedCode ? (
                  <>
                    <span className="text-emerald-400">✓</span>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <span>📋</span>
                    <span>Copy Snippet</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. CAPABILITY CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <FadeIn key={cap.title} delay={idx * 80}>
              <div className="h-full bg-white rounded-3xl p-6 border border-[#E8EDF2] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563eb] flex items-center justify-center font-heading font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#0F1B2D]">
                  {cap.title}
                </h3>
                <p className="font-body text-xs md:text-sm text-[#64748B] mt-2 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. REST ENDPOINT REFERENCE TABLE */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <FadeIn delay={100}>
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#E8EDF2] shadow-sm">
            <span className="text-xs font-heading font-semibold text-[#0284c7] uppercase tracking-wider">
              API Reference
            </span>
            <h2 className="font-heading font-bold text-2xl text-[#0F1B2D] mt-2">
              Core REST endpoints
            </h2>

            <div className="mt-8 space-y-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-mono text-xs font-bold">
                    POST
                  </span>
                  <code className="font-mono text-xs sm:text-sm text-[#0F1B2D]">
                    /v1/chat/completions
                  </code>
                </div>
                <span className="text-xs font-body text-[#64748B]">
                  OpenAI-compatible chat & reasoning generation
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 font-mono text-xs font-bold">
                    GET
                  </span>
                  <code className="font-mono text-xs sm:text-sm text-[#0F1B2D]">
                    /v1/models
                  </code>
                </div>
                <span className="text-xs font-body text-[#64748B]">
                  Inspect loaded celestial models & quantization state
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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
                className="bg-[#2563eb] text-white font-body font-medium text-xs sm:text-sm rounded-full px-8 py-3 hover:bg-[#1d4ed8] transition-colors shadow-sm cursor-pointer"
              >
                Create API Key & Start Building →
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
