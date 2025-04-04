import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">HealthCare AI</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/eligibility" className="text-gray-600 hover:text-blue-600 px-3 py-2">Eligibility</Link>
            <Link to="/insurance" className="text-gray-600 hover:text-blue-600 px-3 py-2">Insurance</Link>
            <Link to="/pregnancy" className="text-gray-600 hover:text-blue-600 px-3 py-2">Pregnancy</Link>
            <Link to="/infant" className="text-gray-600 hover:text-blue-600 px-3 py-2">Infant Health</Link>
            <Link to="/rural" className="text-gray-600 hover:text-blue-600 px-3 py-2">Rural Care</Link>
            <Link to="/credits" className="text-gray-600 hover:text-blue-600 px-3 py-2">Health Credits</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;