'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Componente del mapa que solo se renderiza en el cliente
const MapComponent = dynamic(
  () => {
    return import('leaflet').then((L) => {
      // Fix para los íconos de Leaflet en Next.js
      delete (L.Icon.Default.prototype as Record<string, unknown>)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });

      return import('react-leaflet').then(
        ({ MapContainer, TileLayer, Marker, Popup }) =>
          function MapComponentInner() {
            return (
              <MapContainer
                center={[39.5501, -105.7821]} // Centro de Colorado
                zoom={7}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[39.7392, -104.9903]}>
                  <Popup>We operate in Colorado only</Popup>
                </Marker>
              </MapContainer>
            );
          },
      );
    });
  },
  { ssr: false },
);

export default function ServiceArea() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        {/* Icono */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-yellow-500/20 p-4 rounded-full">
            <MapPin className="h-10 w-10 text-yellow-600" />
          </div>
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Our Service Area
        </motion.h2>

        {/* Línea decorativa */}
        <div className="mx-auto mb-6 h-[2px] w-16 rounded-full bg-yellow-500" />

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Currently, we proudly serve{' '}
          <span className="font-semibold text-gray-800">Colorado</span> only.
          Our projects are located in Denver, Boulder, Colorado Springs, Fort
          Collins, and nearby areas. For clients outside the state, please note
          that we are not offering services beyond Colorado at this time.
        </motion.p>
      </div>

      {/* Mapa interactivo */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg"
        >
          {isClient ? (
            <MapComponent />
          ) : (
            <div className="h-full w-full bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Cargando mapa...</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
