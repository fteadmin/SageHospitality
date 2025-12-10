import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
// import CoreCompetencies from './CoreCompetencies';
// import SageAdvantage from './SageAdvantage';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="about" className="py-12 bg-[#0a0a0a]" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-3xl font-bold mb-12 text-center">
          About <span className="text-yellow-500">Us</span>
        </h2>

        {/* Company Overview */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Company Overview</h3>
              <p className="text-gray-300 mb-4">
                Sage Hospitality and Concierge goes beyond traditional lifestyle management. Operating under the robust infrastructure of Future Trends Enterprise, we provide high-level strategic intervention for individuals and businesses facing complex transitional phases.
              </p>
              <p className="text-gray-300">
                Our firm bridges the gap between luxury concierge services and critical financial crisis management, offering a "whole-life" approach to asset preservation and growth.
              </p>
            </div>
            <div>
              <img
                src="/about.png"
                alt="Business Strategy"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Core Competencies */}
        {/* <CoreCompetencies /> */}

        {/* The Sage Advantage */}
        {/* <SageAdvantage /> */}
      </div>
    </section>
  );
}
