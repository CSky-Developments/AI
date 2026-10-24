"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { OverviewView } from "@/components/views/OverviewView";
import { ModelsView } from "@/components/views/ModelsView";
import { ManifestoView } from "@/components/views/ManifestoView";
import { EarlyAccessView } from "@/components/views/EarlyAccessView";
import { ProductView } from "@/components/views/ProductView";
import { PRODUCTS_DATA } from "@/data/products";
import { Footer } from "@/components/Footer";

const KNOWN_TABS = [
  "overview",
  "models",
  "manifesto",
  "access",
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
  const [animating, setAnimating] = useState(false);

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

  const handleSelectTab = (tabId: string) => {
    if (tabId === activeTab) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(tabId);
      window.history.pushState(null, "", `#${tabId}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setAnimating(false);
    }, 120);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFE] text-[#0F1B2D]">
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />

      <main
        className={`flex-1 transition-opacity duration-200 ease-in-out ${
          animating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
        }`}
      >
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
