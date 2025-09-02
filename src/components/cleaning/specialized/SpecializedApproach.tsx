/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Leaf, Shield, Award, Clock, ArrowRight } from 'lucide-react';

export function SpecializedApproach() {
  const approaches = [
    {
      icon: Leaf,
      title: "Eco-Friendly Focus",
      description: "We prioritize environmentally safe products and sustainable cleaning methods."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "All specialized equipment is operated by trained professionals with safety certifications."
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "We stand behind our specialized services with a 100% satisfaction guarantee."
    },
    {
      icon: Clock,
      title: "Efficient Service",
      description: "Advanced equipment and techniques ensure thorough cleaning in minimal time."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Specialized Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              What sets our specialized services apart from the rest.
            </p>
          </div>

          {/* Approaches Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {approaches.map((approach, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <approach.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{approach.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>

          {/* Equipment Showcase */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg mb-12">
            <img 
              src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
              alt="Professional cleaning equipment"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent flex items-center">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Professional-Grade Equipment</h3>
                <p className="text-purple-100">State-of-the-art tools for superior results.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Need Specialized Cleaning?
            </h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Our expert team has the tools and expertise to handle any specialized 
              cleaning challenge. Contact us for a customized solution.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get Specialized Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}