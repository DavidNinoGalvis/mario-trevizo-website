'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Wrench, Building2, HardHat, Construction, Cog } from 'lucide-react';

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1); // SSR-safe default

  // Servicios (orden debe coincidir con las imágenes)
  const services = [
    {
      title: 'Concrete Driveways',
      description:
        'Durable and attractive driveways designed to enhance your property value and withstand Colorado weather conditions.',
      icon: HardHat,
    },
    {
      title: 'Sidewalks & Walkways',
      description:
        'Safe and code-compliant sidewalks and walkways that connect your spaces beautifully and functionally.',
      icon: Wrench,
    },
    {
      title: 'Patios & Slabs',
      description:
        'Transform your outdoor space with custom concrete patios and slabs perfect for entertainment and relaxation.',
      icon: Construction,
    },
    {
      title: 'Commercial Concrete',
      description:
        'Heavy-duty commercial concrete solutions for businesses, warehouses, and industrial applications.',
      icon: Building2,
    },
  ];

  // Imágenes del componente viejo (mismo orden por índice)
  const serviceImages = [
    '/servicios/pavimento.jpg',
    '/servicios/andenes.jpg',
    '/servicios/placa-huella.jpg',
    '/servicios/pisos.jpg',
  ];

  // Auto-advance slides
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(id);
  }, [services.length]);

  // Calcular slides por viewport (sin leer window en SSR)
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
    Array.from(
      { length: slidesToShow },
      (_, i) => (currentSlide + i) % services.length,
    );

  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 flex justify-center items-center gap-2 text-[#0D0D0D]">
            <Cog className="text-[#D6A52F]" size={28} />
            Our Services
          </h2>
          <div className="w-16 h-0.5 rounded-full mb-10 mx-auto bg-[#D6A52F]" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional concrete solutions for residential and commercial
            projects throughout Colorado.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            <div className="w-full flex gap-6">
              {getVisibleIndices().map((idx) => {
                const service = services[idx];
                const Icon = service.icon;
                const imgSrc =
                  serviceImages[idx] ??
                  serviceImages[idx % serviceImages.length];

                return (
                  <article
                    key={`${service.title}-${idx}`}
                    className="flex-1 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-[1.02]"
                  >
                    {/* Imagen SIN título/ícono encima */}
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

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2 text-[#0D0D0D]">
                        <Icon size={18} className="text-[#D6A52F]" />
                        <h3 className="text-lg font-semibold">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'scale-125' : 'hover:bg-gray-400'
              }`}
              style={{
                backgroundColor: index === currentSlide ? '#D6A52F' : '#d1d5db',
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="hidden md:flex justify-center mt-6 gap-4">
          <button
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + services.length) % services.length,
              )
            }
            className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 border text-[#D6A52F] border-[#D6A52F]"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % services.length)
            }
            className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 border text-[#D6A52F] border-[#D6A52F]"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
