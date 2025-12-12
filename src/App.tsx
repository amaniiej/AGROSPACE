import { useState } from 'react';
import { Home } from './components/Home';
import { ProducerDashboard } from './components/producer/ProducerDashboard';
import { LocalBuyerDashboard } from './components/local-buyer/LocalBuyerDashboard';
import { ExporterDashboard } from './components/exporter/ExporterDashboard';
import { InternationalBuyerDashboard } from './components/international-buyer/InternationalBuyerDashboard';
import { AgriDashboard } from './components/agri-dashboard/AgriDashboard';

type View = 'home' | 'agri-dashboard' | 'local-seller' | 'local-buyer' | 'international-seller' | 'international-buyer';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  const handlePortalSelect = (portal: View) => {
    setCurrentView(portal);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === 'home' && (
        <Home onPortalSelect={handlePortalSelect} />
      )}
      {currentView === 'agri-dashboard' && (
        <AgriDashboard onBackToHome={handleBackToHome} />
      )}
      {currentView === 'local-seller' && (
        <ProducerDashboard onBackToHome={handleBackToHome} />
      )}
      {currentView === 'local-buyer' && (
        <LocalBuyerDashboard onBackToHome={handleBackToHome} />
      )}
      {currentView === 'international-seller' && (
        <ExporterDashboard onBackToHome={handleBackToHome} />
      )}
      {currentView === 'international-buyer' && (
        <InternationalBuyerDashboard onBackToHome={handleBackToHome} />
      )}
    </div>
  );
}