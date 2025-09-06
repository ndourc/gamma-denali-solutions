"use client"

import React from 'react';
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { Contact } from "@/components/shared/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </Layout>
  );
}