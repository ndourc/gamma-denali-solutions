import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Home, Building2 } from 'lucide-react';

export function CleaningHero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-slate-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-10 h-10 text-green-600" />
                <span className="text-green-600 font-semibold">Specialized Cleaning</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Creating Clean,
                <span className="text-green-600"> Comfortable Spaces</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From residential homes to commercial spaces, we provide compassionate, 
                professional cleaning services tailored to your unique needs across the UK.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700 font-medium">Residential</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700 font-medium">Commercial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700 font-medium">Specialized</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#overview">
                    View Our Services
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Clean, modern home interior"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg border">
                <div className="text-2xl font-bold text-green-600">200+</div>
                <div className="text-slate-600 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}