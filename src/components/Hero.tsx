"use client";

import { useEffect, useState } from "react";
import { AnimatedBarsBackground } from "@/components/AnimatedBarsBackground";

const HERO_PHRASES = [
  "See further.",
  "Reason clearly.",
  "Decide boldly.",
  "Build in the open.",
  "Think freely.",
  "Inspect the weights.",
];

export function Hero({ onGetStarted }: { onGetStarted?: () => void }) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = HERO_PHRASES[currentPhraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing phase
      if (displayText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 85);
      } else {
        // Pause at full word before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2400);
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, 40);
      } else {
        // Move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % HERO_PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* GSAP-Animated Real Flowing Fluted Glass Bars with Dynamic Variations */}
      <AnimatedBarsBackground theme="overview" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle Celestial Sanskrit Motto Accent */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-[#E2E8F0] shadow-xs mb-6 text-xs font-body font-medium text-[#475569]">
          <span className="text-[#1d4ed8]">✦</span>
          <span>॥ अनंत आकाश ॥ &middot; The Open Intelligence Horizon</span>
          <span className="text-[#1d4ed8]">✦</span>
        </div>

        {/* Dynamic Typing Headline (Locked strictly to single line) */}
        <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-[#0F1B2D] leading-[1.1] min-h-[1.2em] whitespace-nowrap flex items-center justify-center">
          <span>{displayText}</span>
          <span className="inline-block w-[3px] sm:w-[4px] md:w-[5px] h-[0.85em] bg-[#2563eb] ml-2 animate-pulse rounded-full" />
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg sm:text-xl md:text-2xl text-[#334155] mt-8 max-w-2xl mx-auto leading-relaxed font-normal">
          CSky builds transparent, open-weight AI models and developer tools — designed to give your team unmatched analytical clarity.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => (onGetStarted ? onGetStarted() : window.location.assign("#cta"))}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1e40af] text-white font-body font-medium text-base rounded-full px-9 py-4 hover:bg-[#1e3a8a] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            Get early access
          </button>
          <a
            href="#models"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "#models";
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/80 hover:bg-white text-[#0F1B2D] font-body font-medium text-base rounded-full px-8 py-4 border border-[#E2E8F0] backdrop-blur-md transition-all duration-300 shadow-xs hover:shadow cursor-pointer"
          >
            Explore our models →
          </a>
        </div>
      </div>
    </section>
  );
}
