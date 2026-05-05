import React from 'react';
import HeroInfo from './HeroInfo';
import HeroGallery from './HeroGallery';

export default function HeroLight() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-8 md:px-16 min-h-screen flex flex-col pt-24 pb-16">
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_1fr] relative">
        {/* Divider Tengah */}
        <div className="absolute top-0 -bottom-16 left-1/2 -translate-x-1/2 w-px bg-[#3E352B]/10 hidden lg:block"></div>
        
        {/* Kolom Kiri */}
        <div className="lg:pr-16 xl:pr-24 z-10 relative">
          <HeroInfo />
        </div>

        {/* Kolom Kanan */}
        <div className="lg:pl-8 xl:pl-16 z-10 mt-16 lg:mt-0 relative">
          <HeroGallery />
        </div>
      </div>

    </section>
  );
}
