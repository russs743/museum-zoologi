'use client';

import React, { useState } from 'react';
import { X, ArrowUpRight, ArrowUp } from 'lucide-react';
import Link from 'next/link';

import { getAnimalsByRoom } from '@/data/animals';
import AnimalCard from '@/components/ui/AnimalCard';

const ROOMS = [
  // Pameran
  { id: 'burung2', label: 'RUANG BURUNG II', pameran: true, style: { left: '4%', top: '5%', width: '32%', height: '25%' } },
  { id: 'burung1', label: 'RUANG BURUNG I', split: ['RUANG', 'BURUNG I'], pameran: true, style: { left: '4%', top: '32%', width: '26%', height: '39%' } },
  { id: 'mamalia', label: 'RUANG MAMALIA', split: ['RUANG', 'MAMALIA'], pameran: true, style: { left: '38%', top: '5%', width: '18%', height: '66%' } },
  { id: 'serangga1', label: 'SERANGGA I', split: ['SERANGGA', 'I'], pameran: true, style: { left: '58%', top: '5%', width: '10%', height: '15%' } },
  { id: 'serangga2', label: 'SERANGGA II', split: ['SERANGGA', 'II'], pameran: true, style: { left: '70%', top: '5%', width: '12%', height: '15%' } },
  { id: 'reptil', label: 'REPTIL & AMFIBI', split: ['REPTIL &', 'AMFIBI'], pameran: true, style: { left: '58%', top: '22%', width: '24%', height: '25%' } },
  { id: 'paus', label: 'RUANG PAUS', split: ['RUANG', 'PAUS'], pameran: true, style: { left: '58%', top: '49%', width: '10%', height: '22%' } },
  { id: 'ikan', label: 'IKAN & MOLUSKA', split: ['IKAN &', 'MOLUSKA'], pameran: true, style: { left: '84%', top: '5%', width: '12%', height: '42%' } },
  
  // Non-pameran & Pintu
  { id: 'pintu', label: 'PINTU MASUK', split: ['PINTU', 'MASUK'], pameran: false, isPintu: true, style: { left: '32%', top: '32%', width: '4%', height: '56%' } },
  { id: 'temporer', label: 'RUANG TEMPORER', pameran: false, style: { left: '4%', top: '73%', width: '26%', height: '15%' } },
  { id: 'petugas', label: 'RUANG PETUGAS', pameran: false, style: { left: '38%', top: '73%', width: '18%', height: '15%' } },
  { id: 'pengembangan', label: 'RUANG PENGEMBANGAN', split: ['RUANG', 'PENGEMBANGAN'], pameran: false, style: { left: '70%', top: '49%', width: '26%', height: '22%' } },
  { id: 'toilet', label: 'TOILET', pameran: false, style: { left: '70%', top: '73%', width: '26%', height: '8%' } },
];

export default function InteractiveMap() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const activeAnimals = selectedRoom ? getAnimalsByRoom(selectedRoom) : [];

  return (
    <section className="px-4 md:px-8 py-8 md:py-10 max-w-[1700px] mx-auto w-full bg-transparent flex flex-col">
      <div className="mb-8 lg:mb-10">
        <h2 className="text-3xl md:text-[2.75rem] font-(family-name:--font-playfair) text-[#3E352B] mb-2 md:mb-4">
          Denah interaktif
        </h2>
        <p className="text-[#8b877d] text-[15px]">
          Klik ruangan untuk melihat koleksi satwa di dalamnya.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:border lg:border-[#d6cebc] lg:bg-[#f6f2e8] flex-1">
        {/* Map Container */}
        <div className={`w-full lg:p-6 transition-all duration-500 ease-in-out ${selectedRoom ? 'lg:w-[65%] xl:w-[70%]' : 'lg:w-full'}`}>
          <div className="text-center mb-6 text-[#8b877d] text-sm tracking-wide">Pilih ruangan untuk mulai</div>
          
          <div className="relative w-full h-[65vh] sm:h-[70vh] lg:h-[75vh] min-h-[500px] bg-[#f2eee3] border border-[#d6cebc] p-2">
            {ROOMS.map((room) => {
              const isActive = selectedRoom === room.id;
              
              let bgClass = "bg-[#fbf9f4]"; // Pameran default
              if (!room.pameran) bgClass = "bg-[#d4cdbf]"; // Non-pameran
              if (isActive) bgClass = "bg-[#4a5942]"; // Selected

              let textClass = "text-[#6b675d]";
              if (isActive) textClass = "text-[#f2eee3]";
              
              return (
                <div
                  key={room.id}
                  onClick={() => room.pameran && setSelectedRoom(room.id)}
                  className={`absolute border border-[#d6cebc] flex flex-col items-center justify-center transition-colors duration-300 ${bgClass} ${textClass} ${room.pameran ? 'cursor-pointer hover:bg-[#eae4d3]' : 'cursor-default'} ${isActive ? 'hover:bg-[#4a5942] border-[#4a5942]' : ''}`}
                  style={{...room.style, padding: '4px'}}
                >
                  {room.isPintu && <ArrowUp size={16} className="mb-2" />}
                  {room.split ? (
                    <div className="text-center">
                      {room.split.map((line, i) => (
                        <div key={i} className={`text-[7px] sm:text-[9px] md:text-[10px] uppercase font-medium leading-tight ${room.isPintu ? 'tracking-tighter' : 'tracking-wide'}`}>{line}</div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-[7px] sm:text-[9px] md:text-[10px] uppercase font-medium text-center tracking-wide">{room.label}</div>
                  )}
                </div>
              );
            })}

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 flex gap-4 text-[10px] md:text-xs text-[#8b877d]">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#4a5942]"></div>Dipilih</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#fbf9f4] border border-[#d6cebc]"></div>Ruang pameran</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#d4cdbf] border border-[#d6cebc]"></div>Non-pameran</div>
            </div>
          </div>
        </div>

        {/* Sidebar Panel */}
        {selectedRoom && (
          <div className="w-full lg:w-[40%] xl:w-[35%] lg:border-l lg:border-[#d6cebc] lg:bg-[#f6f2e8] p-6 md:p-8 animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-[10px] tracking-[0.15em] font-semibold text-[#8b877d] uppercase mb-1">
                  Koleksi Satwa
                </p>
                <h3 className="text-2xl font-(family-name:--font-playfair) text-[#3E352B]">
                  {ROOMS.find(r => r.id === selectedRoom)?.label || 'Ruangan Belum Tersedia'}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedRoom(null)}
                className="w-8 h-8 flex items-center justify-center border border-[#d6cebc] rounded hover:bg-black/5 transition-colors"
              >
                <X size={18} className="text-[#3E352B]" />
              </button>
            </div>

            {activeAnimals && activeAnimals.length > 0 ? (
              <div className="flex flex-col h-[calc(100%-80px)]">
                <p className="text-xs text-[#8b877d] mb-4">{activeAnimals.length} koleksi satwa populer di ruangan ini</p>
                
                <div className="flex-1 overflow-y-auto pr-2 space-y-4 mb-6 scrollbar-thin pb-4">
                  {activeAnimals.map((animal) => (
                    <AnimalCard key={animal.id} animal={animal} />
                  ))}
                </div>

                <Link href={`/galeri?room=${selectedRoom}`} className="w-full flex items-center justify-center gap-2 py-4 border border-[#d6cebc] rounded text-xs font-semibold tracking-widest uppercase hover:bg-[#3E352B] hover:text-[#f3efe8] transition-colors text-[#3E352B]">
                  LIHAT SEMUA DI GALERI
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            ) : (
              <div className="text-sm text-[#8b877d] p-4 border border-dashed border-[#d6cebc] text-center mt-6">
                Belum ada data koleksi yang tersedia untuk ruangan ini.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
