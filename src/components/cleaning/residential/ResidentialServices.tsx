import React from 'react';
import { Home, Sparkles, Package, Calendar, Leaf, Clock } from 'lucide-react';

export function ResidentialServices() {
  const services = [
    {
      icon: Home,
      title: "General/Standard Cleaning",
      description: "Regular cleaning of homes, including dusting, vacuuming, mopping, and cleaning bathrooms and kitchens.",
      features: ["Weekly, bi-weekly, or monthly", "Customizable cleaning checklist", "Consistent cleaning team", "Eco-friendly products available"]
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "A thorough, top-to-bottom cleaning of a property, going beyond the basics.",
      features: ["Inside appliances", "Baseboards and trim", "Light fixtures", "Cabinet interiors"]
    },
    {
      icon: Package,
      title: "Move-In/Move-Out Cleaning",
      description: "Cleaning for properties that are moving in or out, often an end-of-tenancy service.",
      features: ["Deposit protection", "Landlord approved", "Same-day service", "Comprehensive checklist"]
    },
    {
      icon: Calendar,
      title: "Airbnb Cleaning",
      description: "Specific cleaning for short-term rental properties, often involving quick turnarounds.",
      features: ["Quick turnaround times", "Linen service available", "Guest-ready standards", "Inventory checks"]
    },
    {
      icon: Leaf,
      title: "Seasonal Cleaning",
      description: "Services like spring cleaning or seasonal deep cleaning.",
      features: ["Spring deep cleaning", "Holiday preparation", "Post-party cleanup", "Seasonal organization"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Residential Cleaning Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive home cleaning solutions designed to fit your lifestyle and schedule.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}