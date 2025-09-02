"use client"

import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  Sparkles, 
  HomeIcon, 
  Building2, 
  Settings, 
  Mail, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { Button } from '../ui/button';
import type { PageType } from '@/app/page';

interface SidebarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const [isCleaningExpanded, setIsCleaningExpanded] = useState(
    ['cleaning-services', 'residential-cleaning', 'commercial-cleaning', 'specialized-cleaning'].includes(currentPage)
  );
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigationItems = [
    {
      id: 'home' as PageType,
      label: 'Home',
      icon: Home,
      description: 'Main overview'
    },
    {
      id: 'staffing' as PageType,
      label: 'Staffing Solutions',
      icon: Users,
      description: 'Professional recruitment'
    },
    {
      id: 'cleaning-services' as PageType,
      label: 'Cleaning Services',
      icon: Sparkles,
      description: 'Comprehensive cleaning',
      hasSubmenu: true,
      submenu: [
        {
          id: 'residential-cleaning' as PageType,
          label: 'Residential Cleaning',
          icon: HomeIcon,
          description: 'Home cleaning services'
        },
        {
          id: 'commercial-cleaning' as PageType,
          label: 'Commercial Cleaning',
          icon: Building2,
          description: 'Business cleaning solutions'
        },
        {
          id: 'specialized-cleaning' as PageType,
          label: 'Specialized Services',
          icon: Settings,
          description: 'Unique cleaning needs'
        }
      ]
    },
    {
      id: 'contact' as PageType,
      label: 'Contact Us',
      icon: Mail,
      description: 'Get in touch'
    }
  ];

  const handleNavigation = (pageId: PageType) => {
    onNavigate(pageId);
    setIsMobileOpen(false);
  };

  const handleCleaningToggle = () => {
    setIsCleaningExpanded(!isCleaningExpanded);
    if (!isCleaningExpanded) {
      onNavigate('cleaning-services');
    }
  };

  const sidebarContent = (
    <div className="h-full flex flex-col bg-white border-r border-gray-200 shadow-lg">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">GD</span>
          </div>
          <div>
            <h1 className="font-bold text-gray-900 text-lg">Gamma Denali</h1>
            <p className="text-sm text-gray-500">Solutions</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => (
          <div key={item.id}>
            {/* Main Navigation Item */}
            <button
              onClick={() => item.hasSubmenu ? handleCleaningToggle() : handleNavigation(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group ${
                currentPage === item.id
                  ? 'bg-blue-50 text-blue-700 shadow-sm'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className={`w-5 h-5 ${
                currentPage === item.id ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'
              }`} />
              <div className="flex-1">
                <div className="font-medium">{item.label}</div>
                <div className="text-xs text-gray-500">{item.description}</div>
              </div>
              {item.hasSubmenu && (
                <div className={`transition-transform duration-200 ${isCleaningExpanded ? 'rotate-90' : ''}`}>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              )}
            </button>

            {/* Submenu */}
            {item.hasSubmenu && isCleaningExpanded && (
              <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-100 pl-4">
                {item.submenu?.map((subItem) => (
                  <button
                    key={subItem.id}
                    onClick={() => handleNavigation(subItem.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                      currentPage === subItem.id
                        ? 'bg-green-50 text-green-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                    }`}
                  >
                    <subItem.icon className={`w-4 h-4 ${
                      currentPage === subItem.id ? 'text-green-600' : 'text-gray-400'
                    }`} />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{subItem.label}</div>
                      <div className="text-xs text-gray-500">{subItem.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* CTA Section */}
      <div className="p-4 border-t border-gray-100">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-4 text-white">
          <h3 className="font-semibold mb-1">Ready to get started?</h3>
          <p className="text-sm text-blue-100 mb-3">Get a free consultation today</p>
          <Button 
            onClick={() => handleNavigation('contact')}
            className="w-full bg-white text-blue-700 hover:bg-gray-50 text-sm"
          >
            Contact Us Now
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white shadow-xl border-0 rounded-xl transition-all duration-200 hover:scale-105"
        size="default"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 w-64 h-full z-40">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <>
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileOpen(false)}
          />
          <aside className="lg:hidden fixed left-0 top-0 w-64 h-full z-50">
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  );
}