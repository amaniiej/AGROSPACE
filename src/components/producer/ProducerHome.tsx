import { Package, TrendingUp, Truck, AlertCircle, Clock } from 'lucide-react';
import { VerifiedBadge } from '../shared/VerifiedBadge';
import { DataCard } from '../shared/DataCard';
import { AlertNotification } from '../shared/AlertNotification';
import { weatherAlerts } from '../../data/mockData';

interface ProducerHomeProps {
  verificationStatus: 'verified' | 'pending' | 'unverified';
  onNavigate: (tab: string) => void;
}

export function ProducerHome({ verificationStatus, onNavigate }: ProducerHomeProps) {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-gray-900 mb-2">Welcome, Producer</h2>
            <p className="text-gray-600">Manage your products and grow your business</p>
          </div>
          <VerifiedBadge status={verificationStatus} size="lg" />
        </div>
        
        {verificationStatus === 'unverified' && (
          <AlertNotification
            type="warning"
            title="Complete Your Verification"
            message="Get verified to unlock full platform features and gain buyer trust."
          />
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <DataCard
          title="Active Listings"
          value="6"
          icon={<Package className="size-5" />}
          subtitle="Products listed"
        />
        <DataCard
          title="Avg. Product Rating"
          value="4.7"
          trend="up"
          trendValue="+0.3"
          icon={<TrendingUp className="size-5" />}
        />
        <DataCard
          title="Total Inventory"
          value="4,150 kg"
          subtitle="Across all products"
          icon={<Package className="size-5" />}
        />
        <DataCard
          title="Pending Requests"
          value="3"
          subtitle="Logistics requests"
          icon={<Truck className="size-5" />}
        />
      </div>

      {/* Weather & Agricultural Alerts */}
      <div>
        <h3 className="text-gray-900 mb-4">Weather & Agricultural Alerts</h3>
        <div className="space-y-4">
          {weatherAlerts.map((alert) => (
            <AlertNotification
              key={alert.id}
              type={alert.type}
              title={alert.title}
              message={`${alert.message} (${alert.region})`}
              dismissible
            />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <button
            onClick={() => onNavigate('products')}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-md transition-all text-left group"
          >
            <Package className="size-8 text-green-600 mb-3" />
            <h4 className="text-gray-900 mb-2">Add New Product</h4>
            <p className="text-sm text-gray-600">List a new product for sale</p>
            <div className="mt-4 text-green-600 group-hover:text-green-700">
              Go to Products →
            </div>
          </button>

          <button
            onClick={() => onNavigate('pricing')}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-md transition-all text-left group"
          >
            <TrendingUp className="size-8 text-green-600 mb-3" />
            <h4 className="text-gray-900 mb-2">Check Market Prices</h4>
            <p className="text-sm text-gray-600">View current market intelligence</p>
            <div className="mt-4 text-green-600 group-hover:text-green-700">
              View Pricing →
            </div>
          </button>

          <button
            onClick={() => onNavigate('logistics')}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-md transition-all text-left group"
          >
            <Truck className="size-8 text-green-600 mb-3" />
            <h4 className="text-gray-900 mb-2">Request Transport</h4>
            <p className="text-sm text-gray-600">Arrange product collection</p>
            <div className="mt-4 text-green-600 group-hover:text-green-700">
              Request Logistics →
            </div>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
            <div className="p-2 bg-green-100 rounded-lg">
              <Package className="size-5 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">Premium Arabica Coffee Beans updated</p>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <Clock className="size-4" />
                2 hours ago
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
            <div className="p-2 bg-blue-100 rounded-lg">
              <AlertCircle className="size-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">New inquiry received for Sesame Seeds</p>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <Clock className="size-4" />
                5 hours ago
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Truck className="size-5 text-yellow-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">Logistics request confirmed</p>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <Clock className="size-4" />
                1 day ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
