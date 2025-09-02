import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { CommercialHero } from '@/components/cleaning/commercial/CommercialHero';
import { CommercialServices } from '@/components/cleaning/commercial/CommercialServices';
import { CommercialBenefits } from '@/components/cleaning/commercial/CommercialBenefits';
import { Contact } from '@/components/shared/Contact';

export default function CommercialCleaningPage() {
  return (
    <Layout>
      <CommercialHero />
      <CommercialServices />
      <CommercialBenefits />
      <Contact />
    </Layout>
  );
}
//comment