import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, MessageCircle, Book, Users, Zap, Search, Mail, Phone } from 'lucide-react';

const HelpCenter: React.FC = () => {
  const helpCategories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Learn the basics of using paragraph for NEETPG prep',
      articles: [
        'How to create your account',
        'Setting up your study plan',
        'Understanding your dashboard',
        'Taking your first practice test'
      ],
      color: 'from-accent-cyan to-accent-blue'
    },
    {
      icon: Zap,
      title: 'Features & Analytics',
      description: 'Master the advanced features and analytics',
      articles: [
        'Understanding ERI Score',
        'Gap Chain Analysis',
        'Time-to-Mastery predictions',
        'AI Mentor recommendations'
      ],
      color: 'from-accent-blue to-accent-violet'
    },
    {
      icon: MessageCircle,
      title: 'Account & Billing',
      description: 'Manage your account and subscription',
      articles: [
        'Payment methods and billing',
        'Referral program details',
        'Account settings and preferences',
        'Subscription management'
      ],
      color: 'from-accent-violet to-accent-cyan'
    },
    {
      icon: Users,
      title: 'Community & Support',
      description: 'Connect with peers and get help',
      articles: [
        'Joining study groups',
        'Contacting support',
        'Reporting technical issues',
        'Feature requests and feedback'
      ],
      color: 'from-accent-cyan to-accent-violet'
    }
  ];

  const quickActions = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      action: 'mailto:support@paragraph.in',
      color: 'text-accent-cyan'
    },
    {
      icon: Phone,
      title: 'Call Support',
      description: 'Speak with our team',
      action: 'tel:+919704927613',
      color: 'text-accent-blue'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text-primary">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-6 border-b border-dark-border"
      >
        <div className="max-w-6xl mx-auto flex items-center gap-4">
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
            <HelpCircle className="w-6 h-6 text-accent-cyan" />
            <h1 className="text-2xl font-bold">Help Center</h1>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="inline-flex p-4 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-2xl mb-6">
              <HelpCircle className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How can we{' '}
            <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">
              help you?
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative max-w-md mx-auto"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-text-muted" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-3 bg-dark-surface/50 border border-dark-border rounded-xl text-dark-text-primary placeholder-dark-text-muted focus:outline-none focus:border-accent-blue/50 transition-colors"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Actions */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-12 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {quickActions.map((action, index) => (
              <motion.a
                key={action.title}
                href={action.action}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0, 212, 255, 0.15)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group p-6 bg-dark-surface/50 backdrop-blur-sm border border-dark-border rounded-2xl hover:border-accent-blue/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 rounded-xl">
                    <action.icon className={`w-6 h-6 ${action.color}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-dark-text-primary group-hover:text-accent-cyan transition-colors">
                      {action.title}
                    </h4>
                    <p className="text-dark-text-secondary text-sm">
                      {action.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Help Categories */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-12 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Browse by Category</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 25px 50px rgba(0, 212, 255, 0.1)'
                }}
                className="group p-8 bg-dark-surface/40 backdrop-blur-lg border border-dark-border rounded-3xl hover:border-accent-blue/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold text-dark-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
                      {category.title}
                    </h4>
                    <p className="text-dark-text-secondary">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.articles.map((article, articleIndex) => (
                    <motion.div
                      key={article}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * articleIndex }}
                      className="flex items-center gap-3 p-3 bg-dark-bg/30 rounded-lg hover:bg-dark-bg/50 transition-colors cursor-pointer group/article"
                    >
                      <div className="w-2 h-2 bg-accent-cyan rounded-full opacity-60 group-hover/article:opacity-100 transition-opacity" />
                      <span className="text-dark-text-secondary group-hover/article:text-dark-text-primary transition-colors text-sm">
                        {article}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-16 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center p-12 bg-gradient-to-br from-dark-surface/60 to-dark-bg/60 backdrop-blur-lg border border-dark-border rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still need help?
            </h3>
            <p className="text-dark-text-secondary mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed in your NEETPG preparation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:support@paragraph.in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-hero-gradient rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Email Support
              </motion.a>
              
              <motion.a
                href="tel:+919704927613"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-dark-border bg-dark-surface/50 rounded-xl font-semibold text-dark-text-primary hover:border-accent-blue/50 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Support
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HelpCenter;