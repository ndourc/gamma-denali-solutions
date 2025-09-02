/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "HR Director, TechStart Ltd",
      content: "They found us the perfect software developer in just two weeks. Their understanding of our company culture was spot-on.",
      rating: 5,
      service: "staffing",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Emma C.",
      role: "Working Parent, Manchester",
      content: "As a single mum working two jobs, I was drowning in housework. Their team understood my situation completely and made my home feel welcoming again.",
      rating: 5,
      service: "cleaning",
      image: "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "James Thompson",
      role: "Operations Manager, RetailPlus",
      content: "When we needed temporary staff for our busy Christmas period, they delivered exceptional candidates who hit the ground running.",
      rating: 5,
      service: "staffing",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <section className="py-16 lg:py-20 bg-white">
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

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow ${
                testimonial.service === 'staffing' ? 'border-blue-100' : 'border-green-100'
              }`}>
                <Quote className={`w-8 h-8 mb-4 ${
                  testimonial.service === 'staffing' ? 'text-blue-200' : 'text-green-200'
                }`} />
                <p className="text-slate-700 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{testimonial.name}</h4>
                      <p className="text-slate-600 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}