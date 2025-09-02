import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

export function CleaningCategories() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Complete Cleaning Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Whatever your cleaning needs, we have the expertise and compassion to deliver exceptional results.
            </p>
          </div>

          {/* Shared Values */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border mb-12">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">What All Our Services Include</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">Fully Insured & Bonded</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">Eco-Friendly Options</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">Satisfaction Guarantee</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-green-600 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready for a Cleaner Space?
              </h3>
              <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and personalized quote. 
                We re here to make your life easier and your space more comfortable.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}