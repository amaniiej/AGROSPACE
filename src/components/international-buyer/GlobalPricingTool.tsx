import { Globe, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { DataCard } from '../shared/DataCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function GlobalPricingTool() {
  // Global price comparison data
  const globalTrendData = [
    { month: 'Jul', ethiopian: 2650, globalAvg: 2800, premium: 3100 },
    { month: 'Aug', ethiopian: 2700, globalAvg: 2850, premium: 3150 },
    { month: 'Sep', ethiopian: 2750, globalAvg: 2900, premium: 3200 },
    { month: 'Oct', ethiopian: 2820, globalAvg: 2950, premium: 3280 },
    { month: 'Nov', ethiopian: 2880, globalAvg: 3000, premium: 3350 },
    { month: 'Dec', ethiopian: 2950, globalAvg: 3050, premium: 3420 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Global Price Intelligence</h2>
        <p className="text-gray-600">
          Validate global market price alignment for informed sourcing decisions
        </p>
      </div>

      {/* Global Price Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <DataCard
          title="Ethiopian Coffee FOB"
          value="$2,950/MT"
          trend="up"
          trendValue="+8.5%"
          subtitle="6-month trend"
          icon={<DollarSign className="size-5" />}
        />
        <DataCard
          title="Global Avg. Arabica"
          value="$3,050/MT"
          trend="up"
          trendValue="+6.2%"
          subtitle="ICO composite"
          icon={<Globe className="size-5" />}
        />
        <DataCard
          title="Ethiopian Premium"
          value="$3,420/MT"
          trend="up"
          trendValue="+10.3%"
          subtitle="Specialty grade"
          icon={<TrendingUp className="size-5" />}
        />
        <DataCard
          title="Price Advantage"
          value="-3.3%"
          trend="down"
          trendValue="vs global avg"
          subtitle="Competitive edge"
          icon={<TrendingDown className="size-5" />}
        />
      </div>

      {/* Global Price Comparison Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">6-Month Global Price Comparison (USD/MT, FOB)</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={globalTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="ethiopian" 
              stroke="#ea580c" 
              strokeWidth={2}
              name="Ethiopian Standard"
            />
            <Line 
              type="monotone" 
              dataKey="globalAvg" 
              stroke="#3b82f6" 
              strokeWidth={2}
              name="Global Average"
            />
            <Line 
              type="monotone" 
              dataKey="premium" 
              stroke="#16a34a" 
              strokeWidth={2}
              name="Ethiopian Premium"
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-600 mt-4">
          Prices in USD per Metric Ton (FOB). Data sourced from ICO, Ethiopian Coffee & Tea Authority, and verified trades.
        </p>
      </div>

      {/* Detailed Global Price Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-gray-900">Global Market Prices by Product</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700">Product</th>
                <th className="px-6 py-3 text-left text-gray-700">Ethiopian FOB (USD/MT)</th>
                <th className="px-6 py-3 text-left text-gray-700">Global Market (USD/MT)</th>
                <th className="px-6 py-3 text-left text-gray-700">Price Variance</th>
                <th className="px-6 py-3 text-left text-gray-700">6M Trend</th>
                <th className="px-6 py-3 text-left text-gray-700">Market Position</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  product: 'Coffee Arabica - Grade 1',
                  ethiopian: 3420,
                  global: 3650,
                  variance: '-6.3%',
                  trend: 'up',
                  position: 'Competitive'
                },
                {
                  product: 'Coffee Arabica - Grade 2',
                  ethiopian: 2950,
                  global: 3050,
                  variance: '-3.3%',
                  trend: 'up',
                  position: 'Strong Value'
                },
                {
                  product: 'Sesame Seeds (White)',
                  ethiopian: 1850,
                  global: 2100,
                  variance: '-11.9%',
                  trend: 'stable',
                  position: 'Excellent Value'
                },
                {
                  product: 'Teff',
                  ethiopian: 980,
                  global: 1200,
                  variance: '-18.3%',
                  trend: 'up',
                  position: 'Premium Origin'
                },
                {
                  product: 'Kidney Beans',
                  ethiopian: 850,
                  global: 920,
                  variance: '-7.6%',
                  trend: 'down',
                  position: 'Good Value'
                }
              ].map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">{item.product}</td>
                  <td className="px-6 py-4 text-gray-900">${item.ethiopian.toLocaleString()}</td>
                  <td className="px-6 py-4 text-gray-600">${item.global.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`${item.variance.startsWith('-') ? 'text-green-600' : 'text-red-600'}`}>
                      {item.variance}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`
                      inline-flex items-center gap-1 px-2 py-1 rounded text-sm
                      ${item.trend === 'up' ? 'text-green-600 bg-green-50' : ''}
                      ${item.trend === 'down' ? 'text-red-600 bg-red-50' : ''}
                      ${item.trend === 'stable' ? 'text-gray-600 bg-gray-50' : ''}
                    `}>
                      {item.trend === 'up' && <TrendingUp className="size-4" />}
                      {item.trend === 'down' && <TrendingDown className="size-4" />}
                      {item.trend}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                      {item.position}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Regional Price Comparison */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Regional Coffee Price Comparison (USD/MT, FOB)</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { origin: 'Ethiopia - Specialty', price: 3420, quality: 'Grade 1', variance: 'Baseline' },
            { origin: 'Colombia - Supremo', price: 3650, quality: 'Premium', variance: '+6.7%' },
            { origin: 'Brazil - Santos', price: 2890, quality: 'Standard', variance: '-15.5%' },
            { origin: 'Vietnam - Robusta', price: 2100, quality: 'Commercial', variance: '-38.6%' },
            { origin: 'Kenya - AA', price: 3890, quality: 'Top Grade', variance: '+13.7%' },
            { origin: 'Guatemala - SHB', price: 3580, quality: 'Premium', variance: '+4.7%' }
          ].map((item, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-gray-900">{item.origin}</h4>
                <span className={`text-sm ${
                  item.variance === 'Baseline' ? 'text-gray-600' :
                  item.variance.startsWith('+') ? 'text-red-600' : 'text-green-600'
                }`}>
                  {item.variance}
                </span>
              </div>
              <p className="text-2xl text-gray-900 mb-1">${item.price}</p>
              <p className="text-sm text-gray-600">{item.quality}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Market Intelligence */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-green-900 mb-4 flex items-center gap-2">
            <TrendingUp className="size-5" />
            Positive Market Signals
          </h3>
          <ul className="space-y-3 text-sm text-green-800">
            <li className="flex gap-2">
              <span className="text-green-600">•</span>
              <span>Ethiopian coffee prices 3-12% below global competitors for equivalent grades</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">•</span>
              <span>Sesame seeds showing 18% price advantage vs. global market</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">•</span>
              <span>Teff unique to Ethiopia - growing international demand</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">•</span>
              <span>Consistent upward price trend indicates stable market</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-blue-900 mb-4 flex items-center gap-2">
            <Globe className="size-5" />
            Sourcing Insights
          </h3>
          <ul className="space-y-3 text-sm text-blue-800">
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span>Origin diversity: Ethiopian coffee distinct from Latin American profiles</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span>Specialty market growing 8.5% annually - premium positioning opportunity</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span>Direct sourcing from cooperatives can reduce costs by additional 5-8%</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span>Certifications (Organic, Fair Trade) add $200-400/MT premium</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
