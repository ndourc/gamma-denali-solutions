"use client"

import React from 'react';
import { Sidebar } from './Sidebar';
import { Footer } from '@/components/shared/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="ml-64">
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}