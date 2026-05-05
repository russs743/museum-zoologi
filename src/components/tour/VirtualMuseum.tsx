'use client';

import React, { useState, Suspense, useEffect, useRef, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, PerspectiveCamera, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { ArrowLeft, MoveUp, Info, Map as MapIcon } from 'lucide-react';
import Link from 'next/link';
import { gsap } from 'gsap';

// --- DATA STRUCTURE ---
// 9 navigable rooms matching all pameran rooms in the denah.
// Hotspot positions use 3D coordinates on the view sphere, placed according to
// the room's physical adjacency on the floor plan.
//   [10, -2, 0]  = right     [-10, -2, 0] = left
//   [0, -2, -10] = forward   [0, -2, 10]  = behind
//   Diagonals combine axes, e.g. [8, -2, 8] = right-behind
const MUSEUM_ROOMS = {
  lobby: {
    id: 'lobby',
    name: 'Pintu Masuk Utama',
    image: '/7019366781_cb7818eb68_o.jpg',
    fallbackColor: '#5a4f42',
    hotspots: [
      { id: 'h-lobby-1', target: 'mamalia',  position: [0, -2, -10], label: 'Ruang Mamalia' },
      { id: 'h-lobby-2', target: 'burung1',  position: [-10, -2, 0], label: 'Ruang Burung I' },
    ],
    infos: [
      { id: 'i-lobby', position: [-5, 2, -10], title: 'Selamat Datang', text: 'Jelajahi keajaiban Zoologi Indonesia dari sini. Gunakan panah navigasi untuk berpindah ruangan.' }
    ]
  },
  burung1: {
    id: 'burung1',
    name: 'Ruang Burung I',
    image: '/54151288982_094a2b9922_c.jpg',
    fallbackColor: '#3a5245',
    hotspots: [
      { id: 'h-b1-1', target: 'lobby',   position: [10, -2, 0],  label: 'Pintu Masuk' },
      { id: 'h-b1-2', target: 'burung2', position: [0, -2, -10], label: 'Ruang Burung II' },
    ],
    infos: [
      { id: 'i-b1', position: [-6, 1, 8], title: 'Koleksi Burung Nusantara', text: 'Ratusan spesimen burung dari seluruh Indonesia, mulai dari elang hingga burung-burung kecil penghuni hutan.' }
    ]
  },
  burung2: {
    id: 'burung2',
    name: 'Ruang Burung II',
    image: 'https://placehold.co/2400x1200/3a5245/FFFFFF/png?text=Ruang+Burung+II',
    fallbackColor: '#3a5245',
    hotspots: [
      { id: 'h-b2-1', target: 'burung1',  position: [0, -2, 10],  label: 'Ruang Burung I' },
      { id: 'h-b2-2', target: 'mamalia',  position: [10, -2, 0],  label: 'Ruang Mamalia' },
    ],
    infos: [
      { id: 'i-b2', position: [5, 1, -8], title: 'Cendrawasih', text: 'Koleksi burung surga dari Papua — keindahan bulu mereka membuat pedagang Eropa percaya mereka tidak pernah mendarat.' }
    ]
  },
  mamalia: {
    id: 'mamalia',
    name: 'Ruang Mamalia',
    image: 'https://placehold.co/2400x1200/3d5a32/FFFFFF/png?text=Ruang+Mamalia',
    fallbackColor: '#3d5a32',
    hotspots: [
      { id: 'h-m-1', target: 'lobby',     position: [0, -2, 10],   label: 'Pintu Masuk' },
      { id: 'h-m-2', target: 'burung2',   position: [-10, -2, 0],  label: 'Ruang Burung II' },
      { id: 'h-m-3', target: 'reptil',    position: [10, -2, 0],   label: 'Reptil & Amfibi' },
    ],
    infos: [
      { id: 'i-m', position: [5, 1, 8], title: 'Mamalia Nusantara', text: 'Dari badak Jawa bercula satu hingga harimau Sumatera — koleksi mamalia terlengkap di Indonesia.' }
    ]
  },
  serangga1: {
    id: 'serangga1',
    name: 'Serangga I',
    image: 'https://placehold.co/2400x1200/4a5540/FFFFFF/png?text=Serangga+I',
    fallbackColor: '#4a5540',
    hotspots: [
      { id: 'h-s1-1', target: 'mamalia',   position: [-10, -2, 0],  label: 'Ruang Mamalia' },
      { id: 'h-s1-2', target: 'serangga2', position: [10, -2, 0],   label: 'Serangga II' },
    ],
    infos: [
      { id: 'i-s1', position: [5, 1, -8], title: 'Kumbang & Belalang', text: 'Kumbang tanduk yang bisa mengangkat 850x berat tubuhnya dan belalang daun yang berkamuflase sempurna.' }
    ]
  },
  serangga2: {
    id: 'serangga2',
    name: 'Serangga II',
    image: 'https://placehold.co/2400x1200/4a5540/FFFFFF/png?text=Serangga+II',
    fallbackColor: '#4a5540',
    hotspots: [
      { id: 'h-s2-1', target: 'serangga1', position: [-10, -2, 0], label: 'Serangga I' },
      { id: 'h-s2-2', target: 'reptil',    position: [0, -2, 10],  label: 'Reptil & Amfibi' },
      { id: 'h-s2-3', target: 'ikan',      position: [10, -2, 0],  label: 'Ikan & Moluska' },
    ],
    infos: [
      { id: 'i-s2', position: [-5, 1, -8], title: 'Kupu-kupu Raja', text: 'Kupu-kupu bersayap emas yang dilindungi undang-undang — koleksi lepidoptera terlengkap di Asia Tenggara.' }
    ]
  },
  reptil: {
    id: 'reptil',
    name: 'Reptil & Amfibi',
    image: 'https://placehold.co/2400x1200/4a4a32/FFFFFF/png?text=Reptil+Dan+Amfibi',
    fallbackColor: '#4a4a32',
    hotspots: [
      { id: 'h-r-1', target: 'mamalia',  position: [-10, -2, 0], label: 'Ruang Mamalia' },
      { id: 'h-r-2', target: 'paus',     position: [0, -2, 10],  label: 'Ruang Paus' },
      { id: 'h-r-3', target: 'serangga2', position: [0, -2, -10], label: 'Serangga II' },
    ],
    infos: [
      { id: 'i-r', position: [6, 1, 6], title: 'Komodo', text: 'Kadal terbesar di dunia — mampu mendeteksi bau mangsa dari jarak 10 km dengan lidah bercabangnya.' }
    ]
  },
  paus: {
    id: 'paus',
    name: 'Ruang Paus',
    image: 'https://placehold.co/2400x1200/2e4a5a/FFFFFF/png?text=Ruang+Paus',
    fallbackColor: '#2e4a5a',
    hotspots: [
      { id: 'h-p-1', target: 'mamalia', position: [-10, -2, 0], label: 'Ruang Mamalia' },
      { id: 'h-p-2', target: 'reptil',  position: [0, -2, -10], label: 'Reptil & Amfibi' },
    ],
    infos: [
      { id: 'i-p', position: [5, 1, 8], title: 'Kerangka Paus Biru', text: 'Makhluk terbesar yang pernah hidup di Bumi — panjang 33 meter, berat 190 ton. Ikon utama Museum Zoologi Bogor.' }
    ]
  },
  ikan: {
    id: 'ikan',
    name: 'Ikan & Moluska',
    image: 'https://placehold.co/2400x1200/2e4a5a/FFFFFF/png?text=Ikan+Dan+Moluska',
    fallbackColor: '#2e4a5a',
    hotspots: [
      { id: 'h-i-1', target: 'serangga2', position: [-10, -2, 0], label: 'Serangga II' },
      { id: 'h-i-2', target: 'reptil',    position: [0, -2, 10],  label: 'Reptil & Amfibi' },
    ],
    infos: [
      { id: 'i-i', position: [6, 1, -6], title: 'Coelacanth', text: 'Fosil hidup berusia 400 juta tahun yang ditemukan di perairan Manado — salah satu koleksi paling berharga di MZB.' }
    ]
  },
};

// --- ERROR BOUNDARY ---
class RoomErrorBoundary extends React.Component<{ fallbackColor: string, children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidUpdate(prevProps: any) {
    // Reset error state when room changes (children change)
    if (prevProps.children !== this.props.children) {
      this.setState({ hasError: false });
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <mesh scale={[-1, 1, 1]}>
          <sphereGeometry args={[50, 60, 40]} />
          <meshBasicMaterial color={this.props.fallbackColor} side={THREE.BackSide} />
        </mesh>
      );
    }
    return this.props.children;
  }
}

function RoomSphereMap({ imageUrl }: { imageUrl: string }) {
  const texture = useTexture(imageUrl);
  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[50, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

// --- COMPONENTS ---

function Scene({ currentRoomId, onNavigate }: { currentRoomId: keyof typeof MUSEUM_ROOMS, onNavigate: (id: string) => void }) {
  const room = MUSEUM_ROOMS[currentRoomId];

  return (
    <>
      <RoomErrorBoundary fallbackColor={room.fallbackColor}>
        <RoomSphereMap key={room.id} imageUrl={room.image} />
      </RoomErrorBoundary>

      {/* Hotspots */}
      {room.hotspots.map((hs) => (
        <Hotspot 
          key={hs.id} 
          position={hs.position as [number, number, number]} 
          label={hs.label}
          onClick={() => onNavigate(hs.target)}
        />
      ))}

      {/* Info Points */}
      {room.infos.map((info) => (
        <InfoPoint 
          key={info.id} 
          position={info.position as [number, number, number]} 
          title={info.title}
          text={info.text}
        />
      ))}
    </>
  );
}

function Hotspot({ position, label, onClick }: { position: [number, number, number], label: string, onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      <Html center>
        <button 
          onClick={onClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="group flex flex-col items-center gap-2 cursor-pointer outline-none border-none bg-transparent"
        >
          <div className={`w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center transition-all duration-300 ${hovered ? 'scale-125 bg-white/40 shadow-[0_0_20px_rgba(255,255,255,0.5)]' : ''}`}>
             <MoveUp className="text-white animate-bounce" size={20} />
          </div>
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white bg-black/50 px-3 py-1 backdrop-blur-sm rounded-sm shadow-md">
            {label}
          </span>
        </button>
      </Html>
    </group>
  );
}

function InfoPoint({ position, title, text }: { position: [number, number, number], title: string, text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <group position={position}>
      <Html center>
        <div className="relative">
          <button 
            onClick={() => setOpen(!open)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-[#c4843a] rotate-45' : 'bg-white/10 backdrop-blur-md border border-white/40'}`}
          >
            <Info className="text-white" size={16} />
          </button>
          
          {open && (
            <div className="absolute left-12 top-0 -translate-y-1/2 w-64 p-5 bg-[#f9f7f4] border border-[#d6cebc] shadow-2xl animate-in fade-in zoom-in duration-300">
               <h4 className="font-[--font-playfair] text-lg text-[#3E352B] mb-2">{title}</h4>
               <p className="text-[#8b877d] text-xs leading-relaxed">{text}</p>
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

export default function VirtualMuseum() {
  const [currentRoomId, setCurrentRoomId] = useState<keyof typeof MUSEUM_ROOMS>('lobby');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (targetId: string) => {
    setIsTransitioning(true);
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.5,
      onComplete: () => {
        setCurrentRoomId(targetId as keyof typeof MUSEUM_ROOMS);
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
          onComplete: () => setIsTransitioning(false)
        });
      }
    });
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans">
      
      {/* ── 3D CANVAS ── */}
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 0.1]} fov={75} />
          <Scene currentRoomId={currentRoomId} onNavigate={handleNavigate} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            rotateSpeed={-0.4} 
            autoRotate={false}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>

      {/* ── UI OVERLAYS ── */}
      
      {/* Transition Fade */}
      <div 
        ref={overlayRef} 
        className="absolute inset-0 bg-black opacity-0 pointer-events-none z-200" 
      />

      {/* Header HUD */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-10 flex items-start justify-between z-100 pointer-events-none">
         <div className="pointer-events-auto">
            <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6 text-[10px] font-bold tracking-[0.4em] uppercase">
               <ArrowLeft size={16} /> Keluar Tour
            </Link>
            <div className="flex flex-col">
               <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#c4843a] mb-2">Virtual Museum</span>
               <h1 className="font-[--font-playfair] text-3xl md:text-5xl text-white">
                  {MUSEUM_ROOMS[currentRoomId].name}
               </h1>
            </div>
         </div>

         {/* Mini Map — synced with InteractiveMap denah layout */}
         <div className="pointer-events-auto hidden md:block">
            <div className="bg-[#f9f7f4] p-5 border border-[#d6cebc] shadow-2xl w-56">
               <div className="flex items-center gap-2 mb-3 border-b border-[#d6cebc] pb-2">
                  <MapIcon size={14} className="text-[#4a5942]" />
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#3E352B]">Denah Lantai</span>
               </div>
               <div className="relative w-full" style={{ paddingBottom: '88%' }}>
                  {/* Room mapping: tour room IDs → denah room IDs */}
                  {[
                    { id: 'burung2',       tourId: 'burung2',    label: 'B2',  style: { left: '4%', top: '5%', width: '32%', height: '25%' } },
                    { id: 'burung1',       tourId: 'burung1',    label: 'B1',  style: { left: '4%', top: '32%', width: '26%', height: '39%' } },
                    { id: 'mamalia',       tourId: 'mamalia',    label: 'M',   style: { left: '38%', top: '5%', width: '18%', height: '66%' } },
                    { id: 'serangga1',     tourId: 'serangga1',  label: 'S1',  style: { left: '58%', top: '5%', width: '10%', height: '15%' } },
                    { id: 'serangga2',     tourId: 'serangga2',  label: 'S2',  style: { left: '70%', top: '5%', width: '12%', height: '15%' } },
                    { id: 'reptil',        tourId: 'reptil',     label: 'R',   style: { left: '58%', top: '22%', width: '24%', height: '25%' } },
                    { id: 'paus',          tourId: 'paus',       label: 'P',   style: { left: '58%', top: '49%', width: '10%', height: '22%' } },
                    { id: 'ikan',          tourId: 'ikan',       label: 'I',   style: { left: '84%', top: '5%', width: '12%', height: '42%' } },
                    { id: 'pintu',         tourId: 'lobby',      label: '↑',   style: { left: '32%', top: '32%', width: '4%', height: '56%' } },
                    { id: 'temporer',      tourId: null,         label: '',    style: { left: '4%', top: '73%', width: '26%', height: '15%' } },
                    { id: 'petugas',       tourId: null,         label: '',    style: { left: '38%', top: '73%', width: '18%', height: '15%' } },
                    { id: 'pengembangan',  tourId: null,         label: '',    style: { left: '70%', top: '49%', width: '26%', height: '22%' } },
                    { id: 'toilet',        tourId: null,         label: '',    style: { left: '70%', top: '73%', width: '26%', height: '8%' } },
                  ].map((room) => {
                    const isActive = room.tourId === currentRoomId;
                    const isTourable = room.tourId !== null;
                    return (
                      <div
                        key={room.id}
                        className={`absolute border flex items-center justify-center text-[6px] font-bold uppercase transition-all duration-300
                          ${isActive
                            ? 'bg-[#4a5942] text-white border-[#4a5942]'
                            : isTourable
                              ? 'bg-white/70 text-[#6b675d] border-[#d6cebc]'
                              : 'bg-[#d4cdbf]/60 text-[#a8a192] border-[#d6cebc]/50'
                          }`}
                        style={room.style}
                      >
                        {room.label}
                        {isActive && <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />}
                      </div>
                    );
                  })}
               </div>
               <div className="flex gap-3 mt-3 text-[6px] text-[#8b877d]">
                  <div className="flex items-center gap-1"><div className="w-2 h-2 bg-[#4a5942]" />Posisi</div>
                  <div className="flex items-center gap-1"><div className="w-2 h-2 bg-white/70 border border-[#d6cebc]" />Bisa dikunjungi</div>
               </div>
            </div>
         </div>
      </div>

      {/* Controls Help */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 z-100 pointer-events-none opacity-50">
         <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center">
               <div className="w-1 h-1 bg-white rounded-full" />
            </div>
            <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-white">Klik & Tarik</span>
         </div>
      </div>

      {/* Loading Overlay */}
      <Suspense fallback={
        <div className="absolute inset-0 bg-[#f9f7f4] flex flex-col items-center justify-center z-300">
           <div className="w-16 h-16 border-4 border-[#4a5942]/20 border-t-[#4a5942] rounded-full animate-spin mb-6" />
           <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#4a5942]">Menyiapkan Ruangan...</span>
        </div>
      }>
        <div />
      </Suspense>

    </div>
  );
}
