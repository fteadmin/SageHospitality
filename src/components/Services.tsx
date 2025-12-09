import React from 'react';
import { Building2, Home, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="services" className="py-12 bg-[#050505]" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our <span className="text-yellow-500">Services</span>
        </h2>
        
        <div className="space-y-12">
          {/* Residential Real Estate */}
          <div className="bg-[#0a0a0a] rounded-lg p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <Home className="text-yellow-500 mr-4" size={32} />
              <h3 className="text-2xl font-semibold">Residential Real Estate</h3>
            </div>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">1. Capital Acquisition & Funding</h4>
                <ul className="space-y-2 ml-4">
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Strategic Funding Procurement:</span> Leveraging extensive networks and industry expertise to secure capital for clients (specifically noted as securing high-value funding amounts).</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Source Negotiation:</span> Handling the specific terms and conditions associated with external funding sources to ensure favorable agreements.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">2. Real Estate & Distressed Asset Solutions</h4>
                <ul className="space-y-2 ml-4">
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Foreclosure Prevention:</span> Specialized assistance designed to help clients retain ownership of residential assets currently facing foreclosure proceedings.</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Lender Negotiations:</span> Direct representation in negotiations with financial institutions and lenders to halt or alter foreclosure processes.</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Loan Restructuring:</span> Exploring and executing loan modification options and identifying potential refinancing opportunities to stabilize the asset.</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Strategic Partnerships:</span> Executing real estate solutions in partnership with industry experts (specifically Serenity Realty) to maximize client outcomes.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">3. Asset Management & Business Advisory</h4>
                <ul className="space-y-2 ml-4">
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Financial Literacy Education:</span> Providing comprehensive programs designed to increase client knowledge regarding financial stewardship.</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Risk Mitigation:</span> Developing strategies to protect personal and business assets from market volatility or legal exposure.</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Investment Analysis:</span> Detailed evaluation of potential or current investments to ensure alignment with growth goals.</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Strategic Business Consulting:</span> High-level advisory services focused on the management and growth of business ventures.</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Personal Asset Management:</span> Planning and oversight services dedicated to the growth and preservation of personal wealth.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Commercial Property */}
          <div className="bg-[#0a0a0a] rounded-lg p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <Building2 className="text-yellow-500 mr-4" size={32} />
              <h3 className="text-2xl font-semibold">Commercial Property</h3>
            </div>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">1. Capital Acquisition & Funding</h4>
                <ul className="space-y-2 ml-4">
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Strategic Funding Procurement:</span> Leveraging extensive networks and industry expertise to secure capital for clients (specifically noted as securing high-value funding amounts).</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Source Negotiation:</span> Handling the specific terms and conditions associated with external funding sources to ensure favorable agreements.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">2. Real Estate & Distressed Asset Solutions</h4>
                <ul className="space-y-2 ml-4">
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Foreclosure Prevention:</span> Specialized assistance designed to help clients retain ownership of residential assets currently facing foreclosure proceedings.</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Lender Negotiations:</span> Direct representation in negotiations with financial institutions and lenders to halt or alter foreclosure processes.</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Loan Restructuring:</span> Exploring and executing loan modification options and identifying potential refinancing opportunities to stabilize the asset.</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Strategic Partnerships:</span> Executing real estate solutions in partnership with industry experts (specifically Serenity Realty) to maximize client outcomes.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">3. Asset Management & Business Advisory</h4>
                <ul className="space-y-2 ml-4">
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Financial Literacy Education:</span> Providing comprehensive programs designed to increase client knowledge regarding financial stewardship.</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Risk Mitigation:</span> Developing strategies to protect personal and business assets from market volatility or legal exposure.</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Investment Analysis:</span> Detailed evaluation of potential or current investments to ensure alignment with growth goals.</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Strategic Business Consulting:</span> High-level advisory services focused on the management and growth of business ventures.</li>
                  <li className="text-gray-400"><span className="text-yellow-500 font-semibold">Personal Asset Management:</span> Planning and oversight services dedicated to the growth and preservation of personal wealth.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Concierge Services */}
          <div className="bg-[#0a0a0a] rounded-lg p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <Users className="text-yellow-500 mr-4" size={32} />
              <h3 className="text-2xl font-semibold">Concierge Services</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#050505] rounded-lg p-6 border border-gray-800">
                <h4 className="text-xl font-semibold mb-4">Travel Guide</h4>
                <p className="text-gray-400">
                  Personalized travel planning and guidance services to ensure your journeys are seamless and memorable. From destination recommendations to itinerary planning, we handle all the details.
                </p>
              </div>
              
              <div className="bg-[#050505] rounded-lg p-6 border border-gray-800">
                <h4 className="text-xl font-semibold mb-4">Airbnb Management</h4>
                <p className="text-gray-400">
                  Comprehensive Airbnb property management services including listing optimization, guest communication, booking management, and property maintenance coordination to maximize your rental income.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
