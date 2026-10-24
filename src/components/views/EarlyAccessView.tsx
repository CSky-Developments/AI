"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedBarsBackground } from "@/components/AnimatedBarsBackground";

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
      q: "How are the weights distributed?",
      a: "All models are published on Hugging Face and available via direct magnet/HTTP mirrors in safe FP8, BF16, and GGUF quantized formats.",
    },
    {
      q: "Can I use CSky models for commercial purposes?",
      a: "Yes. Drishti (70B) and Vayu (8B) are licensed under Apache 2.0 with zero restrictions on commercial products. Akash (405B) is available under our open research license.",
    },
    {
      q: "Do you offer hosted inference?",
      a: "Yes. Early access partners receive complimentary hosted API keys to prototype before provisioning self-hosted hardware.",
    },
    {
      q: "How fast will my access request be reviewed?",
      a: "We review and approve batches twice weekly. Most applicants hear back within 48 to 72 hours.",
    },
  ];

  return (
    <div className="bg-[#F8FAFE] min-h-screen">
      {/* 1. GSAP-ANIMATED FLOWING BARS HERO (Full viewport, form below the fold) */}
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

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Application Form Card */}
        <FadeIn delay={100}>
          <div className="mt-12 bg-white rounded-3xl p-8 sm:p-12 border border-[#E8EDF2] shadow-sm">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#dbeafe] flex items-center justify-center mx-auto text-[#3b82f6] mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#0F1B2D]">
                  Application Received!
                </h3>
                <p className="font-body text-[#5A6B7F] mt-4 max-w-md mx-auto text-base">
                  Thank you, <span className="font-semibold text-[#0F1B2D]">{formData.name || "friend"}</span>. We&apos;ve sent a confirmation to <span className="text-[#3b82f6]">{formData.email}</span> with your initial setup guide.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs font-body font-medium text-[#3b82f6] hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm font-medium text-[#0F1B2D] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8EDF2] bg-[#F8FAFE] font-body text-sm text-[#0F1B2D] placeholder-[#8A95A5] focus:outline-none focus:border-[#3b82f6] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-[#0F1B2D] mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8EDF2] bg-[#F8FAFE] font-body text-sm text-[#0F1B2D] placeholder-[#8A95A5] focus:outline-none focus:border-[#3b82f6] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-[#0F1B2D] mb-2">
                    Company or Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Labs / University"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8EDF2] bg-[#F8FAFE] font-body text-sm text-[#0F1B2D] placeholder-[#8A95A5] focus:outline-none focus:border-[#3b82f6] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-[#0F1B2D] mb-3">
                    What are you looking to use or test?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {["Akash (405B)", "Drishti (70B)", "Vayu (8B)"].map((opt) => {
                      const selected = formData.interests.includes(opt);
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => handleInterestToggle(opt)}
                          className={`px-4 py-3 rounded-xl border text-left font-body text-xs sm:text-sm font-medium transition-all ${
                            selected
                              ? "bg-[#E8F0FE] border-[#3b82f6] text-[#0F1B2D]"
                              : "bg-[#F8FAFE] border-[#E8EDF2] text-[#5A6B7F] hover:border-[#8A95A5]"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-[#0F1B2D] mb-2">
                    Briefly describe your project or workload
                  </label>
                  <textarea
                    rows={3}
                    placeholder="We're evaluating open-weight models for self-hosted customer support and technical synthesis..."
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8EDF2] bg-[#F8FAFE] font-body text-sm text-[#0F1B2D] placeholder-[#8A95A5] focus:outline-none focus:border-[#3b82f6] transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-[#3b82f6] text-white font-body font-medium text-base rounded-full px-9 py-4 hover:bg-[#1e40af] transition-all shadow-sm hover:shadow"
                  >
                    Request early access
                  </button>
                </div>
              </form>
            )}
          </div>
        </FadeIn>

        {/* FAQs */}
        <div className="mt-24">
          <FadeIn>
            <h2 className="font-heading font-bold text-2xl text-[#0F1B2D] text-center mb-10">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-[#E8EDF2]">
                  <h3 className="font-heading font-semibold text-base text-[#0F1B2D]">
                    {faq.q}
                  </h3>
                  <p className="font-body text-sm text-[#5A6B7F] mt-2 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
