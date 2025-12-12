import { useState } from 'react';
import { Satellite, Map, Upload, Download, MapPin, Maximize } from 'lucide-react';
import { ActionButton } from '../shared/ActionButton';
import { DataCard } from '../shared/DataCard';

export function SatelliteGIS() {
  const [selectedTool, setSelectedTool] = useState<'satellite' | 'field-survey' | 'digitize'>('satellite');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Satellite Imagery & GIS Platform</h2>
        <p className="text-gray-600">
          Digitalize and georeference agricultural parcels using satellite imagery, field surveys, and web mapping tools
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <DataCard
          title="Mapped Parcels"
          value="0"
          icon={<Map className="size-5" />}
          subtitle="Start mapping your plots"
        />
        <DataCard
          title="Total Area"
          value="0 ha"
          icon={<Maximize className="size-5" />}
          subtitle="Georeferenced land"
        />
        <DataCard
          title="Accuracy"
          value="±3m"
          icon={<Satellite className="size-5" />}
          subtitle="GPS precision"
        />
        <DataCard
          title="Data Format"
          value="GeoJSON"
          icon={<Download className="size-5" />}
          subtitle="Standard format"
        />
      </div>

      {/* Key Benefits */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-900 mb-3">Why Parcel Digitalization Matters</h3>
        <div className="grid md:grid-cols-4 gap-4 text-sm text-blue-800">
          <div>
            <h4 className="text-blue-900 mb-1">✓ Legal Documentation</h4>
            <p>Precise land boundaries for ownership and leasing</p>
          </div>
          <div>
            <h4 className="text-blue-900 mb-1">✓ Credit Access</h4>
            <p>Banks require georeferenced plots for agricultural loans</p>
          </div>
          <div>
            <h4 className="text-blue-900 mb-1">✓ Input Planning</h4>
            <p>Calculate exact seed, fertilizer needs based on accurate area</p>
          </div>
          <div>
            <h4 className="text-blue-900 mb-1">✓ EUDR Compliance</h4>
            <p>Meet EU deforestation regulation requirements for exports</p>
          </div>
        </div>
      </div>

      {/* Tool Selection */}
      <div className="flex gap-2">
        {[
          { id: 'satellite' as const, label: 'Satellite Imagery Analysis', icon: Satellite },
          { id: 'field-survey' as const, label: 'Mobile Field Survey', icon: MapPin },
          { id: 'digitize' as const, label: 'Web Digitalization', icon: Map }
        ].map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-lg transition-all
                ${selectedTool === tool.id
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-green-500'
                }
              `}
            >
              <Icon className="size-5" />
              {tool.label}
            </button>
          );
        })}
      </div>

      {/* Module 1: Satellite Imagery and GIS Platform */}
      {selectedTool === 'satellite' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="size-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Satellite className="size-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">Satellite Imagery Analysis</h3>
                <p className="text-gray-600">
                  Automatically delimit farm parcels using satellite imagery from Sentinel, Landsat, or commercial providers
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Input Section */}
              <div>
                <h4 className="text-gray-900 mb-4">Step 1: Select Your Farm Location</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Farm/Plot Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g., North Coffee Field"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Latitude (Center Point)</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="e.g., 9.0320"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Longitude (Center Point)</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="e.g., 38.7469"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Approximate Area (optional)</label>
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="hectares"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Satellite Data Source</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option>Sentinel-2 (10m resolution, Free)</option>
                      <option>Landsat 8 (30m resolution, Free)</option>
                      <option>Planet Labs (3m resolution, Premium)</option>
                      <option>Maxar (0.5m resolution, Premium)</option>
                    </select>
                  </div>

                  <ActionButton variant="primary" fullWidth icon={Satellite}>
                    Load Satellite Imagery
                  </ActionButton>
                </div>
              </div>

              {/* Preview/Map Section */}
              <div>
                <h4 className="text-gray-900 mb-4">Satellite Image Preview</h4>
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Satellite className="size-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Satellite imagery will appear here</p>
                    <p className="text-sm text-gray-500">Enter coordinates and click &quot;Load Satellite Imagery&quot;</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-gray-600">Image Date:</span>
                    <span className="text-gray-900">Not loaded</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-gray-600">Cloud Cover:</span>
                    <span className="text-gray-900">-</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-gray-600">Resolution:</span>
                    <span className="text-gray-900">-</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Auto-Detection Features */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Step 2: AI-Powered Parcel Detection</h3>
            <p className="text-gray-600 mb-6">
              Our machine learning algorithms automatically identify field boundaries based on vegetation patterns, 
              color differences, and historical cultivation data.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="text-green-900 mb-2">Vegetation Analysis</h4>
                <p className="text-sm text-green-800">
                  NDVI (Normalized Difference Vegetation Index) to identify crop areas
                </p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="text-blue-900 mb-2">Edge Detection</h4>
                <p className="text-sm text-blue-800">
                  Identifies field boundaries, paths, and water bodies
                </p>
              </div>
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h4 className="text-purple-900 mb-2">Temporal Analysis</h4>
                <p className="text-sm text-purple-800">
                  Compares images across seasons for accurate delineation
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <ActionButton variant="primary" fullWidth>
                Run Auto-Detection
              </ActionButton>
              <ActionButton variant="outline" fullWidth>
                Manual Boundary Drawing
              </ActionButton>
            </div>
          </div>

          {/* Output & Export */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Step 3: Validate & Export</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-gray-900 mb-3">Detected Parcel Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-gray-600">Parcel ID:</span>
                    <span className="text-blue-600">ETH-ORM-2024-001</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-gray-600">Calculated Area:</span>
                    <span className="text-gray-900">2.47 hectares</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-gray-600">Perimeter:</span>
                    <span className="text-gray-900">625 meters</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-gray-600">Center Coordinates:</span>
                    <span className="text-gray-900">9.0320°N, 38.7469°E</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-gray-600">Accuracy:</span>
                    <span className="text-green-600">±5 meters</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-gray-900 mb-3">Export Options</h4>
                <div className="space-y-3">
                  <ActionButton variant="outline" fullWidth icon={Download}>
                    Download GeoJSON
                  </ActionButton>
                  <ActionButton variant="outline" fullWidth icon={Download}>
                    Download Shapefile (.shp)
                  </ActionButton>
                  <ActionButton variant="outline" fullWidth icon={Download}>
                    Download KML (Google Earth)
                  </ActionButton>
                  <ActionButton variant="primary" fullWidth>
                    Save to Platform Database
                  </ActionButton>
                </div>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-900 mb-2">
                    <strong>Central Repository:</strong> Your parcels are stored in our geospatial database
                  </p>
                  <p className="text-xs text-blue-700">
                    Format: PostGIS-compatible • API Access: Available • Integration: Ready for EUDR compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Module 2: Mobile Field Survey Tool */}
      {selectedTool === 'field-survey' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="size-16 bg-green-100 rounded-full flex items-center justify-center">
                <MapPin className="size-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">Mobile Field Survey Tool</h3>
                <p className="text-gray-600">
                  Walk your farm boundaries with high-precision GPS to validate and refine satellite-derived boundaries
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <h4 className="text-amber-900 mb-3">How It Works</h4>
              <div className="grid md:grid-cols-4 gap-4 text-sm text-amber-800">
                <div>
                  <h5 className="text-amber-900 mb-1">1. Download App</h5>
                  <p>Install our mobile app on Android or iOS device</p>
                </div>
                <div>
                  <h5 className="text-amber-900 mb-1">2. Walk Boundaries</h5>
                  <p>Walk along your field edges with GPS enabled</p>
                </div>
                <div>
                  <h5 className="text-amber-900 mb-1">3. Record Points</h5>
                  <p>App automatically records GPS coordinates</p>
                </div>
                <div>
                  <h5 className="text-amber-900 mb-1">4. Upload Data</h5>
                  <p>Sync to platform for validation and storage</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* App Download */}
              <div>
                <h4 className="text-gray-900 mb-4">Download Mobile App</h4>
                <div className="space-y-4">
                  <div className="p-6 bg-gray-50 rounded-lg text-center">
                    <div className="size-24 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="size-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                    </div>
                    <h5 className="text-gray-900 mb-2">iOS App</h5>
                    <p className="text-sm text-gray-600 mb-4">Requires iOS 13.0 or later</p>
                    <ActionButton variant="primary" fullWidth>
                      Download from App Store
                    </ActionButton>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-lg text-center">
                    <div className="size-24 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="size-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626c.606.35.606 1.185 0 1.535l-2.807 1.626-2.524-2.524 2.524-2.263zm-3.199-.693L5.864 2.483l10.937 6.333-2.302 2.302z"/>
                      </svg>
                    </div>
                    <h5 className="text-gray-900 mb-2">Android App</h5>
                    <p className="text-sm text-gray-600 mb-4">Requires Android 8.0 or later</p>
                    <ActionButton variant="primary" fullWidth>
                      Download from Play Store
                    </ActionButton>
                  </div>
                </div>
              </div>

              {/* Features & Requirements */}
              <div>
                <h4 className="text-gray-900 mb-4">App Features</h4>
                <div className="space-y-3 mb-6">
                  {[
                    'High-precision GPS (±3m accuracy with GNSS correction)',
                    'Offline mode for areas without internet',
                    'Real-time area calculation',
                    'Photo attachment for field documentation',
                    'Boundary validation against satellite data',
                    'Cloud sync with platform database',
                    'Multi-plot tracking and management'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm">
                      <svg className="size-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h5 className="text-green-900 mb-2">GNSS Correction Services (Optional)</h5>
                  <p className="text-sm text-green-800 mb-3">
                    For sub-meter accuracy, connect to Ethiopia&apos;s CORS (Continuously Operating Reference Stations) network
                  </p>
                  <p className="text-xs text-green-700">
                    Available in major agricultural regions • Improves accuracy to ±0.5m • Free for registered farmers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Field Survey Best Practices */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Field Survey Best Practices</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-gray-900 mb-3">Before You Start</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Charge your phone fully</li>
                  <li>• Enable location/GPS services</li>
                  <li>• Download offline maps of your area</li>
                  <li>• Create your plot in the app first</li>
                  <li>• Plan your walking route</li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-900 mb-3">During Survey</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Walk slowly along exact boundaries</li>
                  <li>• Mark corner points precisely</li>
                  <li>• Avoid tall buildings or tree cover</li>
                  <li>• Wait for GPS signal to stabilize</li>
                  <li>• Take photos of landmarks</li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-900 mb-3">After Survey</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Review boundary on map</li>
                  <li>• Check calculated area</li>
                  <li>• Add plot metadata (crop, soil type)</li>
                  <li>• Sync data to platform</li>
                  <li>• Validate against satellite imagery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Module 3: Web Digitalization Interface */}
      {selectedTool === 'digitize' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="size-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Map className="size-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">Web Digitalization Interface</h3>
                <p className="text-gray-600">
                  Manually digitize paper maps or refine boundaries using interactive web mapping tools
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="col-span-2">
                <h4 className="text-gray-900 mb-4">Interactive Map Editor</h4>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-[600px] flex items-center justify-center border-2 border-gray-300">
                  <div className="text-center">
                    <Map className="size-20 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Interactive Mapping Interface</p>
                    <p className="text-sm text-gray-500 mb-4">Powered by Mapbox GL JS / Leaflet</p>
                    <div className="flex gap-2 justify-center">
                      <button className="px-4 py-2 bg-white rounded shadow hover:bg-gray-50">
                        🔍 Zoom
                      </button>
                      <button className="px-4 py-2 bg-white rounded shadow hover:bg-gray-50">
                        ✏️ Draw Polygon
                      </button>
                      <button className="px-4 py-2 bg-white rounded shadow hover:bg-gray-50">
                        📍 Add Point
                      </button>
                      <button className="px-4 py-2 bg-white rounded shadow hover:bg-gray-50">
                        📏 Measure
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <ActionButton variant="primary">
                    Save Polygon
                  </ActionButton>
                  <ActionButton variant="outline">
                    Clear
                  </ActionButton>
                  <ActionButton variant="outline" icon={Upload}>
                    Upload Scanned Map
                  </ActionButton>
                  <ActionButton variant="outline" icon={Download}>
                    Export GeoJSON
                  </ActionButton>
                </div>
              </div>

              <div>
                <h4 className="text-gray-900 mb-4">Drawing Tools</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="text-gray-900 mb-2 text-sm">Polygon Drawing</h5>
                    <p className="text-xs text-gray-600 mb-3">
                      Click to add points along field boundary. Double-click to finish.
                    </p>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Start Drawing
                    </button>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="text-gray-900 mb-2 text-sm">Edit Existing Polygon</h5>
                    <p className="text-xs text-gray-600 mb-3">
                      Drag corner points to refine boundaries.
                    </p>
                    <button className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                      Edit Mode
                    </button>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="text-gray-900 mb-2 text-sm">Coordinate Entry</h5>
                    <p className="text-xs text-gray-600 mb-3">
                      Manually enter coordinates for precise boundaries.
                    </p>
                    <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                      Enter Coordinates
                    </button>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="text-gray-900 mb-2 text-sm">Upload Scanned Map</h5>
                    <p className="text-xs text-gray-600 mb-3">
                      Georeference paper maps by marking control points.
                    </p>
                    <button className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                      Upload Image
                    </button>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h5 className="text-blue-900 mb-2 text-sm">Current Polygon</h5>
                  <div className="space-y-1 text-xs text-blue-800">
                    <div className="flex justify-between">
                      <span>Points:</span>
                      <span>0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Area:</span>
                      <span>0 ha</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Perimeter:</span>
                      <span>0 m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upload Paper Maps */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Digitize Paper Maps</h3>
            <p className="text-gray-600 mb-6">
              If you have existing paper maps or land certificates with boundaries, upload and georeference them digitally.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-gray-900 mb-3">Upload Your Map</h4>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors cursor-pointer">
                  <Upload className="size-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-900 mb-1">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-600 mb-4">PNG, JPG, PDF up to 10MB</p>
                  <ActionButton variant="primary">
                    Select File
                  </ActionButton>
                </div>
              </div>

              <div>
                <h4 className="text-gray-900 mb-3">Georeferencing Steps</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <div className="size-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h5 className="text-gray-900 mb-1">Upload map image</h5>
                      <p className="text-gray-600">Scan or photograph your paper map</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="size-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h5 className="text-gray-900 mb-1">Mark control points</h5>
                      <p className="text-gray-600">Identify recognizable landmarks on both the map and satellite image</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="size-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h5 className="text-gray-900 mb-1">Align and warp</h5>
                      <p className="text-gray-600">System automatically aligns your map to real-world coordinates</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="size-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h5 className="text-gray-900 mb-1">Trace boundaries</h5>
                      <p className="text-gray-600">Draw polygons over your georeferenced map</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Central Repository Information */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-green-900 mb-4">Central Parcel Repository</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="text-green-900 mb-2">Storage & Format</h4>
            <ul className="text-green-800 space-y-1">
              <li>• PostGIS/GeoServer backend</li>
              <li>• GeoJSON, Shapefile, KML support</li>
              <li>• Unique parcel IDs assigned</li>
              <li>• Linked to farmer Trust ID</li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-900 mb-2">Data Security</h4>
            <ul className="text-blue-800 space-y-1">
              <li>• Encrypted cloud storage</li>
              <li>• Access control by ownership</li>
              <li>• Backup and version history</li>
              <li>• GDPR compliant</li>
            </ul>
          </div>
          <div>
            <h4 className="text-purple-900 mb-2">Integration & Use</h4>
            <ul className="text-purple-800 space-y-1">
              <li>• EUDR compliance documentation</li>
              <li>• Agricultural loan applications</li>
              <li>• Input calculation tools</li>
              <li>• Precision agriculture planning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
