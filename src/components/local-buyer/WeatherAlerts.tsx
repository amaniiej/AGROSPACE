import { Cloud, AlertTriangle, Droplets, Wind, Sun, Calendar, Sprout, Bug } from 'lucide-react';
import { AlertNotification } from '../shared/AlertNotification';

export function WeatherAlerts() {
  const currentWeather = {
    location: 'Addis Ababa',
    temp: 18,
    condition: 'Partly Cloudy',
    humidity: 65,
    wind: 12,
    rainfall: 0
  };

  const forecast = [
    { day: 'Mon', date: 'Dec 9', high: 21, low: 12, rain: 20, icon: 'cloudy' },
    { day: 'Tue', date: 'Dec 10', high: 22, low: 13, rain: 10, icon: 'sunny' },
    { day: 'Wed', date: 'Dec 11', high: 20, low: 11, rain: 60, icon: 'rainy' },
    { day: 'Thu', date: 'Dec 12', high: 19, low: 10, rain: 70, icon: 'rainy' },
    { day: 'Fri', date: 'Dec 13', high: 21, low: 12, rain: 30, icon: 'cloudy' },
    { day: 'Sat', date: 'Dec 14', high: 23, low: 14, rain: 10, icon: 'sunny' },
    { day: 'Sun', date: 'Dec 15', high: 22, low: 13, rain: 15, icon: 'sunny' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Weather & Climate Alerts</h2>
        <p className="text-gray-600">
          Localized weather forecasts, early warnings, and agronomic advice
        </p>
      </div>

      {/* Early Warnings */}
      <div className="space-y-4">
        <AlertNotification
          type="warning"
          title="Heavy Rainfall Warning"
          message="Expected rainfall 50-80mm on Dec 11-12. Postpone spraying operations. Ensure proper drainage in low-lying fields."
        />
        <AlertNotification
          type="info"
          title="Optimal Planting Window"
          message="Soil moisture levels ideal for teff planting in highland areas (Dec 8-15). Begin land preparation now."
        />
      </div>

      {/* Current Weather */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-blue-900 mb-1">Current Weather</h3>
            <p className="text-blue-700">{currentWeather.location}</p>
          </div>
          <Cloud className="size-16 text-blue-600" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/50 rounded-lg p-4 text-center">
            <p className="text-4xl text-blue-900">{currentWeather.temp}°C</p>
            <p className="text-sm text-blue-700 mt-1">{currentWeather.condition}</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Droplets className="size-5 text-blue-600" />
              <p className="text-2xl text-blue-900">{currentWeather.humidity}%</p>
            </div>
            <p className="text-sm text-blue-700">Humidity</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Wind className="size-5 text-blue-600" />
              <p className="text-2xl text-blue-900">{currentWeather.wind} km/h</p>
            </div>
            <p className="text-sm text-blue-700">Wind Speed</p>
          </div>
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">7-Day Localized Forecast</h3>
        <div className="grid grid-cols-7 gap-3">
          {forecast.map((day, index) => (
            <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-900 mb-1">{day.day}</p>
              <p className="text-xs text-gray-600 mb-3">{day.date}</p>
              {day.icon === 'sunny' && <Sun className="size-8 text-yellow-500 mx-auto mb-2" />}
              {day.icon === 'cloudy' && <Cloud className="size-8 text-gray-500 mx-auto mb-2" />}
              {day.icon === 'rainy' && <Droplets className="size-8 text-blue-500 mx-auto mb-2" />}
              <p className="text-sm text-gray-900">{day.high}°</p>
              <p className="text-xs text-gray-600">{day.low}°</p>
              <div className="mt-2 pt-2 border-t border-gray-200">
                <p className="text-xs text-blue-600">{day.rain}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Climate History and Trends */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-gray-900 mb-4">Climate History (Last 30 Days)</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Total Rainfall</span>
              <span className="text-gray-900">142 mm</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Avg Temperature</span>
              <span className="text-gray-900">19.5°C</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Rainy Days</span>
              <span className="text-gray-900">12 days</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Avg Humidity</span>
              <span className="text-gray-900">68%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-gray-900 mb-4">Seasonal Outlook</h3>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <Calendar className="size-5 text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="text-gray-900 mb-1">Belg Season (Feb-May)</h4>
                <p className="text-gray-600">Normal to above-normal rainfall expected. Good for short-cycle crops.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Calendar className="size-5 text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="text-gray-900 mb-1">Kiremt Season (Jun-Sep)</h4>
                <p className="text-gray-600">Long-range forecast indicates average rainfall. Plan main cereal crops.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weather-Based Agronomic Advice */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4 flex items-center gap-2">
          <Sprout className="size-6 text-green-600" />
          Weather-Based Agronomic Advice
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-gray-900 mb-3">This Week&apos;s Recommendations</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Heavy rain expected Wed-Thu. Complete fertilizer application by Tuesday.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Good weather Fri-Sun for spraying herbicides (low wind, no rain forecast).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Soil moisture adequate for planting. Prepare seeds and equipment now.</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 mb-3">Dynamic Cropping Calendar</h4>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-900 mb-1">✓ Optimal: Teff Planting</p>
                <p className="text-green-700 text-xs">Dec 8-20 (based on current soil moisture)</p>
              </div>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-900 mb-1">⚠ Caution: Wheat Planting</p>
                <p className="text-yellow-700 text-xs">Wait until after heavy rains (Dec 13+)</p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-900 mb-1">→ Coming Soon: Pulse Planting</p>
                <p className="text-blue-700 text-xs">Expected window: Dec 20-30</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Crop Health and Phytosanitary Alerts */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4 flex items-center gap-2">
          <Bug className="size-6 text-red-600" />
          Crop Health & Phytosanitary Alerts
        </h3>
        <div className="space-y-4">
          <div className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <AlertTriangle className="size-6 text-red-600 flex-shrink-0" />
            <div>
              <h4 className="text-red-900 mb-1">Fall Armyworm Alert - Moderate Risk</h4>
              <p className="text-sm text-red-800 mb-2">
                Warm, humid conditions favor armyworm development in maize fields. Scout fields regularly.
              </p>
              <p className="text-sm text-red-700">
                <strong>Action:</strong> Apply recommended biopesticides early morning or late evening.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <AlertTriangle className="size-6 text-yellow-600 flex-shrink-0" />
            <div>
              <h4 className="text-yellow-900 mb-1">Wheat Rust Risk - Low to Moderate</h4>
              <p className="text-sm text-yellow-800 mb-2">
                Cool, wet weather (Dec 11-12) may increase rust disease pressure in susceptible varieties.
              </p>
              <p className="text-sm text-yellow-700">
                <strong>Action:</strong> Consider preventive fungicide application if using susceptible varieties.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Input Recommendations Based on Weather */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Input Recommendations (Weather-Adjusted)</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-gray-900 mb-2">Fertilizer Application</h4>
            <p className="text-sm text-gray-600 mb-3">
              Apply before Dec 11 rain events. Rain will help dissolve and distribute nutrients.
            </p>
            <button className="text-blue-600 hover:text-blue-700 text-sm">
              View fertilizer options →
            </button>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-gray-900 mb-2">Pesticide Spraying</h4>
            <p className="text-sm text-gray-600 mb-3">
              Best window: Dec 9-10, Dec 14-15 (dry weather, low wind).
            </p>
            <button className="text-blue-600 hover:text-blue-700 text-sm">
              Browse pesticides →
            </button>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-gray-900 mb-2">Irrigation Planning</h4>
            <p className="text-sm text-gray-600 mb-3">
              Reduce irrigation Dec 11-13. Resume normal schedule from Dec 14.
            </p>
            <button className="text-blue-600 hover:text-blue-700 text-sm">
              Irrigation tools →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
