import { useState } from 'react';
import { Sprout, Package, TrendingUp, Truck, Home, Shield } from 'lucide-react';
import { TrustVerification } from './TrustVerification';
import { ProductListing } from './ProductListing';
import { PricingTool } from './PricingTool';
import { LogisticsRequest } from './LogisticsRequest';
import { ProducerHome } from './ProducerHome';

type Tab = 'home' | 'trust' | 'products' | 'pricing' | 'logistics';

interface ProducerDashboardProps {
  onBackToHome: () => void;
}

export function ProducerDashboard({ onBackToHome }: ProducerDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [verificationStatus, setVerificationStatus] = useState<'verified' | 'pending' | 'unverified'>('unverified');

  const tabs = [
    { id: 'home' as Tab, label: 'Dashboard', icon: Home },
    { id: 'trust' as Tab, label: 'Trust ID', icon: Shield },
    { id: 'products' as Tab, label: 'My Products', icon: Package },
    { id: 'pricing' as Tab, label: 'Market Intelligence', icon: TrendingUp },
    { id: 'logistics' as Tab, label: 'Logistics', icon: Truck }
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
              <Sprout className="size-8 text-green-600" />
              <div>
                <h1 className="text-green-900">AGROSPACE</h1>
                <p className="text-sm text-gray-600">Producer Portal</p>
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
                      ? 'border-green-600 text-green-600'
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
        {activeTab === 'home' && (
          <ProducerHome 
            verificationStatus={verificationStatus} 
            onNavigate={setActiveTab}
          />
        )}
        {activeTab === 'trust' && (
          <TrustVerification 
            status={verificationStatus}
            onStatusChange={setVerificationStatus}
          />
        )}
        {activeTab === 'products' && <ProductListing />}
        {activeTab === 'pricing' && <PricingTool />}
        {activeTab === 'logistics' && <LogisticsRequest />}
      </main>
    </div>
  );
}
