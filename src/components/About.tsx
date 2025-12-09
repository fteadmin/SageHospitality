import React from 'react';
import { Shield, TrendingUp, Users, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Business Strategy"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Core Competencies</h3>
          <div className="space-y-8">
            {/* Real Estate & Distressed Asset Solutions */}
            <div className="bg-[#050505] rounded-lg p-8 border border-gray-800">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Shield className="text-yellow-500 mr-3" size={28} />
                    <h4 className="text-xl font-semibold">Real Estate & Distressed Asset Solutions</h4>
                  </div>
                  <p className="text-gray-400 mb-4">
                    We specialize in stabilizing housing situations and protecting equity through strategic intervention.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li><span className="text-yellow-500">•</span> <strong>Foreclosure Prevention:</strong> Rapid deployment of negotiation strategies to halt foreclosure proceedings and retain ownership.</li>
                    <li><span className="text-yellow-500">•</span> <strong>Lender Negotiation:</strong> Acting as the authorized intermediary to restructure terms with financial institutions.</li>
                    <li><span className="text-yellow-500">•</span> <strong>Loan Modification & Refinancing:</strong> Identifying and executing alternative financing pathways to lower monthly obligations and secure assets.</li>
                    <li><span className="text-yellow-500">•</span> <strong>Strategic Realty Partnerships:</strong> Leveraging our exclusive partnership with Serenity Realty to execute market-specific solutions.</li>
                  </ul>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg"
                    alt="Real Estate Solutions"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Capital Acquisition & Funding Procurement */}
            <div className="bg-[#050505] rounded-lg p-8 border border-gray-800">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img
                    src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
                    alt="Capital Funding"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="text-yellow-500 mr-3" size={28} />
                    <h4 className="text-xl font-semibold">Capital Acquisition & Funding Procurement</h4>
                  </div>
                  <p className="text-gray-400 mb-4">
                    We empower clients by securing the capital necessary for stability or expansion.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li><span className="text-yellow-500">•</span> <strong>Funding Procurement:</strong> Leveraging an extensive network to secure high-value funding (minimum thresholds apply).</li>
                    <li><span className="text-yellow-500">•</span> <strong>Deal Structuring:</strong> Expert navigation of terms and conditions to ensure client protection in funding agreements.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Asset Management & Business Advisory */}
            <div className="bg-[#050505] rounded-lg p-8 border border-gray-800">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Users className="text-yellow-500 mr-3" size={28} />
                    <h4 className="text-xl font-semibold">Asset Management & Business Advisory</h4>
                  </div>
                  <p className="text-gray-400 mb-4">
                    We ensure long-term sustainability through education and strategic planning.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li><span className="text-yellow-500">•</span> <strong>Financial Literacy Programs:</strong> Custom curriculums designed to close knowledge gaps and empower financial decision-making.</li>
                    <li><span className="text-yellow-500">•</span> <strong>Risk Mitigation:</strong> Proactive analysis to shield personal and business assets from future liability.</li>
                    <li><span className="text-yellow-500">•</span> <strong>Strategic Business Consulting:</strong> High-level guidance on business growth, operational efficiency, and investment analysis.</li>
                  </ul>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
                    alt="Business Advisory"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Sage Advantage */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">The Sage Advantage</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#050505] rounded-lg p-6 border border-gray-800 text-center">
              <Award className="text-yellow-500 mx-auto mb-4" size={40} />
              <h4 className="text-xl font-semibold mb-3">Holistic Integration</h4>
              <p className="text-gray-400">
                Unlike standalone agencies, we integrate immediate crisis management (foreclosure prevention) with long-term wealth building (business management).
              </p>
            </div>
            <div className="bg-[#050505] rounded-lg p-6 border border-gray-800 text-center">
              <Shield className="text-yellow-500 mx-auto mb-4" size={40} />
              <h4 className="text-xl font-semibold mb-3">Institutional Backing</h4>
              <p className="text-gray-400">
                As a vertical of Future Trends Enterprise, we possess the resources and corporate governance to handle high-stakes negotiations.
              </p>
            </div>
            <div className="bg-[#050505] rounded-lg p-6 border border-gray-800 text-center">
              <Users className="text-yellow-500 mx-auto mb-4" size={40} />
              <h4 className="text-xl font-semibold mb-3">Partner Network</h4>
              <p className="text-gray-400">
                Our established relationships with realty firms and funding sources allow for expedited results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
