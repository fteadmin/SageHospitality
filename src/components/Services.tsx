import React from 'react';
import { Building2, Home, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const serviceCards = [
  {
    title: 'Residential Real Estate',
    Icon: Home,
    summary: 'Capital, advisory, and asset oversight for single-family, multi-family, and boutique developments.',
    highlights: [
      'Capital acquisition and bespoke funding strategy',
      'Distressed asset stabilization and lender negotiations',
      'Portfolio stewardship with business advisory support',
    ],
  },
  {
    title: 'Commercial Property',
    Icon: Building2,
    summary: '360° support for office, retail, and mixed-use assets—from capital stacks to operational resilience.',
    highlights: [
      'Structured equity sourcing and capital stack design',
      'Workout strategy with direct lender alignment',
      'Risk, investment, and asset management reporting',
    ],
  },
  {
    title: 'Concierge Services',
    Icon: Users,
    summary: 'White-glove services that extend beyond transactions into travel, lifestyle, and guest experiences.',
    highlights: [
      'Bespoke travel design and on-trip coordination',
      'Airbnb and short-term rental optimization',
      'Curated partner network for seamless requests',
    ],
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="services" className="py-12 bg-[#050505]" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-3xl font-bold mb-4 text-center">
          Our <span className="text-yellow-500">Services</span>
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
          Purpose-built advisory across residential, commercial, and concierge experiences—designed to keep your portfolio agile and
          protected without overwhelming detail.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map(({ title, Icon, summary, highlights }) => (
            <div key={title} className="bg-[#0a0a0a] rounded-2xl border border-gray-800 p-6 flex flex-col">
              <div className="flex items-center gap-4">
                <span className="bg-[#050505] border border-gray-800 rounded-full p-3 text-yellow-500">
                  <Icon size={28} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Division</p>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
              </div>

              <p className="text-gray-400 mt-4 text-sm leading-relaxed">{summary}</p>

              <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="text-yellow-500 mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-gray-800 text-[11px] uppercase tracking-[0.4em] text-gray-500">
                End-to-end coverage
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
