"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import {
  SangamYantraSymbol,
  DrishtiSymbol,
  KriyaChakraSymbol,
} from "@/components/TraditionalSymbols";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      sanskrit: "संगम · Connect",
      title: "Connect",
      description: "Link your existing tools, data lakes, and developer pipelines in minutes with zero friction.",
      icon: <SangamYantraSymbol size={26} color="#2563eb" />,
      codeTitle: "Step 1: Single-Line Installation & Client Init",
      codeSnippet: `# 1. Install CSky high-performance inference runtime
curl -fsSL https://csky.ai/install.sh | sh

# 2. Or initialize local Python client
import csky
client = csky.Client(base_url="http://localhost:8000/v1")
print("Connected to Sovereign Cluster: 6 Models Ready")`,
    },
    {
      num: "02",
      sanskrit: "अन्वेषण · Explore",
      title: "Explore",
      description: "Ask complex multi-domain questions. Get auditable mathematical proof trees, not opaque guesses.",
      icon: <DrishtiSymbol size={26} color="#2563eb" />,
      codeTitle: "Step 2: Stream Verified Multi-Step Proofs",
      codeSnippet: `# Query Akash 405B with formal theorem checking enabled
stream = client.reasoning.stream(
    model="akash-405b",
    prompt="Audit distributed consensus algorithm for split-brain vulnerabilities",
    verify_bounds=True
)
# Output: [Proof Node 01: Validated] [Proof Node 02: Consensus Bound Verified]`,
    },
    {
      num: "03",
      sanskrit: "क्रिया · Act",
      title: "Act",
      description: "Deploy verified models directly to production CI/CD, local edge devices, or air-gapped VPCs.",
      icon: <KriyaChakraSymbol size={26} color="#2563eb" />,
      codeTitle: "Step 3: Instant Production Deployment",
      codeSnippet: `# Export optimized FP8 tensor kernels for deployment
csky export --model drishti-70b --format vllm-fp8 --target ./deploy

# Status: Container image ready at csky-drishti:70b-fp8 (Sub-40ms TTFT)
# Serving endpoint live at: http://0.0.0.0:8000/v1`,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8FAFE] border border-[#E8EDF2] text-xs font-heading font-medium text-[#2563eb] mb-3 shadow-2xs">
            <span>✦</span>
            <span>॥ संगम &middot; अन्वेषण &middot; क्रिया ॥ · Continuous Pipeline</span>
            <span>✦</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#0F1B2D] tracking-tight">
            Three simple steps to sovereignty
          </h2>
          <p className="font-body text-sm sm:text-base text-[#64748B] mt-4 max-w-md mx-auto leading-relaxed">
            Move seamlessly from raw model checkpoints to verified production inference.
          </p>
        </div>

        {/* 3 Step Interactive Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <FadeIn key={step.num} delay={index * 120}>
                <div
                  onClick={() => setActiveStep(index)}
                  className={`card-premium group relative overflow-hidden rounded-3xl p-8 cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5 flex flex-col justify-between ${
                    isSelected
                      ? "border-2 border-[#2563eb] shadow-[0_16px_40px_rgba(37,99,235,0.18)] bg-white"
                      : "border border-[#E8EDF2] bg-white hover:border-blue-300 hover:shadow-[0_16px_40px_rgba(37,99,235,0.14)]"
                  }`}
                >
                  {/* Primary Vibrant Ambient Bloom */}
                  <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-blue-500 blur-3xl pointer-events-none transition-all duration-500 ease-out z-0 ${
                    isSelected ? "opacity-60 scale-110" : "opacity-25 group-hover:opacity-80 group-hover:scale-125"
                  }`} />
                  <div className={`absolute -top-20 left-1/4 w-40 h-32 rounded-full bg-sky-400 blur-3xl pointer-events-none transition-all duration-500 ease-out z-0 ${
                    isSelected ? "opacity-35" : "opacity-15 group-hover:opacity-45"
                  }`} />

                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#E8F0FE] flex items-center justify-center border border-[#E2E8F0] shadow-2xs group-hover:scale-105 transition-transform">
                        {step.icon}
                      </div>
                      <span
                        className={`font-mono text-xs font-bold px-2.5 py-1 rounded-full ${
                          isSelected
                            ? "bg-[#2563eb] text-white"
                            : "bg-[#F1F5F9] text-[#64748B]"
                        }`}
                      >
                        {step.num}
                      </span>
                    </div>

                    <div className="text-xs font-heading font-semibold text-[#2563eb] mt-6 tracking-wide">
                      {step.sanskrit}
                    </div>

                    <h3 className="font-heading text-xl font-bold mt-1 text-[#0F1B2D]">
                      {step.title}
                    </h3>

                    <p className="font-body text-[#5A6B7F] mt-3 leading-relaxed text-sm flex-1">
                      {step.description}
                    </p>

                    <div className="mt-6 flex items-center gap-1.5 text-xs font-heading font-semibold text-[#2563eb]">
                      <span>{isSelected ? "Active Pipeline Stage" : "Click to Inspect"}</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Interactive Live Pipeline Stage Terminal Inspector */}
        <FadeIn delay={150}>
          <div className="mt-10 bg-[#0F1B2D] rounded-3xl border border-[#334155]/60 overflow-hidden shadow-xl">
            <div className="px-6 py-3.5 bg-[#1E293B]/80 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                <span className="ml-3 font-mono text-xs text-white/60">
                  {steps[activeStep].codeTitle}
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#60a5fa] px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                Interactive Stage Inspector
              </span>
            </div>

            <div className="p-6 md:p-8 font-mono text-xs sm:text-sm text-[#93c5fd] leading-relaxed overflow-x-auto">
              <pre className="whitespace-pre">{steps[activeStep].codeSnippet}</pre>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
