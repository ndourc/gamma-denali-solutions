"use client"

import React from 'react';
import { PageLayout } from '../layout/PageLayout';
import { FadeIn } from '../ui/fade-in';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../utils/ImageWithFallback';
import { 
  ArrowRight, 
  Droplets, 
  Wind, 
  HardHat,
  Leaf,
  Shield,
  Calendar,
  TreePine,
  CheckCircle,
  Phone,
  Target,
  Clock,
  Award
} from 'lucide-react';
import type { PageType } from '@/app/page';

interface SpecializedCleaningPageProps {
  onNavigate: (page: PageType) => void;
}

export function SpecializedCleaningPage({ onNavigate }: SpecializedCleaningPageProps) {
  const services = [
    {
      icon: Droplets,
      title: 'Carpet & Upholstery Cleaning',
      description: 'Deep cleaning and restoration for carpets, rugs, and furniture.',
      features: ['Steam cleaning', 'Stain removal', 'Odor elimination', 'Fabric protection'],
      applications: 'Homes, offices, restaurants, hotels'
    },
    {
      icon: Wind,
      title: 'Window Cleaning',
      description: 'Crystal-clear windows for maximum natural light and professional appearance.',
      features: ['Interior & exterior', 'High-rise access', 'Frame cleaning', 'Streak-free results'],
      applications: 'Commercial buildings, retail stores, residential properties'
    },
    {
      icon: Target,
      title: 'Pressure Washing',
      description: 'Restore surfaces to their original condition with professional pressure washing.',
      features: ['Building exteriors', 'Driveways & walkways', 'Decking & patios', 'Vehicle cleaning'],
      applications: 'Commercial properties, residential exteriors, industrial sites'
    },
    {
      icon: HardHat,
      title: 'Post-Construction Cleaning',
      description: 'Thorough cleanup after construction or renovation projects.',
      features: ['Debris removal', 'Dust elimination', 'Surface preparation', 'Final detailing'],
      applications: 'New builds, renovations, construction sites'
    },
    {
      icon: Leaf,
      title: 'Green Cleaning',
      description: 'Eco-friendly cleaning solutions that are safe for people and the environment.',
      features: ['Non-toxic products', 'Sustainable practices', 'HEPA filtration', 'Carbon-neutral options'],
      applications: 'Schools, healthcare, family homes, eco-conscious businesses'
    },
    {
      icon: Shield,
      title: 'Sanitization & Disinfection',
      description: 'Advanced sanitization services for health-critical environments.',
      features: ['Electrostatic spraying', 'UV-C disinfection', 'Antimicrobial treatment', 'Compliance documentation'],
      applications: 'Medical facilities, schools, restaurants, offices'
    },
    {
      icon: Calendar,
      title: 'Event Cleaning',
      description: 'Pre and post-event cleaning services for any size gathering.',
      features: ['Setup preparation', 'During-event maintenance', 'Post-event cleanup', 'Waste management'],
      applications: 'Weddings, corporate events, festivals, private parties'
    },
    {
      icon: TreePine,
      title: 'Outdoor Cleaning',
      description: 'Comprehensive outdoor space cleaning and maintenance.',
      features: ['Garden furniture', 'Outdoor kitchens', 'Play equipment', 'Pathway cleaning'],
      applications: 'Residential gardens, commercial outdoor spaces, recreational facilities'
    }
  ];

  const specialties = [
    {
      icon: Target,
      title: 'Specialized Equipment',
      description: 'State-of-the-art tools and technology for every unique cleaning challenge.'
    },
    {
      icon: Award,
      title: 'Expert Training',
      description: 'Certified professionals with specialized training for complex cleaning situations.'
    },
    {
      icon: Clock,
      title: 'Emergency Service',
      description: '24/7 availability for urgent cleaning needs and emergency situations.'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-purple-100 py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="max-w-xl">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Specialized Cleaning:
                  <span className="text-purple-600"> Solutions for Every Unique Need</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  From delicate upholstery to challenging post-construction cleanup, our specialized 
                  services handle the cleaning tasks that require expert knowledge and equipment.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                    <span className="text-lg text-gray-700">Specialized equipment & techniques</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                    <span className="text-lg text-gray-700">Certified professional technicians</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                    <span className="text-lg text-gray-700">Emergency service available</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => onNavigate('contact')}
                    size="lg" 
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4"
                  >
                    Inquire About Specialized Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Emergency: +44 123 456 7890
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558618047-51c0c0dd3c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGVxdWlwbWVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTY3Njk4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional cleaning equipment"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Emergency Available</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Specialized Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complex cleaning challenges require expertise, specialized equipment, and proven techniques.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <FadeIn key={specialty.title} delay={index * 200}>
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <specialty.icon className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{specialty.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-purple-50">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Specialized Cleaning Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert solutions for unique cleaning challenges that standard services cannot handle.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 100}>
                <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-medium">Perfect for:</span> {service.applications}
                    </p>
                    <Button 
                      onClick={() => onNavigate('contact')}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      size="sm"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 lg:p-12 text-center border border-red-100">
              <div className="max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-red-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Emergency Cleaning Services
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  When disaster strikes, we are here 24/7. From water damage to biohazard cleanup, 
                  our emergency response team is ready to help restore your property quickly and safely.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">24/7</div>
                    <div className="text-gray-600">Emergency Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">{"<2hrs"}</div>
                    <div className="text-gray-600">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">Certified</div>
                    <div className="text-gray-600">Hazmat Technicians</div>
                  </div>
                </div>
                <Button 
                  onClick={() => onNavigate('contact')}
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 mr-4"
                >
                  Emergency Contact
                  <Phone className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center text-white max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Have a Unique Cleaning Challenge?
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                No job is too complex for our specialized cleaning team. From delicate restoration 
                to industrial cleanup, we have the expertise and equipment to handle any situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => onNavigate('contact')}
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-gray-50 px-8 py-4"
                >
                  Inquire About Specialized Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4"
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