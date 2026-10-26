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
  SrishtiPadmaSymbol,
  KriyaChakraSymbol,
  BuddhiYantraSymbol,
} from "@/components/TraditionalSymbols";

export function EarlyAccessView() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    project: "",
    interests: ["Drishti (70B)"],
  });

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "How are the model weights distributed?",
      a: "All models are published on Hugging Face and available via direct magnet/HTTP mirrors in safe FP8, BF16, and GGUF quantized formats. Pre-built vLLM and Ollama packages run out of the box.",
    },
    {
      q: "Can I use CSky models for commercial production?",
      a: "Yes. Drishti (70B), Agni (120B), Prithvi (32B), and Vayu (8B) are licensed under permissive Apache 2.0 with zero restrictions on commercial applications. Akash (405B) is published under our Open Research license.",
    },
    {
      q: "Do you offer hosted inference endpoints?",
      a: "Yes. Early access developers receive complimentary hosted API keys with $50 starter credits to prototype in the cloud before provisioning self-hosted private hardware.",
    },
    {
      q: "How fast will my access request be reviewed?",
      a: "We review and approve batches twice weekly. Most teams hear back with their API keys and download tokens within 24 to 48 hours.",
    },
  ];

  return (
    <div className="bg-[#F8FAFE] min-h-screen relative overflow-hidden text-[#0F1B2D]">
      {/* Universal Page Background Sacred Geometry in Gray */}
      <PageBackgroundSymbols theme="access" />

      {/* 1. GSAP-ANIMATED FLOWING BARS HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20">
        <AnimatedBarsBackground theme="access" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-[#E2E8F0] shadow-xs mb-6 text-xs font-heading font-medium text-[#0284c7]">
            <span>✦</span>
            <span>॥ प्रवेश द्वार ॥ · Developer Early Access</span>
            <span>✦</span>
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#0F1B2D] leading-[1.08]">
            Start building with CSky
          </h1>

          <p className="font-body text-lg sm:text-xl text-[#334155] mt-5 max-w-2xl mx-auto leading-relaxed">
            Join our active developer pilot to download pre-release weights, receive priority API keys, and shape our open roadmap.
          </p>
        </div>
      </section>

      {/* 2. SPLIT INTERACTIVE APPLICATION & PILOT PERKS (Reference Screenshots 111339.png & 111608.png) */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (col-span-7): Application Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={100}>
              <div className="card-premium group relative overflow-hidden bg-white rounded-[32px] p-8 sm:p-10 border border-[#E8EDF2] hover:border-sky-300 hover:shadow-[0_20px_50px_rgba(2,132,199,0.16)] transition-all duration-500 ease-out">
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-sky-400 blur-3xl pointer-events-none opacity-20 group-hover:opacity-70 group-hover:scale-125 transition-all duration-500 ease-out z-0" />
                <div className="relative z-10">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#E0F2FE] flex items-center justify-center mx-auto text-[#0284c7] mb-6 shadow-sm">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#0F1B2D]">
                      Application Received!
                    </h3>
                    <p className="font-body text-[#5A6B7F] mt-4 max-w-md mx-auto text-base leading-relaxed">
                      Thank you, <span className="font-semibold text-[#0F1B2D]">{formData.name || "friend"}</span>. We&apos;ve sent a confirmation to <span className="text-[#0284c7] font-mono">{formData.email}</span> with your initial setup guide and download token.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-xs font-body font-medium text-[#0284c7] hover:underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <span className="text-xs font-heading font-semibold text-[#0284c7] uppercase tracking-wider">
                        Developer Registration
                      </span>
                      <h3 className="font-heading font-bold text-2xl text-[#0F1B2D] mt-1.5">
                        Request model weights &amp; API keys
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                      <div>
                        <label className="block font-body text-xs font-semibold text-[#0F1B2D] mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Arsh Pathan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-body text-sm text-[#0F1B2D] placeholder-[#94A3B8] focus:outline-none focus:border-[#0284c7] focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs font-semibold text-[#0F1B2D] mb-1.5">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="arsh@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-body text-sm text-[#0F1B2D] placeholder-[#94A3B8] focus:outline-none focus:border-[#0284c7] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-body text-xs font-semibold text-[#0F1B2D] mb-1.5">
                        Company, Laboratory, or Organization
                      </label>
                      <input
                        type="text"
                        placeholder="DeepTech Research / University Lab / Sovereign Cloud"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-body text-sm text-[#0F1B2D] placeholder-[#94A3B8] focus:outline-none focus:border-[#0284c7] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block font-body text-xs font-semibold text-[#0F1B2D] mb-2">
                        Which foundation models are you looking to test?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {[
                          "Akash (405B)",
                          "Agni (120B)",
                          "Drishti (70B)",
                          "Prithvi (32B)",
                          "Soma (14B)",
                          "Vayu (8B)",
                        ].map((opt) => {
                          const selected = formData.interests.includes(opt);
                          return (
                            <button
                              type="button"
                              key={opt}
                              onClick={() => handleInterestToggle(opt)}
                              className={`px-3.5 py-2.5 rounded-xl border text-left font-body text-xs font-medium transition-all cursor-pointer ${
                                selected
                                  ? "bg-[#E0F2FE] border-[#0284c7] text-[#0284c7] font-semibold shadow-2xs"
                                  : "bg-[#F8FAFC] border-[#E2E8F0] text-[#5A6B7F] hover:bg-white"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{opt}</span>
                                {selected && <span className="text-[10px]">✓</span>}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block font-body text-xs font-semibold text-[#0F1B2D] mb-1.5">
                        Describe your workload, cluster topology, or research target
                      </label>
                      <textarea
                        rows={3}
                        placeholder="We're evaluating open-weight models for self-hosted quantitative risk theorem validation..."
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-body text-sm text-[#0F1B2D] placeholder-[#94A3B8] focus:outline-none focus:border-[#0284c7] focus:bg-white transition-all"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        data-magnetic
                        type="submit"
                        className="w-full py-4 rounded-full bg-[#0F1B2D] hover:bg-black text-white font-body font-medium text-sm sm:text-base transition-all shadow-md hover:shadow-lg cursor-pointer"
                      >
                        Submit Application for Instant Review →
                      </button>
                    </div>
                  </form>
                )}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (col-span-5): Pilot Perks & Floating Constellation (From Reference 111608.png) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn delay={150}>
              <div className="card-premium group relative overflow-hidden bg-white rounded-[32px] p-7 border border-[#E8EDF2] hover:border-sky-300 hover:shadow-[0_20px_50px_rgba(2,132,199,0.16)] transition-all duration-500 ease-out">
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-sky-400 blur-3xl pointer-events-none opacity-20 group-hover:opacity-70 group-hover:scale-125 transition-all duration-500 ease-out z-0" />
                <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
                  <h4 className="font-heading font-bold text-lg text-[#0F1B2D]">
                    Developer Pilot Inclusions
                  </h4>
                  <span className="font-mono text-xs text-[#0284c7] font-semibold">
                    100% Free
                  </span>
                </div>

                <div className="space-y-4 mt-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xs text-[#0F1B2D]">
                        Priority Hugging Face Weights
                      </div>
                      <p className="font-body text-xs text-[#64748B] mt-0.5 leading-snug">
                        Immediate unlock for FP8, BF16, and GGUF quantized model checkpoints.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xs text-[#0F1B2D]">
                        $50 Hosted Cloud Credits
                      </div>
                      <p className="font-body text-xs text-[#64748B] mt-0.5 leading-snug">
                        Test inference endpoints with sub-40ms latency without spinning up GPUs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xs text-[#0F1B2D]">
                        Air-Gapped Cluster Advisory
                      </div>
                      <p className="font-body text-xs text-[#64748B] mt-0.5 leading-snug">
                        Direct 1-on-1 architecture review with CSky kernel and distributed systems engineers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xs text-[#0F1B2D]">
                        Zero Data Retention SLA
                      </div>
                      <p className="font-body text-xs text-[#64748B] mt-0.5 leading-snug">
                        Contractual zero-telemetry guarantee for strict compliance in finance and health.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Constellation of Colorful Frosted Sacred Motifs (Reference 111608.png) */}
                <div className="mt-7 pt-5 border-t border-[#F1F5F9]">
                  <div className="text-[11px] font-heading font-semibold text-[#94A3B8] uppercase tracking-wider mb-3">
                    Ecosystem Modules Included
                  </div>
                  <div className="flex flex-wrap gap-2.5 items-center justify-center p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 shadow-2xs flex items-center justify-center p-2">
                      <SrishtiPadmaSymbol size={22} color="#FFFFFF" />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 shadow-2xs flex items-center justify-center p-2">
                      <DrishtiSymbol size={22} color="#FFFFFF" />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-2xs flex items-center justify-center p-2">
                      <BuddhiYantraSymbol size={22} color="#FFFFFF" />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-2xs flex items-center justify-center p-2">
                      <KriyaChakraSymbol size={22} color="#FFFFFF" />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-violet-600 shadow-2xs flex items-center justify-center p-2">
                      <AkashSymbol size={22} color="#FFFFFF" />
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* 3. FAQs IN REFERENCE CARDS */}
        <div className="mt-24">
          <FadeIn>
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-heading font-semibold text-[#0284c7] uppercase tracking-wider">
                Support
              </span>
              <h2 className="font-heading font-bold text-3xl text-[#0F1B2D] mt-2">
                Frequently Asked Questions
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 80}>
                <div className="card-premium group relative overflow-hidden bg-white rounded-3xl p-7 border border-[#E8EDF2] hover:border-sky-300 hover:shadow-[0_16px_40px_rgba(2,132,199,0.14)] hover:-translate-y-1.5 transition-all duration-500 ease-out h-full flex flex-col justify-between">
                  <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-sky-400 blur-2xl pointer-events-none opacity-15 group-hover:opacity-65 group-hover:scale-125 transition-all duration-500 ease-out z-0" />
                  <div className="relative z-10">
                    <h3 className="font-heading font-semibold text-base text-[#0F1B2D]">
                      {faq.q}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#5A6B7F] mt-2.5 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
