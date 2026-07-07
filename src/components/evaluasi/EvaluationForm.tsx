'use client';

import React, { useState } from 'react';
import { Star, Send, Check } from 'lucide-react';

export default function EvaluationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // GANTI URL INI DENGAN ENDPOINT FORMSPREE KAMU NANTI
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjkdrkg';

  const [ratings, setRatings] = useState<{ [key: string]: number }>({
    kemudahan: 0,
    visual: 0,
    galeri: 0,
  });

  const handleStarClick = (category: string, value: number) => {
    setRatings(prev => ({ ...prev, [category]: value }));
  };

  const StarRating = ({ name, category, label }: { name: string, category: string, label: string }) => (
    <div className="mb-6">
      <label className="block text-[#3E352B] font-medium mb-3">{label} <span className="text-red-500">*</span></label>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            type="button"
            key={star}
            onClick={() => handleStarClick(category, star)}
            className="focus:outline-none transition-transform hover:scale-110"
          >
            <Star 
              size={32} 
              className={`${star <= ratings[category] ? 'fill-[#c4843a] text-[#c4843a]' : 'text-[#d6cebc]'} transition-colors`} 
            />
          </button>
        ))}
      </div>
      {/* Hidden input to include the rating in the form submission */}
      <input type="hidden" name={name} value={ratings[category] || ""} required />
    </div>
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (FORMSPREE_ENDPOINT.includes('YOUR_ENDPOINT_HERE')) {
      alert("ENDPOINT FORMSPREE BELUM DISET! Tolong ganti URL di kodingan EvaluationForm.tsx dengan endpoint Formspree milikmu.");
      return;
    }

    setIsSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        setRatings({ kemudahan: 0, visual: 0, galeri: 0 });
      } else {
        alert("Terjadi kesalahan saat mengirim data.");
      }
    } catch (error) {
      alert("Gagal mengirim data. Periksa koneksi internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#f9f7f4] border border-[#d6cebc] p-12 text-center max-w-2xl mx-auto shadow-sm">
        <div className="w-20 h-20 bg-[#4a5942] rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={40} className="text-white" />
        </div>
        <h2 className="font-[--font-playfair] text-3xl text-[#3E352B] mb-4">Terima Kasih!</h2>
        <p className="text-[#8b877d] text-lg leading-relaxed mb-8">
          Masukan Anda sangat berharga untuk pengembangan website pameran Museum Zoologi Bogor.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-[10px] font-bold tracking-widest uppercase text-[#4a5942] border-b border-[#4a5942] pb-1 hover:text-[#3E352B] hover:border-[#3E352B] transition-colors"
        >
          Isi Form Lagi
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white border border-[#d6cebc] p-8 md:p-12 shadow-sm">
      <div className="mb-12 border-b border-[#d6cebc] pb-8">
        <h2 className="font-[--font-playfair] text-2xl text-[#3E352B] mb-2">Bagian 1: Profil Pengunjung</h2>
        <p className="text-[#8b877d] text-sm">Informasi dasar mengenai Anda.</p>
      </div>

      <div className="space-y-8 mb-12">
        <div>
          <label className="block text-[#3E352B] font-medium mb-3">Nama Anda <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            name="Nama" 
            required
            placeholder="Masukkan nama Anda" 
            className="w-full p-4 bg-[#f9f7f4] border border-[#d6cebc] text-[#3E352B] focus:border-[#4a5942] outline-none"
          />
        </div>

        <div>
          <label className="block text-[#3E352B] font-medium mb-3">Berapa usia Anda saat ini? <span className="text-red-500">*</span></label>
          <select name="Usia" required className="w-full p-4 bg-[#f9f7f4] border border-[#d6cebc] text-[#3E352B] focus:border-[#4a5942] outline-none">
            <option value="">Pilih rentang usia...</option>
            <option value="<12 tahun">&lt; 12 tahun</option>
            <option value="13-18 tahun">13 - 18 tahun</option>
            <option value="19-25 tahun">19 - 25 tahun</option>
            <option value="26-35 tahun">26 - 35 tahun</option>
            <option value=">35 tahun">&gt; 35 tahun</option>
          </select>
        </div>

        <div>
          <label className="block text-[#3E352B] font-medium mb-3">Apakah Anda pernah ke Museum Zoologi? <span className="text-red-500">*</span></label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="Kunjungan Pertama" value="Ya" required className="accent-[#4a5942] w-5 h-5" />
              <span className="text-[#5a574f]">Ya</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="Kunjungan Pertama" value="Tidak" required className="accent-[#4a5942] w-5 h-5" />
              <span className="text-[#5a574f]">Tidak</span>
            </label>
          </div>
        </div>
      </div>

      <div className="mb-12 border-b border-[#d6cebc] pb-8 pt-8">
        <h2 className="font-[--font-playfair] text-2xl text-[#3E352B] mb-2">Bagian 2: UX & Visual</h2>
        <p className="text-[#8b877d] text-sm">Evaluasi kenyamanan penggunaan aplikasi.</p>
      </div>

      <div className="space-y-8 mb-12">
        <StarRating 
          name="Kemudahan Penggunaan" 
          category="kemudahan" 
          label="Seberapa mudah prototype website ini diakses dan digunakan dari HP Anda?" 
        />
        <StarRating 
          name="Tampilan Visual" 
          category="visual" 
          label="Apakah tampilan visual (teks, warna, gambar) dari prototype ini cukup jelas untuk dibaca?" 
        />
      </div>

      <div className="mb-12 border-b border-[#d6cebc] pb-8 pt-8">
        <h2 className="font-[--font-playfair] text-2xl text-[#3E352B] mb-2">Bagian 3: Evaluasi Fitur</h2>
        <p className="text-[#8b877d] text-sm">Seberapa efektif fitur yang ada untuk membantu kunjungan pengguna.</p>
      </div>

      <div className="space-y-8 mb-12">
        <StarRating 
          name="Efektivitas Galeri Satwa" 
          category="galeri" 
          label="FITUR GALERI SATWA: Seberapa efektif informasi/katalog satwa berpotensi membantu pengunjung memahami spesimen?" 
        />

        <div>
          <label className="block text-[#3E352B] font-medium mb-3">FITUR KUIS: Apakah "Misi Zoologi" berpotensi membuat kunjungan menjadi lebih interaktif dan menyenangkan? <span className="text-red-500">*</span></label>
          <div className="space-y-3">
            {['Sangat Menyenangkan', 'Cukup Menyenangkan', 'Biasa Saja', 'Tidak Membantu'].map((opt) => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer p-4 border border-[#d6cebc] hover:bg-[#f9f7f4] transition-colors">
                <input type="radio" name="Keseruan Kuis" value={opt} required className="accent-[#4a5942] w-5 h-5 shrink-0" />
                <span className="text-[#5a574f]">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-[#3E352B] font-medium mb-3">Apakah Anda merasa website ini dapat membantu pengunjung mengamati spesimen lebih lama/detail jika digunakan di museum nanti? <span className="text-red-500">*</span></label>
          <select name="Dampak Pengamatan" required className="w-full p-4 bg-[#f9f7f4] border border-[#d6cebc] text-[#3E352B] focus:border-[#4a5942] outline-none">
            <option value="">Pilih jawaban...</option>
            <option value="Ya, jauh lebih lama">Ya, jauh lebih lama</option>
            <option value="Ya, sedikit lebih lama">Ya, sedikit lebih lama</option>
            <option value="Sama saja">Sama saja</option>
            <option value="Tidak">Tidak, malah mendistraksi</option>
          </select>
        </div>
      </div>

      <div className="mb-12 border-b border-[#d6cebc] pb-8 pt-8">
        <h2 className="font-[--font-playfair] text-2xl text-[#3E352B] mb-2">Bagian 4: Kesimpulan & Saran</h2>
        <p className="text-[#8b877d] text-sm">Masukan untuk pengembangan selanjutnya.</p>
      </div>

      <div className="space-y-8 mb-12">
        <div>
          <label className="block text-[#3E352B] font-medium mb-3">Dari skala 1-10, seberapa besar kemungkinan Anda merekomendasikan orang lain untuk mencoba prototype website ini? <span className="text-red-500">*</span></label>
          <div className="flex justify-between items-center bg-[#f9f7f4] p-4 border border-[#d6cebc]">
            <span className="text-xs text-[#8b877d] font-bold uppercase w-16">Tidak Mungkin</span>
            <div className="flex gap-1 md:gap-2 flex-1 justify-center overflow-x-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <label key={num} className="cursor-pointer relative">
                  <input type="radio" name="Skala Rekomendasi (NPS)" value={num} required className="peer sr-only" />
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-[#d6cebc] bg-white text-[#5a574f] peer-checked:bg-[#4a5942] peer-checked:text-white peer-checked:border-[#4a5942] transition-colors font-bold text-sm">
                    {num}
                  </div>
                </label>
              ))}
            </div>
            <span className="text-xs text-[#8b877d] font-bold uppercase w-16 text-right">Sangat Mungkin</span>
          </div>
        </div>

        <div>
          <label className="block text-[#3E352B] font-medium mb-3">Fitur apa yang paling Anda sukai dari aplikasi ini? <span className="text-red-500">*</span></label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {['Galeri Satwa', 'Kuis & Sertifikat', 'Tampilan Antarmuka', 'Informasi Detail/Fakta Unik'].map((opt) => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer p-4 border border-[#d6cebc] hover:bg-[#f9f7f4] transition-colors">
                <input type="radio" name="Fitur Favorit" value={opt} required className="accent-[#4a5942] w-5 h-5 shrink-0" />
                <span className="text-[#5a574f] text-sm">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-[#3E352B] font-medium mb-3">Apakah ada kendala saat menggunakan website ini? (Misal: lambat, error, tulisan kekecilan)</label>
          <textarea 
            name="Kendala" 
            rows={3} 
            placeholder="Tulis kendala yang dialami... (opsional)" 
            className="w-full p-4 bg-[#f9f7f4] border border-[#d6cebc] text-[#3E352B] focus:border-[#4a5942] outline-none resize-y"
          ></textarea>
        </div>

        <div>
          <label className="block text-[#3E352B] font-medium mb-3">Apa saran atau masukan Anda untuk membuat website ini menjadi lebih baik? <span className="text-red-500">*</span></label>
          <textarea 
            name="Saran" 
            rows={4} 
            placeholder="Tulis saran Anda di sini..." 
            required
            className="w-full p-4 bg-[#f9f7f4] border border-[#d6cebc] text-[#3E352B] focus:border-[#4a5942] outline-none resize-y"
          ></textarea>
        </div>

        <div>
          <label className="block text-[#3E352B] font-medium mb-3">Apakah ide ini bagus untuk diaplikasikan secara riil jika disempurnakan? <span className="text-red-500">*</span></label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="Ide Aplikasi Riil" value="Ya" required className="accent-[#4a5942] w-5 h-5" />
              <span className="text-[#5a574f]">Ya</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="Ide Aplikasi Riil" value="Tidak" required className="accent-[#4a5942] w-5 h-5" />
              <span className="text-[#5a574f]">Tidak</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-[#3E352B] font-medium mb-3">Apa alasan Anda memilih jawaban di atas? <span className="text-red-500">*</span></label>
          <textarea 
            name="Alasan Ide Aplikasi Riil" 
            rows={3} 
            placeholder="Tulis alasan Anda di sini..." 
            required
            className="w-full p-4 bg-[#f9f7f4] border border-[#d6cebc] text-[#3E352B] focus:border-[#4a5942] outline-none resize-y"
          ></textarea>
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-[#3E352B] text-white py-5 px-8 font-bold tracking-widest uppercase text-sm hover:bg-[#4a5942] transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          'Mengirim Data...'
        ) : (
          <>
            Kirim Evaluasi <Send size={18} />
          </>
        )}
      </button>

      <p className="text-center text-[10px] text-[#8b877d] mt-6">
        Didukung oleh Formspree. Data Anda akan digunakan secara anonim untuk keperluan riset dan pengembangan Museum Zoologi Bogor.
      </p>
    </form>
  );
}
