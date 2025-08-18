'use client';

import { Wrench, Building2, HardHat, Construction, Cog } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLanguage } from '@/app/context/LanguageContext';

const iconComponents = {
  pavement: <HardHat size={24} />,
  sidewalk: <Wrench size={24} />,
  track: <Construction size={24} />,
  industrial: <Building2 size={24} />,
};

const serviceImages = [
  '/servicios/pavimento.jpg',
  '/servicios/andenes.jpg',
  '/servicios/placa-huella.jpg',
  '/servicios/pisos.jpg',
];

export default function Servicios() {
  const { messages } = useLanguage();

  return (
    <section id="servicios" className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título con ícono */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6 text-gray-800 flex justify-center items-center gap-2"
        >
          <Cog className="text-yellow-600" size={28} />
          {messages.services.title}
        </motion.h2>

        <div className="w-16 h-[2px] bg-yellow-500 rounded-full mb-10 mx-auto" />

        {/* Carrusel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {messages.services.items.map((servicio: { title: string; description: string }, index: number) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={serviceImages[index]}
                    alt={servicio.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-gray-700">
                  <div className="flex items-center gap-2 text-yellow-600 mb-2">
                    {Object.values(iconComponents)[index]}
                    <h3 className="text-lg font-semibold">{servicio.title}</h3>
                  </div>
                  <p className="text-sm">{servicio.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
