import React from 'react';
import { Baby, Bell, Calendar, Activity, Stethoscope, Apple } from 'lucide-react';

const PregnancySupport = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI-Powered Pregnancy Support
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced monitoring and support system for ensuring healthy pregnancies through AI-driven risk assessment and personalized care plans.
        </p>
      </div>

      {/* Main Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <Activity className="w-12 h-12 text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Risk Assessment</h3>
          <p className="text-gray-600">AI-powered monitoring of vital signs and symptoms to detect potential complications early.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <Apple className="w-12 h-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Nutrition Planning</h3>
          <p className="text-gray-600">Personalized dietary recommendations based on local food availability and nutritional needs.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <Bell className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">ASHA Alert System</h3>
          <p className="text-gray-600">Immediate notification system for ASHA workers when high-risk conditions are detected.</p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
        <h2 className="text-2xl font-bold mb-8">Pregnancy Journey Timeline</h2>
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">First Trimester</h3>
              <p className="text-gray-600">Initial health assessment, dietary planning, and risk factor identification</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Stethoscope className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Second Trimester</h3>
              <p className="text-gray-600">Regular monitoring, nutrition adjustments, and preparation guidance</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-pink-100 p-3 rounded-full">
              <Baby className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Third Trimester</h3>
              <p className="text-gray-600">Intensive monitoring, birth preparation, and emergency planning</p>
            </div>
          </div>
        </div>
      </div>

      {/* Support Features */}
      <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-8">24/7 Support System</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Emergency Response</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Immediate connection to nearby healthcare providers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Ambulance service coordination</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Real-time health monitoring</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Community Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Connection with local ASHA workers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Access to support groups</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Educational resources and guidance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PregnancySupport;