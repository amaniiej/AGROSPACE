import { useState } from 'react';
import { Truck, MapPin, Calculator } from 'lucide-react';
import { ActionButton } from '../shared/ActionButton';
import { DataCard } from '../shared/DataCard';

export function QuickLogistics() {
  const [formData, setFormData] = useState({
    fromRegion: '',
    toLocation: '',
    weight: '',
    productType: ''
  });
  const [estimate, setEstimate] = useState<any>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple estimation logic
    const weight = parseFloat(formData.weight);
    const baseRate = 50; // ETB per kg
    const distance = formData.fromRegion ? 200 : 100; // km estimate
    
    const transportCost = weight * baseRate;
    const fuelSurcharge = distance * 5;
    const handling = weight * 10;
    const total = transportCost + fuelSurcharge + handling;
    
    setEstimate({
      transportCost,
      fuelSurcharge,
      handling,
      total,
      estimatedDays: 3
    });
  };

  const regions = ['Sidama', 'Shewa', 'Oromia', 'Tigray', 'Amhara', 'Kaffa'];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Quick Domestic Transport</h2>
        <p className="text-gray-600">
          Estimate transport costs for local product delivery
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Estimation Form */}
        <form onSubmit={handleCalculate} className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <h3 className="text-gray-900 flex items-center gap-2">
            <Calculator className="size-6 text-blue-600" />
            Transport Estimator
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">
                From Region <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.fromRegion}
                onChange={(e) => setFormData({ ...formData, fromRegion: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select region</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                To Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.toLocation}
                onChange={(e) => setFormData({ ...formData, toLocation: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Addis Ababa, Merkato"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Product Type
              </label>
              <select
                value={formData.productType}
                onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select product type</option>
                <option>Coffee</option>
                <option>Grains</option>
                <option>Legumes</option>
                <option>Seeds</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Weight (kg) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 500"
              />
            </div>
          </div>

          <ActionButton type="submit" variant="primary" icon={Calculator} fullWidth>
            Calculate Estimate
          </ActionButton>
        </form>

        {/* Results */}
        <div className="space-y-6">
          {!estimate ? (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <Truck className="size-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-gray-900 mb-2">Ready to Estimate</h3>
              <p className="text-gray-600">
                Fill in the transport details to get an instant quote
              </p>
            </div>
          ) : (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-2 gap-4">
                <DataCard
                  title="Total Cost"
                  value={`${estimate.total.toLocaleString()} ETB`}
                  icon={<Truck className="size-5" />}
                />
                <DataCard
                  title="Est. Delivery"
                  value={`${estimate.estimatedDays} days`}
                  icon={<MapPin className="size-5" />}
                />
              </div>

              {/* Detailed Breakdown */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-gray-900">Cost Breakdown</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Base Transport</span>
                    <span className="text-gray-900">{estimate.transportCost.toLocaleString()} ETB</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Fuel Surcharge</span>
                    <span className="text-gray-900">{estimate.fuelSurcharge.toLocaleString()} ETB</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Handling & Loading</span>
                    <span className="text-gray-900">{estimate.handling.toLocaleString()} ETB</span>
                  </div>
                  <div className="p-4 flex items-center justify-between bg-gray-50">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900 text-xl">{estimate.total.toLocaleString()} ETB</span>
                  </div>
                </div>
              </div>

              <ActionButton variant="primary" fullWidth>
                Request Transport Service
              </ActionButton>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>Note:</strong> This is an estimated quote. Final costs may vary based on 
                  actual route, road conditions, and seasonal factors. Contact our logistics team for a detailed quote.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Logistics Partners */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Domestic Logistics Partners</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'Express Agri Transport', coverage: 'All regions', rating: 4.8 },
            { name: 'Ethiopia Freight Services', coverage: 'Major cities', rating: 4.6 },
            { name: 'Local Logistics Co-op', coverage: 'Regional', rating: 4.9 }
          ].map((partner, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <Truck className="size-6 text-blue-600" />
                <span className="text-sm text-yellow-600">★ {partner.rating}</span>
              </div>
              <h4 className="text-gray-900 mb-1">{partner.name}</h4>
              <p className="text-sm text-gray-600">{partner.coverage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
