import { useState } from 'react';
import { Plus, Package, Edit, Trash2 } from 'lucide-react';
import { ActionButton } from '../shared/ActionButton';
import { FileUpload } from '../shared/FileUpload';
import { mockProducts } from '../../data/mockData';
import { StarRating } from '../shared/StarRating';

export function ProductListing() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    quantity: '',
    location: '',
    description: '',
    certification: [] as string[],
    image: null as File | null
  });

  // Filter to only show producer's products (mock: first 3)
  const myProducts = mockProducts.slice(0, 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAddForm(false);
    setFormData({
      title: '',
      category: '',
      price: '',
      quantity: '',
      location: '',
      description: '',
      certification: [],
      image: null
    });
  };

  const categories = ['Coffee', 'Grains', 'Legumes', 'Seeds', 'Spices'];
  const certifications = ['Organic', 'Fair Trade', 'ISO Certified', 'Rainforest Alliance'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">My Products</h2>
          <p className="text-gray-600">Manage your product catalog</p>
        </div>
        <ActionButton
          onClick={() => setShowAddForm(!showAddForm)}
          variant="primary"
          icon={Plus}
        >
          Add Product
        </ActionButton>
      </div>

      {/* Add Product Form */}
      {showAddForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <h3 className="text-gray-900">Add New Product</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">
                Product Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., Premium Arabica Coffee"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Price (ETB per kg) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., 4500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Quantity in Stock (kg) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., 500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., Sidama, Ethiopia"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Certifications</label>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <label key={cert} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.certification.includes(cert)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, certification: [...formData.certification, cert] });
                        } else {
                          setFormData({ ...formData, certification: formData.certification.filter(c => c !== cert) });
                        }
                      }}
                      className="size-4 text-green-600 rounded focus:ring-green-500"
                    />
                    <span className="text-gray-700">{cert}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Describe your product quality, processing method, etc."
            />
          </div>

          <FileUpload
            label="Product Images"
            accept="image/*"
            helpText="JPG or PNG (Max 5MB)"
            onChange={(file) => setFormData({ ...formData, image: file })}
          />

          <div className="flex gap-4">
            <ActionButton type="submit" variant="primary" icon={Package}>
              Add Product
            </ActionButton>
            <ActionButton 
              type="button" 
              variant="outline" 
              onClick={() => setShowAddForm(false)}
            >
              Cancel
            </ActionButton>
          </div>
        </form>
      )}

      {/* Products List */}
      <div className="space-y-4">
        <h3 className="text-gray-900">Current Listings ({myProducts.length})</h3>
        
        {myProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-6">
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
                      <span>{product.category}</span>
                      <span>•</span>
                      <span>{product.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <Edit className="size-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="size-5" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="text-gray-900">{product.price} {product.currency}/kg</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">In Stock</p>
                    <p className="text-gray-900">{product.quantity} {product.unit}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Rating</p>
                    <StarRating rating={product.rating} size="sm" showCount count={product.reviewCount} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Quality</p>
                    <p className="text-gray-900">{product.qualityGrade}</p>
                  </div>
                </div>

                {product.certification.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {product.certification.map((cert) => (
                      <span 
                        key={cert} 
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
