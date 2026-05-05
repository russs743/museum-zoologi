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
  type: 'image-guess' | 'sound-guess' | 'zoom-guess' | 'blur-guess' | 'silhouette-guess';
  question: string;
  image?: string;
  sound?: string;
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
    type: 'zoom-guess',
    question: "Siapakah 'Manusia Hutan' yang memiliki 96.9% DNA yang sama dengan kita?",
    image: '/orangutan.png',
    options: ["Orangutan", "Simpanse", "Gorila", "Lutung"],
    correctAnswer: "Orangutan",
    fact: "Orangutan berbagi sekitar 96,9% DNA dengan manusia. Nama mereka berasal dari bahasa Melayu yang berarti 'Manusia Hutan'."
  },
  {
    id: 2,
    categoryId: 'mamalia',
    type: 'image-guess',
    question: "Siapakah pemilik kulit berlipat-lipat yang menyerupai baju zirah ini?",
    image: 'https://images.unsplash.com/photo-1504194098406-89689689880f?auto=format&fit=crop&w=800&q=80',
    options: ["Badak Jawa", "Gajah Sumatera", "Komodo", "Tapir"],
    correctAnswer: "Badak Jawa",
    fact: "Badak Jawa memiliki kulit berlipat-lipat yang menyerupai baju zirah baja. Spesimennya di MZB adalah salah satu yang paling berharga."
  },
  {
    id: 11,
    categoryId: 'mamalia',
    type: 'silhouette-guess',
    question: "Melihat siluetnya yang unik, hewan berkantung apa ini?",
    image: 'https://images.unsplash.com/photo-1534123280145-885789500742?auto=format&fit=crop&w=800&q=80',
    options: ["Kanguru Pohon", "Kuskus", "Walabi", "Sugar Glider"],
    correctAnswer: "Kanguru Pohon",
    fact: "Indonesia memiliki kanguru pohon di Papua. Berbeda dengan sepupunya di Australia, mereka sangat lincah memanjat pohon."
  },
  {
    id: 14,
    categoryId: 'mamalia',
    type: 'blur-guess',
    question: "Mamalia ini memiliki sisik keras dan sering menggulung seperti bola saat terancam.",
    image: 'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?auto=format&fit=crop&w=800&q=80',
    options: ["Trenggiling", "Landak", "Armadillo", "Kura-kura"],
    correctAnswer: "Trenggiling",
    fact: "Trenggiling adalah mamalia yang sangat terancam karena perburuan liar. Sisiknya terbuat dari keratin."
  },
  
  // BURUNG
  {
    id: 3,
    categoryId: 'burung',
    type: 'image-guess',
    question: "Burung ini dijuluki 'Burung Surga' karena keindahan bulunya. Siapakah dia?",
    image: 'https://images.unsplash.com/photo-1522915822365-ea6ed54feac6?auto=format&fit=crop&w=800&q=80',
    options: ["Merak Hijau", "Cenderawasih", "Elang Jawa", "Kakatua"],
    correctAnswer: "Cenderawasih",
    fact: "Nama latinnya 'apoda' berarti 'tanpa kaki' karena dulu pedagang Eropa mengira burung ini selalu terbang di surga tanpa pernah mendarat."
  },
  {
    id: 4,
    categoryId: 'burung',
    type: 'zoom-guess',
    question: "Inspirasi lambang negara Indonesia berasal dari burung ini. Siapakah dia?",
    image: 'https://images.unsplash.com/photo-1611640191307-28569527ec31?auto=format&fit=crop&w=800&q=80',
    options: ["Garuda", "Elang Jawa", "Elang Brontok", "Alap-alap"],
    correctAnswer: "Elang Jawa",
    fact: "Elang Jawa (Nisaetus bartelsi) diyakini sebagai inspirasi lambang negara Garuda Pancasila karena jambulnya yang khas."
  },
  {
    id: 12,
    categoryId: 'burung',
    type: 'blur-guess',
    question: "Burung ini memiliki paruh raksasa yang sangat ikonik. Siapakah dia?",
    image: 'https://images.unsplash.com/photo-1510134027732-c67b9609206d?auto=format&fit=crop&w=800&q=80',
    options: ["Rangkong Gading", "Enggang", "Toucan", "Pelatuk"],
    correctAnswer: "Rangkong Gading",
    fact: "Rangkong Gading adalah burung nasional kebanggaan masyarakat Kalimantan yang kini statusnya terancam punah."
  },

  // REPTIL
  {
    id: 5,
    categoryId: 'reptil',
    type: 'image-guess',
    question: "Kadal terbesar di dunia yang hanya ada di Indonesia. Siapakah dia?",
    image: 'https://images.unsplash.com/photo-1601267866579-dd8bf81db969?auto=format&fit=crop&w=800&q=80',
    options: ["Biawak Air", "Komodo", "Iguana", "Tokek Hutan"],
    correctAnswer: "Komodo",
    fact: "Komodo memiliki kelenjar bisa di rahangnya dan mampu mendeteksi bau mangsa dari jarak hingga 10 kilometer."
  },
  {
    id: 6,
    categoryId: 'reptil',
    type: 'silhouette-guess',
    question: "Dari siluetnya, kura-kura raksasa apa yang mendiami perairan kita ini?",
    image: 'https://images.unsplash.com/photo-1544213426-5482e350ad00?auto=format&fit=crop&w=800&q=80',
    options: ["Penyu Belimbing", "Kura-kura Brazil", "Penyu Hijau", "Bulus"],
    correctAnswer: "Penyu Belimbing",
    fact: "Penyu Belimbing adalah penyu terbesar di dunia dan mampu bermigrasi ribuan kilometer melintasi samudra."
  },
  {
    id: 15,
    categoryId: 'reptil',
    type: 'zoom-guess',
    question: "Sisik yang menyerupai motif kain tradisional Nusantara. Ular apakah ini?",
    image: 'https://images.unsplash.com/photo-1611082269225-86641fb096e4?auto=format&fit=crop&w=800&q=80',
    options: ["Ular Kobra", "Sanca Batik", "Ular Hijau", "Piton Pohon"],
    correctAnswer: "Sanca Batik",
    fact: "Sanca Batik adalah ular terpanjang di dunia. Pola sisiknya yang rumit berfungsi sebagai kamuflase sempurna di lantai hutan."
  },

  // IKAN
  {
    id: 7,
    categoryId: 'ikan',
    type: 'image-guess',
    question: "Makhluk terbesar yang pernah hidup di Bumi, kerangkanya ada di MZB. Siapakah dia?",
    image: '/blue-whale.png',
    options: ["Paus Biru", "Megalodon", "Gajah Afrika", "Paus Sperma"],
    correctAnswer: "Paus Biru",
    fact: "Paus Biru adalah hewan terbesar di planet ini. Kerangkanya yang ada di Museum Zoologi Bogor memiliki panjang yang luar biasa."
  },
  {
    id: 13,
    categoryId: 'ikan',
    type: 'blur-guess',
    question: "Ikan air tawar predator ini sangat populer sebagai simbol keberuntungan.",
    image: 'https://images.unsplash.com/photo-1524704659690-3f8037201b3d?auto=format&fit=crop&w=800&q=80',
    options: ["Arwana Super Red", "Ikan Mas", "Koi", "Ikan Gabus"],
    correctAnswer: "Arwana Super Red",
    fact: "Arwana dijuluki sebagai 'Ikan Naga' karena sisiknya yang besar dan kumisnya yang menyerupai naga dalam mitologi."
  },

  // INVERTEBRATA
  {
    id: 9,
    categoryId: 'invertebrata',
    type: 'zoom-guess',
    question: "Siapakah pemilik 'mahkota' tanduk yang sangat kuat ini?",
    image: 'https://images.unsplash.com/photo-1605335198904-89f4175628b0?auto=format&fit=crop&w=800&q=80',
    options: ["Kumbang Tanduk", "Rangkong Gading", "Rusa Bawean", "Belalang Sembah"],
    correctAnswer: "Kumbang Tanduk",
    fact: "Kumbang tanduk dapat mengangkat beban 850 kali berat tubuhnya sendiri, menjadikannya salah satu makhluk terkuat di bumi."
  },
  {
    id: 10,
    categoryId: 'invertebrata',
    type: 'silhouette-guess',
    question: "Serangga malam apa yang memiliki sayap lebar seindah lukisan ini?",
    image: 'https://images.unsplash.com/photo-1463171356611-0e421b444b0d?auto=format&fit=crop&w=800&q=80',
    options: ["Ngengat Gajah", "Kupu-kupu Barong", "Lebah Madu", "Lalat Hijau"],
    correctAnswer: "Kupu-kupu Barong",
    fact: "Kupu-kupu Barong (Attacus atlas) adalah salah satu ngengat terbesar di dunia dengan rentang sayap mencapai 25 cm."
  }
];
