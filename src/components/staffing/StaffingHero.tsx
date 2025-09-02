/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, UserCheck } from 'lucide-react';

export function StaffingHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-slate-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-10 h-10 text-blue-600" />
                <span className="text-blue-600 font-semibold">Staffing Solutions</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Find the Perfect
                <span className="text-blue-600"> Talent</span> for Your Business
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From temporary cover to permanent placements, we connect UK businesses with 
                exceptional talent. Our comprehensive HR solutions help you build the team 
                that drives your success.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700 font-medium">Temporary Staffing</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700 font-medium">Permanent Recruitment</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/contact">
                    Start Hiring Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#services">
                    View Our Services
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Professional business team collaboration"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg border">
                <div className="text-2xl font-bold text-blue-600">150+</div>
                <div className="text-slate-600 text-sm">Successful Placements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}