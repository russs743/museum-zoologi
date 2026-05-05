import React from 'react';
import Link from 'next/link';
import { AnimalData } from '@/types/animal';

interface AnimalCardProps {
  animal: AnimalData;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <Link 
      href={`/species/${animal.id}`}
      className="relative overflow-hidden border border-[#d6cebc] bg-[#ebe3d5]/40 hover:border-[#3E352B]/30 hover:-translate-y-0.5 transition-all duration-500 cursor-pointer group flex flex-col justify-end"
    >
      {/* Background Image on Hover */}
      {animal.image && (
        <div 
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-700 ease-out"
          style={{
            backgroundImage: `url(${animal.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-[#ebe3d5]/85 mix-blend-multiply transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
        </div>
      )}

      {/* Foreground Content */}
      <div className="relative z-10 p-4">
        <div className="flex justify-between items-start mb-1">
          <div className="text-[10px] tracking-widest text-[#8b877d] group-hover:text-[#4a5942] group-hover:font-bold font-semibold uppercase transition-colors duration-300">
            {animal.category}
          </div>
        </div>
        
        <h3 className="font-(family-name:--font-playfair) text-xl text-[#3E352B] mb-0.5">
          {animal.name}
        </h3>
        
        <p className="text-sm italic text-[#8b877d] group-hover:text-[#3E352B]/80 transition-colors duration-300">
          {animal.scientificName}
        </p>
      </div>
    </Link>
  );
}
