
"use client";

import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Info, Star, PhoneCall, Mail, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, toggleLanguage, language } = useLanguage();

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="md:hidden text-white">
        <svg width="24" height="24" fill="none" stroke="currentColor">
          <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <Dialog as="div" className="relative z-50" open={isOpen} onClose={setIsOpen}>
            <motion.div className="fixed inset-0 bg-black/40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />

            <div className="fixed inset-0 flex justify-end">
              <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="w-64 h-full bg-black p-6 shadow-xl flex flex-col">
                <Dialog.Panel>
                  <div className="flex items-center justify-between mb-6 text-white">
                    <h2 className="text-lg font-semibold">{messages.mobileDrawer.menuTitle}</h2>
                    <button onClick={() => setIsOpen(false)}>
                      <X size={24} />
                    </button>
                  </div>

                  <nav className="flex flex-col gap-4 text-sm text-white">
                    <Link href="#sobre-mi" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-yellow-400 transition">
                      <Home size={16} /> {messages.navbar.links.home}
                    </Link>
                    <Link href="#guias" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-yellow-400 transition">
                      <Info size={16} /> {messages.navbar.links.about}
                    </Link>
                    <Link href="#testimonios" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-yellow-400 transition">
                      <Star size={16} /> {messages.navbar.links.testimonials}
                    </Link>
                    <Link href="#elegirnos" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-yellow-400 transition">
                      <Globe size={16} /> {messages.navbar.links.whyUs}
                    </Link>
                    <Link href="#contacto" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-yellow-400 transition">
                      <PhoneCall size={16} /> {messages.navbar.links.contact}
                    </Link>

                    <button onClick={() => { toggleLanguage(); setIsOpen(false); }} className="flex items-center gap-2 mt-6 text-xs border border-gray-600 px-3 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
                      <Globe size={14} /> {language === "es" ? "EN" : "ES"}
                    </button>

                    <Link href="#contacto" onClick={() => setIsOpen(false)}>
                      <button className="w-full mt-4 flex items-center justify-center gap-2 text-sm bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition">
                        <Mail size={16} /> {messages.mobileDrawer.buttons.contact}
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