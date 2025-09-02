/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Calendar, Sparkles } from 'lucide-react';

export function ResidentialHero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-slate-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-10 h-10 text-green-600" />
                <span className="text-green-600 font-semibold">Residential Cleaning</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Your Home,
                <span className="text-green-600"> Our Care</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Professional residential cleaning services that give you more time for what matters most. 
                From regular maintenance to deep cleaning, we treat your home with the respect it deserves.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700 font-medium">Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700 font-medium">Deep Cleaning</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/contact">
                    Book Your Cleaning
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#services">
                    View Services
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Beautiful clean home interior"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg border">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-slate-600 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}