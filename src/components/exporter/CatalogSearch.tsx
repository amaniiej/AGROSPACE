import { useState } from 'react';
import { Search, Filter, MapPin, Award } from 'lucide-react';
import { mockProducts } from '../../data/mockData';
import { StarRating } from '../shared/StarRating';
import { VerifiedBadge } from '../shared/VerifiedBadge';
import { ActionButton } from '../shared/ActionButton';

export function CatalogSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    region: '',
    certification: '',
    qualityGrade: '',
    verifiedOnly: false
  });
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof mockProducts[0] | null>(null);

  const categories = ['All', 'Coffee', 'Grains', 'Legumes', 'Seeds', 'Spices'];
  const regions = ['All', 'Sidama', 'Shewa', 'Oromia', 'Tigray', 'Amhara', 'Kaffa'];
  const certifications = ['All', 'Organic', 'Fair Trade', 'ISO Certified', 'Rainforest Alliance'];
  const qualityGrades = ['All', 'Grade 1', 'Grade 2', 'Grade 3'];

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filters.category || filters.category === 'All' || product.category === filters.category;
    const matchesRegion = !filters.region || filters.region === 'All' || product.location.includes(filters.region);
    const matchesCertification = !filters.certification || filters.certification === 'All' || 
                                 product.certification.includes(filters.certification);
    const matchesGrade = !filters.qualityGrade || filters.qualityGrade === 'All' || product.qualityGrade === filters.qualityGrade;
    const matchesVerified = !filters.verifiedOnly || product.seller.verified;

    return matchesSearch && matchesCategory && matchesRegion && matchesCertification && matchesGrade && matchesVerified;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Product Catalog</h2>
        <p className="text-gray-600">Search and discover verified agricultural products</p>
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
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-6 py-3 border rounded-lg transition-colors ${
              showFilters ? 'bg-green-50 border-green-500 text-green-700' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Filter className="size-5" />
            Filters
          </button>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="grid md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Category</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Region</label>
              <select
                value={filters.region}
                onChange={(e) => setFilters({ ...filters, region: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {regions.map(region => <option key={region} value={region}>{region}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Certification</label>
              <select
                value={filters.certification}
                onChange={(e) => setFilters({ ...filters, certification: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {certifications.map(cert => <option key={cert} value={cert}>{cert}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Quality Grade</label>
              <select
                value={filters.qualityGrade}
                onChange={(e) => setFilters({ ...filters, qualityGrade: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {qualityGrades.map(grade => <option key={grade} value={grade}>{grade}</option>)}
              </select>
            </div>
            <div className="md:col-span-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.verifiedOnly}
                  onChange={(e) => setFilters({ ...filters, verifiedOnly: e.target.checked })}
                  className="size-4 text-green-600 rounded focus:ring-green-500"
                />
                <span className="text-sm text-gray-700">Show only verified sellers</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">{filteredProducts.length} products found</p>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-gray-900 mb-2">{product.title}</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <MapPin className="size-4" />
                {product.location}
              </div>

              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-2xl text-gray-900">{product.price} {product.currency}</p>
                  <p className="text-sm text-gray-600">per {product.unit}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Available</p>
                  <p className="text-gray-900">{product.quantity} {product.unit}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-200">
                <StarRating rating={product.rating} size="sm" showCount count={product.reviewCount} />
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                  {product.qualityGrade}
                </span>
              </div>

              {/* Seller Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Seller</p>
                  <p className="text-sm text-gray-900">{product.seller.name}</p>
                </div>
                <VerifiedBadge 
                  status={product.seller.verified ? 'verified' : 'unverified'} 
                  size="sm" 
                  showLabel={false} 
                />
              </div>

              {/* Certifications */}
              {product.certification.length > 0 && (
                <div className="mt-3 flex gap-2 flex-wrap">
                  {product.certification.map((cert) => (
                    <span 
                      key={cert} 
                      className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs flex items-center gap-1"
                    >
                      <Award className="size-3" />
                      {cert}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h3 className="text-gray-900">{selectedProduct.title}</h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.title}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div>
                  <div className="mb-4">
                    <p className="text-3xl text-gray-900 mb-1">{selectedProduct.price} {selectedProduct.currency}</p>
                    <p className="text-gray-600">per {selectedProduct.unit}</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-5 text-gray-400" />
                      <span className="text-gray-700">{selectedProduct.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="size-5 text-gray-400" />
                      <span className="text-gray-700">{selectedProduct.qualityGrade}</span>
                    </div>
                    <div>
                      <StarRating rating={selectedProduct.rating} size="md" showCount count={selectedProduct.reviewCount} />
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="text-gray-900 mb-2">Seller Information</h4>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-900">{selectedProduct.seller.name}</p>
                        <StarRating rating={selectedProduct.seller.rating} size="sm" />
                      </div>
                      <VerifiedBadge status={selectedProduct.seller.verified ? 'verified' : 'unverified'} />
                    </div>
                  </div>
                  <ActionButton variant="primary" fullWidth>
                    Contact Seller
                  </ActionButton>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-gray-900 mb-2">Description</h4>
                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                {selectedProduct.certification.length > 0 && (
                  <div>
                    <h4 className="text-gray-900 mb-2">Certifications</h4>
                    <div className="flex gap-2 flex-wrap">
                      {selectedProduct.certification.map((cert) => (
                        <span key={cert} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
