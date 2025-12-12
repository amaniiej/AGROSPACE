import { useState } from 'react';
import { ShoppingCart, Search, Home, Wrench, Sprout, Newspaper } from 'lucide-react';
import { LocalBuyerHome } from './LocalBuyerHome';
import { LocalCatalog } from './LocalCatalog';
import { MachineryMarketplace } from './MachineryMarketplace';
import { SeedsMarketplace } from './SeedsMarketplace';
import { GlobalMediaWindow } from './GlobalMediaWindow';

type Tab = 'home' | 'catalog' | 'machinery' | 'seeds' | 'media';

interface LocalBuyerDashboardProps {
  onBackToHome: () => void;
}

export function LocalBuyerDashboard({ onBackToHome }: LocalBuyerDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const tabs = [
    { id: 'home' as Tab, label: 'Dashboard', icon: Home },
    { id: 'catalog' as Tab, label: 'Browse Stock', icon: Search },
    { id: 'machinery' as Tab, label: 'Machinery', icon: Wrench },
    { id: 'seeds' as Tab, label: 'Seeds & Inputs', icon: Sprout },
    { id: 'media' as Tab, label: 'Media Center', icon: Newspaper }
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
              <ShoppingCart className="size-8 text-blue-600" />
              <div>
                <h1 className="text-blue-900">AGROSPACE</h1>
                <p className="text-sm text-gray-600">Local Buyer Portal</p>
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
                      ? 'border-blue-600 text-blue-600'
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
        {activeTab === 'home' && <LocalBuyerHome onNavigate={setActiveTab} />}
        {activeTab === 'catalog' && <LocalCatalog />}
        {activeTab === 'machinery' && <MachineryMarketplace />}
        {activeTab === 'seeds' && <SeedsMarketplace />}
        {activeTab === 'media' && <GlobalMediaWindow />}
      </main>
    </div>
  );
}