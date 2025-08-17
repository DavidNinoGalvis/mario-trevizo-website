'use client';

import { motion } from 'framer-motion';
import { HardHat, Building2, Briefcase, Factory } from 'lucide-react';
import { TestimonialCard } from './TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'John Peterson',
    profession: 'Civil Engineer, Denver',
    icon: HardHat,
    message:
      'We hired Mario Trevizo LLA for the paving of an industrial access road and were impressed by the speed and quality. They delivered on time and the finish was flawless.',
  },
  {
    name: 'Emily Rodriguez',
    profession: 'Restaurant Owner, Colorado Springs',
    icon: Building2,
    message:
      'The renovation of our parking lot with stamped concrete completely changed our customers’ experience. Clean work, attention to detail, and very professional service.',
  },
  {
    name: 'Michael Thompson',
    profession: 'Independent Contractor, Boulder',
    icon: Briefcase,
    message:
      'Their team is reliable and professional. On rural asphalt projects they showed true commitment, adapting to difficult conditions without sacrificing quality.',
  },
  {
    name: 'Sarah Martinez',
    profession: 'Condominium Manager, Fort Collins',
    icon: Factory,
    message:
      'The industrial floors they installed in our warehouses exceeded expectations. The durability and finish are top-notch.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-3xl font-bold text-gray-800"
        >
          What our clients say
        </motion.h2>
        <div className="mx-auto mb-10 h-[2px] w-16 rounded-full bg-yellow-500" />

        {/* Carrusel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TestimonialCard
                  message={t.message}
                  name={t.name}
                  profession={t.profession}
                  Icon={t.icon}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
