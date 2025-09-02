"use client"

import React from 'react';
import { FadeIn } from '../ui/fade-in';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-white ${className}`}>
      <FadeIn>
        {children}
      </FadeIn>
    </div>
  );
}