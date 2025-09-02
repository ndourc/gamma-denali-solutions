/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Briefcase, 
  UserCheck, 
  Sparkles, 
  Home, 
  Building2,
  ArrowRight
} from 'lucide-react';

export function ServicesOverview() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Two specialized services designed to support businesses and individuals 
              with professional excellence and personal care.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Staffing Solutions */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Professional business meeting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-10 h-10 text-blue-600" />
                    <h3 className="text-2xl font-bold text-slate-900">Staffing Solutions</h3>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Professional HR services, temporary and permanent employment solutions 
                    for businesses across the UK.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">Temporary & Permanent Staffing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <UserCheck className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">Executive Search & Recruitment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">HR Consultancy Services</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/staffing">
                      Explore Staffing Services
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Cleaning Services */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-green-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Clean modern home interior"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-10 h-10 text-green-600" />
                    <h3 className="text-2xl font-bold text-slate-900">Specialized Cleaning</h3>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Compassionate, tailored cleaning services for residential, commercial, 
                    and specialized needs across the UK.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <Home className="w-5 h-5 text-green-600" />
                      <span className="text-slate-700">Residential Cleaning Services</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-green-600" />
                      <span className="text-slate-700">Commercial & Office Cleaning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-green-600" />
                      <span className="text-slate-700">Specialized & Niche Services</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Link href="/cleaning">
                      Explore Cleaning Services
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}