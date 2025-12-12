import { Sprout, Package, TrendingUp, Shield, ShoppingCart, Globe } from 'lucide-react';
import logo from '../assets/logo_icon.png';

interface HomeProps {
  onPortalSelect: (portal: 'agri-dashboard' | 'local-seller' | 'local-buyer' | 'international-seller' | 'international-buyer') => void;
}

export function Home({ onPortalSelect }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      
     <header className="bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    {/* LEFT‑ALIGNED ROW */}
    <div className="flex items-center gap-2">
      <img
        src={logo}
        alt="Agrospace Logo"
        style={{ height: "25px", width: "auto", display: "block" }}
      />
      <h1 className="text-lg font-semibold text-green-900 tracking-tight">
        AGROSPACE
      </h1>
      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
        B2B AgriTech Platform
      </span>
    </div>
  </div>
</header>




      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-green-900 mb-4">Trusted B2B Agricultural Marketplace</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect verified producers with local and global buyers. Built on trust, powered by intelligence.
          </p>
        </div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <Shield className="size-10 text-green-600 mb-4" />
            <h3 className="text-gray-900 mb-2">Trust ID Verification</h3>
            <p className="text-gray-600">Legal verification for B2B credibility</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <Package className="size-10 text-green-600 mb-4" />
            <h3 className="text-gray-900 mb-2">Product Catalog</h3>
            <p className="text-gray-600">Discover verified agricultural products</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <TrendingUp className="size-10 text-green-600 mb-4" />
            <h3 className="text-gray-900 mb-2">Market Intelligence</h3>
            <p className="text-gray-600">Real-time pricing and trends</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <Sprout className="size-10 text-green-600 mb-4" />
            <h3 className="text-gray-900 mb-2">Premium Brokerage</h3>
            <p className="text-gray-600">Qualified leads for specialty coffee</p>
          </div>
        </div>

        {/* Portal Selection - Four Hubs */}
        <div className="mb-8">
          <h2 className="text-center text-gray-900 mb-3">Select Your Portal</h2>
          <p className="text-center text-gray-600 mb-8">Choose the portal that matches your business role</p>
        </div>

        {/* Agricultural Dashboard - Highlighted */}
        <div className="max-w-4xl mx-auto mb-12">
          <button
            onClick={() => onPortalSelect('agri-dashboard')}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 p-8 rounded-xl border-2 border-green-400 hover:shadow-2xl transition-all text-left group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-white rounded-lg">
                <Sprout className="size-12 text-green-600" />
              </div>
              <div>
                <h2 className="text-white mb-2">Agricultural Dashboard</h2>
                <p className="text-green-100">
                  Comprehensive tools for logistics, knowledge services, market intelligence, and farm management
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-3 text-sm text-white">
              <div className="flex items-center gap-2">
                <div className="size-2 bg-white rounded-full"></div>
                Logistics & Infrastructure
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 bg-white rounded-full"></div>
                Knowledge & Input Services
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 bg-white rounded-full"></div>
                Market Intelligence
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 bg-white rounded-full"></div>
                Satellite & GIS Platform
              </div>
            </div>
            <div className="mt-6 text-white text-lg flex items-center gap-2">
              Access Agricultural Dashboard →
            </div>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* P1: Local Seller Hub */}
          <button
            onClick={() => onPortalSelect('local-seller')}
            className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-green-500 hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-600 transition-colors">
                <Sprout className="size-8 text-green-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">P1: Local Seller Hub</h3>
                <p className="text-sm text-gray-600">Producers / Cooperatives</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Stock management, local price analysis, and product listing for Ethiopian producers.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <div className="size-1.5 bg-green-600 rounded-full"></div>
                Get Trust ID verification
              </li>
              <li className="flex items-center gap-2">
                <div className="size-1.5 bg-green-600 rounded-full"></div>
                Manage inventory (Dokan-style)
              </li>
              <li className="flex items-center gap-2">
                <div className="size-1.5 bg-green-600 rounded-full"></div>
                Access local pricing tools
              </li>
            </ul>
            <div className="mt-6 text-green-600 group-hover:text-green-700">
              Enter Local Seller Hub →
            </div>
          </button>

          {/* P2: Local Buyer Hub */}
          <button
            onClick={() => onPortalSelect('local-buyer')}
            className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                <ShoppingCart className="size-8 text-blue-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">P2: Local Buyer Hub</h3>
                <p className="text-sm text-gray-600">Domestic Traders</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Spot purchasing, regional sourcing, and quick logistics for local buyers.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <div className="size-1.5 bg-blue-600 rounded-full"></div>
                Browse immediate stock
              </li>
              <li className="flex items-center gap-2">
                <div className="size-1.5 bg-blue-600 rounded-full"></div>
                Local price negotiation tools
              </li>
              <li className="flex items-center gap-2">
                <div className="size-1.5 bg-blue-600 rounded-full"></div>
                Quick domestic logistics
              </li>
            </ul>
            <div className="mt-6 text-blue-600 group-hover:text-blue-700">
              Enter Local Buyer Hub →
            </div>
          </button>

          {/* P3: International Seller Hub */}
          <button
            onClick={() => onPortalSelect('international-seller')}
            className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-600 transition-colors">
                <Package className="size-8 text-purple-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">P3: International Seller Hub</h3>
                <p className="text-sm text-gray-600">Exporters</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Profile valorization, lead management, and international certification management.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <div className="size-1.5 bg-purple-600 rounded-full"></div>
                Manage export certifications
              </li>
              <li className="flex items-center gap-2">
                <div className="size-1.5 bg-purple-600 rounded-full"></div>
                Handle qualified leads
              </li>
              <li className="flex items-center gap-2">
                <div className="size-1.5 bg-purple-600 rounded-full"></div>
                Build international profile
              </li>
            </ul>
            <div className="mt-6 text-purple-600 group-hover:text-purple-700">
              Enter International Seller Hub →
            </div>
          </button>

          {/* P4: International Buyer Hub */}
          <button
            onClick={() => onPortalSelect('international-buyer')}
            className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl border-2 border-orange-300 hover:border-orange-500 hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-600 transition-colors">
                <Globe className="size-8 text-orange-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">P4: International Buyer Hub</h3>
                <p className="text-sm text-orange-700">Global Importers ⭐ Priority</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Qualified sourcing, compliance verification, FOB/CIF simulation, and complex order requests.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <div className="size-1.5 bg-orange-600 rounded-full"></div>
                Submit sourcing requests
              </li>
              <li className="flex items-center gap-2">
                <div className="size-1.5 bg-orange-600 rounded-full"></div>
                FOB/CIF cost calculator
              </li>
              <li className="flex items-center gap-2">
                <div className="size-1.5 bg-orange-600 rounded-full"></div>
                Global price intelligence
              </li>
            </ul>
            <div className="mt-6 text-orange-600 group-hover:text-orange-700">
              Enter International Buyer Hub →
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}