import React from 'react';
import { 
  Sparkles, 
  Eye, 
  Droplets, 
  Hammer, 
  Leaf, 
  Shield,
  Calendar,
  Sun
} from 'lucide-react';

export function SpecializedServices() {
  const services = [
    {
      icon: Sparkles,
      title: "Carpet & Upholstery Cleaning",
      description: "Professional cleaning of carpets, rugs, and furniture to remove dirt, stains, and allergens.",
      features: ["Steam cleaning", "Stain removal", "Odor elimination", "Fabric protection"]
    },
    {
      icon: Eye,
      title: "Window Cleaning",
      description: "Interior and exterior window cleaning for crystal-clear views.",
      features: ["Residential windows", "Commercial storefronts", "High-rise access", "Frame cleaning"]
    },
    {
      icon: Droplets,
      title: "Pressure Washing",
      description: "Exterior cleaning for driveways, patios, decking, and other surfaces.",
      features: ["Driveway cleaning", "Patio restoration", "Building exteriors", "Graffiti removal"]
    },
    {
      icon: Hammer,
      title: "Post-Construction Cleaning",
      description: "Thorough cleaning after building or renovation work to remove dust and debris.",
      features: ["Dust removal", "Paint splatter cleanup", "Debris clearing", "Final polish"]
    },
    {
      icon: Leaf,
      title: "Green Cleaning",
      description: "Using eco-friendly products and methods for a sustainable clean.",
      features: ["Non-toxic products", "Biodegradable solutions", "HEPA filtration", "Sustainable practices"]
    },
    {
      icon: Shield,
      title: "Sanitization & Disinfection",
      description: "Focusing on eliminating germs and viruses, especially in high-traffic areas.",
      features: ["Hospital-grade disinfectants", "Electrostatic spraying", "High-touch surfaces", "Air purification"]
    },
    {
      icon: Calendar,
      title: "Event Cleaning",
      description: "Cleaning services before or after events to ensure perfect presentation.",
      features: ["Pre-event setup", "During-event maintenance", "Post-event cleanup", "Venue restoration"]
    },
    {
      icon: Sun,
      title: "Outdoor Cleaning",
      description: "Including services like gutter cleaning, pool area cleaning, and outdoor maintenance.",
      features: ["Gutter cleaning", "Pool area maintenance", "Outdoor furniture", "Garden cleanup"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Specialized & Niche Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Expert solutions for unique cleaning challenges that require specialized equipment and expertise.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <service.icon className="w-5 h-5 text-purple-600" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-slate-700">
                      <div className="w-1 h-1 bg-purple-600 rounded-full" />
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