'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { HardHat } from 'lucide-react';
import { TestimonialCard } from './TestimonialCard';
import { useLanguage } from '@/app/context/LanguageContext';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const { messages } = useLanguage();

  return (
    <section id="testimonios" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título con ícono grande y redondo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-yellow-500 p-4 rounded-full shadow-md">
              <HardHat size={36} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {messages.testimonials.title}
          </h2>
          <div className="w-16 h-[2px] bg-yellow-500 rounded-full mx-auto" />
        </motion.div>

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
          {messages.testimonials.items.map(
            (
              t: { message: string; name: string; role: string; icon: string },
              index: number
            ) => {
              // mapeo de iconos segun clave en JSON
              const iconMap: Record<string, React.ElementType> = {
                user: require('lucide-react').User,
                building: require('lucide-react').Building2,
                hardhat: require('lucide-react').HardHat,
                factory: require('lucide-react').Factory,
              };

              const Icon = iconMap[t.icon] || require('lucide-react').User;

              return (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <TestimonialCard
                      message={t.message}
                      name={t.name}
                      profession={t.role}
                      Icon={Icon}
                    />
                  </motion.div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
    </section>
  );
}
