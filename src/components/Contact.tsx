import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  Send,
  User,
  Clock,
  MapPin,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

    

export default function Contact() {
  const{ messages } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success'>(null);
  const [activeMethod, setActiveMethod] = useState<'form' | 'direct'>('form');

  const services = [
    'Concrete Installation',
    'Driveway Repair',
    'Patio Construction',
    'Foundation Work',
    'Decorative Concrete',
    'Other',
  ];

  const contactMethods = [
    {
      id: 'phone',
      icon: Phone,
      title: 'Call Us',
      subtitle: 'Direct phone support',
      contact: '+1 (303) 123-4567',
      secondary: '+1 (720) 987-6543',
      action: 'tel:+13031234567',
      color: 'gold', // <- brand
      available: '24/7',
    },
    {
      id: 'email',
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Detailed quotes & info',
      contact: 'info@mtconcrete.com',
      secondary: 'quotes@mtconcrete.com',
      action: 'mailto:info@mtconcrete.com',
      color: 'black', // <- brand
      available: 'Response in 2-4 hours',
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      title: 'WhatsApp',
      subtitle: 'Quick chat support',
      contact: '+1 (303) 123-4567',
      action: 'https://wa.me/13031234567',
      color: 'green',
      available: 'Mon-Sun 7AM-10PM',
    },
  ] as const;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated submit
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        urgency: 'normal',
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  // Map "brand colors" to Tailwind utilities
  const getColorClasses = (color: 'gold' | 'black' | 'green') => {
    const colors = {
      gold: 'bg-[#D6A52F] hover:bg-[#c6952a] text-[#0D0D0D]',
      black: 'bg-[#0D0D0D] hover:bg-[#1a1a1a] text-white',
      green: 'bg-green-500 hover:bg-green-600 text-white',
    };
    return colors[color] || colors.gold;
  };

  return (
    <section
      id="contacto"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-yellow-50 to-gray-100 overflow-hidden"
    >
      {/* Decorative blobs — brand tinted */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#D6A52F]/20 rounded-full translate-x-36 -translate-y-36 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0D0D0D]/10 rounded-full -translate-x-48 translate-y-48 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0D0D0D] via-gray-800 to-[#D6A52F] bg-clip-text text-transparent mb-6">
            {messages.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D6A52F] to-[#0D0D0D] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {messages.contact.subtitle}
          </p>
        </div>

        {/* Method Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-xl border border-gray-200">
            <button
              onClick={() => setActiveMethod('form')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeMethod === 'form'
                  ? 'bg-gradient-to-r from-[#D6A52F] to-[#0D0D0D] text-white shadow-lg'
                  : 'text-gray-700 hover:text-[#D6A52F]'
              }`}
            >
              {messages.contact.contactForm}
            </button>
            <button
              onClick={() => setActiveMethod('direct')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeMethod === 'direct'
                  ? 'bg-gradient-to-r from-[#D6A52F] to-[#0D0D0D] text-white shadow-lg'
                  : 'text-gray-700 hover:text-[#D6A52F]'
              }`}
            >
              {messages.contact.direct}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeMethod === 'form' ? (
              <div className="bg-white shadow-2xl rounded-3xl p-8 border border-gray-200 relative overflow-hidden">
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="absolute top-4 right-4 flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-xl shadow-lg">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Message sent successfully!
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-[#D6A52F] transition-colors" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D6A52F] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-[#D6A52F] transition-colors" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="you@example.com"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D6A52F] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Service */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-[#D6A52F] transition-colors" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (000) 000-0000"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D6A52F] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D6A52F] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Urgency (semantic colors stay for Tailwind safelist) */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Project Urgency
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: 'low', label: 'Flexible', color: 'green' },
                        { value: 'normal', label: 'Normal', color: 'blue' },
                        { value: 'high', label: 'Urgent', color: 'red' },
                      ].map((option) => (
                        <label key={option.value} className="cursor-pointer">
                          <input
                            type="radio"
                            name="urgency"
                            value={option.value}
                            checked={formData.urgency === option.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div
                            className={`p-3 border-2 rounded-xl text-center font-medium transition-all duration-300 ${
                              formData.urgency === option.value
                                ? `border-${option.color}-500 bg-${option.color}-50 text-${option.color}-700`
                                : 'border-gray-200 text-gray-700 hover:border-gray-300'
                            }`}
                          >
                            {option.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Project Details *
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-[#D6A52F] transition-colors" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Describe your project, timeline, location, and any specific requirements..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D6A52F] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'bg-gradient-to-r from-[#D6A52F] to-[#0D0D0D] hover:from-[#D6A52F] hover:to-[#1a1a1a] text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-8">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={method.id}
                      className="bg-white shadow-2xl rounded-3xl p-8 border border-gray-200 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <div
                            className={`p-4 rounded-2xl ${getColorClasses(
                              method.color,
                            )} shadow-lg`}
                          >
                            <Icon className="h-8 w-8" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {method.title}
                            </h3>
                            <p className="text-gray-600 mb-2">
                              {method.subtitle}
                            </p>
                            <div className="space-y-1">
                              <p className="font-semibold text-lg">
                                {method.contact}
                              </p>
                              {'secondary' in method && method.secondary && (
                                <p className="text-gray-600">
                                  {method.secondary}
                                </p>
                              )}
                            </div>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {method.available}
                            </div>
                          </div>
                        </div>
                        <a
                          href={method.action}
                          target={
                            method.action.startsWith('http')
                              ? '_blank'
                              : undefined
                          }
                          rel={
                            method.action.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          className={`px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${getColorClasses(
                            method.color,
                          )}`}
                        >
                          Contact Now
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Info */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {messages.contact.quickinfo.title}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-[#D6A52F] mt-1" />
                  <div>
                    <p className="font-semibold">{messages.contact.quickinfo.responseTime}</p>
                    <p className="text-gray-600 text-sm">{messages.contact.quickinfo.within}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#D6A52F] mt-1" />
                  <div>
                    <p className="font-semibold">{messages.contact.quickinfo.serviceArea}</p>
                    <p className="text-gray-600 text-sm">{messages.contact.quickinfo.colorado}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold">{messages.contact.quickinfo.freeEstimate}</p>
                    <p className="text-gray-600 text-sm">{messages.contact.quickinfo.always}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl shadow-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-bold">Emergency Service</h3>
              </div>
              <p className="mb-6/90 opacity-90">
                Need immediate concrete repair? Our emergency team is available
                24/7.
              </p>
              <a
                href="tel:+13031234567"
                className="block w-full text-center bg-white text-red-600 font-bold py-3 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                Call Emergency Line
              </a>
            </div>

            {/* Social Proof */}
            <div className="bg-gradient-to-br from-[#D6A52F] to-[#f0c95c] rounded-3xl shadow-2xl p-8 text-[#0D0D0D]">
              <h3 className="text-xl font-bold mb-4">{messages.contact.whychooseus.title}</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ {messages.contact.whychooseus.items.fir}</li>
                <li>✓ {messages.contact.whychooseus.items.sec}</li>
                <li>✓ {messages.contact.whychooseus.items.thir}</li>
                <li>✓ {messages.contact.whychooseus.items.four}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
