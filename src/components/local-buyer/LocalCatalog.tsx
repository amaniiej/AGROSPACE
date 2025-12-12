import { useState } from 'react';
import { Search, Filter, MapPin, Package, Truck } from 'lucide-react';
import { mockProducts } from '../../data/mockData';
import { StarRating } from '../shared/StarRating';
import { VerifiedBadge } from '../shared/VerifiedBadge';
import { ActionButton } from '../shared/ActionButton';

export function LocalCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    region: '',
    immediateStock: false,
    category: ''
  });
  const [showFilters, setShowFilters] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<typeof mockProducts[0] | null>(null);

  const regions = ['All', 'Sidama', 'Shewa', 'Oromia', 'Tigray', 'Amhara', 'Kaffa'];
  const categories = ['All', 'Coffee', 'Grains', 'Legumes', 'Seeds', 'Spices'];

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = !filters.region || filters.region === 'All' || product.location.includes(filters.region);
    const matchesCategory = !filters.category || filters.category === 'All' || product.category === filters.category;
    const matchesStock = !filters.immediateStock || product.quantity > 0;

    return matchesSearch && matchesRegion && matchesCategory && matchesStock;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Browse Local Stock</h2>
        <p className="text-gray-600">Find immediately available products from verified producers in your region</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-6 py-3 border rounded-lg transition-colors ${
              showFilters ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Filter className="size-5" />
            Filters
          </button>
        </div>

        {/* Local Buyer Specific Filters */}
        {showFilters && (
          <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Region (main_location)</label>
              <select
                value={filters.region}
                onChange={(e) => setFilters({ ...filters, region: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {regions.map(region => <option key={region} value={region}>{region}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Category</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:bg-gray-50 w-full">
                <input
                  type="checkbox"
                  checked={filters.immediateStock}
                  onChange={(e) => setFilters({ ...filters, immediateStock: e.target.checked })}
                  className="size-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Immediate Stock Only</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">{filteredProducts.length} products available</p>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Package className="size-4" />
          <span>Showing immediate availability</span>
        </div>
      </div>

      {/* Product List */}
      <div className="space-y-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-6">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="size-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-gray-900 mb-1">{product.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="size-4" />
                        {product.location}
                      </span>
                      <span>•</span>
                      <span>{product.category}</span>
                      <span>•</span>
                      <span className="text-green-600">{product.quantity} {product.unit} available</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl text-gray-900 mb-1">{product.price} {product.currency}</p>
                    <p className="text-sm text-gray-600">per {product.unit}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

                {/* Seller Info with Trust Display */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Seller</p>
                      <p className="text-gray-900">{product.seller.name}</p>
                    </div>
                    <VerifiedBadge 
                      status={product.seller.verified ? 'verified' : 'unverified'} 
                      size="sm" 
                    />
                    <div>
                      <p className="text-sm text-gray-600">Rating</p>
                      <StarRating rating={product.seller.rating} size="sm" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Quality</p>
                    <p className="text-gray-900">{product.qualityGrade}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <ActionButton 
                    variant="primary" 
                    onClick={() => setSelectedProduct(product)}
                  >
                    Contact Seller
                  </ActionButton>
                  <ActionButton 
                    variant="outline" 
                    icon={Truck}
                  >
                    Estimate Transport
                  </ActionButton>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">
                    View Price History
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-gray-900">Contact Seller</h3>
              <button onClick={() => setSelectedProduct(null)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-gray-900 mb-2">{selectedProduct.title}</h4>
                <p className="text-gray-600">From: {selectedProduct.seller.name}</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Quantity Needed (kg)</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={`Max available: ${selectedProduct.quantity}`}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Delivery Location</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your delivery address"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message to Seller</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Include any specific requirements or questions..."
                  />
                </div>
                <ActionButton type="submit" variant="primary" fullWidth>
                  Send Inquiry
                </ActionButton>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
