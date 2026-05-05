import React from "react";

import HeroLight from "./home/HeroLight";
import FeaturesSection from "./home/FeaturesSection";
import AboutSection from "./home/AboutSection";

export default function Landing() {
  return (
    <div className="bg-[#f2eee3] text-[#33312b] font-sans selection:bg-[#485942] selection:text-white pb-10 overflow-x-hidden">
      {/* Hero Section */}
      <HeroLight />

      {/* Apa yang bisa kamu lakukan */}
      <FeaturesSection />

      {/* Tentang Museum Section */}
      <AboutSection />

      {/* Simple Footer directly from image */}
      <footer className="px-8 md:px-16 py-8 mt-12 max-w-7xl mx-auto flex justify-between items-center text-sm text-[#7a776f] border-t border-black/10">
        <div>Museum Zoologi Bogor</div>
        <div>All rights reserved &copy; 2026</div>
      </footer>
    </div>
  );
}
