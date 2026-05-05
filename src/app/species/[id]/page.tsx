import React from 'react';
import Link from 'next/link';
import { getAnimalById } from '@/data/animals';
import { ArrowLeft, MapPin, Leaf, ShieldAlert, BadgeInfo } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function SpeciesDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const animal = getAnimalById(id);

  if (!animal) {
    notFound();
  }

  // Determine beautiful styling for conservation status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Kritis':
      case 'Telah Punah':
        return 'bg-[#7a3b3b] text-[#f2eee3]';
      case 'Genting':
      case 'Rentan':
        return 'bg-[#a37936] text-[#f2eee3]';
      case 'Resiko Rendah':
      case 'Hampir Terancam':
      default:
        return 'bg-[#485942] text-[#f2eee3]';
    }
  };

  // Helper map to convert room ID to display name
  const roomLabels: Record<string, string> = {
    'mamalia': 'Ruang Mamalia',
    'burung1': 'Ruang Burung I',
    'burung2': 'Ruang Burung II',
    'reptil': 'Reptil & Amfibi',
    'paus': 'Ruang Paus',
    'ikan': 'Ikan & Moluska',
    'serangga1': 'Serangga I',
    'serangga2': 'Serangga II'
  };

  return (
    <main className="min-h-screen bg-[#f9f7f4] text-[#3E352B] selection:bg-[#485942] selection:text-white pb-32">

      {/* Hero Header */}
      <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden bg-[#2b2a26]">
        <div 
          className="absolute inset-0 z-0 opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
          style={{ backgroundImage: `url(${animal.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#f9f7f4] via-[#f9f7f4]/60 to-transparent"></div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full px-8 md:px-16 pb-12 z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs tracking-[0.3em] font-bold text-[#485942] uppercase mb-4">
                {animal.category}
              </div>
              <h1 className="text-5xl md:text-7xl font-(family-name:--font-playfair) text-[#3E352B] mb-2 leading-tight">
                {animal.name}
              </h1>
              <p className="text-xl md:text-2xl font-serif italic text-[#6b675d]">
                {animal.scientificName}
              </p>
            </div>
            
            <div className={`px-6 py-3.5 rounded-sm flex items-center gap-3 w-fit shadow-md ${getStatusColor(animal.conservationStatus)}`}>
              <ShieldAlert size={18} />
              <span className="text-xs font-bold tracking-widest uppercase">
                Status: {animal.conservationStatus}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="px-8 md:px-16 mt-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
        
        {/* Left Column - Main Body */}
        <div className="lg:col-span-2">
          {/* Deskripsi */}
          <div className="mb-14">
            <h2 className="text-[#3E352B] uppercase tracking-[0.2em] font-semibold text-xs border-b border-[#d6cebc] pb-4 mb-6 relative">
              <span className="absolute -bottom-px left-0 w-12 border-b-2 border-[#485942]"></span>
              Deskripsi Spesies
            </h2>
            <p className="text-[17px] leading-relaxed text-[#5a574f]">
              {animal.description}
            </p>
          </div>

          {/* Habitat */}
          <div>
            <h2 className="text-[#3E352B] uppercase tracking-[0.2em] font-semibold text-xs border-b border-[#d6cebc] pb-4 mb-6 relative">
              <span className="absolute -bottom-px left-0 w-12 border-b-2 border-[#485942]"></span>
              Habitat Alami
            </h2>
            <div className="flex items-start gap-5 text-[#5a574f] bg-[#ebe3d5]/40 p-6 md:p-8 border border-[#d6cebc]">
              <Leaf className="mt-1 shrink-0 text-[#485942]" size={24} />
              <p className="text-[17px] leading-relaxed">
                {animal.habitat}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar Stats */}
        <div className="space-y-8 pt-2">
          {/* Lokasi Museum */}
          <div className="bg-[#f0eadc] p-8 md:p-10 border border-[#d6cebc] flex flex-col items-center text-center group transition-colors hover:bg-[#ebe3d5]">
            <div className="w-16 h-16 rounded-full bg-[#3E352B] text-[#f2eee3] flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-1 transition-transform">
              <MapPin size={24} />
            </div>
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-[#8b877d] mb-3">Lokasi Pameran</h3>
            <p className="text-2xl font-(family-name:--font-playfair) text-[#3E352B] mb-8">
              {roomLabels[animal.room] || animal.room}
            </p>
            <Link href={`/denah`} className="text-xs tracking-[0.1em] border-b border-[#3E352B]/40 pb-1 font-semibold uppercase text-[#3E352B] hover:text-[#485942] hover:border-[#485942] transition-colors flex items-center gap-2">
              Lihat di Denah
            </Link>
          </div>

          {/* Fakta Unik */}
          <div className="bg-[#485942] text-[#f2eee3] p-8 md:p-10 shadow-md">
            <div className="flex items-center gap-3 mb-6 opacity-70">
              <BadgeInfo size={20} />
              <h3 className="text-[10px] uppercase tracking-widest font-bold">Fakta Unik</h3>
            </div>
            <p className="text-xl leading-relaxed italic font-(family-name:--font-playfair) font-light">
              "{animal.funFact}"
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
