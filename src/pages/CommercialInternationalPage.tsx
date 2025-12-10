import Navigation from '../components/Navigation';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Anchor, Compass, Layers, DollarSign, Sparkles } from 'lucide-react';

const programComponents = [
  {
    title: 'Executive Golf Experience',
    copy:
      '4.5–5 acres dedicated to a short championship-level course with pro-grade greens, practice range, and caddie services that anchor the destination.',
  },
  {
    title: 'Clubhouse & Culinary Hall',
    copy:
      '0.5 acre for culinary labs, cigar and wine lounges, pool, spa, fitness studio, and event terraces curated by Sage hospitality leads.',
  },
  {
    title: 'Waterfront Dock & Marina',
    copy:
      'Private boat slips with mangrove-friendly engineering, connecting residents and members to regional eco-adventures and VIP transfers.',
  },
  {
    title: 'Luxury Residences',
    copy:
      'Eight to ten custom villas (3,500–4,500 sq. ft., 4BR/4BA) on three acres, each with concierge service, solar-ready infrastructure, and coastal views.',
  },
  {
    title: 'Roads & Utilities',
    copy:
      '1–1.5 acres of resilient roads, hybrid power, water, telecom, and sustainability overlays including rainwater harvesting.',
  },
];

const projectPhases = [
  {
    title: 'Phase 1 · Concept Planning & Feasibility',
    timeframe: '1–3 Months',
    milestones: [
      'Commission topographical, environmental, and soil surveys to pinpoint buildable zones, drainage, and coastal access.',
      'Validate zoning, entitlements, and Liberian development policies while locking land-use approvals.',
      'Draft conceptual master plan allocating acreage across golf, clubhouse, marina, roads, and residential parcels.',
    ],
  },
  {
    title: 'Phase 2 · Design & Pre-Development',
    timeframe: '3–6 Months',
    milestones: [
      'Engage golf course, residential, and clubhouse architects to finalize compact-yet-premium layouts.',
      'Engineer water, septic, hybrid power, telecom, and sustainability systems for a coastal climate.',
      'Submit plans for governmental approval, environmental review, and community engagement.',
    ],
  },
  {
    title: 'Phase 3 · Capital Structure & Pre-Sales',
    timeframe: '4–6 Months (overlapping)',
    milestones: [
      'Model total development costs between $4M–$7M USD with 3–5 year ROI horizon and multiple revenue streams.',
      'Circulate investment memoranda, architectural renders, and pre-sale collateral to lenders and equity partners.',
      'Launch “Marshall Coast Estates” branding, digital presence, and private interest events for HNW buyers.',
    ],
  },
  {
    title: 'Phase 4 · Construction',
    timeframe: '12–18 Months',
    milestones: [
      'Sequence land clearing, grading, roads, and utilities before vertical construction begins.',
      'Shape golf fairways/greens, install irrigation, and construct clubhouse amenities with commercial-grade FF&E.',
      'Build residences in 2–3 waves, offer buyer customization, and install the floating/piling dock system.',
    ],
  },
  {
    title: 'Phase 5 · Launch & Operations',
    timeframe: '3–6 Months',
    milestones: [
      'Host soft launch for founders, open the course, clubhouse, and marina for experiential walkthroughs.',
      'Execute sales and marketing push targeting regional and international members with bundled club access.',
      'Staff GM, chef, golf pro, marina crew, and concierge team; release inaugural calendar of tournaments and culinary nights.',
    ],
  },
];

const capitalStack = [
  {
    title: 'Financial Modeling',
    detail: 'Detailed cost plan ($4M–$7M USD) with sensitivity analysis for finish levels, absorption pace, and membership tiers.',
  },
  {
    title: 'Investor & Lender Outreach',
    detail: 'Investment memorandum, 3D renders, and pre-sale toolkits support outreach to private lenders and equity families.',
  },
  {
    title: 'Brand Launch & Pre-Sales',
    detail: '“Marshall Coast Estates” brand story, logo, microsite, and teaser film paired with VIP showcases for high-net-worth buyers.',
  },
];

export default function CommercialInternationalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060608] to-[#1a1c24] text-white">
      <Navigation />
      <header className="pt-32 pb-16 bg-gradient-to-b from-[#050505] via-[#0e0f18] to-[#181c2b] text-center px-6">
        <p className="text-sm uppercase tracking-[0.6em] text-gray-500 mb-4">Commercial Property · International</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Marshall Coastal Project</h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Spotlight on the Marshall Coastal Project—a hospitality, golf, and residential enclave on Liberia’s shoreline guided by Sage and
          Marshall Costall.
        </p>
      </header>

      <main className="container mx-auto px-6 py-16 space-y-16">
        <section className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-4">Marshall Coastal Project</p>
            <h2 className="text-3xl font-semibold mb-4">A Coastal Sanctuary Built on 11 Acres</h2>
            <p className="text-gray-400 mb-6">
              The Marshall Coastal Project transforms 11 oceanfront acres outside Monrovia, Liberia into a members-only executive golf course,
              marina, and culinary club anchored by limited-edition residences.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-3"><span className="text-brand">•</span><span>Site assessment covers topography, drainage, and mangrove buffers for resilient layouts.</span></li>
              <li className="flex gap-3"><span className="text-brand">•</span><span>Master plan dedicates acreage to golf, clubhouse programming, roadway infrastructure, and 8–10 villas.</span></li>
              <li className="flex gap-3"><span className="text-brand">•</span><span>Golf, culinary, residential, and marina uses are harmonized to attract global members and regional tourism.</span></li>
            </ul>
          </div>
          <div className="bg-[#0b0f1d] border border-gray-800 rounded-3xl overflow-hidden shadow-lg">
            <img src="/marsh.png" alt="Marshall Coastal Project rendering" className="w-full h-72 object-cover" />
            <div className="p-6 text-sm text-gray-300">
              <p className="text-xs uppercase tracking-[0.4em] text-brand mb-2">Project Snapshot</p>
              <p>Marshall, Liberia · 11 acres · Golf, residential, marina, and culinary destination managed by Sage.</p>
            </div>
          </div>
        </section>

        <section>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-4">Program Components</p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programComponents.map(({ title, copy }) => (
              <article key={title} className="bg-[#0c0f1d] border border-gray-800 rounded-2xl p-5">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-4">Development Phases</p>
          <div className="space-y-6">
            {projectPhases.map(({ title, timeframe, milestones }) => (
              <article key={title} className="bg-[#0b0e19] border border-gray-800 rounded-3xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <span className="text-sm uppercase tracking-[0.4em] text-brand">{timeframe}</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  {milestones.map((milestone) => (
                    <li key={milestone} className="flex gap-3">
                      <span className="text-brand mt-1">•</span>
                      <span>{milestone}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="bg-[#0c0f1d] border border-gray-800 rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Capital & Pre-Sales</p>
            <h2 className="text-3xl font-semibold mb-4">Phase 3 Stack</h2>
            <div className="space-y-4">
              {capitalStack.map(({ title, detail }) => (
                <div key={title} className="border border-gray-800 rounded-2xl p-4">
                  <p className="text-brand text-xs uppercase tracking-[0.4em] mb-1">{title}</p>
                  <p className="text-sm text-gray-300">{detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#090c16] border border-gray-800 rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Stewardship</p>
            <h2 className="text-3xl font-semibold mb-4">Marshall Costall</h2>
            <p className="text-gray-400 mb-4">
              Marshall Costall, Sage Global Development Partner, leads the Liberia mandate. His cross-border structuring experience ensures
              treaty compliance, incentives, and capital controls align with sponsor expectations.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-3"><Sparkles className="text-brand" size={16} /><span>$4.2B+ transacted across hospitality, logistics, and mixed-use prior to Sage partnership.</span></li>
              <li className="flex gap-3"><Compass className="text-brand" size={16} /><span>Negotiates incentive packages with Liberian ministries while coordinating ESG commitments.</span></li>
              <li className="flex gap-3"><Anchor className="text-brand" size={16} /><span>Maintains island-nation vendor networks for rapid marina, coastal, and golf mobilization.</span></li>
            </ul>
          </div>
        </section>

        <section className="bg-[#0b0e19] border border-gray-800 rounded-3xl p-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { Icon: Layers, label: 'Construction Sequencing', text: 'Roads, utilities, and land grading completed before golf and residences break ground.' },
              { Icon: DollarSign, label: 'Revenue Mix', text: 'Home sales, memberships, culinary programs, and special events balance cash flow.' },
              { Icon: Anchor, label: 'Launch & Operations', text: 'Soft launch, VIP showcases, and a fully staffed hospitality team ensure seamless activation.' },
            ].map(({ Icon, label, text }) => (
              <div key={label} className="rounded-2xl border border-gray-800 p-6 bg-[#080b14]">
                <Icon className="text-brand mb-4" size={28} />
                <h3 className="text-xl font-semibold mb-2">{label}</h3>
                <p className="text-gray-400 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}
