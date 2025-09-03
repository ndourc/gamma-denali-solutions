"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Users, 
  Sparkles, 
  Mail,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/components/ui/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Staffing Solutions', href: '/staffing', icon: Users },
  {
    name: 'Cleaning Services',
    href: '/cleaning',
    icon: Sparkles,
    children: [
      { name: 'Residential Cleaning', href: '/cleaning/residential' },
      { name: 'Commercial Cleaning', href: '/cleaning/commercial' },
      { name: 'Specialized Services', href: '/cleaning/specialized' },
    ]
  },
  { name: 'Contact Us', href: '/contact', icon: Mail },
];

interface SidebarProps {
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
}

export function Sidebar({ isMobileMenuOpen = false, setIsMobileMenuOpen }: SidebarProps) {
  const pathname = usePathname();
  const [openItems, setOpenItems] = React.useState<string[]>(['Cleaning Services']);

  const toggleItem = (name: string) => {
    setOpenItems(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
  };

  // Auto-close mobile menu when screen size changes to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && setIsMobileMenuOpen) { 
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobileMenuOpen]);

  // Close mobile menu when navigating
  const handleLinkClick = () => {
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const SidebarContent = () => (
    <>
      <div className="p-6">
        <Link href="/" className="flex items-center gap-3" onClick={handleLinkClick}>
          <div className="flex gap-1">
            <Users className="w-6 h-6 text-blue-600" />
            <Sparkles className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">Gamma Denali</h1>
            <p className="text-xs text-slate-600">Solutions</p>
          </div>
        </Link>
      </div>

      <nav className="px-4 pb-6">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              {item.children ? (
                <Collapsible 
                  open={openItems.includes(item.name)}
                  onOpenChange={() => toggleItem(item.name)}
                >
                  <CollapsibleTrigger asChild>
                    <button
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname.startsWith(item.href)
                          ? "bg-slate-100 text-slate-900"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5" />
                        {item.name}
                      </div>
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        openItems.includes(item.name) && "rotate-180"
                      )} />
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <ul className="space-y-1 ml-8">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href}
                            onClick={handleLinkClick}
                            className={cn(
                              "block px-3 py-2 text-sm rounded-lg transition-colors",
                              pathname === child.href
                                ? "bg-green-50 text-green-700 font-medium"
                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            )}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === item.href
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-6 left-4 right-4">
        <div className="bg-slate-50 rounded-lg p-4 text-center">
          <p className="text-xs text-slate-600 mb-2">Ready to get started?</p>
          <Link 
            href="/contact"
            onClick={handleLinkClick}
            className="inline-flex items-center justify-center w-full px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white shadow-xl rounded-xl transition-all duration-200 hover:scale-105 p-3"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Sidebar - always visible on large screens */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 z-40">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <>
          <div className="lg:hidden fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 z-50">
            <SidebarContent />
          </div>
          <div 
            className="lg:hidden fixed top-0 left-64 right-0 bottom-0 z-40"
            onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
          />
        </>
      )}
    </>
  );
}