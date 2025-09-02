import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { StaffingHero } from '@/components/staffing/StaffingHero';
import { StaffingServices } from '@/components/staffing/StaffingServices';
import { StaffingProcess } from '@/components/staffing/StaffingProcess';
import { StaffingBenefits } from '@/components/staffing/StaffingBenefits';
import { Contact } from '@/components/shared/Contact';

export default function StaffingPage() {
  return (
    <Layout>
      <StaffingHero />
      <StaffingServices />
      <StaffingProcess />
      <StaffingBenefits />
      <Contact />
    </Layout>
  );
}