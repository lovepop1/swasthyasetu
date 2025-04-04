import React, { useState } from 'react';
import { Coins, Trophy, Gift, Target, Activity, Award } from 'lucide-react';

const HealthCredits = () => {
  const [credits, setCredits] = useState(500);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Health Credits System
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Earn rewards for maintaining good health practices and engaging in preventive healthcare activities.
        </p>
      </div>

      {/* Credits Dashboard */}
      <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Your Health Credits</h2>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-xl text-white">
              <div className="flex items-center gap-4 mb-4">
                <Coins className="w-8 h-8" />
                <span className="text-3xl font-bold">{credits}</span>
              </div>
              <p className="text-sm opacity-90">Credits available for redemption</p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-green-500" />
                    <span>Daily Health Check</span>
                  </div>
                  <span className="text-green-500">+50 credits</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-blue-500" />
                    <span>Vaccination Complete</span>
                  </div>
                  <span className="text-green-500">+200 credits</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Rewards Catalog</h2>
            <div className="space-y-4">
              <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Gift className="w-6 h-6 text-purple-500" />
                    <span className="font-semibold">Insurance Premium Discount</span>
                  </div>
                  <span className="text-blue-600 font-semibold">1000 credits</span>
                </div>
                <p className="text-gray-600 text-sm">Get 10% off on your next insurance premium payment</p>
              </div>
              <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Gift className="w-6 h-6 text-green-500" />
                    <span className="font-semibold">Health Check-up Package</span>
                  </div>
                  <span className="text-blue-600 font-semibold">750 credits</span>
                </div>
                <p className="text-gray-600 text-sm">Free comprehensive health check-up</p>
              </div>
              <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Gift className="w-6 h-6 text-orange-500" />
                    <span className="font-semibold">Pharmacy Voucher</span>
                  </div>
                  <span className="text-blue-600 font-semibold">500 credits</span>
                </div>
                <p className="text-gray-600 text-sm">₹500 off on medicine purchases</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Earn */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Target className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Daily Goals</h3>
          <p className="text-gray-600">Complete daily health tasks to earn credits</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Health check-ins</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Medication adherence</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Activity className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Health Activities</h3>
          <p className="text-gray-600">Earn through preventive healthcare</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Regular check-ups</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Vaccinations</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Award className="w-12 h-12 text-orange-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Special Rewards</h3>
          <p className="text-gray-600">Bonus credits for major milestones</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Health goals achieved</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Community participation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HealthCredits;