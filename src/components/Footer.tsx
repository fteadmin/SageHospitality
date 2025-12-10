import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <footer
      className="py-8 bg-gradient-to-b from-[#04050a] via-[#090b12] to-[#0d0f18] text-white border-t border-gray-800"
      ref={ref}
    >
      <div className={`container mx-auto px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Sage Hospitality</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-brand">Home</a></li>
              <li><a href="#about" className="hover:text-brand">About</a></li>
              <li><a href="#contact" className="hover:text-brand">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-brand">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-brand">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 Sage Hospitality. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
