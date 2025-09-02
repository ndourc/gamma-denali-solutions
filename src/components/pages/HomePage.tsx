"use client"

import React from 'react';
import { PageLayout } from '../layout/PageLayout';
import { FadeIn } from '../ui/fade-in';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../utils/ImageWithFallback';
import { 
  ArrowRight, 
  Users, 
  Sparkles, 
  Star,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';
import type { PageType } from '@/app/page';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32 overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-r from-blue-100/10 to-green-100/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse delay-150"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Industry Leaders Since 2020</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Staffing Solutions</span>
                  {' & '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">Specialized Cleaning</span>
                  <br />
                  <span className="text-gray-900">Excellence Delivered</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  From healthcare to hospitality, we connect businesses with exceptional talent while providing 
                  compassionate, professional cleaning services across the UK.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Placements</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-green-600">1000+</div>
                    <div className="text-sm text-gray-600">Cleans Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">98%</div>
                    <div className="text-sm text-gray-600">Client Retention</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    onClick={() => onNavigate('contact')}
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                  >
                    Get a Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 hover:border-gray-400 transition-all duration-200"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call: +44 123 456 7890
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Fully Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>24/7 Emergency Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>CRB Checked Staff</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="relative">
                {/* Main Image Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1649836607840-3c74b50db7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcmVjcnVpdG1lbnQlMjBzdGFmZmluZyUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzU2NzcwNjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Professional staffing solutions"
                    className="w-full h-48 lg:h-56 object-cover rounded-xl shadow-lg"
                  />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1608012075343-25226e3099f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMHNlcnZpY2UlMjB0ZWFtJTIwdW5pZm9ybXxlbnwxfHx8fDE3NTY3NzA2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Professional cleaning services"
                    className="w-full h-48 lg:h-56 object-cover rounded-xl shadow-lg"
                  />
                </div>

                {/* Service Highlights Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-600 p-4 rounded-xl text-white shadow-lg">
                    <Users className="w-6 h-6 mb-2" />
                    <h3 className="font-semibold mb-1">Expert Staffing</h3>
                    <p className="text-xs text-blue-100">Healthcare • Care • Hospitality</p>
                  </div>
                  <div className="bg-green-600 p-4 rounded-xl text-white shadow-lg">
                    <Sparkles className="w-6 h-6 mb-2" />
                    <h3 className="font-semibold mb-1">Deep Cleaning</h3>
                    <p className="text-xs text-green-100">Residential • Commercial • Specialized</p>
                  </div>
                </div>

                {/* Floating Achievement Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl border-2 border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">5.0★ Rating</div>
                      <div className="text-xs text-gray-600">From 500+ verified clients</div>
                    </div>
                  </div>
                </div>

                {/* Floating Trust Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-full shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Two Specialized Services, One Trusted Partner
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Whether you need top talent for your business or compassionate cleaning services, 
                we deliver excellence with a personal touch.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Staffing Solutions Card */}
            <FadeIn direction="left" delay={200}>
              <Card className="p-8 lg:p-10 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Staffing Solutions</h3>
                    <p className="text-blue-700 font-medium">Empowering Your Workforce</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Find top talent quickly with our comprehensive recruitment services. From temporary 
                  staffing to permanent placements and HR consultancy, we connect you with the right people.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Temporary & Permanent Placements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Expert HR Consultancy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Fast, Reliable Service</span>
                  </div>
                </div>

                <Button 
                  onClick={() => onNavigate('staffing')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                >
                  Explore Staffing Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Card>
            </FadeIn>

            {/* Cleaning Services Card */}
            <FadeIn direction="right" delay={400}>
              <Card className="p-8 lg:p-10 border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Cleaning Services</h3>
                    <p className="text-green-700 font-medium">Exceptional Clean, Unmatched Care</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Professional cleaning services tailored to your needs. From residential homes to 
                  commercial spaces and specialized requirements, we deliver spotless results with care.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Residential & Commercial Cleaning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Specialized Services Available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Flexible, Compassionate Approach</span>
                  </div>
                </div>

                <Button 
                  onClick={() => onNavigate('cleaning-services')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  size="lg"
                >
                  Explore Cleaning Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Gamma Denali Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine industry expertise with personal care to deliver exceptional results.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={200}>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
                <p className="text-gray-600">
                  Experienced professionals who understand your industry and deliver tailored solutions.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
                <p className="text-gray-600">
                  Track record of success with 200+ satisfied clients and 5.0-star average rating.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock availability for urgent needs and ongoing support for peace of mind.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center text-white">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready to Experience Excellence?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Whether you need staffing solutions or cleaning services, we are here to help. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => onNavigate('contact')}
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-50 px-8 py-4"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}