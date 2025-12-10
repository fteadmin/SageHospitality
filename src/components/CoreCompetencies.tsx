import React from 'react';
import { Shield, TrendingUp, Users } from 'lucide-react';

export default function CoreCompetencies() {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-8 text-center">Core Competencies</h3>
      <div className="space-y-8">
        {/* Real Estate & Distressed Asset Solutions */}
        <div className="bg-[#050505] rounded-lg p-8 border border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="text-brand mr-3" size={28} />
                <h4 className="text-xl font-semibold">Real Estate & Distressed Asset Solutions</h4>
              </div>
              <p className="text-gray-400 mb-4">
                We specialize in stabilizing housing situations and protecting equity through strategic intervention.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li><span className="text-brand">•</span> <strong>Foreclosure Prevention:</strong> Rapid deployment of negotiation strategies to halt foreclosure proceedings and retain ownership.</li>
                <li><span className="text-brand">•</span> <strong>Lender Negotiation:</strong> Acting as the authorized intermediary to restructure terms with financial institutions.</li>
                <li><span className="text-brand">•</span> <strong>Loan Modification & Refinancing:</strong> Identifying and executing alternative financing pathways to lower monthly obligations and secure assets.</li>
                <li><span className="text-brand">•</span> <strong>Strategic Realty Partnerships:</strong> Leveraging our exclusive partnership with Serenity Realty to execute market-specific solutions.</li>
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
                <TrendingUp className="text-brand mr-3" size={28} />
                <h4 className="text-xl font-semibold">Capital Acquisition & Funding Procurement</h4>
              </div>
              <p className="text-gray-400 mb-4">
                We empower clients by securing the capital necessary for stability or expansion.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li><span className="text-brand">•</span> <strong>Funding Procurement:</strong> Leveraging an extensive network to secure high-value funding (minimum thresholds apply).</li>
                <li><span className="text-brand">•</span> <strong>Deal Structuring:</strong> Expert navigation of terms and conditions to ensure client protection in funding agreements.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Asset Management & Business Advisory */}
        <div className="bg-[#050505] rounded-lg p-8 border border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Users className="text-brand mr-3" size={28} />
                <h4 className="text-xl font-semibold">Asset Management & Business Advisory</h4>
              </div>
              <p className="text-gray-400 mb-4">
                We ensure long-term sustainability through education and strategic planning.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li><span className="text-brand">•</span> <strong>Financial Literacy Programs:</strong> Custom curriculums designed to close knowledge gaps and empower financial decision-making.</li>
                <li><span className="text-brand">•</span> <strong>Risk Mitigation:</strong> Proactive analysis to shield personal and business assets from future liability.</li>
                <li><span className="text-brand">•</span> <strong>Strategic Business Consulting:</strong> High-level guidance on business growth, operational efficiency, and investment analysis.</li>
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
  );
}
