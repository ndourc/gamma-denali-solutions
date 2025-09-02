"use client"

import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { HomePage } from '@/components/pages/HomePage';
import { StaffingPage } from '@/components/pages/StaffingPage';
import { CleaningServicesPage } from '@/components/pages/CleaningServicesPage';
import { ResidentialCleaningPage } from '@/components/pages/ResidentialCleaningPage';
import { CommercialCleaningPage } from '@/components/pages/CommercialCleaningPage';
import { SpecializedCleaningPage } from '@/components/pages/SpecialisedCleaningPage';
import { ContactPage } from '@/components/pages/ContactPage';

export type PageType = 
  | 'home' 
  | 'staffing' 
  | 'cleaning-services' 
  | 'residential-cleaning' 
  | 'commercial-cleaning' 
  | 'specialized-cleaning' 
  | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'staffing':
        return <StaffingPage onNavigate={setCurrentPage} />;
      case 'cleaning-services':
        return <CleaningServicesPage onNavigate={setCurrentPage} />;
      case 'residential-cleaning':
        return <ResidentialCleaningPage onNavigate={setCurrentPage} />;
      case 'commercial-cleaning':
        return <CommercialCleaningPage onNavigate={setCurrentPage} />;
      case 'specialized-cleaning':
        return <SpecializedCleaningPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

     return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className={`flex-1 lg:ml-64 transition-all duration-300 ${
        isMobileMenuOpen ? 'blur-sm brightness-75 lg:blur-none lg:brightness-100' : ''
      }`}>
        {renderPage()}
      </main>
    </div>
  );
}