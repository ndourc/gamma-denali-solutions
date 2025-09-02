import React from 'react';
import { Shield, Clock, Award, Users, CheckCircle, TrendingUp, Link, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function StaffingBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Fully Vetted Candidates",
      description: "All candidates undergo thorough background checks and skills assessments."
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Emergency placements available within 24 hours for urgent requirements."
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "If you're not satisfied, we'll find a replacement at no additional cost."
    },
    {
      icon: TrendingUp,
      title: "Proven Success Rate",
      description: "98% client satisfaction rate with long-term placement success."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Businesses Choose Us
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We deliver more than just staffing - we provide strategic workforce solutions 
              that drive business growth.
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
              Ready to Build Your Dream Team?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let us discuss your staffing needs and find the perfect candidates for your business. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white hover:text-blue-700">
                <a href="tel:+44-123-456-7890">
                  Call Now: +44 123 456 7890
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}