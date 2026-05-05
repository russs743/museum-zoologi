'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MoveUpRight, Sparkles, Map as MapIcon, Info } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: 'mamalia',
    label: 'Mamalia',
    slug: '/galeri/mamalia',
    tagline: 'Sang Penjaga Daratan',
    description: 'Menelusuri jejak raksasa Sumatera hingga paus biru yang legendaris.',
    image: 'https://images.unsplash.com/photo-1564750699222-0a00afeb0e6a?auto=format&fit=crop&w=1200&q=80',
    number: '01',
    size: 'large', // card size configuration
  },
  {
    id: 'burung',
    label: 'Burung',
    slug: '/galeri/burung',
    tagline: 'Simfoni Sayap Nusantara',
    description: 'Dari keelokan Cenderawasih hingga kegagahan Elang Jawa.',
    image: 'https://images.unsplash.com/photo-1522915822365-ea6ed54feac6?auto=format&fit=crop&w=1200&q=80',
    number: '02',
    size: 'medium',
  },
  {
    id: 'reptil',
    label: 'Reptil',
    slug: '/galeri/reptil',
    tagline: 'Warisan Purba',
    description: 'Menyaksikan sisa-sisa naga terakhir di bumi dan kura-kura purba.',
    image: 'https://images.unsplash.com/photo-1601267866579-dd8bf81db969?auto=format&fit=crop&w=1200&q=80',
    number: '03',
    size: 'small',
  },
  {
    id: 'ikan',
    label: 'Ikan',
    slug: '/galeri/ikan',
    tagline: 'Misteri Kedalaman',
    description: 'Keajaiban bawah laut dari fosil hidup hingga ikan air tawar eksotis.',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=1200&q=80',
    number: '04',
    size: 'medium',
  },
  {
    id: 'invertebrata',
    label: 'Invertebrata',
    slug: '/galeri/invertebrata',
    tagline: 'Raksasa Kecil',
    description: 'Dunia makhluk tanpa tulang belakang yang menguasai ekosistem.',
    image: 'https://images.unsplash.com/photo-1533088219416-83c9a416a506?auto=format&fit=crop&w=1200&q=80',
    number: '05',
    size: 'small',
  },
];

export default function GaleriPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.header-reveal', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out'
      });

      // Cards Animation with ScrollTrigger
      const cards = gsap.utils.toArray('.gallery-card');
      cards.forEach((card: any, i) => {
        gsap.fromTo(card, 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // Floating decorative elements
      gsap.to('.floating-shape', {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        rotation: 'random(-10, 10)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#f9f7f4] text-[#3E352B] selection:bg-[#4a5942] selection:text-white overflow-hidden">
      
      {/* ── HEADER SECTION ── */}
      <section ref={headerRef} className="relative pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto border-b border-[#d6cebc]/50">
        <div className="absolute top-20 right-10 pointer-events-none opacity-5">
           <MapIcon size={400} strokeWidth={0.5} />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6 overflow-hidden">
             <span className="header-reveal block h-px w-12 bg-[#4a5942]" />
             <span className="header-reveal text-[10px] font-bold tracking-[0.4em] uppercase text-[#4a5942]">Koleksi Naratif Museum</span>
          </div>
          
          <h1 className="header-reveal font-[--font-playfair] text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-8">
            Arsip <br />
            <span className="italic font-normal serif">Kehidupan</span>
          </h1>
          
          <div className="header-reveal flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12">
             <p className="text-[#8b877d] text-lg md:text-xl max-w-xl leading-relaxed">
               Menjelajahi keanekaragaman hayati melalui lensa sejarah dan sains. 
               Pilih salah satu arsip untuk memulai perjalanan visual yang mendalam.
             </p>
             <div className="flex items-center gap-6">
                <div className="flex flex-col items-end">
                   <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#4a5942]">Spesies Terdata</span>
                   <span className="text-3xl font-[--font-playfair]">2500+</span>
                </div>
                <div className="w-px h-12 bg-[#d6cebc]" />
                <div className="flex flex-col items-end">
                   <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#4a5942]">Tahun Berdiri</span>
                   <span className="text-3xl font-[--font-playfair]">1894</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section className="px-6 md:px-16 py-24 max-w-7xl mx-auto relative">
        {/* Organic Background Blobs */}
        <div className="floating-shape absolute top-40 left-10 w-96 h-96 bg-[#4a5942]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="floating-shape absolute bottom-20 right-10 w-80 h-80 bg-[#c4843a]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
          {categories.map((cat, idx) => (
            <div 
              key={cat.id} 
              className={`gallery-card relative group
                ${cat.size === 'large' ? 'md:col-span-12 lg:col-span-8' : ''}
                ${cat.size === 'medium' ? 'md:col-span-6 lg:col-span-6' : ''}
                ${cat.size === 'small' ? 'md:col-span-6 lg:col-span-4' : idx % 2 === 0 ? 'lg:translate-y-24' : ''}
              `}
            >
              <Link href={cat.slug} className="block relative overflow-hidden group">
                <div className="aspect-16/10 md:aspect-auto md:h-[500px] relative overflow-hidden bg-[#eae4d3]">
                  {/* Image with Parallax Hover */}
                  <img 
                    src={cat.image} 
                    alt={cat.label}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  {/* Grain Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  
                  {/* Info Overlay */}
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                        <MoveUpRight className="text-white" size={20} />
                     </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#4a5942]">{cat.number}</span>
                       <span className="w-6 h-px bg-[#d6cebc]" />
                       <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#8b877d]">{cat.tagline}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-[--font-playfair] mb-4 group-hover:italic transition-all duration-500">
                      {cat.label}
                    </h3>
                  </div>
                  <div className="max-w-xs">
                     <p className="text-sm text-[#8b877d] leading-relaxed mb-6">
                       {cat.description}
                     </p>
                     <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#3E352B] group-hover:text-[#4a5942] transition-colors">
                        Buka Arsip <ArrowRight size={14} />
                     </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER CALL TO ACTION ── */}
      <section className="px-6 md:px-16 py-32 bg-[#f2eee3] border-t border-[#d6cebc]">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
           <div className="w-16 h-16 bg-[#4a5942] rounded-full flex items-center justify-center mb-8 shadow-lg">
              <Sparkles className="text-white" />
           </div>
           <h2 className="font-[--font-playfair] text-4xl md:text-6xl mb-8">
              Punya Pertanyaan <br /> <span className="italic">Tentang Fauna?</span>
           </h2>
           <Link href="/kuis" className="group flex items-center gap-4 bg-[#3E352B] text-white px-10 py-5 rounded-none hover:bg-[#4a5942] transition-all duration-300">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Uji Pengetahuanmu</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
           </Link>
        </div>
      </section>
    </main>
  );
}
