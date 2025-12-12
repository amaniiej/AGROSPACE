import { useState } from 'react';
import { TrendingUp, DollarSign, Globe, ThumbsUp, ThumbsDown } from 'lucide-react';
import { DataCard } from '../shared/DataCard';
import { marketPriceData } from '../../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function PricingTool() {
  const [feedback, setFeedback] = useState<{ [key: string]: boolean | null }>({});

  const trendData = [
    { month: 'Jul', price: 3800 },
    { month: 'Aug', price: 4000 },
    { month: 'Sep', price: 3900 },
    { month: 'Oct', price: 4200 },
    { month: 'Nov', price: 4300 },
    { month: 'Dec', price: 4500 }
  ];

  const handleFeedback = (productId: string, helpful: boolean) => {
    setFeedback({ ...feedback, [productId]: helpful });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Market Intelligence</h2>
        <p className="text-gray-600">
          Real-time pricing data and market trends to help you make informed decisions
        </p>
      </div>

      {/* Price Overview Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <DataCard
          title="Avg. Local Price"
          value="4,200 ETB/kg"
          trend="up"
          trendValue="+8%"
          subtitle="Coffee Arabica"
          icon={<DollarSign className="size-5" />}
        />
        <DataCard
          title="Global Export Price"
          value="6,800 ETB/kg"
          trend="up"
          trendValue="+12%"
          subtitle="International market"
          icon={<Globe className="size-5" />}
        />
        <DataCard
          title="Potential Margin"
          value="2,600 ETB/kg"
          trend="up"
          trendValue="+15%"
          subtitle="Export opportunity"
          icon={<TrendingUp className="size-5" />}
        />
      </div>

      {/* Price Trend Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Coffee Arabica - 6 Month Price Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="#16a34a" 
              strokeWidth={2}
              dot={{ fill: '#16a34a', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-600 mt-4">
          Prices shown in ETB per kg. Updated every 6 hours.
        </p>
      </div>

      {/* Detailed Price Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-gray-900">Current Market Prices</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700">Product</th>
                <th className="px-6 py-3 text-left text-gray-700">Local Avg. (ETB/kg)</th>
                <th className="px-6 py-3 text-left text-gray-700">Global Price (ETB/kg)</th>
                <th className="px-6 py-3 text-left text-gray-700">Trend</th>
                <th className="px-6 py-3 text-left text-gray-700">Last Updated</th>
                <th className="px-6 py-3 text-left text-gray-700">Helpful?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {marketPriceData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">{item.product}</td>
                  <td className="px-6 py-4 text-gray-900">{item.localAverage.toLocaleString()}</td>
                  <td className="px-6 py-4 text-gray-900">{item.globalPrice.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`
                      inline-flex items-center gap-1 px-2 py-1 rounded text-sm
                      ${item.trend === 'up' ? 'text-green-600 bg-green-50' : ''}
                      ${item.trend === 'down' ? 'text-red-600 bg-red-50' : ''}
                      ${item.trend === 'neutral' ? 'text-gray-600 bg-gray-50' : ''}
                    `}>
                      <TrendingUp className={`size-4 ${item.trend === 'down' ? 'rotate-180' : ''}`} />
                      {item.change}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{item.lastUpdated}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleFeedback(item.product, true)}
                        className={`p-1 rounded transition-colors ${
                          feedback[item.product] === true
                            ? 'bg-green-100 text-green-600'
                            : 'text-gray-400 hover:text-green-600 hover:bg-green-50'
                        }`}
                      >
                        <ThumbsUp className="size-4" />
                      </button>
                      <button
                        onClick={() => handleFeedback(item.product, false)}
                        className={`p-1 rounded transition-colors ${
                          feedback[item.product] === false
                            ? 'bg-red-100 text-red-600'
                            : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
                        }`}
                      >
                        <ThumbsDown className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Market Insights</h3>
        <div className="space-y-4">
          <div className="flex gap-4 p-4 bg-green-50 rounded-lg">
            <TrendingUp className="size-6 text-green-600 flex-shrink-0" />
            <div>
              <h4 className="text-green-900 mb-1">Strong Demand for Coffee Arabica</h4>
              <p className="text-sm text-green-800">
                Global prices have increased 12% this month. Consider listing your premium coffee now for better margins.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-blue-50 rounded-lg">
            <Globe className="size-6 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="text-blue-900 mb-1">Export Opportunity: Sesame Seeds</h4>
              <p className="text-sm text-blue-800">
                International buyers are actively searching for sesame seeds. Your local price is 50% below global average.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Estimation Calculator */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Revenue Estimator</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Your Quantity (kg)</label>
            <input
              type="number"
              defaultValue={500}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Product Type</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Coffee Arabica</option>
              <option>Teff</option>
              <option>Sesame Seeds</option>
              <option>Kidney Beans</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Target Market</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Local Market</option>
              <option>Export Market</option>
            </select>
          </div>
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600 mb-1">Estimated Revenue</p>
              <p className="text-2xl text-gray-900">3,400,000 ETB</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Market Price/kg</p>
              <p className="text-2xl text-gray-900">6,800 ETB</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Potential Profit</p>
              <p className="text-2xl text-green-600">+1,300,000 ETB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
