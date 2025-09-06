/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

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
                 <div className="flex gap-1">
                <img 
                  src="/gamma_denali_solutions.svg" 
                  alt="Gamma Denali Solutions" 
                  className="h-12 w-auto"
                />
              </div>
                </div>
                <h3 className="text-xl font-bold">Gamma Denali Solutions</h3>
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
                  <Link href="/staffing" className="hover:text-white transition-colors">
                    Temporary Staffing
                  </Link>
                </li>
                <li>
                  <Link href="/staffing" className="hover:text-white transition-colors">
                    Permanent Recruitment
                  </Link>
                </li>
                <li>
                  <Link href="/staffing" className="hover:text-white transition-colors">
                    HR Consultancy
                  </Link>
                </li>
                <li>
                  <Link href="/staffing" className="hover:text-white transition-colors">
                    Executive Search
                  </Link>
                </li>
              </ul>
            </div>

            {/* Cleaning Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Cleaning Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <Link href="/cleaning/residential" className="hover:text-white transition-colors">
                    Residential Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/cleaning/commercial" className="hover:text-white transition-colors">
                    Commercial Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/cleaning/specialized" className="hover:text-white transition-colors">
                    Specialized Services
                  </Link>
                </li>
                <li>
                  <Link href="/cleaning" className="hover:text-white transition-colors">
                    View All Services
                  </Link>
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
                  <a href="mailto:hello@gammadenali.co.uk" className="hover:text-white transition-colors">
                    hello@gammadenali.co.uk
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-400 mt-0.5" />
                  <span>Manchester, UK<br />Serving all of England</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-sm">
                © 2025 Gamma Denali Solutions Ltd. All rights reserved. Registered in England and Wales.
              </div>
              <div className="flex gap-6 text-slate-400 text-sm">
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  GDPR Compliance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}