import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Baby, Guitar as Hospital, Coins, CheckCircle2 } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, link }) => (
  <Link to={link} className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Link>
);

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          SwasthyaSetu
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
         A bridge to accessible and affordable healthcare.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          icon={CheckCircle2}
          title="AI Eligibility Matching"
          description="Instantly match with government schemes and subsidies using AI-powered verification."
          link="/eligibility"
        />
        <FeatureCard
          icon={Shield}
          title="Personalized Insurance"
          description="Get AI-recommended insurance plans based on your income and healthcare needs."
          link="/insurance"
        />
        <FeatureCard
          icon={Heart}
          title="Pregnancy Support"
          description="AI-powered monitoring and support for high-risk pregnancies."
          link="/pregnancy"
        />
        <FeatureCard
          icon={Baby}
          title="Infant Health Monitoring"
          description="Advanced cry analysis for early detection of health issues."
          link="/infant"
        />
        <FeatureCard
          icon={Hospital}
          title="Rural Healthcare"
          description="Enhanced infrastructure and offline support for rural clinics."
          link="/rural"
        />
        <FeatureCard
          icon={Coins}
          title="Health Credits"
          description="Earn rewards for maintaining good health practices."
          link="/credits"
        />
      </div>

      {/* Impact Section */}
      <div className="bg-blue-50 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
            <div className="text-gray-600">Users Helped</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">₹500Cr</div>
            <div className="text-gray-600">Benefits Unlocked</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10k+</div>
            <div className="text-gray-600">Rural Clinics</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">User Satisfaction</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8">Join millions of Indians who have already benefited from our platform.</p>
        <Link
          to="/eligibility"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Check Your Eligibility
        </Link>
      </div>
    </div>
  );
};

export default Home;