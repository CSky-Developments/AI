"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Navbar } from "@/components/Navbar";
import { OverviewView } from "@/components/views/OverviewView";
import { ModelsView } from "@/components/views/ModelsView";
import { ManifestoView } from "@/components/views/ManifestoView";
import { EarlyAccessView } from "@/components/views/EarlyAccessView";
import { ProductView } from "@/components/views/ProductView";
import { PricingView } from "@/components/views/PricingView";
import { ResearchView } from "@/components/views/ResearchView";
import { DocsView } from "@/components/views/DocsView";
import { UseCasesView } from "@/components/views/UseCasesView";
import { PRODUCTS_DATA } from "@/data/products";
import { Footer } from "@/components/Footer";
import { InteractiveMotionController } from "@/components/InteractiveMotionController";

const KNOWN_TABS = [
  "overview",
  "models",
  "manifesto",
  "access",
  "pricing",
  "research",
  "docs",
  "use-cases",
  "csky-ultra",
  "csky-pro",
  "csky-nano",
  "csky-agni",
  "csky-prithvi",
  "csky-soma",
  "csky-ide",
  "csky-cli",
  "csky-app",
  "csky-extensions",
  "csky-sdk",
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const mainRef = useRef<HTMLElement>(null);

  // Sync with URL hash for browser history / back / forward button support
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (KNOWN_TABS.includes(hash)) {
        setActiveTab(hash);
      } else {
        setActiveTab("overview");
      }
    };

    parseHash();
    window.addEventListener("hashchange", parseHash);
    window.addEventListener("popstate", parseHash);

    return () => {
      window.removeEventListener("hashchange", parseHash);
      window.removeEventListener("popstate", parseHash);
    };
  }, []);

  // Butter-smooth GSAP page entrance on tab change
  useEffect(() => {
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0.7, y: 8 },
        { opacity: 1, y: 0, duration: 0.32, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  const handleSelectTab = (tabId: string) => {
    if (tabId === activeTab) return;
    setActiveTab(tabId);
    window.history.pushState(null, "", `#${tabId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFE] text-[#0F1B2D]">
      <InteractiveMotionController />
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />

      <main ref={mainRef} className="flex-1">
        {activeTab === "overview" && <OverviewView onNavigate={handleSelectTab} />}
        {activeTab === "models" && (
          <ModelsView
            onGetAccess={() => handleSelectTab("access")}
            onNavigate={handleSelectTab}
          />
        )}
        {activeTab === "manifesto" && (
          <ManifestoView onGetAccess={() => handleSelectTab("access")} />
        )}
        {activeTab === "access" && <EarlyAccessView />}
        {activeTab === "pricing" && <PricingView onNavigate={handleSelectTab} />}
        {activeTab === "research" && <ResearchView onNavigate={handleSelectTab} />}
        {activeTab === "docs" && <DocsView onNavigate={handleSelectTab} />}
        {activeTab === "use-cases" && <UseCasesView onNavigate={handleSelectTab} />}

        {/* Dedicated Product & Model Pages */}
        {PRODUCTS_DATA[activeTab] && (
          <ProductView
            product={PRODUCTS_DATA[activeTab]}
            onNavigate={handleSelectTab}
          />
        )}
      </main>

      <Footer onSelectTab={handleSelectTab} theme={activeTab} />
    </div>
  );
}
