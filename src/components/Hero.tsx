"use client"

"use client"

import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Users, Heart } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Company Name & Tagline */}
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Connecting People,
            <span className="text-blue-600"> Supporting Lives</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional staffing solutions and compassionate specialized cleaning services 
            tailored to your unique needs across the UK.
          </p>

          {/* Service Icons */}
          <div className="flex justify-center items-center gap-8 mb-10">
            <div className="flex items-center gap-3 text-blue-600">
              <Users className="w-8 h-8" />
              <span className="text-base font-medium">Staffing Solutions</span>
            </div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="flex items-center gap-3 text-green-600">
              <Heart className="w-8 h-8" />
              <span className="text-base font-medium">Specialized Cleaning</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}