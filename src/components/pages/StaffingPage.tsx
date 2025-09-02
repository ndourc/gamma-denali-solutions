"use client"

import React from 'react';
import { PageLayout } from '../layout/PageLayout';
import { FadeIn } from '../ui/fade-in';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../utils/ImageWithFallback';
import { 
  ArrowRight, 
  Briefcase, 
  UserCheck, 
  Clock,
  CheckCircle,
  Phone,
  Search,
  Target
} from 'lucide-react';
import type { PageType } from '@/app/page';

interface StaffingPageProps {
  onNavigate: (page: PageType) => void;
}

export function StaffingPage({ onNavigate }: StaffingPageProps) {
  const services = [
    {
      icon: Clock,
      title: 'Temporary Staffing',
      description: 'Quick placements for short-term projects, seasonal demands, and cover requirements.',
      benefits: ['Same-day placements available', 'Pre-screened candidates', 'Flexible terms']
    },
    {
      icon: UserCheck,
      title: 'Permanent Recruitment',
      description: 'Comprehensive recruitment to find long-term team members who fit your culture.',
      benefits: ['Executive search', 'Cultural fit assessment', '6-month guarantee']
    },
    {
      icon: Briefcase,
      title: 'HR Consultancy',
      description: 'Expert HR guidance, policy development, and compliance support.',
      benefits: ['Policy development', 'Compliance guidance', 'Performance management']
    }
  ];

  const stats = [
    { value: '150+', label: 'Successful Placements' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24hrs', label: 'Average Response Time' },
    { value: '5 Years', label: 'Industry Experience' }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="max-w-xl">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Empowering Your Workforce:
                  <span className="text-blue-600"> Staffing Solutions</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Find top talent faster. Streamline your hiring process. Boost productivity with 
                  our comprehensive staffing solutions designed for UK businesses.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                    <span className="text-lg text-gray-700">Same-day temporary placements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                    <span className="text-lg text-gray-700">Extensive candidate database</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                    <span className="text-lg text-gray-700">100% satisfaction guarantee</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => onNavigate('contact')}
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
                  >
                    Request Staffing Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call: +44 123 456 7890
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739285452618-0b7b3d04f953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU2NzI1OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional business meeting"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">150+</div>
                    <div className="text-sm text-gray-600">Successful Placements</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Find Top Talent. Streamline Hiring. Boost Productivity.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive staffing solutions are designed to meet your business needs, 
                from urgent temporary coverage to strategic permanent hires.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 200}>
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-blue-50">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Streamlined Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From consultation to placement, we make hiring simple and effective.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We understand your needs, culture, and requirements', icon: Phone },
              { step: '02', title: 'Candidate Search', description: 'Access our extensive network of pre-screened professionals', icon: Search },
              { step: '03', title: 'Selection', description: 'Interview and select from our top candidate recommendations', icon: Target },
              { step: '04', title: 'Placement', description: 'Seamless onboarding with ongoing support and guarantee', icon: CheckCircle }
            ].map((item, index) => (
              <FadeIn key={item.step} delay={index * 150}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Proven Track Record
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our numbers speak for themselves. We deliver results that matter.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 100}>
                <div className="text-center p-6">
                  <div className="text-4xl lg:text-6xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center text-white max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready to Find Your Perfect Team?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Do not let staffing challenges hold your business back. Get access to top talent 
                with our proven recruitment solutions. Free consultation available today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => onNavigate('contact')}
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-50 px-8 py-4"
                >
                  Request Staffing Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-blue-700 hover:bg-white hover:text-blue-900 px-8 py-4"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: +44 123 456 7890
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}