"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, Info, Star, PhoneCall, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";
import MobileDrawer from "@/components/MobileDrawer";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <Image
            src="/logo-mt.png"
            alt="mt-logo-principal"
            width={100}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
          <Link
            href="#sobre-mi"
            className="flex items-center gap-1 hover:text-yellow-400 transition"
          >
            <Home size={16} /> Inicio
          </Link>
          <Link
            href="#guias"
            className="flex items-center gap-1 hover:text-yellow-400 transition"
          >
            <Info size={16} /> Sobre Nosotros
          </Link>
          <Link
            href="#testimonios"
            className="flex items-center gap-1 hover:text-yellow-400 transition"
          >
            <Star size={16} /> Testimonios
          </Link>
          <Link
            href="#elegirnos"
            className="flex items-center gap-1 hover:text-yellow-400 transition"
          >
            <Globe size={16} /> ¿Por qué elegirnos?
          </Link>
          <Link
            href="#contacto"
            className="flex items-center gap-1 hover:text-yellow-400 transition"
          >
            <PhoneCall size={16} /> ¡Contáctanos!
          </Link>
        </nav>

        {/* Acciones derecha */}
        <div className="flex items-center gap-3">
          {/* Selector de idioma */}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-1 text-white text-xs border border-gray-600 px-3 py-1.5 rounded-full hover:bg-yellow-400 hover:text-black transition"
            onClick={() => {
              alert("Lógica para cambiar idioma: ES / EN");
            }}
          >
            <Globe size={14} /> ES / EN
          </motion.button>

          {/* Botón contacto (desktop) */}
          <Link href="#contacto" className="hidden md:inline">
            <button className="flex items-center gap-2 text-sm bg-yellow-500 text-black px-4 py-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-yellow-400">
              <Mail size={16} /> Contáctanos
            </button>
          </Link>

          {/* Menú móvil */}
          <MobileDrawer />
        </div>
      </div>
    </header>
  );
}
