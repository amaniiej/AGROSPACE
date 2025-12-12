import { useState } from 'react';
import { Tractor, Phone, MapPin, Calendar, DollarSign, Search } from 'lucide-react';
import { ActionButton } from '../shared/ActionButton';

export function RentMyTractor() {
  const [selectedMachine, setSelectedMachine] = useState<any>(null);
  const [searchLocation, setSearchLocation] = useState('');

  const tractors = [
    {
      id: 1,
      type: 'Medium Tractor (75 HP)',
      owner: 'Ato Bekele Teshome',
      location: 'Addis Ababa, Bole',
      phone: '+251-911-234567',
      dailyRate: '3,500 ETB',
      weeklyRate: '20,000 ETB',
      availability: 'Available',
      services: ['Plowing', 'Harrowing', 'Ridging', 'Transport'],
      operatorIncluded: true,
      fuelIncluded: false,
      minRental: '1 day',
      description: 'Well-maintained Massey Ferguson tractor with experienced operator. Suitable for all field operations.'
    },
    {
      id: 2,
      type: 'Large Tractor (100 HP)',
      owner: 'Ato Girma Alemu',
      location: 'Debre Zeit',
      phone: '+251-913-345678',
      dailyRate: '4,500 ETB',
      weeklyRate: '28,000 ETB',
      availability: 'Available',
      services: ['Deep Plowing', 'Subsoiling', 'Heavy Transport'],
      operatorIncluded: true,
      fuelIncluded: false,
      minRental: '1 day',
      description: 'High-power tractor for heavy-duty work. Ideal for large fields and tough soil conditions.'
    },
    {
      id: 3,
      type: 'Mini Tractor (35 HP)',
      owner: 'W/ro Almaz Hailu',
      location: 'Mekelle',
      phone: '+251-917-456789',
      dailyRate: '2,000 ETB',
      weeklyRate: '12,000 ETB',
      availability: 'Busy - Available from Dec 15',
      services: ['Light Plowing', 'Transport', 'Vegetable Farming'],
      operatorIncluded: true,
      fuelIncluded: true,
      minRental: '1 day',
      description: 'Compact tractor perfect for small plots and vegetable farms. Fuel included in rental price.'
    },
    {
      id: 4,
      type: 'Combine Harvester',
      owner: 'Shewa Farmers Union',
      location: 'Shewa Zone',
      phone: '+251-914-567890',
      dailyRate: '8,000 ETB',
      weeklyRate: '50,000 ETB',
      availability: 'Available',
      services: ['Wheat Harvesting', 'Barley Harvesting', 'Teff Harvesting'],
      operatorIncluded: true,
      fuelIncluded: false,
      minRental: '1 day',
      description: 'Modern combine harvester for efficient cereal harvesting. Experienced operator included.'
    },
    {
      id: 5,
      type: 'Disc Harrow (Standalone)',
      owner: 'Ato Mulugeta Assefa',
      location: 'Bahir Dar',
      phone: '+251-918-678901',
      dailyRate: '1,200 ETB',
      weeklyRate: '7,000 ETB',
      availability: 'Available',
      services: ['Seedbed Preparation', 'Weed Control'],
      operatorIncluded: false,
      fuelIncluded: false,
      minRental: '1 day',
      description: 'Disc harrow attachment. Can be used with your own tractor or rented with our tractor.'
    },
    {
      id: 6,
      type: 'Rotavator',
      owner: 'Farm Equipment Services',
      location: 'Jimma',
      phone: '+251-919-789012',
      dailyRate: '2,800 ETB',
      weeklyRate: '16,000 ETB',
      availability: 'Available',
      services: ['Fine Seedbed Prep', 'Mixing Soil & Fertilizer'],
      operatorIncluded: true,
      fuelIncluded: false,
      minRental: '1 day',
      description: 'Rotavator with tractor. Creates fine seedbed in one pass. Perfect for vegetable production.'
    }
  ];

  const filteredTractors = tractors.filter(tractor =>
    searchLocation === '' || tractor.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Rent My Tractor</h2>
        <p className="text-gray-600">
          Find and rent tractors and agricultural machinery in your area
        </p>
      </div>

      {/* Search by Location */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <input
            type="text"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            placeholder="Search by location (e.g., Addis Ababa, Debre Zeit)..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-900 mb-4">How Tractor Rental Works</h3>
        <div className="grid md:grid-cols-4 gap-4 text-sm text-blue-800">
          <div>
            <h4 className="text-blue-900 mb-2">1. Browse Listings</h4>
            <p>Find tractors available in your area with rates and services.</p>
          </div>
          <div>
            <h4 className="text-blue-900 mb-2">2. Contact Owner</h4>
            <p>Call or message the owner to confirm availability and details.</p>
          </div>
          <div>
            <h4 className="text-blue-900 mb-2">3. Book Service</h4>
            <p>Agree on dates, duration, and services needed.</p>
          </div>
          <div>
            <h4 className="text-blue-900 mb-2">4. Get Work Done</h4>
            <p>Operator comes to your farm with equipment on scheduled date.</p>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">{filteredTractors.length} machines available</p>
      </div>

      {/* Tractor Listings */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredTractors.map((tractor) => (
          <div
            key={tractor.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Tractor className="size-10 text-blue-600" />
                  <div>
                    <h3 className="text-gray-900">{tractor.type}</h3>
                    <p className="text-sm text-gray-600">{tractor.owner}</p>
                  </div>
                </div>
                <span className={`
                  px-3 py-1 rounded-full text-sm
                  ${tractor.availability === 'Available' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}
                `}>
                  {tractor.availability}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <MapPin className="size-4" />
                {tractor.location}
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Daily Rate:</span>
                  <span className="text-blue-600">{tractor.dailyRate}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Weekly Rate:</span>
                  <span className="text-blue-600">{tractor.weeklyRate}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Min. Rental:</span>
                  <span className="text-gray-900">{tractor.minRental}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Services Offered:</p>
                <div className="flex flex-wrap gap-2">
                  {tractor.services.map((service, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm">
                <div className={`flex items-center gap-1 ${tractor.operatorIncluded ? 'text-green-600' : 'text-gray-500'}`}>
                  {tractor.operatorIncluded ? '✓' : '✗'} Operator Included
                </div>
                <div className={`flex items-center gap-1 ${tractor.fuelIncluded ? 'text-green-600' : 'text-gray-500'}`}>
                  {tractor.fuelIncluded ? '✓' : '✗'} Fuel Included
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{tractor.description}</p>

              <div className="flex gap-2">
                <ActionButton
                  variant="outline"
                  icon={Phone}
                  onClick={() => setSelectedMachine(tractor)}
                >
                  Contact
                </ActionButton>
                <ActionButton
                  variant="primary"
                  icon={Calendar}
                  onClick={() => setSelectedMachine(tractor)}
                  fullWidth
                >
                  Book Now
                </ActionButton>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact/Booking Modal */}
      {selectedMachine && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedMachine(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-gray-900">Book Tractor Rental</h3>
              <button onClick={() => setSelectedMachine(null)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Tractor className="size-10 text-blue-600" />
                  <div>
                    <h4 className="text-gray-900">{selectedMachine.type}</h4>
                    <p className="text-gray-600">{selectedMachine.owner}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="text-gray-900 mb-3">Owner Contact Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="text-gray-900">{selectedMachine.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <a href={`tel:${selectedMachine.phone}`} className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                        <Phone className="size-4" />
                        {selectedMachine.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="text-blue-900 mb-2">Rental Rates</h4>
                  <div className="space-y-1 text-sm text-blue-800">
                    <div className="flex items-center justify-between">
                      <span>Daily:</span>
                      <span className="text-blue-900">{selectedMachine.dailyRate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Weekly:</span>
                      <span className="text-blue-900">{selectedMachine.weeklyRate}</span>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Your Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., +251-911-123456"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Start Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Duration</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>1 day</option>
                      <option>2 days</option>
                      <option>3 days</option>
                      <option>1 week</option>
                      <option>2 weeks</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Services Needed</label>
                  <div className="space-y-2">
                    {selectedMachine.services.map((service: string, index: number) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="size-4 text-blue-600 rounded focus:ring-blue-500" />
                        <span className="text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Additional Notes</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Specify your field location, area size, any special requirements..."
                  />
                </div>
                <ActionButton type="submit" variant="primary" fullWidth>
                  Submit Booking Request
                </ActionButton>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Add Your Tractor */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <Tractor className="size-12 text-green-600 flex-shrink-0" />
          <div>
            <h3 className="text-green-900 mb-2">Have a tractor? List it here!</h3>
            <p className="text-green-800 mb-4">
              Earn extra income by renting out your tractor and equipment when not in use. 
              Connect directly with farmers in your area who need mechanization services.
            </p>
            <ActionButton variant="primary">
              List My Tractor
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}
