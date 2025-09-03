import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';

/**
 * NOTE: This template is provided for general informational purposes only and does not constitute legal advice.
 * Have a qualified lawyer review and adapt it for your exact business, jurisdiction, and product flow.
 */

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
                <p className="text-dark-text-secondary mb-4">Last updated: 03 September 2025</p>
                <p className="text-lg text-dark-text-secondary leading-relaxed">
                  Welcome to <span className="font-semibold">paragraph</span> (the “Platform”), an AI-powered NEET-PG preparation and coaching service.
                  The Website and Platform are owned and operated by <span className="font-semibold">Manu Bharadwaz Yadavalli</span> (“Owner”, “we”, “us”, “our”).
                  By accessing or using the Platform, you agree to these Terms and Conditions (“Terms”).
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">1. Nature of Service (NEET-PG Coaching)</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    The Platform provides digital coaching, practice questions (including PYQs), analytics, and study guidance for the NEET-PG examination.
                    Content may be generated or curated using AI and expert workflows. We do not represent or affiliate with the National Board of Examinations (NBE) or any government authority.
                    Your use of the Platform does not guarantee any specific exam result, rank, or outcome.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">2. Acceptance of Terms</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    By creating an account, accessing materials, or using any feature, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                    If you do not agree, you must not use the Platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">3. Eligibility & Account</h2>
                  <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                    <li>You must be at least the age of majority in your jurisdiction or have parental/guardian consent.</li>
                    <li>Registration may require OTP verification (phone/email). You are responsible for safeguarding credentials and all activity under your account.</li>
                    <li>Notify us immediately of any unauthorized access. We may suspend/terminate accounts for suspected misuse or policy violations.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">4. License & Permitted Use</h2>
                  <p className="text-dark-text-secondary leading-relaxed mb-4">
                    We grant you a limited, non-exclusive, non-transferable license to access the Platform for your personal, non-commercial exam preparation.
                    You agree not to:
                  </p>
                  <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                    <li>Copy, scrape, download at scale, or redistribute content without permission.</li>
                    <li>Reverse engineer, probe, or attempt to extract proprietary algorithms or datasets.</li>
                    <li>Share your account or sell access to others.</li>
                    <li>Upload, post, or transmit content that infringes third-party rights or applicable laws.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">5. Payments, Pricing & Taxes</h2>
                  <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                    <li>Fees are displayed at checkout. Prices may change at any time before purchase.</li>
                    <li>Payments are processed by third-party gateways. You authorize us and our processors to charge your selected payment method.</li>
                    <li>Invoices/receipts may include applicable taxes (e.g., GST) per law. You are responsible for any transaction charges imposed by your bank/UPI/card provider.</li>
                    <li>If any payment is reversed/charged back, your access may be suspended until the issue is resolved.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">6. Refunds & Cancellation Policy</h2>
                  <p className="text-dark-text-secondary leading-relaxed mb-4">
                    <span className="font-semibold">All fees are non-refundable</span> once access to digital content, test engines, or premium features is granted, except where a refund is required by law or where expressly stated otherwise below.
                  </p>
                  <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                    <li><span className="font-semibold">Duplicate/Accidental Charges:</span> If you are charged more than once for the same order due to a payment gateway error, we will process a refund for the duplicate amount after verification.</li>
                    <li><span className="font-semibold">Failed Transactions:</span> For failed transactions that still debited your account, the payment gateway/bank usually auto-reverses within their standard timelines. If not, contact us with proof, and we will coordinate with the gateway.</li>
                    <li><span className="font-semibold">No Partial Refunds:</span> We do not offer pro-rated or partial refunds for unused time or features.</li>
                    <li><span className="font-semibold">Cancellations:</span> You may cancel future renewals (if any subscription plan supports auto-renewal). Cancellation stops future billing; it does not refund the current/previous billing period.</li>
                  </ul>
                  <p className="text-dark-text-secondary leading-relaxed mt-4">
                    Your statutory rights, if any, remain unaffected as per applicable laws of India.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">7. Referral & Rewards Program</h2>
                  <p className="text-dark-text-secondary leading-relaxed mb-4">
                    We may run referral or incentive programs from time to time. Additional program-specific terms will apply and will be deemed incorporated into these Terms.
                  </p>
                  <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                    <li><span className="font-semibold">Eligibility & KYC:</span> Payouts (e.g., via UPI/bank transfer) may require successful KYC verification and adherence to anti-fraud checks.</li>
                    <li><span className="font-semibold">Valid Conversions:</span> Only paid enrollments that pass fraud checks (unique device, email, phone; no self-referrals; no bulk fake accounts) qualify. We may void or claw back incentives for cancellations, chargebacks, or policy violations.</li>
                    <li><span className="font-semibold">Payout Timelines:</span> Credited after a verification/cooling-off period that we specify in program details.</li>
                    <li><span className="font-semibold">Taxes:</span> Incentives may be subject to applicable taxes and/or TDS deductions under Indian law. You are responsible for providing accurate tax information.</li>
                    <li><span className="font-semibold">Program Changes:</span> We may modify, suspend, or terminate referral programs at any time.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">8. Academic Integrity & Fair Use</h2>
                  <ul className="list-disc list-inside text-dark-text-secondary space-y-2 ml-4">
                    <li>Do not attempt to gain unfair advantage in any examination using Platform content.</li>
                    <li>Do not share protected content publicly or privately beyond permitted personal use.</li>
                    <li>Reports of misuse may lead to immediate account suspension and appropriate action.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">9. Intellectual Property</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    All Platform content (including questions, explanations, analytics, designs, text, graphics, logos, and software) is owned by the Owner or its licensors and protected by applicable IP laws. No rights are granted except as expressly stated in these Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">10. User Content</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    If you submit feedback, suggestions, comments, or other materials, you grant us a worldwide, royalty-free, perpetual license to use, reproduce, and create derivative works for improving our services. You represent that you have the right to grant this license and that your submissions do not infringe third-party rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">11. Third-Party Services & Links</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    The Platform may integrate third-party services (e.g., payment gateways, video hosting) and links. We are not responsible for third-party content or practices. Use of third-party services is at your own risk and subject to their terms and privacy policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">12. Disclaimers</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    The Platform and all content are provided “as is” and “as available” without warranties of any kind, whether express or implied, including but not limited to fitness for a particular purpose, non-infringement, accuracy, or uninterrupted availability. We do not warrant any outcome, rank, or score improvement. Data/analytics may contain errors or approximations.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">13. Limitation of Liability</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    To the maximum extent permitted by law, in no event shall the Owner or its affiliates, officers, employees, or agents be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, data, or goodwill, arising from or related to your use of the Platform, even if advised of the possibility. Our aggregate liability for any claim shall not exceed the amount you paid for access in the three (3) months preceding the claim.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">14. Indemnification</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    You agree to defend, indemnify, and hold harmless the Owner and its affiliates from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with your access to or use of the Platform, your violation of these Terms, or your infringement of any rights of another person or entity.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">15. Suspension & Termination</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    We may suspend or terminate your access at any time for suspected violations of these Terms, illegal activity, non-payment, fraud, or to comply with legal obligations. Upon termination, your right to use the Platform ceases immediately; sections intended to survive (e.g., IP, disclaimers, limitation of liability, indemnity) will continue to apply.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">16. Privacy</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    Our collection and use of personal data are described in our Privacy Policy. By using the Platform, you consent to the processing of your information consistent with that policy, including OTP verification and fraud prevention measures.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">17. Governing Law & Dispute Resolution</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    These Terms are governed by the laws of India. Subject to applicable law, the courts at Hyderabad, Telangana, India shall have exclusive jurisdiction over all disputes arising from or relating to the Platform and these Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">18. Changes to Terms</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    We may update these Terms from time to time. The “Last updated” date will reflect the most recent changes.
                    Continued use of the Platform after changes constitute acceptance of the updated Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-dark-text-primary mb-4 text-accent-cyan">19. Contact</h2>
                  <p className="text-dark-text-secondary leading-relaxed">
                    For questions or concerns about these Terms, contact:{" "}
                    <a href="mailto:support@paragraph.com" className="text-accent-blue underline">support@paragraph.com</a>
                  </p>
                  <p className="text-dark-text-secondary leading-relaxed mt-2">
                    Legal Owner: <span className="font-semibold">Manu Bharadwaz Yadavalli</span>
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
