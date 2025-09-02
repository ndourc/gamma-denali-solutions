import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { CleaningHero } from '@/components/cleaning/CleaningHero';
import { CleaningOverview } from '@/components/cleaning/CleaningOverview';
import { CleaningCategories } from '@/components/cleaning/CleaningCategories';
import { Contact } from '@/components/shared/Contact';

export default function CleaningPage() {
  return (
    <Layout>
      <CleaningHero />
      <CleaningOverview />
      <CleaningCategories />
      <Contact />
    </Layout>
  );
}