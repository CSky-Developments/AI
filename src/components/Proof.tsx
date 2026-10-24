"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import gsap from "gsap";

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
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
    <div ref={containerRef} className="p-4">
      <div className="font-heading font-bold text-5xl md:text-6xl text-[#3b82f6] tracking-tight">
        {displayValue}
        {suffix}
      </div>
      <div className="font-body text-[#5A6B7F] mt-2 text-sm md:text-base">
        {label}
      </div>
    </div>
  );
}

export function Proof() {
  const stats = [
    { target: 3, suffix: "×", label: "Faster decisions" },
    { target: 40, suffix: "%", label: "Less time spent on reports" },
    { target: 98, suffix: "%", label: "Recommend CSky for planning" },
  ];

  const testimonials = [
    {
      quote:
        "CSky made our quarterly planning feel effortless. We went from weeks of data wrangling to clear answers in a single afternoon.",
      author: "Sarah M.",
      role: "Head of Strategy",
    },
    {
      quote:
        "For the first time, everyone on the team is looking at the same picture. That clarity changes everything.",
      author: "David L.",
      role: "Chief Operating Officer",
    },
    {
      quote:
        "Simple, clear, and genuinely useful. It's the rare tool that reduces meetings instead of creating them.",
      author: "Priya K.",
      role: "Product Lead",
    },
  ];

  return (
    <section id="proof" className="py-24 md:py-32 bg-[#F8FAFE]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Key numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 100}>
              <AnimatedStat
                value={stat.target}
                suffix={stat.suffix}
                label={stat.label}
              />
            </FadeIn>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8EDF2] text-xs font-heading font-medium text-[#2563eb] mb-3">
              <span>✦</span>
              <span>॥ प्रत्यक्ष प्रमाण ॥ · Verifiable Proof</span>
              <span>✦</span>
            </div>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-[#0F1B2D]">
              From teams already using CSky
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <FadeIn key={item.author} delay={index * 120}>
                <div className="h-full bg-white rounded-3xl p-8 border border-[#E8EDF2] shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-heading text-4xl text-[#3b82f6] leading-none block mb-4 select-none">
                      “
                    </span>
                    <p className="font-body text-[#0F1B2D] leading-relaxed text-sm md:text-base">
                      {item.quote}
                    </p>
                  </div>
                  {/* Note: Divider border line removed per user request */}
                  <div className="mt-8 pt-4">
                    <div className="font-body font-medium text-sm text-[#0F1B2D]">
                      {item.author}
                    </div>
                    <div className="font-body text-xs text-[#8A95A5] mt-0.5">
                      {item.role}
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
