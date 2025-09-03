import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

/**
 * DISCLAIMER: This Privacy Policy template is provided for general information only
 * and does not constitute legal advice. Please have a qualified lawyer review and
 * adapt it for your business, jurisdiction, and data flows.
 */

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
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-dark-surface rounded-lg border border-dark-border hover:border-accent-blue/50 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </motion.div>
          </Link>
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
                <p className="text-dark-text-secondary mb-2">
                  <span className="font-semibold">Last updated:</span> 03 September 2025
                </p>
                <p className="text-dark-text-secondary">
                  This Privacy Policy explains how we collect, use, disclose, and protect personal information when you use
                  <span className="font-semibold"> paragraph</span>, an AI-powered NEET-PG preparation and coaching platform
                  (the “Platform”). The Website/Platform is owned and operated by
                  <span className="font-semibold"> Manu Bharadwaz Yadavalli</span> (“Owner”, “we”, “us”, or “our”).
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">1) Scope & Controller</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    This Policy applies to personal information processed in connection with your use of the Platform,
                    including our web portal and related services. The Owner is the data controller for this processing.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">2) Information We Collect</h2>
                  <div className="space-y-3 text-dark-text-secondary">
                    <p><span className="font-semibold">Account & Identity:</span> name, email, mobile number, OTP verification data, profile details.</p>
                    <p><span className="font-semibold">Study & Performance Data:</span> attempts, PYQs/MCQs activity, scores, accuracy, bookmarks, learning gaps, session duration, device info (for anti-fraud) and interactions with AI features.</p>
                    <p><span className="font-semibold">Payment & Referral Data:</span> order details, partial payment identifiers from payment gateways, UPI/bank info you provide for referral payouts (subject to KYC), coupon/referral codes and attribution.</p>
                    <p><span className="font-semibold">Support & Communications:</span> messages, feedback, forms, emails, tickets, and metadata.</p>
                    <p><span className="font-semibold">Technical & Usage:</span> device/browser type, IP address, timestamps, pages visited, feature usage, cookies and similar technologies for analytics and security.</p>
                    <p><span className="font-semibold">Third-Party Sources:</span> data from service providers (e.g., payment gateways), analytics, or login/identity partners where permitted by you or law.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">3) How We Use Personal Information</h2>
                  <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                    <li>Authenticate users via OTP and secure your account.</li>
                    <li>Deliver core services: content access, test engines, analytics, leaderboards, AI-driven recommendations.</li>
                    <li>Personalize learning plans and measure progress, performance, and readiness.</li>
                    <li>Process payments, manage subscriptions, handle invoices/receipts, and detect/prevent fraud.</li>
                    <li>Run referral/rewards programs including verification, eligibility assessment, and payouts.</li>
                    <li>Provide customer support; communicate service updates, notices, and security alerts.</li>
                    <li>Improve content quality, algorithms, and user experience through aggregate insights.</li>
                    <li>Comply with legal obligations and enforce our Terms and policies.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">4) Lawful Bases (where applicable)</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    We rely on one or more of the following: your consent (e.g., marketing, certain cookies), performance of a contract
                    (providing the Platform), legitimate interests (security, product improvement, fraud prevention), and legal obligations
                    (tax, accounting, KYC/TDS where applicable).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">5) Cookies & Similar Technologies</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    We use cookies/local storage and similar tools for sign-in, preferences, analytics, performance, and security.
                    You can control cookies through your browser settings. Disabling some cookies may affect Platform functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">6) Disclosures & Third Parties</h2>
                  <p className="text-dark-text-secondary leading-relaxed mb-3">
                    We do not sell your personal information. We share information with:
                  </p>
                  <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                    <li><span className="font-semibold">Service Providers/Processors:</span> payment gateways, hosting, analytics, SMS/OTP/email vendors, customer support tools—bound by confidentiality and data protection terms.</li>
                    <li><span className="font-semibold">Compliance & Safety:</span> where required by law, regulation, legal process, or to protect rights, safety, and prevent fraud/abuse.</li>
                    <li><span className="font-semibold">Business Changes:</span> in connection with mergers, acquisitions, financing, or asset transfers, subject to this Policy or successor safeguards.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">7) International Transfers</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    Our service providers may process data in countries other than yours. Where required, we implement appropriate safeguards
                    (e.g., contractual clauses) to protect your information during such transfers.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">8) Data Retention</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    We retain personal information for as long as necessary to provide the Platform, comply with legal/ tax/ accounting obligations,
                    resolve disputes, and enforce agreements. Typical retention includes: account data (active use + reasonable period),
                    transaction records (as required by law), and study analytics (while your account is active or until deletion is requested where feasible).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">9) Your Rights & Choices</h2>
                  <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                    <li>Access, review, correct, or update your profile information.</li>
                    <li>Request deletion of your account and (where feasible) associated study data, subject to legal/legitimate retention needs.</li>
                    <li>Export your study data in a portable format (where technically feasible).</li>
                    <li>Opt out of non-essential marketing communications via provided controls.</li>
                    <li>Withdraw consent where processing relies on consent (this does not affect prior lawful processing).</li>
                  </ul>
                  <p className="text-dark-text-secondary leading-relaxed mt-3">
                    We may require reasonable verification (e.g., OTP) before fulfilling requests for your security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">10) Security</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    We use administrative, technical, and organizational safeguards designed to protect your information
                    (e.g., encryption in transit, restricted access, monitoring, and fraud checks). No method of transmission or storage is 100% secure;
                    we cannot guarantee absolute security but strive to protect your data continuously.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">11) Children’s Privacy</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    The Platform is intended for users preparing for NEET-PG and is not directed to children under the age of 13 (or the age of digital consent in your jurisdiction).
                    We do not knowingly collect personal information from such children. If you believe a child has provided data, please contact us to delete it.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">12) Communications</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    We may send you transactional messages (security alerts, service updates) and, with your consent where required, marketing communications.
                    You can opt out of marketing at any time via the unsubscribe link or account settings. Transactional messages are essential to the service and cannot be opted out of.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">13) Referral & Anti-Fraud Notices</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    If you participate in referral/reward programs, we may process device, network, and activity signals to detect duplicate/fake accounts and abuse.
                    Payouts may require KYC and may be subject to applicable tax/TDS. Fraudulent activity can result in account suspension and forfeiture of incentives.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">14) Third-Party Links & Content</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    The Platform may contain links to third-party sites or services. We are not responsible for their privacy practices.
                    Please review their policies before providing personal information to them.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-violet">15) Changes to this Policy</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    We may update this Privacy Policy periodically. If we make material changes, we will take appropriate steps to notify you
                    (e.g., email, in-app notice). The “Last updated” date reflects the latest revision. Continued use of the Platform constitutes acceptance of the updated Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-2 text-accent-violet">16) Contact & Grievance Redressal</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    Owner & Website Controller: <span className="font-semibold">Manu Bharadwaz Yadavalli</span>
                  </p>
                  <p className="text-dark-text-secondary leading-relaxed">
                    Privacy/Support: <a href="mailto:privacy@paragraph.com" className="text-accent-blue underline">privacy@paragraph.com</a>
                  </p>
                  <p className="text-dark-text-secondary leading-relaxed mt-2">
                    <span className="font-semibold">Grievance Officer (India):</span> Manu Bharadwaz Yadavalli, support@paragraph.in, +91-9704927613, Villa no78, Mystic Hills Villas, Green Hills Moosapet Road , Blanagar, Rangareddy, 500018, RANGA REDDY, , TELANGANA, 500018<br />
                    Jurisdiction: Hyderabad, Telangana, India.
                  </p>
                  <p className="text-dark-text-secondary leading-relaxed mt-2">
                    For requests regarding data access, correction, deletion, or export, please email from your registered address and include verification details (e.g., last login phone/email for OTP).
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
