"use client"

import React from 'react';
import { PageLayout } from '../layout/PageLayout';
import { FadeIn } from '../ui/fade-in';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../utils/ImageWithFallback';
import { 
  ArrowRight, 
  Sparkles, 
  Home, 
  Building2, 
  Settings,
  CheckCircle,
  Phone,
  Heart,
  Shield,
  Clock
} from 'lucide-react';
import type { PageType } from '@/app/page';

interface CleaningServicesPageProps {
  onNavigate: (page: PageType) => void;
}

export function CleaningServicesPage({ onNavigate }: CleaningServicesPageProps) {
  const serviceCategories = [
    {
      id: 'residential-cleaning' as PageType,
      icon: Home,
      title: 'Residential Cleaning',
      subtitle: 'A Spotless Home, Tailored for You',
      description: 'Comprehensive home cleaning services designed around your lifestyle and needs.',
      features: ['General & Deep Cleaning', 'Move-In/Move-Out Service', 'Airbnb Turnovers', 'Seasonal Cleaning'],
      color: 'green',
      gradient: 'from-green-50 to-green-100'
    },
    {
      id: 'commercial-cleaning' as PageType,
      icon: Building2,
      title: 'Commercial Cleaning',
      subtitle: 'Professional Spaces, Pristine Results',
      description: 'Keep your business environment clean, professional, and welcoming for clients and staff.',
      features: ['Office Cleaning', 'Janitorial Services', 'Retail Spaces', 'Medical Facilities'],
      color: 'blue',
      gradient: 'from-blue-50 to-blue-100'
    },
    {
      id: 'specialized-cleaning' as PageType,
      icon: Settings,
      title: 'Specialized Services',
      subtitle: 'Solutions for Every Unique Need',
      description: 'Specialized cleaning services for unique requirements and challenging situations.',
      features: ['Carpet & Upholstery', 'Post-Construction', 'Pressure Washing', 'Sanitization'],
      color: 'purple',
      gradient: 'from-purple-50 to-purple-100'
    }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We approach every client with empathy, understanding, and respect for their unique circumstances.'
    },
    {
      icon: Shield,
      title: 'Professional Excellence',
      description: 'Fully trained, insured, and vetted professionals delivering consistent, high-quality results.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'We work around your schedule with flexible appointment times and emergency availability.'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="max-w-xl">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Exceptional Clean.
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                    {' '}Unmatched Care.
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Professional cleaning services with a compassionate touch. Whether it is your home, 
                  business, or specialized needs, we deliver spotless results tailored to you.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg text-gray-700">Fully licensed & insured professionals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg text-gray-700">Flexible scheduling & emergency service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg text-gray-700">100% satisfaction guarantee</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => onNavigate('contact')}
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4"
                  >
                    Get a Free Cleaning Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-green-300 text-green-700 hover:bg-green-50 px-8 py-4"
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
                  src="https://images.unsplash.com/photo-1649083048819-3fcd37423f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGhvbWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTY3Njk1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Clean modern home interior"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Premium Quality</div>
                      <div className="text-sm text-gray-600">Every time, guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Cleaning Philosophy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe every space deserves professional care, and every client deserves 
                compassionate service tailored to their unique needs.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <FadeIn key={value.title} delay={index * 200}>
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Choose Your Cleaning Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From residential homes to commercial spaces and specialized requirements, 
                we have the expertise to handle any cleaning challenge.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <FadeIn key={category.id} delay={index * 200}>
                <Card className={`p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${category.gradient} group h-full flex flex-col`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 ${
                      category.color === 'green' ? 'bg-green-600' :
                      category.color === 'blue' ? 'bg-blue-600' : 'bg-purple-600'
                    } rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className={`${
                        category.color === 'green' ? 'text-green-700' :
                        category.color === 'blue' ? 'text-blue-700' : 'text-purple-700'
                      } font-medium`}>{category.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed flex-1">{category.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {category.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className={`w-5 h-5 ${
                          category.color === 'green' ? 'text-green-600' :
                          category.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                        }`} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => onNavigate(category.id)}
                    className={`w-full ${
                      category.color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                      category.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'
                    } text-white`}
                    size="lg"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center text-white max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready for a Spotless Space?
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Experience the difference professional, compassionate cleaning makes. 
                Get your free quote today and see why our clients trust us with their most important spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => onNavigate('contact')}
                  size="lg"
                  className="bg-white text-green-700 hover:bg-gray-50 px-8 py-4"
                >
                  Get Free Cleaning Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-green-700 hover:bg-white hover:text-green-900 px-8 py-4"
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