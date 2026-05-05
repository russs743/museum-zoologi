import React from 'react';

function ShowcaseCard({ 
  category, 
  title, 
  scientific, 
  dotColor,
  tall = false 
}: { 
  category: string; 
  title: string; 
  scientific: string;
  dotColor: string;
  tall?: boolean;
}) {
  return (
    <div className={`relative border border-[#d8cfbc] bg-[#ebe3d5] p-6 flex flex-col ${tall ? 'min-h-[280px]' : 'min-h-[160px]'} w-full max-w-[220px] transition-transform duration-300 hover:-translate-y-1`}>
      <div className="mb-4">
        <div className="text-[10px] tracking-[0.15em] uppercase font-bold text-[#8b877d] mb-4">
          {category}
        </div>
        <h3 className="text-xl font-(family-name:--font-playfair) text-[#3E352B] mb-1">{title}</h3>
        <p className="text-xs italic text-[#8b877d]">{scientific}</p>
      </div>
      
      {/* Circle Icon */}
      <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
        <div className={`w-2.5 h-2.5 rounded-full ${dotColor}`}></div>
      </div>
    </div>
  );
}

export default function HeroGallery() {
  return (
    <div className="flex justify-center items-center h-full w-full lg:pl-12 py-12">
      <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-lg w-full">
        {/* Kolom Kiri */}
        <div className="flex flex-col gap-4 lg:gap-6 mt-16 lg:mt-24 items-end">
          <ShowcaseCard 
            category="Mamalia"
            title="Badak Sumatera"
            scientific="Dicerorhinus sumatrensis"
            dotColor="bg-[#6b5541]"
            tall={true}
          />
          <ShowcaseCard 
            category="Mamalia Laut"
            title="Paus Biru"
            scientific="Balaenoptera musculus"
            dotColor="bg-[#787a71]"
          />
        </div>
        
        {/* Kolom Kanan */}
        <div className="flex flex-col gap-4 lg:gap-6 items-start">
          <ShowcaseCard 
            category="Burung"
            title="Cendrawasih"
            scientific="Paradisaeidae apoda"
            dotColor="bg-[#6b8256]"
          />
          <ShowcaseCard 
            category="Reptil"
            title="Komodo"
            scientific="Varanus komodoensis"
            dotColor="bg-[#415433]"
          />
        </div>
      </div>
    </div>
  );
}
