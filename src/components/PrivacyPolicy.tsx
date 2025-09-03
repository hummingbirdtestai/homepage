import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
            <Shield className="w-6 h-6 text-accent-violet" />
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
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
                  At paragraph, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, and safeguard your data.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">1. Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-dark-text-primary mb-2">Personal Information</h3>
                      <p className="text-dark-text-secondary leading-relaxed">
                        We collect information you provide directly, such as your name, email address, and account preferences when you register for paragraph.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark-text-primary mb-2">Study Data</h3>
                      <p className="text-dark-text-secondary leading-relaxed">
                        We collect data about your study patterns, quiz performance, and learning progress to provide personalized recommendations and analytics.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark-text-primary mb-2">Usage Information</h3>
                      <p className="text-dark-text-secondary leading-relaxed">
                        We automatically collect information about how you use our platform, including pages visited, features used, and time spent studying.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">2. How We Use Your Information</h2>
                  <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                    <li>Provide personalized study recommendations and analytics</li>
                    <li>Track your learning progress and identify knowledge gaps</li>
                    <li>Improve our AI algorithms and platform features</li>
                    <li>Send you important updates about your account and our services</li>
                    <li>Provide customer support and respond to your inquiries</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">3. Data Security</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    We implement industry-standard security measures to protect your personal information against unauthorized access, 
                    alteration, disclosure, or destruction. Your study data is encrypted both in transit and at rest.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">4. Data Sharing</h2>
                  <p className="text-dark-text-secondary leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except in the following cases:
                  </p>
                  <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>With trusted service providers who assist in operating our platform (under strict confidentiality agreements)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">5. Your Rights</h2>
                  <p className="text-dark-text-secondary leading-relaxed mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                    <li>Access and review your personal data</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your account and associated data</li>
                    <li>Opt-out of non-essential communications</li>
                    <li>Export your study data in a portable format</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">6. Cookies and Tracking</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. 
                    You can control cookie settings through your browser preferences.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">7. Changes to Privacy Policy</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                    Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">8. Contact Us</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at privacy@paragraph.com
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

export default PrivacyPolicy;