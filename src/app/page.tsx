'use client';
import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import ConcreteMixerSection from '@/components/ConcreteMixerSection';
import Testimonials from '@/components/Testimonials';
import ServiceArea from '@/components/ServiceArea';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <ConcreteMixerSection />
      <Testimonials />
      <ServiceArea />
      <Contact />
      <Footer />
    </main>
  );
}
