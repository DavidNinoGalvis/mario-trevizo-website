'use client';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import dynamic from 'next/dynamic';
import Testimonials from '@/components/Testimonials';
import ServiceArea from '@/components/ServiceArea';

const ConcreteMixerSection = dynamic(
  () => import('@/components/ConcreteMixerSection'),
  { ssr: false },
);

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <ConcreteMixerSection />
      <Testimonials />
      <ServiceArea />
    </main>
  );
}
