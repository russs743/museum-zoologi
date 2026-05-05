import React from 'react';
import Link from 'next/link';

export default function HeroInfo() {
  return (
    <div className="flex flex-col justify-center h-full py-12">
       {/* Top Tag */}
       <div className="flex items-center gap-4 mb-10">
         <div className="w-10 h-px bg-[#3E352B]"></div>
         <span className="text-[#3E352B] tracking-[0.2em] text-[10px] font-semibold uppercase">
           Sejak 1894 — Kebun Raya Bogor
         </span>
       </div>
       
       {/* Headings */}
       <h1 className="text-6xl lg:text-[5.5rem] leading-none font-(family-name:--font-playfair) text-[#3E352B] mb-2 font-medium tracking-tight">
         Mengenal<br/>fauna<br/>
         <span className="italic text-[#485942] font-normal">nusantara</span>
       </h1>
       <h2 className="text-2xl lg:text-3xl font-(family-name:--font-playfair) italic text-[#8c887e] mt-6 mb-10">
         Koleksi terlengkap di Asia Tenggara
       </h2>
       
       {/* Description */}
       <p className="text-[#6b675d] leading-relaxed max-w-sm mb-12 text-[15px]">
         Jelajahi ribuan spesimen satwa dari seluruh kepulauan Indonesia — dari burung cendrawasih Papua hingga badak Sumatera yang langka.
       </p>
       
       {/* Buttons */}
       <div className="flex flex-wrap gap-4 mb-16">
         <Link href="/tour" className="flex flex-col items-center justify-center w-36 py-4 bg-[#3E352B] text-white rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#4a5942] transition-all duration-300 shadow-xl shadow-black/10">
            <span>Virtual</span>
            <span>Museum</span>
            <span>Tour</span>
          </Link>
          <Link href="/galeri" className="flex flex-col items-center justify-center w-36 py-4 border border-[#3E352B]/20 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#3E352B] hover:text-[#f3efe8] transition-colors duration-300">
            <span>Galeri</span>
            <span>Satwa</span>
          </Link>
          <Link href="/denah" className="flex flex-col items-center justify-center w-36 py-4 border border-[#3E352B]/20 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#3E352B] hover:text-[#f3efe8] transition-colors duration-300">
            <span>Eksplorasi</span>
            <span>denah</span>
          </Link>
       </div>
       
       <div className="w-full h-px bg-[#3E352B]/10 mb-10 max-w-md"></div>
       
       {/* Stats */}
       <div className="flex gap-10 sm:gap-14 text-[#3E352B]">
         <div>
           <div className="text-3xl lg:text-4xl font-(family-name:--font-playfair) font-bold mb-2">30rb+</div>
           <div className="text-[10px] tracking-[0.15em] uppercase font-bold text-[#8b877d]">Spesimen</div>
         </div>
         <div>
           <div className="text-3xl lg:text-4xl font-(family-name:--font-playfair) font-bold mb-2">8</div>
           <div className="text-[10px] tracking-[0.15em] uppercase font-bold text-[#8b877d]">Ruang<br/>Pameran</div>
         </div>
         <div>
           <div className="text-3xl lg:text-4xl font-(family-name:--font-playfair) font-bold mb-2">130</div>
           <div className="text-[10px] tracking-[0.15em] uppercase font-bold text-[#8b877d]">Tahun<br/>Berdiri</div>
         </div>
       </div>
    </div>
  );
}
