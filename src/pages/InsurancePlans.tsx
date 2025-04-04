import React, { useState } from 'react';
import { Shield, Heart, Wallet, ArrowRight } from 'lucide-react';

const InsurancePlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 1,
      name: 'Basic Care',
      price: '₹999/month',
      coverage: '₹5 Lakhs',
      features: [
        'Hospitalization coverage',
        'Accident coverage',
        'Ambulance charges',
        'Pre & post hospitalization'
      ]
    },
    {
      id: 2,
      name: 'Family Plus',
      price: '₹1,999/month',
      coverage: '₹10 Lakhs',
      features: [
        'All Basic Care features',
        'Maternity coverage',
        'Child vaccination',
        'Dental & vision care'
      ]
    },
    {
      id: 3,
      name: 'Premium Health',
      price: '₹2,999/month',
      coverage: '₹25 Lakhs',
      features: [
        'All Family Plus features',
        'International coverage',
        'Critical illness coverage',
        'Alternative medicine'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI-Recommended Insurance Plans
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get personalized insurance recommendations based on your income, medical history, and healthcare needs.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Shield className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Flexible Coverage</h3>
          <p className="text-gray-600">Customized plans that adapt to your changing healthcare needs and financial situation.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Heart className="w-12 h-12 text-red-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Comprehensive Care</h3>
          <p className="text-gray-600">From basic health coverage to specialized treatments, we've got you covered.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Wallet className="w-12 h-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Affordable Premiums</h3>
          <p className="text-gray-600">Pay-per-use options and flexible payment plans to suit your budget.</p>
        </div>
      </div>

      {/* Insurance Plans */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-white p-8 rounded-xl shadow-lg border-2 transition-all ${
              selectedPlan === plan.id ? 'border-blue-500 scale-105' : 'border-transparent'
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <div className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</div>
            <div className="text-lg text-gray-600 mb-6">Coverage up to {plan.coverage}</div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              Select Plan
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsurancePlans;