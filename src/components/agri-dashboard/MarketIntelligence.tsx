import { useState } from 'react';
import { TrendingUp, BarChart3, Map } from 'lucide-react';
import { DataCard } from '../shared/DataCard';

export function MarketIntelligence() {
  const [selectedCrop, setSelectedCrop] = useState('coffee');

  const commodities = [
    { id: 'coffee', name: 'Coffee', trend: 'up', change: '+8%' },
    { id: 'teff', name: 'Teff', trend: 'stable', change: '+2%' },
    { id: 'sesame', name: 'Sesame', trend: 'up', change: '+12%' },
    { id: 'maize', name: 'Maize', trend: 'down', change: '-3%' },
    { id: 'chickpea', name: 'Chickpea', trend: 'up', change: '+6%' }
  ];

  const priceData = {
    coffee: {
      addis: { price: 4850, change: '+150' },
      mekelle: { price: 4720, change: '+120' },
      hawassa: { price: 4920, change: '+180' },
      jimma: { price: 4780, change: '+140' },
      dire: { price: 4650, change: '+100' }
    },
    teff: {
      addis: { price: 3200, change: '+50' },
      mekelle: { price: 3150, change: '+40' },
      hawassa: { price: 3250, change: '+60' },
      jimma: { price: 3180, change: '+45' },
      dire: { price: 3100, change: '+30' }
    },
    sesame: {
      addis: { price: 2850, change: '+280' },
      mekelle: { price: 2950, change: '+320' },
      hawassa: { price: 2800, change: '+250' },
      jimma: { price: 2820, change: '+260' },
      dire: { price: 2880, change: '+290' }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Market Intelligence & Decision Support</h2>
        <p className="text-gray-600">
          Real-time pricing data and demand forecasting to optimize farming decisions
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <DataCard
          title="Active Markets"
          value="24"
          icon={<Map className="size-5" />}
          subtitle="Regional exchanges"
        />
        <DataCard
          title="Tracked Commodities"
          value="15"
          icon={<BarChart3 className="size-5" />}
          subtitle="Price monitoring"
        />
        <DataCard
          title="Market Updates"
          value="Daily"
          icon={<TrendingUp className="size-5" />}
          subtitle="8:00 AM & 2:00 PM"
        />
        <DataCard
          title="Avg Price Accuracy"
          value="97%"
          icon={<BarChart3 className="size-5" />}
          subtitle="Verification rate"
        />
      </div>

      {/* Real-Time Price Aggregator */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Real-Time Price Aggregator</h3>
        <p className="text-gray-600 mb-6">
          Live average prices for key commodities across major regional markets in Ethiopia. 
          Updated twice daily from verified market sources.
        </p>

        {/* Commodity Selector */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {commodities.map((commodity) => (
            <button
              key={commodity.id}
              onClick={() => setSelectedCrop(commodity.id)}
              className={`
                px-4 py-2 rounded-lg transition-all
                ${selectedCrop === commodity.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {commodity.name}
              <span className={`ml-2 text-sm ${
                commodity.trend === 'up' ? 'text-green-300' : 
                commodity.trend === 'down' ? 'text-red-300' : 'text-gray-300'
              }`}>
                {commodity.change}
              </span>
            </button>
          ))}
        </div>

        {/* Price Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700">Regional Market</th>
                <th className="px-6 py-3 text-left text-gray-700">Current Price (ETB/kg)</th>
                <th className="px-6 py-3 text-left text-gray-700">Change (24h)</th>
                <th className="px-6 py-3 text-left text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {priceData[selectedCrop as keyof typeof priceData] && Object.entries(priceData[selectedCrop as keyof typeof priceData]).map(([market, data]) => (
                <tr key={market} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 capitalize">{market.replace('-', ' ')}</td>
                  <td className="px-6 py-4 text-blue-600">{data.price} ETB</td>
                  <td className="px-6 py-4">
                    <span className="text-green-600">{data.change} ETB</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          Last updated: Today, 2:00 PM • Data sources: Ethiopian Commodity Exchange (ECX), Regional Markets, Verified Trader Reports
        </div>
      </div>

      {/* Demand Analysis Tool */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Demand Analysis & Crop Planning Tool</h3>
        <p className="text-gray-600 mb-6">
          Use historical sales data and market trends to predict future demand and make informed planting decisions.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Demand Forecast */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
            <h4 className="text-blue-900 mb-4">Projected High-Demand Crops (2025 Belg Season)</h4>
            <div className="space-y-3">
              {[
                { crop: 'Chickpea (Kabuli)', demand: 'Very High', price: '+15-20%', reason: 'Growing export to Middle East' },
                { crop: 'Sesame (White)', demand: 'High', price: '+10-15%', reason: 'Strong Chinese demand' },
                { crop: 'Coffee (Specialty)', demand: 'High', price: '+12-18%', reason: 'EU specialty market growth' },
                { crop: 'Teff (Improved)', demand: 'Medium', price: '+5-8%', reason: 'Domestic demand steady' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="text-gray-900">{item.crop}</h5>
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.demand === 'Very High' ? 'bg-green-100 text-green-700' :
                      item.demand === 'High' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {item.demand}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Expected Price: <span className="text-green-600">{item.price}</span></p>
                  <p className="text-xs text-gray-500">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Historical Trends */}
          <div>
            <h4 className="text-gray-900 mb-4">Market Intelligence Insights</h4>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h5 className="text-green-900 mb-2 flex items-center gap-2">
                  <TrendingUp className="size-5" />
                  Growing Export Opportunities
                </h5>
                <p className="text-sm text-green-800">
                  Ethiopia signed new trade agreements with Saudi Arabia and UAE. Demand for pulses expected 
                  to increase by 30% in Q1 2025.
                </p>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h5 className="text-blue-900 mb-2 flex items-center gap-2">
                  <BarChart3 className="size-5" />
                  Domestic Market Trends
                </h5>
                <p className="text-sm text-blue-800">
                  Urban population growth driving increased demand for vegetables and fruits. 
                  Cold storage facilities expanding in Addis Ababa.
                </p>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <h5 className="text-amber-900 mb-2 flex items-center gap-2">
                  <Map className="size-5" />
                  Regional Price Differences
                </h5>
                <p className="text-sm text-amber-800">
                  Significant price gaps between production areas and consumption centers. 
                  Transport costs create 15-25% price differential opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Support Tool */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Crop Planning Decision Support</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-gray-900 mb-3">Input Your Data</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Available Land (ha)</label>
                <input 
                  type="number" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="5.0"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Investment Budget (ETB)</label>
                <input 
                  type="number" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="50000"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Region</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Oromia</option>
                  <option>Amhara</option>
                  <option>SNNPR</option>
                  <option>Tigray</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg col-span-2">
            <h4 className="text-gray-900 mb-3">Recommended Crop Mix</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div>
                  <p className="text-gray-900">Chickpea (Kabuli)</p>
                  <p className="text-sm text-gray-600">2.5 hectares • High export demand</p>
                </div>
                <div className="text-right">
                  <p className="text-green-600">Est. Revenue:</p>
                  <p className="text-gray-900">125,000 ETB</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div>
                  <p className="text-gray-900">Teff (Quncho)</p>
                  <p className="text-sm text-gray-600">2.0 hectares • Stable domestic market</p>
                </div>
                <div className="text-right">
                  <p className="text-green-600">Est. Revenue:</p>
                  <p className="text-gray-900">96,000 ETB</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div>
                  <p className="text-gray-900">Mixed Vegetables</p>
                  <p className="text-sm text-gray-600">0.5 hectares • Quick cash crop</p>
                </div>
                <div className="text-right">
                  <p className="text-green-600">Est. Revenue:</p>
                  <p className="text-gray-900">42,000 ETB</p>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-200 flex justify-between">
                <span className="text-gray-900">Total Estimated Revenue:</span>
                <span className="text-xl text-green-600">263,000 ETB</span>
              </div>
              <p className="text-xs text-gray-500">
                * Estimates based on current market trends, historical yields, and input costs. 
                Actual results may vary based on weather and market conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
