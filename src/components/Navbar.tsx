'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Home, Info, Star, PhoneCall, Mail, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import MobileDrawer from '@/components/MobileDrawer';
import { useLanguage } from '@/app/context/LanguageContext';

const navLinks = [
  { href: '#sobre-mi', labelKey: 'home', Icon: Home },
  { href: '#guias', labelKey: 'about', Icon: Info },
  { href: '#testimonios', labelKey: 'testimonials', Icon: Star },
  { href: '#elegirnos', labelKey: 'whyUs', Icon: Globe },
  { href: '#contacto', labelKey: 'contact', Icon: PhoneCall },
];

export default function Navbar() {
  const { messages, toggleLanguage, language } = useLanguage();

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-mt.png"
              alt="mt-logo-principal"
              width={100}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white relative">
          {navLinks.map(({ href, labelKey, Icon }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={href}
                className="group relative flex items-center gap-1 transition"
              >
                <Icon
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:text-yellow-400"
                />
                <span className="transition-colors group-hover:text-yellow-400">
                  {
                    messages.navbar.links[
                      labelKey as keyof typeof messages.navbar.links
                    ]
                  }
                </span>
                {/* underline hover effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Acciones derecha */}
        <div className="flex items-center gap-3">
          {/* Selector de idioma */}
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: '#FACC15',
              color: '#000',
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 text-white text-xs border border-gray-600 px-3 py-1.5 rounded-full transition"
            onClick={toggleLanguage}
          >
            <Globe size={14} /> {language === 'es' ? 'EN' : 'ES'}
          </motion.button>

          {/* Botón contacto (desktop) */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="#contacto" className="hidden md:inline">
              <button className="flex items-center gap-2 text-sm bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full shadow-md hover:from-yellow-300 hover:to-yellow-400 transition-all">
                <Mail size={16} /> {messages.navbar.buttons.contact}
              </button>
            </Link>
          </motion.div>

          {/* Menú móvil */}
          <MobileDrawer />
        </div>
      </div>
      {/*Destello Amarillo Agregado */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-yellow-500 via-transparent to-yellow-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
    </motion.header>
  );
}
