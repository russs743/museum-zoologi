import InteractiveMap from '@/components/home/InteractiveMap';

export default function DenahPage() {
  return (
    <main className="min-h-screen flex flex-col pt-24 bg-[#f9f7f4] text-[#3E352B] selection:bg-[#485942] selection:text-white">
      {/* Konten Utama */}
      <InteractiveMap />
    </main>
  );
}
