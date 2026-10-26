"use client";

import { FadeIn } from "@/components/FadeIn";
import { AnimatedBarsBackground } from "@/components/AnimatedBarsBackground";
import { PageBackgroundSymbols } from "@/components/PageBackgroundSymbols";
import {
  DrishtiSymbol,
  AkashSymbol,
  BuddhiYantraSymbol,
  SrishtiPadmaSymbol,
} from "@/components/TraditionalSymbols";

export function ManifestoView({ onGetAccess }: { onGetAccess: () => void }) {
  const principles = [
    {
      num: "01",
      title: "Clarity over complexity",
      sanskrit: "॥ दृष्टि मण्डल ॥ · Pure Transparency",
      accent: "#2563EB",
      bgGradient: "from-blue-500/10 via-sky-500/5 to-transparent",
      icon: <DrishtiSymbol size={28} color="#2563EB" />,
      body: "If a system cannot explain its conclusions in terms a human can evaluate in sixty seconds, it is not an aid — it is a hazard. We optimize for clear reasoning traces, formal proof lemmas, and human-verifiable boundaries, not inscrutable proprietary black boxes.",
    },
    {
      num: "02",
      title: "Weights belong to the world",
      sanskrit: "॥ स्वातन्त्र्यम् ॥ · Open Sovereignty",
      accent: "#7C3AED",
      bgGradient: "from-purple-500/10 via-violet-500/5 to-transparent",
      icon: <AkashSymbol size={28} color="#7C3AED" />,
      body: "Foundational intelligence should not be sequestered behind proprietary cloud API choke points. When research is open-weight, safety is independent and auditable, sovereignty is preserved, and innovation compounds globally across borders.",
    },
    {
      num: "03",
      title: "Tools for thinkers, not replacements",
      sanskrit: "॥ बुद्धि सामर्थ्यम् ॥ · Augmented Cognition",
      accent: "#EA580C",
      bgGradient: "from-orange-500/10 via-amber-500/5 to-transparent",
      icon: <BuddhiYantraSymbol size={28} color="#EA580C" />,
      body: "We do not believe in replacing human agency with algorithmic fiat. Our models are built to illuminate options, surface subtle edge cases, and amplify sound mathematical judgment — keeping ultimate strategic decisions where they belong.",
    },
    {
      num: "04",
      title: "Quiet, calm technology",
      sanskrit: "॥ शान्ति मण्डल ॥ · Serene Utility",
      accent: "#059669",
      bgGradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      icon: <SrishtiPadmaSymbol size={28} color="#059669" />,
      body: "Great tools disappear into the background. They do not demand your attention with flashing telemetry alerts or alarmist notifications. They give you the clarity of an open sky so you can focus on doing your life's most ambitious work.",
    },
  ];

  return (
    <div className="bg-[#F8FAFE] min-h-screen relative overflow-hidden text-[#0F1B2D]">
      {/* Universal Page Background Sacred Geometry in Gray */}
      <PageBackgroundSymbols theme="manifesto" />

      {/* 1. GSAP-ANIMATED FLOWING BARS HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20">
        <AnimatedBarsBackground theme="manifesto" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-[#E2E8F0] shadow-xs mb-6 text-xs font-heading font-medium text-[#4f46e5]">
            <span>✦</span>
            <span>॥ सत्यं शिवं सुन्दरम् ॥ · The CSky Manifesto</span>
            <span>✦</span>
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#0F1B2D] leading-[1.08]">
            Under an Open Sky
          </h1>

          <p className="font-body text-lg sm:text-xl text-[#334155] mt-5 max-w-2xl mx-auto leading-relaxed">
            A thesis on why intelligence must be clear, open, and human-led.
          </p>
        </div>
      </section>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Narrative Essay Card */}
        <FadeIn delay={100}>
          <div className="card-premium group relative overflow-hidden bg-white rounded-[32px] p-8 md:p-12 border border-[#E8EDF2] shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="space-y-6 font-body text-base md:text-lg text-[#0F1B2D]/80 leading-relaxed">
              <p>
                Every technological epoch begins with promises of liberation, only to settle into walls and gatekeepers. The current trajectory of artificial intelligence is no different: closed APIs, hidden training methodologies, and systems intentionally designed to be mysterious.
              </p>
              <p>
                When a tool is opaque, you cannot trust its foundation. You cannot verify whether an outcome is the product of sound deduction or algorithmic bias. You become a passive consumer rather than an architect of your own work.
              </p>

              <div className="my-10 p-8 rounded-2xl bg-[#F8FAFE] border-l-4 border-[#2563eb] shadow-2xs">
                <p className="font-heading font-semibold text-lg md:text-xl text-[#0F1B2D] italic leading-snug">
                  “We chose the name CSky because clarity is like clear weather: it doesn't give you answers to life, but it lets you see all the way to the horizon.”
                </p>
                <div className="mt-3 font-mono text-xs text-[#2563eb] font-semibold">
                  ॥ आकाश इव विमलं ज्ञानम् ॥
                </div>
              </div>

              <p>
                We founded CSky to build an alternative path. We believe that open weights, lightweight architectures, and human-comprehensible outputs are not just technical preferences — they are moral imperatives for the digital age.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* The 4 Principles in Reference Bento Layout */}
        <div className="mt-20">
          <FadeIn>
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="text-xs font-heading font-semibold text-[#4F46E5] uppercase tracking-wider">
                Foundations
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#0F1B2D] mt-2">
                Our Core Principles
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <FadeIn key={principle.num} delay={index * 100}>
                <div className="card-premium group relative overflow-hidden rounded-[32px] p-8 bg-white border border-[#E8EDF2] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-full flex flex-col justify-between">
                  {/* Subtle Corner Gradient Bloom contained safely */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px] z-0">
                    <div
                      className={`absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br ${principle.bgGradient} blur-xl group-hover:opacity-100 opacity-40 transition-opacity duration-500`}
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#F8FAFE] border border-[#E8EDF2] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                        {principle.icon}
                      </div>
                      <span className="font-mono text-xs font-bold text-[#94A3B8]">
                        Principle {principle.num}
                      </span>
                    </div>

                    <div
                      className="text-xs font-heading font-semibold tracking-wide"
                      style={{ color: principle.accent }}
                    >
                      {principle.sanskrit}
                    </div>

                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0F1B2D] mt-2 leading-snug">
                      {principle.title}
                    </h3>

                    <p className="font-body text-[#5A6B7F] mt-3.5 leading-relaxed text-sm">
                      {principle.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA */}
        <FadeIn delay={200}>
          <div className="card-premium group relative overflow-hidden mt-20 text-center p-10 md:p-14 rounded-[36px] bg-[#EEF2FF] border border-[#C7D2FE] shadow-sm hover:shadow-xl transition-all duration-500">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#1E1B4B]">
              Build with us in the open.
            </h3>
            <p className="font-body text-sm md:text-base text-[#4338CA] mt-2 max-w-md mx-auto">
              Our research papers, model checkpoints, and developer SDKs are available now with zero gatekeeping.
            </p>
            <button
              data-magnetic
              onClick={onGetAccess}
              className="mt-6 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-body font-medium text-sm rounded-full px-8 py-3.5 transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Get Early Access →
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
