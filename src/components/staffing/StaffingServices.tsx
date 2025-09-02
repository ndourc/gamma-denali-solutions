import React from 'react';
import { Briefcase, UserCheck, Users, Search, FileText, TrendingUp } from 'lucide-react';

export function StaffingServices() {
  const services = [
    {
      icon: Briefcase,
      title: "Temporary Staffing",
      description: "Quick placements for short-term projects, seasonal needs, and cover requirements.",
      features: ["Same-day placements available", "Flexible contract terms", "Pre-screened candidates", "24/7 support"]
    },
    {
      icon: UserCheck,
      title: "Permanent Recruitment",
      description: "Comprehensive recruitment solutions to find the perfect long-term team members.",
      features: ["Executive search", "Graduate recruitment", "Specialist roles", "Cultural fit assessment"]
    },
    {
      icon: Users,
      title: "HR Consultancy",
      description: "Expert HR guidance, policy development, and compliance support for growing businesses.",
      features: ["Policy development", "Compliance audits", "Training programs", "Performance management"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Staffing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive staffing solutions designed to meet your business needs, 
              from urgent temporary cover to strategic permanent hires.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
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

          {/* Industries We Serve */}
          <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Industries We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                <span className="text-slate-700 font-medium">Technology</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FileText className="w-8 h-8 text-blue-600" />
                <span className="text-slate-700 font-medium">Finance</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="w-8 h-8 text-blue-600" />
                <span className="text-slate-700 font-medium">Healthcare</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Briefcase className="w-8 h-8 text-blue-600" />
                <span className="text-slate-700 font-medium">Retail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}