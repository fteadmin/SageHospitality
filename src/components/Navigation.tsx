import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    {
      label: 'Residential Real Estate',
      children: [
        { label: 'Domestic Projects', href: '#residential-domestic' },
        { label: 'International Projects', href: '#residential-international' },
      ],
    },
    {
      label: 'Commercial Property',
      children: [
        { label: 'Domestic Projects', href: '#commercial-domestic' },
        { label: 'International Projects', href: '#commercial-international' },
      ],
    },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#050505] shadow-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/Screenshot 2025-06-04 at 4.08.42 AM.png" alt="Sage Hospitality & Lifestyle Concierge" className="h-12 rounded-lg" />
            <h1 className="text-xl md:text-2xl font-semibold leading-tight">
              Sage Hospitality
              <span className="block text-sm text-gray-400 uppercase tracking-[0.3em]">Lifestyle Concierge</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    type="button"
                    className="text-gray-300 hover:text-yellow-500 flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 mt-2 w-56 bg-[#050505] border border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-yellow-500"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={link.label} href={link.href} className="text-gray-300 hover:text-yellow-500">
                  {link.label}
                </a>
              )
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              link.children ? (
                <div key={link.label} className="border border-gray-800 rounded-lg">
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(link.label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-yellow-500"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileDropdowns[link.label] ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileDropdowns[link.label] && (
                    <div className="px-6 py-2 space-y-2 bg-[#040404] border-t border-gray-800">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block text-sm text-gray-300 hover:text-yellow-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-2 text-gray-300 hover:text-yellow-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
