import React from 'react';
import { Shield, Award, Clock, Heart, CheckCircle, Users } from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Gamma Denali Solutions?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We understand that every business and individual has unique needs. Our dual expertise 
              allows us to provide comprehensive, caring solutions.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Trusted & Reliable</h3>
              <p className="text-slate-600">
                Fully insured, vetted professionals you can count on for consistent, 
                quality service across both our staffing and cleaning solutions.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Compassionate Care</h3>
              <p className="text-slate-600">
                We approach every client relationship with empathy and understanding, 
                especially our specialized cleaning services for those who need extra support.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Always Available</h3>
              <p className="text-slate-600">
                Flexible scheduling and responsive support to meet your needs when you need it most, 
                whether for urgent staffing or sensitive cleaning situations.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-slate-600">Successful Placements</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-slate-600">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-slate-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}