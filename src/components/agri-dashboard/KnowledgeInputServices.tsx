import { useState } from 'react';
import { MessageCircle, Cloud, ShoppingCart, Video, Send, AlertTriangle } from 'lucide-react';
import { ActionButton } from '../shared/ActionButton';
import { AlertNotification } from '../shared/AlertNotification';

export function KnowledgeInputServices() {
  const [selectedTab, setSelectedTab] = useState<'extension' | 'weather' | 'inputs'>('extension');
  const [chatMessage, setChatMessage] = useState('');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Knowledge & Input Services</h2>
        <p className="text-gray-600">
          Access expert advice, weather alerts, and certified agricultural inputs
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2">
        {[
          { id: 'extension' as const, label: 'Digital Extension Services', icon: MessageCircle },
          { id: 'weather' as const, label: 'Localized Weather Alerts', icon: Cloud },
          { id: 'inputs' as const, label: 'Certified Input Marketplace', icon: ShoppingCart }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-lg transition-all
                ${selectedTab === tab.id
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-green-500'
                }
              `}
            >
              <Icon className="size-5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Digital Agronomic Extension Services */}
      {selectedTab === 'extension' && (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-green-900 mb-3">Connect with Certified Agronomists</h3>
            <p className="text-sm text-green-800 mb-4">
              Get expert advice tailored to Ethiopian farming practices. Send photos of diseased crops for quick 
              diagnosis and receive localized recommendations from certified specialists.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-green-800">
              <div>
                <h4 className="text-green-900 mb-1">✓ Chat Consultation</h4>
                <p>Text-based advice for quick questions</p>
              </div>
              <div>
                <h4 className="text-green-900 mb-1">✓ Video Conferencing</h4>
                <p>Face-to-face remote consultation</p>
              </div>
              <div>
                <h4 className="text-green-900 mb-1">✓ Photo Diagnosis</h4>
                <p>Send crop photos for disease identification</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Chat Consultation */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="size-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-gray-900">Chat with Agronomist</h3>
                  <p className="text-sm text-gray-600">Get instant text-based advice</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4 h-64 overflow-y-auto">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Agronomist • 10:30 AM</p>
                    <p className="text-gray-900">Hello! How can I help you with your crops today?</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg shadow-sm ml-8">
                    <p className="text-sm text-gray-600 mb-1">You • 10:32 AM</p>
                    <p className="text-gray-900">My teff leaves are turning yellow. What could be the problem?</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Agronomist • 10:34 AM</p>
                    <p className="text-gray-900">Yellowing in teff can indicate nitrogen deficiency. Can you send a photo of the affected plants?</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <ActionButton variant="primary" icon={Send}>
                  Send
                </ActionButton>
              </div>
            </div>

            {/* Video Consultation */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Video className="size-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-900">Video Consultation</h3>
                  <p className="text-sm text-gray-600">Schedule face-to-face session</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 mb-4 text-center">
                <Video className="size-16 text-blue-600 mx-auto mb-4" />
                <h4 className="text-blue-900 mb-2">Available Agronomists Online</h4>
                <p className="text-blue-800 text-sm mb-4">3 specialists ready for video call</p>
                <ActionButton variant="primary">
                  Start Video Call
                </ActionButton>
              </div>

              <div className="space-y-2 text-sm">
                <h4 className="text-gray-900 mb-2">Upcoming Scheduled Sessions</h4>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-900 mb-1">Dr. Abebe Tadesse - Cereal Crops</p>
                  <p className="text-gray-600 text-xs">Tomorrow, Dec 9 at 2:00 PM</p>
                </div>
                <button className="text-green-600 hover:text-green-700 text-sm">
                  Schedule New Session →
                </button>
              </div>
            </div>
          </div>

          {/* Quick Diagnosis Tool */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Photo-Based Crop Diagnosis</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4 hover:border-green-500 transition-colors cursor-pointer">
                  <div className="size-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="size-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-900 mb-1">Upload Crop Photo</p>
                  <p className="text-sm text-gray-600">Click to select or drag and drop</p>
                </div>
                <ActionButton variant="primary" fullWidth>
                  Submit for Diagnosis
                </ActionButton>
              </div>
              <div>
                <h4 className="text-gray-900 mb-3">Tips for Best Results:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Take clear, well-lit photos of affected plant parts</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Include close-ups and full plant view</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Capture both top and bottom of leaves</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Show multiple affected plants if possible</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Include any visible insects or damage patterns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Localized Weather Alerts */}
      {selectedTab === 'weather' && (
        <div className="space-y-6">
          <AlertNotification
            type="warning"
            title="Heavy Rainfall Alert"
            message="Expected 60-80mm rainfall in your area Dec 11-12. Flood risk in low-lying areas. Postpone spraying operations."
          />
          
          <AlertNotification
            type="info"
            title="Optimal Planting Conditions"
            message="Soil moisture levels ideal for teff planting in highland areas (Dec 8-15). Weather window confirmed."
          />

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Hyper-Local Weather Monitoring</h3>
            <p className="text-gray-600 mb-6">
              Receive weather forecasts and risk alerts customized to your exact farm location using GPS coordinates.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="size-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Cloud className="size-6 text-blue-600" />
                </div>
                <h4 className="text-gray-900 mb-2">Rainfall Alerts</h4>
                <p className="text-sm text-gray-600 mb-3">
                  24-hour advance warning for heavy rain, helping you protect crops and plan field work.
                </p>
                <div className="text-sm">
                  <span className="text-blue-600">Next 72h: 45mm expected</span>
                </div>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="size-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="size-6 text-amber-600" />
                </div>
                <h4 className="text-gray-900 mb-2">Drought Monitoring</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Track soil moisture levels and receive early drought warnings for your specific region.
                </p>
                <div className="text-sm">
                  <span className="text-green-600">Status: Adequate moisture</span>
                </div>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="size-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="size-6 text-red-600" />
                </div>
                <h4 className="text-gray-900 mb-2">Pest/Disease Risk</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Weather-based predictions for pest outbreaks and disease spread in your crops.
                </p>
                <div className="text-sm">
                  <span className="text-amber-600">Moderate armyworm risk</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Set Up Location-Based Alerts</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Farm/Plot Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., North Field"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">GPS Coordinates</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., 9.0320° N, 38.7469° E"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Alert Preferences</label>
                <div className="space-y-2">
                  {['Heavy Rainfall (>30mm/day)', 'Drought Conditions', 'Temperature Extremes', 'Pest/Disease Risk', 'Optimal Planting Windows'].map((alert) => (
                    <label key={alert} className="flex items-center gap-2">
                      <input type="checkbox" className="size-4 text-green-600 rounded focus:ring-green-500" defaultChecked />
                      <span className="text-gray-700">{alert}</span>
                    </label>
                  ))}
                </div>
              </div>
              <ActionButton variant="primary">
                Enable Weather Alerts
              </ActionButton>
            </form>
          </div>
        </div>
      )}

      {/* Certified Input Marketplace */}
      {selectedTab === 'inputs' && (
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-amber-900 mb-3">Combat Counterfeit Agricultural Inputs</h3>
            <p className="text-sm text-amber-800 mb-4">
              Counterfeit seeds, fertilizers, and pesticides are a major problem in Ethiopian agriculture. 
              This marketplace guarantees authentic, certified products from verified suppliers.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-amber-800">
              <div>
                <h4 className="text-amber-900 mb-1">✓ Verified Suppliers Only</h4>
                <p>All sellers licensed by Ministry of Agriculture</p>
              </div>
              <div>
                <h4 className="text-amber-900 mb-1">✓ Quality Guaranteed</h4>
                <p>Lab-tested seeds and inputs with certification</p>
              </div>
              <div>
                <h4 className="text-amber-900 mb-1">✓ Traceability</h4>
                <p>Track product origin and authenticity</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: 'Certified Seeds',
                items: '45 products',
                icon: '🌱',
                color: 'green',
                description: 'Government-certified seeds from Ethiopian Seed Enterprise and licensed distributors'
              },
              {
                category: 'Quality Fertilizers',
                items: '28 products',
                icon: '🧪',
                color: 'blue',
                description: 'Genuine fertilizers with guaranteed NPK content and ISO certification'
              },
              {
                category: 'Approved Pesticides',
                items: '36 products',
                icon: '🛡️',
                color: 'purple',
                description: 'Ministry-approved crop protection products with safety documentation'
              }
            ].map((category) => (
              <div key={category.category} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-gray-900 mb-2">{category.category}</h3>
                <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                <p className="text-sm text-gray-500 mb-4">{category.items} available</p>
                <ActionButton variant="outline" fullWidth>
                  Browse {category.category}
                </ActionButton>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Authentication & Verification</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-gray-900 mb-3">Verify Product Authenticity</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Scan the QR code or enter the batch number on your input package to verify authenticity.
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter batch/lot number"
                  />
                  <ActionButton variant="primary">
                    Verify
                  </ActionButton>
                </div>
              </div>
              <div>
                <h4 className="text-gray-900 mb-3">Supplier Certifications</h4>
                <div className="space-y-2 text-sm">
                  {[
                    'Ethiopian Seed Enterprise Certification',
                    'Ministry of Agriculture License',
                    'ISO 9001 Quality Management',
                    'Laboratory Test Certificates',
                    'Import Permits (for imported inputs)'
                  ].map((cert) => (
                    <div key={cert} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">✓</span>
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}