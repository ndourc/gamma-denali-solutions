import React from 'react';
import { Tabs } from './ui/tabs';
import { 
  Phone, 
  Search, 
  UserCheck, 
  CheckCircle,
  MessageCircle,
  Calendar,
  Home,
  Smile
} from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Simple, straightforward processes designed to get you the help you need quickly and efficiently.
            </p>
          </div>

          {/* Staffing Process */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Staffing Solutions Process</h3>
              <p className="text-slate-600">From consultation to placement in 4 simple steps</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">1. Initial Consultation</h4>
                <p className="text-slate-600 text-sm">
                  We discuss your specific staffing needs, company culture, and requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">2. Candidate Sourcing</h4>
                <p className="text-slate-600 text-sm">
                  Our team identifies and screens qualified candidates from our extensive network.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">3. Interview & Selection</h4>
                <p className="text-slate-600 text-sm">
                  You interview pre-screened candidates and make your selection with our guidance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">4. Placement & Support</h4>
                <p className="text-slate-600 text-sm">
                  We handle onboarding and provide ongoing support for successful integration.
                </p>
              </div>
            </div>
          </div>

          {/* Cleaning Process */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-600 mb-2">Specialized Cleaning Process</h3>
              <p className="text-slate-600">Compassionate care delivered in 4 thoughtful steps</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">1. Gentle Consultation</h4>
                <p className="text-slate-600 text-sm">
                  A caring conversation about your needs, preferences, and any special considerations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">2. Flexible Scheduling</h4>
                <p className="text-slate-600 text-sm">
                  We arrange visits at times that work best for you, with full respect for your routine.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">3. Caring Service</h4>
                <p className="text-slate-600 text-sm">
                  Our trained professionals provide thorough, respectful cleaning tailored to your needs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smile className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">4. Ongoing Support</h4>
                <p className="text-slate-600 text-sm">
                  Regular check-ins to ensure you are completely satisfied and comfortable with our service.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Ready to Get Started?</h3>
              <p className="text-slate-600 mb-4">Contact us today for a free consultation tailored to your specific needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+44-123-456-7890" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +44 123 456 7890
                </a>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send a Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}