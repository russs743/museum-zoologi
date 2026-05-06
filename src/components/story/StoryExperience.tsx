'use client';

import React, { useRef, useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SceneContent } from './SceneContent';

gsap.registerPlugin(ScrollTrigger);

export default function StoryExperience({ categoryData }: { categoryData?: any }) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animate HTML elements based on scroll
      const sections = gsap.utils.toArray('.story-section');
      sections.forEach((section: any) => {
        gsap.fromTo(section.querySelectorAll('.reveal-text'), 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: section,
              start: 'top center+=100',
              end: 'center center',
              scrub: 1,
            }
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative w-full bg-[#050505] text-white selection:bg-white/30 font-sans min-h-screen">
      {/* 3D Canvas fixed in background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
          <color attach="background" args={['#050505']} />
          <ambientLight intensity={0.2} />
          {/* Dramatic Rim Light */}
          <spotLight position={[5, 10, -5]} intensity={3} angle={0.5} penumbra={1} color="#ffffff" castShadow />
          {/* Fill Light */}
          <spotLight position={[-5, 5, 5]} intensity={1} angle={0.5} penumbra={1} color="#4a5942" />
          
          <Environment preset="city" />
          <SceneContent />
          <Preload all />
        </Canvas>
      </div>

      {/* HTML Scroll Content */}
      <div className="relative z-10">
        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-50 mix-blend-difference">
          <Link href={`/galeri/${categoryData?.id || 'mamalia'}`} className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Kembali ke Arsip
          </Link>
        </div>

        {/* Section 1: Hero */}
        <section className="story-section h-[150vh] flex flex-col justify-center px-8 md:px-24">
          <div className="max-w-3xl mt-[-20vh]">
            <p className="reveal-text text-[10px] font-bold tracking-[0.4em] uppercase text-[#8b877d] mb-4">
              KOLUM STORYTELLING
            </p>
            <h1 className="reveal-text font-[--font-playfair] text-6xl md:text-8xl lg:text-9xl text-white mb-6 leading-[0.9]">
              {categoryData?.name || 'Mamalia'}
            </h1>
            <p className="reveal-text text-white/60 max-w-xl text-lg font-light leading-relaxed">
              {categoryData?.subtitle || 'Sang Penjaga Daratan'} — Menjelajahi jejak evolusi di koleksi Museum Zoologi.
            </p>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
            <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
          </div>
        </section>

        {/* Section 2: Description */}
        <section className="story-section h-[150vh] flex flex-col justify-center px-8 md:px-24 items-end text-right pointer-events-none">
          <div className="max-w-2xl">
            <h2 className="reveal-text font-[--font-playfair] text-4xl md:text-6xl text-white mb-6">
              Catatan Ekologi
            </h2>
            <p className="reveal-text text-white/60 text-lg font-light leading-relaxed">
              {categoryData?.description || 'Data deskripsi tidak tersedia.'}
            </p>
          </div>
        </section>

        {/* Section 3: Habitat */}
        <section className="story-section h-[150vh] flex flex-col justify-center px-8 md:px-24 pointer-events-none">
          <div className="max-w-xl">
            <h2 className="reveal-text font-[--font-playfair] text-4xl md:text-6xl text-white mb-6">
              Teritori Alam
            </h2>
            <p className="reveal-text text-white/60 text-lg font-light leading-relaxed">
              {categoryData?.habitat || 'Data habitat tidak tersedia.'}
            </p>
          </div>
        </section>

        {/* Section 4: Outro */}
        <section className="story-section min-h-screen flex flex-col items-center justify-center px-8 text-center bg-gradient-to-t from-black via-transparent to-transparent pointer-events-auto">
          <h2 className="reveal-text font-[--font-playfair] text-4xl md:text-7xl text-white mb-8">
            Fakta Evolusi
          </h2>
          <p className="reveal-text text-white/80 max-w-3xl text-xl md:text-2xl font-serif italic leading-relaxed mb-12">
            "{categoryData?.funFact || 'Sebuah keajaiban alam yang patut dilestarikan.'}"
          </p>
          <Link href={`/galeri/${categoryData?.id || 'mamalia'}`} className="reveal-text px-8 py-4 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-[#d6cebc] transition-colors relative z-50">
            Mulai Eksplorasi Arsip
          </Link>
        </section>
      </div>
    </div>
  );
}
