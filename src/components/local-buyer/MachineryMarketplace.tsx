import { useState } from 'react';
import { Wrench, Search, Filter, Phone, MapPin } from 'lucide-react';
import { ActionButton } from '../shared/ActionButton';

export function MachineryMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMachine, setSelectedMachine] = useState<any>(null);

  const categories = [
    'All',
    'Cereal and Oilseed Processing',
    'Milling and Flour Equipment',
    'Oil Presses',
    'Animal Feed Processing',
    'Grinding/Chopping Equipment',
    'Coffee Processing',
    'Sugar and Beer Processing',
    'Fruit and Vegetable Processing',
    'Drying and Storage'
  ];

  const machinery = [
    {
      id: 1,
      name: 'Multi-Crop Thresher',
      category: 'Cereal and Oilseed Processing',
      price: '125,000 ETB',
      supplier: 'AgriTech Ethiopia',
      location: 'Addis Ababa',
      phone: '+251-911-234567',
      capacity: '500-800 kg/hr',
      power: '15 HP Diesel',
      description: 'Suitable for wheat, barley, teff, and other cereals. Adjustable settings for different grain sizes.',
      availability: 'In Stock',
      warranty: '2 years'
    },
    {
      id: 2,
      name: 'Hammer Mill (Large Capacity)',
      category: 'Milling and Flour Equipment',
      price: '85,000 ETB',
      supplier: 'Milling Solutions Ltd',
      location: 'Bahir Dar',
      phone: '+251-918-345678',
      capacity: '1000 kg/hr',
      power: '20 HP Electric',
      description: 'High-capacity flour milling for commercial operations. Produces fine flour from various grains.',
      availability: 'In Stock',
      warranty: '1 year'
    },
    {
      id: 3,
      name: 'Sesame Oil Press',
      category: 'Oil Presses',
      price: '95,000 ETB',
      supplier: 'Ethiopian Oil Equipment',
      location: 'Humera',
      phone: '+251-920-456789',
      capacity: '60-80 kg/hr',
      power: '7.5 HP Electric',
      description: 'Cold press for sesame, niger seed, and other oilseeds. High oil extraction rate.',
      availability: 'In Stock',
      warranty: '18 months'
    },
    {
      id: 4,
      name: 'Feed Pellet Mill',
      category: 'Animal Feed Processing',
      price: '145,000 ETB',
      supplier: 'Livestock Feed Systems',
      location: 'Addis Ababa',
      phone: '+251-911-567890',
      capacity: '300-500 kg/hr',
      power: '22 HP Diesel',
      description: 'Produces high-quality feed pellets for cattle, poultry, and other livestock.',
      availability: 'Order',
      warranty: '2 years'
    },
    {
      id: 5,
      name: 'Multi-Purpose Chopper',
      category: 'Grinding/Chopping Equipment',
      price: '42,000 ETB',
      supplier: 'Farm Equipment Co',
      location: 'Mekelle',
      phone: '+251-914-678901',
      capacity: '400 kg/hr',
      power: '5 HP Electric',
      description: 'Chops green fodder, maize stalks, and other materials for animal feed.',
      availability: 'In Stock',
      warranty: '1 year'
    },
    {
      id: 6,
      name: 'Coffee Pulper (Disc Type)',
      category: 'Coffee Processing',
      price: '78,000 ETB',
      supplier: 'Coffee Tech Ethiopia',
      location: 'Jimma',
      phone: '+251-917-789012',
      capacity: '500 kg/hr',
      power: '3 HP Electric',
      description: 'Removes coffee cherry skin. Adjustable for different coffee varieties.',
      availability: 'In Stock',
      warranty: '2 years'
    },
    {
      id: 7,
      name: 'Coffee Huller Machine',
      category: 'Coffee Processing',
      price: '165,000 ETB',
      supplier: 'Sidama Coffee Equipment',
      location: 'Hawassa',
      phone: '+251-913-890123',
      capacity: '800 kg/hr',
      power: '15 HP Diesel/Electric',
      description: 'Removes parchment from dry coffee. Complete with grading screen.',
      availability: 'In Stock',
      warranty: '2 years'
    },
    {
      id: 8,
      name: 'Fruit Pulping Machine',
      category: 'Fruit and Vegetable Processing',
      price: '67,000 ETB',
      supplier: 'Fresh Produce Tech',
      location: 'Addis Ababa',
      phone: '+251-919-901234',
      capacity: '300 kg/hr',
      power: '5 HP Electric',
      description: 'Extracts pulp from tomatoes, mangoes, papayas, and other fruits.',
      availability: 'In Stock',
      warranty: '1 year'
    },
    {
      id: 9,
      name: 'Solar Grain Dryer (10 Ton)',
      category: 'Drying and Storage',
      price: '185,000 ETB',
      supplier: 'Solar Agri Solutions',
      location: 'Debre Zeit',
      phone: '+251-912-012345',
      capacity: '10 tons',
      power: 'Solar + Backup Electric',
      description: 'Energy-efficient grain drying. Reduces moisture to safe storage levels.',
      availability: 'Order',
      warranty: '3 years'
    },
    {
      id: 10,
      name: 'Hermetic Storage Bags (50 units)',
      category: 'Drying and Storage',
      price: '12,500 ETB',
      supplier: 'Post-Harvest Solutions',
      location: 'Addis Ababa',
      phone: '+251-916-123456',
      capacity: '100 kg per bag',
      power: 'N/A',
      description: 'Airtight storage bags prevent pest infestation and maintain grain quality.',
      availability: 'In Stock',
      warranty: 'N/A'
    }
  ];

  const filteredMachinery = machinery.filter(machine => {
    const matchesCategory = selectedCategory === 'All' || machine.category === selectedCategory;
    const matchesSearch = machine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         machine.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Machinery Marketplace</h2>
        <p className="text-gray-600">
          Browse and purchase agricultural processing equipment and machinery
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search machinery..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            <Filter className="inline size-4 mr-1" />
            Filter by Category
          </label>
          <div className="flex gap-2 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 rounded-lg text-sm transition-colors
                  ${selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">{filteredMachinery.length} machines available</p>
        <p className="text-sm text-gray-600">Category: {selectedCategory}</p>
      </div>

      {/* Machinery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMachinery.map((machine) => (
          <div
            key={machine.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <Wrench className="size-10 text-blue-600" />
                <span className={`
                  px-3 py-1 rounded-full text-sm
                  ${machine.availability === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}
                `}>
                  {machine.availability}
                </span>
              </div>
              
              <h3 className="text-gray-900 mb-2">{machine.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{machine.category}</p>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Capacity:</span>
                  <span className="text-gray-900">{machine.capacity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Power:</span>
                  <span className="text-gray-900">{machine.power}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Warranty:</span>
                  <span className="text-gray-900">{machine.warranty}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{machine.description}</p>

              <div className="pt-4 border-t border-gray-200 mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Supplier:</span>
                  <span className="text-gray-900">{machine.supplier}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin className="size-4" />
                  {machine.location}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-2xl text-blue-600">{machine.price}</p>
                <ActionButton 
                  variant="primary" 
                  onClick={() => setSelectedMachine(machine)}
                >
                  Contact
                </ActionButton>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Modal */}
      {selectedMachine && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedMachine(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-gray-900">Contact Supplier</h3>
              <button onClick={() => setSelectedMachine(null)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-gray-900 mb-2">{selectedMachine.name}</h4>
                <p className="text-gray-600 mb-1">{selectedMachine.description}</p>
                <p className="text-2xl text-blue-600 mt-3">{selectedMachine.price}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="text-gray-900 mb-3">Supplier Information</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Company:</span>
                    <span className="text-gray-900">{selectedMachine.supplier}</span>
                  </div>
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

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Your Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Interested in purchasing this machinery. Please provide more details..."
                  />
                </div>
                <ActionButton type="button" variant="primary" fullWidth>
                  Send Inquiry
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
