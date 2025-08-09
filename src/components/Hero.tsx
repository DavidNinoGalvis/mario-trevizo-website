"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import messages from "./messages/en.json";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current 
      ?.play()
      .catch((err) =>
        console.warn("Video no pudo reproducirse automáticamente:", err)
      );
  }, []);

  return (
    <section className="relative w-full h-[90vh]">
      {/* Video como fondo */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/video-main.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video-poster.jpg"
      />

      {/* Capa oscura encima */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <motion.div
          className="mb-6 px-6 py-2 bg-white text-black text-lg font-semibold rounded-lg shadow-lg inline-flex items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {messages.hero.name}
        </motion.div>
        
        {/* Barra divisoria amarilla */}
        <div className="w-24 h-[2px] bg-yellow-500 rounded-full mb-6" />
        
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {messages.hero.title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {messages.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Link href="#contacto">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-transform hover:scale-105">
              {messages.hero.cta}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}