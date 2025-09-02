"use client"

import React, { useState } from 'react';
import { PageLayout } from '../layout/PageLayout';
import { FadeIn } from '../ui/fade-in';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card } from '../ui/card';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';
import type { PageType } from '@/app/page';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

export function ContactPage({ }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    urgency: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+44 123 456 7890',
      description: 'Available 24/7 for emergencies',
      action: 'tel:+44-123-456-7890',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@gammadenali.co.uk',
      description: 'We respond within 4 hours',
      action: 'mailto:hello@gammadenali.co.uk',
      color: 'green'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      value: 'Chat Available',
      description: 'Mon-Fri 8:00 AM - 6:00 PM',
      action: '#',
      color: 'purple'
    }
  ];

  const serviceAreas = [
    { region: 'London & South East', cities: ['London', 'Brighton', 'Canterbury', 'Oxford'] },
    { region: 'North West', cities: ['Manchester', 'Liverpool', 'Preston', 'Blackpool'] },
    { region: 'Yorkshire', cities: ['Leeds', 'Sheffield', 'York', 'Bradford'] },
    { region: 'Midlands', cities: ['Birmingham', 'Nottingham', 'Leicester', 'Coventry'] }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Let`s Talk.
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Ready to transform your business or home? Get in touch for a free consultation. 
                We are here to discuss your staffing needs or cleaning requirements - no obligation, 
                just honest advice from the experts.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <FadeIn key={method.title} delay={index * 200}>
                    <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className={`w-16 h-16 ${
                        method.color === 'blue' ? 'bg-blue-100' :
                        method.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
                      } rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className={`w-8 h-8 ${
                          method.color === 'blue' ? 'text-blue-600' :
                          method.color === 'green' ? 'text-green-600' : 'text-purple-600'
                        }`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                      <p className={`text-lg font-medium mb-2 ${
                        method.color === 'blue' ? 'text-blue-600' :
                        method.color === 'green' ? 'text-green-600' : 'text-purple-600'
                      }`}>{method.value}</p>
                      <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        asChild
                      >
                        <a href={method.action}>Contact Now</a>
                      </Button>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn direction="left">
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we will get back to you within 4 hours during business hours, 
                  or first thing the next morning.
                </p>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      We have received your message and will respond within 4 hours during business hours.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+44 123 456 7890"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block font-medium text-gray-700 mb-2">
                          Company/Organization
                        </label>
                        <Input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Company name (optional)"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-gray-700 mb-2">
                        Service Interest *
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="staffing-temp">Temporary Staffing</SelectItem>
                          <SelectItem value="staffing-perm">Permanent Recruitment</SelectItem>
                          <SelectItem value="staffing-hr">HR Consultancy</SelectItem>
                          <SelectItem value="cleaning-residential">Residential Cleaning</SelectItem>
                          <SelectItem value="cleaning-commercial">Commercial Cleaning</SelectItem>
                          <SelectItem value="cleaning-specialized">Specialized Cleaning Services</SelectItem>
                          <SelectItem value="both">Both Staffing & Cleaning</SelectItem>
                          <SelectItem value="other">Other / General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="When do you need this service?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency (Within 24 hours)</SelectItem>
                          <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
                          <SelectItem value="soon">Soon (Within 2-4 weeks)</SelectItem>
                          <SelectItem value="planning">Planning Ahead (1+ months)</SelectItem>
                          <SelectItem value="information">Just gathering information</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your specific needs, requirements, or any questions you have..."
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Contact Information */}
            <FadeIn direction="right" delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600 mb-1">+44 123 456 7890</p>
                        <p className="text-gray-500">Available 24/7 for emergencies</p>
                        <p className="text-gray-500">Business hours: Mon-Fri 8:00 AM - 6:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600 mb-1">hello@gammadenali.co.uk</p>
                        <p className="text-gray-500">Response within 4 hours during business hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Service Area</h3>
                        <p className="text-gray-600">Serving all of England</p>
                        <p className="text-gray-500">Headquarters: Manchester, UK</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Emergency calls only</p>
                        </div>
                        <p className="text-gray-500 mt-2">24/7 emergency support available</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full bg-white text-blue-700 hover:bg-gray-50 border-white"
                      asChild
                    >
                      <a href="tel:+44-123-456-7890">
                        <Phone className="w-5 h-5 mr-3" />
                        Call Now: +44 123 456 7890
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full bg-transparent border-white text-white hover:bg-white hover:text-blue-700"
                      asChild
                    >
                      <a href="mailto:hello@gammadenali.co.uk">
                        <Mail className="w-5 h-5 mr-3" />
                        Email: hello@gammadenali.co.uk
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Service Areas Across England
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We proudly serve businesses and homeowners throughout England with our 
                professional staffing and cleaning services.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <FadeIn key={area.region} delay={index * 150}>
                <Card className="p-6 text-center">
                  <h3 className="font-bold text-gray-900 mb-4">{area.region}</h3>
                  <div className="space-y-2">
                    {area.cities.map((city) => (
                      <div key={city} className="text-gray-600">{city}</div>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}