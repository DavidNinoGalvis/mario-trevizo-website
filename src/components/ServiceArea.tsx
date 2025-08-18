'use client';

import React, { useState } from 'react';
import { MapPin, ChevronDown, Phone, Mail, Clock } from 'lucide-react';

export default function ServiceArea() {
  const [activeTab, setActiveTab] = useState('map');
  const [selectedRegion, setSelectedRegion] = useState('denver');
  const [isExpanded, setIsExpanded] = useState(false);

  const messages = {
    serviceArea: {
      title: 'Service Area',
      description:
        'We proudly offer our services throughout Colorado with specialized coverage in the main metropolitan areas.',
    },
    regions: {
      denver: 'Denver Metropolitan Area',
      springs: 'Colorado Springs',
      fort: 'Fort Collins',
      boulder: 'Boulder',
    },
  };

  const regions = [
    {
      id: 'denver',
      name: 'Denver Metropolitan Area',
      coverage: '15+ cities',
      population: '2.9M residents',
      cities: [
        'Denver',
        'Aurora',
        'Lakewood',
        'Thornton',
        'Arvada',
        'Westminster',
      ],
      color: '#D6A52F',
    },
    {
      id: 'springs',
      name: 'Colorado Springs',
      coverage: '8+ cities',
      population: '750K residents',
      cities: [
        'Colorado Springs',
        'Fountain',
        'Security-Widefield',
        'Cimarron Hills',
      ],
      color: '#D6A52F',
    },
    {
      id: 'fort',
      name: 'Fort Collins',
      coverage: '5+ cities',
      population: '350K residents',
      cities: ['Fort Collins', 'Loveland', 'Greeley', 'Windsor'],
      color: '#D6A52F',
    },
    {
      id: 'boulder',
      name: 'Boulder',
      coverage: '6+ cities',
      population: '325K residents',
      cities: ['Boulder', 'Longmont', 'Broomfield', 'Lafayette'],
      color: '#D6A52F',
    },
  ];

  const currentRegion = regions.find((r) => r.id === selectedRegion);

  return (
    <section className="bg-[#0D0D0D] py-20 px-6 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D6A52F]/20 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D6A52F]/20 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D6A52F] rounded-2xl mb-8 shadow-2xl transform hover:scale-110 transition-all duration-300">
            <MapPin className="h-10 w-10 text-[#0D0D0D]" />
          </div>

          <h2 className="text-5xl font-bold text-white mb-6">
            {messages.serviceArea.title}
          </h2>

          <div className="w-24 h-1 bg-[#D6A52F] mx-auto mb-8 rounded-full"></div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {messages.serviceArea.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-xl border border-gray-100">
            <button
              onClick={() => setActiveTab('map')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'map'
                  ? 'bg-[#D6A52F] text-black shadow-lg'
                  : 'text-gray-600 hover:text-[#D6A52F]'
              }`}
            >
              Interactive Map
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'list'
                  ? 'bg-[#D6A52F] text-black shadow-lg'
                  : 'text-gray-600 hover:text-[#D6A52F]'
              }`}
            >
              Cities List
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Simulated Map */}
          <div className="lg:col-span-2">
            {activeTab === 'map' ? (
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
                  <svg
                    width="400"
                    height="280"
                    viewBox="0 0 400 280"
                    className="opacity-20"
                  >
                    <path
                      d="M50,50 L350,50 L350,80 L370,80 L370,230 L30,230 L30,80 Z"
                      fill="#D6A52F"
                      stroke="#D6A52F"
                      strokeWidth="2"
                    />
                  </svg>
                  {regions.map((region, index) => (
                    <div
                      key={region.id}
                      className={`absolute w-6 h-6 rounded-full cursor-pointer transform -translate-x-3 -translate-y-3 transition-all duration-300 hover:scale-150 ${
                        selectedRegion === region.id ? 'scale-125' : ''
                      }`}
                      style={{
                        backgroundColor: region.color,
                        left: `${120 + index * 60}px`,
                        top: `${100 + (index % 2) * 40}px`,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                      }}
                      onClick={() => setSelectedRegion(region.id)}
                    >
                      <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-25"></div>
                    </div>
                  ))}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-sm font-semibold text-gray-800">
                      State of Colorado
                    </p>
                    <p className="text-xs text-gray-600">
                      Click on the markers
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="grid gap-6">
                  {regions.map((region) => (
                    <div
                      key={region.id}
                      className="border border-gray-200 rounded-2xl p-6 hover:border-[#D6A52F] transition-all duration-300 hover:shadow-lg cursor-pointer"
                      onClick={() => setSelectedRegion(region.id)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">
                          {region.name}
                        </h3>
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: region.color }}
                        ></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Coverage</p>
                          <p className="font-semibold text-gray-800">
                            {region.coverage}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Population</p>
                          <p className="font-semibold text-gray-800">
                            {region.population}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {region.cities.slice(0, 4).map((city, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {city}
                          </span>
                        ))}
                        {region.cities.length > 4 && (
                          <span className="px-3 py-1 bg-[#D6A52F]/20 text-[#0D0D0D] rounded-full text-sm">
                            +{region.cities.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Info Panel */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div
                  className="w-4 h-4 rounded-full mr-3"
                  style={{ backgroundColor: currentRegion?.color }}
                ></div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {currentRegion?.name}
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Coverage:</span>
                  <span className="font-semibold">
                    {currentRegion?.coverage}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Population:</span>
                  <span className="font-semibold">
                    {currentRegion?.population}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-600 font-medium">
                    Main Cities:
                  </span>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[#D6A52F] hover:text-yellow-600 transition-colors"
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
                <div className="space-y-2">
                  {currentRegion?.cities
                    .slice(0, isExpanded ? undefined : 3)
                    .map((city, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-[#D6A52F] rounded-full mr-3"></div>
                        <span className="text-gray-700">{city}</span>
                      </div>
                    ))}
                </div>
              </div>

              <button className="w-full bg-[#D6A52F] text-black font-semibold py-3 rounded-xl hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                Request Service
              </button>
            </div>

            {/* Contact Info */}
            <div className="bg-[#D6A52F] rounded-3xl shadow-2xl p-8 text-[#0D0D0D]">
              <h3 className="text-2xl font-bold mb-6">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>(303) 555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>info@mtconstructions.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
