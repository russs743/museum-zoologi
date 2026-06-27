export interface QuizCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface QuizQuestion {
  id: number;
  categoryId: string;
  type: 'knowledge';
  question: string;
  options: string[];
  correctAnswer: string;
  fact: string;
}

export const QUIZ_CATEGORIES: QuizCategory[] = [
  {
    id: 'mamalia',
    title: 'Mamalia',
    description: 'Jelajahi dunia mamalia dari yang terkecil hingga raksasa samudra.',
    icon: '🐾',
    image: '/orangutan.png'
  },
  {
    id: 'burung',
    title: 'Burung',
    description: 'Terbang tinggi bersama keanekaragaman burung nusantara.',
    icon: '🦅',
    image: 'https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reptil',
    title: 'Reptil & Amfibi',
    description: 'Misteri makhluk berdarah dingin dari naga komodo hingga ular purba.',
    icon: '🦎',
    image: 'https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ikan',
    title: 'Ikan',
    description: 'Keajaiban bawah air dari fosil hidup hingga ikan air tawar eksotis.',
    icon: '🐟',
    image: '/blue-whale.png'
  },
  {
    id: 'invertebrata',
    title: 'Invertebrata',
    description: 'Dunia raksasa kecil tanpa tulang belakang.',
    icon: '🦋',
    image: 'https://images.unsplash.com/photo-1576082867959-86716091176b?auto=format&fit=crop&w=800&q=80'
  }
];

export const ZOOLOGY_QUIZ_DATA: QuizQuestion[] = [
  // MAMALIA
  {
    id: 1,
    categoryId: 'mamalia',
    type: 'knowledge',
    question: "Siapakah 'Manusia Hutan' yang memiliki 96.9% DNA yang sama dengan kita?",
    options: ["Orangutan", "Simpanse", "Gorila", "Lutung"],
    correctAnswer: "Orangutan",
    fact: "Orangutan berbagi sekitar 96,9% DNA dengan manusia. Nama mereka berasal dari bahasa Melayu yang berarti 'Manusia Hutan'."
  },
  {
    id: 2,
    categoryId: 'mamalia',
    type: 'knowledge',
    question: "Hewan apakah yang memiliki kulit berlipat-lipat menyerupai baju zirah?",
    options: ["Badak Jawa", "Gajah Sumatera", "Komodo", "Tapir"],
    correctAnswer: "Badak Jawa",
    fact: "Badak Jawa memiliki kulit berlipat-lipat yang menyerupai baju zirah baja. Spesimennya di MZB adalah salah satu yang paling berharga."
  },
  {
    id: 11,
    categoryId: 'mamalia',
    type: 'knowledge',
    question: "Hewan berkantung asli Indonesia yang pandai memanjat pohon adalah?",
    options: ["Kanguru Pohon", "Kuskus", "Walabi", "Sugar Glider"],
    correctAnswer: "Kanguru Pohon",
    fact: "Indonesia memiliki kanguru pohon di Papua. Berbeda dengan sepupunya di Australia, mereka sangat lincah memanjat pohon."
  },
  {
    id: 14,
    categoryId: 'mamalia',
    type: 'knowledge',
    question: "Mamalia yang memiliki sisik keras dan sering menggulung seperti bola saat terancam adalah?",
    options: ["Trenggiling", "Landak", "Armadillo", "Kura-kura"],
    correctAnswer: "Trenggiling",
    fact: "Trenggiling adalah mamalia yang sangat terancam karena perburuan liar. Sisiknya terbuat dari keratin."
  },
  {
    id: 7,
    categoryId: 'mamalia',
    type: 'knowledge',
    question: "Makhluk terbesar yang pernah hidup di Bumi, kerangkanya ada di MZB. Siapakah dia?",
    options: ["Paus Biru", "Megalodon", "Gajah Afrika", "Paus Sperma"],
    correctAnswer: "Paus Biru",
    fact: "Paus Biru adalah hewan terbesar di planet ini. Kerangkanya yang ada di Museum Zoologi Bogor memiliki panjang yang luar biasa."
  },
  
  // BURUNG
  {
    id: 3,
    categoryId: 'burung',
    type: 'knowledge',
    question: "Burung ini dijuluki 'Burung Surga' karena keindahan bulunya. Siapakah dia?",
    options: ["Merak Hijau", "Cenderawasih", "Elang Jawa", "Kakatua"],
    correctAnswer: "Cenderawasih",
    fact: "Nama latinnya 'apoda' berarti 'tanpa kaki' karena dulu pedagang Eropa mengira burung ini selalu terbang di surga tanpa pernah mendarat."
  },
  {
    id: 4,
    categoryId: 'burung',
    type: 'knowledge',
    question: "Inspirasi lambang negara Indonesia berasal dari burung ini. Siapakah dia?",
    options: ["Garuda", "Elang Jawa", "Elang Brontok", "Alap-alap"],
    correctAnswer: "Elang Jawa",
    fact: "Elang Jawa (Nisaetus bartelsi) diyakini sebagai inspirasi lambang negara Garuda Pancasila karena jambulnya yang khas."
  },
  {
    id: 12,
    categoryId: 'burung',
    type: 'knowledge',
    question: "Burung ini memiliki paruh raksasa yang sangat ikonik dan merupakan kebanggaan masyarakat Kalimantan. Siapakah dia?",
    options: ["Rangkong Gading", "Enggang", "Toucan", "Pelatuk"],
    correctAnswer: "Rangkong Gading",
    fact: "Rangkong Gading adalah burung nasional kebanggaan masyarakat Kalimantan yang kini statusnya terancam punah."
  },

  // REPTIL
  {
    id: 5,
    categoryId: 'reptil',
    type: 'knowledge',
    question: "Kadal terbesar di dunia yang hanya ada di Indonesia. Siapakah dia?",
    options: ["Biawak Air", "Komodo", "Iguana", "Tokek Hutan"],
    correctAnswer: "Komodo",
    fact: "Komodo memiliki kelenjar bisa di rahangnya dan mampu mendeteksi bau mangsa dari jarak hingga 10 kilometer."
  },
  {
    id: 6,
    categoryId: 'reptil',
    type: 'knowledge',
    question: "Kura-kura laut raksasa apa yang mendiami perairan kita dan mampu bermigrasi ribuan kilometer?",
    options: ["Penyu Belimbing", "Kura-kura Brazil", "Penyu Hijau", "Bulus"],
    correctAnswer: "Penyu Belimbing",
    fact: "Penyu Belimbing adalah penyu terbesar di dunia dan mampu bermigrasi ribuan kilometer melintasi samudra."
  },
  {
    id: 15,
    categoryId: 'reptil',
    type: 'knowledge',
    question: "Ular terpanjang di dunia yang sisiknya menyerupai motif kain tradisional Nusantara adalah?",
    options: ["Ular Kobra", "Sanca Batik", "Ular Hijau", "Piton Pohon"],
    correctAnswer: "Sanca Batik",
    fact: "Sanca Batik adalah ular terpanjang di dunia. Pola sisiknya yang rumit berfungsi sebagai kamuflase sempurna di lantai hutan."
  },

  // IKAN
  {
    id: 8,
    categoryId: 'ikan',
    type: 'knowledge',
    question: "Fosil hidup yang dianggap punah bersama dinosaurus 66 juta tahun lalu, ditemukan kembali hidup di Manado pada 1998. Siapakah dia?",
    options: ["Arwana", "Coelacanth", "Hiu Gergaji", "Pari Manta"],
    correctAnswer: "Coelacanth",
    fact: "Coelacanth dianggap telah punah 66 juta tahun lalu bersama dinosaurus. Pada 1998, ilmuwan Mark Erdmann menemukannya hidup-hidup di perairan Manado, Sulawesi Utara — menjadikannya salah satu penemuan zoologi terbesar abad ini."
  },
  {
    id: 13,
    categoryId: 'ikan',
    type: 'knowledge',
    question: "Ikan air tawar predator ini sangat populer sebagai simbol keberuntungan dan dijuluki 'Ikan Naga'.",
    options: ["Arwana Super Red", "Ikan Mas", "Koi", "Ikan Gabus"],
    correctAnswer: "Arwana Super Red",
    fact: "Arwana dijuluki sebagai 'Ikan Naga' karena sisiknya yang besar dan kumisnya yang menyerupai naga dalam mitologi."
  },


  // INVERTEBRATA
  {
    id: 9,
    categoryId: 'invertebrata',
    type: 'knowledge',
    question: "Hewan invertebrata apakah yang dapat mengangkat beban 850 kali berat tubuhnya sendiri?",
    options: ["Kumbang Tanduk", "Rangkong Gading", "Rusa Bawean", "Belalang Sembah"],
    correctAnswer: "Kumbang Tanduk",
    fact: "Kumbang tanduk dapat mengangkat beban 850 kali berat tubuhnya sendiri, menjadikannya salah satu makhluk terkuat di bumi."
  },
  {
    id: 10,
    categoryId: 'invertebrata',
    type: 'knowledge',
    question: "Ngengat raksasa apa yang memiliki sayap lebar seindah lukisan dan merupakan salah satu yang terbesar di dunia?",
    options: ["Ngengat Gajah", "Ngengat Atlas", "Lebah Madu", "Lalat Hijau"],
    correctAnswer: "Ngengat Atlas",
    fact: "Ngengat Atlas (Attacus atlas) adalah salah satu ngengat terbesar di dunia dengan rentang sayap mencapai 25–30 cm. Ia adalah ngengat, bukan kupu-kupu — aktif di malam hari dan tidak makan sama sekali saat dewasa."
  }
];

