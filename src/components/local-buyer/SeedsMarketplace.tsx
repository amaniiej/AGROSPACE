import { useState } from 'react';
import { Sprout, Search, Filter, ShieldCheck, Leaf } from 'lucide-react';
import { ActionButton } from '../shared/ActionButton';
import { VerifiedBadge } from '../shared/VerifiedBadge';

export function SeedsMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Staple Cereals',
    'Legumes',
    'Oilseeds',
    'Coffee Specialized Seeds',
    'Chemical Fertilizers',
    'Bio-fertilizers and Amendments',
    'Pesticides and Herbicides',
    'Fungicides',
    'Biological Control',
    'Planting/Seeding Tools',
    'Measurement Equipment'
  ];

  const products = [
    // Seeds
    {
      id: 1,
      name: 'Teff Seed - Quncho Variety',
      category: 'Staple Cereals',
      type: 'seed',
      price: '450 ETB/kg',
      supplier: 'Ethiopian Seed Enterprise',
      germination: '95%',
      purity: '99%',
      certified: true,
      qualityTrust: 'Government Certified',
      description: 'Improved teff variety with high yield potential (2.5-3 tons/ha). Early maturity.'
    },
    {
      id: 2,
      name: 'Wheat Seed - Digelu',
      category: 'Staple Cereals',
      type: 'seed',
      price: '35 ETB/kg',
      supplier: 'Amhara Seed Enterprise',
      germination: '92%',
      purity: '98%',
      certified: true,
      qualityTrust: 'Regional Certified',
      description: 'Bread wheat variety suitable for highland areas. Resistant to rust diseases.'
    },
    {
      id: 3,
      name: 'Maize Hybrid - BH-661',
      category: 'Staple Cereals',
      type: 'seed',
      price: '280 ETB/kg',
      supplier: 'Pioneer Seeds Ethiopia',
      germination: '96%',
      purity: '99%',
      certified: true,
      qualityTrust: 'International Standard',
      description: 'High-yielding hybrid maize (8-10 tons/ha). Good for mid to low altitude.'
    },
    {
      id: 4,
      name: 'Chickpea Seed - Arerti',
      category: 'Legumes',
      type: 'seed',
      price: '85 ETB/kg',
      supplier: 'Debre Zeit Research Center',
      germination: '90%',
      purity: '98%',
      certified: true,
      qualityTrust: 'Research Institute Certified',
      description: 'Kabuli type chickpea. Export quality. High market demand.'
    },
    {
      id: 5,
      name: 'Haricot Bean - Hawassa Dume',
      category: 'Legumes',
      type: 'seed',
      price: '65 ETB/kg',
      supplier: 'Southern Seed Enterprise',
      germination: '91%',
      purity: '97%',
      certified: true,
      qualityTrust: 'Government Certified',
      description: 'White pea bean. Good cooking quality. Suitable for export.'
    },
    {
      id: 6,
      name: 'Sesame Seed - Humera-1',
      category: 'Oilseeds',
      type: 'seed',
      price: '120 ETB/kg',
      supplier: 'Tigray Agricultural Research',
      germination: '88%',
      purity: '96%',
      certified: true,
      qualityTrust: 'Research Verified',
      description: 'White sesame variety. High oil content. Well adapted to lowland areas.'
    },
    {
      id: 7,
      name: 'Coffee Seedlings - 74110 Variety',
      category: 'Coffee Specialized Seeds',
      type: 'seed',
      price: '12 ETB/seedling',
      supplier: 'Jimma Agricultural Research Center',
      germination: 'N/A',
      purity: '100%',
      certified: true,
      qualityTrust: 'JARC Certified',
      description: 'Disease-resistant arabica coffee. 6-month seedlings ready for transplanting.'
    },
    {
      id: 8,
      name: 'Coffee Seedlings - 7440 Variety',
      category: 'Coffee Specialized Seeds',
      type: 'seed',
      price: '12 ETB/seedling',
      supplier: 'Sidama Coffee Development',
      germination: 'N/A',
      purity: '100%',
      certified: true,
      qualityTrust: 'Regional Certified',
      description: 'High-yielding arabica variety. Good cup quality. Suitable for mid-altitude.'
    },
    // Fertilizers
    {
      id: 9,
      name: 'Urea (46% N)',
      category: 'Chemical Fertilizers',
      type: 'fertilizer',
      price: '1,850 ETB/50kg',
      supplier: 'National Fertilizer Corporation',
      composition: '46-0-0',
      certified: true,
      qualityTrust: 'ISO Certified',
      description: 'Nitrogen fertilizer for all crops. Apply at planting and top-dressing.'
    },
    {
      id: 10,
      name: 'DAP (Diammonium Phosphate)',
      category: 'Chemical Fertilizers',
      type: 'fertilizer',
      price: '2,100 ETB/50kg',
      supplier: 'National Fertilizer Corporation',
      composition: '18-46-0',
      certified: true,
      qualityTrust: 'ISO Certified',
      description: 'Phosphorus-rich fertilizer. Essential for root development and flowering.'
    },
    {
      id: 11,
      name: 'Compost - Organic',
      category: 'Bio-fertilizers and Amendments',
      type: 'fertilizer',
      price: '450 ETB/50kg',
      supplier: 'Organic Farm Supplies',
      composition: 'Organic matter',
      certified: true,
      qualityTrust: 'Organic Certified',
      description: 'Mature compost from plant materials. Improves soil structure and fertility.'
    },
    {
      id: 12,
      name: 'Biochar Soil Amendment',
      category: 'Bio-fertilizers and Amendments',
      type: 'fertilizer',
      price: '680 ETB/25kg',
      supplier: 'GreenTech Solutions',
      composition: 'Charcoal-based',
      certified: false,
      qualityTrust: 'Lab Tested',
      description: 'Increases soil carbon content. Improves water retention and nutrient availability.'
    },
    // Crop Protection
    {
      id: 13,
      name: 'Malathion 50% EC',
      category: 'Pesticides and Herbicides',
      type: 'pesticide',
      price: '850 ETB/liter',
      supplier: 'AgroChem Ethiopia',
      activeIngredient: 'Malathion 50%',
      certified: true,
      qualityTrust: 'MoA Approved',
      description: 'Broad-spectrum insecticide for aphids, mites, and other pests. Use with caution.'
    },
    {
      id: 14,
      name: '2,4-D Herbicide',
      category: 'Pesticides and Herbicides',
      type: 'pesticide',
      price: '620 ETB/liter',
      supplier: 'Crop Protection Ltd',
      activeIngredient: '2,4-D Amine',
      certified: true,
      qualityTrust: 'MoA Approved',
      description: 'Post-emergence herbicide for broadleaf weeds in cereals.'
    },
    {
      id: 15,
      name: 'Mancozeb 80% WP',
      category: 'Fungicides',
      type: 'pesticide',
      price: '950 ETB/kg',
      supplier: 'Plant Health Solutions',
      activeIngredient: 'Mancozeb 80%',
      certified: true,
      qualityTrust: 'MoA Approved',
      description: 'Contact fungicide for blight, rust, and other fungal diseases.'
    },
    {
      id: 16,
      name: 'Trichoderma (Bio-fungicide)',
      category: 'Biological Control',
      type: 'biocontrol',
      price: '1,200 ETB/kg',
      supplier: 'BioControl Ethiopia',
      activeIngredient: 'Trichoderma spp.',
      certified: true,
      qualityTrust: 'Organic Certified',
      description: 'Biological control agent for soil-borne diseases. Safe and eco-friendly.'
    },
    // Tools
    {
      id: 17,
      name: 'Hand Seed Planter',
      category: 'Planting/Seeding Tools',
      type: 'tool',
      price: '850 ETB',
      supplier: 'Farm Tools Supply',
      certified: false,
      qualityTrust: 'Quality Tested',
      description: 'Manual precision planter for small seeds. Adjustable depth and spacing.'
    },
    {
      id: 18,
      name: 'Digital Soil pH Meter',
      category: 'Measurement Equipment',
      type: 'tool',
      price: '1,450 ETB',
      supplier: 'AgroTech Instruments',
      certified: false,
      qualityTrust: 'Calibrated',
      description: 'Accurate soil pH measurement. Essential for proper fertilizer application.'
    },
    {
      id: 19,
      name: 'Moisture Meter (Grain)',
      category: 'Measurement Equipment',
      type: 'tool',
      price: '2,800 ETB',
      supplier: 'Quality Control Equipment',
      certified: false,
      qualityTrust: 'Factory Calibrated',
      description: 'Digital moisture meter for grains. Ensures proper storage moisture levels.'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Seeds & Inputs Marketplace</h2>
        <p className="text-gray-600">
          Purchase certified seeds, fertilizers, crop protection products, and farming tools
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
              placeholder="Search seeds, fertilizers, tools..."
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
        <p className="text-gray-600">{filteredProducts.length} products available</p>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              {product.type === 'seed' && <Sprout className="size-10 text-green-600" />}
              {product.type === 'fertilizer' && <Leaf className="size-10 text-amber-600" />}
              {product.type === 'pesticide' && <ShieldCheck className="size-10 text-red-600" />}
              {product.type === 'biocontrol' && <Leaf className="size-10 text-green-600" />}
              {product.type === 'tool' && <Filter className="size-10 text-gray-600" />}
              
              {product.certified && (
                <VerifiedBadge status="verified" size="sm" />
              )}
            </div>
            
            <h4 className="text-gray-900 mb-2">{product.name}</h4>
            <p className="text-sm text-gray-600 mb-3">{product.category}</p>
            
            {/* Product Specs */}
            <div className="space-y-2 mb-4 text-sm">
              {product.germination && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Germination:</span>
                  <span className="text-gray-900">{product.germination}</span>
                </div>
              )}
              {product.purity && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Purity:</span>
                  <span className="text-gray-900">{product.purity}</span>
                </div>
              )}
              {product.composition && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Composition:</span>
                  <span className="text-gray-900">{product.composition}</span>
                </div>
              )}
              {product.activeIngredient && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Active:</span>
                  <span className="text-gray-900 text-xs">{product.activeIngredient}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Quality:</span>
                <span className="text-green-700 text-xs">{product.qualityTrust}</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

            <div className="pt-4 border-t border-gray-200 mb-4">
              <p className="text-sm text-gray-600">Supplier</p>
              <p className="text-gray-900">{product.supplier}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xl text-blue-600">{product.price}</p>
              <ActionButton variant="primary">
                Order
              </ActionButton>
            </div>
          </div>
        ))}
      </div>

      {/* Quality and Trust Information */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-green-900 mb-4 flex items-center gap-2">
          <ShieldCheck className="size-5" />
          Quality and Trust Standards
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-green-800">
          <div>
            <h4 className="text-green-900 mb-2">Government Certified</h4>
            <p>Seeds tested and approved by Ethiopian Seed Enterprise or Ministry of Agriculture</p>
          </div>
          <div>
            <h4 className="text-green-900 mb-2">Research Verified</h4>
            <p>Varieties developed and tested by national agricultural research centers</p>
          </div>
          <div>
            <h4 className="text-green-900 mb-2">Quality Tested</h4>
            <p>Products meet national quality standards for purity, germination, and efficacy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
