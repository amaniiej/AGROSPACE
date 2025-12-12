import { useState } from 'react';
import { Truck, Warehouse, QrCode, DollarSign, MapPin, Calendar } from 'lucide-react';
import { ActionButton } from '../shared/ActionButton';

export function LogisticsInfrastructure() {
  const [selectedTab, setSelectedTab] = useState<'transport' | 'storage' | 'traceability'>('transport');
  const [showBidModal, setShowBidModal] = useState(false);
  const [showStorageModal, setShowStorageModal] = useState(false);

  const transportRequests = [
    {
      id: 1,
      cargo: '15 tons Coffee beans',
      from: 'Sidama, Hawassa',
      to: 'Addis Ababa (Export warehouse)',
      distance: '275 km',
      date: 'Dec 12, 2024',
      bids: 3,
      lowestBid: '18,500 ETB',
      status: 'Open for Bidding'
    },
    {
      id: 2,
      cargo: '8 tons Sesame',
      from: 'Humera, Tigray',
      to: 'Djibouti Port',
      distance: '1,020 km',
      date: 'Dec 15, 2024',
      bids: 5,
      lowestBid: '45,000 ETB',
      status: 'Open for Bidding'
    },
    {
      id: 3,
      cargo: '25 tons Teff grain',
      from: 'Debre Zeit',
      to: 'Mekelle',
      distance: '780 km',
      date: 'Dec 10, 2024',
      bids: 2,
      lowestBid: '32,000 ETB',
      status: 'Open for Bidding'
    }
  ];

  const warehouseOptions = [
    {
      id: 1,
      name: 'Addis Ababa Central Warehouse',
      location: 'Akaki, Addis Ababa',
      type: 'Dry Storage',
      capacity: '500 tons',
      available: '120 tons',
      rate: '15 ETB/quintal/month',
      features: ['Climate controlled', 'Pest control', 'Security 24/7', 'Warehouse receipt system'],
      certified: true
    },
    {
      id: 2,
      name: 'Mekelle Cold Storage Facility',
      location: 'Mekelle, Tigray',
      type: 'Cold Storage',
      capacity: '200 tons',
      available: '45 tons',
      rate: '35 ETB/quintal/month',
      features: ['Temperature controlled (2-8°C)', 'For fruits/vegetables', 'Loading dock', 'Generator backup'],
      certified: true
    },
    {
      id: 3,
      name: 'Hawassa Grain Silo',
      location: 'Hawassa, SNNPR',
      type: 'Silo Storage',
      capacity: '1,000 tons',
      available: '280 tons',
      rate: '12 ETB/quintal/month',
      features: ['Hermetic storage', 'Fumigation available', 'Quality testing lab', 'ECX certified'],
      certified: true
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Logistics & Infrastructure Management</h2>
        <p className="text-gray-600">
          Optimize transport, storage, and traceability for your agricultural products
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2">
        {[
          { id: 'transport' as const, label: 'Transport Bidding', icon: Truck },
          { id: 'storage' as const, label: 'Warehouse Management', icon: Warehouse },
          { id: 'traceability' as const, label: 'Traceability System', icon: QrCode }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-lg transition-all
                ${selectedTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-500'
                }
              `}
            >
              <Icon className="size-5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Transport Logistics Bidding */}
      {selectedTab === 'transport' && (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-blue-900 mb-2">How Transport Bidding Works</h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm text-blue-800">
              <div>
                <h4 className="text-blue-900 mb-1">1. Post Request</h4>
                <p>Farmers/buyers submit transport needs with cargo details and route.</p>
              </div>
              <div>
                <h4 className="text-blue-900 mb-1">2. Receive Bids</h4>
                <p>Local transporters bid competitively on the job.</p>
              </div>
              <div>
                <h4 className="text-blue-900 mb-1">3. Select Best Offer</h4>
                <p>Compare bids by price, rating, and truck capacity.</p>
              </div>
              <div>
                <h4 className="text-blue-900 mb-1">4. Confirm Transport</h4>
                <p>Book transport and track delivery in real-time.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <h3 className="text-gray-900">Active Transport Requests</h3>
            <ActionButton variant="primary" onClick={() => setShowBidModal(true)}>
              Post Transport Request
            </ActionButton>
          </div>

          <div className="space-y-4">
            {transportRequests.map((request) => (
              <div key={request.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="size-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Truck className="size-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">{request.cargo}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="size-4" />
                          <span>From: {request.from}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="size-4" />
                          <span>To: {request.to}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="size-4" />
                          <span>Pickup: {request.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {request.status}
                  </span>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-4 text-sm">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-600 mb-1">Distance</p>
                    <p className="text-gray-900">{request.distance}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-600 mb-1">Current Bids</p>
                    <p className="text-gray-900">{request.bids} bids</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-600 mb-1">Lowest Bid</p>
                    <p className="text-green-600">{request.lowestBid}</p>
                  </div>
                  <div className="flex items-center">
                    <ActionButton variant="primary" fullWidth>
                      View Bids & Book
                    </ActionButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Warehouse Management */}
      {selectedTab === 'storage' && (
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-amber-900 mb-3">Reduce Post-Harvest Losses</h3>
            <p className="text-sm text-amber-800">
              Ethiopia loses 20-30% of grain production to poor storage. Certified warehouses provide climate-controlled, 
              secure storage with pest management and quality preservation. Access warehouse receipt financing for stored commodities.
            </p>
          </div>

          <div className="flex justify-between items-center">
            <h3 className="text-gray-900">Available Warehouse Facilities</h3>
            <ActionButton variant="primary" onClick={() => setShowStorageModal(true)}>
              Reserve Storage Space
            </ActionButton>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {warehouseOptions.map((warehouse) => (
              <div key={warehouse.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <Warehouse className="size-10 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-gray-900 mb-1">{warehouse.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="size-4" />
                          {warehouse.location}
                        </div>
                      </div>
                    </div>
                    {warehouse.certified && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                        Certified
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-gray-600 mb-1">Type</p>
                      <p className="text-gray-900">{warehouse.type}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-gray-600 mb-1">Total Capacity</p>
                      <p className="text-gray-900">{warehouse.capacity}</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-gray-600 mb-1">Available Now</p>
                      <p className="text-green-600">{warehouse.available}</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-gray-600 mb-1">Monthly Rate</p>
                      <p className="text-blue-600">{warehouse.rate}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-gray-900 mb-2 text-sm">Features:</h5>
                    <div className="flex flex-wrap gap-2">
                      {warehouse.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ActionButton variant="primary" fullWidth onClick={() => setShowStorageModal(true)}>
                    Reserve Space
                  </ActionButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Traceability System */}
      {selectedTab === 'traceability' && (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-green-900 mb-3">Farm-to-Consumer Traceability</h3>
            <p className="text-sm text-green-800 mb-4">
              Track your produce from farm to final consumer using QR codes and blockchain technology. 
              Essential for export markets, quality assurance, and EUDR compliance.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-green-800">
              <div>
                <h4 className="text-green-900 mb-1">✓ Export Compliance</h4>
                <p>Meet EU and US traceability requirements</p>
              </div>
              <div>
                <h4 className="text-green-900 mb-1">✓ Quality Assurance</h4>
                <p>Document every step from farm to market</p>
              </div>
              <div>
                <h4 className="text-green-900 mb-1">✓ Premium Pricing</h4>
                <p>Command higher prices for traceable products</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <QrCode className="size-12 text-blue-600 mb-4" />
              <h3 className="text-gray-900 mb-3">QR Code Traceability</h3>
              <p className="text-sm text-gray-600 mb-4">
                Generate unique QR codes for each batch or lot. Track production date, farm location, 
                processing steps, and quality certifications.
              </p>
              <div className="space-y-2 text-sm mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600">✓</span>
                  <span>Farmer ID and farm GPS coordinates</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600">✓</span>
                  <span>Harvest date and processing records</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600">✓</span>
                  <span>Quality test results and certifications</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600">✓</span>
                  <span>Transport and storage history</span>
                </div>
              </div>
              <ActionButton variant="primary" fullWidth>
                Generate QR Codes
              </ActionButton>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="size-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <QrCode className="size-6 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Blockchain Traceability</h3>
              <p className="text-sm text-gray-600 mb-4">
                Immutable blockchain record of your product journey. Provides cryptographic proof 
                of origin and handling for premium export markets.
              </p>
              <div className="space-y-2 text-sm mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-purple-600">✓</span>
                  <span>Tamper-proof transaction records</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-purple-600">✓</span>
                  <span>Smart contracts for automated payments</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-purple-600">✓</span>
                  <span>Real-time supply chain visibility</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-purple-600">✓</span>
                  <span>International buyer verification</span>
                </div>
              </div>
              <ActionButton variant="outline" fullWidth>
                Enable Blockchain Tracking
              </ActionButton>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Sample Traceability Report</h3>
            <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm">
              <div className="space-y-3">
                <div><span className="text-gray-600">Product:</span> <span className="text-gray-900">Organic Coffee Arabica - Grade 1</span></div>
                <div><span className="text-gray-600">Lot ID:</span> <span className="text-blue-600">ETH-SDM-2024-12-001</span></div>
                <div><span className="text-gray-600">Farm:</span> <span className="text-gray-900">Yirgacheffe Farmers Cooperative</span></div>
                <div><span className="text-gray-600">GPS:</span> <span className="text-gray-900">6.1574° N, 38.2052° E</span></div>
                <div><span className="text-gray-600">Harvest Date:</span> <span className="text-gray-900">Nov 28, 2024</span></div>
                <div><span className="text-gray-600">Processing:</span> <span className="text-gray-900">Washed, Sun-dried</span></div>
                <div><span className="text-gray-600">Certifications:</span> <span className="text-green-600">Organic (EU), Fair Trade</span></div>
                <div><span className="text-gray-600">Quality Score:</span> <span className="text-green-600">87/100 (Specialty Grade)</span></div>
                <div><span className="text-gray-600">Blockchain Hash:</span> <span className="text-purple-600 text-xs">0x8f3a...7b2e</span></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
