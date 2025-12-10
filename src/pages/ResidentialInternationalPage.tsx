import Navigation from '../components/Navigation';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { MapPin, Hammer, TrendingUp, RefreshCcw, ShieldCheck, DollarSign } from 'lucide-react';

const snapshotStats = [
  { label: 'Address', value: '1030 Box Canyon Rd, Simi Valley, CA 93063' },
  { label: 'Purchase Price', value: '$907,423' },
  { label: 'Improvement Budget', value: '$200,000' },
  { label: 'Target Reappraisal', value: '$1.6M' },
];

const improvementPlan = [
  {
    title: 'Kitchen Transformation',
    detail: 'Full remodel with chef-grade appliances, quartz islands, custom cabinetry, and statement lighting.',
  },
  {
    title: 'Spa-Caliber Baths',
    detail: 'Rain showers, freestanding soaking tubs, premium tilework, and matte fixtures elevate daily rituals.',
  },
  {
    title: 'Landscaping & Curb Appeal',
    detail: 'Drought-smart planting, modern hardscape, and exterior lighting to showcase canyon views.',
  },
];

const valueStrategy = [
  {
    label: 'Value Creation Goal',
    text: '76% appreciation from $907K basis to $1.6M post-renovation through targeted upgrades.',
  },
  {
    label: 'Washout Refinance',
    text: '$420K cash-out planned once appraisal lands, recycling capital while holding the asset.',
  },
  {
    label: 'Capital Stack',
    text: '$907K acquisition + $200K improvements = $1.107M total exposure before refinance.',
  },
];

const marketContext = [
  {
    title: 'Southern California Stability',
    copy: 'Limited new supply and lifestyle migration sustain pricing power across Ventura County suburbs.',
  },
  {
    title: 'Mortgage Outlook',
    copy: 'Forecast easing in rates through 2025 improves refinance feasibility and holding economics.',
  },
  {
    title: 'Demand Fundamentals',
    copy: 'Employment growth, school districts, and low crime keep Simi Valley on relocation shortlists.',
  },
];

const reasonsToInvest = [
  'High-impact $200K program focuses on kitchen, baths, flooring, and exterior polish that buyers prioritize.',
  'Simi Valley remains a low-volatility market with steady appreciation and strong demographic tailwinds.',
  'Cash-out refinance strategy returns ~$420K, reducing capital at risk while retaining ownership for future upside.',
  'Project aligns with statewide demand for renovated, move-in-ready homes that command premium pricing.',
];

export default function ResidentialInternationalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060608] to-[#1a1c24] text-white">
      <Navigation />
      <header className="pt-32 pb-16 bg-gradient-to-b from-[#050505] to-[#0f0f14] text-center px-6">
        <p className="text-sm uppercase tracking-[0.6em] text-gray-500 mb-4">Residential Real Estate · International</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Simi Valley Value-Add Estate</h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Strategic acquisition plus a $200K upgrade plan in a resilient Southern California market designed to unlock a $1.6M appraisal and
          $420K refinance proceeds.
        </p>
      </header>

      <main className="container mx-auto px-6 py-16 space-y-16">
        <section className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-gray-400 text-sm uppercase tracking-[0.4em]">
              <MapPin size={18} className="text-brand" />
              <span>Investment Snapshot</span>
            </div>
            <h2 className="text-3xl font-semibold">Box Canyon Outlook</h2>
            <p className="text-gray-400">
              Nestled against the Santa Susana mountains, the property benefits from sweeping canyon views, privacy, and proximity to Los
              Angeles employment hubs. The acquisition price captures upside in a submarket defined by low turnover and lifestyle appeal.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {snapshotStats.map(({ label, value }) => (
                <article key={label} className="border border-gray-800 rounded-2xl p-4 bg-[#080b14]">
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500">{label}</p>
                  <p className="text-lg font-semibold mt-2">{value}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img src="/res1.png" alt="Simi Valley residence exterior" className="rounded-3xl border border-gray-800 shadow-xl h-56 w-full object-cover" />
            <img src="/res2.png" alt="Interior design inspiration" className="rounded-3xl border border-gray-800 shadow-xl h-56 w-full object-cover" />
          </div>
        </section>

        <section className="bg-[#0b0f1d] border border-gray-800 rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Planned Improvements</p>
          <h2 className="text-3xl font-semibold mb-6">$200K Upgrade Roadmap</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {improvementPlan.map(({ title, detail }) => (
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
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Value Creation & Refinance</p>
            <h2 className="text-3xl font-semibold mb-4">From Renovation to Liquidity</h2>
            <div className="space-y-4">
              {valueStrategy.map(({ label, text }) => (
                <article key={label} className="border border-gray-800 rounded-2xl p-4">
                  <p className="text-brand text-xs uppercase tracking-[0.4em]">{label}</p>
                  <p className="text-gray-300 text-sm mt-2">{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {[{ icon: TrendingUp, title: 'Target Appraisal', copy: 'Post-upgrade value modeled at $1.6M based on recent canyon comps.' }, { icon: RefreshCcw, title: 'Washout Refinance', copy: 'Execute $420K cash-out, recycle equity, and hold for long-term appreciation.' }, { icon: DollarSign, title: 'Cash Flow Position', copy: 'Post-refi debt service supported by elevated rent or luxury lease-back strategies.' }].map(({ icon: Icon, title, copy }) => (
              <article key={title} className="border border-gray-800 rounded-2xl p-5 flex gap-4 items-start bg-[#090c16]">
                <Icon className="text-brand" size={22} />
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#0b0f1d] border border-gray-800 rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Market Context</p>
          <h2 className="text-3xl font-semibold mb-6">Southern California Fundamentals</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {marketContext.map(({ title, copy }) => (
              <article key={title} className="border border-gray-800 rounded-2xl p-5 bg-[#090c16]">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-300 text-sm">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#080b14] border border-gray-800 rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Why Invest</p>
          <h2 className="text-3xl font-semibold mb-6">Aligned With Market Trends</h2>
          <ul className="space-y-4 text-sm text-gray-300">
            {reasonsToInvest.map((reason) => (
              <li key={reason} className="flex gap-3">
                <ShieldCheck className="text-brand" size={18} />
                <span>{reason}</span>
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
