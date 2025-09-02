"use client"

import React from 'react';
import { PageLayout } from '../layout/PageLayout';
import { FadeIn } from '../ui/fade-in';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../utils/ImageWithFallback';
import { 
  ArrowRight, 
  Building2, 
  Briefcase, 
  ShoppingBag, 
  Heart,
  CheckCircle,
  Phone,
  Shield,
  Users,
  Star,
  Target
} from 'lucide-react';
import type { PageType } from '@/app/page';

interface CommercialCleaningPageProps {
  onNavigate: (page: PageType) => void;
}

export function CommercialCleaningPage({ onNavigate }: CommercialCleaningPageProps) {
  const services = [
    {
      icon: Briefcase,
      title: 'Office Cleaning',
      description: 'Keep your workplace professional, productive, and welcoming for staff and clients.',
      features: ['Daily/weekly schedules', 'Desk & workstation cleaning', 'Kitchen & break room maintenance', 'Meeting room preparation'],
      industries: 'Corporate offices, co-working spaces, professional services'
    },
    {
      icon: Building2,
      title: 'Janitorial Services',
      description: 'Comprehensive facility maintenance to keep your building running smoothly.',
      features: ['Restroom sanitization', 'Floor care & maintenance', 'Waste management', 'Supply restocking'],
      industries: 'Office buildings, schools, government facilities'
    },
    {
      icon: ShoppingBag,
      title: 'Retail Cleaning',
      description: 'Create an inviting shopping environment that enhances your customer experience.',
      features: ['Front-of-house cleaning', 'Fitting room maintenance', 'Window & display cleaning', 'Floor care'],
      industries: 'Retail stores, shopping centers, boutiques'
    },
    {
      icon: Heart,
      title: 'Medical Facility Cleaning',
      description: 'Specialized cleaning protocols for healthcare environments requiring the highest standards.',
      features: ['Infection control protocols', 'Medical-grade disinfection', 'Biohazard waste handling', 'Compliance documentation'],
      industries: 'Clinics, dental offices, veterinary practices'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Professional Image',
      description: 'Make a lasting impression on clients and boost employee morale with a pristine workspace.'
    },
    {
      icon: Shield,
      title: 'Health & Safety',
      description: 'Reduce sick days and maintain compliance with health regulations through proper sanitization.'
    },
    {
      icon: Target,
      title: 'Cost Effective',
      description: 'Professional cleaning services cost less than hiring and managing in-house cleaning staff.'
    }
  ];

  const process = [
    { step: '01', title: 'Site Assessment', description: 'We evaluate your space and create a custom cleaning plan' },
    { step: '02', title: 'Custom Proposal', description: 'Receive a detailed proposal with transparent pricing' },
    { step: '03', title: 'Service Agreement', description: 'Flexible contracts that work with your business needs' },
    { step: '04', title: 'Quality Delivery', description: 'Consistent, professional cleaning with regular quality checks' }
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
                  Commercial Cleaning:
                  <span className="text-blue-600"> Professional Spaces, Pristine Results</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Maintain a professional, healthy workplace that impresses clients and supports 
                  your team`s productivity with our comprehensive commercial cleaning services.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                    <span className="text-lg text-gray-700">Flexible scheduling around your business</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                    <span className="text-lg text-gray-700">Fully insured & bonded team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                    <span className="text-lg text-gray-700">Quality management system</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => onNavigate('contact')}
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
                  >
                    Request Commercial Quote
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
                  src="https://images.unsplash.com/photo-1736066331155-c95740b0bd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTY3Njk3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern clean office workspace"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Premium Service</div>
                      <div className="text-sm text-gray-600">For professional spaces</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Your Business Needs Professional Cleaning
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A clean workplace is not just about appearance - it is about productivity, health, and professionalism.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 200}>
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-blue-50">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Commercial Cleaning Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized cleaning solutions for every type of business environment.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 150}>
                <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                          <p className="text-blue-700 font-medium">{service.industries}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-blue-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Perfect for:</h4>
                        <p className="text-sm text-gray-600 mb-4">{service.industries}</p>
                        <Button 
                          onClick={() => onNavigate('contact')}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Get Quote
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Simple Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial consultation to ongoing service, we make commercial cleaning straightforward.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <FadeIn key={item.step} delay={index * 150}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                  Gamma Denali Solutions transformed our office environment. Our clients constantly 
                  comment on how professional and welcoming our space feels. The team is reliable, 
                  thorough, and works seamlessly around our business hours.
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-gray-600">Operations Manager, TechFlow Ltd</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center text-white max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready for a Professional Clean Workspace?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Do not let cleaning distract from your business success. Get a custom quote 
                for professional cleaning services that work around your schedule and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => onNavigate('contact')}
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-50 px-8 py-4"
                >
                  Request Commercial Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call: +44 123 456 7890
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}