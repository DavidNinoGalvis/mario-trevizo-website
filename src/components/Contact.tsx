'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-16 px-6 bg-gray-100"
      aria-label="Contact section"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have questions or need a quote? Fill out the form below or contact us
          directly via phone or WhatsApp.
        </motion.p>

        {/* Contact form */}
        <motion.form
          className="bg-white shadow-lg rounded-lg p-8 space-y-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-left text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-left text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-left text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-yellow-400 transition-transform hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact options */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {/* Phone numbers */}
          <motion.div
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Phone className="w-8 h-8 text-yellow-500 mb-3" />
            <p className="font-semibold text-gray-800">Call Us</p>
            <p className="text-gray-600">+1 (303) 123-4567</p>
            <p className="text-gray-600">+1 (720) 987-6543</p>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Mail className="w-8 h-8 text-yellow-500 mb-3" />
            <p className="font-semibold text-gray-800">Email Us</p>
            <p className="text-gray-600">info@mtconcrete.com</p>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <MessageCircle className="w-8 h-8 text-green-500 mb-3" />
            <p className="font-semibold text-gray-800">WhatsApp</p>
            <a
              href="https://wa.me/13031234567"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-400 transition-transform hover:scale-105"
            >
              Start Chat
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
