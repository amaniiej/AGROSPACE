import { useState } from 'react';
import { Globe, FileText, Calculator, TrendingUp, Home } from 'lucide-react';
import { InternationalBuyerHome } from './InternationalBuyerHome';
import { SourcingRequestForm } from './SourcingRequestForm';
import { GlobalPricingTool } from './GlobalPricingTool';
import { FOBCIFCalculator } from './FOBCIFCalculator';
import { LeadManagement } from './LeadManagement';

type Tab = 'home' | 'sourcing' | 'pricing' | 'calculator' | 'leads';

interface InternationalBuyerDashboardProps {
  onBackToHome: () => void;
}

export function InternationalBuyerDashboard({ onBackToHome }: InternationalBuyerDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const tabs = [
    { id: 'home' as Tab, label: 'Dashboard', icon: Home },
    { id: 'sourcing' as Tab, label: 'Sourcing Request', icon: FileText },
    { id: 'pricing' as Tab, label: 'Global Pricing', icon: TrendingUp },
    { id: 'calculator' as Tab, label: 'FOB/CIF Calculator', icon: Calculator },
    { id: 'leads' as Tab, label: 'My Requests', icon: FileText }
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
              <Globe className="size-8 text-orange-600" />
              <div>
                <h1 className="text-orange-900">AGROSPACE</h1>
                <p className="text-sm text-gray-600">International Buyer Portal</p>
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
                      ? 'border-orange-600 text-orange-600'
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
        {activeTab === 'home' && <InternationalBuyerHome onNavigate={setActiveTab} />}
        {activeTab === 'sourcing' && <SourcingRequestForm />}
        {activeTab === 'pricing' && <GlobalPricingTool />}
        {activeTab === 'calculator' && <FOBCIFCalculator />}
        {activeTab === 'leads' && <LeadManagement />}
      </main>
    </div>
  );
}