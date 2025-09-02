import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
              <p className="text-slate-600">+44 123 456 7890</p>
              <p className="text-slate-500 text-sm">Available 24/7 for emergencies</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
              <p className="text-slate-600">hello@gammadenali.co.uk</p>
              <p className="text-slate-500 text-sm">We respond within 4 hours</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Location</h4>
              <p className="text-slate-600">Serving all of England</p>
              <p className="text-slate-500 text-sm">Based in Manchester, UK</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
              <p className="text-slate-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p className="text-slate-600">Sat: 9:00 AM - 4:00 PM</p>
              <p className="text-slate-500 text-sm">Emergency support available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Options */}
      <div className="bg-slate-50 rounded-xl p-6">
        <h4 className="font-semibold text-slate-900 mb-4">Prefer to Talk?</h4>
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href="tel:+44-123-456-7890">
              <Phone className="w-5 h-5 mr-3" />
              Call Now for Immediate Support
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href="mailto:hello@gammadenali.co.uk">
              <Mail className="w-5 h-5 mr-3" />
              Send a Quick Email
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}