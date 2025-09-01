import React from 'react';
import { Button } from './ui/button';
import { 
  Users, 
  Briefcase, 
  UserCheck, 
  Heart, 
  Home, 
  Calendar,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-20 bg-slate-50">
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

          {/* Two-Column Service Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Staffing Solutions - Blue Theme */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-10 h-10" />
                  <h3 className="text-2xl font-bold">Staffing Solutions</h3>
                </div>
                <p className="text-blue-100 text-lg">
                  Professional HR services, temporary and permanent employment solutions 
                  for businesses across the UK.
                </p>
              </div>
              
              <div className="p-8">
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Briefcase className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Temporary Staffing</h4>
                      <p className="text-slate-600">Quick placements for short-term projects, seasonal needs, and cover requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <UserCheck className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Permanent Recruitment</h4>
                      <p className="text-slate-600">Comprehensive recruitment solutions to find the perfect long-term team members.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">HR Consultancy</h4>
                      <p className="text-slate-600">Expert HR guidance, policy development, and compliance support for growing businesses.</p>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Find Your Perfect Hire
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Specialized Cleaning - Green Theme */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-10 h-10" />
                  <h3 className="text-2xl font-bold">Specialized Cleaning</h3>
                </div>
                <p className="text-green-100 text-lg">
                  Compassionate, tailored cleaning services for individuals with unique circumstances 
                  and specific needs.
                </p>
              </div>
              
              <div className="p-8">
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Mental Health Support</h4>
                      <p className="text-slate-600">Gentle, understanding cleaning services for those managing mental health challenges.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Busy Lifestyle Support</h4>
                      <p className="text-slate-600">Flexible cleaning solutions for professionals with demanding schedules and hectic lives.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Home className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Independent Living</h4>
                      <p className="text-slate-600">Supportive cleaning services for individuals living alone who need extra help maintaining their space.</p>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Get Compassionate Care
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Shared Values */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">What Both Services Share</h3>
              <div className="flex flex-wrap justify-center gap-6 text-slate-600">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Fully Insured & Vetted
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Flexible Scheduling
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Competitive Rates
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Local UK Team
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}