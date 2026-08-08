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
    museumImage: 'https://images.unsplash.com/photo-1598426002980-0a2a229a4a75?auto=format&fit=crop&w=800&q=80',
    habitat: 'Samudra terbuka di seluruh dunia, dari perairan kutub hingga tropis.',
    conservationStatus: 'Genting',
    funFact: 'Berdasarkan artikel Wikipedia, paus biru adalah hewan terbesar yang diketahui pernah ada di Bumi, melebihi ukuran dinosaurus terbesar.',
    description: 'Berdasarkan ensiklopedia Wikipedia, Paus Biru (Balaenoptera musculus) adalah mamalia laut yang termasuk dalam subordo paus balin. Dengan panjang mencapai 29,9 meter dan berat hingga 199 ton, paus biru merupakan hewan terbesar di Bumi. Spesimen kerangkanya di Museum Zoologi Bogor menjadi bukti nyata keanekaragaman fauna laut dunia. Paus biru utamanya memangsa kril dan dapat memancarkan frekuensi suara rendah yang merambat hingga ratusan kilometer di lautan.'
  },
  {
    id: 'badak-jawa',
    name: 'Badak Jawa',
    scientificName: 'Rhinoceros sondaicus',
    category: 'MAMALIA',
    room: 'mamalia',
    image: 'https://ik.imagekit.io/bhiaoqt1n/image.jpg',
    museumImage: 'https://ik.imagekit.io/bhiaoqt1n/skripsi/IMG_20251124_122607.jpg',
    habitat: 'Hutan hujan tropis dataran rendah, kini terbatas di Taman Nasional Ujung Kulon.',
    conservationStatus: 'Kritis',
    funFact: 'Catatan Wikipedia menyebutkan Badak Jawa sebagai salah satu mamalia besar terlangka di dunia dengan cula tunggal pada jantan.',
    description: 'Menurut data Wikipedia, Badak Jawa (Rhinoceros sondaicus) adalah anggota famili Rhinocerotidae dan satu dari lima spesies badak yang masih hidup. Ciri khas utamanya adalah memiliki cula tunggal sepanjang 20–27 cm pada jantan. Sebagai maskot pameran MZB, spesimen badak Jawa ini menggambarkan karakteristik kulitnya yang berlapis seperti zirah. Spesies ini diklasifikasikan Kritis (Critically Endangered) oleh IUCN akibat perburuan dan hilangnya habitat.'
  },
  {
    id: 'gajah-sumatera',
    name: 'Gajah Sumatera',
    scientificName: 'Elephas maximus sumatranus',
    category: 'MAMALIA',
    room: 'mamalia',
    image: 'https://ik.imagekit.io/bhiaoqt1n/049420900_1458881164-20160325-gajah-sumatra-GMS-3.jpg',
    museumImage: '',
    habitat: 'Hutan dataran rendah dan pegunungan di Pulau Sumatera.',
    conservationStatus: 'Kritis',
    funFact: 'Menurut Wikipedia, Gajah Sumatera mengonsumsi hingga 150 kg tumbuh-tumbuhan per hari dan bertindak sebagai pemencar biji tanaman hutan.',
    description: 'Berdasarkan dokumen Wikipedia, Gajah Sumatera (Elephas maximus sumatranus) adalah salah satu dari tiga subspesies gajah Asia yang diakui. Memiliki tinggi bahu antara 2 hingga 3,2 meter dan berat 2 hingga 4 ton. Di Museum Zoologi Bogor, tengkorak dan spesimen gajah Sumatera menjadi sarana edukasi mengenai pentingnya pelestarian mamalia darat terbesar di Indonesia ini dari ancaman deforestasi.'
  },
  {
    id: 'harimau-sumatera',
    name: 'Harimau Sumatera',
    scientificName: 'Panthera tigris sumatrae',
    category: 'MAMALIA',
    room: 'mamalia',
    image: 'https://ik.imagekit.io/bhiaoqt1n/images%20(3).jpg',
    museumImage: 'https://ik.imagekit.io/bhiaoqt1n/skripsi/IMG_20251124_114808.jpg',
    habitat: 'Hutan hujan tropis, hutan gambut, dan pegunungan di Sumatera.',
    conservationStatus: 'Kritis',
    funFact: 'Wikipedia mencatat Harimau Sumatera sebagai satu-satunya anggota subspesies harimau kepulauan Sunda yang masih bertahan hidup.',
    description: 'Menurut artikel Wikipedia, Harimau Sumatera (Panthera tigris sumatrae) adalah subspesies harimau asli Pulau Sumatera dengan ukuran paling kecil dibanding harimau daratan Asia. Warna kulitnya gelap dengan pola garis hitam yang rapat untuk kamuflase di hutan lebat. Koleksi taksidermia harimau Sumatera di MZB menampilkan morfologi predator puncak ini yang kini berstatus Kritis pada daftar IUCN.'
  },
  {
    id: 'orangutan',
    name: 'Orangutan Sumatera',
    scientificName: 'Pongo abelii',
    category: 'MAMALIA',
    room: 'mamalia',
    image: 'https://ik.imagekit.io/bhiaoqt1n/Orang_Utan,_Semenggok_Forest_Reserve,_Sarawak,_Borneo,_Malaysia.jpg',
    museumImage: 'https://ik.imagekit.io/bhiaoqt1n/skripsi/IMG_20251124_115412.jpg',
    habitat: 'Kanopi hutan hujan tropis dataran rendah di Sumatera bagian utara.',
    conservationStatus: 'Kritis',
    funFact: 'Data Wikipedia menunjukkan orangutan menghabiskan hampir seluruh waktunya di pepohonan (arboreal) dan membuat sarang baru tiap malam.',
    description: 'Berdasarkan rujukan Wikipedia, Orangutan Sumatera (Pongo abelii) adalah spesies orangutan yang hidup di Pulau Sumatera. Hewan arboreal ini dikenal memiliki kecerdasan tinggi dalam menggunakan alat-alat sederhana di alam liar. Di pameran MZB, spesimen orangutan ditampilkan untuk memperlihatkan struktur anatomi lengan yang panjang untuk bergerak di antara kanopi hutan.'
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
    image: 'https://ik.imagekit.io/bhiaoqt1n/elang-jawa-03_foto_BI_-Fahrul-Amama__EDIT-2.jpg',
    museumImage: '',
    habitat: 'Hutan primer dan sekunder pegunungan Pulau Jawa.',
    conservationStatus: 'Genting',
    funFact: 'Wikipedia mengidentifikasi Elang Jawa sebagai burung yang dianggap identik dengan lambang negara Republik Indonesia, yaitu Garuda.',
    description: 'Menurut Wikipedia, Elang Jawa (Nisaetus bartelsi) adalah salah satu spesies elang berukuran sedang dari famili Accipitridae yang endemik di Pulau Jawa. Burung ini memiliki jambul khas di kepalanya yang terdiri dari 2–4 helai bulu sepanjang hingga 12 cm. Spesimen awetan Elang Jawa di MZB memperlihatkan ciri fisik menonjol dari predator udara yang terancam punah ini.'
  },
  {
    id: 'kasuari-gelambir-ganda',
    name: 'Kasuari Gelambir Ganda',
    scientificName: 'Casuarius casuarius',
    category: 'BURUNG',
    room: 'burung1',
    image: 'https://ik.imagekit.io/bhiaoqt1n/Fauna-Kasuari-Burung-Bongsor-Khas-Papua.jpg',
    museumImage: '',
    habitat: 'Hutan hujan tropis dataran rendah di Papua dan pulau sekitarnya.',
    conservationStatus: 'Rentan',
    funFact: 'Sumber Wikipedia mencatat kasuari memiliki cakar tengah yang tajam seperti belati sepanjang hingga 12 cm untuk pertahanan diri.',
    description: 'Berdasarkan data Wikipedia, Kasuari Gelambir Ganda (Casuarius casuarius) adalah spesies burung tidak dapat terbang yang berukuran sangat besar dari genus Casuarius. Memiliki ketopong (*casque*) berbentuk tanduk di atas kepala serta dua gelambir merah di leher. Koleksi spesimen kasuari di MZB memperlihatkan postur tubuh burung yang berperan penting dalam penyebaran biji buah di hutan Papua.'
  },
  {
    id: 'cendrawasih-kuning-besar',
    name: 'Cendrawasih Kuning Besar',
    scientificName: 'Paradisaea apoda',
    category: 'BURUNG',
    room: 'burung2',
    image: 'https://ik.imagekit.io/bhiaoqt1n/image%20(1).jpg',
    museumImage: '',
    habitat: 'Hutan dataran rendah Kepulauan Aru dan bagian selatan Papua.',
    conservationStatus: 'Resiko Rendah',
    funFact: 'Wikipedia mencatat nama spesies "apoda" berarti "tanpa kaki", merujuk pada mitos abad pertengahan pedagang Eropa.',
    description: 'Menurut artikel Wikipedia, Cendrawasih Kuning Besar (Paradisaea apoda) adalah burung dari famili Paradisaeidae. Pejantan memiliki bulu hiasan samping yang panjang berwarna kuning keemasan yang digunakan saat tarian ritual untuk memikat betina. Spesimen burung cendrawasih di MZB menampilkan keindahan warna bulu fauna khas Indonesia Timur.'
  },
  {
    id: 'rangkong-gading',
    name: 'Rangkong Gading',
    scientificName: 'Rhinoplax vigil',
    category: 'BURUNG',
    room: 'burung1',
    image: 'https://ik.imagekit.io/bhiaoqt1n/20160627burung_enggang.jpg',
    museumImage: '',
    habitat: 'Hutan hujan tropis dataran rendah di Sumatera dan Kalimantan.',
    conservationStatus: 'Sangat Kritis',
    funFact: 'Berdasarkan Wikipedia, balung (casque) rangkong gading bersifat padat dan keras, membuatnya sering diburu secara ilegal.',
    description: 'Berdasarkan Wikipedia, Rangkong Gading (Rhinoplax vigil) adalah burung berukuran besar dari famili Bucerotidae. Ciri khususnya adalah balung padat berwarna merah-kuning di atas paruh. Kehadiran spesimennya di MZB membantu mengedukasi masyarakat mengenai ancaman kepunahan burung pemencar biji ini akibat perdagangan ilegal.'
  },
  {
    id: 'merak-hijau',
    name: 'Merak Hijau',
    scientificName: 'Pavo muticus',
    category: 'BURUNG',
    room: 'burung2',
    image: 'https://ik.imagekit.io/bhiaoqt1n/Fauna-Burung-Merak-Hijau-Keindahan-yang-Terancam.jpg',
    museumImage: '',
    habitat: 'Hutan terbuka dan tepi hutan di Jawa dan daratan Asia Tenggara.',
    conservationStatus: 'Genting',
    funFact: 'Wikipedia mencatat bulu ekor jantan merak hijau dapat tumbuh hingga panjang 2 meter dengan motif bulat menyerupai mata.',
    description: 'Menurut informasi Wikipedia, Merak Hijau (Pavo muticus) adalah spesies burung dari suku Phasianidae. Memiliki bulu berwarna hijau keemasan iridescent di leher dan dada. Koleksi spesimen di MZB menampilkan ekor megah merak jantan yang dimekarkan untuk pemodelan visual pengunjung.'
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
    image: 'https://ik.imagekit.io/bhiaoqt1n/images%20(4).jpg',
    museumImage: '',
    habitat: 'Pulau Komodo, Rinca, Flores, Gili Motang, dan Gili Dasami di NTT.',
    conservationStatus: 'Genting',
    funFact: 'Wikipedia mencatat Komodo sebagai spesies kadal terbesar di dunia yang masih hidup saat ini.',
    description: 'Berdasarkan rujukan Wikipedia, Komodo (Varanus komodoensis) adalah spesies kadal terbesar yang tergolong dalam famili Varanidae. Panjang tubuhnya dapat mencapai 3 meter dengan berat melebihi 70 kg. Spesimen komodo di MZB memberikan gambaran nyata tentang anatomi reptil purba endemik Nusa Tenggara Timur ini.'
  },
  {
    id: 'penyu-hijau',
    name: 'Penyu Hijau',
    scientificName: 'Chelonia mydas',
    category: 'REPTIL & AMFIBI',
    room: 'reptil',
    image: 'https://ik.imagekit.io/bhiaoqt1n/images%20(5).jpg',
    museumImage: '',
    habitat: 'Samudra tropis dan subtropis di seluruh dunia.',
    conservationStatus: 'Genting',
    funFact: 'Menurut Wikipedia, nama penyu hijau berasal dari warna hijau pada lemak yang terletak di bawah cangkangnya.',
    description: 'Menurut dokumen Wikipedia, Penyu Hijau (Chelonia mydas) adalah penyu laut besar yang tergolong dalam famili Cheloniidae. Cangkangnya berbentuk pipih dan lebar dengan panjang mencapai 1,5 meter. Di MZB, cangkang dan spesimen penyu hijau disajikan untuk mengedukasi pelestarian habitat pesisir.'
  },
  {
    id: 'sanca-batik',
    name: 'Ular Sanca Batik',
    scientificName: 'Malayopython reticulatus',
    category: 'REPTIL & AMFIBI',
    room: 'reptil',
    image: 'https://ik.imagekit.io/bhiaoqt1n/Sanca-batik-2767763170.jpg',
    museumImage: '',
    habitat: 'Hutan hujan, rawa, dan pemukiman di Asia Tenggara.',
    conservationStatus: 'Resiko Rendah',
    funFact: 'Wikipedia menyebutkan Ular Sanca Batik sebagai ular terpanjang di dunia yang dapat tumbuh lebih dari 6,5 meter.',
    description: 'Berdasarkan data Wikipedia, Ular Sanca Batik (Malayopython reticulatus) adalah spesies ular dari famili Pythonidae. Pola warna sisiknya berbentuk jaring bercorak mirip kain batik yang berfungsi sebagai kamuflase di lantai hutan. Spesimen sanca batik di MZB menampilkan morfologi tubuh ular constrictor tanpa bisa ini.'
  },
  {
    id: 'buaya-muara',
    name: 'Buaya Muara',
    scientificName: 'Crocodylus porosus',
    category: 'REPTIL & AMFIBI',
    room: 'reptil',
    image: 'https://ik.imagekit.io/bhiaoqt1n/SaltwaterCrocodile.jpg',
    museumImage: '',
    habitat: 'Muara sungai, hutan bakau, dan perairan pesisir Indo-Pasifik.',
    conservationStatus: 'Resiko Rendah',
    funFact: 'Menurut Wikipedia, Buaya Muara adalah reptil terbesar yang masih hidup dan memiliki kekuatan gigitan terbesar di antara hewan darat/perairan.',
    description: 'Menurut riset Wikipedia, Buaya Muara (Crocodylus porosus) adalah jenis buaya terbesar dari famili Crocodylidae. Panjangnya bisa mencapai 6–7 meter dengan berat hingga 1.000 kg. Koleksi kerangka dan spesimen buaya muara di MZB menjadi sarana pembelajaran mengenai predator puncak ekosistem perairan payau.'
  },
  {
    id: 'katak-pohon-jawa',
    name: 'Katak Pohon Jawa',
    scientificName: 'Rhacophorus javanus',
    category: 'REPTIL & AMFIBI',
    room: 'reptil',
    image: 'https://ik.imagekit.io/bhiaoqt1n/SaltwaterCrocodile.jpg',
    museumImage: '',
    habitat: 'Hutan hujan tropis pegunungan di Pulau Jawa.',
    conservationStatus: 'Genting',
    funFact: 'Wikipedia mencatat katak pohon ini memiliki selaput lebar di kaki untuk meluncur di antara pepohonan.',
    description: 'Berdasarkan artikel Wikipedia, Katak Pohon Jawa (Rhacophorus javanus) adalah amfibi dari famili Rhacophoridae yang endemik di Pulau Jawa. Katak ini hidup arboreal dan membuat sarang busa di atas perairan untuk menampung telurnya. Koleksi spesimen MZB mendokumentasikan amfibi langka ini.'
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
    image: 'https://ik.imagekit.io/bhiaoqt1n/IMG_20250706_193520.jpg',
    museumImage: '',
    habitat: 'Laut dalam perairan Manado, Sulawesi Utara (kedalaman 150–200 meter).',
    conservationStatus: 'Rentan',
    funFact: 'Wikipedia mencatat Coelacanth sebagai "fosil hidup" yang diperkirakan punah 66 juta tahun lalu sebelum ditemukan kembali tahun 1997 di Indonesia.',
    description: 'Menurut catatan Wikipedia, Coelacanth Indonesia (Latimeria menadoensis) adalah salah satu dari dua spesies ikan coelacanth yang masih hidup. Ikan ini tergolong ordo Coelacanthiformes dengan sirip berlobus berdaging. Spesimen autentik Coelacanth di MZB merupakan salah satu koleksi sains paling berharga.'
  },
  {
    id: 'arwana-super-red',
    name: 'Arwana Super Red',
    scientificName: 'Scleropages legendrei',
    category: 'IKAN',
    room: 'ikan',
    image: 'https://ik.imagekit.io/bhiaoqt1n/arwana-super-red-1_169.jpeg',
    museumImage: '',
    habitat: 'Sungai dan rawa air hitam di Kalimantan Barat (Sungai Kapuas & Danau Sentarum).',
    conservationStatus: 'Kritis',
    funFact: 'Wikipedia mencatat Arwana Super Red sebagai ikan hias air tawar bernilai sangat tinggi yang dilindungi oleh CITES.',
    description: 'Berdasarkan Wikipedia, Arwana Super Red (Scleropages legendrei) adalah ikan air tawar dari famili Osteoglossidae yang berasal dari Kalimantan Barat. Memiliki sisik berukuran besar dengan warna merah menyala pada individu dewasa. Tampilan spesimennya di MZB mengedukasi keanekaragaman ikan endemik air tawar Indonesia.'
  },
  {
    id: 'pari-manta',
    name: 'Pari Manta',
    scientificName: 'Mobula birostris',
    category: 'IKAN',
    room: 'ikan',
    image: 'https://ik.imagekit.io/bhiaoqt1n/716bf15d-d072-4b02-b606-efcc72ec37c7_169.jpg',
    museumImage: '',
    habitat: 'Perairan pelagis tropis dan subtropis di Indonesia.',
    conservationStatus: 'Rentan',
    funFact: 'Wikipedia mencatat Pari Manta Laut Samudra sebagai spesies pari terbesar di dunia dengan lebar tubuh hingga 7 meter.',
    description: 'Menurut artikel Wikipedia, Pari Manta Laut (Mobula birostris) adalah spesies pari terbesar dalam famili Mobulidae. Ikan ini memakan plankton dengan cara menyaring air melalui sirip kepala (*cephalic fins*). Koleksi spesimen pari di MZB memperlihatkan keanekaragaman elasmobranchia laut.'
  },
  {
    id: 'hiu-gergaji',
    name: 'Hiu Gergaji',
    scientificName: 'Pristiodon cirratus',
    category: 'IKAN',
    room: 'ikan',
    image: 'https://ik.imagekit.io/bhiaoqt1n/hiu-gergajijpg-20221008103437.jpg',
    museumImage: '',
    habitat: 'Perairan pantai dangkal dan muara sungai tropis.',
    conservationStatus: 'Sangat Kritis',
    funFact: 'Data Wikipedia menunjukkan moncong gergaji (rostrum) digunakan untuk melumpuhkan ikan mangsa di dasar perairan.',
    description: 'Berdasarkan entri Wikipedia, Ikan Gergaji atau Hiu Gergaji (keluarga Pristidae) adalah famili pari yang memiliki moncong memanjang bergigi melintang menyerupai gergaji. Spesimennya di MZB memberikan ilustrasi mengenai adaptasi unik organ rostrum untuk berburu.'
  },
  {
    id: 'ikan-sumpit',
    name: 'Ikan Sumpit',
    scientificName: 'Toxotes jaculatrix',
    category: 'IKAN',
    room: 'ikan',
    image: 'https://ik.imagekit.io/bhiaoqt1n/Ikan-Sumpit-1.jpg',
    museumImage: '',
    habitat: 'Hutan bakau dan muara sungai air payau di Asia Tenggara.',
    conservationStatus: 'Resiko Rendah',
    funFact: 'Wikipedia mencatat ikan sumpit mampu menyemprotkan air hingga sejauh 1,5–2 meter untuk merontokkan serangga di atas air.',
    description: 'Menurut rujukan Wikipedia, Ikan Sumpit (Toxotes jaculatrix) adalah ikan dari famili Toxotidae yang terkenal dengan kemampuannya menembakkan tetesan air dari mulutnya untuk memangsa serangga di dahan ranting di atas permukaan air. Spesimen MZB memperlihatkan struktur mulut unik penembak air ini.'
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
    image: 'https://ik.imagekit.io/bhiaoqt1n/monarch%20on%20the%20flower.jpg',
    museumImage: '',
    habitat: 'Hutan hujan tropis dan taman di Asia Tenggara.',
    conservationStatus: 'Resiko Rendah',
    funFact: 'Berdasarkan Wikipedia, Troides helena adalah kupu-kupu yang dilindungi Undang-Undang Republik Indonesia.',
    description: 'Menurut informasi Wikipedia, Kupu-kupu Raja (Troides helena) adalah serangga dari famili Papilionidae. Memiliki bentang sayap yang lebar dengan perpaduan warna hitam dan kuning cerah. Koleksi serangga MZB menampilkan spesimen kupu-kupu ini sebagai bagian dari kekayaan lepidoptera Nusantara.'
  },
  {
    id: 'kepiting-kelapa',
    name: 'Kepiting Kelapa',
    scientificName: 'Birgus latro',
    category: 'INVERTEBRATA',
    room: 'ikan',
    image: 'https://ik.imagekit.io/bhiaoqt1n/65af6fb7d77ea.png',
    museumImage: '',
    habitat: 'Pulau-pulau karang dan hutan pesisir Samudra Hindia dan Pasifik.',
    conservationStatus: 'Rentan',
    funFact: 'Wikipedia menyebutkan Kepiting Kelapa sebagai artropoda darat terbesar di dunia dengan berat mencapai 4,1 kg.',
    description: 'Berdasarkan Wikipedia, Kepiting Kelapa (Birgus latro) adalah jenis kelomang darat yang membesar hingga ukuran raksasa. Capitnya sangat kuat untuk mengupas buah kelapa. Di MZB, spesimen kepiting kelapa ditampilkan untuk menunjukkan keunikan krustasea darat ini.'
  },
  {
    id: 'kumbang-tanduk',
    name: 'Kumbang Tanduk (Kumbang Badak)',
    scientificName: 'Oryctes rhinoceros',
    category: 'INVERTEBRATA',
    room: 'serangga1',
    image: 'https://ik.imagekit.io/bhiaoqt1n/kumbang-tandukjpg-20240414091548.jpg',
    museumImage: '',
    habitat: 'Perkebunan kelapa dan hutan tropis Asia Tenggara.',
    conservationStatus: 'Resiko Rendah',
    funFact: 'Data Wikipedia mencatat tanduk jantan digunakan untuk bertarung merebut wilayah dan pasangan.',
    description: 'Menurut Wikipedia, Kumbang Tanduk (Oryctes rhinoceros) adalah jenis kumbang dari subfamili Dynastinae. Pejantan memiliki tanduk menonjol di kepala. Koleksi serangga MZB menyimpan spesimen ini sebagai perwakilan fauna invertebrata darat.'
  },
  {
    id: 'belalang-daun',
    name: 'Belalang Daun',
    scientificName: 'Phyllium celebicum',
    category: 'INVERTEBRATA',
    room: 'serangga1',
    image: 'https://ik.imagekit.io/bhiaoqt1n/id-11134207-7r98o-lylvqumzj02w8a.jpg',
    museumImage: '',
    habitat: 'Hutan hujan tropis di Sulawesi dan sekitarnya.',
    conservationStatus: 'Resiko Rendah',
    funFact: 'Wikipedia mencatat belalang daun memiliki kemampuan mimikri tinggi yang menyerupai bentuk dan urat daun.',
    description: 'Berdasarkan Wikipedia, Belalang Daun (Phyllium celebicum) adalah serangga dari famili Phylliidae. Bentuk tubuh dan warna hijau pipihnya menyerupai daun tanaman secara detail. Spesimennya di MZB menyajikan contoh adaptasi mimikri alamiah.'
  },
  {
    id: 'kima-raksasa',
    name: 'Kima Raksasa',
    scientificName: 'Tridacna gigas',
    category: 'INVERTEBRATA',
    room: 'ikan',
    image: 'https://ik.imagekit.io/bhiaoqt1n/Giant_clam_or_Tridacna_gigas.jpg',
    museumImage: '',
    habitat: 'Terumbu karang dangkal di Samudra Hindia dan Pasifik.',
    conservationStatus: 'Rentan',
    funFact: 'Wikipedia mencatat Kima Raksasa sebagai moluska bivalvia terbesar yang dapat tumbuh hingga 1,2 meter.',
    description: 'Menurut rujukan Wikipedia, Kima Raksasa (Tridacna gigas) adalah spesies kima terbesar dari famili Cardiidae. Spesimen cangkang kima di MZB menjadi daya tarik pameran invertebrata laut dengan ukuran cangkangnya yang luar biasa.'
  },
];

// Helper functions for easy querying
export const getAnimalsByCategory = (category: string) => animalsData.filter(a => a.category === category);
export const getAnimalsByRoom = (roomId: string) => animalsData.filter(a => a.room === roomId);
export const getAnimalById = (id: string) => animalsData.find(a => a.id === id);
export const getAllCategories = () => Array.from(new Set(animalsData.map(a => a.category)));
export const getAllRooms = () => Array.from(new Set(animalsData.map(a => a.room)));

