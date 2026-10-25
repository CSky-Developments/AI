"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import {
  DrishtiSymbol,
  AkashSymbol,
  AgniSymbol,
  PrithviSymbol,
} from "@/components/TraditionalSymbols";

export function InteractiveCodeSection({ onGetStarted }: { onGetStarted?: () => void }) {
  const [activeLang, setActiveLang] = useState<"python" | "javascript" | "curl">("python");
  const [copied, setCopied] = useState(false);

  const snippets = {
    python: `import csky

# Connect to sovereign local runtime or private cluster
client = csky.Client(
    api_key="csky_live_sovereign_key",
    base_url="https://api.csky.ai/v1"
)

# Stream verified multi-step reasoning from Akash 405B
response = client.reasoning.stream(
    model="csky/akash-405b",
    prompt="Audit distributed consensus algorithm for Byzantine bounds",
    verify_proofs=True,
    language="hi-IN"  # Automatic 22 Indic languages support
)

for step in response:
    print(f"[{step.proof_status}] {step.rationale}")`,

    javascript: `import { CSkyClient } from "@csky/ai";

// Initialize client with sovereign on-premise endpoint
const client = new CSkyClient({
  apiKey: process.env.CSKY_API_KEY,
  endpoint: "https://api.csky.ai/v1",
});

// Stream token rationale with zero data retention
const stream = await client.reasoning.stream({
  model: "csky/akash-405b",
  prompt: "Verify Byzantine consensus tolerances under 33% partitions",
  verifyProofs: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.token);
}`,

    curl: `curl https://api.csky.ai/v1/reasoning \\
  -H "Authorization: Bearer $CSKY_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "csky/akash-405b",
    "prompt": "Verify Byzantine consensus tolerances under 33% partitions",
    "verify_proofs": true,
    "stream": true
  }'`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 md:py-32 bg-[#F8FAFE] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive IDE Showcase Card (Matches Reference Screenshot 2026-10-25 111339.png) */}
          <div className="lg:col-span-6">
            <FadeIn>
              <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-[#E8EDF2] shadow-sm hover:shadow-lg transition-all">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#0F1B2D] tracking-tight leading-tight">
                  Add <span className="text-[#2563eb]">Sovereign AI</span> to your stack in minutes
                </h2>

                {/* Multi-Tab Code Header */}
                <div className="mt-8 rounded-2xl bg-[#0F1B2D] overflow-hidden shadow-inner">
                  <div className="flex items-center justify-between px-4 py-3 bg-[#17253D] border-b border-white/10">
                    <div className="flex items-center gap-2">
                      {(["python", "javascript", "curl"] as const).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setActiveLang(lang)}
                          className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                            activeLang === lang
                              ? "bg-white/15 text-white shadow-xs"
                              : "text-[#94A3B8] hover:text-white"
                          }`}
                        >
                          {lang === "python" ? "Python" : lang === "javascript" ? "JavaScript" : "cURL"}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>{copied ? "✓ Copied" : "Copy"}</span>
                    </button>
                  </div>

                  {/* Code Body */}
                  <div className="p-5 font-mono text-xs sm:text-sm text-[#E2E8F0] overflow-x-auto leading-relaxed">
                    <pre className="whitespace-pre">
                      <code>{snippets[activeLang]}</code>
                    </pre>
                  </div>
                </div>

                {/* Dark Pill CTA */}
                <button
                  onClick={onGetStarted}
                  className="mt-6 w-full py-4 rounded-full bg-[#0F1B2D] hover:bg-black text-white font-body font-medium text-sm sm:text-base transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  Get your API key &amp; get started
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: 2x2 Feature Matrix & 3 SDK Pills (Matches Reference Screenshot 2026-10-25 111339.png) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Feature 1 */}
              <FadeIn delay={80}>
                <div className="bg-white rounded-[28px] p-6 border border-[#E8EDF2] shadow-2xs hover:shadow-md transition-all relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#DDD6FE]/60 via-[#EDE9FE]/30 to-transparent rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-4">
                    <DrishtiSymbol size={22} color="#4F46E5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0F1B2D]">
                    Formal Proof Deduction
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                    Lean 4 verifiable theorem checking across complex mathematical and algorithmic statements.
                  </p>
                </div>
              </FadeIn>

              {/* Feature 2 */}
              <FadeIn delay={140}>
                <div className="bg-white rounded-[28px] p-6 border border-[#E8EDF2] shadow-2xs hover:shadow-md transition-all relative overflow-hidden group">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] flex items-center justify-center mb-4">
                    <AkashSymbol size={22} color="#EA580C" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0F1B2D]">
                    Multi-Agent Mesh
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                    Goal-directed agent swarms with isolated tool execution and formal consensus checks.
                  </p>
                </div>
              </FadeIn>

              {/* Feature 3 */}
              <FadeIn delay={200}>
                <div className="bg-white rounded-[28px] p-6 border border-[#E8EDF2] shadow-2xs hover:shadow-md transition-all relative overflow-hidden group">
                  <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] flex items-center justify-center mb-4">
                    <AgniSymbol size={22} color="#059669" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0F1B2D]">
                    22 Indic Languages
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                    Native multilingual semantics trained on sovereign linguistic cultural datasets without translation drift.
                  </p>
                </div>
              </FadeIn>

              {/* Feature 4 */}
              <FadeIn delay={260}>
                <div className="bg-white rounded-[28px] p-6 border border-[#E8EDF2] shadow-2xs hover:shadow-md transition-all relative overflow-hidden group">
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center mb-4">
                    <PrithviSymbol size={22} color="#2563eb" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0F1B2D]">
                    Air-Gapped Deployment
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                    Host entire model weights on your private VPC or on-premise hardware with zero outbound telemetry.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Bottom 3 Mini SDK Integration Pills (Matches Reference Screenshot 2026-10-25 111339.png) */}
            <FadeIn delay={320}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-4 border border-[#E8EDF2] text-left">
                  <div className="font-heading font-bold text-sm text-[#0F1B2D]">REST API</div>
                  <p className="font-body text-xs text-[#64748B] mt-1 leading-snug">
                    Clean, well-documented OpenAPI 3.1 endpoints
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-[#E8EDF2] text-left">
                  <div className="font-heading font-bold text-sm text-[#0F1B2D]">Python SDK</div>
                  <p className="font-body text-xs text-[#64748B] mt-1 leading-snug">
                    One line to install <code className="font-mono text-[#2563eb]">pip install csky</code>
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-[#E8EDF2] text-left">
                  <div className="font-heading font-bold text-sm text-[#0F1B2D]">Playground</div>
                  <p className="font-body text-xs text-[#64748B] mt-1 leading-snug">
                    Test weights in browser, zero local setup
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
