import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, FileText, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Legal',
      links: [
        { name: 'Terms & Conditions', href: '/legal/terms', icon: FileText, isInternal: true },
        { name: 'Privacy Policy', href: '/legal/privacy', icon: Shield, isInternal: true }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: 'mailto:support@paragraph.com', icon: Mail, isInternal: false },
        { name: 'Help Center', href: '/help', icon: ExternalLink, isInternal: false }
      ]
    }
  ];

  return (
    <footer className="relative bg-dark-surface/30 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <img 
                  src="logo.png" 
                  alt="paragraph logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">
                paragraph
              </span>
            </div>
            <p className="text-dark-text-secondary leading-relaxed">
              Your personal Mission Control for NEETPG success. Transforming medical exam preparation through AI-driven precision.
            </p>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (sectionIndex + 1) }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-dark-text-primary">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={link.name}>
                    {link.isInternal ? (
                      <Link to={link.href}>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                          className="group flex items-center gap-2 text-dark-text-secondary hover:text-accent-cyan transition-colors duration-300"
                        >
                          <link.icon className="w-4 h-4 group-hover:text-accent-blue transition-colors duration-300" />
                          {link.name}
                        </motion.div>
                      </Link>
                    ) : (
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="group flex items-center gap-2 text-dark-text-secondary hover:text-accent-cyan transition-colors duration-300"
                      >
                        <link.icon className="w-4 h-4 group-hover:text-accent-blue transition-colors duration-300" />
                        {link.name}
                      </motion.a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-dark-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-text-muted text-sm">
              © 2025 paragraph. All rights reserved. Transforming NEETPG preparation through AI.
            </p>
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 bg-accent-cyan rounded-full"
              />
              <span className="text-dark-text-muted text-sm">
                Made with precision for medical aspirants
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;