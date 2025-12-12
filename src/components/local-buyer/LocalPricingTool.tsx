import { TrendingUp, TrendingDown } from 'lucide-react';
import { DataCard } from '../shared/DataCard';
import { marketPriceData } from '../../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function LocalPricingTool() {
  // 30-day local price trend data
  const last30DaysData = [
    { day: 'Nov 7', price: 4100 },
    { day: 'Nov 14', price: 4150 },
    { day: 'Nov 21', price: 4250 },
    { day: 'Nov 28', price: 4300 },
    { day: 'Dec 5', price: 4200 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Local Price Analysis</h2>
        <p className="text-gray-600">
          30-day price trends to support negotiation with local sellers
        </p>
      </div>

      {/* Key Local Prices */}
      <div className="grid md:grid-cols-4 gap-6">
        <DataCard
          title="Coffee Arabica"
          value="4,200 ETB/kg"
          trend="down"
          trendValue="-2.3%"
          subtitle="30-day avg"
        />
        <DataCard
          title="Teff"
          value="3,100 ETB/kg"
          trend="up"
          trendValue="+1.2%"
          subtitle="30-day avg"
        />
        <DataCard
          title="Sesame Seeds"
          value="5,000 ETB/kg"
          trend="neutral"
          trendValue="0%"
          subtitle="30-day avg"
        />
        <DataCard
          title="Kidney Beans"
          value="2,750 ETB/kg"
          trend="down"
          trendValue="-0.8%"
          subtitle="30-day avg"
        />
      </div>

      {/* 30-Day Price Trend Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Coffee Arabica - 30 Day Local Price Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={last30DaysData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="#2563eb" 
              strokeWidth={2}
              dot={{ fill: '#2563eb', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-600 mt-4">
          Local average sale prices in ETB per kg. Updated daily based on verified transactions.
        </p>
      </div>

      {/* Local Price Comparison Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-gray-900">Local Average Sale Price (local_average_sale_price)</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700">Product</th>
                <th className="px-6 py-3 text-left text-gray-700">Current Price</th>
                <th className="px-6 py-3 text-left text-gray-700">7-Day Avg</th>
                <th className="px-6 py-3 text-left text-gray-700">30-Day Avg</th>
                <th className="px-6 py-3 text-left text-gray-700">Trend</th>
                <th className="px-6 py-3 text-left text-gray-700">Negotiation Tip</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { 
                  product: 'Coffee Arabica', 
                  current: 4200, 
                  week: 4250, 
                  month: 4300,
                  trend: 'down',
                  tip: 'Price declining - good time to negotiate'
                },
                { 
                  product: 'Teff', 
                  current: 3100, 
                  week: 3080, 
                  month: 3050,
                  trend: 'up',
                  tip: 'Price rising - lock in soon'
                },
                { 
                  product: 'Sesame Seeds', 
                  current: 5000, 
                  week: 5000, 
                  month: 5000,
                  trend: 'stable',
                  tip: 'Stable pricing - standard negotiation'
                },
                { 
                  product: 'Kidney Beans', 
                  current: 2750, 
                  week: 2780, 
                  month: 2800,
                  trend: 'down',
                  tip: 'Gentle decline - room for negotiation'
                }
              ].map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">{item.product}</td>
                  <td className="px-6 py-4 text-gray-900">{item.current} ETB</td>
                  <td className="px-6 py-4 text-gray-600">{item.week} ETB</td>
                  <td className="px-6 py-4 text-gray-600">{item.month} ETB</td>
                  <td className="px-6 py-4">
                    <span className={`
                      inline-flex items-center gap-1 px-2 py-1 rounded text-sm
                      ${item.trend === 'up' ? 'text-red-600 bg-red-50' : ''}
                      ${item.trend === 'down' ? 'text-green-600 bg-green-50' : ''}
                      ${item.trend === 'stable' ? 'text-gray-600 bg-gray-50' : ''}
                    `}>
                      {item.trend === 'up' && <TrendingUp className="size-4" />}
                      {item.trend === 'down' && <TrendingDown className="size-4" />}
                      {item.trend}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Regional Price Variations */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Regional Price Variations</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { region: 'Sidama', product: 'Coffee', price: 4100, variance: '-2.4%' },
            { region: 'Oromia', product: 'Beans', price: 2700, variance: '-1.8%' },
            { region: 'Tigray', product: 'Sesame', price: 4900, variance: '-2.0%' },
            { region: 'Shewa', product: 'Teff', price: 3050, variance: '-1.6%' },
            { region: 'Kaffa', product: 'Coffee', price: 4300, variance: '+2.4%' },
            { region: 'Amhara', product: 'Beans', price: 2800, variance: '+1.8%' }
          ].map((item, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-gray-900">{item.region}</h4>
                <span className={`text-sm ${item.variance.startsWith('-') ? 'text-green-600' : 'text-red-600'}`}>
                  {item.variance}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{item.product}</p>
              <p className="text-xl text-gray-900">{item.price} ETB/kg</p>
            </div>
          ))}
        </div>
      </div>

      {/* Market Insights for Buyers */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-900 mb-4">Buyer Insights</h3>
        <div className="space-y-3">
          <div className="flex gap-3">
            <TrendingDown className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-blue-900 mb-1">Coffee Prices Softening</h4>
              <p className="text-sm text-blue-800">
                Average coffee prices have declined 2.3% over 30 days. Good opportunity for bulk purchasing.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <TrendingUp className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-blue-900 mb-1">Teff Demand Increasing</h4>
              <p className="text-sm text-blue-800">
                Local teff prices up 1.2%. Consider locking in contracts before further increases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
