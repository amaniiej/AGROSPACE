import { useState } from 'react';
import { Leaf, Cloud, Map, User, Tractor, TrendingUp, Truck, Book, Satellite, Award, Lightbulb, Sun } from 'lucide-react';
import { WeatherAlerts } from '../local-buyer/WeatherAlerts';
import { PlotManagement } from '../local-buyer/PlotManagement';
import { ExtensionService } from '../local-buyer/ExtensionService';
import { RentMyTractor } from '../local-buyer/RentMyTractor';
import { LocalPricingTool } from '../local-buyer/LocalPricingTool';
import { QuickLogistics } from '../local-buyer/QuickLogistics';
import { LogisticsInfrastructure } from './LogisticsInfrastructure';
import { KnowledgeInputServices } from './KnowledgeInputServices';
import { MarketIntelligence } from './MarketIntelligence';
import { CertificationCompliance } from './CertificationCompliance';
import { SatelliteGIS } from './SatelliteGIS';

type Tab = 
  | 'weather' 
  | 'plots' 
  | 'extension' 
  | 'tractor' 
  | 'prices' 
  | 'transport' 
  | 'logistics'
  | 'knowledge'
  | 'intelligence'
  | 'certification'
  | 'satellite';

interface AgriDashboardProps {
  onBackToHome: () => void;
}

export function AgriDashboard({ onBackToHome }: AgriDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('logistics');

  const tabs = [
    { id: 'logistics' as Tab, label: 'Logistics & Infrastructure', icon: Truck },
    { id: 'knowledge' as Tab, label: 'Knowledge & Inputs', icon: Book },
    { id: 'intelligence' as Tab, label: 'Market Intelligence', icon: TrendingUp },
    { id: 'satellite' as Tab, label: 'Satellite & GIS', icon: Satellite },
    { id: 'certification' as Tab, label: 'Certification', icon: Award },
    { id: 'weather' as Tab, label: 'Weather & Climate', icon: Cloud },
    { id: 'plots' as Tab, label: 'Plot Management', icon: Map },
    { id: 'extension' as Tab, label: 'Extension Service', icon: User },
    { id: 'tractor' as Tab, label: 'Rent Equipment', icon: Tractor },
    { id: 'prices' as Tab, label: 'Local Prices', icon: TrendingUp },
    { id: 'transport' as Tab, label: 'Quick Transport', icon: Truck }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button 
              onClick={onBackToHome}
              className="flex items-center gap-3 hover:opacity-70 transition-opacity"
            >
              <Leaf className="size-8 text-green-600" />
              <div>
                <h1 className="text-green-900">AGROSPACE</h1>
                <p className="text-sm text-gray-600">Agricultural Dashboard</p>
              </div>
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex gap-1 -mb-px overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap text-sm
                    ${activeTab === tab.id
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                    }
                  `}
                >
                  <Icon className="size-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'logistics' && <LogisticsInfrastructure />}
        {activeTab === 'knowledge' && <KnowledgeInputServices />}
        {activeTab === 'intelligence' && <MarketIntelligence />}
        {activeTab === 'certification' && <CertificationCompliance />}
        {activeTab === 'satellite' && <SatelliteGIS />}
        {activeTab === 'weather' && <WeatherAlerts />}
        {activeTab === 'plots' && <PlotManagement />}
        {activeTab === 'extension' && <ExtensionService />}
        {activeTab === 'tractor' && <RentMyTractor />}
        {activeTab === 'prices' && <LocalPricingTool />}
        {activeTab === 'transport' && <QuickLogistics />}
      </main>
    </div>
  );
}
