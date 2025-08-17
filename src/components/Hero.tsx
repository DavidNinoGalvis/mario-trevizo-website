'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/app/context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Hero() {
  const { messages } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current
      ?.play()
      .catch((err) => console.warn('Autoplay failed:', err));
  }, []);

  return (
    <section
      className="relative w-full h-[90vh] flex items-center justify-center"
      aria-label="Hero section with background video"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/video-main.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/video-poster.jpg"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 text-white">
        <motion.div
          className="mb-6 px-6 py-2 bg-white text-black text-lg font-semibold rounded-lg shadow-lg inline-flex items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {messages.hero.name}
        </motion.div>

        <div className="w-24 h-[2px] bg-yellow-500 rounded-full mb-6" />

        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          {...fadeInUp}
        >
          {messages.hero.title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl"
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {messages.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link href="#contacto" aria-label="Go to contact section">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300">
              {messages.hero.cta}
            </button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          aria-hidden="true"
        >
          <span className="block w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
        </motion.div>
      </div>
    </section>
  );
}
