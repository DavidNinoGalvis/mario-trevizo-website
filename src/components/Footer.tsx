'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0D0D0D] text-gray-300 py-6 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left - Copyright */}
        <motion.p
          className="text-sm text-gray-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          © {new Date().getFullYear()} Mt Constructions – All rights reserved.
        </motion.p>

        {/* Center - Socials */}
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a
            href="https://github.com/DavidNinoGalvis/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/danino-dev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="mailto:contact@danino.dev"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Right - Signature */}
        <motion.p
          className="flex items-center gap-1 text-sm text-gray-400"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Made with <Heart className="w-4 h-4 text-red-500" /> by{' '}
          <span className="font-semibold text-white">
            <a
              href="https://www.danino.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              danino.dev
            </a>{' '}
            | MarcoRiascos
          </span>
        </motion.p>
      </div>
    </footer>
  );
}
