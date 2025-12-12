import { Search, Calculator, FileText, TrendingUp, Package, Star } from 'lucide-react';
import { VerifiedBadge } from '../shared/VerifiedBadge';
import { DataCard } from '../shared/DataCard';
import { AlertNotification } from '../shared/AlertNotification';

interface ExporterHomeProps {
  verificationStatus: 'verified' | 'pending' | 'unverified';
  onNavigate: (tab: string) => void;
}

export function ExporterHome({ verificationStatus, onNavigate }: ExporterHomeProps) {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-gray-900 mb-2">Welcome, Exporter</h2>
            <p className="text-gray-600">Source verified agricultural products from trusted producers</p>
          </div>
          <VerifiedBadge status={verificationStatus} size="lg" />
        </div>
        
        {verificationStatus === 'unverified' && (
          <AlertNotification
            type="warning"
            title="Complete Your Verification"
            message="Get verified to contact producers and request product samples."
          />
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <DataCard
          title="Available Products"
          value="156"
          icon={<Package className="size-5" />}
          subtitle="Verified listings"
        />
        <DataCard
          title="Verified Producers"
          value="42"
          trend="up"
          trendValue="+8"
          icon={<Star className="size-5" />}
        />
        <DataCard
          title="Sample Requests"
          value="5"
          subtitle="Pending responses"
          icon={<FileText className="size-5" />}
        />
        <DataCard
          title="Avg. Price Trend"
          value="+12%"
          trend="up"
          trendValue="This month"
          icon={<TrendingUp className="size-5" />}
        />
      </div>

      {/* Market Opportunities */}
      <div>
        <h3 className="text-gray-900 mb-4">Market Opportunities</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
            <h4 className="text-green-900 mb-2">Premium Coffee Arabica</h4>
            <p className="text-green-800 mb-4">
              12 verified producers with Grade 1 coffee available. Avg. price: 4,500 ETB/kg
            </p>
            <button
              onClick={() => onNavigate('catalog')}
              className="text-green-700 hover:text-green-900 underline"
            >
              View Products →
            </button>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
            <h4 className="text-blue-900 mb-2">Organic Sesame Seeds</h4>
            <p className="text-blue-800 mb-4">
              8 verified producers with organic certification. Strong export demand.
            </p>
            <button
              onClick={() => onNavigate('catalog')}
              className="text-blue-700 hover:text-blue-900 underline"
            >
              View Products →
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <button
            onClick={() => onNavigate('catalog')}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-md transition-all text-left group"
          >
            <Search className="size-8 text-green-600 mb-3" />
            <h4 className="text-gray-900 mb-2">Search Products</h4>
            <p className="text-sm text-gray-600">Browse verified agricultural products</p>
            <div className="mt-4 text-green-600 group-hover:text-green-700">
              Search Catalog →
            </div>
          </button>

          <button
            onClick={() => onNavigate('simulation')}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-md transition-all text-left group"
          >
            <Calculator className="size-8 text-green-600 mb-3" />
            <h4 className="text-gray-900 mb-2">Calculate Export Costs</h4>
            <p className="text-sm text-gray-600">Simulate FOB/CIF pricing</p>
            <div className="mt-4 text-green-600 group-hover:text-green-700">
              Open Calculator →
            </div>
          </button>

          <button
            onClick={() => onNavigate('samples')}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-md transition-all text-left group"
          >
            <FileText className="size-8 text-green-600 mb-3" />
            <h4 className="text-gray-900 mb-2">Request Samples</h4>
            <p className="text-sm text-gray-600">Get product samples from producers</p>
            <div className="mt-4 text-green-600 group-hover:text-green-700">
              Request Samples →
            </div>
          </button>
        </div>
      </div>

      {/* Featured Producers */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Featured Verified Producers</h3>
        <div className="space-y-4">
          {[
            { name: 'Sidama Coffee Cooperative', rating: 4.9, products: 6, specialty: 'Premium Coffee' },
            { name: 'Tigray Sesame Cooperative', rating: 5.0, products: 4, specialty: 'Organic Sesame' },
            { name: 'Kaffa Coffee Growers', rating: 4.8, products: 3, specialty: 'Specialty Coffee' }
          ].map((producer, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Package className="size-6 text-green-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-gray-900">{producer.name}</h4>
                    <VerifiedBadge status="verified" size="sm" showLabel={false} />
                  </div>
                  <p className="text-sm text-gray-600">{producer.specialty} • {producer.products} products</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 mb-1">
                  <Star className="size-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-gray-900">{producer.rating}</span>
                </div>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="text-sm text-green-600 hover:text-green-700"
                >
                  View Products
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
