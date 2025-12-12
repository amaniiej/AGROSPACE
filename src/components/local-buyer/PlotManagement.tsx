import { useState } from 'react';
import { Map, Plus, MapPin, Maximize, Calculator } from 'lucide-react';
import { ActionButton } from '../shared/ActionButton';
import { DataCard } from '../shared/DataCard';

export function PlotManagement() {
  const [plots, setPlots] = useState([
    {
      id: 1,
      name: 'North Field',
      area: 2.5,
      crop: 'Teff',
      coordinates: '9.0320° N, 38.7469° E',
      soilType: 'Clay Loam',
      potentialYield: 2.8,
      lastUpdated: '2024-12-05'
    },
    {
      id: 2,
      name: 'East Plot',
      area: 1.8,
      crop: 'Wheat',
      coordinates: '9.0325° N, 38.7475° E',
      soilType: 'Sandy Loam',
      potentialYield: 3.2,
      lastUpdated: '2024-12-04'
    }
  ]);

  const [showAddPlot, setShowAddPlot] = useState(false);
  const [showYieldCalculator, setShowYieldCalculator] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState<any>(null);

  const [yieldCalc, setYieldCalc] = useState({
    crop: '',
    area: '',
    soilQuality: '',
    rainfall: '',
    fertilizer: ''
  });

  const calculateYield = () => {
    const area = parseFloat(yieldCalc.area);
    const baseYields: { [key: string]: number } = {
      'Teff': 2.5,
      'Wheat': 3.0,
      'Maize': 4.5,
      'Barley': 2.8,
      'Chickpea': 2.2
    };

    let yield_per_ha = baseYields[yieldCalc.crop] || 2.5;

    // Soil quality adjustment
    if (yieldCalc.soilQuality === 'excellent') yield_per_ha *= 1.2;
    if (yieldCalc.soilQuality === 'good') yield_per_ha *= 1.1;
    if (yieldCalc.soilQuality === 'poor') yield_per_ha *= 0.8;

    // Rainfall adjustment
    if (yieldCalc.rainfall === 'adequate') yield_per_ha *= 1.1;
    if (yieldCalc.rainfall === 'low') yield_per_ha *= 0.85;

    // Fertilizer adjustment
    if (yieldCalc.fertilizer === 'yes') yield_per_ha *= 1.15;

    const totalYield = (yield_per_ha * area).toFixed(2);
    const yieldPerHa = yield_per_ha.toFixed(2);

    return { totalYield, yieldPerHa };
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-2">Plot Management Tools (Geolocation)</h2>
          <p className="text-gray-600">
            Map your plots, calculate potential yields, and optimize production
          </p>
        </div>
        <ActionButton
          variant="primary"
          icon={Plus}
          onClick={() => setShowAddPlot(true)}
        >
          Add New Plot
        </ActionButton>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <DataCard
          title="Total Area"
          value={`${plots.reduce((sum, p) => sum + p.area, 0).toFixed(1)} ha`}
          icon={<Maximize className="size-5" />}
          subtitle="All plots"
        />
        <DataCard
          title="Total Plots"
          value={plots.length.toString()}
          icon={<Map className="size-5" />}
          subtitle="Registered"
        />
        <DataCard
          title="Avg Yield Potential"
          value={`${(plots.reduce((sum, p) => sum + p.potentialYield, 0) / plots.length).toFixed(1)} t/ha`}
          icon={<Calculator className="size-5" />}
          subtitle="Calculated"
        />
        <DataCard
          title="Active Crops"
          value={new Set(plots.map(p => p.crop)).size.toString()}
          icon={<MapPin className="size-5" />}
          subtitle="Different types"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-4">
        <button
          onClick={() => setShowYieldCalculator(true)}
          className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all text-left group"
        >
          <Calculator className="size-8 text-blue-600 mb-3" />
          <h3 className="text-gray-900 mb-2">Potential Yield Calculator</h3>
          <p className="text-sm text-gray-600">
            Estimate crop yields based on plot characteristics and inputs
          </p>
          <div className="mt-4 text-blue-600 group-hover:text-blue-700">
            Calculate Yield →
          </div>
        </button>

        <button className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all text-left group">
          <Map className="size-8 text-blue-600 mb-3" />
          <h3 className="text-gray-900 mb-2">Interactive Map View</h3>
          <p className="text-sm text-gray-600">
            Visualize all your plots on a map with GPS coordinates
          </p>
          <div className="mt-4 text-blue-600 group-hover:text-blue-700">
            Open Map →
          </div>
        </button>
      </div>

      {/* Plots List */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-gray-900">My Plots</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700">Plot Name</th>
                <th className="px-6 py-3 text-left text-gray-700">Area (ha)</th>
                <th className="px-6 py-3 text-left text-gray-700">Current Crop</th>
                <th className="px-6 py-3 text-left text-gray-700">Coordinates</th>
                <th className="px-6 py-3 text-left text-gray-700">Soil Type</th>
                <th className="px-6 py-3 text-left text-gray-700">Potential Yield</th>
                <th className="px-6 py-3 text-left text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {plots.map((plot) => (
                <tr key={plot.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">{plot.name}</td>
                  <td className="px-6 py-4 text-gray-900">{plot.area} ha</td>
                  <td className="px-6 py-4 text-gray-900">{plot.crop}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{plot.coordinates}</td>
                  <td className="px-6 py-4 text-gray-600">{plot.soilType}</td>
                  <td className="px-6 py-4 text-green-600">{plot.potentialYield} t/ha</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedPlot(plot)}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Plot Modal */}
      {showAddPlot && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowAddPlot(false)}>
          <div className="bg-white rounded-lg max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-gray-900">Add New Plot</h3>
              <button onClick={() => setShowAddPlot(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Plot Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., South Field"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Area (hectares)</label>
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 2.5"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Current Crop</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select crop</option>
                      <option>Teff</option>
                      <option>Wheat</option>
                      <option>Maize</option>
                      <option>Barley</option>
                      <option>Chickpea</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Latitude</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 9.0320"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Longitude</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 38.7469"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Soil Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select soil type</option>
                    <option>Clay Loam</option>
                    <option>Sandy Loam</option>
                    <option>Silt Loam</option>
                    <option>Clay</option>
                    <option>Sandy</option>
                  </select>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    <strong>Tip:</strong> Use GPS on your smartphone to get accurate coordinates. 
                    You can also use the map view to mark plot boundaries.
                  </p>
                </div>
                <ActionButton type="submit" variant="primary" fullWidth>
                  Add Plot
                </ActionButton>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Yield Calculator Modal */}
      {showYieldCalculator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowYieldCalculator(false)}>
          <div className="bg-white rounded-lg max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-gray-900">Potential Yield Calculator</h3>
              <button onClick={() => setShowYieldCalculator(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Crop Type</label>
                  <select
                    value={yieldCalc.crop}
                    onChange={(e) => setYieldCalc({ ...yieldCalc, crop: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select crop</option>
                    <option>Teff</option>
                    <option>Wheat</option>
                    <option>Maize</option>
                    <option>Barley</option>
                    <option>Chickpea</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Plot Area (hectares)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={yieldCalc.area}
                    onChange={(e) => setYieldCalc({ ...yieldCalc, area: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 2.5"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Soil Quality</label>
                  <select
                    value={yieldCalc.soilQuality}
                    onChange={(e) => setYieldCalc({ ...yieldCalc, soilQuality: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select quality</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="average">Average</option>
                    <option value="poor">Poor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Expected Rainfall</label>
                  <select
                    value={yieldCalc.rainfall}
                    onChange={(e) => setYieldCalc({ ...yieldCalc, rainfall: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select rainfall</option>
                    <option value="adequate">Adequate</option>
                    <option value="average">Average</option>
                    <option value="low">Below Average</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Will Use Fertilizer?</label>
                  <select
                    value={yieldCalc.fertilizer}
                    onChange={(e) => setYieldCalc({ ...yieldCalc, fertilizer: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {yieldCalc.crop && yieldCalc.area && yieldCalc.soilQuality && yieldCalc.rainfall && yieldCalc.fertilizer && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="text-green-900 mb-4">Estimated Yield</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-green-700 mb-1">Per Hectare</p>
                        <p className="text-3xl text-green-900">{calculateYield().yieldPerHa} t/ha</p>
                      </div>
                      <div>
                        <p className="text-sm text-green-700 mb-1">Total Yield</p>
                        <p className="text-3xl text-green-900">{calculateYield().totalYield} tons</p>
                      </div>
                    </div>
                    <p className="text-sm text-green-700 mt-4">
                      Based on average conditions and recommended practices. Actual yields may vary.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
