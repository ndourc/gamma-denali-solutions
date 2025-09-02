import React from 'react';
import { Phone, Calendar, Home, CheckCircle } from 'lucide-react';

export function ResidentialProcess() {
  const steps = [
    {
      icon: Phone,
      title: "Free Consultation",
      description: "We discuss your cleaning needs, preferences, and schedule a convenient time."
    },
    {
      icon: Calendar,
      title: "Schedule Service",
      description: "Choose from one-time, weekly, bi-weekly, or monthly cleaning schedules."
    },
    {
      icon: Home,
      title: "Professional Cleaning",
      description: "Our trained team arrives with all supplies and cleans to your specifications."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "We follow up to ensure you're completely satisfied with our service."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Simple, straightforward process to get your home sparkling clean
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-green-200 transition-colors">
                    <step.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Before/After Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
              alt="Clean, organized home"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent flex items-center">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Transform Your Home Today</h3>
                <p className="text-green-100">Experience the difference professional cleaning makes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}