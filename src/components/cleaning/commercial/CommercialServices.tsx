import React from 'react';
import { Building2, Users, ShoppingBag, Shield, Clock, Briefcase } from 'lucide-react';

export function CommercialServices() {
  const services = [
    {
      icon: Building2,
      title: "Office Cleaning",
      description: "Maintaining cleanliness and order in office spaces for optimal productivity.",
      features: ["Daily office maintenance", "Workstation sanitization", "Common area cleaning", "Restroom maintenance"]
    },
    {
      icon: Users,
      title: "Janitorial Services",
      description: "Regular, ongoing cleaning and maintenance for businesses and facilities.",
      features: ["Floor care & maintenance", "Waste management", "Supply restocking", "Emergency cleanup"]
    },
    {
      icon: ShoppingBag,
      title: "Retail Cleaning",
      description: "Cleaning for shops and stores to maintain an inviting customer environment.",
      features: ["Customer area cleaning", "Changing room maintenance", "Window displays", "After-hours service"]
    },
    {
      icon: Shield,
      title: "Medical Cleaning",
      description: "Specialized cleaning and sanitation services for healthcare facilities.",
      features: ["Hospital-grade disinfection", "Biohazard cleanup", "Compliance standards", "Infection control protocols"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Commercial Cleaning Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Professional cleaning solutions designed to keep your business running smoothly.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Industries Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
              alt="Professional commercial cleaning"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Serving All Industries</h3>
                <p className="text-blue-100">From small offices to large medical facilities, we have the expertise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}