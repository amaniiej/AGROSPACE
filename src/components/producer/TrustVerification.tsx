import { useState } from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import { VerifiedBadge } from '../shared/VerifiedBadge';
import { FileUpload } from '../shared/FileUpload';
import { ActionButton } from '../shared/ActionButton';
import { AlertNotification } from '../shared/AlertNotification';

interface TrustVerificationProps {
  status: 'verified' | 'pending' | 'unverified';
  onStatusChange: (status: 'verified' | 'pending' | 'unverified') => void;
}

export function TrustVerification({ status, onStatusChange }: TrustVerificationProps) {
  const [formData, setFormData] = useState({
    farmLegalName: '',
    estimatedStorage: '',
    registrationDocument: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStatusChange('pending');
  };

  const handleApprove = () => {
    onStatusChange('verified');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Trust ID Verification</h2>
        <p className="text-gray-600">
          Complete verification to build trust with B2B buyers and unlock premium features
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
            message="Your Trust ID has been verified. You can now access all platform features."
          />
        )}

        {status === 'pending' && (
          <AlertNotification
            type="info"
            title="Verification In Progress"
            message="Your documents are being reviewed. This typically takes 24-48 hours."
          />
        )}

        {status === 'unverified' && (
          <AlertNotification
            type="warning"
            title="Verification Required"
            message="Complete the verification form below to get your Trust ID."
          />
        )}
      </div>

      {/* Trust ID Card (Verified Only) */}
      {status === 'verified' && (
        <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-lg p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-green-100 mb-1">Trust ID Card</p>
              <h3 className="text-white">{formData.farmLegalName || 'Verified Producer'}</h3>
            </div>
            <Shield className="size-12 text-green-300" />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-green-100">Trust ID</p>
              <p className="text-white">PROD-ETH-2024-001234</p>
            </div>
            <div>
              <p className="text-green-100">Verified Date</p>
              <p className="text-white">Dec 6, 2024</p>
            </div>
            <div>
              <p className="text-green-100">Storage Capacity</p>
              <p className="text-white">{formData.estimatedStorage || '5000'} kg</p>
            </div>
            <div>
              <p className="text-green-100">Status</p>
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
          <h3 className="text-gray-900">Producer Verification Form</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">
                Farm Legal Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.farmLegalName}
                onChange={(e) => setFormData({ ...formData, farmLegalName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your farm's registered legal name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Estimated Storage Capacity (kg) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                value={formData.estimatedStorage}
                onChange={(e) => setFormData({ ...formData, estimatedStorage: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., 5000"
              />
            </div>

            <FileUpload
              label="Registration Document"
              required
              accept=".pdf,.jpg,.jpeg,.png"
              helpText="PDF, JPG, or PNG (Max 5MB)"
              onChange={(file) => setFormData({ ...formData, registrationDocument: file })}
            />

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-blue-900 mb-2">Required Documents</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Business registration certificate</li>
                <li>• Cooperative membership proof (if applicable)</li>
                <li>• Tax identification number</li>
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
              <h4 className="text-gray-900 mb-1">Increased Visibility</h4>
              <p className="text-sm text-gray-600">Verified listings appear higher in search results</p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-gray-900 mb-1">Buyer Trust</h4>
              <p className="text-sm text-gray-600">Build credibility with verified badge</p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-gray-900 mb-1">Premium Features</h4>
              <p className="text-sm text-gray-600">Access to brokerage and logistics services</p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-gray-900 mb-1">Better Pricing</h4>
              <p className="text-sm text-gray-600">Verified sellers command better prices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
