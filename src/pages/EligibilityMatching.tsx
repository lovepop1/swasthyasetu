import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Search } from 'lucide-react';

const EligibilityMatching = () => {
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    location: '',
    medicalConditions: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Eligibility Matching
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our AI-powered system matches your profile with available government schemes and subsidies to ensure you get the healthcare benefits you deserve.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Eligibility Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Check Your Eligibility</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your age"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Annual Income (₹)</label>
              <input
                type="number"
                name="income"
                value={formData.income}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your annual income"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select your state</option>
                <option value="delhi">Delhi</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="karnataka">Karnataka</option>
                <option value="tamilnadu">Tamil Nadu</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Medical Conditions</label>
              <textarea
                name="medicalConditions"
                value={formData.medicalConditions}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="List any medical conditions"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Check Eligibility
            </button>
          </form>
        </div>

        {/* Benefits Section */}
        <div className="space-y-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Instant Verification</h3>
                <p className="text-green-700">Our AI system instantly verifies your eligibility for various government healthcare schemes using your provided information.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Alternative Options</h3>
                <p className="text-blue-700">If you don't qualify for certain schemes, we'll suggest alternative options and subsidies that might be suitable for you.</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Digital Integration</h3>
                <p className="text-purple-700">Seamless integration with Aadhaar, UPI, and DigiLocker for quick document verification and benefit processing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityMatching;