import { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle2, FileText, Upload } from 'lucide-react';
import { ActionButton } from './ActionButton';
import { FileUpload } from './FileUpload';

export function DueDiligenceStatement() {
  const [formData, setFormData] = useState({
    // Risk Assessment
    countryOfOrigin: 'Ethiopia',
    productionArea: '',
    specificRegion: '',
    farmCoordinates: '',
    landOwnershipProof: null as File | null,
    
    // Deforestation Risk
    deforestationRiskLevel: '',
    forestProximity: '',
    landUseHistory: '',
    satelliteImageryReview: false,
    
    // Illegality Risk
    legalComplianceCheck: false,
    laborStandards: false,
    environmentalPermits: false,
    exportLicenses: false,
    
    // Mitigation Measures
    fieldAuditConducted: false,
    auditDate: '',
    auditReport: null as File | null,
    localAuthorityCollab: false,
    authorityName: '',
    thirdPartyCertification: '',
    certificationDocument: null as File | null,
    
    // Traceability
    traceabilitySystem: '',
    lotIdentification: '',
    supplierMapping: false,
    gpsMapping: false,
    
    // Declaration
    declarantName: '',
    declarantPosition: '',
    companyName: '',
    declarationDate: '',
    signature: null as File | null
  });

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <div className="size-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="size-8 text-green-600" />
          </div>
          <h2 className="text-gray-900 mb-4">Due Diligence Statement Completed</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Your EUDR Due Diligence Statement has been generated and is ready for submission to European authorities.
          </p>
          <div className="flex gap-4 justify-center">
            <ActionButton variant="primary" icon={FileText}>
              Download PDF Statement
            </ActionButton>
            <ActionButton variant="outline" onClick={() => setSubmitted(false)}>
              Create Another Statement
            </ActionButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">EUDR Due Diligence Statement</h2>
        <p className="text-gray-600">
          Complete this due diligence declaration for EU Deforestation Regulation (EUDR) compliance
        </p>
      </div>

      {/* EUDR Information */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <AlertTriangle className="size-6 text-amber-600 flex-shrink-0" />
          <div>
            <h3 className="text-amber-900 mb-2">EU Deforestation Regulation (EUDR)</h3>
            <p className="text-sm text-amber-800 mb-3">
              As of December 30, 2024, all agricultural products exported to the EU must demonstrate that they:
            </p>
            <ul className="text-sm text-amber-800 space-y-1">
              <li>• Were not produced on land deforested after December 31, 2020</li>
              <li>• Comply with all relevant laws of the country of production</li>
              <li>• Have been subject to a due diligence process</li>
            </ul>
            <p className="text-sm text-amber-700 mt-3">
              This applies to: Coffee, Cocoa, Cattle, Oil palm, Rubber, Soy, Wood, and derived products.
            </p>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          {[
            { num: 1, title: 'Risk Assessment' },
            { num: 2, title: 'Mitigation Measures' },
            { num: 3, title: 'Traceability' },
            { num: 4, title: 'Final Declaration' }
          ].map((s, index) => (
            <div key={s.num} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div className={`
                  size-10 rounded-full flex items-center justify-center mb-2 transition-colors
                  ${step >= s.num ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-600'}
                `}>
                  {s.num}
                </div>
                <p className={`text-sm text-center ${step === s.num ? 'text-orange-600' : 'text-gray-600'}`}>
                  {s.title}
                </p>
              </div>
              {index < 3 && (
                <div className={`flex-1 h-1 mx-4 ${step > s.num ? 'bg-orange-600' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-8">
        {/* Step 1: Risk Assessment */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="size-8 text-orange-600" />
              <div>
                <h3 className="text-gray-900">Step 1: Risk Assessment</h3>
                <p className="text-sm text-gray-600">Evaluate deforestation and illegality risks</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Country of Origin <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.countryOfOrigin}
                  onChange={(e) => setFormData({ ...formData, countryOfOrigin: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Ethiopia"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Specific Production Area <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.productionArea}
                  onChange={(e) => setFormData({ ...formData, productionArea: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., Sidama Zone, Yirgacheffe Woreda"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Specific Region/Farm Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.specificRegion}
                onChange={(e) => setFormData({ ...formData, specificRegion: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Farm name or specific locality"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                GPS Coordinates of Production Plot(s) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.farmCoordinates}
                onChange={(e) => setFormData({ ...formData, farmCoordinates: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="e.g., 6.2442° N, 38.2405° E or upload polygon coordinates"
              />
              <p className="text-sm text-gray-500 mt-1">
                Provide coordinates for all production plots. For multiple plots, upload KML/shapefile.
              </p>
            </div>

            <FileUpload
              label="Land Ownership/Use Rights Documentation *"
              accept=".pdf,.jpg,.png"
              required
              helpText="Upload land title, lease agreement, or official land use certificate"
              onChange={(file) => setFormData({ ...formData, landOwnershipProof: file })}
            />

            <div>
              <label className="block text-gray-700 mb-2">
                Deforestation Risk Assessment <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.deforestationRiskLevel}
                onChange={(e) => setFormData({ ...formData, deforestationRiskLevel: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Assess risk level</option>
                <option>Low Risk - Coffee forest area, protected status</option>
                <option>Low Risk - Established farmland, no forest proximity</option>
                <option>Medium Risk - Near forest areas, historical monitoring needed</option>
                <option>High Risk - Recent land conversion, requires detailed audit</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Forest Proximity Analysis</label>
              <textarea
                value={formData.forestProximity}
                onChange={(e) => setFormData({ ...formData, forestProximity: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Describe proximity to forest areas and conservation zones. State distance to nearest protected forest."
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Land Use History (Pre-2021)</label>
              <textarea
                value={formData.landUseHistory}
                onChange={(e) => setFormData({ ...formData, landUseHistory: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Describe land use before December 31, 2020. Include any historical records or aerial imagery evidence."
              />
            </div>

            <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="checkbox"
                checked={formData.satelliteImageryReview}
                onChange={(e) => setFormData({ ...formData, satelliteImageryReview: e.target.checked })}
                className="size-4 text-orange-600 rounded focus:ring-orange-500"
              />
              <span className="text-gray-700">
                I have reviewed satellite imagery confirming no deforestation occurred after December 31, 2020
              </span>
            </label>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-blue-900 mb-2">Recommended Tools</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Global Forest Watch (globalforestwatch.org) - Free satellite monitoring</li>
                <li>• Google Earth Pro - Historical imagery comparison</li>
                <li>• EU Observatory EUDR Tool - Official risk assessment</li>
              </ul>
            </div>
          </div>
        )}

        {/* Step 2: Mitigation Measures */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="size-8 text-orange-600" />
              <div>
                <h3 className="text-gray-900">Step 2: Mitigation Measures</h3>
                <p className="text-sm text-gray-600">Procedures to minimize and verify compliance</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-gray-900">Legal Compliance Verification</h4>
              <label className="flex items-start gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={formData.legalComplianceCheck}
                  onChange={(e) => setFormData({ ...formData, legalComplianceCheck: e.target.checked })}
                  className="size-4 mt-1 text-orange-600 rounded focus:ring-orange-500"
                />
                <div>
                  <span className="text-gray-900 block mb-1">Production complies with Ethiopian agricultural laws</span>
                  <span className="text-sm text-gray-600">Including land use regulations, environmental protection laws, and export requirements</span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={formData.laborStandards}
                  onChange={(e) => setFormData({ ...formData, laborStandards: e.target.checked })}
                  className="size-4 mt-1 text-orange-600 rounded focus:ring-orange-500"
                />
                <div>
                  <span className="text-gray-900 block mb-1">Labor standards compliance verified</span>
                  <span className="text-sm text-gray-600">No child labor, fair wages, safe working conditions</span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={formData.environmentalPermits}
                  onChange={(e) => setFormData({ ...formData, environmentalPermits: e.target.checked })}
                  className="size-4 mt-1 text-orange-600 rounded focus:ring-orange-500"
                />
                <div>
                  <span className="text-gray-900 block mb-1">Environmental permits obtained</span>
                  <span className="text-sm text-gray-600">Where required by law</span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={formData.exportLicenses}
                  onChange={(e) => setFormData({ ...formData, exportLicenses: e.target.checked })}
                  className="size-4 mt-1 text-orange-600 rounded focus:ring-orange-500"
                />
                <div>
                  <span className="text-gray-900 block mb-1">Valid export licenses held</span>
                  <span className="text-sm text-gray-600">All necessary permits for international trade</span>
                </div>
              </label>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-gray-900 mb-4">Field Verification</h4>
              <label className="flex items-start gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 mb-4">
                <input
                  type="checkbox"
                  checked={formData.fieldAuditConducted}
                  onChange={(e) => setFormData({ ...formData, fieldAuditConducted: e.target.checked })}
                  className="size-4 mt-1 text-orange-600 rounded focus:ring-orange-500"
                />
                <span className="text-gray-900">Field audit conducted by qualified assessor</span>
              </label>

              {formData.fieldAuditConducted && (
                <div className="space-y-4 ml-7">
                  <div>
                    <label className="block text-gray-700 mb-2">Audit Date</label>
                    <input
                      type="date"
                      value={formData.auditDate}
                      onChange={(e) => setFormData({ ...formData, auditDate: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <FileUpload
                    label="Upload Audit Report"
                    accept=".pdf"
                    helpText="Full field verification report with photos and GPS data"
                    onChange={(file) => setFormData({ ...formData, auditReport: file })}
                  />
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-gray-900 mb-4">Collaboration with Authorities</h4>
              <label className="flex items-start gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 mb-4">
                <input
                  type="checkbox"
                  checked={formData.localAuthorityCollab}
                  onChange={(e) => setFormData({ ...formData, localAuthorityCollab: e.target.checked })}
                  className="size-4 mt-1 text-orange-600 rounded focus:ring-orange-500"
                />
                <span className="text-gray-900">Collaboration established with local environmental/agricultural authorities</span>
              </label>

              {formData.localAuthorityCollab && (
                <div className="ml-7">
                  <label className="block text-gray-700 mb-2">Authority Name/Department</label>
                  <input
                    type="text"
                    value={formData.authorityName}
                    onChange={(e) => setFormData({ ...formData, authorityName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., Woreda Agriculture Office, Environmental Protection Authority"
                  />
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-gray-900 mb-4">Third-Party Certification (if applicable)</h4>
              <select
                value={formData.thirdPartyCertification}
                onChange={(e) => setFormData({ ...formData, thirdPartyCertification: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-4"
              >
                <option value="">No third-party certification</option>
                <option>Organic (EU/USDA)</option>
                <option>Rainforest Alliance</option>
                <option>Fair Trade</option>
                <option>UTZ Certified</option>
                <option>ISO 22000</option>
                <option>Other (specify in notes)</option>
              </select>

              {formData.thirdPartyCertification && (
                <FileUpload
                  label="Upload Certification Document"
                  accept=".pdf"
                  helpText="Current valid certification"
                  onChange={(file) => setFormData({ ...formData, certificationDocument: file })}
                />
              )}
            </div>
          </div>
        )}

        {/* Step 3: Traceability */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="size-8 text-orange-600" />
              <div>
                <h3 className="text-gray-900">Step 3: Traceability System</h3>
                <p className="text-sm text-gray-600">Demonstrate full supply chain visibility</p>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Traceability System Description <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                value={formData.traceabilitySystem}
                onChange={(e) => setFormData({ ...formData, traceabilitySystem: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Describe how products are tracked from farm to export. Include lot numbering system, documentation procedures, and chain of custody."
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Lot Identification System <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.lotIdentification}
                onChange={(e) => setFormData({ ...formData, lotIdentification: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="e.g., Batch number format: YYY-ZONE-FARM-LOT (2024-SDM-001-A)"
              />
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={formData.supplierMapping}
                  onChange={(e) => setFormData({ ...formData, supplierMapping: e.target.checked })}
                  className="size-4 mt-1 text-orange-600 rounded focus:ring-orange-500"
                />
                <div>
                  <span className="text-gray-900 block mb-1">Complete supplier mapping maintained</span>
                  <span className="text-sm text-gray-600">Database of all farmer/producer information including names, IDs, and plot coordinates</span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={formData.gpsMapping}
                  onChange={(e) => setFormData({ ...formData, gpsMapping: e.target.checked })}
                  className="size-4 mt-1 text-orange-600 rounded focus:ring-orange-500"
                />
                <div>
                  <span className="text-gray-900 block mb-1">GPS mapping of all production plots completed</span>
                  <span className="text-sm text-gray-600">Polygon coordinates available for all sourcing areas</span>
                </div>
              </label>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-green-900 mb-3">Traceability Best Practices</h4>
              <ul className="text-sm text-green-800 space-y-2">
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Maintain digital records with photos and GPS stamps</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use unique identifiers that link back to specific plots</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Keep transaction records showing purchase from verified farmers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Implement internal monitoring system for ongoing compliance</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Step 4: Final Declaration */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="size-8 text-orange-600" />
              <div>
                <h3 className="text-gray-900">Step 4: Final Declaration</h3>
                <p className="text-sm text-gray-600">Official statement for EU authorities</p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
              <h4 className="text-amber-900 mb-3">Due Diligence Declaration</h4>
              <p className="text-sm text-amber-800 mb-4">
                I hereby declare that, to the best of my knowledge and based on the due diligence procedures 
                implemented and documented above:
              </p>
              <ul className="text-sm text-amber-800 space-y-2">
                <li>• The products covered by this statement were not produced on land that was deforested after December 31, 2020</li>
                <li>• The products comply with all relevant legislation of the country of production (Ethiopia)</li>
                <li>• I have actively sought to minimize the risk of non-compliance through verification and mitigation measures</li>
                <li>• All information provided is accurate and complete to the best of my knowledge</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Declarant Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.declarantName}
                  onChange={(e) => setFormData({ ...formData, declarantName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Position/Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.declarantPosition}
                  onChange={(e) => setFormData({ ...formData, declarantPosition: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., Managing Director, Compliance Officer"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Company/Organization Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Declaration Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                required
                value={formData.declarationDate}
                onChange={(e) => setFormData({ ...formData, declarationDate: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <FileUpload
              label="Digital Signature or Signed Authorization *"
              accept=".pdf,.jpg,.png"
              required
              helpText="Upload scanned signature or digitally signed document"
              onChange={(file) => setFormData({ ...formData, signature: file })}
            />

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-blue-900 mb-2">Next Steps After Submission</h4>
              <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
                <li>Your Due Diligence Statement will be generated as a PDF document</li>
                <li>Upload the statement to the EU Information System (when placing products on EU market)</li>
                <li>Retain all supporting documentation for 5 years</li>
                <li>Update due diligence for each new shipment or annually for continuous supply</li>
              </ol>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
          <div>
            {step > 1 && (
              <ActionButton type="button" variant="outline" onClick={() => setStep(step - 1)}>
                Previous
              </ActionButton>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Step {step} of 4</span>
            {step < 4 ? (
              <ActionButton type="button" variant="primary" onClick={() => setStep(step + 1)}>
                Next Step
              </ActionButton>
            ) : (
              <ActionButton type="submit" variant="primary" icon={CheckCircle2}>
                Generate Statement
              </ActionButton>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
