import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { animalsData } from '@/data/animals';
import AnimalCard from '@/components/ui/AnimalCard';
import { ArrowLeft } from 'lucide-react';

const CATEGORY_MAP: Record<string, string> = {
  'mamalia': 'MAMALIA',
  'burung': 'BURUNG',
  'reptil': 'REPTIL & AMFIBI',
  'ikan': 'IKAN',
  'invertebrata': 'INVERTEBRATA'
};

const CATEGORY_TITLES: Record<string, { title: string, subtitle: string }> = {
  'mamalia': { title: 'Mamalia', subtitle: 'Sang Penjaga Daratan' },
  'burung': { title: 'Burung', subtitle: 'Simfoni Sayap Nusantara' },
  'reptil': { title: 'Reptil & Amfibi', subtitle: 'Warisan Purba' },
  'ikan': { title: 'Ikan', subtitle: 'Misteri Kedalaman' },
  'invertebrata': { title: 'Invertebrata', subtitle: 'Raksasa Kecil' }
};

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const catKey = resolvedParams.category.toLowerCase();
  const dbCategory = CATEGORY_MAP[catKey];
  
  if (!dbCategory) {
    notFound();
  }

  const categoryInfo = CATEGORY_TITLES[catKey];
  const animals = animalsData.filter(a => a.category === dbCategory);

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#f9f7f4] text-[#3E352B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link href="/galeri" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#8b877d] hover:text-[#4a5942] transition-colors mb-12">
          <ArrowLeft size={16} />
          Kembali ke Galeri
        </Link>

        <header className="mb-16 border-b border-[#d6cebc] pb-10">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#4a5942] block mb-4">{categoryInfo.subtitle}</span>
          <h1 className="font-[--font-playfair] text-5xl md:text-7xl lg:text-8xl text-[#3E352B] mb-6">
            {categoryInfo.title}
          </h1>
          <p className="text-[#8b877d] max-w-2xl text-lg leading-relaxed">
            Menampilkan koleksi {animals.length} spesies {categoryInfo.title.toLowerCase()} yang tersimpan dalam arsip Museum Zoologi Bogor.
          </p>
        </header>

        {animals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {animals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-[#d6cebc]">
            <p className="text-[#8b877d] italic">Koleksi untuk kategori ini belum tersedia.</p>
          </div>
        )}
      </div>
    </main>
  );
}
