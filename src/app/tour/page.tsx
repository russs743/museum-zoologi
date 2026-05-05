import VirtualMuseum from '@/components/tour/VirtualMuseum';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virtual Tour | Museum Zoologi Bogor',
  description: 'Jelajahi setiap sudut Museum Zoologi Bogor secara virtual dari mana saja.',
};

export default function TourPage() {
  return (
    <div className="w-full h-screen">
      <VirtualMuseum />
    </div>
  );
}
