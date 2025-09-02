import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { SpecializedHero } from '@/components/cleaning/specialized/SpecializedHero';
import { SpecializedServices } from '@/components/cleaning/specialized/SpecializedServices';
import { SpecializedApproach } from '@/components/cleaning/specialized/SpecializedApproach';
import { Contact } from '@/components/shared/Contact';

export default function SpecializedCleaningPage() {
  return (
    <Layout>
      <SpecializedHero />
      <SpecializedServices />
      <SpecializedApproach />
      <Contact />
    </Layout>
  );
}