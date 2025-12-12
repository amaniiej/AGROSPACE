import { useState } from 'react';
import { FileText, Send, Clock, CheckCircle2 } from 'lucide-react';
import { ActionButton } from '../shared/ActionButton';
import { AlertNotification } from '../shared/AlertNotification';
import { mockProducts } from '../../data/mockData';

export function SampleRequest() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    deliveryAddress: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleToggleProduct = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      if (selectedProducts.length < 3) {
        setSelectedProducts([...selectedProducts, productId]);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProducts.length === 0) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedProducts([]);
      setFormData({ deliveryAddress: '', notes: '' });
    }, 5000);
  };

  const pendingRequests = [
    {
      id: 'SR-001',
      product: 'Premium Arabica Coffee Beans',
      seller: 'Sidama Coffee Cooperative',
      requestedDate: '2024-12-04',
      status: 'Pending',
      quantity: '500g sample'
    },
    {
      id: 'SR-002',
      product: 'Sesame Seeds - White',
      seller: 'Tigray Sesame Cooperative',
      requestedDate: '2024-12-03',
      status: 'Approved',
      quantity: '250g sample',
      estimatedDelivery: '2024-12-10'
    },
    {
      id: 'SR-003',
      product: 'Ethiopian Teff Grain',
      seller: 'Shewa Grain Farmers Union',
      requestedDate: '2024-12-01',
      status: 'Shipped',
      quantity: '1kg sample',
      trackingNumber: 'TRK-ETH-12345'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Premium Sample Requests</h2>
        <p className="text-gray-600">
          Request product samples from verified producers (maximum 3 active requests)
        </p>
      </div>

      {submitted && (
        <AlertNotification
          type="success"
          title="Sample Requests Submitted"
          message={`Your sample requests have been sent to ${selectedProducts.length} producer(s). They will review and respond within 48 hours.`}
          dismissible
        />
      )}

      {/* Request Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4 flex items-center gap-2">
          <FileText className="size-6 text-green-600" />
          New Sample Request
        </h3>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-900">
            <strong>Premium Service:</strong> You can request up to 3 product samples at a time. 
            Selected producers will prepare and ship samples to your address.
          </p>
        </div>

        {/* Product Selection */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-gray-900">Select Products ({selectedProducts.length}/3)</h4>
            {selectedProducts.length >= 3 && (
              <span className="text-sm text-yellow-600">Maximum selections reached</span>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {mockProducts.slice(0, 6).map((product) => {
              const isSelected = selectedProducts.includes(product.id);
              const isDisabled = !isSelected && selectedProducts.length >= 3;

              return (
                <button
                  key={product.id}
                  onClick={() => handleToggleProduct(product.id)}
                  disabled={isDisabled}
                  className={`
                    p-4 rounded-lg border-2 text-left transition-all
                    ${isSelected 
                      ? 'border-green-500 bg-green-50' 
                      : isDisabled
                      ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                      : 'border-gray-200 hover:border-green-300 cursor-pointer'
                    }
                  `}
                >
                  <div className="flex gap-4">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="size-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h5 className="text-gray-900 mb-1">{product.title}</h5>
                      <p className="text-sm text-gray-600 mb-2">{product.seller.name}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{product.price} ETB/kg</span>
                        {isSelected && (
                          <CheckCircle2 className="size-5 text-green-600" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Request Details Form */}
        {selectedProducts.length > 0 && (
          <form onSubmit={handleSubmit} className="space-y-4 border-t border-gray-200 pt-6">
            <div>
              <label className="block text-gray-700 mb-2">
                Delivery Address <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                value={formData.deliveryAddress}
                onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your complete delivery address including country"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Additional Notes (Optional)</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Any specific requirements or questions about the samples..."
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-blue-900 mb-2">Sample Request Information</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Standard sample size: 250g - 1kg depending on product type</li>
                <li>• Samples are provided free of charge (shipping may apply)</li>
                <li>• Typical response time: 24-48 hours</li>
                <li>• Delivery time: 5-10 business days after approval</li>
              </ul>
            </div>

            <ActionButton type="submit" variant="primary" icon={Send} fullWidth>
              Submit {selectedProducts.length} Sample Request{selectedProducts.length > 1 ? 's' : ''}
            </ActionButton>
          </form>
        )}
      </div>

      {/* Active Sample Requests */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-gray-900">Your Sample Requests</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {pendingRequests.map((request) => (
            <div key={request.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-gray-900">{request.id}</h4>
                    <span className={`
                      px-3 py-1 rounded-full text-sm
                      ${request.status === 'Approved' ? 'bg-green-100 text-green-700' : ''}
                      ${request.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : ''}
                      ${request.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : ''}
                    `}>
                      {request.status}
                    </span>
                  </div>
                  <p className="text-gray-900 mb-1">{request.product}</p>
                  <p className="text-sm text-gray-600">From: {request.seller}</p>
                </div>
                {request.status === 'Shipped' && (
                  <CheckCircle2 className="size-6 text-blue-600 flex-shrink-0" />
                )}
              </div>

              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 mb-1 flex items-center gap-1">
                    <Clock className="size-4" />
                    Requested
                  </p>
                  <p className="text-gray-900">{request.requestedDate}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Sample Size</p>
                  <p className="text-gray-900">{request.quantity}</p>
                </div>
                {request.estimatedDelivery && (
                  <div>
                    <p className="text-gray-600 mb-1">Est. Delivery</p>
                    <p className="text-gray-900">{request.estimatedDelivery}</p>
                  </div>
                )}
                {request.trackingNumber && (
                  <div>
                    <p className="text-gray-600 mb-1">Tracking</p>
                    <p className="text-gray-900">{request.trackingNumber}</p>
                  </div>
                )}
              </div>

              {request.status === 'Shipped' && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <ActionButton variant="outline">
                    Track Shipment
                  </ActionButton>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Coffee Brokerage Service */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200 p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-amber-100 rounded-lg">
            <FileText className="size-8 text-amber-700" />
          </div>
          <div className="flex-1">
            <h3 className="text-amber-900 mb-2">Premium Coffee Brokerage Service</h3>
            <p className="text-amber-800 mb-4">
              Looking for specialty coffee? Our premium brokerage service connects you with 
              Ethiopia's finest coffee producers. Get personalized recommendations and curated samples.
            </p>
            <ActionButton variant="secondary">
              Learn More About Brokerage
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}
