import React from 'react';

export default function AboutSection() {
  return (
    <section className="px-8 md:px-16 pb-24 max-w-7xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row shadow-sm">
        {/* Left Green Box */}
        <div className="bg-[#526449] text-[#f2eee3] p-12 md:p-16 lg:w-[45%] flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
          <div>
            <p className="text-[10px] tracking-[0.2em] font-semibold uppercase opacity-90 mb-10 text-[#d8d3c5]">
              Tentang Museum
            </p>
            <h2 className="text-2xl md:text-[2rem] font-(family-name:--font-playfair) leading-snug italic font-medium pr-4">
              "Melangkah menyusuri<br/>lorong<br/>waktu dan merawat<br/>sejarah alam<br/>Nusantara"
            </h2>
          </div>
          <div className="text-[7rem] md:text-[9rem] font-(family-name:--font-playfair) leading-none mt-16 text-[#e6e2d6] opacity-90">
            1894
          </div>
        </div>

        {/* Right White Box */}
        <div className="bg-white p-12 md:p-16 lg:w-[55%] flex flex-col justify-center border border-[#e8dccb] border-l-0">
          <h3 className="text-2xl md:text-[1.7rem] font-bold mb-8 text-[#3E352B]">
            Museum Zoologi Bogor
          </h3>
          <p className="text-[#6b675d] mb-6 leading-relaxed text-[15px]">
            Bangunan bersejarah yang diresmikan sejak zaman kolonial sebagai laboratorium 
            penelitian fauna. Kini menjadi pusat studi sekaligus wisata edukasi 
            yang menyimpan ragam koleksi unik yang mendokumentasikan kekayaan alam nusantara.
          </p>
          <p className="text-[#6b675d] mb-12 leading-relaxed text-[15px]">
            Dengan ribuan spesies yang dipamerkan, museum ini tidak hanya sekadar tempat 
            penyimpanan, melainkan sebuah wadah ilmu pengetahuan yang hidup.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <span className="px-5 py-2.5 border border-[#e8dccb] text-[13px] text-[#6b675d] hover:bg-[#3E352B] hover:text-white transition-colors duration-300 cursor-default">
              Koleksi Awetan
            </span>
            <span className="px-5 py-2.5 border border-[#e8dccb] text-[13px] text-[#6b675d] hover:bg-[#3E352B] hover:text-white transition-colors duration-300 cursor-default">
              Fosil Terbesar
            </span>
            <span className="px-5 py-2.5 border border-[#e8dccb] text-[13px] text-[#6b675d] hover:bg-[#3E352B] hover:text-white transition-colors duration-300 cursor-default">
              Diorama Fauna
            </span>
            <span className="px-5 py-2.5 border border-[#e8dccb] text-[13px] text-[#6b675d] hover:bg-[#3E352B] hover:text-white transition-colors duration-300 cursor-default">
              Edukasi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
