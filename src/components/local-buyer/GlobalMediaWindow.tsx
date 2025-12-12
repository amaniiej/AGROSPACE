import { useState } from 'react';
import { Newspaper, TrendingUp, DollarSign, BookOpen, Sprout, Award, Lightbulb } from 'lucide-react';

export function GlobalMediaWindow() {
  const [selectedCategory, setSelectedCategory] = useState('Market Information');

  const categories = [
    { name: 'Market Information', icon: TrendingUp },
    { name: 'Agronomic Advice', icon: Sprout },
    { name: 'Livestock & Animal Health', icon: BookOpen },
    { name: 'Success Stories', icon: Award }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Agricultural Media Center</h2>
        <p className="text-gray-600">
          Latest news, market information, technical advice, and success stories from Ethiopian agriculture
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-lg transition-all
                ${selectedCategory === cat.name
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-500'
                }
              `}
            >
              <Icon className="size-5" />
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Market Information and Agricultural Economics */}
      {selectedCategory === 'Market Information' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4 flex items-center gap-2">
              <DollarSign className="size-6 text-green-600" />
              Local and National Market Prices
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Coffee Prices Surge 8% This Week',
                  date: 'December 7, 2024',
                  summary: 'Ethiopian coffee export prices reached $3,420/MT FOB, driven by strong international demand and limited supply from Brazil.',
                  source: 'Ethiopian Coffee & Tea Authority'
                },
                {
                  title: 'Teff Prices Stabilize Ahead of Harvest',
                  date: 'December 6, 2024',
                  summary: 'Domestic teff prices holding steady at 3,100 ETB/kg as farmers prepare for upcoming harvest season.',
                  source: 'Ethiopian Grain Trade Enterprise'
                },
                {
                  title: 'Sesame Export Market Update',
                  date: 'December 5, 2024',
                  summary: 'Chinese buyers showing renewed interest in Ethiopian sesame. Export volumes expected to increase by 15% this quarter.',
                  source: 'Ministry of Trade'
                }
              ].map((article, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-gray-900">{article.title}</h4>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{article.summary}</p>
                  <p className="text-xs text-blue-600">Source: {article.source}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Export Market Trends</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="text-green-900 mb-2">Europe Coffee Market</h4>
                <p className="text-sm text-green-800 mb-2">
                  Specialty coffee demand growing 12% annually. Ethiopian single-origin coffees commanding premium prices.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-green-700">Current Price: $3,650/MT CIF</span>
                  <span className="text-green-600">↑ +10% YoY</span>
                </div>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="text-blue-900 mb-2">Middle East Sesame Market</h4>
                <p className="text-sm text-blue-800 mb-2">
                  Strong demand from UAE and Saudi Arabia. White sesame from Humera region highly sought after.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-blue-700">Current Price: $2,100/MT FOB</span>
                  <span className="text-blue-600">↑ +5% YoY</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Agricultural Finance and Credit</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="text-gray-900 mb-2">New Microfinance Program</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Development Bank of Ethiopia launches 5% interest loan program for smallholder farmers. 
                  Up to 100,000 ETB available with 3-year repayment period.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm">Learn More →</button>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="text-gray-900 mb-2">Warehouse Receipt Financing</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Store your grain in certified warehouses and access immediate credit at 70% of market value. 
                  Available for coffee, sesame, and pulses.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm">Learn More →</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Policies and Regulations</h3>
            <div className="space-y-3">
              {[
                { title: 'New Export Tax Relief for Coffee Exporters', date: 'Dec 1, 2024' },
                { title: 'Fertilizer Subsidy Program Extended to 2025', date: 'Nov 28, 2024' },
                { title: 'Organic Certification Standards Updated', date: 'Nov 25, 2024' }
              ].map((policy, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-gray-900">{policy.title}</span>
                  <span className="text-sm text-gray-600">{policy.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Agronomic and Technical Advice */}
      {selectedCategory === 'Agronomic Advice' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4 flex items-center gap-2">
              <Sprout className="size-6 text-green-600" />
              Production Techniques
            </h3>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="text-gray-900 mb-2">Improved Teff Row Planting Method</h4>
                <p className="text-sm text-gray-600 mb-3">
                  New row planting technique increases teff yields by 30-40%. Reduces seed rate from 25kg/ha to 5-7kg/ha 
                  while improving grain quality and weed management.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs">Yield Increase</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs">Cost Reduction</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs">Research-Backed</span>
                </div>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="text-gray-900 mb-2">Integrated Soil Fertility Management</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Combining organic and inorganic fertilizers improves long-term soil health. Recommended: 
                  2 tons compost + 100kg DAP + 50kg Urea per hectare for cereal crops.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs">Sustainable</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded text-xs">Soil Health</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Input Management</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="text-blue-900 mb-2">Fertilizer Application Timing</h4>
                <p className="text-sm text-blue-800">
                  Apply DAP at planting. Split urea application: 1/3 at planting, 2/3 at tillering for cereals. 
                  Apply before rain for best results.
                </p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="text-green-900 mb-2">Seed Rate Recommendations</h4>
                <p className="text-sm text-green-800">
                  Wheat: 100-125 kg/ha, Teff (broadcast): 20-25 kg/ha, Teff (row): 5-7 kg/ha, 
                  Maize: 25-30 kg/ha, Barley: 100-120 kg/ha
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Crop Protection</h3>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-red-500 bg-red-50">
                <h4 className="text-red-900 mb-2">Alert: Fall Armyworm Management</h4>
                <p className="text-sm text-red-800 mb-3">
                  Scout maize fields twice weekly. Apply biopesticides (Bt or NPV) when 5% of plants show damage. 
                  Spray early morning or late evening for best efficacy.
                </p>
                <p className="text-sm text-red-700">Recommended: Emamectin benzoate or biological controls</p>
              </div>
              <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                <h4 className="text-yellow-900 mb-2">Wheat Rust Prevention</h4>
                <p className="text-sm text-yellow-800">
                  Use resistant varieties (Digelu, Kakaba). Fungicide application recommended if rust appears 
                  before grain filling stage.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Post-Harvest Management and Processing</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-gray-900 mb-3">Storage and Conservation</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Dry grain to 12-13% moisture before storage</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Use hermetic bags to prevent pest infestation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Store in cool, dry, well-ventilated areas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Inspect stored grain monthly for pests</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-900 mb-3">Local Processing</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Coffee washing stations improve quality and price</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Oil pressing adds 40-60% value to sesame</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Flour milling creates market for off-grade grain</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Quality and Certification</h3>
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-gray-900 mb-2">Organic Certification Process</h4>
                <p className="text-sm text-gray-600">
                  3-year conversion period required. Maintain records of all inputs and practices. 
                  Annual inspection by certified body. Premium price: +20-30% over conventional.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-gray-900 mb-2">Export Quality Standards</h4>
                <p className="text-sm text-gray-600">
                  Coffee: Grade 1-2 preferred. Max 12% moisture. Sesame: 99% purity, 85% germination. 
                  Pulses: Size uniformity, no insect damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Livestock and Animal Health */}
      {selectedCategory === 'Livestock & Animal Health' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Cattle Health</h3>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                <h4 className="text-blue-900 mb-2">Vaccination Schedule 2024-2025</h4>
                <p className="text-sm text-blue-800 mb-3">
                  Mandatory vaccinations: LSD (Lumpy Skin Disease) - December, FMD (Foot and Mouth) - January, 
                  Anthrax - February. Contact your local veterinary office.
                </p>
                <p className="text-sm text-blue-700">Free vaccination campaigns organized by Ministry of Agriculture</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-gray-900 mb-2">Common Disease Alert</h4>
                <p className="text-sm text-gray-600">
                  Blackleg cases reported in highland areas. Vaccinate calves at 3-4 months. 
                  Symptoms: Sudden death, swelling in muscles. Contact vet immediately if suspected.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Forage Management</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="text-gray-900 mb-2">Improved Forage Varieties</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Desho Grass: 50-60 tons fresh matter/ha/year</li>
                  <li>• Napier Grass: 80-100 tons/ha/year</li>
                  <li>• Alfalfa: High protein, 4-6 cuts/year</li>
                  <li>• Lablab: Drought tolerant, nitrogen fixing</li>
                </ul>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="text-gray-900 mb-2">Feed Conservation</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hay making: Cut at flowering, dry 3-4 days</li>
                  <li>• Silage: Chop, compact, seal airtight</li>
                  <li>• Urea treatment: Improves straw digestibility</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Genetics and Breeding</h3>
            <div className="space-y-3">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="text-green-900 mb-2">Artificial Insemination Services</h4>
                <p className="text-sm text-green-800 mb-2">
                  AI services available at district veterinary offices. Holstein-Friesian and Jersey semen available. 
                  Crossbreeding increases milk yield from 2-3 liters to 10-15 liters per day.
                </p>
                <p className="text-sm text-green-700">Cost: 100-200 ETB per service</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-gray-900 mb-2">Bull Selection Guidelines</h4>
                <p className="text-sm text-gray-600">
                  Choose bulls with good body condition, straight legs, healthy eyes. 
                  Avoid inbreeding - use bulls from different bloodlines. Replace bulls every 3-4 years.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Livestock Market Prices</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-700">Animal Type</th>
                    <th className="px-4 py-2 text-left text-gray-700">Average Price</th>
                    <th className="px-4 py-2 text-left text-gray-700">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-gray-900">Mature Ox (350-400 kg)</td>
                    <td className="px-4 py-2 text-gray-900">35,000-45,000 ETB</td>
                    <td className="px-4 py-2 text-green-600">↑ Stable</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-900">Dairy Cow (crossbred)</td>
                    <td className="px-4 py-2 text-gray-900">25,000-35,000 ETB</td>
                    <td className="px-4 py-2 text-green-600">↑ Increasing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-900">Sheep (adult)</td>
                    <td className="px-4 py-2 text-gray-900">2,500-3,500 ETB</td>
                    <td className="px-4 py-2 text-blue-600">→ Stable</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-900">Goat (adult)</td>
                    <td className="px-4 py-2 text-gray-900">1,800-2,500 ETB</td>
                    <td className="px-4 py-2 text-blue-600">→ Stable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Success Stories and Local Innovations */}
      {selectedCategory === 'Success Stories' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4 flex items-center gap-2">
              <Award className="size-6 text-yellow-600" />
              Model Farmer Profiles
            </h3>
            <div className="space-y-6">
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="size-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="size-8 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Ato Bekele Worku - Teff Production Champion</h4>
                    <p className="text-sm text-gray-600">Debre Zeit, Oromia Region</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Increased teff yield from 1.2 to 3.5 tons/ha using row planting method. Now trains other farmers 
                  in his district. Annual income increased from 45,000 to 180,000 ETB on 5 hectares.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs">+192% Yield</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs">Row Planting</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs">Trainer</span>
                </div>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="size-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="size-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">W/ro Hiwot Alemayehu - Dairy Success Story</h4>
                    <p className="text-sm text-gray-600">Holeta, Oromia Region</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Started with 2 local cows, now has 8 crossbred dairy cows producing 80 liters/day. 
                  Sells milk to local hotel and makes cheese. Monthly income: 48,000 ETB. Employs 2 workers.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs">80L/day</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs">Crossbreeding</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded text-xs">Value Addition</span>
                </div>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="size-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="size-8 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Sidama Coffee Cooperative - Export Excellence</h4>
                    <p className="text-sm text-gray-600">Hawassa, SNNPR</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Achieved Fair Trade and Organic certification. Direct export to European buyers. 
                  Farmer members receive 40% premium over local market price. Built washing station and training center.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs">Fair Trade</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs">Organic</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs">+40% Premium</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4 flex items-center gap-2">
              <Lightbulb className="size-6 text-yellow-600" />
              Emerging Technologies
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="text-gray-900 mb-2">Solar-Powered Irrigation</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Farmers in Tigray using solar pumps for vegetable production during dry season. 
                  Initial investment: 80,000-150,000 ETB. Payback period: 2-3 years.
                </p>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs">Water Access</span>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="text-gray-900 mb-2">Mobile Soil Testing Labs</h4>
                <p className="text-sm text-gray-600 mb-3">
                  District agriculture offices deploying mobile labs for on-farm soil testing. 
                  Get fertilizer recommendations in 30 minutes. Service fee: 50 ETB per sample.
                </p>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs">Precision Ag</span>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="text-gray-900 mb-2">Hermetic Storage Technology</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Zero-chemical pest control using airtight bags and silos. Grain quality maintained for 12+ months. 
                  Reduces post-harvest losses from 30% to less than 2%.
                </p>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs">Loss Prevention</span>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="text-gray-900 mb-2">Digital Extension via SMS</h4>
                <p className="text-sm text-gray-600 mb-3">
                  8028 short code provides weather alerts, market prices, and agronomic advice via SMS. 
                  Free service covering all major crops and livestock.
                </p>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs">Digital Access</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Agricultural Research Highlights</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="text-blue-900 mb-2">New Drought-Tolerant Maize Varieties</h4>
                <p className="text-sm text-blue-800">
                  Ethiopian Institute of Agricultural Research released 3 new maize varieties (BH-547, BH-548, BH-549) 
                  that maintain yields even with 20-30% rainfall reduction. Field trials show 25% yield advantage 
                  in drought-prone areas.
                </p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="text-green-900 mb-2">Coffee Rust Resistant Varieties</h4>
                <p className="text-sm text-green-800">
                  Jimma Agricultural Research Center breeding coffee varieties resistant to coffee berry disease 
                  and coffee wilt. New variety &apos;74158&apos; shows 90% disease resistance while maintaining 
                  excellent cup quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
