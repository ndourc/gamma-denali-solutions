import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Droplets, Leaf } from 'lucide-react';

export function SpecializedHero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-slate-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-10 h-10 text-purple-600" />
                <span className="text-purple-600 font-semibold">Specialized Services</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Specialized Cleaning
                <span className="text-purple-600"> Excellence</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From carpet and upholstery cleaning to pressure washing and eco-friendly solutions, 
                our specialized services handle the unique cleaning challenges others can't.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-purple-600" />
                  <span className="text-slate-700 font-medium">Deep Cleaning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-purple-600" />
                  <span className="text-slate-700 font-medium">Eco-Friendly</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/contact">
                    Get Specialized Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#services">
                    View All Services
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Professional specialized cleaning equipment"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg border">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-slate-600 text-sm">Eco-Friendly Options</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}