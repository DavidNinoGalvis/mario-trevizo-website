"use client";

import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Info, Star, PhoneCall, Mail, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa */}
      <button onClick={() => setIsOpen(true)} className="md:hidden text-white">
        <svg width="24" height="24" fill="none" stroke="currentColor">
          <path
            d="M4 6h16M4 12h16M4 18h16"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <Dialog
            as="div"
            className="relative z-50"
            open={isOpen}
            onClose={setIsOpen}
          >
            {/* Fondo oscuro transparente */}
            <motion.div
              className="fixed inset-0 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer panel */}
            <div className="fixed inset-0 flex justify-end">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-64 h-full bg-black p-6 shadow-xl flex flex-col"
              >
                <Dialog.Panel>
                  {/* Encabezado */}
                  <div className="flex items-center justify-between mb-6 text-white">
                    <h2 className="text-lg font-semibold">Menú</h2>
                    <button onClick={() => setIsOpen(false)}>
                      <X size={24} />
                    </button>
                  </div>

                  {/* Navegación */}
                  <nav className="flex flex-col gap-4 text-sm text-white">
                    <Link
                      href="#sobre-mi"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 hover:text-yellow-400 transition"
                    >
                      <Home size={16} /> Inicio
                    </Link>
                    <Link
                      href="#guias"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 hover:text-yellow-400 transition"
                    >
                      <Info size={16} /> Sobre Nosotros
                    </Link>
                    <Link
                      href="#testimonios"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 hover:text-yellow-400 transition"
                    >
                      <Star size={16} /> Testimonios
                    </Link>
                    <Link
                      href="#elegirnos"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 hover:text-yellow-400 transition"
                    >
                      <Globe size={16} /> ¿Por qué elegirnos?
                    </Link>
                    <Link
                      href="#contacto"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 hover:text-yellow-400 transition"
                    >
                      <PhoneCall size={16} /> ¡Contáctanos!
                    </Link>

                    {/* Selector de idioma */}
                    <button
                      onClick={() => {
                        alert("Lógica para cambiar idioma");
                      }}
                      className="flex items-center gap-2 mt-6 text-xs border border-gray-600 px-3 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition"
                    >
                      <Globe size={14} /> Cambiar idioma: ES / EN
                    </button>

                    {/* Botón contáctanos adicional */}
                    <Link href="#contacto" onClick={() => setIsOpen(false)}>
                      <button className="w-full mt-4 flex items-center justify-center gap-2 text-sm bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition">
                        <Mail size={16} /> Contáctanos
                      </button>
                    </Link>
                  </nav>
                </Dialog.Panel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
