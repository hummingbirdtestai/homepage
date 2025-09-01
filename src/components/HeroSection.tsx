import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'From Chaos to Clarity. From Clarity to Rank.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg">
        <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-violet/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Animated Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet bg-clip-text text-transparent">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-accent-cyan"
              >
                |
              </motion.span>
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-lg md:text-xl lg:text-2xl text-dark-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          paragraph is your personal Mission Control for NEETPG — powered by{' '}
          <span className="text-accent-cyan font-semibold">9960 PYQs</span>,{' '}
          <span className="text-accent-blue font-semibold">50,000 recursive MCQs</span>, and{' '}
          <span className="text-accent-violet font-semibold">AI-driven hyperpersonalized analytics</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-hero-gradient rounded-xl font-semibold text-white text-lg overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-accent-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 border-2 border-dark-border bg-dark-surface/50 backdrop-blur-sm rounded-xl font-semibold text-dark-text-primary text-lg hover:border-accent-blue/50 hover:bg-dark-surface/80 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              How It Works
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;