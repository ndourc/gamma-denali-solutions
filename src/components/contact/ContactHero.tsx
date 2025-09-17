import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Let us Start the
            <span className="text-blue-600"> Conversation</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you need staffing solutions or specialized cleaning services, 
            we are here to help. Get in touch for a free consultation.
          </p>

          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-3 gap-6">
            <a href="tel:+44-742-821-2756" className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-slate-900">Call Us</h3>
                <p className="text-slate-600 text-sm">+44 742 821 2756</p>
              </div>
            </a>

            <a href="mailto:sphathisiwe@gammadenali.solutions" className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left overflow-hidden">
                <h3 className="font-semibold text-slate-900">Email Us</h3>
                <p className="text-slate-600 text-[11px] sm:text-sm truncate">sphathisiwe@gamma...</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-slate-900">Visit Us</h3>
                <p className="text-slate-600 text-sm">Derby, UK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}