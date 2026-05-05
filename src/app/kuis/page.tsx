import React from 'react';
import ZoologyQuiz from '@/components/quiz/ZoologyQuiz';

export default function QuizPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#f9f7f4] text-[#3E352B]">
      {/* Header Section */}
      <section className="px-6 md:px-12 py-10 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-[--font-playfair] mb-4">
          Ekspedisi Pengetahuan
        </h1>
        <p className="text-[#8b877d] max-w-2xl mx-auto text-lg">
          Seberapa jauh kamu mengenal satwa nusantara? Selesaikan kuis ini dan tunjukkan bahwa kamu adalah penjelajah sejati.
        </p>
      </section>

      {/* Quiz Component */}
      <section className="pb-20">
        <ZoologyQuiz />
      </section>
    </main>
  );
}
