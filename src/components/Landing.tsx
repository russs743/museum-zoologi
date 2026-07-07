import React from "react";

import FeaturesSection from "./home/FeaturesSection";

export default function Landing() {
  return (
    <div className="bg-[#f2eee3] text-[#33312b] font-sans selection:bg-[#485942] selection:text-white min-h-screen flex flex-col pt-24 pb-10 overflow-x-hidden">
      
      {/* Apa yang bisa kamu lakukan */}
      <div className="flex-grow flex items-center">
        <FeaturesSection />
      </div>

      {/* Simple Footer directly from image */}
      <footer className="px-8 md:px-16 py-8 mt-12 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#7a776f] border-t border-black/10">
        <div>Museum Zoologi Bogor</div>
        <div>All rights reserved &copy; 2026</div>
      </footer>
    </div>
  );
}
