import React from 'react';
import { Shield, Award, Clock, Heart } from 'lucide-react';

export function About() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Your Trusted Partner in the UK
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We understand that every business and individual has unique needs. Our dual expertise 
              in staffing and specialized cleaning allows us to provide comprehensive, caring solutions.
            </p>
          </div>

          {/* Company Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Trusted & Reliable</h3>
              <p className="text-slate-600">
                Fully insured, vetted professionals you can count on for consistent, 
                quality service across both our staffing and cleaning solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Compassionate Care</h3>
              <p className="text-slate-600">
                We approach every client relationship with empathy and understanding, 
                especially our specialized cleaning services for those who need extra support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Always Available</h3>
              <p className="text-slate-600">
                Flexible scheduling and responsive support to meet your needs when you need it most, 
                whether for urgent staffing or sensitive cleaning situations.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              To bridge the gap between professional excellence and personal care. Whether connecting 
              businesses with the right talent or providing specialized cleaning services for those 
              facing life challenges, we are committed to making a positive difference in our communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}