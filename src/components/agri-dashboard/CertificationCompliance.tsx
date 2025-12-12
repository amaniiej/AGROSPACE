import { Award, FileText, CheckCircle2, Book } from 'lucide-react';
import { ActionButton } from '../shared/ActionButton';

export function CertificationCompliance() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Certification & Compliance Module</h2>
        <p className="text-gray-600">
          Guides and tools to help farmers meet quality standards and access high-value markets
        </p>
      </div>

      {/* Overview */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-green-900 mb-3">Why Certification Matters for Ethiopian Farmers</h3>
        <p className="text-sm text-green-800 mb-4">
          Certifications open doors to premium export markets, command higher prices, and build trust with buyers. 
          This module guides you through the certification process and helps you maintain compliance.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-green-800">
          <div>
            <h4 className="text-green-900 mb-1">✓ Higher Prices</h4>
            <p>Earn 20-40% premium over conventional products</p>
          </div>
          <div>
            <h4 className="text-green-900 mb-1">✓ Market Access</h4>
            <p>Meet requirements for EU, US, and specialty markets</p>
          </div>
          <div>
            <h4 className="text-green-900 mb-1">✓ Buyer Confidence</h4>
            <p>Build long-term relationships with quality buyers</p>
          </div>
        </div>
      </div>

      {/* Available Certifications */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Organic Certification */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="size-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="size-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-gray-900 mb-1">Organic Certification (EU/USDA)</h3>
              <p className="text-sm text-gray-600">For coffee, spices, and other crops without synthetic chemicals</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-gray-900 mb-2 text-sm">Requirements:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>3-year transition period without synthetic inputs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Detailed record-keeping of all farm practices</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Annual inspection by accredited certifier</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Buffer zones from conventional farms</span>
                </li>
              </ul>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Certification Cost:</span>
                <span className="text-gray-900">15,000-25,000 ETB/year</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Processing Time:</span>
                <span className="text-gray-900">3-6 months (after transition)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Price Premium:</span>
                <span className="text-green-600">+30-50%</span>
              </div>
            </div>

            <ActionButton variant="primary" fullWidth>
              Start Organic Certification Process
            </ActionButton>
          </div>
        </div>

        {/* Fair Trade Certification */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="size-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="size-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-gray-900 mb-1">Fair Trade Certification</h3>
              <p className="text-sm text-gray-600">Ensures fair wages and sustainable practices for cooperatives</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-gray-900 mb-2 text-sm">Requirements:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Democratic cooperative structure</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Minimum price guarantees for farmers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Transparent financial management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Investment in community development</span>
                </li>
              </ul>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Certification Cost:</span>
                <span className="text-gray-900">20,000-35,000 ETB/year</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Processing Time:</span>
                <span className="text-gray-900">6-12 months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Price Premium:</span>
                <span className="text-green-600">+20-35%</span>
              </div>
            </div>

            <ActionButton variant="primary" fullWidth>
              Start Fair Trade Certification
            </ActionButton>
          </div>
        </div>

        {/* Rainforest Alliance */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="size-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="size-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-gray-900 mb-1">Rainforest Alliance</h3>
              <p className="text-sm text-gray-600">Sustainable agriculture focusing on environmental protection</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-gray-900 mb-2 text-sm">Requirements:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Forest and biodiversity conservation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Water resource management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Worker rights and safety standards</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Integrated pest management (IPM)</span>
                </li>
              </ul>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Certification Cost:</span>
                <span className="text-gray-900">18,000-30,000 ETB/year</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Processing Time:</span>
                <span className="text-gray-900">4-8 months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Price Premium:</span>
                <span className="text-green-600">+15-30%</span>
              </div>
            </div>

            <ActionButton variant="primary" fullWidth>
              Start Rainforest Alliance Process
            </ActionButton>
          </div>
        </div>

        {/* Ethiopian National Standards */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="size-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="size-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-gray-900 mb-1">Ethiopian Quality Standards</h3>
              <p className="text-sm text-gray-600">National quality certification for domestic and export markets</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-gray-900 mb-2 text-sm">Requirements:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Meet Ethiopian Standards Agency (ESA) criteria</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Quality testing for moisture, purity, grading</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Proper post-harvest handling and storage</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Traceability and documentation</span>
                </li>
              </ul>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Certification Cost:</span>
                <span className="text-gray-900">5,000-12,000 ETB/year</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Processing Time:</span>
                <span className="text-gray-900">2-4 months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Price Premium:</span>
                <span className="text-green-600">+10-20%</span>
              </div>
            </div>

            <ActionButton variant="primary" fullWidth>
              Apply for ES Certification
            </ActionButton>
          </div>
        </div>
      </div>

      {/* Compliance Guides */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Step-by-Step Certification Guides</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: 'Organic Coffee Certification Guide',
              description: 'Complete guide for Ethiopian coffee farmers to achieve organic certification',
              pages: '24 pages',
              language: 'Amharic, English'
            },
            {
              title: 'Fair Trade for Cooperatives',
              description: 'How to organize and certify your cooperative for Fair Trade markets',
              pages: '18 pages',
              language: 'Amharic, English, Oromo'
            },
            {
              title: 'Quality Standards for Pulses',
              description: 'Meeting export quality requirements for chickpea, lentils, and beans',
              pages: '15 pages',
              language: 'Amharic, English'
            },
            {
              title: 'Good Agricultural Practices (GAP)',
              description: 'Implementing GAP for fruit and vegetable production',
              pages: '20 pages',
              language: 'Amharic, English'
            }
          ].map((guide, index) => (
            <div key={index} className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors">
              <div className="size-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                <Book className="size-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 mb-1">{guide.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{guide.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{guide.pages}</span>
                  <span>{guide.language}</span>
                </div>
              </div>
              <ActionButton variant="outline">
                Download
              </ActionButton>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Tracker */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">My Certification Progress</h3>
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-green-500 bg-green-50">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-green-900">Organic Certification - In Progress</h4>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">75% Complete</span>
            </div>
            <div className="mb-3">
              <div className="w-full bg-green-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            <p className="text-sm text-green-800 mb-2">Next step: Schedule field inspection (Due: Dec 15, 2024)</p>
            <ActionButton variant="primary">
              Continue Application
            </ActionButton>
          </div>

          <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-blue-900">Ethiopian Quality Standard - Pending Review</h4>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Under Review</span>
            </div>
            <p className="text-sm text-blue-800">Application submitted. Awaiting ESA inspector assignment (Est. 7-10 days)</p>
          </div>

          <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 transition-colors text-center">
            <CheckCircle2 className="size-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">Start New Certification Application</p>
          </button>
        </div>
      </div>
    </div>
  );
}
