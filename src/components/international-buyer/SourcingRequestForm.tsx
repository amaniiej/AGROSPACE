import { useState } from 'react';
import { FileText, Package, Ship, Award, Check, ChevronRight } from 'lucide-react';
import { ActionButton } from '../shared/ActionButton';
import { FileUpload } from '../shared/FileUpload';
import { AlertNotification } from '../shared/AlertNotification';

export function SourcingRequestForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    // Step 1: Product Specifications
    productType: '',
    productVariety: '',
    qualityGrade: '',
    processingMethod: '',
    productDescription: '',
    
    // Step 2: Volume & Logistics
    desiredQuantity: '',
    unit: 'MT',
    frequencyType: '',
    contractDuration: '',
    preferredPortOfDestination: '',
    incoterm: '',
    
    // Step 3: Certifications & Compliance
    requiredCertifications: [] as string[],
    packagingRequirements: '',
    additionalCompliance: '',
    
    // Step 4: Commercial Terms
    targetPrice: '',
    paymentTerms: '',
    deliveryTimeframe: '',
    additionalNotes: '',
    specificationDocument: null as File | null
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const productTypes = [
    'Coffee Arabica',
    'Coffee Robusta',
    'Sesame Seeds',
    'Teff',
    'Kidney Beans',
    'Chickpeas',
    'Spices',
    'Other'
  ];

  const qualityGrades = ['Grade 1', 'Grade 2', 'Grade 3', 'Premium', 'Standard'];
  
  const certificationOptions = [
    'Organic (EU/USDA)',
    'Fair Trade',
    'Rainforest Alliance',
    'UTZ Certified',
    'ISO 22000',
    'HACCP',
    'Kosher',
    'Halal'
  ];

  const incoterms = ['FOB', 'CIF', 'CFR', 'EXW'];
  const paymentTerms = ['LC at Sight', 'LC 30 days', 'LC 60 days', 'TT Advance', 'TT Against Documents'];

  const steps = [
    { number: 1, title: 'Product Specifications', icon: Package },
    { number: 2, title: 'Volume & Logistics', icon: Ship },
    { number: 3, title: 'Certifications', icon: Award },
    { number: 4, title: 'Commercial Terms', icon: FileText }
  ];

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <div className="size-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="size-8 text-green-600" />
          </div>
          <h2 className="text-gray-900 mb-4">Sourcing Request Submitted Successfully!</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Your sourcing request has been received and is being matched with qualified suppliers. 
            You will receive quotes within 48-72 hours.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left max-w-md mx-auto">
            <h3 className="text-gray-900 mb-3">Request Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Request ID:</span>
                <span className="text-gray-900">SR-2024-{Math.floor(Math.random() * 1000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Product:</span>
                <span className="text-gray-900">{formData.productType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Volume:</span>
                <span className="text-gray-900">{formData.desiredQuantity} {formData.unit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Incoterm:</span>
                <span className="text-gray-900">{formData.incoterm}</span>
              </div>
            </div>
          </div>
          <ActionButton onClick={() => { setSubmitted(false); setCurrentStep(1); }} variant="primary">
            Submit Another Request
          </ActionButton>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Submit Sourcing Request</h2>
        <p className="text-gray-600">
          Complete this form to specify your exact requirements and get matched with qualified Ethiopian suppliers
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = currentStep > step.number;
            const isCurrent = currentStep === step.number;
            
            return (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`
                    size-12 rounded-full flex items-center justify-center mb-2 transition-colors
                    ${isCompleted ? 'bg-green-600 text-white' : ''}
                    ${isCurrent ? 'bg-orange-600 text-white' : ''}
                    ${!isCompleted && !isCurrent ? 'bg-gray-200 text-gray-600' : ''}
                  `}>
                    {isCompleted ? <Check className="size-6" /> : <Icon className="size-6" />}
                  </div>
                  <p className={`text-sm text-center ${isCurrent ? 'text-orange-600' : 'text-gray-600'}`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 ${isCompleted ? 'bg-green-600' : 'bg-gray-200'}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-8">
        {/* Step 1: Product Specifications */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Package className="size-8 text-orange-600" />
              <div>
                <h3 className="text-gray-900">Step 1: Product Specifications</h3>
                <p className="text-sm text-gray-600">Define the agricultural product you need</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Product Type <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.productType}
                  onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select product type</option>
                  {productTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Product Variety</label>
                <input
                  type="text"
                  value={formData.productVariety}
                  onChange={(e) => setFormData({ ...formData, productVariety: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., Yirgacheffe, Sidamo, Humera"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Quality Grade <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.qualityGrade}
                  onChange={(e) => setFormData({ ...formData, qualityGrade: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select quality grade</option>
                  {qualityGrades.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Processing Method</label>
                <select
                  value={formData.processingMethod}
                  onChange={(e) => setFormData({ ...formData, processingMethod: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select processing method</option>
                  <option>Washed</option>
                  <option>Natural/Dry</option>
                  <option>Honey</option>
                  <option>Semi-washed</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Product Description & Special Requirements</label>
              <textarea
                value={formData.productDescription}
                onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Describe specific quality parameters, cupping scores, moisture content, screen size, etc."
              />
            </div>
          </div>
        )}

        {/* Step 2: Volume & Logistics */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Ship className="size-8 text-orange-600" />
              <div>
                <h3 className="text-gray-900">Step 2: Volume & Logistics</h3>
                <p className="text-sm text-gray-600">Specify quantity and shipping requirements</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Desired Quantity <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    required
                    value={formData.desiredQuantity}
                    onChange={(e) => setFormData({ ...formData, desiredQuantity: e.target.value })}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., 20"
                  />
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="MT">MT (Metric Tons)</option>
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Frequency</label>
                <select
                  value={formData.frequencyType}
                  onChange={(e) => setFormData({ ...formData, frequencyType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select frequency</option>
                  <option>One-time purchase</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Annual contract</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Preferred Port of Destination <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.preferredPortOfDestination}
                  onChange={(e) => setFormData({ ...formData, preferredPortOfDestination: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., Rotterdam, Hamburg, Shanghai"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Contract Duration</label>
                <select
                  value={formData.contractDuration}
                  onChange={(e) => setFormData({ ...formData, contractDuration: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select duration</option>
                  <option>Spot purchase</option>
                  <option>6 months</option>
                  <option>1 year</option>
                  <option>2 years</option>
                  <option>3+ years</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Preferred Incoterm <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                {incoterms.map((term) => (
                  <label 
                    key={term}
                    className={`
                      flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all
                      ${formData.incoterm === term ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-300'}
                    `}
                  >
                    <input
                      type="radio"
                      name="incoterm"
                      value={term}
                      checked={formData.incoterm === term}
                      onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                      className="size-4 text-orange-600 focus:ring-orange-500"
                      required
                    />
                    <div className="flex-1">
                      <p className="text-gray-900">{term}</p>
                      <p className="text-sm text-gray-600">
                        {term === 'FOB' && 'Free on Board (port of origin)'}
                        {term === 'CIF' && 'Cost, Insurance & Freight'}
                        {term === 'CFR' && 'Cost & Freight'}
                        {term === 'EXW' && 'Ex Works'}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Certifications & Compliance */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Award className="size-8 text-orange-600" />
              <div>
                <h3 className="text-gray-900">Step 3: Certifications & Compliance</h3>
                <p className="text-sm text-gray-600">Specify required certifications and compliance standards</p>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-3">Required International Certifications</label>
              <div className="grid md:grid-cols-2 gap-3">
                {certificationOptions.map((cert) => (
                  <label 
                    key={cert}
                    className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.requiredCertifications.includes(cert)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ 
                            ...formData, 
                            requiredCertifications: [...formData.requiredCertifications, cert] 
                          });
                        } else {
                          setFormData({ 
                            ...formData, 
                            requiredCertifications: formData.requiredCertifications.filter(c => c !== cert) 
                          });
                        }
                      }}
                      className="size-4 text-orange-600 rounded focus:ring-orange-500"
                    />
                    <span className="text-gray-700">{cert}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Packaging Requirements</label>
              <textarea
                value={formData.packagingRequirements}
                onChange={(e) => setFormData({ ...formData, packagingRequirements: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Specify packaging type, bag size, container requirements, labeling needs, etc."
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Additional Compliance Requirements</label>
              <textarea
                value={formData.additionalCompliance}
                onChange={(e) => setFormData({ ...formData, additionalCompliance: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Food safety standards, traceability requirements, sustainability criteria, etc."
              />
            </div>
          </div>
        )}

        {/* Step 4: Commercial Terms */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="size-8 text-orange-600" />
              <div>
                <h3 className="text-gray-900">Step 4: Commercial Terms</h3>
                <p className="text-sm text-gray-600">Define pricing and payment requirements</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Target Price (Optional)</label>
                <input
                  type="text"
                  value={formData.targetPrice}
                  onChange={(e) => setFormData({ ...formData, targetPrice: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., $2,850 per MT"
                />
                <p className="text-sm text-gray-500 mt-1">Leave blank to receive best market offers</p>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Preferred Payment Terms <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.paymentTerms}
                  onChange={(e) => setFormData({ ...formData, paymentTerms: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select payment terms</option>
                  {paymentTerms.map(term => (
                    <option key={term} value={term}>{term}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Desired Delivery Timeframe <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.deliveryTimeframe}
                  onChange={(e) => setFormData({ ...formData, deliveryTimeframe: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select timeframe</option>
                  <option>ASAP</option>
                  <option>Within 30 days</option>
                  <option>Within 60 days</option>
                  <option>Within 90 days</option>
                  <option>Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Additional Notes</label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Any other important information for suppliers..."
              />
            </div>

            <FileUpload
              label="Product Specification Document (Optional)"
              accept=".pdf,.doc,.docx"
              helpText="Upload detailed specifications, sample photos, or technical requirements"
              onChange={(file) => setFormData({ ...formData, specificationDocument: file })}
            />

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="text-orange-900 mb-2">Before You Submit</h4>
              <ul className="text-sm text-orange-800 space-y-1">
                <li>• Ensure all required fields are completed</li>
                <li>• Your request will be matched with qualified suppliers within 48 hours</li>
                <li>• You will receive detailed quotes with pricing, certifications, and lead times</li>
                <li>• Our team will assist with negotiation and contract finalization</li>
              </ul>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
          <div>
            {currentStep > 1 && (
              <ActionButton type="button" variant="outline" onClick={handlePrevious}>
                Previous
              </ActionButton>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
            {currentStep < totalSteps ? (
              <ActionButton type="button" variant="primary" icon={ChevronRight} onClick={handleNext}>
                Next Step
              </ActionButton>
            ) : (
              <ActionButton type="submit" variant="primary" icon={Check}>
                Submit Sourcing Request
              </ActionButton>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
