import { useState } from 'react';
import { Package, Search, TrendingUp, Calculator, Home, FileText, Shield } from 'lucide-react';
import { ExporterHome } from './ExporterHome';
import { CatalogSearch } from './CatalogSearch';
import { GlobalPricingTool } from '../international-buyer/GlobalPricingTool';
import { FOBCIFCalculator } from '../international-buyer/FOBCIFCalculator';
import { SampleRequest } from './SampleRequest';
import { DueDiligenceStatement } from '../shared/DueDiligenceStatement';

type Tab = 'home' | 'catalog' | 'pricing' | 'calculator' | 'samples' | 'due-diligence';

interface ExporterDashboardProps {
  onBackToHome: () => void;
}

export function ExporterDashboard({ onBackToHome }: ExporterDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [verificationStatus] = useState<'verified' | 'pending' | 'unverified'>('verified');

  const tabs = [
    { id: 'home' as Tab, label: 'Dashboard', icon: Home },
    { id: 'catalog' as Tab, label: 'Browse Products', icon: Search },
    { id: 'pricing' as Tab, label: 'Global Pricing', icon: TrendingUp },
    { id: 'calculator' as Tab, label: 'FOB/CIF Calculator', icon: Calculator },
    { id: 'samples' as Tab, label: 'Request Samples', icon: FileText },
    { id: 'due-diligence' as Tab, label: 'EUDR Statement', icon: Shield }
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
              <Package className="size-8 text-purple-600" />
              <div>
                <h1 className="text-purple-900">AGROSPACE</h1>
                <p className="text-sm text-gray-600">International Seller Portal</p>
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
                    flex items-center gap-2 px-6 py-3 border-b-2 transition-colors whitespace-nowrap
                    ${activeTab === tab.id
                      ? 'border-purple-600 text-purple-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                    }
                  `}
                >
                  <Icon className="size-5" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && <ExporterHome verificationStatus={verificationStatus} onNavigate={setActiveTab} />}
        {activeTab === 'catalog' && <CatalogSearch />}
        {activeTab === 'pricing' && <GlobalPricingTool />}
        {activeTab === 'calculator' && <FOBCIFCalculator />}
        {activeTab === 'samples' && <SampleRequest />}
        {activeTab === 'due-diligence' && <DueDiligenceStatement />}
      </main>
    </div>
  );
}