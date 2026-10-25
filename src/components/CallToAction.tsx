"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { LotusMandalaWatermark } from "@/components/TraditionalSymbols";

export function CallToAction({
  onGetEarlyAccess,
  onNavigate,
}: {
  onGetEarlyAccess?: () => void;
  onNavigate?: (tab: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <section id="cta" className="py-24 md:py-32 bg-[#F8FAFE] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div
            className="rounded-3xl p-10 sm:p-14 md:p-20 text-center border border-[#E8EDF2] shadow-xl relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #EFF6FF 0%, #DBEAFE 100%)",
            }}
          >
            {/* Subtle traditional celestial lotus watermark in background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06] transform scale-150">
              <LotusMandalaWatermark size={500} color="#2563eb" />
            </div>

            {/* Subtle light ambient glow */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/50 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#E2E8F0] shadow-xs mb-6 text-xs font-heading font-medium text-[#2563eb]">
                <span>✦</span>
                <span>॥ अनंत आकाश ॥ · Start Building Under an Open Sky</span>
                <span>✦</span>
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#0F1B2D] tracking-tight">
                Ready to see further?
              </h2>
              <p className="font-body text-base sm:text-lg text-[#475569] mt-4 leading-relaxed">
                Join forward-thinking engineers and research labs currently running CSky open-weight foundation models.
              </p>

              {/* Quick Early Access Request Form */}
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  disabled={status === "success"}
                  className="w-full px-5 py-3.5 rounded-full bg-white text-sm font-body text-[#0F1B2D] border border-[#CBD5E1] placeholder:text-[#94A3B8] focus:outline-hidden focus:ring-2 focus:ring-[#2563eb] shadow-xs"
                />
                <button
                  data-magnetic
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center bg-[#2563eb] text-white font-body font-medium rounded-full px-8 py-3.5 hover:bg-[#1d4ed8] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer disabled:opacity-80"
                >
                  {status === "submitting" ? "Registering..." : status === "success" ? "Access Reserved ✓" : "Request Key"}
                </button>
              </form>

              {status === "success" && (
                <p className="mt-3 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-full py-1 px-4 inline-block">
                  ✦ Priority invite confirmed. Check your inbox for vLLM & Ollama cluster credentials.
                </p>
              )}

              {/* Quick Action Links */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-heading font-medium text-[#475569]">
                <button
                  onClick={() =>
                    onGetEarlyAccess
                      ? onGetEarlyAccess()
                      : window.location.assign("mailto:access@csky.ai")
                  }
                  className="hover:text-[#2563eb] transition-colors cursor-pointer"
                >
                  Direct Email Access →
                </button>
                <span className="text-[#94A3B8]">•</span>
                <button
                  onClick={() => onNavigate?.("docs")}
                  className="hover:text-[#2563eb] transition-colors cursor-pointer"
                >
                  Explore Developer Docs →
                </button>
                <span className="text-[#94A3B8]">•</span>
                <button
                  onClick={() => onNavigate?.("pricing")}
                  className="hover:text-[#2563eb] transition-colors cursor-pointer"
                >
                  Calculate Compute Costs →
                </button>
              </div>

              {/* Badges */}
              <div className="mt-8 pt-6 border-t border-[#CBD5E1]/40 flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Apache 2.0 Permissive Weights
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                  Zero Telemetry or Data Mining
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Air-Gapped Deployment
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
