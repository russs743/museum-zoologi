import React from 'react';
import EvaluationForm from '@/components/evaluasi/EvaluationForm';
import { FileText } from 'lucide-react';

export default function EvaluasiPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#f2eee3] text-[#3E352B]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <header className="mb-16 text-center">
          <div className="w-16 h-16 bg-[#4a5942] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
            <FileText className="text-[#f9f7f4] w-8 h-8" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#4a5942] block mb-4">Suara Pengunjung</span>
          <h1 className="font-[--font-playfair] text-4xl md:text-5xl lg:text-6xl text-[#3E352B] mb-6">
            Evaluasi Museum Digital
          </h1>
          <p className="text-[#8b877d] max-w-2xl mx-auto text-lg leading-relaxed">
            Bantu kami meningkatkan kualitas pengalaman pameran di Museum Zoologi Bogor dengan mengisi kuesioner singkat ini.
          </p>
        </header>

        <EvaluationForm />
      </div>
    </main>
  );
}
