import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Award, Users, ArrowRight } from 'lucide-react';

export function CommercialBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Fully Insured & Bonded",
      description: "Complete protection for your business with comprehensive insurance coverage."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "After-hours, weekend, and holiday cleaning to fit your business schedule."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Regular quality checks and customer feedback to maintain high standards."
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Experienced, background-checked staff trained in commercial cleaning protocols."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Businesses Trust Us
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We understand the unique needs of commercial spaces and deliver consistent, 
              professional results that keep your business looking its best.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Elevate Your Workspace?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your commercial cleaning needs and create a customized 
              solution that keeps your business looking professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Get Commercial Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <a href="tel:+44-123-456-7890">
                  Call: +44 123 456 7890
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}