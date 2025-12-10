import React from 'react';
import { Shield, Users, Award } from 'lucide-react';

export default function SageAdvantage() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-8 text-center">The Sage Advantage</h3>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-[#050505] rounded-lg p-6 border border-gray-800 text-center">
          <Award className="text-brand mx-auto mb-4" size={40} />
          <h4 className="text-xl font-semibold mb-3">Holistic Integration</h4>
          <p className="text-gray-400">
            Unlike standalone agencies, we integrate immediate crisis management (foreclosure prevention) with long-term wealth building (business management).
          </p>
        </div>
        <div className="bg-[#050505] rounded-lg p-6 border border-gray-800 text-center">
          <Shield className="text-brand mx-auto mb-4" size={40} />
          <h4 className="text-xl font-semibold mb-3">Institutional Backing</h4>
          <p className="text-gray-400">
            As a vertical of Future Trends Enterprise, we possess the resources and corporate governance to handle high-stakes negotiations.
          </p>
        </div>
        <div className="bg-[#050505] rounded-lg p-6 border border-gray-800 text-center">
          <Users className="text-brand mx-auto mb-4" size={40} />
          <h4 className="text-xl font-semibold mb-3">Partner Network</h4>
          <p className="text-gray-400">
            Our established relationships with realty firms and funding sources allow for expedited results.
          </p>
        </div>
      </div>
    </div>
  );
}
