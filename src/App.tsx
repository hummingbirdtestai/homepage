import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import HelpCenter from './components/HelpCenter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/legal/terms" element={<TermsAndConditions />} />
        <Route path="/legal/privacy" element={<PrivacyPolicy />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// 404 fallback component
const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text-primary flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-3xl font-bold mb-2">404 — Page not found</h1>
      <p className="text-dark-text-secondary mb-4">The page you're looking for doesn't exist.</p>
      <a 
        href="/" 
        className="px-4 py-2 rounded-lg border border-dark-border hover:border-accent-blue transition-colors"
      >
        Go Home
      </a>
    </div>
  );
};

export default App;