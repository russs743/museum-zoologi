'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const isSpeciesRoute = pathname.startsWith('/species');
  const isGaleriDeep = pathname.startsWith('/galeri/') && pathname !== '/galeri';
  const isDarkRoute = isSpeciesRoute || isGaleriDeep;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const textColor = isDarkRoute ? "text-[#f2eee3]" : "text-[#3E352B]";
  const borderColor = isDarkRoute ? "border-[#f2eee3]/10" : "border-[#3E352B]/10";

  return (
    <>
      <nav className={`absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 py-6 z-100 bg-transparent transition-colors duration-500 border-b ${borderColor} ${textColor}`}>
        <Link href="/" className="text-xl md:text-[1.35rem] font-(family-name:--font-playfair) tracking-tight">
          Museum <span className={isDarkRoute ? "text-[#7dbc8b]" : "text-[#485942]"}>Zoologi</span> Bogor
        </Link>
        
        {isDarkRoute ? (
          <div className="flex items-center">
            <Link href="/galeri" className="flex items-center gap-2 text-[10px] md:text-xs font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity">
              <ArrowLeft size={16} /> <span className="hidden sm:inline">Kembali ke Galeri</span><span className="sm:hidden">Kembali</span>
            </Link>
          </div>
        ) : (
          <>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10 text-[13px] font-semibold tracking-widest uppercase">
              <Link href="/galeri" className={`transition-colors ${pathname === '/galeri' ? 'text-[#485942] border-b border-[#485942] pb-0.5' : 'text-[#8b877d] hover:text-[#485942]'}`}>Galeri</Link>
              <Link href="/tour" className={`transition-colors ${pathname === '/tour' ? 'text-[#485942] border-b border-[#485942] pb-0.5' : 'text-[#8b877d] hover:text-[#485942]'}`}>Tour</Link>
              <Link href="/denah" className={`transition-colors ${pathname === '/denah' ? 'text-[#485942] border-b border-[#485942] pb-0.5' : 'text-[#8b877d] hover:text-[#485942]'}`}>Denah</Link>
              <Link href="/kuis" className={`transition-colors ${pathname === '/kuis' ? 'text-[#485942] border-b border-[#485942] pb-0.5' : 'text-[#8b877d] hover:text-[#485942]'}`}>Kuis</Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              className="md:hidden p-2 -mr-2 text-current"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {!isDarkRoute && (
        <div 
          className={`fixed inset-0 bg-[#ebe3d5] z-90 flex flex-col justify-center items-center gap-8 transition-all duration-500 origin-top ${
            isMobileMenuOpen ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-0'
          }`}
        >
          <div className="flex flex-col items-center gap-8 text-xl font-semibold tracking-[0.15em] uppercase text-[#3E352B]">
            <Link href="/" className={`transition-colors hover:text-[#485942] ${pathname === '/' ? 'text-[#485942] border-b-2 border-[#485942] pb-1' : ''}`}>Beranda</Link>
            <Link href="/galeri" className={`transition-colors hover:text-[#485942] ${pathname === '/galeri' ? 'text-[#485942] border-b-2 border-[#485942] pb-1' : ''}`}>Galeri</Link>
            <Link href="/tour" className={`transition-colors hover:text-[#485942] ${pathname === '/tour' ? 'text-[#485942] border-b-2 border-[#485942] pb-1' : ''}`}>Tour</Link>
            <Link href="/denah" className={`transition-colors hover:text-[#485942] ${pathname === '/denah' ? 'text-[#485942] border-b-2 border-[#485942] pb-1' : ''}`}>Denah</Link>
            <Link href="/kuis" className={`transition-colors hover:text-[#485942] ${pathname === '/kuis' ? 'text-[#485942] border-b-2 border-[#485942] pb-1' : ''}`}>Kuis</Link>
          </div>
          
          <div className="absolute bottom-12 text-[10px] uppercase tracking-widest text-[#8b877d]">
            Museum Zoologi Bogor
          </div>
        </div>
      )}
    </>
  );
}
