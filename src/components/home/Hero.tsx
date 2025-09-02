"use client"

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
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
              <Sparkles className="w-8 h-8" />
              <span className="text-base font-medium">Specialized Cleaning</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg">
              <Link href="/cleaning">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="Professional team collaboration"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}