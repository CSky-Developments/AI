import { FadeIn } from "@/components/FadeIn";
import {
  DrishtiSymbol,
  BuddhiYantraSymbol,
  SrishtiPadmaSymbol,
} from "@/components/TraditionalSymbols";

export function WhatWeDo() {
  const items = [
    {
      title: "See what matters",
      sanskrit: "दृष्टि · Clear Perception",
      description: "Cut through noise and surface the critical signals that drive your next strategic move.",
      icon: <DrishtiSymbol size={28} color="#2563eb" />,
    },
    {
      title: "Decide with confidence",
      sanskrit: "बुद्धि · Sound Judgment",
      description: "Get clear recommendations backed by auditable evidence and mathematical rationale, never guesswork.",
      icon: <BuddhiYantraSymbol size={28} color="#2563eb" />,
    },
    {
      title: "Build what's next",
      sanskrit: "सृष्टि · Open Creation",
      description: "Turn shared understanding into real momentum with open-weight tools that fit into your team's rhythm.",
      icon: <SrishtiPadmaSymbol size={28} color="#2563eb" />,
    },
  ];

  return (
    <section id="what-we-do" className="pt-24 pb-32 md:pt-32 md:pb-36 bg-[#F8FAFE]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#E8EDF2] text-xs font-heading font-medium text-[#2563eb] mb-3">
            <span>✦</span>
            <span>॥ दृष्टि &middot; बुद्धि &middot; सृष्टि ॥</span>
            <span>✦</span>
          </div>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#0F1B2D]">
            Outcomes over complexity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 120}>
              <div className="h-full bg-white rounded-3xl p-8 sm:p-9 border border-[#E8EDF2] shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#E8F0FE] flex items-center justify-center text-[#2563eb] shadow-2xs">
                  {item.icon}
                </div>
                <div className="text-xs font-heading font-medium text-[#2563eb] mt-5">
                  {item.sanskrit}
                </div>
                <h3 className="font-heading text-xl font-semibold mt-1 text-[#0F1B2D]">
                  {item.title}
                </h3>
                <p className="font-body text-[#5A6B7F] mt-3 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
