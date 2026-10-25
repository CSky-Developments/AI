"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import gsap from "gsap";

function AnimatedStat({
  value,
  suffix,
  label,
  trend,
  subtext,
}: {
  value: number;
  suffix: string;
  label: string;
  trend: string;
  subtext: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const counter = { val: 0 };
          gsap.to(counter, {
            val: value,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              setDisplayValue(Math.round(counter.val));
            },
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={containerRef} className="card-premium h-full rounded-3xl p-8 text-left flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono font-medium text-[#64748B]">
            {label}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-heading font-semibold border border-emerald-200/60">
            {trend}
          </span>
        </div>

        <div className="font-heading font-bold text-5xl md:text-6xl text-[#0F1B2D] tracking-tight">
          {displayValue}
          <span className="text-[#2563eb]">{suffix}</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-[#F1F5F9] text-xs font-body text-[#64748B] leading-relaxed">
        {subtext}
      </div>
    </div>
  );
}

export function Proof() {
  const stats = [
    {
      target: 3,
      suffix: "×",
      label: "Decision Velocity",
      trend: "300% Acceleration",
      subtext: "Validated across complex distributed consensus & multi-step theorem verification.",
    },
    {
      target: 68,
      suffix: "%",
      label: "Compute Cost Reduction",
      trend: "-68% TCO",
      subtext: "FP8 quantized weights enable hosting 405B models on 4x H100 clusters vs closed APIs.",
    },
    {
      target: 100,
      suffix: "%",
      label: "Data Sovereignty",
      trend: "Zero Cloud Telemetry",
      subtext: "Weights run 100% locally or inside your private VPC with strict zero data retention.",
    },
  ];

  const citations = [
    {
      quote:
        "CSky Akash 405B transformed our quantitative alpha research. We verified our mathematical proofs in hours on our private cluster with zero model hallucination.",
      author: "Dr. Vikram K.",
      role: "Head of Quantitative Architecture",
      org: "Global Algorithmic Asset Management",
      badge: "405B On-Prem Verified",
    },
    {
      quote:
        "Deploying Vayu 8B locally across our autonomous edge fleet eliminated cloud latency completely. It runs sub-80ms inferences within a 5-watt envelope.",
      author: "Elena Rostova",
      role: "Lead Autonomous Systems Architect",
      org: "AeroSpace Robotics Lab",
      badge: "8B Edge Embedded",
    },
    {
      quote:
        "The ability to independently audit the FP8 kernels and Lean 4 proof trees gave our compliance and security council complete confidence to deploy.",
      author: "Marcus Chen",
      role: "Chief Technology Officer",
      org: "Enterprise Sovereign Cloud",
      badge: "Sovereign Audit Passed",
    },
  ];

  return (
    <section id="proof" className="py-24 md:py-32 bg-[#F8FAFE] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E8EDF2] text-xs font-heading font-medium text-[#2563eb] mb-3 shadow-2xs">
            <span>✦</span>
            <span>॥ प्रत्यक्ष प्रमाण ॥ · Verifiable Empirical Proof</span>
            <span>✦</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#0F1B2D] tracking-tight">
            Proven at production scale
          </h2>
        </div>

        {/* Key numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 100}>
              <AnimatedStat
                value={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                trend={stat.trend}
                subtext={stat.subtext}
              />
            </FadeIn>
          ))}
        </div>

        {/* Verifiable Enterprise Testimonials */}
        <div className="mt-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-heading font-semibold text-[#2563eb] uppercase tracking-wider">
              Field Reports
            </span>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#0F1B2D] mt-2">
              From engineering teams running CSky
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {citations.map((item, index) => (
              <FadeIn key={item.author} delay={index * 120}>
                <div className="card-premium h-full rounded-3xl p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading text-3xl text-[#2563eb] leading-none select-none">
                        “
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563eb] text-[10px] font-heading font-semibold">
                        {item.badge}
                      </span>
                    </div>

                    <p className="font-body text-[#1E293B] leading-relaxed text-sm md:text-base">
                      {item.quote}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#F1F5F9]">
                    <div className="font-heading font-bold text-sm text-[#0F1B2D]">
                      {item.author}
                    </div>
                    <div className="font-body text-xs text-[#2563eb] font-medium mt-0.5">
                      {item.role}
                    </div>
                    <div className="font-body text-[11px] text-[#64748B] mt-0.5">
                      {item.org}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
