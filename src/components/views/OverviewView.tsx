import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { HowItWorks } from "@/components/HowItWorks";
import { Proof } from "@/components/Proof";
import { Story } from "@/components/Story";
import { CallToAction } from "@/components/CallToAction";

interface OverviewViewProps {
  onNavigate: (tab: string) => void;
}

export function OverviewView({ onNavigate }: OverviewViewProps) {
  return (
    <>
      <Hero onGetStarted={() => onNavigate("access")} />
      <WhatWeDo />
      <HowItWorks />
      <Proof />
      <Story onReadManifesto={() => onNavigate("manifesto")} />
      <CallToAction
        onGetEarlyAccess={() => onNavigate("access")}
        onNavigate={onNavigate}
      />
    </>
  );
}
