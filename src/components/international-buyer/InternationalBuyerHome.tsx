import { FileText, Calculator, TrendingUp, Globe, Package, CheckCircle2 } from 'lucide-react';
import { DataCard } from '../shared/DataCard';
import { AlertNotification } from '../shared/AlertNotification';

interface InternationalBuyerHomeProps {
  onNavigate: (tab: string) => void;
}

export function InternationalBuyerHome({ onNavigate }: InternationalBuyerHomeProps) {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border border-orange-200 p-6">
        <div className="flex items-start gap-4">
          <Globe className="size-12 text-orange-600 flex-shrink-0" />
          <div>
            <h2 className="text-gray-900 mb-2">Welcome, Global Importer</h2>
            <p className="text-gray-600">
              Access Ethiopian agricultural products with full compliance verification, 
              FOB/CIF cost simulation, and qualified sourcing requests.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <DataCard
          title="Active Requests"
          value="8"
          icon={<FileText className="size-5" />}
          subtitle="Sourcing inquiries"
        />
        <DataCard
          title="Quotes Received"
          value="15"
          trend="up"
          trendValue="+5"
          icon={<CheckCircle2 className="size-5" />}
        />
        <DataCard
          title="Verified Suppliers"
          value="42"
          subtitle="Available"
          icon={<Package className="size-5" />}
        />
        <DataCard
          title="Avg. FOB Price"
          value="$2.85/kg"
          trend="up"
          trendValue="+3%"
          icon={<TrendingUp className="size-5" />}
        />
      </div>

      {/* Priority Action */}
      <AlertNotification
        type="info"
        title="New Feature: Multi-Step Sourcing Request Form"
        message="Submit detailed sourcing requirements with product specs, volume, certifications, and preferred Incoterms. Get matched with qualified suppliers."
      />

      {/* Quick Actions - Priority on Sourcing Request */}
      <div>
        <h3 className="text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <button
            onClick={() => onNavigate('sourcing')}
            className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border-2 border-orange-300 hover:border-orange-500 hover:shadow-lg transition-all text-left group"
          >
            <FileText className="size-8 text-orange-600 mb-3" />
            <h4 className="text-gray-900 mb-2">Submit Sourcing Request ⭐</h4>
            <p className="text-sm text-gray-600">Multi-step form for complex buying criteria</p>
            <div className="mt-4 text-orange-600 group-hover:text-orange-700">
              Start Request →
            </div>
          </button>

          <button
            onClick={() => onNavigate('calculator')}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-orange-500 hover:shadow-md transition-all text-left group"
          >
            <Calculator className="size-8 text-orange-600 mb-3" />
            <h4 className="text-gray-900 mb-2">FOB/CIF Calculator</h4>
            <p className="text-sm text-gray-600">Calculate landed costs with Incoterms</p>
            <div className="mt-4 text-orange-600 group-hover:text-orange-700">
              Calculate Costs →
            </div>
          </button>

          <button
            onClick={() => onNavigate('pricing')}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-orange-500 hover:shadow-md transition-all text-left group"
          >
            <TrendingUp className="size-8 text-orange-600 mb-3" />
            <h4 className="text-gray-900 mb-2">Global Price Intelligence</h4>
            <p className="text-sm text-gray-600">Validate global market alignment</p>
            <div className="mt-4 text-orange-600 group-hover:text-orange-700">
              View Pricing →
            </div>
          </button>
        </div>
      </div>

      {/* Recent Sourcing Requests */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">Recent Sourcing Requests</h3>
          <button 
            onClick={() => onNavigate('leads')}
            className="text-orange-600 hover:text-orange-700 text-sm"
          >
            View All →
          </button>
        </div>
        <div className="space-y-4">
          {[
            {
              id: 'SR-2024-001',
              product: 'Coffee Arabica - Grade 1',
              volume: '20 MT',
              status: 'Quote Received',
              quotes: 3,
              statusColor: 'green'
            },
            {
              id: 'SR-2024-002',
              product: 'Organic Sesame Seeds',
              volume: '15 MT',
              status: 'Under Review',
              quotes: 1,
              statusColor: 'blue'
            },
            {
              id: 'SR-2024-003',
              product: 'White Kidney Beans',
              volume: '10 MT',
              status: 'Pending',
              quotes: 0,
              statusColor: 'yellow'
            }
          ].map((request, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="text-gray-900">{request.id}</h4>
                  <span className={`
                    px-3 py-1 rounded-full text-sm
                    ${request.statusColor === 'green' ? 'bg-green-100 text-green-700' : ''}
                    ${request.statusColor === 'blue' ? 'bg-blue-100 text-blue-700' : ''}
                    ${request.statusColor === 'yellow' ? 'bg-yellow-100 text-yellow-700' : ''}
                  `}>
                    {request.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{request.product}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-900 mb-1">{request.volume}</p>
                <p className="text-sm text-gray-600">{request.quotes} quote{request.quotes !== 1 ? 's' : ''}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Opportunities */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-gray-900 mb-4">Trending Products</h3>
          <div className="space-y-3">
            {[
              { product: 'Premium Arabica Coffee', demand: 'High', suppliers: 12 },
              { product: 'Organic Teff', demand: 'Growing', suppliers: 8 },
              { product: 'White Sesame Seeds', demand: 'High', suppliers: 9 }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-gray-900">{item.product}</p>
                  <p className="text-sm text-gray-600">{item.suppliers} verified suppliers</p>
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                  {item.demand} Demand
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-gray-900 mb-4">Compliance & Certifications</h3>
          <div className="space-y-3">
            {[
              { cert: 'Organic Certified', count: 18 },
              { cert: 'Fair Trade', count: 22 },
              { cert: 'ISO 22000', count: 15 },
              { cert: 'Rainforest Alliance', count: 10 }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-green-600" />
                  <p className="text-gray-900">{item.cert}</p>
                </div>
                <span className="text-gray-600">{item.count} suppliers</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
