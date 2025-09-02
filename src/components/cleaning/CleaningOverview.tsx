import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Building2, Sparkles, ArrowRight } from 'lucide-react';

export function CleaningOverview() {
  const categories = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Comprehensive home cleaning services from regular maintenance to deep cleaning and move-in/out services.",
      image: "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      href: "/cleaning/residential",
      services: ["General Cleaning", "Deep Cleaning", "Move-In/Out", "Airbnb Cleaning"]
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional cleaning solutions for offices, retail spaces, medical facilities, and other commercial properties.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      href: "/cleaning/commercial",
      services: ["Office Cleaning", "Janitorial Services", "Retail Cleaning", "Medical Cleaning"]
    },
    {
      icon: Sparkles,
      title: "Specialized Services",
      description: "Specialized and niche cleaning services including carpet cleaning, pressure washing, and eco-friendly options.",
      image: "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      href: "/cleaning/specialized",
      services: ["Carpet Cleaning", "Window Cleaning", "Pressure Washing", "Green Cleaning"]
    }
  ];

  return (
    <section id="overview" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Professional cleaning solutions for every need, delivered with care and attention to detail.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="w-8 h-8 text-green-600" />
                    <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                        <span className="text-slate-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Link href={category.href}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}