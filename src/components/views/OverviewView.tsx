import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { InteractiveCodeSection } from "@/components/InteractiveCodeSection";
import { StickyStackingCards } from "@/components/StickyStackingCards";
import { StickyScrollShowcase } from "@/components/StickyScrollShowcase";
import { BentoFeatures } from "@/components/BentoFeatures";
import { Proof } from "@/components/Proof";
import { Story } from "@/components/Story";
import { CallToAction } from "@/components/CallToAction";

interface OverviewViewProps {
  onNavigate: (tab: string) => void;
}

export function OverviewView({ onNavigate }: OverviewViewProps) {
  return (
    <>
      {/* 1. Hero (Untouched, pristine) */}
      <Hero onGetStarted={() => onNavigate("access")} />

      {/* 2. Top-Visual Feature Cards (Inspired by Reference Cards Screenshot 2026-10-25 111309.png) */}
      <WhatWeDo />

      {/* 3. Interactive Code & SDK Platform Showcase (Inspired by Reference Screenshot 2026-10-25 111339.png) */}
      <InteractiveCodeSection onGetStarted={() => onNavigate("access")} />

      {/* 4. Card Overlap Scroll Animation (Inspired by Reference "Card Overlap scroll animation") */}
      <StickyStackingCards onNavigate={onNavigate} />

      {/* 5. Sticky Side-Nav & Scrolling Showcase (Inspired by Reference "Section scrolling animation...") */}
      <StickyScrollShowcase />

      {/* 6. Asymmetric Bento Grid & Constellations (Inspired by Reference Cards Screenshots 111558, 111608, 111614) */}
      <BentoFeatures />

      {/* 7. Quantitative Impact Proof & Verified Stats */}
      <Proof />

      {/* 8. Open Sky Clarity Principle & Story */}
      <Story onReadManifesto={() => onNavigate("manifesto")} />

      {/* 9. Sovereign Call to Action */}
      <CallToAction
        onGetEarlyAccess={() => onNavigate("access")}
        onNavigate={onNavigate}
      />
    </>
  );
}
