import React from 'react';
import { Heart, Users, Shield, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  <Users className="w-6 h-6 text-blue-400" />
                  <Heart className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">YourCompany</h3>
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Connecting people with opportunities and supporting lives through 
                professional staffing and compassionate cleaning services.
              </p>
              <div className="flex items-center gap-2 text-slate-400">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Fully Insured & Licensed</span>
              </div>
            </div>

            {/* Staffing Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Staffing Solutions</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Temporary Staffing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Permanent Recruitment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    HR Consultancy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Executive Search
                  </a>
                </li>
              </ul>
            </div>

            {/* Cleaning Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Specialized Cleaning</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mental Health Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Busy Lifestyle Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Independent Living
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    One-Off Deep Cleans
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-slate-400" />
                  <a href="tel:+44-123-456-7890" className="hover:text-white transition-colors">
                    +44 123 456 7890
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <a href="mailto:hello@yourcompany.co.uk" className="hover:text-white transition-colors">
                    hello@yourcompany.co.uk
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-400 mt-0.5" />
                  <span>Manchester, UK<br />Serving all of England</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="border-t border-slate-700 pt-8 mb-8">
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-300">
              <div>
                <h5 className="font-medium text-white mb-2">North West</h5>
                <ul className="space-y-1 text-sm">
                  <li>Manchester</li>
                  <li>Liverpool</li>
                  <li>Preston</li>
                  <li>Blackpool</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-white mb-2">Yorkshire</h5>
                <ul className="space-y-1 text-sm">
                  <li>Leeds</li>
                  <li>Sheffield</li>
                  <li>York</li>
                  <li>Bradford</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-white mb-2">Midlands</h5>
                <ul className="space-y-1 text-sm">
                  <li>Birmingham</li>
                  <li>Nottingham</li>
                  <li>Leicester</li>
                  <li>Coventry</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-white mb-2">South</h5>
                <ul className="space-y-1 text-sm">
                  <li>London</li>
                  <li>Bristol</li>
                  <li>Southampton</li>
                  <li>Brighton</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-sm">
                © 2025 YourCompany Ltd. All rights reserved. Registered in England and Wales.
              </div>
              <div className="flex gap-6 text-slate-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  GDPR Compliance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}