/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Phone, Search, UserCheck, CheckCircle } from 'lucide-react';

export function StaffingProcess() {
  const steps = [
    {
      icon: Phone,
      title: "Initial Consultation",
      description: "We discuss your specific staffing needs, company culture, and requirements."
    },
    {
      icon: Search,
      title: "Candidate Sourcing",
      description: "Our team identifies and screens qualified candidates from our extensive network."
    },
    {
      icon: UserCheck,
      title: "Interview & Selection",
      description: "You interview pre-screened candidates and make your selection with our guidance."
    },
    {
      icon: CheckCircle,
      title: "Placement & Support",
      description: "We handle onboarding and provide ongoing support for successful integration."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Staffing Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From consultation to placement in 4 simple steps
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-200 transition-colors">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Process Image */}
          <div className="mt-16">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
                alt="Professional recruitment process"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Ready to Find Your Perfect Hire?</h3>
                  <p className="text-blue-100">Let us discuss your staffing needs today.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}