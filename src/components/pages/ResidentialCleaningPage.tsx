"use client"

import React from 'react';
import { PageLayout } from '../layout/PageLayout';
import { FadeIn } from '../ui/fade-in';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../utils/ImageWithFallback';
import { 
  ArrowRight, 
  Home, 
  Sparkles, 
  Calendar, 
  Truck,
  Sun,
  CheckCircle,
  Phone,
  Star,
  Clock,
  Shield
} from 'lucide-react';
import type { PageType } from '@/app/page';

interface ResidentialCleaningPageProps {
  onNavigate: (page: PageType) => void;
}

export function ResidentialCleaningPage({ onNavigate }: ResidentialCleaningPageProps) {
  const services = [
    {
      icon: Home,
      title: 'General/Standard Cleaning',
      description: 'Regular maintenance cleaning to keep your home consistently fresh and tidy.',
      features: ['Kitchen & bathroom sanitization', 'Dusting & vacuuming', 'Floor cleaning', 'Trash removal'],
      frequency: 'Weekly, bi-weekly, or monthly'
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Comprehensive, detailed cleaning that reaches every corner of your home.',
      features: ['Inside appliances & cabinets', 'Baseboards & window sills', 'Light fixtures', 'Detailed bathroom scrub'],
      frequency: 'One-time or quarterly'
    },
    {
      icon: Truck,
      title: 'Move-In/Move-Out Cleaning',
      description: 'Complete cleaning service for property transitions, ensuring a fresh start.',
      features: ['Empty property deep clean', 'Appliance cleaning', 'Cabinet interiors', 'Deposit-back guarantee'],
      frequency: 'One-time service'
    },
    {
      icon: Calendar,
      title: 'Airbnb Turnover',
      description: 'Quick, thorough cleaning between guests to maintain your property\'s reputation.',
      features: ['Same-day turnaround', 'Linen & towel service', 'Guest amenity restocking', 'Property inspection'],
      frequency: 'Per booking'
    },
    {
      icon: Sun,
      title: 'Seasonal Cleaning',
      description: 'Specialized cleaning for spring refreshes, holiday prep, and seasonal transitions.',
      features: ['Window cleaning', 'Garden furniture prep', 'Holiday decoration setup', 'Outdoor space cleaning'],
      frequency: 'Quarterly or as needed'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Time Freedom',
      description: 'Reclaim your weekends and spend time on what matters most to you.'
    },
    {
      icon: Shield,
      title: 'Health & Safety',
      description: 'Professional-grade products and techniques for a truly hygienic home.'
    },
    {
      icon: Star,
      title: 'Stress Relief',
      description: 'Come home to a spotless space without lifting a finger.'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="max-w-xl">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Residential Cleaning:
                  <span className="text-green-600"> A Spotless Home, Tailored for You</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform your home into a pristine sanctuary with our comprehensive residential 
                  cleaning services. From regular maintenance to deep cleans, we make your home shine.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg text-gray-700">Flexible scheduling around your life</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg text-gray-700">Eco-friendly cleaning products</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg text-gray-700">Same cleaner for consistency</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => onNavigate('contact')}
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4"
                  >
                    Book Residential Cleaning
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-green-300 text-green-700 hover:bg-green-50 px-8 py-4"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Get Quote: +44 123 456 7890
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1618311332215-2ead26bc35c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG9yZ2FuaXplZCUyMG1vZGVybiUyMGtpdGNoZW58ZW58MXx8fHwxNzU2NzY5NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Clean organized modern kitchen"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction Guaranteed</div>
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
                Why Choose Our Residential Cleaning?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                More than just cleaning - we give you back your time and peace of mind.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 200}>
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-green-600" />
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
      <section className="py-20 lg:py-28 bg-green-50">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Residential Cleaning Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From regular maintenance to special occasions, we have a cleaning service 
                that fits your lifestyle and needs.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 150}>
                <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                          <p className="text-green-700 font-medium">{service.frequency}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <Button 
                        onClick={() => onNavigate('contact')}
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        size="lg"
                      >
                        Book This Service
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Transparent, Affordable Pricing
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                No hidden fees, no surprises. Get an instant quote based on your home size and needs.
              </p>
              
              <div className="bg-green-50 rounded-2xl p-8 mb-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">From £35</div>
                    <div className="text-gray-600">1-2 Bedroom Homes</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">From £55</div>
                    <div className="text-gray-600">3-4 Bedroom Homes</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">Custom</div>
                    <div className="text-gray-600">Larger Properties</div>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => onNavigate('contact')}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center text-white max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready for a Sparkling Clean Home?
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Do not spend your precious free time cleaning. Let our professional team handle it 
                while you focus on what truly matters. Book your first cleaning today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => onNavigate('contact')}
                  size="lg"
                  className="bg-white text-green-700 hover:bg-gray-50 px-8 py-4"
                >
                  Book Residential Cleaning
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-4"
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