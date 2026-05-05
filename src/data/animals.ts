import { AnimalData } from '../types/animal';

export const animalsData: AnimalData[] = [

  // ==========================================
  // KATEGORI 1: MAMALIA
  // ==========================================
  {
    id: 'paus-biru',
    name: 'Paus Biru',
    scientificName: 'Balaenoptera musculus',
    category: 'MAMALIA',
    room: 'paus',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=800&q=80',
    habitat: 'Samudra terbuka di seluruh dunia, dari kutub hingga perairan tropis.',
    conservationStatus: 'Genting',
    funFact: 'Suara paus biru dapat terdengar hingga jarak 1.600 km — lebih jauh daripada sinyal radio AM!',
    description: 'Paus biru adalah makhluk terbesar yang pernah ada di Bumi, dengan panjang mencapai 33 meter dan berat hingga 190 ton. Museum Zoologi Bogor (MZB) menyimpan koleksi kerangka paus biru yang menjadi daya tarik utama, memperlihatkan skala sesungguhnya dari raksasa laut ini. Meski volumenya luar biasa, paus biru hidup dari krill — krustasea seukuran jari — yang disaring menggunakan lempeng baleen di mulutnya. Setiap hari ia menelan sekitar 4 ton krill. Keberadaannya yang semakin langka mengingatkan kita betapa rawannya titan lautan ini terhadap perburuan dan perubahan iklim.'
  },
  {
    id: 'badak-jawa',
    name: 'Badak Jawa',
    scientificName: 'Rhinoceros sondaicus',
    category: 'MAMALIA',
    room: 'mamalia',
    image: 'https://images.unsplash.com/photo-1590597818987-a22a6113ccda?auto=format&fit=crop&w=800&q=80',
    habitat: 'Hutan hujan tropis dataran rendah, kini hanya tersisa di Taman Nasional Ujung Kulon.',
    conservationStatus: 'Kritis',
    funFact: 'Populasi Badak Jawa saat ini diperkirakan hanya 72 ekor — menjadikannya mamalia darat terlangka di Bumi.',
    description: 'Dijuluki maskot MZB, Badak Jawa adalah salah satu pameran paling ikonik dalam koleksi museum. Berbeda dengan badak Afrika yang memiliki dua cula, badak Jawa hanya bercula satu yang tersusun dari keratin — material yang sama dengan kuku manusia. Kulitnya yang berlipat-lipat menyerupai zirah baja, memberikan perlindungan alami sekaligus membuatnya tampak seperti makhluk dari era prasejarah. Menyaksikan spesimennya di MZB adalah kesempatan langka untuk berhadapan muka dengan raksasa yang kini nyaris punah.'
  },
  {
    id: 'gajah-sumatera',
    name: 'Gajah Sumatera',
    scientificName: 'Elephas maximus sumatranus',
    category: 'MAMALIA',
    room: 'mamalia',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80',
    habitat: 'Hutan dataran rendah dan pegunungan rendah di Pulau Sumatera.',
    conservationStatus: 'Kritis',
    funFact: 'Gajah Sumatera adalah subspesies gajah Asia terkecil, namun otaknya adalah yang terbesar di antara semua hewan darat.',
    description: 'Gajah Sumatera merupakan insinyur ekosistem sejati. Pergerakannya melalui hutan menciptakan jalur yang menjadi jalan air dan habitat bagi hewan lain. MZB memiliki koleksi tengkorak dan gading gajah Sumatera yang memperlihatkan anatomi mengesankan dari mamalia darat terbesar Indonesia ini. Sayangnya, deforestasi dan konflik dengan manusia telah menyusutkan populasinya hingga kurang dari 3.000 ekor. Setiap individunya memiliki cetakan telinga yang unik, layaknya sidik jari pada manusia.'
  },
  {
    id: 'harimau-sumatera',
    name: 'Harimau Sumatera',
    scientificName: 'Panthera tigris sumatrae',
    category: 'MAMALIA',
    room: 'mamalia',
    image: 'https://images.unsplash.com/photo-1564750699222-0a00afeb0e6a?auto=format&fit=crop&w=800&q=80',
    habitat: 'Hutan primer, sekunder, dan hutan gambut di Pulau Sumatera.',
    conservationStatus: 'Kritis',
    funFact: 'Harimau Sumatera adalah satu-satunya subspesies harimau yang masih hidup di Indonesia setelah harimau Jawa dan harimau Bali dinyatakan punah.',
    description: 'Sebagai predator puncak di Sumatera, harimau ini menjaga keseimbangan ekosistem dengan mengontrol populasi mangsa. Koleksi taksidermia dan kerangka harimau Sumatera di MZB menampilkan detail menakjubkan dari fisiologi pemburu ulung ini — mulai dari cakar yang bisa ditarik masuk, hingga pola loreng yang unik seperti sidik jari. Ukurannya memang lebih kecil dari subspesies harimau lain, namun kelincahan dan kekuatan gigitannya jauh lebih ditakuti di habitatnya.'
  },
  {
    id: 'orangutan',
    name: 'Orangutan Sumatera',
    scientificName: 'Pongo abelii',
    category: 'MAMALIA',
    room: 'mamalia',
    image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80',
    habitat: 'Hutan hujan tropis dataran rendah dan pegunungan di Sumatera bagian utara.',
    conservationStatus: 'Kritis',
    funFact: 'Orangutan berbagi sekitar 96,9% DNA dengan manusia, dan anaknya disusui hingga 8 tahun — masa menyusu terlama di antara semua mamalia selain manusia.',
    description: 'Orangutan adalah satu-satunya kera besar yang hidup di Asia, dan namanya berasal dari bahasa Melayu yang berarti "manusia hutan." Di MZB, spesimennya dipajang dalam pose yang memperlihatkan panjang lengan mereka yang luar biasa — bisa mencapai 2,2 meter dari ujung ke ujung. Mereka adalah arsitek hutan yang handal, membangun sarang baru dari ranting setiap malam. Kecerdasan mereka terlihat dalam penggunaan alat: dari ranting untuk mengambil madu hingga daun sebagai penutup saat hujan.'
  },

  // ==========================================
  // KATEGORI 2: BURUNG
  // ==========================================
  {
    id: 'elang-jawa',
    name: 'Elang Jawa',
    scientificName: 'Nisaetus bartelsi',
    category: 'BURUNG',
    room: 'burung1',
    image: 'https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=800&q=80',
    habitat: 'Hutan hujan tropis pegunungan di Pulau Jawa, pada ketinggian 500–3.000 mdpl.',
    conservationStatus: 'Genting',
    funFact: 'Elang Jawa diyakini sebagai inspirasi utama dari simbol negara Indonesia, Garuda Pancasila, berkat jambul dan postur gagahnya.',
    description: 'Elang Jawa adalah puncak dari rantai makanan di hutan pegunungan Jawa. Dengan rentang sayap mencapai 120 cm, ia berburu mamalia kecil, burung, dan kadal dengan kecepatan menukik yang mendebarkan. Jambul di kepalanya yang berdiri tegak saat waspada menjadi ciri khas yang membuatnya begitu ikonik. MZB memiliki spesimen awetan yang ditampilkan secara dramatis, memperlihatkan setiap detail bulu dan cakarnya. Keberadaannya di alam liar adalah indikator kesehatan hutan Jawa.'
  },
  {
    id: 'kasuari-gelambir-ganda',
    name: 'Kasuari Gelambir Ganda',
    scientificName: 'Casuarius casuarius',
    category: 'BURUNG',
    room: 'burung1',
    image: 'https://images.unsplash.com/photo-1549467610-d79da9bbca74?auto=format&fit=crop&w=800&q=80',
    habitat: 'Hutan hujan tropis dataran rendah dan pegunungan di Papua dan Australia bagian utara.',
    conservationStatus: 'Rentan',
    funFact: 'Kasuari jantan adalah ayah tunggal sejati — ia mengerami telur sendirian selama 50 hari dan mengasuh anaknya hingga 9 bulan.',
    description: 'Dengan tinggi hingga 1,8 meter dan berat mencapai 85 kg, kasuari adalah burung terbesar kedua di dunia. Casque atau tanduk tanduk keratinnya di atas kepala diduga berfungsi untuk membelah semak belukar atau komunikasi akustik. Namun yang paling menakutkan adalah cakar tengahnya yang lurus dan tajam seperti belati — mampu mengoyak musuh dalam sekali tendangan. Koleksi kasuari di MZB memperlihatkan kemegahan burung purba yang berkeliaran di hutan Papua ini.'
  },
  {
    id: 'cendrawasih-kuning-besar',
    name: 'Cendrawasih Kuning Besar',
    scientificName: 'Paradisaea apoda',
    category: 'BURUNG',
    room: 'burung2',
    image: 'https://images.unsplash.com/photo-1522915822365-ea6ed54feac6?auto=format&fit=crop&w=800&q=80',
    habitat: 'Kanopi hutan dataran rendah di Kepulauan Aru dan Papua bagian selatan.',
    conservationStatus: 'Resiko Rendah',
    funFact: 'Nama latinnya "apoda" berarti "tanpa kaki" — karena pedagang Eropa abad ke-16 menerima spesimen tanpa kaki dan mengira burung surga ini tidak pernah mendarat.',
    description: 'Burung Cendrawasih adalah mahkota keindahan Flora-Fauna Papua. Bulu ekornya yang menjuntai panjang berwarna kuning keemasan berkilau seperti surai saat pejantan menari untuk memikat betina. Tarian pejantan di dahan pohon merupakan salah satu pertunjukan paling dramatis di alam liar. MZB menyimpan koleksi spesimen cendrawasih yang sangat beragam, menjadikannya galeri burung surga terlengkap di Indonesia. Setiap bulu yang tampak sederhana ternyata memiliki struktur nano yang memantulkan cahaya secara berbeda.'
  },
  {
    id: 'rangkong-gading',
    name: 'Rangkong Gading',
    scientificName: 'Rhinoplax vigil',
    category: 'BURUNG',
    room: 'burung1',
    image: 'https://images.unsplash.com/photo-1588691503923-b6840d0498b0?auto=format&fit=crop&w=800&q=80',
    habitat: 'Hutan hujan tropis dataran rendah di Semenanjung Malaya, Sumatera, dan Kalimantan.',
    conservationStatus: 'Sangat Kritis',
    funFact: 'Casque atau tanduk rangkong gading padat berisi, berbeda dari rangkong lain — dan inilah yang membuatnya diburu untuk diukir, seperti gading gajah.',
    description: 'Rangkong Gading adalah penjaga hutan yang tak tergantikan. Paruhnya yang besar memungkinkannya memakan buah-buahan keras yang tak bisa diproses hewan lain, menjadikannya pemencar biji paling efektif di hutan Kalimantan. Bunyi kepakan sayapnya yang keras terdengar dari jauh bagai pukulan kayu, menandai wilayah kekuasaannya. Koleksi spesimen di MZB menjadi bukti nyata keberadaan burung megah yang kini terancam oleh perburuan liar untuk diambil casque-nya yang bernilai tinggi di pasar gelap.'
  },
  {
    id: 'merak-hijau',
    name: 'Merak Hijau',
    scientificName: 'Pavo muticus',
    category: 'BURUNG',
    room: 'burung2',
    image: 'https://images.unsplash.com/photo-1512275224-c3b9f6e6d943?auto=format&fit=crop&w=800&q=80',
    habitat: 'Hutan gugur dan sabana di Jawa, serta beberapa wilayah di Asia Tenggara daratan.',
    conservationStatus: 'Genting',
    funFact: 'Ekor panjang yang mengembang indah pada merak jantan disebut "train" — dan setiap "mata" di bulu itu adalah karya arsitektur nano yang memantulkan cahaya secara iridesen.',
    description: 'Berbeda dari saudaranya Merak Biru dari India, Merak Hijau adalah spesies asli Asia Tenggara yang hampir punah. Warna hijaunya yang metalik berkilau seperti zamrud di bawah sinar matahari. Tarian merak jantan yang mengembangkan ekornya sepanjang hingga 3 meter adalah salah satu pemandangan paling megah di dunia satwa liar. MZB menyimpan spesimen utuh merak hijau Jawa yang seni penataannya memperlihatkan kemegahan burung yang kini terancam oleh perburuan dan hilangnya habitat.'
  },

  // ==========================================
  // KATEGORI 3: REPTIL & AMFIBI
  // ==========================================
  {
    id: 'komodo',
    name: 'Komodo',
    scientificName: 'Varanus komodoensis',
    category: 'REPTIL & AMFIBI',
    room: 'reptil',
    image: 'https://images.unsplash.com/photo-1601267866579-dd8bf81db969?auto=format&fit=crop&w=800&q=80',
    habitat: 'Pulau Komodo, Rinca, Flores, dan Gili Motang di Provinsi Nusa Tenggara Timur.',
    conservationStatus: 'Genting',
    funFact: 'Komodo betina mampu bereproduksi secara partenogenesis — menghasilkan keturunan tanpa pembuahan jantan, sebuah fenomena langka pada vertebrata besar.',
    description: 'Komodo adalah kadal terbesar yang masih hidup di Bumi, mewarisi garis evolusi purba yang telah berlangsung jutaan tahun. Dengan panjang mencapai 3 meter dan berat lebih dari 70 kg, ia adalah predator puncak di ekosistem pulau-pulau kecil. Lidahnya yang bercabang mendeteksi bau darah dari jarak hingga 10 kilometer. Kelenjar bisa di rahangnya mengandung senyawa antikoagulan yang melemahkan mangsa. Spesimen dan kerangka komodo di MZB menjadi jendela ilmu yang membawa kita ke zaman ketika reptil raksasa masih menguasai daratan.'
  },
  {
    id: 'penyu-hijau',
    name: 'Penyu Hijau',
    scientificName: 'Chelonia mydas',
    category: 'REPTIL & AMFIBI',
    room: 'reptil',
    image: 'https://images.unsplash.com/photo-1549471013-3364d7220b75?auto=format&fit=crop&w=800&q=80',
    habitat: 'Samudra tropis dan subtropis di seluruh dunia; bertelur di pantai berpasir Indonesia.',
    conservationStatus: 'Genting',
    funFact: 'Penyu hijau dapat bernavigasi ribuan kilometer kembali ke pantai tempat ia menetas — menggunakan medan magnet Bumi sebagai "GPS" alami.',
    description: 'Penyu hijau adalah penjelajah samudra yang telah mengarungi lautan sejak zaman dinosaurus. Nama "hijau" bukan berasal dari warna cangkangnya, melainkan dari warna lemak tubuhnya yang berwarna hijau karena diet lamun. MZB memiliki koleksi lengkap cangkang penyu berbagai ukuran yang memperlihatkan pertumbuhan dari tukik muda hingga individu dewasa berusia puluhan tahun. Setiap kali penyu betina kembali ke pantai untuk bertelur, ia sedang melakukan perjalanan kembali ke memori lokasi yang tertanam ribuan kilometer jauhnya.'
  },
  {
    id: 'sanca-batik',
    name: 'Ular Sanca Batik',
    scientificName: 'Malayopython reticulatus',
    category: 'REPTIL & AMFIBI',
    room: 'reptil',
    image: 'https://images.unsplash.com/photo-1611082269225-86641fb096e4?auto=format&fit=crop&w=800&q=80',
    habitat: 'Hutan hujan, semak belukar, dan daerah dekat sungai di Asia Tenggara.',
    conservationStatus: 'Resiko Rendah',
    funFact: 'Sanca batik adalah ular terpanjang di dunia — rekor individu tercatat mencapai 7,67 meter, dan MZB menyimpan salah satu spesimen terpanjang di Indonesia.',
    description: 'Pola sisik sanca batik yang rumit seperti motif batik Nusantara adalah kamuflase sempurna di lantai hutan. Meski tak berbisa, ular ini melumpuhkan mangsanya — dari tikus hingga rusa kecil — dengan lilitan yang menekan sistem kardiovaskular korban. Rahangnya yang bisa terbuka sangat lebar memungkinkannya menelan mangsa yang lebih besar dari kepalanya sendiri. Spesimen sanca batik di MZB dipajang dalam panjang penuh, memberikan gambaran skala yang membuat pengunjung berdecak kagum.'
  },
  {
    id: 'buaya-muara',
    name: 'Buaya Muara',
    scientificName: 'Crocodylus porosus',
    category: 'REPTIL & AMFIBI',
    room: 'reptil',
    image: 'https://images.unsplash.com/photo-1590520638062-8182cdb03511?auto=format&fit=crop&w=800&q=80',
    habitat: 'Muara sungai, hutan mangrove, dan pesisir dari India hingga Australia.',
    conservationStatus: 'Resiko Rendah',
    funFact: 'Buaya muara memiliki gigitan terkuat dari semua hewan yang pernah diukur — 16.000 Newton, setara dengan tekanan sebuah truk berat.',
    description: 'Buaya muara adalah reptil terbesar yang masih hidup di Bumi, dengan panjang mencapai 6 meter dan berat lebih dari satu ton. Ia adalah survivor evolusi — desain tubuhnya hampir tidak berubah selama 200 juta tahun. Buaya muara mampu menyelam hingga 1 jam dan berenang menyeberangi lautan — inilah yang membuat populasinya tersebar dari India hingga Australia. Meski tampak lamban di darat, mereka mampu meledak dengan kecepatan mengejutkan saat mengincar mangsa di tepian air. MZB memiliki tengkorak dan kerangka buaya berukuran besar yang sangat mengesankan.'
  },
  {
    id: 'katak-pohon-jawa',
    name: 'Katak Pohon Jawa',
    scientificName: 'Rhacophorus javanus',
    category: 'REPTIL & AMFIBI',
    room: 'reptil',
    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80',
    habitat: 'Hutan primer dan sekunder di pegunungan Pulau Jawa, pada ketinggian 300–1.500 mdpl.',
    conservationStatus: 'Genting',
    funFact: 'Katak pohon Jawa adalah amfibi yang bisa "terbang" — selaput di antara jari-jarinya yang panjang memungkinkannya meluncur dari satu pohon ke pohon lain hingga 15 meter.',
    description: 'Katak pohon Jawa adalah endemik berharga yang hanya ditemukan di Pulau Jawa. Kulitnya yang hijau zamrud berfungsi sebagai penyamaran sempurna di dedaunan. Yang paling unik adalah strategi reproduksinya: betina mengocok lendir menjadi sarang busa di atas permukaan air — telur menetas di busa, lalu berudu jatuh ke air di bawahnya. Koleksi spesimen MZB mendokumentasikan keanekaragaman amfibi Jawa, termasuk spesies-spesies yang kini semakin langka akibat penyakit chytrid dan hilangnya habitat hutan.'
  },

  // ==========================================
  // KATEGORI 4: IKAN
  // ==========================================
  {
    id: 'coelacanth',
    name: 'Ikan Purba Coelacanth',
    scientificName: 'Latimeria menadoensis',
    category: 'IKAN',
    room: 'ikan',
    image: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?auto=format&fit=crop&w=800&q=80',
    habitat: 'Perairan laut dalam di sekitar perairan Sulawesi Utara (Manado), pada kedalaman 150–700 meter.',
    conservationStatus: 'Rentan',
    funFact: 'Coelacanth pertama kali ditemukan di Manado pada 1997 — membuktikan bahwa "fosil hidup" berusia 400 juta tahun ini masih eksis di perairan Indonesia.',
    description: 'Penemuan Coelacanth Indonesia (Latimeria menadoensis) adalah salah satu berita zoologi terbesar abad ke-20. Ikan ini sempat dianggap punah 65 juta tahun lalu bersama dinosaurus — hingga ditemukan hidup-hidup. Siripnya yang berdaging dan bergerak seperti anggota gerak mendukung teori bahwa ikan ini adalah nenek moyang tetrapoda darat. MZB menyimpan spesimen autentik coelacanth Indonesia yang menjadi koleksi ilmiah paling berharga di museum, menarik perhatian peneliti dari seluruh dunia.'
  },
  {
    id: 'arwana-super-red',
    name: 'Arwana Super Red',
    scientificName: 'Scleropages legendrei',
    category: 'IKAN',
    room: 'ikan',
    image: 'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?auto=format&fit=crop&w=800&q=80',
    habitat: 'Sungai gambut dan rawa di Kalimantan Barat, khususnya daerah Kapuas dan Sentarum.',
    conservationStatus: 'Kritis',
    funFact: 'Arwana Super Red pernah dijual dengan harga lebih dari 400 juta rupiah per ekor di pasar ikan hias internasional — menjadikannya salah satu ikan paling mahal di dunia.',
    description: 'Arwana Super Red adalah kebanggaan perairan Kalimantan dengan sisik besar berwarna merah membara yang berkilau seperti batu permata. Ikan purba ini telah ada jauh sebelum zaman es, mewarisi desain tubuh yang hampir sempurna. Ia adalah predator permukaan yang mampu melompat setengah meter untuk menangkap serangga, bahkan burung kecil di atas air. Rahang bawahnya yang menonjol dan kumis di ujung mulutnya —antennae sensitif yang mendeteksi gerakan mangsa— menjadikannya salah satu predator paling efisien di alam sungai tropis.'
  },
  {
    id: 'ikan-pari-manta',
    name: 'Pari Manta',
    scientificName: 'Mobula birostris',
    category: 'IKAN',
    room: 'ikan',
    image: 'https://images.unsplash.com/photo-1516220362602-dba5272034e7?auto=format&fit=crop&w=800&q=80',
    habitat: 'Perairan tropis dan subtropis, termasuk Raja Ampat, Komodo, dan Nusa Tenggara.',
    conservationStatus: 'Rentan',
    funFact: 'Pari manta memiliki otak terbesar relatif terhadap tubuhnya di antara semua ikan — bahkan menunjukkan kemampuan mengenali diri sendiri di cermin, tanda kecerdasan tinggi.',
    description: 'Dengan rentang sirip mencapai 7 meter, pari manta adalah ikan bertulang rawan terbesar di lautan. Ia terbang melayang dalam air seperti elang di angkasa, menggunakan sepasang "tanduk" cepalika di kepala untuk menggiring plankton masuk ke mulutnya yang menganga. MZB memiliki koleksi spesimen pari dari berbagai spesies, mendokumentasikan keanekaragaman elasmobranchia di perairan Indonesia yang merupakan habitat pari terkaya di dunia. Populasinya terancam oleh perburuan untuk diambil insang (gill raker) yang dipercaya memiliki khasiat dalam pengobatan tradisional Tiongkok.'
  },
  {
    id: 'hiu-gergaji',
    name: 'Hiu Gergaji',
    scientificName: 'Pristiodon cirratus',
    category: 'IKAN',
    room: 'ikan',
    image: 'https://images.unsplash.com/photo-1559827258-dc4c79b78b56?auto=format&fit=crop&w=800&q=80',
    habitat: 'Perairan laut dangkal tropis dan subtropis, termasuk muara sungai di Indonesia.',
    conservationStatus: 'Sangat Kritis',
    funFact: 'Moncong bergigi gergaji (rostrum) pada hiu gergaji bukan hanya untuk menyerang — ia penuh dengan reseptor elektromagnetik yang mendeteksi gerakan mangsa yang bersembunyi di pasir.',
    description: 'Hiu gergaji adalah salah satu ikan paling unik dan paling terancam punah di dunia. Moncongnya yang panjang berjajar gigi tajam seperti gergaji berfungsi sebagai sensor canggih sekaligus senjata mematikan — diayunkan dari sisi ke sisi untuk menebas sekolah ikan. Spesies ini terancam punah akibat tangkapan sampingan di jaring nelayan dan kehilangan habitat. Koleksi spesimen di MZB menjadi dokumentasi penting dari hewan yang kini hampir tidak mungkin ditemukan di alam bebas.'
  },
  {
    id: 'ikan-sumpit',
    name: 'Ikan Sumpit',
    scientificName: 'Toxotes jaculatrix',
    category: 'IKAN',
    room: 'ikan',
    image: 'https://images.unsplash.com/photo-1573819791279-d2e02f5f4b79?auto=format&fit=crop&w=800&q=80',
    habitat: 'Hutan mangrove, muara sungai, dan sungai bergambut di Asia Tenggara, termasuk Indonesia.',
    conservationStatus: 'Resiko Rendah',
    funFact: 'Ikan sumpit mampu menembak "peluru" air hingga jarak 3 meter dengan ketepatan luar biasa, bahkan memperhitungkan pembiasan cahaya di permukaan air.',
    description: 'Ikan sumpit adalah satu-satunya hewan yang secara rutin berteman dengan fisika optik untuk berburu. Ini bukan tembakan liar — ikan sumpit mempelajari sudut tembak yang tepat, mempertimbangkan refraksi cahaya antara air dan udara. Ia menekan lidahnya ke alur khusus di langit-langit mulutnya untuk membentuk "laras senjata," lalu menutup insang secara paksa untuk menghasilkan semprotan air bertekanan tinggi. Serangga yang hinggap di daun di atas air pun jatuh tersentak — dan langsung disambar. Koleksi spesimen di MZB memperlihatkan struktur anatomi unik yang mendukung kemampuan berburu luar biasa ini.'
  },

  // ==========================================
  // KATEGORI 5: INVERTEBRATA
  // ==========================================
  {
    id: 'kupu-kupu-raja',
    name: 'Kupu-kupu Raja',
    scientificName: 'Troides helena',
    category: 'INVERTEBRATA',
    room: 'serangga2',
    image: 'https://images.unsplash.com/photo-1533088219416-83c9a416a506?auto=format&fit=crop&w=800&q=80',
    habitat: 'Hutan dataran rendah, tepi hutan, dan taman di Asia Tenggara, termasuk Jawa dan Sumatra.',
    conservationStatus: 'Resiko Rendah',
    funFact: 'Kupu-kupu Raja dilindungi oleh hukum Indonesia — memiliki, menangkap, atau memperdagangkannya tanpa izin dapat dikenai sanksi pidana.',
    description: 'Kupu-kupu Raja adalah mahkota keindahan di koleksi lepidoptera MZB. Sayap belakangnnya berwarna kuning emas yang berkilau metalik kontras dengan sayap bagian atas yang hitam pekat — sebuah pemandangan yang tak terlupakan saat kupu-kupu ini melayang di antara bunga. Ia memperoleh kekebalan dari predator dengan memakan tanaman Aristolochia yang mengandung racun — racun yang tersimpan dalam tubuhnya seumur hidup. MZB memiliki koleksi lepidoptera terlengkap di Asia Tenggara, memperlihatkan variasi warna dan pola yang mencengangkan dari ribuan spesies.'
  },
  {
    id: 'kepiting-kelapa',
    name: 'Kepiting Kelapa',
    scientificName: 'Birgus latro',
    category: 'INVERTEBRATA',
    room: 'ikan',
    image: 'https://images.unsplash.com/photo-1589139857997-6a1bd1a007bc?auto=format&fit=crop&w=800&q=80',
    habitat: 'Pulau-pulau kecil berpohon kelapa di wilayah Indo-Pasifik, termasuk kepulauan terpencil Indonesia.',
    conservationStatus: 'Rentan',
    funFact: 'Kepiting kelapa adalah artropoda darat terbesar di dunia — beratnya bisa mencapai 4 kg dengan rentang kaki hingga 1 meter, dan ia bisa memanjat pohon kelapa setinggi 6 meter!',
    description: 'Kepiting kelapa adalah kisah evolusi yang luar biasa: seekor kerabat kelomang yang melepaskan cangkangnya, mengembangkan paru-paru yang mampu bernapas di udara, dan menjadi raksasa pulau tropis. Capitnya yang sangat kuat — diukur sebagai yang terkuat relatif terhadap tubuh di antara semua krustasea — mampu membelah batok kelapa. Meski disebut "kepiting," mereka tidak bisa berenang dan akan tenggelam jika dimasukkan ke dalam air dalam waktu lama. Koleksi spesimen kepiting kelapa di MZB memperlihatkan grandeur dari makhluk nokturnal pulau karang ini.'
  },
  {
    id: 'kumbang-tanduk',
    name: 'Kumbang Tanduk (Kumbang Badak)',
    scientificName: 'Oryctes rhinoceros',
    category: 'INVERTEBRATA',
    room: 'serangga1',
    image: 'https://images.unsplash.com/photo-1605335198904-89f4175628b0?auto=format&fit=crop&w=800&q=80',
    habitat: 'Area perkebunan kelapa sawit, hutan hujan tropis, dan perkebunan kelapa di seluruh Asia Tenggara.',
    conservationStatus: 'Resiko Rendah',
    funFact: 'Kumbang tanduk dapat mengangkat beban 850 kali berat tubuhnya sendiri — secara proporsional, ini menjadikannya "makhluk terkuat" di Bumi.',
    description: 'Kumbang tanduk jantan menggunakan tanduknya yang panjang dan melengkung bukan untuk memangsa, melainkan untuk berduel dengan sesama jantan memperebutkan betina — mendorong dan mengungkit lawan hingga jatuh dari pohon. Meski dikenal sebagai hama kelapa sawit, perannya dalam ekosistem sebagai pengurai kayu lapuk sangat vital. MZB mengoleksi ratusan spesimen kumbang dari seluruh kepulauan Indonesia, mendokumentasikan variasi ukuran dan bentuk yang luar biasa. Koleksi ruang serangga MZB adalah salah satu yang terkaya di Asia.'
  },
  {
    id: 'belalang-daun',
    name: 'Belalang Daun',
    scientificName: 'Phyllium celebicum',
    category: 'INVERTEBRATA',
    room: 'serangga1',
    image: 'https://images.unsplash.com/photo-1543324675-5807c4273ea1?auto=format&fit=crop&w=800&q=80',
    habitat: 'Hutan tropis lembap di Sulawesi, Maluku, dan Papua, tersembunyi di antara dedaunan.',
    conservationStatus: 'Resiko Rendah',
    funFact: 'Belalang daun bukan hanya berbentuk seperti daun — tubuhnya bahkan mensimulasikan urat daun, bercak-bercak "gigitan serangga," dan tepi yang tidak rata untuk menyempurnakan tipuannya.',
    description: 'Belalang daun adalah masterpiece seni kamuflase alam. Evolusi telah membentuk tubuhnya agar menyerupai daun hijau segar dengan sempurna — termasuk urat daun, bertekstur, bahkan dengan cekungan kecil yang menyerupai daun yang dimakan serangga lain. Bila angin berhembus, ia berayun perlahan untuk meniru gerak daun. Ilmuwan menyebut ini sebagai mimikri tingkat tinggi. Koleksi Phyllium di MZB mencakup berbagai spesies dari kepulauan Indonesia, menjadi bukti nyata betapa canggihnya pressure seleksi alam dalam membentuk morfologi organisme.'
  },
  {
    id: 'kima-raksasa',
    name: 'Kima Raksasa',
    scientificName: 'Tridacna gigas',
    category: 'INVERTEBRATA',
    room: 'ikan',
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=800&q=80',
    habitat: 'Terumbu karang dangkal di Samudera Hindia dan Pasifik, termasuk perairan Indonesia timur.',
    conservationStatus: 'Rentan',
    funFact: 'Kima raksasa tidak berbahaya bagi penyelam — "mitos" menjepit kaki manusia adalah fiksi belaka. Dalam kenyataannya, katupnya menutup sangat lambat sehingga mudah dihindari.',
    description: 'Kima raksasa adalah moluska terbesar di dunia, dengan cangkang yang bisa mencapai 1,4 meter dan berat hingga 250 kg. Namun raksasa ini adalah makhluk yang benar-benar damai — ia mendapatkan sebagian besar energinya dari alga zooxanthellae yang hidup dalam jaringan mantelnya yang berwarna-warni, bersimbiosis dalam pertunjukan warna yang spektakuler. Cangkang kima raksasa dalam koleksi MZB adalah salah satu yang terbesar yang pernah dikumpulkan dari perairan Indonesia, menjadi benda pameran yang selalu memukau pengunjung dengan skalanya yang mustahil.'
  },
];

// Helper functions for easy querying
export const getAnimalsByCategory = (category: string) => animalsData.filter(a => a.category === category);
export const getAnimalsByRoom = (roomId: string) => animalsData.filter(a => a.room === roomId);
export const getAnimalById = (id: string) => animalsData.find(a => a.id === id);
export const getAllCategories = () => Array.from(new Set(animalsData.map(a => a.category)));
export const getAllRooms = () => Array.from(new Set(animalsData.map(a => a.room)));

