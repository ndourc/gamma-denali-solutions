"use client"

import React from 'react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const staffingTestimonials = [
    {
      name: "Sarah Mitchell",
      role: "HR Director, TechStart Ltd",
      content: "They found us the perfect software developer in just two weeks. Their understanding of our company culture was spot-on, and the candidate they placed has become one of our most valuable team members.",
      rating: 5
    },
    {
      name: "James Thompson",
      role: "Operations Manager, RetailPlus",
      content: "When we needed temporary staff for our busy Christmas period, they delivered exceptional candidates who hit the ground running. Professional, reliable, and exactly what we needed.",
      rating: 5
    }
  ];

  const cleaningTestimonials = [
    {
      name: "Emma C.",
      role: "Working Parent, Manchester",
      content: "As a single mum working two jobs, I was drowning in housework. Their team understood my situation completely and made my home feel welcoming again. They're not just cleaners - they're lifesavers.",
      rating: 5
    },
    {
      name: "Michael R.",
      role: "Mental Health Advocate, Birmingham",
      content: "During a difficult period with my depression, maintaining my flat felt impossible. The team was so understanding and gentle. They helped me regain control of my space and, in turn, my wellbeing.",
      rating: 5
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real experiences from businesses and individuals who have trusted us with their needs.
            </p>
          </div>

          {/* Staffing Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-600 text-center mb-8">Staffing Solutions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {staffingTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
                  <Quote className="w-8 h-8 text-blue-200 mb-4" />
                  <p className="text-slate-700 mb-6 leading-relaxed">{testimonial.content}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      <p className="text-slate-600 text-sm">{testimonial.role}</p>
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cleaning Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-green-600 text-center mb-8">Specialized Cleaning</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {cleaningTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-green-100">
                  <Quote className="w-8 h-8 text-green-200 mb-4" />
                  <p className="text-slate-700 mb-6 leading-relaxed">{testimonial.content}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      <p className="text-slate-600 text-sm">{testimonial.role}</p>
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16">
            <div className="bg-white rounded-xl p-8 text-center border">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Trusted Across the UK</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-slate-600 text-sm">Successful Placements</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">200+</div>
                  <div className="text-slate-600 text-sm">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">5+</div>
                  <div className="text-slate-600 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">98%</div>
                  <div className="text-slate-600 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}