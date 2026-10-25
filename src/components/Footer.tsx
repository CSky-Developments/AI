"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";
import { SuryaMandalaWatermark } from "@/components/TraditionalSymbols";

interface FooterProps {
  onSelectTab?: (tabId: string) => void;
  theme?: string;
}

export function Footer({ onSelectTab, theme = "overview" }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNav = (tabId: string) => {
    if (onSelectTab) {
      onSelectTab(tabId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="bg-gradient-to-b from-[#F8FAFE] via-[#EFF5FD] to-[#E6F0FC] text-[#0F1B2D] border-t border-[#E2E8F0]/80 relative overflow-hidden">
      {/* 1. Subtle Background Sacred Watermark in Gray */}
      <div className="absolute -bottom-28 -right-28 pointer-events-none opacity-[0.045] select-none filter blur-[0.5px]">
        <SuryaMandalaWatermark size={680} color="#64748B" />
      </div>

      {/* 2. Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Dispatch Subscription Column (5 cols) */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <button
              onClick={() => handleNav("overview")}
              className="flex items-center gap-3 hover:opacity-90 transition-opacity cursor-pointer group text-left"
            >
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <Logo size={42} theme={theme} className="drop-shadow-xs" />
              </div>
              <div>
                <span className="font-heading font-bold text-2xl text-[#0F1B2D] tracking-tight block">
                  CSky AI
                </span>
                <span className="font-heading text-xs text-[#2563eb] font-semibold tracking-wider">
                  ॥ सर्वं खल्विदं ब्रह्म ॥
                </span>
              </div>
            </button>

            <p className="font-body text-sm text-[#475569] mt-5 leading-relaxed max-w-sm">
              Open-weight foundation models engineered under an open sky. We release auditable weights, formal Lean 4 deduction traces, and sovereign clusters.
            </p>

            {/* Celestial Dispatch Subscription Card */}
            <div className="mt-8 max-w-md p-5 rounded-2xl bg-white/90 border border-[#CBD5E1]/60 shadow-xs backdrop-blur-sm">
              <span className="block font-heading font-semibold text-xs text-[#0F1B2D] uppercase tracking-wider mb-1">
                Join the Celestial Dispatch
              </span>
              <p className="font-body text-xs text-[#64748B] mb-3 leading-relaxed">
                Receive model checkpoint weights, arXiv pre-prints, and FP8 quantized kernels.
              </p>

              {subscribed ? (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-body flex items-center gap-2">
                  <span>✓</span>
                  <span>Welcome to the dispatch. Verification email transmitted.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="engineer@domain.com"
                    className="flex-1 bg-[#F8FAFE] border border-[#CBD5E1] rounded-full px-4 py-2.5 text-xs text-[#0F1B2D] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563eb] transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-heading font-medium text-xs rounded-full px-5 py-2.5 transition-all shadow-xs hover:shadow cursor-pointer shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sitemaps (7 cols: 4 sub-columns) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Col 1: Foundation Models */}
            <div>
              <span className="block font-heading font-semibold text-xs uppercase tracking-wider text-[#2563eb] mb-4">
                Celestial Models
              </span>
              <ul className="space-y-2.5 font-body text-xs text-[#475569]">
                <li>
                  <button
                    onClick={() => handleNav("csky-ultra")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                    <span>Akash (405B)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-agni")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                    <span>Agni (120B)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-pro")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                    <span>Drishti (70B)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-prithvi")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C]" />
                    <span>Prithvi (32B)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-soma")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                    <span>Soma (14B)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-nano")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                    <span>Vayu (8B)</span>
                  </button>
                </li>
                <li className="pt-2">
                  <button
                    onClick={() => handleNav("models")}
                    className="text-[#2563eb] hover:underline cursor-pointer text-left font-semibold"
                  >
                    View Directory →
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 2: Platform & Software */}
            <div>
              <span className="block font-heading font-semibold text-xs uppercase tracking-wider text-[#2563eb] mb-4">
                Software Suite
              </span>
              <ul className="space-y-2.5 font-body text-xs text-[#475569]">
                <li>
                  <button
                    onClick={() => handleNav("csky-app")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    CSky Desktop App
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-ide")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    CSky Studio IDE
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-cli")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    Command-Line CLI
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-extensions")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    VSCode Extension
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-sdk")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    Python & TS SDKs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("docs")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    API Documentation
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Research & Foundations */}
            <div>
              <span className="block font-heading font-semibold text-xs uppercase tracking-wider text-[#2563eb] mb-4">
                Scientific Research
              </span>
              <ul className="space-y-2.5 font-body text-xs text-[#475569]">
                <li>
                  <button
                    onClick={() => handleNav("research")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    arXiv Pre-Prints
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("models")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    Benchmark Results
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("research")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    Formal Proofs (Lean 4)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("use-cases")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <a
                    href="https://github.com/CSky-Developments/AI"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#0F1B2D] transition-colors flex items-center gap-1"
                  >
                    <span>GitHub Org</span>
                    <span>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://huggingface.co"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#0F1B2D] transition-colors flex items-center gap-1"
                  >
                    <span>Hugging Face Hub</span>
                    <span>↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Enterprise & Sovereignty */}
            <div>
              <span className="block font-heading font-semibold text-xs uppercase tracking-wider text-[#2563eb] mb-4">
                Enterprise & Trust
              </span>
              <ul className="space-y-2.5 font-body text-xs text-[#475569]">
                <li>
                  <button
                    onClick={() => handleNav("pricing")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    Compute & Pricing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("manifesto")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    Sovereignty Manifesto
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("access")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    Reserved GPU Clusters
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("manifesto")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    Constitutional Safety
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("pricing")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    Zero Retention SLA
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("access")}
                    className="hover:text-[#0F1B2D] transition-colors cursor-pointer text-left"
                  >
                    Early Access Program
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Bottom Legal & Attribution Bar */}
        <div className="mt-16 pt-8 border-t border-[#CBD5E1]/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body text-[#64748B]">
          <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
            <span>© 2026 CSky AI, Inc. All rights reserved.</span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="text-[#2563eb] font-medium">॥ सत्यमेव जयते नानृतम् ॥</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => handleNav("pricing")}
              className="hover:text-[#0F1B2D] transition-colors cursor-pointer"
            >
              Terms of Inference
            </button>
            <button
              onClick={() => handleNav("manifesto")}
              className="hover:text-[#0F1B2D] transition-colors cursor-pointer"
            >
              Data Sovereignty
            </button>
            <a
              href="mailto:security@csky.ai"
              className="hover:text-[#0F1B2D] transition-colors"
            >
              Security Audits
            </a>
            <a
              href="https://github.com/CSky-Developments/AI"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#2563eb] transition-colors font-mono"
            >
              v1.0-main ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
