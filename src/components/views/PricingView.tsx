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
  SriArchitectureWatermark,
} from "@/components/TraditionalSymbols";

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
    <div className="bg-[#F8FAFE] min-h-screen relative overflow-hidden text-[#0F1B2D]">
      {/* Universal Page Background Sacred Geometry in Gray */}
      <PageBackgroundSymbols theme="pricing" />

      {/* 1. HERO */}
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

      {/* 2. THREE COMPREHENSIVE TIERS (With Scalloped Bento Hills like Reference 111614.png) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {/* Tier 1: Open Weights Self-Hosted */}
          <FadeIn delay={50}>
            <div className="card-premium group relative overflow-hidden h-full bg-white rounded-[32px] p-8 border border-[#E8EDF2] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-emerald-500/10 blur-xl pointer-events-none group-hover:opacity-100 opacity-40 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-[#ECFDF5] text-[#059669] text-xs font-heading font-semibold mb-4 border border-emerald-100 shadow-2xs">
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

                {/* Scalloped Hill with Floating Runtime Badges (From Reference Screenshot 111614.png) */}
                <div className="mt-6 rounded-2xl bg-gradient-to-t from-emerald-100/70 via-emerald-50/40 to-transparent p-3.5 border border-emerald-100 flex flex-wrap gap-2 items-center justify-center">
                  {["vLLM Native", "Ollama GGUF", "TensorRT-LLM", "HuggingFace FP8"].map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 rounded-xl bg-white border border-emerald-200/60 shadow-2xs text-[11px] font-heading font-semibold text-[#065F46]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-3 text-xs font-body text-[#334155]">
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
                    <span>Zero telemetry & zero data leakage</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F1F5F9] relative z-10">
                <button
                  onClick={() => onNavigate("models")}
                  className="w-full bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F1B2D] font-body font-medium text-xs sm:text-sm rounded-full py-3.5 transition-colors cursor-pointer"
                >
                  Explore Models & Weights →
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Tier 2: Managed Serverless Endpoints (Highlighted) */}
          <FadeIn delay={120}>
            <div className="card-premium group relative h-full bg-white rounded-[32px] p-8 border-2 border-[#0284c7] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between">
              {/* Contained glow bloom */}
              <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none">
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-sky-500/15 blur-xl group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
              </div>

              {/* Floating "Most Popular" Badge - Crisp, fully visible, unclipped */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0284c7] text-white text-[11px] font-heading font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md z-30 whitespace-nowrap">
                Most Popular
              </div>

              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284c7] text-xs font-heading font-semibold mb-4 border border-sky-100 shadow-2xs">
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

                {/* Scalloped Hill with Floating Runtime Badges (From Reference Screenshot 111614.png) */}
                <div className="mt-6 rounded-2xl bg-gradient-to-t from-sky-100/70 via-sky-50/40 to-transparent p-3.5 border border-sky-100 flex flex-wrap gap-2 items-center justify-center">
                  {["OpenAI SDK Drop-In", "Sub-40ms P99", "Zero Data Retention", "$50 Free Credit"].map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 rounded-xl bg-white border border-sky-200/60 shadow-2xs text-[11px] font-heading font-semibold text-[#0369A1]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-3 text-xs font-body text-[#334155]">
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
                    <span>Zero Data Retention formal agreement</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] shrink-0" />
                    <span>140 tokens/sec high-throughput streaming</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F1F5F9] relative z-10">
                <button
                  onClick={() => onNavigate("access")}
                  className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-body font-medium text-xs sm:text-sm rounded-full py-3.5 transition-colors shadow-md hover:shadow-lg cursor-pointer"
                >
                  Get API Access Key →
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Tier 3: Dedicated Sovereign GPU Cluster */}
          <FadeIn delay={180}>
            <div className="card-premium group relative overflow-hidden h-full bg-white rounded-[32px] p-8 border border-[#E8EDF2] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-indigo-500/10 blur-xl pointer-events-none group-hover:opacity-100 opacity-40 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-heading font-semibold mb-4 border border-indigo-100 shadow-2xs">
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

                {/* Scalloped Hill with Floating Runtime Badges (From Reference Screenshot 111614.png) */}
                <div className="mt-6 rounded-2xl bg-gradient-to-t from-indigo-100/70 via-indigo-50/40 to-transparent p-3.5 border border-indigo-100 flex flex-wrap gap-2 items-center justify-center">
                  {["8x H100 SXM5", "Isolated Tenant", "Custom LoRA", "99.99% SLA"].map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 rounded-xl bg-white border border-indigo-200/60 shadow-2xs text-[11px] font-heading font-semibold text-[#4338CA]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-3 text-xs font-body text-[#334155]">
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
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F1F5F9] relative z-10">
                <button
                  onClick={() => onNavigate("manifesto")}
                  className="w-full bg-[#0F1B2D] hover:bg-[#1E293B] text-white font-body font-medium text-xs sm:text-sm rounded-full py-3.5 transition-colors cursor-pointer shadow-md hover:shadow-lg"
                >
                  Contact Sovereign Enterprise →
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. INTERACTIVE TOKEN ECONOMICS & 2x2 MATRIX (From Reference Screenshot 111339.png) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive ROI & Slider Card */}
          <div className="lg:col-span-7">
            <FadeIn delay={100}>
              <div className="card-premium group relative overflow-hidden bg-white rounded-[32px] p-8 md:p-10 border border-[#E8EDF2] shadow-sm hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div>
                  <span className="text-xs font-heading font-semibold text-[#0284c7] uppercase tracking-wider">
                    Compute Economics
                  </span>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0F1B2D] mt-2 tracking-tight">
                    Interactive token savings calculator
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#64748B] mt-2">
                    Compare CSky open foundation compute against proprietary closed cloud APIs.
                  </p>
                </div>

                <div className="space-y-6 mt-8">
                  <div>
                    <div className="flex items-center justify-between text-xs font-body text-[#334155] mb-2 font-medium">
                      <span>Monthly Inference Volume</span>
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
                      <span>10M</span>
                      <span>100M</span>
                      <span>250M</span>
                      <span>500M tokens</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-body font-medium text-[#334155] mb-2.5">
                      Select Model Architecture
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

                {/* Savings Summary Banner inside Left Card */}
                <div className="mt-8 p-6 rounded-2xl bg-[#F0FDF4] border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-body text-emerald-800 font-semibold">
                      Estimated Monthly Savings
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-heading font-bold text-3xl sm:text-4xl text-[#059669]">
                        ${savings.toLocaleString()}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-heading font-bold">
                        {savingsPercent}% Lower TCO
                      </span>
                    </div>
                  </div>

                  <div className="text-right sm:text-right w-full sm:w-auto">
                    <div className="text-[11px] font-mono text-[#64748B]">
                      CSky: <b className="text-[#0F1B2D]">${monthlyCost.toLocaleString()}/mo</b>
                    </div>
                    <div className="text-[11px] font-mono text-[#94A3B8] line-through mt-0.5">
                      Competitor: ${competitorMonthlyCost.toLocaleString()}/mo
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: 2x2 Capabilities Matrix (Reference Screenshot 111339.png) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FadeIn delay={120}>
                <div className="card-premium bg-white rounded-[24px] p-5 border border-[#E8EDF2] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#DDD6FE]/60 to-transparent rounded-bl-full pointer-events-none" />
                  <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-3">
                    <AkashSymbol size={20} color="#4F46E5" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#0F1B2D]">Zero Token Markups</h4>
                  <p className="font-body text-xs text-[#64748B] mt-1 leading-snug">
                    Open weights mean you pay bare hardware cost, never 10x proprietary markups.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={160}>
                <div className="card-premium bg-white rounded-[24px] p-5 border border-[#E8EDF2] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FED7AA]/60 to-transparent rounded-bl-full pointer-events-none" />
                  <div className="w-9 h-9 rounded-xl bg-[#FFF7ED] flex items-center justify-center mb-3">
                    <AgniSymbol size={20} color="#EA580C" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#0F1B2D]">No Per-Seat Gates</h4>
                  <p className="font-body text-xs text-[#64748B] mt-1 leading-snug">
                    Deploy across 1,000 developers with zero incremental license friction.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="card-premium bg-white rounded-[24px] p-5 border border-[#E8EDF2] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#BBF7D0]/60 to-transparent rounded-bl-full pointer-events-none" />
                  <div className="w-9 h-9 rounded-xl bg-[#F0FDF4] flex items-center justify-center mb-3">
                    <PrithviSymbol size={20} color="#059669" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#0F1B2D]">Fixed Reserved Nodes</h4>
                  <p className="font-body text-xs text-[#64748B] mt-1 leading-snug">
                    Lock in guaranteed compute SLAs without peak-hour throttling or queuing.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={240}>
                <div className="card-premium bg-white rounded-[24px] p-5 border border-[#E8EDF2] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#BAE6FD]/60 to-transparent rounded-bl-full pointer-events-none" />
                  <div className="w-9 h-9 rounded-xl bg-[#F0F9FF] flex items-center justify-center mb-3">
                    <DrishtiSymbol size={20} color="#0284C7" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#0F1B2D]">100% Data Sovereignty</h4>
                  <p className="font-body text-xs text-[#64748B] mt-1 leading-snug">
                    Zero retention agreements legally guaranteed across all API requests.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Bottom Mini SDK Pills */}
            <FadeIn delay={280}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="card-premium bg-white rounded-2xl p-3.5 border border-[#E8EDF2] text-left">
                  <div className="font-heading font-bold text-xs text-[#0F1B2D]">Pay Monthly</div>
                  <p className="font-body text-[11px] text-[#64748B] mt-0.5">Cancel anytime, no lock-in</p>
                </div>
                <div className="card-premium bg-white rounded-2xl p-3.5 border border-[#E8EDF2] text-left">
                  <div className="font-heading font-bold text-xs text-[#0F1B2D]">Free Trial</div>
                  <p className="font-body text-[11px] text-[#64748B] mt-0.5">$50 dev credits included</p>
                </div>
                <div className="card-premium bg-white rounded-2xl p-3.5 border border-[#E8EDF2] text-left">
                  <div className="font-heading font-bold text-xs text-[#0F1B2D]">Invoicing</div>
                  <p className="font-body text-[11px] text-[#64748B] mt-0.5">Wire / Net-30 enterprise</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. EXPANDABLE FAQ ACCORDIONS */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-20">
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
                  className="card-premium bg-white rounded-2xl border border-[#E8EDF2] overflow-hidden transition-all duration-300 shadow-2xs hover:shadow-sm"
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
