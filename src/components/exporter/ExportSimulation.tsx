import { useState } from 'react';
import { Calculator, Ship, DollarSign, TrendingUp } from 'lucide-react';
import { DataCard } from '../shared/DataCard';
import { ActionButton } from '../shared/ActionButton';

export function ExportSimulation() {
  const [formData, setFormData] = useState({
    product: 'Coffee Arabica',
    quantity: '1000',
    port: 'Djibouti',
    incoterm: 'FOB',
    packaging: 'Jute Bags'
  });

  const [results, setResults] = useState<any>(null);

  const calculateCosts = () => {
    const quantity = parseFloat(formData.quantity);
    const basePrice = 4500; // ETB per kg
    
    const productCost = quantity * basePrice;
    const packagingCost = quantity * 50; // 50 ETB per kg for packaging
    const localTransport = 25000; // Fixed local transport
    const portHandling = quantity * 80; // 80 ETB per kg
    const documentation = 15000; // Fixed documentation fees
    
    let shippingCost = 0;
    if (formData.incoterm === 'CIF') {
      shippingCost = quantity * 150; // 150 ETB per kg for international shipping
    }
    
    const insurance = (productCost * 0.02); // 2% insurance
    
    const totalCost = productCost + packagingCost + localTransport + portHandling + 
                     documentation + shippingCost + insurance;
    
    const pricePerKg = totalCost / quantity;
    const margin = quantity * 1200; // Estimated margin
    const revenue = totalCost + margin;

    setResults({
      productCost,
      packagingCost,
      localTransport,
      portHandling,
      documentation,
      shippingCost,
      insurance,
      totalCost,
      pricePerKg,
      margin,
      revenue
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCosts();
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Export Cost Simulator</h2>
        <p className="text-gray-600">
          Calculate FOB/CIF costs for your export transactions
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <h3 className="text-gray-900 flex items-center gap-2">
            <Calculator className="size-6 text-green-600" />
            Simulation Parameters
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">
                Product Type <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option>Coffee Arabica</option>
                <option>Coffee Robusta</option>
                <option>Teff</option>
                <option>Sesame Seeds</option>
                <option>Kidney Beans</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Desired Quantity (kg) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., 1000"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Port of Destination <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.port}
                onChange={(e) => setFormData({ ...formData, port: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option>Djibouti</option>
                <option>Mombasa, Kenya</option>
                <option>Port Sudan</option>
                <option>Rotterdam, Netherlands</option>
                <option>Hamburg, Germany</option>
                <option>Shanghai, China</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Incoterm <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="incoterm"
                    value="FOB"
                    checked={formData.incoterm === 'FOB'}
                    onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                    className="size-4 text-green-600 focus:ring-green-500"
                  />
                  <div className="flex-1">
                    <p className="text-gray-900">FOB (Free on Board)</p>
                    <p className="text-sm text-gray-600">Costs up to port of origin</p>
                  </div>
                </label>
                <label className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="incoterm"
                    value="CIF"
                    checked={formData.incoterm === 'CIF'}
                    onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                    className="size-4 text-green-600 focus:ring-green-500"
                  />
                  <div className="flex-1">
                    <p className="text-gray-900">CIF (Cost, Insurance & Freight)</p>
                    <p className="text-sm text-gray-600">Includes shipping to destination port</p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Packaging Type</label>
              <select
                value={formData.packaging}
                onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option>Jute Bags (60kg)</option>
                <option>PP Bags (50kg)</option>
                <option>Vacuum Sealed (25kg)</option>
                <option>Bulk Container</option>
              </select>
            </div>
          </div>

          <ActionButton type="submit" variant="primary" icon={Calculator} fullWidth>
            Calculate Export Costs
          </ActionButton>
        </form>

        {/* Results Panel */}
        <div className="space-y-6">
          {!results ? (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <Calculator className="size-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-gray-900 mb-2">Ready to Calculate</h3>
              <p className="text-gray-600">
                Fill in the simulation parameters and click calculate to see detailed cost breakdown
              </p>
            </div>
          ) : (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-2 gap-4">
                <DataCard
                  title="Total Cost"
                  value={`${results.totalCost.toLocaleString()} ETB`}
                  icon={<DollarSign className="size-5" />}
                  subtitle={formData.incoterm}
                />
                <DataCard
                  title="Cost per kg"
                  value={`${results.pricePerKg.toFixed(2)} ETB`}
                  icon={<Calculator className="size-5" />}
                  subtitle="Unit cost"
                />
              </div>

              {/* Detailed Breakdown */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-gray-900">Cost Breakdown</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Product Cost ({formData.quantity} kg)</span>
                    <span className="text-gray-900">{results.productCost.toLocaleString()} ETB</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Packaging ({formData.packaging})</span>
                    <span className="text-gray-900">{results.packagingCost.toLocaleString()} ETB</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Local Transport</span>
                    <span className="text-gray-900">{results.localTransport.toLocaleString()} ETB</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Port Handling</span>
                    <span className="text-gray-900">{results.portHandling.toLocaleString()} ETB</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Documentation & Fees</span>
                    <span className="text-gray-900">{results.documentation.toLocaleString()} ETB</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Insurance (2%)</span>
                    <span className="text-gray-900">{results.insurance.toLocaleString()} ETB</span>
                  </div>
                  {formData.incoterm === 'CIF' && (
                    <div className="p-4 flex items-center justify-between bg-blue-50">
                      <span className="text-blue-900 flex items-center gap-2">
                        <Ship className="size-4" />
                        International Shipping to {formData.port}
                      </span>
                      <span className="text-blue-900">{results.shippingCost.toLocaleString()} ETB</span>
                    </div>
                  )}
                  <div className="p-4 flex items-center justify-between bg-gray-50">
                    <span className="text-gray-900">Total {formData.incoterm} Cost</span>
                    <span className="text-gray-900 text-xl">{results.totalCost.toLocaleString()} ETB</span>
                  </div>
                </div>
              </div>

              {/* Profitability */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 p-6">
                <h4 className="text-green-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="size-5" />
                  Profitability Estimate
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-green-800">Estimated Market Price</span>
                    <span className="text-green-900">{(results.pricePerKg + 1200).toFixed(2)} ETB/kg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-800">Potential Revenue</span>
                    <span className="text-green-900">{results.revenue.toLocaleString()} ETB</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-green-300">
                    <span className="text-green-900">Estimated Profit</span>
                    <span className="text-green-900 text-xl">+{results.margin.toLocaleString()} ETB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-800">Margin</span>
                    <span className="text-green-900">{((results.margin / results.totalCost) * 100).toFixed(1)}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>Note:</strong> These are estimated costs based on current market rates. 
                  Actual costs may vary depending on supplier negotiations, seasonal factors, and specific shipping arrangements.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
