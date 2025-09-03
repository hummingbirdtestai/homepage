import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import DashboardPreview from './DashboardPreview';
import KeyDifferentiators from './KeyDifferentiators';
import CommunityBanner from './CommunityBanner';
import PitchStoryboard from './PitchStoryboard';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text-primary overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Dashboard Preview */}
      <DashboardPreview />
      
      {/* Key Differentiators */}
      <KeyDifferentiators />
      
      {/* Community Banner */}
      <CommunityBanner />
      
      {/* Pitch Storyboard */}
      <PitchStoryboard />
      
      {/* Final CTA */}
      <FinalCTA />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;