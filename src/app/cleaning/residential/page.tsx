import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { ResidentialHero } from '@/components/cleaning/residential/ResidentialHero';
import { ResidentialServices } from '@/components/cleaning/residential/ResidentialServices';
import { ResidentialProcess } from '@/components/cleaning/residential/ResidentialProcess';
import { Contact } from '@/components/shared/Contact';

export default function ResidentialCleaningPage() {
  return (
    <Layout>
      <ResidentialHero />
      <ResidentialServices />
      <ResidentialProcess />
      <Contact />
    </Layout>
  );
}