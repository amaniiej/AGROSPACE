import { useState } from 'react';
import { Truck, MapPin, Calendar, Package, CheckCircle2 } from 'lucide-react';
import { ActionButton } from '../shared/ActionButton';
import { AlertNotification } from '../shared/AlertNotification';

export function LogisticsRequest() {
  const [formData, setFormData] = useState({
    collectionAddress: '',
    estimatedVolume: '',
    collectionDate: '',
    productType: '',
    destination: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const pendingRequests = [
    {
      id: 'LR-001',
      productType: 'Coffee Arabica',
      volume: '500 kg',
      collectionDate: '2024-12-10',
      status: 'Pending',
      destination: 'Addis Ababa Export Hub'
    },
    {
      id: 'LR-002',
      productType: 'Sesame Seeds',
      volume: '300 kg',
      collectionDate: '2024-12-12',
      status: 'Confirmed',
      destination: 'Djibouti Port'
    },
    {
      id: 'LR-003',
      productType: 'Teff',
      volume: '800 kg',
      collectionDate: '2024-12-15',
      status: 'In Transit',
      destination: 'Local Warehouse'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Logistics & Transport</h2>
        <p className="text-gray-600">
          Request collection and transportation for your products
        </p>
      </div>

      {submitted && (
        <AlertNotification
          type="success"
          title="Transport Request Submitted"
          message="Your logistics request has been received. We'll contact you within 24 hours to confirm details."
          dismissible
        />
      )}

      {/* Request Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
        <h3 className="text-gray-900">New Logistics Request</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2 flex items-center gap-2">
              <MapPin className="size-4" />
              Farm Collection Address <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              value={formData.collectionAddress}
              onChange={(e) => setFormData({ ...formData, collectionAddress: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter full collection address including region, woreda, and kebele"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <Package className="size-4" />
                Product Type <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.productType}
                onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select product</option>
                <option>Coffee Arabica</option>
                <option>Coffee Robusta</option>
                <option>Teff</option>
                <option>Sesame Seeds</option>
                <option>Kidney Beans</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Estimated Volume/Weight (kg) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                value={formData.estimatedVolume}
                onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., 500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <Calendar className="size-4" />
                Desired Collection Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                required
                value={formData.collectionDate}
                onChange={(e) => setFormData({ ...formData, collectionDate: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Destination <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select destination</option>
                <option>Addis Ababa Export Hub</option>
                <option>Djibouti Port</option>
                <option>Local Warehouse</option>
                <option>Buyer Location</option>
              </select>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-blue-900 mb-2">Logistics Information</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Standard collection time: 7-10 business days</li>
              <li>• Rush collection available for premium members</li>
              <li>• Transportation costs calculated based on volume and distance</li>
              <li>• Insurance available for high-value shipments</li>
            </ul>
          </div>
        </div>

        <ActionButton type="submit" variant="primary" icon={Truck} fullWidth>
          Submit Logistics Request
        </ActionButton>
      </form>

      {/* Active Requests */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-gray-900">Your Logistics Requests</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {pendingRequests.map((request) => (
            <div key={request.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-gray-900">{request.id}</h4>
                    <span className={`
                      px-3 py-1 rounded-full text-sm
                      ${request.status === 'Confirmed' ? 'bg-green-100 text-green-700' : ''}
                      ${request.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : ''}
                      ${request.status === 'In Transit' ? 'bg-blue-100 text-blue-700' : ''}
                    `}>
                      {request.status}
                    </span>
                  </div>
                  <p className="text-gray-600">{request.productType}</p>
                </div>
                {request.status === 'Confirmed' && (
                  <CheckCircle2 className="size-6 text-green-600" />
                )}
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">Volume</p>
                  <p className="text-gray-900">{request.volume}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Collection Date</p>
                  <p className="text-gray-900">{request.collectionDate}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Destination</p>
                  <p className="text-gray-900">{request.destination}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logistics Partners */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Our Logistics Partners</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
            <div className="p-3 bg-green-100 rounded-lg">
              <Truck className="size-6 text-green-600" />
            </div>
            <div>
              <h4 className="text-gray-900">Ethiopian Freight</h4>
              <p className="text-sm text-gray-600">Local & regional transport</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
            <div className="p-3 bg-green-100 rounded-lg">
              <Truck className="size-6 text-green-600" />
            </div>
            <div>
              <h4 className="text-gray-900">Global Agri Logistics</h4>
              <p className="text-sm text-gray-600">International shipping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
