import { useState } from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import { VerifiedBadge } from '../shared/VerifiedBadge';
import { FileUpload } from '../shared/FileUpload';
import { ActionButton } from '../shared/ActionButton';
import { AlertNotification } from '../shared/AlertNotification';

interface ExporterVerificationProps {
  status: 'verified' | 'pending' | 'unverified';
  onStatusChange: (status: 'verified' | 'pending' | 'unverified') => void;
}

export function ExporterVerification({ status, onStatusChange }: ExporterVerificationProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    exportLicenseNumber: '',
    exportCapacity: '',
    certifications: [] as string[],
    licenseDocument: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStatusChange('pending');
  };

  const handleApprove = () => {
    onStatusChange('verified');
  };

  const certificationOptions = [
    'ISO 9001',
    'ISO 22000',
    'HACCP',
    'Fair Trade Certified',
    'Organic Certification',
    'Rainforest Alliance'
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Exporter Trust ID Verification</h2>
        <p className="text-gray-600">
          Complete verification to unlock full platform access and contact producers
        </p>
      </div>

      {/* Current Status */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">Verification Status</h3>
          <VerifiedBadge status={status} size="lg" />
        </div>

        {status === 'verified' && (
          <AlertNotification
            type="success"
            title="Verification Complete"
            message="Your Exporter Trust ID has been verified. You can now contact producers and request samples."
          />
        )}

        {status === 'pending' && (
          <AlertNotification
            type="info"
            title="Verification In Progress"
            message="Your export license is being reviewed. This typically takes 24-48 hours."
          />
        )}

        {status === 'unverified' && (
          <AlertNotification
            type="warning"
            title="Verification Required"
            message="Complete the verification form below to get your Exporter Trust ID."
          />
        )}
      </div>

      {/* Trust ID Card (Verified Only) */}
      {status === 'verified' && (
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-blue-100 mb-1">Exporter Trust ID Card</p>
              <h3 className="text-white">{formData.companyName || 'Verified Exporter'}</h3>
            </div>
            <Shield className="size-12 text-blue-300" />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-blue-100">Trust ID</p>
              <p className="text-white">EXP-ETH-2024-005678</p>
            </div>
            <div>
              <p className="text-blue-100">Verified Date</p>
              <p className="text-white">Dec 6, 2024</p>
            </div>
            <div>
              <p className="text-blue-100">Export License</p>
              <p className="text-white">{formData.exportLicenseNumber || 'EL-2024-XXXX'}</p>
            </div>
            <div>
              <p className="text-blue-100">Status</p>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="size-4" />
                <span>Active</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Verification Form */}
      {status === 'unverified' && (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <h3 className="text-gray-900">Exporter Verification Form</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">
                Company Legal Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your company's registered legal name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Export License Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.exportLicenseNumber}
                  onChange={(e) => setFormData({ ...formData, exportLicenseNumber: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., EL-2024-XXXX"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Export Capacity per Month (MT) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  value={formData.exportCapacity}
                  onChange={(e) => setFormData({ ...formData, exportCapacity: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., 50"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">International Certifications</label>
              <div className="grid grid-cols-2 gap-2">
                {certificationOptions.map((cert) => (
                  <label key={cert} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.certifications.includes(cert)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, certifications: [...formData.certifications, cert] });
                        } else {
                          setFormData({ ...formData, certifications: formData.certifications.filter(c => c !== cert) });
                        }
                      }}
                      className="size-4 text-green-600 rounded focus:ring-green-500"
                    />
                    <span className="text-gray-700 text-sm">{cert}</span>
                  </label>
                ))}
              </div>
            </div>

            <FileUpload
              label="Export License Document"
              required
              accept=".pdf,.jpg,.jpeg,.png"
              helpText="PDF, JPG, or PNG (Max 5MB)"
              onChange={(file) => setFormData({ ...formData, licenseDocument: file })}
            />

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-blue-900 mb-2">Required Documents</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Valid export license</li>
                <li>• Company registration certificate</li>
                <li>• Tax clearance certificate</li>
                <li>• International certification documents (if applicable)</li>
              </ul>
            </div>
          </div>

          <ActionButton type="submit" variant="primary" icon={Shield} fullWidth>
            Submit for Verification
          </ActionButton>
        </form>
      )}

      {/* Demo Button for Testing */}
      {status === 'pending' && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-2">Demo Mode: Click to approve verification</p>
          <ActionButton onClick={handleApprove} variant="secondary">
            Approve Verification (Demo)
          </ActionButton>
        </div>
      )}

      {/* Benefits Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Trust ID Benefits</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex gap-3">
            <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-gray-900 mb-1">Direct Producer Contact</h4>
              <p className="text-sm text-gray-600">Communicate directly with verified producers</p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-gray-900 mb-1">Sample Requests</h4>
              <p className="text-sm text-gray-600">Request product samples (max 3 at a time)</p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-gray-900 mb-1">Priority Support</h4>
              <p className="text-sm text-gray-600">Access to premium brokerage services</p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-gray-900 mb-1">Market Intelligence</h4>
              <p className="text-sm text-gray-600">Full access to pricing tools and analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
