"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedBarsBackground } from "@/components/AnimatedBarsBackground";

interface PricingViewProps {
  onNavigate: (tab: string) => void;
}

export function PricingView({ onNavigate }: PricingViewProps) {
  const [tokenVolume, setTokenVolume] = useState<number>(50); // in millions
  const [selectedModel, setSelectedModel] = useState<string>("drishti");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Model rates per 1M tokens (in USD)
  const MODEL_RATES: Record<
    string,
    { name: string; params: string; input: number; output: number; competitor: string; competitorCost: number }
  > = {
    vayu: {
      name: "Vayu",
      params: "8B Edge",
      input: 0.08,
      output: 0.12,
      competitor: "Llama 3.1 8B (Hosted)",
      competitorCost: 0.25,
    },
    soma: {
      name: "Soma",
      params: "14B Math",
      input: 0.15,
      output: 0.25,
      competitor: "Qwen 2.5 14B",
      competitorCost: 0.45,
    },
    prithvi: {
      name: "Prithvi",
      params: "32B Multimodal",
      input: 0.25,
      output: 0.45,
      competitor: "Claude 3.5 Haiku",
      competitorCost: 0.95,
    },
    drishti: {
      name: "Drishti",
      params: "70B Production",
      input: 0.45,
      output: 0.75,
      competitor: "GPT-4o mini / Claude Sonnet",
      competitorCost: 1.85,
    },
    agni: {
      name: "Agni",
      params: "120B Code",
      input: 0.85,
      output: 1.40,
      competitor: "DeepSeek Coder / Claude 3.5",
      competitorCost: 3.20,
    },
    akash: {
      name: "Akash",
      params: "405B Flagship",
      input: 1.50,
      output: 2.50,
      competitor: "OpenAI GPT-4o / Claude Opus",
      competitorCost: 6.50,
    },
  };

  const currentRate = MODEL_RATES[selectedModel] || MODEL_RATES.drishti;
  const avgCostPerM = (currentRate.input + currentRate.output) / 2;
  const monthlyCost = Math.round(tokenVolume * avgCostPerM);
  const competitorMonthlyCost = Math.round(tokenVolume * currentRate.competitorCost);
  const savings = Math.max(0, competitorMonthlyCost - monthlyCost);
  const savingsPercent = Math.round((savings / competitorMonthlyCost) * 100);

  const faqs = [
    {
      q: "Can we really download and run these models completely free?",
      a: "Yes. All CSky foundation models (Akash 405B, Agni 120B, Drishti 70B, Prithvi 32B, Soma 14B, Vayu 8B) have their full FP8, BF16, and GGUF quantized weights released on the Hugging Face Hub under permissive Apache 2.0 or Open Research licenses. There are zero token gates, zero telemetry calls, and zero licensing fees for self-hosting.",
    },
    {
      q: "How does the CSky Managed Endpoint API guarantee privacy?",
      a: "Our hosted endpoints operate under a strict zero-retention policy. Inference requests pass through memory without disk logging or model retraining pipelines. For regulated banking and healthcare environments, we offer private VPC peering and dedicated isolated tenant nodes.",
    },
    {
      q: "What hardware is required to run the open weights locally?",
      a: "Vayu 8B runs effortlessly on an 8GB Apple Silicon Mac or RTX 3060. Drishti 70B runs comfortably on 2x RTX 4090s or a single 80GB A100/H100 in FP8. Flagship Akash 405B fits on 4x H100s in native 4-bit/FP8 quantization with zero precision degradation.",
    },
    {
      q: "Do you offer SLA-backed sovereign GPU clusters?",
      a: "Yes. Our Sovereign Compute tier reserves dedicated 8x H100 SXM5 / B200 clusters located in sovereign data center regions (India, EU, and US) with 99.99% network uptime SLAs, custom LoRA adapter caching, and 24/7 dedicated engineering support.",
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
            <span>॥ अर्थ मण्डल ॥ · Predictable Sovereign Compute</span>
            <span>✦</span>
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#0F1B2D] leading-[1.08]">
            Predictable, transparent intelligence pricing.
          </h1>

          <p className="font-body text-lg sm:text-xl text-[#334155] mt-5 max-w-2xl mx-auto leading-relaxed">
            Run open weights 100% free forever on your own infrastructure, or scale instantly on dedicated sovereign cloud endpoints.
          </p>
        </div>
      </section>

      {/* 2. THREE COMPREHENSIVE TIERS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Tier 1: Open Weights Self-Hosted */}
          <FadeIn delay={50}>
            <div className="card-premium group relative overflow-hidden h-full bg-white rounded-3xl p-8 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-emerald-500/10 blur-xl pointer-events-none group-hover:opacity-100 opacity-40 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-[#F1F5F9] text-[#475569] text-xs font-heading font-semibold mb-4">
                  Self-Hosted Sovereign
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#0F1B2D]">
                  Open Weights
                </h3>
                <p className="font-body text-xs text-[#64748B] mt-1.5">
                  Full control on your own hardware or VPC
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-heading font-bold text-4xl text-[#0F1B2D]">
                    $0
                  </span>
                  <span className="font-body text-xs text-[#64748B]">
                    / forever
                  </span>
                </div>

                <ul className="mt-8 space-y-3.5 text-xs font-body text-[#334155]">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Download full FP8, BF16 & GGUF weights</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Apache 2.0 & Open Research licenses</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Air-gapped 100% offline local execution</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Ollama, vLLM & TensorRT-LLM kernels</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Zero telemetry & zero data leakage</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <button
                  onClick={() => onNavigate("models")}
                  className="w-full bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F1B2D] font-body font-medium text-xs sm:text-sm rounded-full py-3 transition-colors cursor-pointer"
                >
                  Explore Models & Weights →
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Tier 2: Managed Serverless Endpoints (Highlighted) */}
          <FadeIn delay={120}>
            <div className="card-premium group relative overflow-hidden h-full bg-white rounded-3xl p-8 border-2 border-[#0284c7] shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-sky-500/15 blur-xl pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0284c7] text-white text-[10px] font-heading font-semibold uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-xs z-20">
                Most Popular
              </div>

              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284c7] text-xs font-heading font-semibold mb-4">
                  Pay-As-You-Go API
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#0F1B2D]">
                  Managed Endpoints
                </h3>
                <p className="font-body text-xs text-[#64748B] mt-1.5">
                  High-speed inference with sub-40ms latency
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-heading font-bold text-4xl text-[#0284c7]">
                    $0.45
                  </span>
                  <span className="font-body text-xs text-[#64748B]">
                    / 1M tokens (from)
                  </span>
                </div>

                <ul className="mt-8 space-y-3.5 text-xs font-body text-[#334155]">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] shrink-0" />
                    <span>Instant access to all 6 celestial models</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] shrink-0" />
                    <span>Drop-in OpenAI SDK API compatibility</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] shrink-0" />
                    <span>Zero Data Retention agreement</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] shrink-0" />
                    <span>140 tokens/sec high-throughput streaming</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] shrink-0" />
                    <span>$50 free starter development credits</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <button
                  onClick={() => onNavigate("access")}
                  className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-body font-medium text-xs sm:text-sm rounded-full py-3 transition-colors shadow-sm cursor-pointer"
                >
                  Get API Access Key →
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Tier 3: Dedicated Sovereign GPU Cluster */}
          <FadeIn delay={180}>
            <div className="card-premium group relative overflow-hidden h-full bg-white rounded-3xl p-8 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-indigo-500/10 blur-xl pointer-events-none group-hover:opacity-100 opacity-40 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-heading font-semibold mb-4">
                  Enterprise Sovereign
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#0F1B2D]">
                  Dedicated Cluster
                </h3>
                <p className="font-body text-xs text-[#64748B] mt-1.5">
                  Reserved 8x H100 / B200 GPU nodes in isolated VPC
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-heading font-bold text-4xl text-[#0F1B2D]">
                    Custom
                  </span>
                  <span className="font-body text-xs text-[#64748B]">
                    / reserved GPU
                  </span>
                </div>

                <ul className="mt-8 space-y-3.5 text-xs font-body text-[#334155]">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] shrink-0" />
                    <span>Dedicated unshared H100 SXM5 hardware</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] shrink-0" />
                    <span>Private VPC peering & air-gap routing</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] shrink-0" />
                    <span>Custom domain LoRA & continuous fine-tuning</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] shrink-0" />
                    <span>99.99% contractual uptime SLA</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] shrink-0" />
                    <span>Dedicated solutions engineering support</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <button
                  onClick={() => onNavigate("manifesto")}
                  className="w-full bg-[#0F1B2D] hover:bg-[#1E293B] text-white font-body font-medium text-xs sm:text-sm rounded-full py-3 transition-colors cursor-pointer"
                >
                  Contact Sovereign Enterprise →
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. INTERACTIVE TOKEN & COMPUTE SAVINGS CALCULATOR */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <FadeIn delay={100}>
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E8EDF2] shadow-sm">
            <div className="max-w-xl">
              <span className="text-xs font-heading font-semibold text-[#0284c7] uppercase tracking-wider">
                Compute Economics
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#0F1B2D] mt-2">
                Interactive token savings calculator
              </h2>
              <p className="font-body text-xs md:text-sm text-[#64748B] mt-2">
                Compare CSky open foundation model compute economics against closed proprietary cloud APIs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 items-center">
              {/* Left: Sliders & Selectors */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs font-body text-[#334155] mb-2 font-medium">
                    <span>Monthly Token Volume</span>
                    <span className="font-heading font-bold text-base text-[#0284c7]">
                      {tokenVolume} Million Tokens
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={tokenVolume}
                    onChange={(e) => setTokenVolume(Number(e.target.value))}
                    className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#0284c7]"
                  />
                  <div className="flex justify-between text-[11px] text-[#94A3B8] mt-1 font-mono">
                    <span>10M tokens</span>
                    <span>100M tokens</span>
                    <span>250M tokens</span>
                    <span>500M tokens</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-body font-medium text-[#334155] mb-2.5">
                    Select Model Tier
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {Object.entries(MODEL_RATES).map(([key, m]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedModel(key)}
                        className={`p-2.5 rounded-xl text-center border text-xs font-body transition-all cursor-pointer ${
                          selectedModel === key
                            ? "bg-[#E0F2FE] border-[#0284c7] text-[#0284c7] font-semibold shadow-2xs"
                            : "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:bg-[#F1F5F9]"
                        }`}
                      >
                        <div className="font-heading font-medium">{m.name}</div>
                        <div className="text-[10px] text-[#94A3B8]">{m.params}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Savings Highlight Tile */}
              <div className="lg:col-span-5 bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-body text-[#64748B] flex items-center justify-between">
                    <span>CSky {currentRate.name} Cost</span>
                    <span className="font-heading font-bold text-base text-[#0F1B2D]">
                      ${monthlyCost.toLocaleString()} / mo
                    </span>
                  </div>
                  <div className="text-xs font-body text-[#64748B] flex items-center justify-between mt-2.5">
                    <span>{currentRate.competitor}</span>
                    <span className="font-mono text-sm line-through text-[#94A3B8]">
                      ${competitorMonthlyCost.toLocaleString()} / mo
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
                  <div className="text-xs font-body text-[#059669] font-medium">
                    Estimated Monthly Savings
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-heading font-bold text-3xl md:text-4xl text-[#059669]">
                      ${savings.toLocaleString()}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-heading font-semibold">
                      {savingsPercent}% Lower
                    </span>
                  </div>
                  <p className="text-[11px] text-[#64748B] mt-2">
                    Plus 100% data sovereignty and freedom from proprietary lock-in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 4. EXPANDABLE FAQ ACCORDIONS */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <FadeIn delay={100}>
          <div className="text-center mb-12">
            <span className="text-xs font-heading font-semibold text-[#0284c7] uppercase tracking-wider">
              Answers
            </span>
            <h2 className="font-heading font-bold text-3xl text-[#0F1B2D] mt-2">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-2xl border border-[#E8EDF2] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8FAFC] transition-colors"
                  >
                    <span className="font-heading font-semibold text-sm md:text-base text-[#0F1B2D]">
                      {faq.q}
                    </span>
                    <span
                      className={`text-[#0284c7] font-bold text-lg transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs md:text-sm font-body text-[#475569] leading-relaxed border-t border-[#F1F5F9] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
