import React from 'react';
import { notFound } from 'next/navigation';
import StoryExperience from '@/components/story/StoryExperience';

const CATEGORY_MAP: Record<string, string> = {
  'mamalia': 'MAMALIA',
  'burung': 'BURUNG',
  'reptil': 'REPTIL & AMFIBI',
  'ikan': 'IKAN',
  'invertebrata': 'INVERTEBRATA'
};

const CATEGORY_STORY_DATA: Record<string, any> = {
  'mamalia': {
    id: 'mamalia',
    name: 'Mamalia',
    subtitle: 'Sang Penjaga Daratan',
    description: 'Golongan hewan menyusui yang memiliki tingkat adaptasi tertinggi di daratan bumi. Mulai dari harimau yang mendominasi hutan primer, hingga paus raksasa yang berevolusi kembali ke lautan lepas.',
    habitat: 'Tersebar di berbagai ekosistem Nusantara, dari padang sabana, kanopi hutan hujan tropis, hingga lautan dalam.',
    funFact: 'Beberapa mamalia berevolusi sangat ekstrem; ada yang bersayap seperti kelelawar, ada yang sepenuhnya akuatik, namun tetap harus naik ke permukaan untuk bernapas.'
  },
  'burung': {
    id: 'burung',
    name: 'Burung',
    subtitle: 'Simfoni Sayap Nusantara',
    description: 'Evolusi dari dinosaurus Theropoda yang selamat dari kepunahan massal. Mereka merajai angkasa dengan desain kerangka berongga yang sangat ringan namun luar biasa kuat.',
    habitat: 'Menguasai langit-langit hutan (kanopi), pesisir pantai, hingga pegunungan tertinggi.',
    funFact: 'Struktur nano pada bulu beberapa spesies burung mampu memantulkan cahaya sedemikian rupa sehingga menghasilkan warna metalik yang iridesen tanpa pigmen sama sekali.'
  },
  'reptil': {
    id: 'reptil',
    name: 'Reptil & Amfibi',
    subtitle: 'Warisan Purba',
    description: 'Pewaris biologi purbakala yang bertahan ratusan juta tahun dengan desain tubuh nyaris tanpa perubahan.',
    habitat: 'Tersebar di rawa, bantaran sungai, lantai hutan lembap, hingga padang pasir kering.',
    funFact: 'Reptil tertentu mampu bertahan tidak makan selama berbulan-bulan karena sistem metabolisme berdarah dingin (ektotermik) mereka yang sangat hemat energi.'
  },
  'ikan': {
    id: 'ikan',
    name: 'Ikan',
    subtitle: 'Misteri Kedalaman',
    description: 'Kelompok vertebrata pertama yang muncul di Bumi. Memiliki keragaman bentuk tertinggi yang menyesuaikan diri dengan tekanan dan kegelapan abadi.',
    habitat: 'Terumbu karang dangkal, palung samudra yang gelap gulita, hingga sungai-sungai berarus deras di pedalaman.',
    funFact: 'Beberapa spesies laut dalam mampu menghasilkan cahaya sendiri (Bioluminesensi) untuk memancing mangsa atau berkomunikasi dalam kegelapan absolut.'
  },
  'invertebrata': {
    id: 'invertebrata',
    name: 'Invertebrata',
    subtitle: 'Raksasa Kecil',
    description: 'Penguasa sesungguhnya dari ekosistem kita. Kelompok tanpa tulang belakang ini mencakup 97% dari seluruh spesies hewan yang hidup di planet ini.',
    habitat: 'Mendiami hampir setiap inci permukaan bumi, dari mikroskopis di pori-pori tanah, hingga koloni raksasa terumbu karang di lautan.',
    funFact: 'Kecepatan kepakan sayap beberapa serangga sangat tinggi hingga otot terbang mereka tidak digerakkan oleh impuls saraf satu-per-satu, melainkan oleh getaran mekanis.'
  }
};

export default async function CategoryStoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const catKey = resolvedParams.category.toLowerCase();
  const dbCategory = CATEGORY_MAP[catKey];

  if (!dbCategory || !CATEGORY_STORY_DATA[catKey]) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      <StoryExperience categoryData={CATEGORY_STORY_DATA[catKey]} />
    </main>
  );
}
