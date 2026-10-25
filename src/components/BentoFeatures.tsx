"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import {
  DrishtiSymbol,
  SrishtiPadmaSymbol,
  BuddhiYantraSymbol,
  KriyaChakraSymbol,
  AkashSymbol,
  SuryaMandalaWatermark,
} from "@/components/TraditionalSymbols";

export function BentoFeatures() {
  const [activeChatTab, setActiveChatTab] = useState<"chat" | "work">("work");

  return (
    <section className="py-24 md:py-32 bg-[#F8FAFE] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8EDF2] text-xs font-heading font-semibold text-[#2563eb] mb-3.5 shadow-2xs">
            <span>✦</span>
            <span>॥ सर्वकार्य सिद्धि ॥ · Autonomous Agent Architecture</span>
            <span>✦</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#0F1B2D] tracking-tight">
            Ask Chat a question, or hand Work a goal
          </h2>
          <p className="font-body text-sm sm:text-base text-[#64748B] mt-3.5 max-w-lg mx-auto leading-relaxed">
            From quick conversational queries to multi-agent distributed execution pipelines with verified safety.
          </p>
        </div>

        {/* 1. Chat vs Work Side-by-Side Card (Matches Reference Screenshot 2026-10-25 111558.png) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
          {/* Left: Chat Card */}
          <FadeIn delay={0}>
            <div className="card-premium bg-white rounded-[32px] p-8 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-full flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#FED7AA]/40 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <span className="font-heading font-bold text-base text-[#0F1B2D]">Chat</span>
                <div className="mt-8 relative z-10">
                  <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-md max-w-sm">
                    <p className="font-body text-sm font-medium text-[#0F1B2D]">
                      Which of our Byzantine consensus nodes failed proof validation before block #42800?
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-[#94A3B8]">
                      <span className="px-2.5 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] font-mono text-[11px] text-[#475569]">
                        ∞ Akash 405B
                      </span>
                      <span className="w-6 h-6 rounded-full bg-[#0F1B2D] text-white flex items-center justify-center text-xs">
                        ↑
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-body text-xs sm:text-sm text-[#64748B] mt-8 leading-relaxed">
                Ask a question and work through the answer using the internal documents, repos, and mathematical tools you connect.
              </p>
            </div>
          </FadeIn>

          {/* Right: Work Card */}
          <FadeIn delay={100}>
            <div className="card-premium bg-white rounded-[32px] p-8 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-full flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#BBF7D0]/40 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <span className="font-heading font-bold text-base text-[#0F1B2D]">Work</span>
                <div className="mt-8 relative z-10">
                  <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-md max-w-md space-y-2.5">
                    <div className="font-body text-sm font-bold text-[#0F1B2D]">
                      Formal audit: Compile and verify distributed state machine
                    </div>
                    <div className="space-y-1.5 text-xs font-body text-[#475569]">
                      <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                        <span>✓</span>
                        <span>Parse all 18 consensus lemmas</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#475569]">
                        <span>◌</span>
                        <span>Dispatch Lean 4 automated theorem prover</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#94A3B8]">
                        <span>○</span>
                        <span>Generate bitwise reproducible audit report</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-body text-xs sm:text-sm text-[#64748B] mt-8 leading-relaxed">
                Hand off a goal. The agent plans the multi-step path, deploys isolated sub-agents, and returns finished, verified output.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Full-width Pill Banner (Matches Reference Screenshot 2026-10-25 111558.png bottom pill) */}
        <FadeIn delay={150}>
          <div className="w-full py-4 px-6 rounded-2xl bg-white border border-[#E8EDF2] text-center text-xs sm:text-sm font-body text-[#475569] mb-12 shadow-2xs">
            Build an agent once, share it with your sovereign cluster, and verify the exact mathematical bounds for each run.
          </div>
        </FadeIn>

        {/* 2. Wide Card: Turn Team Member Process Into Shared Agent + Constellation of Floating Traditional Motifs
            (Matches Reference Screenshot 2026-10-25 111608.png) */}
        <FadeIn delay={200}>
          <div className="card-premium bg-white rounded-[36px] p-8 md:p-14 border border-[#E8EDF2] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Heading & Description */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-3xl sm:text-4xl text-[#0F1B2D] tracking-tight leading-tight">
                    Turn one team member&apos;s process into a shared sovereign agent
                  </h3>
                  <p className="font-body text-base text-[#5A6B7F] mt-5 leading-relaxed max-w-xl">
                    A team member who owns the monthly security audit builds the agent and sets its rules.
                    The rest of the organization can run it locally with guaranteed safety. Deploy the agent in Slack or private microservices with zero telemetry leakage.
                  </p>
                </div>
              </div>

              {/* Right Column: Floating Constellation of Colorful Frosted Traditional Motifs
                  (Directly inspired by Reference Screenshot 2026-10-25 111608.png) */}
              <div className="lg:col-span-5 flex items-center justify-center relative min-h-[260px]">
                <div className="grid grid-cols-4 gap-4 p-4 relative z-10">
                  {/* Row 1 */}
                  <div className="col-start-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 shadow-md flex items-center justify-center p-2.5 transform hover:scale-110 transition-transform">
                    <SrishtiPadmaSymbol size={28} color="#FFFFFF" />
                  </div>

                  {/* Row 2 */}
                  <div className="col-start-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-md flex items-center justify-center p-2.5 transform hover:scale-110 transition-transform">
                    <KriyaChakraSymbol size={28} color="#FFFFFF" />
                  </div>
                  <div className="col-start-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 shadow-md flex items-center justify-center p-2.5 transform hover:scale-110 transition-transform">
                    <DrishtiSymbol size={28} color="#FFFFFF" />
                  </div>

                  {/* Row 3 */}
                  <div className="col-start-2 w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-md flex items-center justify-center p-2.5 transform hover:scale-110 transition-transform">
                    <BuddhiYantraSymbol size={28} color="#FFFFFF" />
                  </div>
                  <div className="col-start-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-violet-600 shadow-md flex items-center justify-center p-2.5 transform hover:scale-110 transition-transform">
                    <AkashSymbol size={28} color="#FFFFFF" />
                  </div>
                  <div className="col-start-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-red-600 shadow-md flex items-center justify-center p-2.5 transform hover:scale-110 transition-transform">
                    <SrishtiPadmaSymbol size={28} color="#FFFFFF" />
                  </div>

                  {/* Row 4 */}
                  <div className="col-start-1 w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 shadow-md flex items-center justify-center p-2.5 transform hover:scale-110 transition-transform">
                    <DrishtiSymbol size={28} color="#FFFFFF" />
                  </div>
                  <div className="col-start-2 w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-600 shadow-md flex items-center justify-center p-2.5 transform hover:scale-110 transition-transform">
                    <BuddhiYantraSymbol size={28} color="#FFFFFF" />
                  </div>
                  <div className="col-start-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-lime-400 to-emerald-600 shadow-md flex items-center justify-center p-2.5 transform hover:scale-110 transition-transform">
                    <KriyaChakraSymbol size={28} color="#FFFFFF" />
                  </div>
                  <div className="col-start-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-700 shadow-md flex items-center justify-center p-2.5 transform hover:scale-110 transition-transform">
                    <AkashSymbol size={28} color="#FFFFFF" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 3. Configure Each Agent 3-Column Bento Cards
            (Matches Reference Screenshot 2026-10-25 111614.png) */}
        <div>
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0F1B2D]">
              Configure each agent
            </h3>
            <p className="font-body text-sm text-[#64748B] mt-1 sm:mt-0">
              Set which models and tools the agent can access, the formal bounds it follows, and when it delegates to sub-agents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {/* Bento Card 1: Connectors with Scalloped Hill */}
            <FadeIn delay={100}>
              <div className="card-premium bg-white rounded-[32px] p-7 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-[360px] flex flex-col justify-between relative overflow-hidden group">
                <div>
                  <h4 className="font-heading font-bold text-lg text-[#0F1B2D]">Connectors</h4>
                  <p className="font-body text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                    Connect Slack, GitHub, Linear, PostgreSQL, and private internal databases. Agents read verified context and execute safe transactions.
                  </p>
                </div>

                {/* Scalloped Hill with Floating Tool Pills */}
                <div className="relative h-32 rounded-2xl bg-gradient-to-t from-emerald-100/70 via-emerald-50/40 to-transparent flex items-end justify-center p-3 overflow-hidden">
                  <div className="flex flex-wrap gap-2 justify-center relative z-10">
                    {["PostgreSQL", "Linear", "GitHub", "Slack", "Kafka"].map((pill) => (
                      <span
                        key={pill}
                        className="px-3 py-1 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs font-heading font-semibold text-xs text-[#0F1B2D]"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bento Card 2: Skills with Scalloped Peach Hill */}
            <FadeIn delay={200}>
              <div className="card-premium bg-white rounded-[32px] p-7 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-[360px] flex flex-col justify-between relative overflow-hidden group">
                <div>
                  <h4 className="font-heading font-bold text-lg text-[#0F1B2D]">Skills</h4>
                  <p className="font-body text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                    Skills define the mathematical and formal constraints an agent must satisfy before emitting output. They enforce zero-hallucination bounds.
                  </p>
                </div>

                {/* Scalloped Peach Hill with Skill Pills */}
                <div className="relative h-32 rounded-2xl bg-gradient-to-t from-orange-100/70 via-orange-50/40 to-transparent flex flex-col items-center justify-end p-3 gap-2 overflow-hidden">
                  <div className="px-4 py-1.5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs font-body text-xs font-semibold text-[#0F1B2D] flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span>formal-theorem-verifier</span>
                  </div>
                  <div className="px-4 py-1.5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs font-body text-xs font-semibold text-[#0F1B2D] flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                    <span>byzantine-consensus-auditor</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bento Card 3: Sub-Agents with Scalloped Lavender Hill */}
            <FadeIn delay={300}>
              <div className="card-premium bg-white rounded-[32px] p-7 border border-[#E8EDF2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-[360px] flex flex-col justify-between relative overflow-hidden group">
                <div>
                  <h4 className="font-heading font-bold text-lg text-[#0F1B2D]">Sub-agents</h4>
                  <p className="font-body text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                    A lead agent decomposes large jobs among specialized sub-agents with isolated memory sandboxes, then validates their joint outcome.
                  </p>
                </div>

                {/* Scalloped Lavender Hill with Sub-agent Card */}
                <div className="relative h-32 rounded-2xl bg-gradient-to-t from-indigo-100/70 via-indigo-50/40 to-transparent flex items-end justify-center p-3 overflow-hidden">
                  <div className="w-full bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#6366F1]" />
                      <span className="font-heading font-bold text-xs text-[#0F1B2D]">
                        Compiler RCA Sub-Agent
                      </span>
                    </div>
                    <p className="font-body text-[10px] text-[#64748B] mt-1 line-clamp-1">
                      Synthesizes Lean 4 proof bounds for lemma 04...
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
