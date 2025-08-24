'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Wrench, Building2, HardHat, Construction, Cog, Hammer } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function Services() {
  const { messages } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Lista de servicios (ya no necesitas servicesDesc, solo services.<key>)
  const services = [
    { key: 'concrete', ...messages.services.concrete, icon: HardHat },
    { key: 'driveways', ...messages.services.driveways, icon: Wrench },
    { key: 'sidewalks', ...messages.services.sidewalks, icon: Construction },
    { key: 'patios', ...messages.services.patios, icon: Building2 },
    { key: 'curves', ...messages.services.curves, icon: Hammer },
    { key: 'stampedConcrete', ...messages.services.stampedConcrete, icon: Cog },
    { key: 'crackFilling', ...messages.services.crackFilling, icon: Hammer },
    { key: 'sealCoating', ...messages.services.sealCoating, icon: Construction },
    { key: 'potholeRepair', ...messages.services.potholeRepair, icon: Wrench },
    { key: 'asphaltPaving', ...messages.services.asphaltPaving, icon: HardHat },
    { key: 'flatWork', ...messages.services.flatWork, icon: Cog },
    { key: 'parkingLot', ...messages.services.parkingLot, icon: Building2 },
    { key: 'steeping', ...messages.services.steeping, icon: Hammer },
  ];

  // Imágenes opcionales (1 por servicio, en el mismo orden que arriba)
  const serviceImages = [
    '/servicios/placa-huella.jpg',
    '/servicios/driveway.png',
    '/servicios/andenes.jpg',
    '/servicios/patios.jpg',
    '/servicios/curve.jpg',
    '/servicios/stamp.jpg',
    '/servicios/crack.jpg',
    '/servicios/seal.jpg',
    '/servicios/pothole.jpg',
    '/servicios/asphalt.jpg',
    '/servicios/pisos.jpg',
    '/servicios/parking.jpg',
    '/servicios/pavimento.jpg',

  ];

  // Auto-advance slides
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(id);
  }, [services.length]);

  // Responsive slides
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setSlidesToShow(w < 768 ? 1 : w < 1024 ? 2 : 3);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  const getVisibleIndices = () =>
    Array.from({ length: slidesToShow }, (_, i) => (currentSlide + i) % services.length);

  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 flex justify-center items-center gap-2 text-[#0D0D0D]">
            <Cog className="text-[#D6A52F]" size={28} />
            {messages.services.title}
          </h2>
          <div className="w-16 h-0.5 rounded-full mb-10 mx-auto bg-[#D6A52F]" />
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            <div className="w-full flex gap-6">
              {getVisibleIndices().map((idx) => {
                const service = services[idx];
                const Icon = service.icon;
                const imgSrc = serviceImages[idx] ?? '/servicios/default.jpg';

                return (
                  <article
                    key={`${service.key}-${idx}`}
                    className="flex-1 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="relative w-full h-48">
                      <Image
                        src={imgSrc}
                        alt={service.title}
                        fill
                        priority={idx === currentSlide}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2 text-[#0D0D0D]">
                        <Icon size={18} className="text-[#D6A52F]" />
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'scale-125' : 'hover:bg-gray-400'
              }`}
              style={{ backgroundColor: index === currentSlide ? '#D6A52F' : '#d1d5db' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
