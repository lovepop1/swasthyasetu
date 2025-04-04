import React from 'react';
import { Building2, Wifi, Database, Users, BookOpen, Laptop } from 'lucide-react';

const RuralHealthcare = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Rural Healthcare Infrastructure
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering rural healthcare facilities with AI-driven solutions and offline support systems.
        </p>
      </div>

      {/* Main Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <Database className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Offline Knowledge Base</h3>
          <p className="text-gray-600">Comprehensive medical information accessible without internet connectivity.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <Laptop className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Digital Documentation</h3>
          <p className="text-gray-600">Automated medical record keeping and patient management system.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <Users className="w-12 h-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Community Connect</h3>
          <p className="text-gray-600">Platform for healthcare workers to collaborate and share resources.</p>
        </div>
      </div>

      {/* Infrastructure Map */}
      <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
        <h2 className="text-2xl font-bold mb-8">Rural Clinic Network</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="aspect-video bg-gray-100 rounded-lg mb-6">
              {/* Map placeholder */}
              <div className="h-full flex items-center justify-center">
                <Building2 className="w-16 h-16 text-gray-400" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">10k+</div>
                <div className="text-sm text-green-800">Connected Clinics</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">5M+</div>
                <div className="text-sm text-blue-800">Patients Served</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Available Resources</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Wifi className="w-6 h-6 text-blue-600" />
                <span>Low-bandwidth optimized systems</span>
              </li>
              <li className="flex items-center gap-3">
                <Database className="w-6 h-6 text-purple-600" />
                <span>Offline medical databases</span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-green-600" />
                <span>Training materials</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Support Features */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-8">Healthcare Support System</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">For Healthcare Workers</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>AI-assisted diagnosis support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Digital prescription management</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Telemedicine capabilities</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">For Patients</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Health record access</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Appointment scheduling</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Medicine reminders</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuralHealthcare;