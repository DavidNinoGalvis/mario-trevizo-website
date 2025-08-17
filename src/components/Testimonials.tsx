'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { User, Building2, HardHat, Factory } from 'lucide-react';
import { TestimonialCard } from './TestimonialCard';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    message:
      'Excellent work on our industrial pavement. Mario and his team are top-class professionals.',
    name: 'James Carter',
    profession: 'Operations Manager, Denver',
    Icon: Building2,
  },
  {
    message:
      'The sidewalks turned out perfect. They met all quality standards and finished right on time.',
    name: 'Laura Mitchell',
    profession: 'Infrastructure Director, Colorado Springs',
    Icon: HardHat,
  },
  {
    message:
      'Very satisfied with the concrete work. I highly recommend their services for any construction project.',
    name: 'David Miller',
    profession: 'Property Owner, Boulder',
    Icon: User,
  },
  {
    message:
      'The industrial floors in our warehouse exceeded expectations. Durable and flawless finish.',
    name: 'Sarah Johnson',
    profession: 'Warehouse Manager, Fort Collins',
    Icon: Factory,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 px-4">
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
            What our clients say
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
