"use client";

import { Wrench, Building2, HardHat, Construction } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const servicios = [
  {
    icon: <HardHat size={24} />,
    title: "Pavimentos de Concreto",
    image: "/servicios/pavimento.jpg",
    description:
      "Construcción de pavimentos resistentes y duraderos para vías, parqueaderos y zonas industriales.",
  },
  {
    icon: <Wrench size={24} />,
    title: "Andenes Urbanos",
    image: "/servicios/andenes.jpg",
    description:
      "Diseño y construcción de andenes accesibles, estéticos y seguros para la ciudad.",
  },
  {
    icon: <Construction size={24} />,
    title: "Placas Huella",
    image: "/servicios/placa-huella.jpg",
    description:
      "Soluciones eficientes para caminos rurales y zonas de difícil acceso.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Pisos Industriales",
    image: "/servicios/pisos.jpg",
    description:
      "Pisos de alta resistencia ideales para bodegas, fábricas y talleres.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Nuestros Servicios
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
          {servicios.map((servicio, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                <div className="w-full h-48 relative">
                  <Image
                    src={servicio.image}
                    alt={servicio.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-gray-700">
                  <div className="flex items-center gap-2 text-yellow-600 mb-2">
                    {servicio.icon}
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
