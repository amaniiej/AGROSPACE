import { Search, TrendingUp, Truck, Package, Clock, MapPin } from 'lucide-react';
import { DataCard } from '../shared/DataCard';
import { AlertNotification } from '../shared/AlertNotification';

interface LocalBuyerHomeProps {
  onNavigate: (tab: string) => void;
}

export function LocalBuyerHome({ onNavigate }: LocalBuyerHomeProps) {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div>
          <h2 className="text-gray-900 mb-2">Welcome, Local Buyer</h2>
          <p className="text-gray-600">Discover and purchase agricultural products from verified Ethiopian producers</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <DataCard
          title="Immediate Stock"
          value="89"
          icon={<Package className="size-5" />}
          subtitle="Products available now"
        />
        <DataCard
          title="Active Orders"
          value="12"
          trend="up"
          trendValue="+3"
          icon={<Package className="size-5" />}
        />
        <DataCard
          title="Pending Deliveries"
          value="5"
          subtitle="In transit"
          icon={<Truck className="size-5" />}
        />
        <DataCard
          title="Avg. Local Price"
          value="4,200 ETB"
          trend="down"
          trendValue="-2%"
          icon={<TrendingUp className="size-5" />}
        />
      </div>

      {/* Immediate Stock Alert */}
      <AlertNotification
        type="info"
        title="New Stock Available"
        message="15 new products added in your region in the last 24 hours. Check the catalog now."
        dismissible
      />

      {/* Quick Actions */}
      <div>
        <h3 className="text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <button
            onClick={() => onNavigate('catalog')}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all text-left group"
          >
            <Search className="size-8 text-blue-600 mb-3" />
            <h4 className="text-gray-900 mb-2">Browse Immediate Stock</h4>
            <p className="text-sm text-gray-600">Filter by location and availability</p>
            <div className="mt-4 text-blue-600 group-hover:text-blue-700">
              Search Products →
            </div>
          </button>

          <button
            onClick={() => onNavigate('pricing')}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all text-left group"
          >
            <TrendingUp className="size-8 text-blue-600 mb-3" />
            <h4 className="text-gray-900 mb-2">Check Local Prices</h4>
            <p className="text-sm text-gray-600">30-day price trends for negotiation</p>
            <div className="mt-4 text-blue-600 group-hover:text-blue-700">
              View Prices →
            </div>
          </button>

          <button
            onClick={() => onNavigate('logistics')}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all text-left group"
          >
            <Truck className="size-8 text-blue-600 mb-3" />
            <h4 className="text-gray-900 mb-2">Estimate Transport</h4>
            <p className="text-sm text-gray-600">Quick domestic logistics quotes</p>
            <div className="mt-4 text-blue-600 group-hover:text-blue-700">
              Get Quote →
            </div>
          </button>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Recent Orders</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
            <div className="p-2 bg-green-100 rounded-lg">
              <Package className="size-5 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="text-gray-900">Coffee Arabica - 500 kg</p>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Delivered</span>
              </div>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <MapPin className="size-4" />
                From Sidama Coffee Cooperative
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <Clock className="size-4" />
                Delivered 2 days ago
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Truck className="size-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="text-gray-900">Sesame Seeds - 300 kg</p>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">In Transit</span>
              </div>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <MapPin className="size-4" />
                From Tigray Sesame Cooperative
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <Clock className="size-4" />
                Est. arrival: Dec 8, 2024
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="size-5 text-yellow-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="text-gray-900">Teff Grain - 800 kg</p>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Pending</span>
              </div>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <MapPin className="size-4" />
                From Shewa Grain Farmers Union
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <Clock className="size-4" />
                Awaiting seller confirmation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Availability */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Stock by Region</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { region: 'Sidama', products: 24, specialty: 'Coffee' },
            { region: 'Oromia', products: 18, specialty: 'Legumes' },
            { region: 'Tigray', products: 15, specialty: 'Sesame' },
            { region: 'Shewa', products: 12, specialty: 'Grains' },
            { region: 'Kaffa', products: 10, specialty: 'Coffee' },
            { region: 'Amhara', products: 8, specialty: 'Beans' }
          ].map((item) => (
            <button
              key={item.region}
              onClick={() => onNavigate('catalog')}
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-gray-900">{item.region}</h4>
                <span className="text-2xl text-blue-600">{item.products}</span>
              </div>
              <p className="text-sm text-gray-600">Specialty: {item.specialty}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
