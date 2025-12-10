import Navigation from '../components/Navigation';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { MapPin, TrendingUp, Hammer, DollarSign, Home } from 'lucide-react';

const investmentStats = [
  { label: 'Location', value: '850 E Ocean Blvd · Long Beach, CA 90802' },
  { label: 'Asking Price', value: '$1.2M' },
  { label: 'Market Average', value: '$570K condo baseline' },
  { label: 'Sale-to-List', value: '99% demand signal' },
];

const transformationFocus = [
  {
    title: 'High-Impact Kitchen & Bath',
    detail: 'Premium appliances, quartz counters, designer fixtures, and spa-level lighting upgrades.',
  },
  {
    title: 'Luxury Flooring & Finishes',
    detail: 'Wide-plank hardwood, contemporary lighting, matte black hardware, and smart home integration.',
  },
  {
    title: 'Coastal-Inspired Aesthetics',
    detail: 'Neutral palette, open sightlines, and staging that frames sweeping ocean views for turnkey appeal.',
  },
];

const financialHighlights = [
  { label: 'Total Investment', value: '$1.3M', detail: '$1.2M acquisition + $100K renovations.' },
  { label: 'Post-Reno Valuation', value: '$1.6M', detail: 'Supported by coastal luxury comps and appraisal data.' },
  { label: 'Projected ROI', value: '~25%', detail: 'Cash-out refinance unlocks ~$320K equity immediately.' },
];

const steps = [
  'Confirm acquisition readiness and lock terms in a balanced Long Beach condo market.',
  'Deploy renovation scope with Sage design management for schedule certainty.',
  'List or lease at the new valuation, then execute cash-out refinance to capture $320K.',
  'Maintain premium positioning through Sage concierge operations to protect cash flow.',
];

export default function ResidentialDomesticPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060608] to-[#1a1c24] text-white">
      <Navigation />
      <header className="pt-32 pb-16 bg-gradient-to-b from-[#050505] to-[#0f0f14] text-center px-6">
        <p className="text-sm uppercase tracking-[0.6em] text-gray-500 mb-4">Residential Real Estate · Domestic</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Coastal Investment</h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          850 E Ocean Blvd, Long Beach—an oceanfront condominium positioned for luxury value-add, rapid appreciation, and refinance-driven
          cash flow.
        </p>
      </header>

      <main className="container mx-auto px-6 py-16 space-y-16">
        <section className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-gray-400 text-sm uppercase tracking-[0.4em]">
              <MapPin size={18} className="text-brand" />
              <span>Investment Snapshot</span>
            </div>
            <h2 className="text-3xl font-semibold">Prime Long Beach Address</h2>
            <p className="text-gray-400">
              Located in the prestigious 90802 district, the residence sits within a stable condo market where inventory remains balanced and
              premium units trade near list price. Sage acquired the asset at $1.2M, targeting a focused $100K transformation to unlock a
              projected 33% appreciation.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {investmentStats.map(({ label, value }) => (
                <div key={label} className="border border-gray-800 rounded-2xl p-4 bg-[#080b14]">
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500">{label}</p>
                  <p className="text-lg font-semibold mt-2">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img src="/pre1.png" alt="Ocean view living" className="rounded-3xl border border-gray-800 shadow-xl h-56 w-full object-cover" />
            <img src="/pre2.png" alt="Residential interior" className="rounded-3xl border border-gray-800 shadow-xl h-56 w-full object-cover" />
            <img src="/pre3.png" alt="Kitchen inspiration" className="rounded-3xl border border-gray-800 shadow-xl h-56 w-full object-cover sm:col-span-2" />
          </div>
        </section>

        <section className="bg-[#0b0f1d] border border-gray-800 rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Strategic Value-Add Plan</p>
          <h2 className="text-3xl font-semibold mb-6">$100K Transformation for Maximum Lift</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {transformationFocus.map(({ title, detail }) => (
              <article key={title} className="border border-gray-800 rounded-2xl p-5 bg-[#090c16]">
                <p className="text-brand text-xs uppercase tracking-[0.4em] mb-2">Scope</p>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-300 text-sm mt-2">{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="bg-[#080b14] border border-gray-800 rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Financial Upside</p>
            <h2 className="text-3xl font-semibold mb-4">Equity Expansion + Cash Flow</h2>
            <div className="space-y-4">
              {financialHighlights.map(({ label, value, detail }) => (
                <article key={label} className="border border-gray-800 rounded-2xl p-4">
                  <p className="text-brand text-xs uppercase tracking-[0.4em]">{label}</p>
                  <p className="text-2xl font-bold mt-2">{value}</p>
                  <p className="text-gray-300 text-sm mt-2">{detail}</p>
                </article>
              ))}
            </div>
          </div>
          <img src="/pre4.png" alt="Coastal balcony" className="rounded-3xl border border-gray-800 shadow-xl w-full h-80 object-cover" />
        </section>

        <section className="bg-[#0b0f1d] border border-gray-800 rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Opportunity Timeline</p>
          <h2 className="text-3xl font-semibold mb-6">Clear Path to Profit</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { icon: Home, title: 'Market Timing', copy: 'Long Beach supply-demand dynamics remain balanced, supporting steady appreciation.' },
              { icon: Hammer, title: 'Renovation Execution', copy: 'Sage design management oversees trade partners for schedule and finish control.' },
              { icon: DollarSign, title: 'Cash-Out Refi', copy: 'Post-renovation appraisal at $1.6M enables ~$320K equity extraction.' },
              { icon: TrendingUp, title: 'Premium Location', copy: 'Coastal assets outperform metro averages and defend long-term returns.' },
            ].map(({ icon: Icon, title, copy }) => (
              <article key={title} className="border border-gray-800 rounded-2xl p-5 flex gap-4 items-start">
                <Icon className="text-brand" size={24} />
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#080b14] border border-gray-800 rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Next Steps</p>
          <h2 className="text-3xl font-semibold mb-6">Secure the Boulevard Address</h2>
          <ul className="space-y-4 text-sm text-gray-300">
            {steps.map((step) => (
              <li key={step} className="flex gap-3">
                <span className="text-brand">•</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}
