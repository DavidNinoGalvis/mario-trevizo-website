'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/app/context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Hero() {
  const { messages } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => setIsVideoLoaded(true);
      video.addEventListener('loadeddata', handleLoadedData);

      video.play().catch((err) => console.warn('Autoplay failed:', err));

      return () => video.removeEventListener('loadeddata', handleLoadedData);
    }
  }, []);

  return (
    <section
      className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section with background video"
    >
      {/* Background video con transición suave */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{
          scale: isVideoLoaded ? 1 : 1.1,
          opacity: isVideoLoaded ? 1 : 0,
        }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/video-main.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video-poster.jpg"
          aria-hidden="true"
        />
      </motion.div>

      {/* Overlay con gradiente más sofisticado */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70"
        aria-hidden="true"
      />

      {/* Efecto de partículas muy sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-yellow-400/20 rounded-full"
            style={{
              left: `${20 + i * 60}%`,
              top: `${30 + i * 40}%`,
            }}
            animate={{
              y: [-15, -25, -15],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content mejorado */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 text-white"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Name y subtitle con efectos mejorados */}
        <motion.div className="mb-4" variants={fadeInUp}>
          <span className="mt-highlight">{messages.hero.name}</span>
        </motion.div>

        <motion.div className="mb-6" variants={fadeInUp}>
          <span className="mtsub-highlight relative inline-block">
            {messages.hero.subtitle}
          </span>
        </motion.div>

        {/* Línea divisora animada */}
        <motion.div
          className="w-24 h-[2px] bg-yellow-500 rounded-full mb-6 relative overflow-hidden"
          variants={fadeInUp}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-60"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: 'linear',
            }}
          />
        </motion.div>

        {/* Title con efecto de texto gradual */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          {messages.hero.title}
        </motion.h1>

        {/* Description mejorada */}
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="#contacto"
            className="link-underline hover:text-yellow-300 transition-colors duration-300"
          >
            {messages.hero.description}
          </a>
        </motion.p>

        {/* CTA Button mejorado */}
        <motion.div
          variants={{
            initial: { opacity: 0, scale: 0.8, y: 20 },
            animate: { opacity: 1, scale: 1, y: 0 },
          }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link href="#contacto" aria-label="Go to contact section">
            <motion.button
              className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-3 rounded-full text-sm font-semibold overflow-hidden group focus:outline-none focus:ring-2 focus:ring-yellow-300"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(250, 204, 21, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              {/* Efecto de brillo sutil */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
              <span className="relative z-10">{messages.hero.cta}</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator mejorado */}
        <motion.div
          className="absolute bottom-6 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-white/60 mb-2" />
            <motion.span
              className="block w-6 h-6 border-b-2 border-r-2 border-white/80 rotate-45"
              whileHover={{
                scale: 1.1,
                borderColor: 'rgba(250, 204, 21, 0.8)',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Efecto de vignette sutil */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  );
}
