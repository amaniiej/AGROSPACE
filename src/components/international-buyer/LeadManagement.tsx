import { FileText, Clock, CheckCircle2, XCircle, Eye } from 'lucide-react';
import { useState } from 'react';
import { ActionButton } from '../shared/ActionButton';

export function LeadManagement() {
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const requests = [
    {
      id: 'SR-2024-001',
      product: 'Coffee Arabica - Grade 1',
      quantity: '20 MT',
      incoterm: 'CIF',
      destination: 'Rotterdam',
      submittedDate: '2024-12-02',
      status: 'Quote Received',
      statusColor: 'green',
      quotesReceived: 3,
      bestQuote: '$3,520/MT',
      certifications: ['Organic', 'Fair Trade'],
      description: 'Looking for specialty grade coffee from Yirgacheffe region',
      quotes: [
        { supplier: 'Sidama Coffee Cooperative', price: 3520, leadTime: '45 days', verified: true },
        { supplier: 'Yirgacheffe Coffee Union', price: 3580, leadTime: '30 days', verified: true },
        { supplier: 'Kaffa Coffee Growers', price: 3650, leadTime: '40 days', verified: true }
      ]
    },
    {
      id: 'SR-2024-002',
      product: 'Organic Sesame Seeds',
      quantity: '15 MT',
      incoterm: 'FOB',
      destination: 'Djibouti',
      submittedDate: '2024-12-04',
      status: 'Under Review',
      statusColor: 'blue',
      quotesReceived: 1,
      bestQuote: '$1,830/MT',
      certifications: ['Organic (EU)', 'ISO 22000'],
      description: 'White sesame seeds with organic certification for European market',
      quotes: [
        { supplier: 'Tigray Sesame Cooperative', price: 1830, leadTime: '35 days', verified: true }
      ]
    },
    {
      id: 'SR-2024-003',
      product: 'White Kidney Beans',
      quantity: '10 MT',
      incoterm: 'CIF',
      destination: 'Dubai',
      submittedDate: '2024-12-06',
      status: 'Pending',
      statusColor: 'yellow',
      quotesReceived: 0,
      bestQuote: '-',
      certifications: [],
      description: 'Standard quality kidney beans for Middle East market',
      quotes: []
    },
    {
      id: 'SR-2024-004',
      product: 'Teff - White',
      quantity: '5 MT',
      incoterm: 'FOB',
      destination: 'Djibouti',
      submittedDate: '2024-11-28',
      status: 'Completed',
      statusColor: 'gray',
      quotesReceived: 2,
      bestQuote: '$950/MT',
      certifications: [],
      description: 'Trial shipment for new market entry',
      quotes: [
        { supplier: 'Shewa Grain Farmers Union', price: 950, leadTime: '30 days', verified: true },
        { supplier: 'Amhara Agricultural Union', price: 980, leadTime: '35 days', verified: false }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-2">My Sourcing Requests</h2>
          <p className="text-gray-600">Track and manage your sourcing inquiries and received quotes</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">{requests.filter(r => r.status !== 'Completed').length} Active</span>
        </div>
      </div>

      {/* Status Summary */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Quote Received', count: requests.filter(r => r.status === 'Quote Received').length, color: 'green' },
          { label: 'Under Review', count: requests.filter(r => r.status === 'Under Review').length, color: 'blue' },
          { label: 'Pending', count: requests.filter(r => r.status === 'Pending').length, color: 'yellow' },
          { label: 'Completed', count: requests.filter(r => r.status === 'Completed').length, color: 'gray' }
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">{item.label}</p>
            <p className="text-2xl text-gray-900">{item.count}</p>
          </div>
        ))}
      </div>

      {/* Requests Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700">Request ID</th>
                <th className="px-6 py-3 text-left text-gray-700">Product</th>
                <th className="px-6 py-3 text-left text-gray-700">Quantity</th>
                <th className="px-6 py-3 text-left text-gray-700">Incoterm</th>
                <th className="px-6 py-3 text-left text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-gray-700">Quotes</th>
                <th className="px-6 py-3 text-left text-gray-700">Best Quote</th>
                <th className="px-6 py-3 text-left text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {requests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FileText className="size-4 text-gray-400" />
                      <span className="text-gray-900">{request.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-900">{request.product}</p>
                    <p className="text-sm text-gray-500">{request.description.slice(0, 40)}...</p>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{request.quantity}</td>
                  <td className="px-6 py-4">
                    <span className="text-gray-900">{request.incoterm}</span>
                    <p className="text-sm text-gray-500">{request.destination}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`
                      px-3 py-1 rounded-full text-sm inline-flex items-center gap-1
                      ${request.statusColor === 'green' ? 'bg-green-100 text-green-700' : ''}
                      ${request.statusColor === 'blue' ? 'bg-blue-100 text-blue-700' : ''}
                      ${request.statusColor === 'yellow' ? 'bg-yellow-100 text-yellow-700' : ''}
                      ${request.statusColor === 'gray' ? 'bg-gray-100 text-gray-700' : ''}
                    `}>
                      {request.status === 'Quote Received' && <CheckCircle2 className="size-3" />}
                      {request.status === 'Under Review' && <Clock className="size-3" />}
                      {request.status === 'Pending' && <Clock className="size-3" />}
                      {request.status === 'Completed' && <CheckCircle2 className="size-3" />}
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{request.quotesReceived}</td>
                  <td className="px-6 py-4 text-gray-900">{request.bestQuote}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedRequest(request)}
                      className="text-orange-600 hover:text-orange-700 flex items-center gap-1"
                    >
                      <Eye className="size-4" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Request Detail Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedRequest(null)}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div>
                <h3 className="text-gray-900">{selectedRequest.id}</h3>
                <p className="text-sm text-gray-600">Submitted on {selectedRequest.submittedDate}</p>
              </div>
              <button onClick={() => setSelectedRequest(null)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Request Details */}
              <div>
                <h4 className="text-gray-900 mb-4">Request Details</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Product</p>
                    <p className="text-gray-900">{selectedRequest.product}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Quantity</p>
                    <p className="text-gray-900">{selectedRequest.quantity}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Incoterm</p>
                    <p className="text-gray-900">{selectedRequest.incoterm}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Destination</p>
                    <p className="text-gray-900">{selectedRequest.destination}</p>
                  </div>
                </div>
                {selectedRequest.certifications.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Required Certifications</p>
                    <div className="flex gap-2 flex-wrap">
                      {selectedRequest.certifications.map((cert: string) => (
                        <span key={cert} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-1">Description</p>
                  <p className="text-gray-700">{selectedRequest.description}</p>
                </div>
              </div>

              {/* Received Quotes */}
              {selectedRequest.quotes.length > 0 ? (
                <div>
                  <h4 className="text-gray-900 mb-4">Received Quotes ({selectedRequest.quotes.length})</h4>
                  <div className="space-y-4">
                    {selectedRequest.quotes.map((quote: any, index: number) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className="text-gray-900">{quote.supplier}</h5>
                              {quote.verified && (
                                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                                  Verified
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">Lead time: {quote.leadTime}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl text-gray-900">${quote.price}</p>
                            <p className="text-sm text-gray-600">per MT</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <ActionButton variant="primary">
                            Accept Quote
                          </ActionButton>
                          <ActionButton variant="outline">
                            Contact Supplier
                          </ActionButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Clock className="size-12 text-gray-300 mx-auto mb-3" />
                  <h4 className="text-gray-900 mb-2">Awaiting Quotes</h4>
                  <p className="text-gray-600">
                    Your request is being reviewed by suppliers. You will receive quotes within 48-72 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
