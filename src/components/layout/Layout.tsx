"use client"

import React from 'react';
import { Sidebar } from './Sidebar';
import { Footer } from '@/components/shared/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Auto-close mobile menu when screen size changes to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div className="lg:ml-64">
        <main className={`min-h-screen transition-all duration-300 ${
          isMobileMenuOpen ? 'blur-sm brightness-75 lg:blur-none lg:brightness-100' : ''
        }`}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}