import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EligibilityMatching from './pages/EligibilityMatching';
import InsurancePlans from './pages/InsurancePlans';
import PregnancySupport from './pages/PregnancySupport';
import InfantHealth from './pages/InfantHealth';
import RuralHealthcare from './pages/RuralHealthcare';
import HealthCredits from './pages/HealthCredits';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eligibility" element={<EligibilityMatching />} />
          <Route path="/insurance" element={<InsurancePlans />} />
          <Route path="/pregnancy" element={<PregnancySupport />} />
          <Route path="/infant" element={<InfantHealth />} />
          <Route path="/rural" element={<RuralHealthcare />} />
          <Route path="/credits" element={<HealthCredits />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;