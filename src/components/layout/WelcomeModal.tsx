'use client';

import React, { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Gunakan sessionStorage agar tidak muncul berulang kali jika user refresh, 
    // tapi akan muncul lagi kalau browser ditutup lalu dibuka lagi
    const hasSeenModal = sessionStorage.getItem('hasSeenWelcomeModal');
    if (!hasSeenModal) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenWelcomeModal', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#f9f7f4] border border-[#d6cebc] shadow-2xl max-w-lg w-full p-8 relative animate-in zoom-in-95 fade-in duration-300">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#8b877d] hover:text-[#3E352B] transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-4 mb-6 text-[#c4843a]">
          <Info size={32} />
          <h2 className="font-[--font-playfair] text-2xl text-[#3E352B]">Pemberitahuan</h2>
        </div>

        <div className="space-y-4 text-[#5a574f] mb-8">
          <p>
            Selamat datang di <strong>Prototype Virtual Museum Zoologi Bogor</strong>!
          </p>
          <p>
            Website ini merupakan versi <span className="font-semibold text-[#c4843a]">prototype</span> yang sedang diuji coba untuk keperluan penelitian/skripsi. Fitur dan konten di dalamnya dibuat untuk tujuan evaluasi.
          </p>
          <p>
            Silakan mengeksplorasi fitur-fitur yang tersedia (seperti Virtual Tour, Kuis, Galeri). Setelah selesai menjelajah, kami sangat mengharapkan kesediaan Anda untuk mengisi form umpan balik di halaman <strong>Evaluasi</strong>.
          </p>
          <p className="font-medium text-[#4a5942]">
            Terima kasih atas bantuan dan partisipasi Anda!
          </p>
        </div>

        <button
          onClick={handleClose}
          className="w-full bg-[#4a5942] hover:bg-[#3d4a37] text-white py-3 px-6 font-medium transition-colors"
        >
          Mengerti & Mulai Menjelajah
        </button>
      </div>
    </div>
  );
}
