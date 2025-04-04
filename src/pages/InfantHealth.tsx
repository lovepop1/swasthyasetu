import React, { useState } from 'react';
import { Baby, Brain, Stethoscope, Bell, Volume2, Guitar as Hospital, CheckCircle2, AlertCircle } from 'lucide-react';

const InfantHealth = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Infant Health Monitoring
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced AI-powered cry analysis system for early detection of health issues in infants.
        </p>
      </div>

      {/* Main Analysis Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Cry Analysis</h2>
            <p className="text-gray-600 mb-8">
              Our AI system analyzes your baby's cry patterns to detect potential health issues, including:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Brain className="w-6 h-6 text-purple-600" />
                <span>Neurological distress indicators</span>
              </li>
              <li className="flex items-center gap-3">
                <Stethoscope className="w-6 h-6 text-blue-600" />
                <span>Respiratory problems</span>
              </li>
              <li className="flex items-center gap-3">
                <Baby className="w-6 h-6 text-pink-600" />
                <span>Signs of malnutrition</span>
              </li>
            </ul>
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`mt-8 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 ${
                isRecording
                  ? 'bg-red-600 text-white'
                  : 'bg-blue-600 text-white'
              }`}
            >
              <Volume2 className="w-5 h-5" />
              {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Analysis Results</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Cry Pattern</span>
                  <span className="text-gray-500">Normal</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Stress Level</span>
                  <span className="text-gray-500">Low</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Health Indicators</span>
                  <span className="text-gray-500">Good</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Bell className="w-12 h-12 text-orange-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Instant Alerts</h3>
          <p className="text-gray-600">Receive immediate notifications when concerning patterns are detected.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Hospital className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Healthcare Connection</h3>
          <p className="text-gray-600">Direct connection to nearby healthcare providers for urgent care.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Brain className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Development Tracking</h3>
          <p className="text-gray-600">Monitor your baby's developmental progress over time.</p>
        </div>
      </div>

      {/* Health Tips */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-8">Infant Care Tips</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Daily Care</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Regular feeding schedule</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Sleep pattern monitoring</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Hygiene maintenance</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Warning Signs</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span>Unusual cry patterns</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span>Feeding difficulties</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span>Temperature changes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfantHealth;