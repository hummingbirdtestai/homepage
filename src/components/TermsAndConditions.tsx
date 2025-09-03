import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text-primary">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-6 border-b border-dark-border"
      >
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-4 py-2 bg-dark-surface rounded-lg border border-dark-border hover:border-accent-blue/50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </motion.button>
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-accent-blue" />
            <h1 className="text-2xl font-bold">Terms and Conditions</h1>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="p-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-surface/50 backdrop-blur-sm border border-dark-border rounded-2xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <div className="mb-8">
                <p className="text-dark-text-secondary mb-4">Last updated: January 2025</p>
                <p className="text-lg text-dark-text-secondary leading-relaxed">
                  Welcome to paragraph. These terms and conditions outline the rules and regulations for the use of our AI-powered NEETPG preparation platform.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">1. Acceptance of Terms</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    By accessing and using paragraph, you accept and agree to be bound by the terms and provision of this agreement. 
                    If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">2. Use License</h2>
                  <p className="text-dark-text-secondary leading-relaxed mb-4">
                    Permission is granted to temporarily access paragraph for personal, non-commercial transitory viewing only. This includes:
                  </p>
                  <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                    <li>Access to study materials and practice questions</li>
                    <li>Use of AI-powered analytics and recommendations</li>
                    <li>Participation in community features</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">3. User Account</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    You are responsible for safeguarding your account credentials and for all activities that occur under your account. 
                    You must immediately notify us of any unauthorized use of your account.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">4. Content and Intellectual Property</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    All content on paragraph, including but not limited to questions, explanations, analytics, and study materials, 
                    is the intellectual property of paragraph and is protected by copyright laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">5. Prohibited Uses</h2>
                  <p className="text-dark-text-secondary leading-relaxed mb-4">You may not use paragraph:</p>
                  <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To share or distribute copyrighted content without permission</li>
                    <li>To attempt to reverse engineer or extract proprietary algorithms</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">6. Disclaimer</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    The information on paragraph is provided on an 'as is' basis. To the fullest extent permitted by law, 
                    paragraph excludes all representations, warranties, conditions and terms relating to our website and the use of this website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">7. Limitation of Liability</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    In no event shall paragraph, nor any of its officers, directors and employees, be held liable for anything 
                    arising out of or in any way connected with your use of this platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">8. Contact Information</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    If you have any questions about these Terms and Conditions, please contact us at support@paragraph.com
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default TermsAndConditions;