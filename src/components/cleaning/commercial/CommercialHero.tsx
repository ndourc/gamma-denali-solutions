/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Users, Shield } from 'lucide-react';

export function CommercialHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-slate-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-10 h-10 text-blue-600" />
                <span className="text-blue-600 font-semibold">Commercial Cleaning</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Professional Spaces,
                <span className="text-blue-600"> Professional Results</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Maintain a pristine, professional environment that impresses clients and 
                keeps your team productive. Our commercial cleaning services are tailored 
                to your business needs.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700 font-medium">Office Cleaning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700 font-medium">Medical Facilities</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/contact">
                    Get Commercial Quote
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
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Clean modern office space"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg border">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-slate-600 text-sm">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}