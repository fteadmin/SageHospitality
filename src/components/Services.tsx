import React from 'react';
import { Building2, Home, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const serviceCards = [
  {
    title: 'Residential Real Estate',
    Icon: Home,
    summary:
      'A guided path to homeownership with financing intel, curated searches, and post-close value support.',
    highlights: [
      'Home Buying Process guide covering financing, inspections, offers, and closing.',
      'Property search workspace with filters for location, budget, and lifestyle must-haves.',
      'First-time buyer resources on mortgages, down payments, and market timing.',
      'On-demand valuation tools plus featured listings refreshed weekly.',
      'Success stories that showcase equity growth and stress-free transitions.',
    ],
  },
  {
    title: 'Commercial Property',
    Icon: Building2,
    summary:
      'Your gateway to smart CRE investments spanning office, retail, industrial, and mixed-use assets.',
    highlights: [
      'Clear primers on each commercial asset class to align strategy and risk appetite.',
      'Deal room of live investment opportunities with projected returns.',
      'Market analysis packets and ROI calculators for confident underwriting.',
      'Property management services that lift tenant satisfaction and asset value.',
      'Portfolio showcase proving resilient execution across regions.',
    ],
  },
  {
    title: 'Concierge Services',
    Icon: Users,
    summary:
      'Effortless living programs blending property care, lifestyle support, and hospitality for tenants and owners.',
    highlights: [
      'Menu of available services from maintenance coordination to personal assistance.',
      'Always-on support desk with proactive updates and emergency coverage.',
      'Custom property maintenance programs with vetted partners.',
      'Tenant relations specialists managing communication, onboarding, and issues.',
      'Lifestyle support packages curated for travel, events, and guest prep.',
    ],
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="services" className="py-12 bg-gradient-to-b from-[#060608] to-[#1a1c24]" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-3xl font-bold mb-4 text-center">
          Our <span className="text-brand">Services</span>
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
          We simplify every move—so whether you are buying your first home, growing a commercial portfolio, or outsourcing lifestyle
          logistics, Sage delivers a clear playbook.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map(({ title, Icon, summary, highlights }) => (
            <div key={title} className="bg-[#0a0a0a] rounded-2xl border border-gray-800 p-6 flex flex-col">
              <div className="flex items-center gap-4">
                <span className="bg-[#050505] border border-gray-800 rounded-full p-3 text-brand">
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
                    <span className="text-brand mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="inline-flex items-center gap-3 bg-brand text-black px-8 py-3 rounded-full font-semibold hover:bg-brand-light transition"
            href="/services"
          >
            Learn more about our services
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
