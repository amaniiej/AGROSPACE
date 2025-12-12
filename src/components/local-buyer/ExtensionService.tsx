import { User, Phone, Mail, MessageCircle, Calendar, CheckCircle2 } from 'lucide-react';
import { ActionButton } from '../shared/ActionButton';
import { useState } from 'react';

export function ExtensionService() {
  const [selectedAgronomist, setSelectedAgronomist] = useState<any>(null);

  const agronomists = [
    {
      id: 1,
      name: 'Dr. Abebe Tadesse',
      specialty: 'Cereal Crops & Soil Management',
      experience: '15 years',
      location: 'Addis Ababa Region',
      phone: '+251-911-234567',
      email: 'abebe.tadesse@agriextension.et',
      languages: 'Amharic, Oromo, English',
      rating: 4.9,
      consultations: 340,
      availability: 'Available',
      expertise: ['Teff cultivation', 'Wheat production', 'Soil fertility', 'Pest management']
    },
    {
      id: 2,
      name: 'Ato Girma Bekele',
      specialty: 'Coffee Production & Processing',
      experience: '12 years',
      location: 'Sidama & Gedeo Zones',
      phone: '+251-913-345678',
      email: 'girma.bekele@coffeetech.et',
      languages: 'Amharic, Sidamo, English',
      rating: 4.8,
      consultations: 280,
      availability: 'Available',
      expertise: ['Coffee agronomy', 'Post-harvest processing', 'Quality improvement', 'Certification']
    },
    {
      id: 3,
      name: 'W/ro Almaz Hailu',
      specialty: 'Vegetables & Horticulture',
      experience: '10 years',
      location: 'Oromia & SNNPR',
      phone: '+251-917-456789',
      email: 'almaz.hailu@horticulture.et',
      languages: 'Amharic, Oromo, English',
      rating: 4.7,
      consultations: 195,
      availability: 'Busy - Next available: Dec 12',
      expertise: ['Tomato production', 'Onion & garlic', 'Greenhouse management', 'Organic farming']
    },
    {
      id: 4,
      name: 'Dr. Haile Gebremedhin',
      specialty: 'Pulses & Oilseeds',
      experience: '18 years',
      location: 'Tigray & Amhara',
      phone: '+251-914-567890',
      email: 'haile.g@pulsetech.et',
      languages: 'Tigrinya, Amharic, English',
      rating: 4.9,
      consultations: 425,
      availability: 'Available',
      expertise: ['Chickpea production', 'Sesame cultivation', 'Integrated pest management', 'Export standards']
    },
    {
      id: 5,
      name: 'Ato Mulugeta Assefa',
      specialty: 'Livestock & Forage Management',
      experience: '14 years',
      location: 'All Regions',
      phone: '+251-918-678901',
      email: 'mulugeta.a@livestock.et',
      languages: 'Amharic, Oromo, English',
      rating: 4.6,
      consultations: 310,
      availability: 'Available',
      expertise: ['Dairy farming', 'Forage production', 'Animal health', 'Feed formulation']
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-2">Digital Extension Service</h2>
        <p className="text-gray-600">
          Connect with specialist agronomists for expert advice on your farming challenges
        </p>
      </div>

      {/* Service Features */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <Phone className="size-8 text-blue-600 mb-3" />
          <h4 className="text-gray-900 mb-1">Phone Consultation</h4>
          <p className="text-sm text-gray-600">Direct call with experts</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <MessageCircle className="size-8 text-blue-600 mb-3" />
          <h4 className="text-gray-900 mb-1">Chat Support</h4>
          <p className="text-sm text-gray-600">Quick text-based advice</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <Calendar className="size-8 text-blue-600 mb-3" />
          <h4 className="text-gray-900 mb-1">Field Visit</h4>
          <p className="text-sm text-gray-600">On-farm assessment</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <CheckCircle2 className="size-8 text-blue-600 mb-3" />
          <h4 className="text-gray-900 mb-1">Follow-up</h4>
          <p className="text-sm text-gray-600">Continuous support</p>
        </div>
      </div>

      {/* Agronomist Directory */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Our Specialist Agronomists</h3>
        <div className="space-y-4">
          {agronomists.map((agronomist) => (
            <div
              key={agronomist.id}
              className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="size-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="size-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-gray-900 mb-1">{agronomist.name}</h4>
                      <p className="text-blue-600">{agronomist.specialty}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-yellow-500 mb-1">
                        <span>★</span>
                        <span className="text-gray-900">{agronomist.rating}</span>
                      </div>
                      <p className="text-sm text-gray-600">{agronomist.consultations} consultations</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-gray-600">Experience: <span className="text-gray-900">{agronomist.experience}</span></p>
                      <p className="text-gray-600">Location: <span className="text-gray-900">{agronomist.location}</span></p>
                      <p className="text-gray-600">Languages: <span className="text-gray-900">{agronomist.languages}</span></p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Expertise:</p>
                      <div className="flex flex-wrap gap-2">
                        {agronomist.expertise.map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <span className={`
                        px-3 py-1 rounded-full text-sm
                        ${agronomist.availability === 'Available' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}
                      `}>
                        {agronomist.availability}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <ActionButton
                        variant="outline"
                        icon={Phone}
                        onClick={() => setSelectedAgronomist(agronomist)}
                      >
                        Contact
                      </ActionButton>
                      <ActionButton
                        variant="primary"
                        onClick={() => setSelectedAgronomist(agronomist)}
                      >
                        Request Consultation
                      </ActionButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Modal */}
      {selectedAgronomist && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedAgronomist(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-gray-900">Request Consultation</h3>
              <button onClick={() => setSelectedAgronomist(null)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="size-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900">{selectedAgronomist.name}</h4>
                    <p className="text-blue-600">{selectedAgronomist.specialty}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="size-4 text-gray-600" />
                    <a href={`tel:${selectedAgronomist.phone}`} className="text-blue-600 hover:text-blue-700">
                      {selectedAgronomist.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="size-4 text-gray-600" />
                    <a href={`mailto:${selectedAgronomist.email}`} className="text-blue-600 hover:text-blue-700">
                      {selectedAgronomist.email}
                    </a>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Consultation Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Phone Consultation</option>
                    <option>Field Visit</option>
                    <option>Video Call</option>
                    <option>Chat/Email Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Your Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., +251-911-123456"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Preferred Date & Time</label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Describe Your Issue/Question</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your farming challenge or question in detail..."
                  />
                </div>
                <ActionButton type="submit" variant="primary" fullWidth>
                  Submit Consultation Request
                </ActionButton>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Service Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-900 mb-4">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-blue-800">
          <div>
            <h4 className="text-blue-900 mb-2">1. Choose an Agronomist</h4>
            <p>Browse specialists by expertise and select the one that matches your needs.</p>
          </div>
          <div>
            <h4 className="text-blue-900 mb-2">2. Request Consultation</h4>
            <p>Fill out the consultation form with your farming question or challenge.</p>
          </div>
          <div>
            <h4 className="text-blue-900 mb-2">3. Get Expert Advice</h4>
            <p>Receive personalized recommendations and ongoing support from specialists.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
