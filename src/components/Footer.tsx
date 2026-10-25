"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { SuryaMandalaWatermark } from "@/components/TraditionalSymbols";

interface FooterProps {
  onSelectTab?: (tabId: string) => void;
  theme?: string;
}

export function Footer({ onSelectTab, theme = "overview" }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [currentTime, setCurrentTime] = useState({
    ist: "",
    pst: "",
    gmt: "",
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setCurrentTime({
        ist: now.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }),
        pst: now.toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }),
        gmt: now.toLocaleTimeString("en-US", { timeZone: "UTC", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

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
    <footer className="bg-[#0B1320] text-white relative overflow-hidden">
      {/* 1. Subtle Background Sacred Watermark */}
      <div className="absolute -bottom-28 -right-28 pointer-events-none opacity-[0.04] select-none filter blur-[0.5px]">
        <SuryaMandalaWatermark size={680} color="#60a5fa" />
      </div>

      {/* 2. Top Live Mesh Status Bar */}
      <div className="border-b border-white/10 bg-[#070D17]">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-radar-emerald shrink-0" />
            <span className="text-white/80 font-medium">All 6 Foundation Models Operational</span>
            <span className="text-white/40 hidden sm:inline">&middot;</span>
            <span className="text-white/60 hidden sm:inline">99.99% Cluster Uptime</span>
            <span className="text-white/40 hidden md:inline">&middot;</span>
            <span className="text-emerald-400/90 hidden md:inline">14.8M Tokens/sec Live Mesh</span>
          </div>

          <div className="flex items-center gap-4 text-white/50 text-[11px]">
            <span>BLR {currentTime.ist} IST</span>
            <span>&middot;</span>
            <span>SFO {currentTime.pst} PST</span>
            <span>&middot;</span>
            <span>LON {currentTime.gmt} GMT</span>
          </div>
        </div>
      </div>

      {/* 3. Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Dispatch Subscription Column (5 cols) */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <button
              onClick={() => handleNav("overview")}
              className="flex items-center gap-3 hover:opacity-90 transition-opacity cursor-pointer group text-left"
            >
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <Logo size={42} theme={theme} className="drop-shadow-sm" />
              </div>
              <div>
                <span className="font-heading font-bold text-2xl text-white tracking-tight block">
                  CSky AI
                </span>
                <span className="font-heading text-xs text-[#60a5fa] font-medium tracking-wider">
                  ॥ सर्वं खल्विदं ब्रह्म ॥
                </span>
              </div>
            </button>

            <p className="font-body text-sm text-white/70 mt-5 leading-relaxed max-w-sm">
              Open-weight foundation models engineered under an open sky. We release auditable weights, formal Lean 4 deduction traces, and sovereign clusters.
            </p>

            {/* Celestial Dispatch Subscription Form */}
            <div className="mt-8 max-w-md">
              <span className="block font-heading font-semibold text-xs text-white/90 uppercase tracking-wider mb-2">
                Join the Celestial Dispatch
              </span>
              <p className="font-body text-xs text-white/50 mb-3">
                Receive model checkpoint weights, arXiv pre-prints, and FP8 quantized kernels.
              </p>

              {subscribed ? (
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-body flex items-center gap-2">
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
                    className="flex-1 bg-white/5 border border-white/15 rounded-full px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#60a5fa] transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-heading font-medium text-xs rounded-full px-5 py-2.5 transition-all shadow-sm cursor-pointer shrink-0"
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
              <span className="block font-heading font-semibold text-xs uppercase tracking-wider text-[#60a5fa] mb-4">
                Celestial Models
              </span>
              <ul className="space-y-2.5 font-body text-xs text-white/70">
                <li>
                  <button
                    onClick={() => handleNav("csky-ultra")}
                    className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                    <span>Akash (405B)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-agni")}
                    className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                    <span>Agni (120B)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-pro")}
                    className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                    <span>Drishti (70B)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-prithvi")}
                    className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C]" />
                    <span>Prithvi (32B)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-soma")}
                    className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                    <span>Soma (14B)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-nano")}
                    className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                    <span>Vayu (8B)</span>
                  </button>
                </li>
                <li className="pt-2">
                  <button
                    onClick={() => handleNav("models")}
                    className="text-[#60a5fa] hover:underline cursor-pointer text-left font-medium"
                  >
                    View Directory →
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 2: Platform & Software */}
            <div>
              <span className="block font-heading font-semibold text-xs uppercase tracking-wider text-[#60a5fa] mb-4">
                Software Suite
              </span>
              <ul className="space-y-2.5 font-body text-xs text-white/70">
                <li>
                  <button
                    onClick={() => handleNav("csky-app")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    CSky Desktop App
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-ide")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    CSky Studio IDE
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-cli")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Command-Line CLI
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-extensions")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    VSCode Extension
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("csky-sdk")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Python & TS SDKs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("docs")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    API Documentation
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Research & Foundations */}
            <div>
              <span className="block font-heading font-semibold text-xs uppercase tracking-wider text-[#60a5fa] mb-4">
                Scientific Research
              </span>
              <ul className="space-y-2.5 font-body text-xs text-white/70">
                <li>
                  <button
                    onClick={() => handleNav("research")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    arXiv Pre-Prints
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("models")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Benchmark Results
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("research")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Formal Proofs (Lean 4)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("use-cases")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <a
                    href="https://github.com/CSky-Developments/AI"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
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
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>Hugging Face Hub</span>
                    <span>↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Enterprise & Sovereignty */}
            <div>
              <span className="block font-heading font-semibold text-xs uppercase tracking-wider text-[#60a5fa] mb-4">
                Enterprise & Trust
              </span>
              <ul className="space-y-2.5 font-body text-xs text-white/70">
                <li>
                  <button
                    onClick={() => handleNav("pricing")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Compute & Pricing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("manifesto")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Sovereignty Manifesto
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("access")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Reserved GPU Clusters
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("manifesto")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Constitutional Safety
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("pricing")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Zero Retention SLA
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("access")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Early Access Program
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Bottom Legal & Attribution Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body text-white/50">
          <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
            <span>© 2026 CSky AI, Inc. All rights reserved.</span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="text-[#60a5fa]">॥ सत्यमेव जयते नानृतम् ॥</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => handleNav("pricing")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Inference
            </button>
            <button
              onClick={() => handleNav("manifesto")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Data Sovereignty
            </button>
            <a
              href="mailto:security@csky.ai"
              className="hover:text-white transition-colors"
            >
              Security Audits
            </a>
            <a
              href="https://github.com/CSky-Developments/AI"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors font-mono"
            >
              v1.0-main ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
