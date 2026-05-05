export type ConservationStatus = 'Resiko Rendah' | 'Hampir Terancam' | 'Rentan' | 'Genting' | 'Kritis' | 'Telah Punah' | 'Sangat Kritis'| 'Kurang Data';

export interface AnimalData {
  id: string;
  name: string; // Nama Lokal/Umum
  scientificName: string; // Nama Latin
  category: string; // e.g. "MAMALIA", "BURUNG", "REPTIL"
  room: string; // e.g. "Ruang Mamalia", "Ruang Burung I"
  image: string; // URL gambar High-Res
  habitat: string; // Deskripsi habitat (Hutan kalimantan, dll)
  conservationStatus: ConservationStatus;
  funFact: string; // Fakta unik
  description: string; // Deskripsi panjang spesies
}
