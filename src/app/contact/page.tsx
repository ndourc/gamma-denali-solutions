import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';

export default function ContactPage() {
  return (
    <Layout>
      <ContactHero />
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </Layout>
  );
}