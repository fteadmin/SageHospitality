import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-[#050505] shadow-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/Screenshot 2025-06-04 at 4.08.42 AM.png" alt="Sage Hospitality" className="h-12 rounded-lg" />
            <h1 className="text-xl md:text-2xl font-semibold">Sage Hospitality</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-yellow-500">Home</a>
            <a href="#about" className="text-gray-300 hover:text-yellow-500">About</a>
            <a href="#services" className="text-gray-300 hover:text-yellow-500">Services</a>
            <a href="#contact" className="text-gray-300 hover:text-yellow-500">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <a href="#home" className="block py-2 text-gray-300 hover:text-yellow-500">Home</a>
            <a href="#about" className="block py-2 text-gray-300 hover:text-yellow-500">About</a>
            <a href="#services" className="block py-2 text-gray-300 hover:text-yellow-500">Services</a>
            <a href="#contact" className="block py-2 text-gray-300 hover:text-yellow-500">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}
