'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowLeft, ArrowDown, Heart, Activity, Fingerprint } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  {
    id: 'awal',
    era: '310 Juta Tahun Lalu',
    title: 'Nadi Pertama di Balik Sisik',
    opening: 'Sebelum Hangat Itu Ada…',
    color: '#c45a4a', // Terracotta
    bg: '#f9f7f4', // Cream
    accent: '#8b2a1e', // Deep Blood Red
    story: [
      'Alkisah, di dunia yang masih dikuasai oleh kulit bersisik dan darah dingin, ada sebuah anomali kecil yang mulai tumbuh.',
      'Synapsida namanya. Ia bukan reptil, tapi ia membawa janjinya alam semesta kepada kehangatan.',
      'Di balik rahangnya yang kokoh, tulang-tulang telinga mulai berevolusi—sebuah keajaiban teknik biologis yang kelak akan membuat kita bisa mendengar detak jantung dunia.',
      'Ia adalah titik nol. Saat di mana kehidupan memutuskan untuk tidak lagi bergantung pada panas matahari, tapi mulai membakar api dari dalam dirinya sendiri.',
    ],
    visualNote: '❤️ Awal mula metabolisme endotermik — api abadi yang menyala di dalam dada setiap mamalia.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'kepunahan',
    era: '66 Juta Tahun Lalu',
    title: 'Api yang Bertahan dalam Gelap',
    opening: 'Ketika Langit Membara…',
    color: '#e87a7a', // Soft Red
    bg: '#fcf8f8', // Very light pink-cream
    accent: '#a32a2a', // Crimson
    story: [
      'Pagi itu, kiamat datang dalam bentuk batu dari langit. Dinosaurus yang perkasa lenyap dalam hitungan jam.',
      'Tapi kita? Nenek moyang kita yang sekecil tikus itu tidak menyerah. Mereka bersembunyi di dalam tanah, saling berpelukan untuk berbagi panas tubuh.',
      'Bulu-bulu halus mereka menjadi benteng terakhir melawan musim dingin abadi. Kelenjar susu mereka menjadi sumber kehidupan ketika makanan tak lagi tumbuh.',
      'Kepunahan massal bukan hanya akhir, tapi ruang kosong yang luas bagi mamalia untuk akhirnya bangkit dan menguasai daratan.',
    ],
    visualNote: '☄️ Bulu dan Susu — dua senjata rahasia yang menyelamatkan mamalia dari kepunahan massal.',
    image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'kebangkitan',
    era: '50 Juta Tahun Lalu',
    title: 'Darah yang Mengalir ke Samudra',
    opening: 'Panggilan dari Biru…',
    color: '#8b4a4a', // Mauve/Brown-red
    bg: '#fdf6f6',
    accent: '#4a1a1a',
    story: [
      'Beberapa mamalia memilih jalur yang mustahil. Mereka kembali ke rahim Bumi yang asli: lautan.',
      'Kaki berubah menjadi sirip, namun jantung mereka tetap jantung mamalia. Hangat, kuat, dan penuh kasih.',
      'Paus Biru di Museum Zoologi Bogor adalah monumen hidup dari perjalanan ini. Raksasa yang tetap bernafas dengan paru-paru, tetap menyusui, meski hidup di kedalaman yang paling sunyi.',
      'Ini adalah bukti bahwa mamalia tidak memiliki batas. Kita bisa menguasai gunung yang paling tinggi, hingga palung laut yang paling dalam.',
    ],
    visualNote: '🐋 Paus Biru — bukti bahwa kehangatan mamalia bisa menaklukkan dinginnya samudra terdalam.',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=1600&q=80',
  },
];

export default function MamaliaScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progress line
      gsap.to('.scroll-progress', {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom bottom', scrub: true }
      });

      // Chapter animations
      chapters.forEach((ch, i) => {
        const section = `.chapter-${ch.id}`;
        
        // Sticky Image Parallax/Reveal
        gsap.fromTo(`${section} .chapter-img`, 
          { clipPath: 'inset(10% 10% 10% 10%)', scale: 1.2 },
          { 
            clipPath: 'inset(0% 0% 0% 0%)', 
            scale: 1, 
            duration: 1.5, 
            ease: 'power4.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
            }
          }
        );

        // Text Drifting
        gsap.from(`${section} .chapter-content`, {
          y: 150,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        });

        // Floating Title Parallax
        gsap.to(`${section} .floating-title`, {
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

      // Background organic pulse
      gsap.to('.bg-pulse', {
        scale: 1.1,
        opacity: 0.15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 2
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#f9f7f4] text-[#3E352B] selection:bg-[#c45a4a] selection:text-white overflow-hidden">
      
      {/* ── STICKY PROGRESS ── */}
      <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 h-32 w-px bg-[#d6cebc] z-100 hidden lg:block">
         <div className="scroll-progress absolute top-0 left-0 w-full bg-[#c45a4a] origin-top scale-y-0 h-full" />
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Organic Red Pulse Background */}
        <div className="bg-pulse absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#c45a4a]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="bg-pulse absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#e87a7a]/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 text-center max-w-5xl">
          <Link href="/galeri" className="inline-flex items-center gap-2 text-[#c45a4a] text-[10px] font-bold tracking-[0.4em] uppercase mb-16 hover:translate-x-[-8px] transition-transform">
            <ArrowLeft size={16} /> Kembali ke Galeri
          </Link>
          
          <div className="mb-4 flex justify-center gap-3">
             <Activity className="text-[#c45a4a] animate-pulse" size={20} />
             <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#8b877d]">Simfoni Darah Hangat</span>
          </div>
          
          <h1 className="font-[--font-playfair] text-7xl md:text-9xl lg:text-[11rem] leading-[0.8] mb-12">
            Nadi <br />
            <span className="italic font-normal serif text-[#c45a4a]">Evolusi</span>
          </h1>
          
          <p className="text-[#8b877d] text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-20">
            Perjalanan 310 juta tahun dari jantung pertama yang berdetak dalam kehangatan — sebuah dongeng tentang kita, mamalia.
          </p>
          
          <div className="flex flex-col items-center gap-4 text-[#c45a4a]/30">
             <span className="text-[9px] font-bold tracking-[0.4em] uppercase">Mulai Menelusuri Jalur Merah</span>
             <ArrowDown className="animate-bounce" size={20} />
          </div>
        </div>
      </section>

      {/* ── CHAPTERS ── */}
      <div className="max-w-7xl mx-auto">
        {chapters.map((ch, idx) => (
          <section key={ch.id} className={`chapter-${ch.id} relative min-h-screen py-24 px-6 md:px-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24`}>
            
            {/* Background Era Text (Parallax) */}
            <div className="floating-title absolute top-0 left-0 w-full text-center pointer-events-none select-none z-0">
               <span className="font-[--font-playfair] text-[15vw] font-bold text-[#c45a4a]/3 whitespace-nowrap">
                 {ch.era.split(' ')[0]}
               </span>
            </div>

            {/* Image Container */}
            <div className={`w-full lg:w-1/2 relative z-10 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
               <div className="chapter-img relative aspect-4/5 overflow-hidden bg-[#eae4d3] shadow-2xl">
                  <img 
                    src={ch.image} 
                    alt={ch.title}
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                  />
                  {/* Red Tint Overlay */}
                  <div className="absolute inset-0 bg-[#c45a4a]/10 mix-blend-multiply" />
                  {/* Decorative Frame */}
                  <div className="absolute inset-4 border border-white/20 pointer-events-none" />
               </div>
               
               {/* Floating Icon */}
               <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#c45a4a] text-white flex items-center justify-center rounded-full shadow-2xl transform rotate-12 group hover:rotate-0 transition-transform duration-500">
                  <Fingerprint size={40} strokeWidth={1} />
               </div>
            </div>

            {/* Content Container */}
            <div className={`w-full lg:w-1/2 relative z-10 chapter-content ${idx % 2 === 1 ? 'lg:order-1 lg:text-right' : 'lg:text-left'}`}>
               <div className={`flex items-center gap-4 mb-8 ${idx % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#c45a4a]">{ch.era}</span>
                  <span className="w-12 h-px bg-[#d6cebc]" />
               </div>

               <p className="font-[--font-playfair] text-3xl italic text-[#c45a4a] mb-6 leading-tight">
                 {ch.opening}
               </p>
               
               <h2 className="font-[--font-playfair] text-5xl md:text-7xl mb-10 leading-[0.9]">
                 {ch.title}
               </h2>

               <div className="space-y-6 mb-12">
                  {ch.story.map((para, pi) => (
                    <p key={pi} className="text-[#8b877d] text-lg leading-relaxed">
                       {para}
                    </p>
                  ))}
               </div>

               <div className={`flex ${idx % 2 === 1 ? 'lg:justify-end' : ''}`}>
                 <div className="inline-flex items-start gap-4 p-6 bg-[#c45a4a]/5 border-l-4 border-[#c45a4a] max-w-md">
                    <Heart className="text-[#c45a4a] shrink-0" size={20} />
                    <p className="text-xs text-[#8b877d] leading-relaxed italic">
                      {ch.visualNote.slice(ch.visualNote.indexOf(' ') + 1)}
                    </p>
                 </div>
               </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── FOOTER CALL TO ACTION ── */}
      <section className="px-6 py-40 bg-[#c45a4a]/5 border-t border-[#d6cebc]/50">
        <div className="max-w-4xl mx-auto text-center">
           <Heart className="text-[#c45a4a] mx-auto mb-12 animate-pulse" size={60} strokeWidth={1} />
           <h2 className="font-[--font-playfair] text-5xl md:text-8xl mb-8">
              Kisah Kita <br /> <span className="italic text-[#c45a4a]">Belum Selesai</span>
           </h2>
           <p className="text-[#8b877d] text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
             Darah hangat yang mengalir dalam tubuhmu hari ini adalah warisan 310 juta tahun yang tak ternilai harganya. Mari kita jaga apa yang tersisa.
           </p>
           
           <div className="flex flex-wrap justify-center gap-6">
              <Link href="/galeri" className="px-12 py-5 border border-[#3E352B] text-[#3E352B] text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#3E352B] hover:text-white transition-all duration-500">
                 Koleksi Lainnya
              </Link>
              <Link href="/kuis" className="px-12 py-5 bg-[#c45a4a] text-white text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#a32a2a] transition-all duration-500 shadow-xl">
                 Uji Pengetahuan Mamalia
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
