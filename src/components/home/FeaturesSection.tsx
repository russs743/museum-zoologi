import React from 'react';
import { LayoutGrid, Map, Clock, Compass } from 'lucide-react';
import Link from 'next/link';

export default function FeaturesSection() {
  return (
    <section className="px-8 md:px-16 py-24 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <h2 className="text-4xl md:text-[2.75rem] font-(family-name:--font-playfair) max-w-sm leading-tight text-[#3E352B]">
          Apa yang bisa<br />kamu lakukan
        </h2>
        <p className="max-w-md text-[#6b675d] text-sm md:text-[15px] pt-4 md:pt-0 leading-relaxed md:pb-2">
          Dirancang untuk pelajar, peneliti, dan siapa pun yang penasaran tentang alam Indonesia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <Link href="/galeri" className="bg-white p-8 md:p-10 border border-[#e8dccb] hover:-translate-y-1 transition-transform duration-300 block">
          <span className="text-[#a8a192] text-sm mb-6 block tracking-widest">01</span>
          <div className="w-12 h-12 border border-[#e8dccb] flex items-center justify-center mb-10">
            <LayoutGrid size={20} className="text-[#3E352B]" strokeWidth={1.5} />
          </div>
          <h3 className="text-[1.35rem] font-(family-name:--font-playfair) mb-4 text-[#3E352B]">Galeri satwa</h3>
          <p className="text-[#6b675d] text-[15px] leading-relaxed">
            Browse koleksi foto satwa berdasarkan kategori — mamalia, burung, reptil, serangga, dan lainnya.
          </p>
        </Link>

        {/* Card 2 */}
        <Link href="/denah" className="bg-white p-8 md:p-10 border border-[#e8dccb] hover:-translate-y-1 transition-transform duration-300 block">
          <span className="text-[#a8a192] text-sm mb-6 block tracking-widest">02</span>
          <div className="w-12 h-12 border border-[#e8dccb] flex items-center justify-center mb-10">
            <Map size={20} className="text-[#3E352B]" strokeWidth={1.5} />
          </div>
          <h3 className="text-[1.35rem] font-(family-name:--font-playfair) mb-4 text-[#3E352B]">Denah interaktif</h3>
          <p className="text-[#6b675d] text-[15px] leading-relaxed">
            Klik ruangan di peta museum untuk melihat satwa-satwa apa saja yang ada di dalamnya.
          </p>
        </Link>

        {/* Card 3 */}
        <Link href="/kuis" className="bg-white p-8 md:p-10 border border-[#e8dccb] hover:-translate-y-1 transition-transform duration-300 block">
          <span className="text-[#a8a192] text-sm mb-6 block tracking-widest">03</span>
          <div className="w-12 h-12 border border-[#e8dccb] flex items-center justify-center mb-10">
            <Clock size={20} className="text-[#3E352B]" strokeWidth={1.5} />
          </div>
          <h3 className="text-[1.35rem] font-(family-name:--font-playfair) mb-4 text-[#3E352B]">Kuis trivia</h3>
          <p className="text-[#6b675d] text-[15px] leading-relaxed">
            Uji pengetahuanmu — tebak nama satwa dari foto, atau tebak foto dari nama latinnya.
          </p>
        </Link>

        {/* Card 4 */}
        <Link href="/tour" className="bg-white p-8 md:p-10 border border-[#e8dccb] hover:-translate-y-1 transition-transform duration-300 block">
          <span className="text-[#a8a192] text-sm mb-6 block tracking-widest">04</span>
          <div className="w-12 h-12 border border-[#e8dccb] flex items-center justify-center mb-10">
            <Compass size={20} className="text-[#3E352B]" strokeWidth={1.5} />
          </div>
          <h3 className="text-[1.35rem] font-(family-name:--font-playfair) mb-4 text-[#3E352B]">Virtual Tour</h3>
          <p className="text-[#6b675d] text-[15px] leading-relaxed">
            Jelajahi setiap sudut ruangan museum secara 360 derajat layaknya berada langsung di lokasi.
          </p>
        </Link>
      </div>
    </section>
  );
}
