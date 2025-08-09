"use client";

import { Wrench, Building2, HardHat, Construction } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import messages from "./messages/en.json"; // or use context for language selection

const iconComponents = {
  pavement: <HardHat size={24} />,
  sidewalk: <Wrench size={24} />,
  track: <Construction size={24} />,
  industrial: <Building2 size={24} />
};

const serviceImages = [
  "/servicios/pavimento.jpg",
  "/servicios/andenes.jpg",
  "/servicios/placa-huella.jpg",
  "/servicios/pisos.jpg"
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          {messages.services.title}
        </h2>
        <div className="w-16 h-[2px] bg-yellow-500 rounded-full mb-6 mx-auto" />
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
          {messages.services.items.map((servicio, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}