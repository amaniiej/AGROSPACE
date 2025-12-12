import { useState } from 'react';
import { Calculator, Ship, DollarSign, TrendingUp } from 'lucide-react';
import { DataCard } from '../shared/DataCard';
import { ActionButton } from '../shared/ActionButton';

export function FOBCIFCalculator() {
  const [formData, setFormData] = useState({
    product: 'Coffee Arabica - Grade 1',
    quantity: '20',
    unit: 'MT',
    destinationPort: '',
    incoterm: 'CIF',
    insurance: true
  });

  const [results, setResults] = useState<any>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const quantity = parseFloat(formData.quantity);
    
    // Base prices per MT
    const basePrices: { [key: string]: number } = {
      'Coffee Arabica - Grade 1': 3420,
      'Coffee Arabica - Grade 2': 2950,
      'Sesame Seeds (White)': 1850,
      'Teff': 980,
      'Kidney Beans': 850
    };
    
    const basePrice = basePrices[formData.product] || 3000;
    const productCost = quantity * basePrice;
    
    // Origin costs
    const processingFees = quantity * 50; // $50 per MT
    const qualityControl = quantity * 30; // $30 per MT
    const localTransport = quantity * 45; // $45 per MT
    const portHandling = quantity * 60; // $60 per MT
    const exportDuties = productCost * 0.02; // 2%
    const documentation = 250; // Fixed fee
    
    const totalFOB = productCost + processingFees + qualityControl + 
                     localTransport + portHandling + exportDuties + documentation;
    
    let oceanFreight = 0;
    let insurance = 0;
    let destinationCharges = 0;
    let totalCIF = totalFOB;
    
    if (formData.incoterm === 'CIF' || formData.incoterm === 'CFR') {
      // Shipping costs vary by destination
      const freightRates: { [key: string]: number } = {
        'Rotterdam': 180,
        'Hamburg': 185,
        'Antwerp': 180,
        'Le Havre': 190,
        'Shanghai': 220,
        'Hong Kong': 215,
        'Dubai': 120,
        'New York': 250
      };
      
      const rate = freightRates[formData.destinationPort] || 200;
      oceanFreight = quantity * rate;
      
      if (formData.incoterm === 'CIF' && formData.insurance) {
        insurance = (productCost + oceanFreight) * 0.015; // 1.5%
      }
      
      totalCIF = totalFOB + oceanFreight + insurance;
    }
    
    const pricePerMT = totalCIF / quantity;
    const margin = quantity * 300; // Estimated trading margin
    
    setResults({
      productCost,
      processingFees,
      qualityControl,
      localTransport,
      portHandling,
      exportDuties,
      documentation,
      totalFOB,
      oceanFreight,
      insurance,
      destinationCharges,
      totalCIF,
      pricePerMT,
      margin,
      quantity
    });
  };

  const ports = [
    'Rotterdam',
    'Hamburg',
    'Antwerp',
    'Le Havre',
    'Shanghai',
    'Hong Kong',
    'Dubai',
    'New York'
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">FOB/CIF Cost Calculator</h2>
        <p className="text-gray-600">
          Calculate comprehensive landed costs with integrated Incoterm selection
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <form onSubmit={handleCalculate} className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <h3 className="text-gray-900 flex items-center gap-2">
            <Calculator className="size-6 text-orange-600" />
            Calculation Parameters
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option>Coffee Arabica - Grade 1</option>
                <option>Coffee Arabica - Grade 2</option>
                <option>Sesame Seeds (White)</option>
                <option>Teff</option>
                <option>Kidney Beans</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Quantity <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  required
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., 20"
                />
                <select
                  value={formData.unit}
                  onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                  className="w-24 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="MT">MT</option>
                  <option value="kg">kg</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Incoterm <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {['FOB', 'CFR', 'CIF'].map((term) => (
                  <label 
                    key={term}
                    className={`
                      flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all
                      ${formData.incoterm === term ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-300'}
                    `}
                  >
                    <input
                      type="radio"
                      name="incoterm"
                      value={term}
                      checked={formData.incoterm === term}
                      onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                      className="size-4 text-orange-600 focus:ring-orange-500"
                    />
                    <div className="flex-1">
                      <p className="text-gray-900">{term}</p>
                      <p className="text-sm text-gray-600">
                        {term === 'FOB' && 'Free on Board (Djibouti port)'}
                        {term === 'CFR' && 'Cost & Freight to destination'}
                        {term === 'CIF' && 'Cost, Insurance & Freight'}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {(formData.incoterm === 'CIF' || formData.incoterm === 'CFR') && (
              <div>
                <label className="block text-gray-700 mb-2">
                  Destination Port <span className="text-red-500">*</span>
                </label>
                <select
                  required={formData.incoterm !== 'FOB'}
                  value={formData.destinationPort}
                  onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select destination port</option>
                  {ports.map(port => (
                    <option key={port} value={port}>{port}</option>
                  ))}
                </select>
              </div>
            )}

            {formData.incoterm === 'CIF' && (
              <label className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={formData.insurance}
                  onChange={(e) => setFormData({ ...formData, insurance: e.target.checked })}
                  className="size-4 text-orange-600 rounded focus:ring-orange-500"
                />
                <span className="text-gray-700">Include marine insurance (1.5% of cargo value)</span>
              </label>
            )}
          </div>

          <ActionButton type="submit" variant="primary" icon={Calculator} fullWidth>
            Calculate Costs
          </ActionButton>
        </form>

        {/* Results Panel */}
        <div className="space-y-6">
          {!results ? (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <Calculator className="size-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-gray-900 mb-2">Ready to Calculate</h3>
              <p className="text-gray-600">
                Fill in the parameters and select your Incoterm to see detailed cost breakdown
              </p>
            </div>
          ) : (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-2 gap-4">
                <DataCard
                  title={`Total ${formData.incoterm}`}
                  value={`$${results.totalCIF.toLocaleString()}`}
                  icon={<DollarSign className="size-5" />}
                  subtitle={`${results.quantity} MT`}
                />
                <DataCard
                  title="Price per MT"
                  value={`$${results.pricePerMT.toFixed(2)}`}
                  icon={<TrendingUp className="size-5" />}
                  subtitle="Unit cost"
                />
              </div>

              {/* Detailed Breakdown */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-gray-900">Detailed Cost Breakdown</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="p-4 bg-gray-50">
                    <h4 className="text-gray-700 mb-2">Product & Origin Costs</h4>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Product Cost ({formData.product})</span>
                    <span className="text-gray-900">${results.productCost.toLocaleString()}</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Processing & Grading Fees</span>
                    <span className="text-gray-900">${results.processingFees.toLocaleString()}</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Quality Control & Inspection</span>
                    <span className="text-gray-900">${results.qualityControl.toLocaleString()}</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Local Transport to Port</span>
                    <span className="text-gray-900">${results.localTransport.toLocaleString()}</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Port Handling (Djibouti)</span>
                    <span className="text-gray-900">${results.portHandling.toLocaleString()}</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Export Duties & Taxes</span>
                    <span className="text-gray-900">${results.exportDuties.toLocaleString()}</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-gray-700">Documentation & Customs</span>
                    <span className="text-gray-900">${results.documentation.toLocaleString()}</span>
                  </div>
                  
                  <div className="p-4 flex items-center justify-between bg-orange-50">
                    <span className="text-orange-900">Total FOB (Djibouti)</span>
                    <span className="text-orange-900 text-xl">${results.totalFOB.toLocaleString()}</span>
                  </div>

                  {(formData.incoterm === 'CIF' || formData.incoterm === 'CFR') && (
                    <>
                      <div className="p-4 bg-gray-50">
                        <h4 className="text-gray-700 mb-2 flex items-center gap-2">
                          <Ship className="size-4" />
                          International Shipping Costs
                        </h4>
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <span className="text-gray-700">Ocean Freight to {formData.destinationPort}</span>
                        <span className="text-gray-900">${results.oceanFreight.toLocaleString()}</span>
                      </div>
                      {formData.incoterm === 'CIF' && formData.insurance && (
                        <div className="p-4 flex items-center justify-between">
                          <span className="text-gray-700">Marine Insurance (1.5%)</span>
                          <span className="text-gray-900">${results.insurance.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="p-4 flex items-center justify-between bg-orange-50">
                        <span className="text-orange-900">Total {formData.incoterm} ({formData.destinationPort})</span>
                        <span className="text-orange-900 text-xl">${results.totalCIF.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Trading Analysis */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 p-6">
                <h4 className="text-green-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="size-5" />
                  Import Analysis
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-green-800">Cost per MT ({formData.incoterm})</span>
                    <span className="text-green-900">${results.pricePerMT.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-800">Est. Market Price (+10% margin)</span>
                    <span className="text-green-900">${(results.pricePerMT * 1.1).toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-green-300">
                    <span className="text-green-900">Est. Trading Margin</span>
                    <span className="text-green-900 text-lg">${((results.pricePerMT * 0.1) * results.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>Note:</strong> Costs are estimates based on current market rates and standard shipment parameters. 
                  Actual costs may vary based on seasonal factors, container availability, and specific supplier terms. 
                  Additional destination costs (duties, customs clearance) not included.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
