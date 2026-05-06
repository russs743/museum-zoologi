'use client';

import React, { useState } from 'react';
import { AnimalData } from '@/types/animal';
import AnimalCard from '@/components/ui/AnimalCard';
import { Search } from 'lucide-react';

interface CategoryGalleryClientProps {
  animals: AnimalData[];
  categoryTitle: string;
}

export default function CategoryGalleryClient({ animals, categoryTitle }: CategoryGalleryClientProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAnimals = animals.filter((animal) => {
    const query = searchQuery.toLowerCase();
    return (
      animal.name.toLowerCase().includes(query) ||
      animal.scientificName.toLowerCase().includes(query)
    );
  });

  return (
    <div className="w-full">
      <div className="mb-10 relative max-w-md">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search size={18} className="text-[#8b877d]" />
        </div>
        <input
          type="text"
          placeholder={`Cari spesies ${categoryTitle.toLowerCase()}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-[#ebe3d5]/40 border border-[#d6cebc] rounded-none focus:outline-none focus:ring-1 focus:ring-[#4a5942] focus:border-[#4a5942] transition-colors placeholder:text-[#8b877d]/70 text-[#3E352B]"
        />
      </div>

      {filteredAnimals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed border-[#d6cebc]">
          <p className="text-[#8b877d] italic">
            {searchQuery ? `Tidak ada hasil pencarian untuk "${searchQuery}".` : 'Koleksi untuk kategori ini belum tersedia.'}
          </p>
        </div>
      )}
    </div>
  );
}
