import React from 'react';
import { Home, Building2, Users, Target, ClipboardList, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const serviceBlueprints = [
  {
    title: 'Residential Real Estate',
    tagline: 'Dream Home Blueprint',
    Icon: Home,
    description:
      'We guide clients from first consultation to long-term asset growth through an educational, data-backed approach that protects each decision.',
    columns: [
      {
        heading: 'Client Journey',
        items: [
          'Initial assessment covering goals, financial position, and timing.',
          'Market education briefs so buyers understand pricing, competition, and trends.',
          'Personalized property shortlist with valuation notes and walk-through agendas.',
        ],
      },
      {
        heading: 'Tools & Intelligence',
        items: [
          'Interactive home buying playbook outlining financing through closing.',
          'Search workspace with filters for neighborhood profile, budget, and lifestyle markers.',
          'On-demand valuation tools, lender-ready packets, and weekly featured listings.',
        ],
      },
      {
        heading: 'Care & Proof',
        items: [
          'Transaction support that handles negotiations, due diligence, and milestone tracking.',
          'Post-purchase concierge: move-in logistics, vendor introductions, and maintenance plans.',
          'Success stories documenting equity gains and stress-free relocations.',
        ],
      },
    ],
    timeline: [
      { phase: 'Initial Assessment', detail: 'Discovery and readiness checks covering credit, savings, and lifestyle goals.' },
      { phase: 'Market Education', detail: 'Neighborhood and pricing analysis with curated comps and forecast insights.' },
      { phase: 'Property Selection', detail: 'Private tours with valuation scorecards and offer strategies in hand.' },
      { phase: 'Transaction Support', detail: 'Offer submission, negotiation, inspection, and closing choreography.' },
      { phase: 'Post-Purchase', detail: 'Move management, warranty tracking, and onboarding to concierge services.' },
      { phase: 'Value Enhancement', detail: 'Equity reviews, rental assessments, and future acquisition planning.' },
    ],
  },
  {
    title: 'Commercial Property',
    tagline: 'Smarter CRE Decisions',
    Icon: Building2,
    description:
      'We structure commercial plays—from acquisition to operations—around clear underwriting, disciplined execution, and tenant-first management.',
    columns: [
      {
        heading: 'What We Cover',
        items: [
          'Office, retail, industrial, hospitality, and mixed-use strategies.',
          'Feasibility studies and highest-best-use analysis for new developments.',
          'Capital stack design with sensitivity modeling for equity partners.',
        ],
      },
      {
        heading: 'Investor Toolkit',
        items: [
          'Deal room of vetted opportunities with projected IRR and hold strategy.',
          'Market analysis packets, underwriting templates, and ROI calculators.',
          'Asset-specific risk dashboards to stress-test rent, vacancy, and expense assumptions.',
        ],
      },
      {
        heading: 'Operations & Value',
        items: [
          'Property management programs focused on NOI growth and tenant retention.',
          'Maintenance coordination, vendor oversight, and compliance tracking.',
          'Portfolio showcase demonstrating regional execution and adaptive reuse success.',
        ],
      },
    ],
  },
  {
    title: 'Concierge Services',
    tagline: 'Effortless Living Ops',
    Icon: Users,
    description:
      'Our concierge division blends property care, hospitality, and lifestyle management so owners, residents, and guests experience true ease.',
    columns: [
      {
        heading: 'Service Menu',
        items: [
          'Property management, maintenance coordination, and vendor dispatch.',
          'Lifestyle assistance covering travel, calendar, gifting, and event prep.',
          'Tenant relations desk that manages onboarding, communications, and resolution.',
        ],
      },
      {
        heading: 'Support Model',
        items: [
          '24/7 command center with proactive check-ins and escalation protocols.',
          'Digital request portal with SLA tracking and transparent updates.',
          'Custom maintenance programs tailored to asset class and occupancy rhythm.',
        ],
      },
      {
        heading: 'Packages & Outcomes',
        items: [
          'Tiered service bundles (Foundation, Signature, Executive) to match lifestyle needs.',
          'Guest experience playbooks for Airbnb/STR assets, including housekeeping and staging.',
          'KPI dashboards covering satisfaction scores, response times, and cost savings.',
        ],
      },
    ],
  },
];

const strategicPillars = [
  {
    title: 'Capital Acquisition & Funding',
    Icon: Target,
    description: 'We engineer capital stacks that balance cost, flexibility, and speed so projects never stall.',
    bullets: [
      'Strategic funding procurement tapping private lenders, institutional partners, and alternative capital.',
      'Source negotiation that optimizes rate, covenants, and draw schedules.',
    ],
  },
  {
    title: 'Real Estate & Distressed Asset Solutions',
    Icon: ClipboardList,
    description: 'Residential-focused intervention that stabilizes personal assets before they become distressed.',
    bullets: [
      'Foreclosure prevention playbooks to retain ownership whenever possible.',
      'Direct lender negotiations and mediation to pause or restructure action.',
      'Loan restructuring and refinancing strategies aligned with current cash flow.',
      'Strategic partnerships—Serenity Realty and others—for rapid on-ground execution.',
    ],
  },
  {
    title: 'Asset Management & Business Advisory',
    Icon: ShieldCheck,
    description: 'Long-term stewardship that protects wealth, informs decisions, and scales ventures.',
    bullets: [
      'Financial literacy education for households, investors, and leadership teams.',
      'Risk mitigation planning across legal, insurance, and operational exposures.',
      'Investment analysis ensuring every move supports growth targets.',
      'Strategic business consulting plus personal asset management oversight.',
    ],
  },
];

export default function ServicesLearnMore() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="services-learn-more"
      ref={ref}
      className="py-16 bg-[#040404] border-t border-gray-900"
    >
      <div
        className={`container mx-auto px-6 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="mb-12" />

        <div className="space-y-16">
          {serviceBlueprints.map(({ title, Icon, tagline, description, columns, timeline }) => (
            <article key={title} className="bg-[#0a0a0a] rounded-3xl border border-gray-800 p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <span className="bg-[#050505] border border-gray-800 rounded-2xl p-4 text-brand">
                    <Icon size={34} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.5em] text-gray-500">{tagline}</p>
                    <h3 className="text-2xl font-semibold">{title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 lg:max-w-2xl">{description}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {columns.map(({ heading, items }) => (
                  <div key={heading} className="border border-gray-800 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold mb-4">{heading}</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                      {items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="text-brand mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {timeline && (
                <div className="mt-10">
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-4">Program Timeline</p>
                  <div className="grid gap-6 md:grid-cols-3">
                    {timeline.map(({ phase, detail }) => (
                      <div key={phase} className="border border-gray-800 rounded-2xl p-5 bg-[#050505]">
                        <h5 className="text-sm font-semibold text-brand mb-1">{phase}</h5>
                        <p className="text-sm text-gray-300">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-center text-sm uppercase tracking-[0.5em] text-gray-500 mb-6">Strategic Pillars</p>
          <div className="grid gap-8 md:grid-cols-3">
            {strategicPillars.map(({ title, Icon, description, bullets }) => (
              <div key={title} className="bg-[#0a0a0a] rounded-3xl border border-gray-800 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#050505] border border-gray-800 rounded-2xl p-4 text-brand">
                    <Icon size={28} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Foundation</p>
                    <h3 className="text-xl font-semibold">{title}</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-4">{description}</p>
                <ul className="space-y-3 text-sm text-gray-300">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="text-brand mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
