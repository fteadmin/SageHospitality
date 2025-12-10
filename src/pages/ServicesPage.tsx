import Navigation from '../components/Navigation';
import ServicesLearnMore from '../components/ServicesLearnMore';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060608] to-[#1a1c24] text-white">
      <Navigation />
      <header className="pt-32 pb-16 bg-gradient-to-b from-[#08090f] via-[#0f111b] to-[#1a1c24] text-center px-6">
        <p className="text-sm uppercase tracking-[0.6em] text-gray-500 mb-4">Services</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sage Services Playbooks</h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Dive into the full stack of residential, commercial, and concierge solutions. Every program is structured, documented,
          and delivered with measurable outcomes so you always know the next move.
        </p>
      </header>
      <ServicesLearnMore />
      <Contact />
      <Footer />
    </div>
  );
}
