'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  Info,
  Star,
  PhoneCall,
  Mail,
  Globe,
  Sparkles,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
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
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Floating particles animation
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <>
      {/* Floating background particles */}
      <div className="fixed top-0 left-0 w-full h-20 pointer-events-none overflow-hidden z-40">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full blur-sm"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 5}px`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: i * 0.8 }}
          />
        ))}
      </div>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-yellow-400/20 shadow-2xl shadow-yellow-500/10'
            : 'bg-black/95 backdrop-blur-md border-b border-gray-800/50'
        }`}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ backgroundSize: '200% 100%' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          {/* Logo with enhanced animations */}
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: [0, 2],
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="relative"
          >
            <Link href="/" className="flex items-center gap-2 group">
              {/* Glow effect behind logo */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />

              <div className="relative">
                <Image
                  src="/logo-mt.png"
                  alt="mt-logo-principal"
                  width={110}
                  height={44}
                  className="object-contain transition-all duration-300 group-hover:brightness-110"
                  priority
                />

                {/* Sparkle effect on hover */}
                <motion.div
                  className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [0, 1.2, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Sparkles size={12} className="text-yellow-400" />
                </motion.div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation with enhanced effects */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white relative">
            {navLinks.map(({ href, labelKey, Icon }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: -20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
              >
                <Link
                  href={href}
                  className="group relative flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 hover:bg-yellow-400/10"
                >
                  {/* Icon with advanced animations */}
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <Icon
                      size={18}
                      className="transition-all duration-300 group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]"
                    />
                  </motion.div>

                  {/* Text with gradient effect on hover */}
                  <motion.span
                    className="relative transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-yellow-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    {
                      messages.navbar.links[
                        labelKey as keyof typeof messages.navbar.links
                      ]
                    }
                  </motion.span>

                  {/* Enhanced underline effect */}
                  <motion.span
                    className="absolute -bottom-1 left-1/2 h-[2px] bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full"
                    initial={{ width: 0, x: '-50%' }}
                    whileHover={{
                      width: '100%',
                      boxShadow: '0 0 8px rgba(250,204,21,0.6)',
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Actions with enhanced styling */}
          <div className="flex items-center gap-4">
            {/* Language Selector with premium styling */}
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 20px rgba(250,204,21,0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-2 text-white text-xs border border-yellow-400/30 px-4 py-2 rounded-full transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400/10 backdrop-blur-sm"
              onClick={toggleLanguage}
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              />

              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Globe size={16} className="relative z-10" />
              </motion.div>
              <span className="relative z-10 font-medium">
                {language === 'es' ? 'EN' : 'ES'}
              </span>
            </motion.button>

            {/* Contact Button with advanced effects */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Link href="#contacto">
                <motion.button
                  className="relative flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2.5 rounded-full overflow-hidden group"
                  whileHover={{
                    boxShadow: '0 10px 30px rgba(250,204,21,0.3)',
                    y: -2,
                  }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon with bounce animation */}
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10"
                  >
                    <Mail size={18} />
                  </motion.div>

                  <span className="relative z-10">
                    {messages.navbar.buttons.contact}
                  </span>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-200%', '200%'],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* Mobile Drawer */}
            <MobileDrawer />
          </div>
        </div>

        {/* Enhanced bottom gradient line */}
        <motion.div
          className="relative h-[3px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent overflow-hidden"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          {/* Moving shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </motion.header>
    </>
  );
}
