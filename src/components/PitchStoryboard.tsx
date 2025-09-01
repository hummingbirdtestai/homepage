import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, X, Rocket, Target, Sparkles } from 'lucide-react';

const PitchStoryboard: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const blockVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const taglineVariants = {
    hidden: { 
      opacity: 0, 
      y: 100 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 1.5
      }
    }
  };

  return (
    <section className="relative bg-dark-bg text-dark-text-primary font-inter py-20 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        {/* Title */}
        <motion.div
          variants={blockVariants}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet bg-clip-text text-transparent">
            Why paragraph is Different
          </h1>
        </motion.div>

        {/* Block 1 - The Problem (Red Theme) */}
        <motion.div
          variants={blockVariants}
          className="relative mb-12 p-8 bg-dark-surface/50 backdrop-blur-sm rounded-2xl border-l-4 border-red-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-4xl"
              >
                😓
              </motion.div>
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
            </div>
            <p className="text-lg md:text-xl text-dark-text-secondary leading-relaxed">
              You watch endless videos, take mock tests, read notes…<br />
              <span className="text-red-400 font-semibold">But the same mistakes keep coming back.</span>
            </p>
          </div>
        </motion.div>

        {/* Block 2 - Old Market Fails (Grey Theme) */}
        <motion.div
          variants={blockVariants}
          className="relative mb-12 p-8 bg-dark-surface/30 backdrop-blur-sm rounded-2xl border border-gray-600/50 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                animate={{ 
                  rotate: [0, -10, 10, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-4xl"
              >
                ❌
              </motion.div>
              <div className="w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-gray-400" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <p className="text-gray-300 font-medium">Video Apps</p>
                  <p className="text-sm text-gray-400">→ Passive watching</p>
                </div>
                <div className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <p className="text-gray-300 font-medium">Mock Tests</p>
                  <p className="text-sm text-gray-400">→ Ranks, no diagnosis</p>
                </div>
                <div className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <p className="text-gray-300 font-medium">Crash Courses</p>
                  <p className="text-sm text-gray-400">→ Volume, not focus</p>
                </div>
              </div>
              <p className="text-lg text-gray-300 font-semibold">
                They dump content but never fix your gaps.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Block 3 - Where Paragraph Wins (Green Theme) */}
        <motion.div
          variants={blockVariants}
          className="relative mb-12 p-8 bg-dark-surface/50 backdrop-blur-sm rounded-2xl border border-green-500/50 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent"></div>
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(34, 197, 94, 0.2)',
                '0 0 40px rgba(34, 197, 94, 0.4)',
                '0 0 20px rgba(34, 197, 94, 0.2)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl"
          />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-4xl"
              >
                🚀
              </motion.div>
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Rocket className="w-6 h-6 text-green-400" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                  <p className="text-green-300 font-semibold">9960 PYQs + 50,000 recursive MCQs</p>
                </div>
                <div className="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                  <p className="text-green-300 font-semibold">Every wrong answer → Gap Sentence + Resources</p>
                </div>
                <div className="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                  <p className="text-green-300 font-semibold">20 Smart Analytics Tabs → Your Flight Deck</p>
                </div>
                <div className="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                  <p className="text-green-300 font-semibold">AI Mentor → Daily micro-missions</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Block 4 - The Transformation (Blue Theme) */}
        <motion.div
          variants={blockVariants}
          className="relative mb-16 p-8 bg-gradient-to-br from-accent-blue/20 to-accent-violet/20 backdrop-blur-sm rounded-2xl border border-accent-blue/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-accent-blue/5 to-accent-violet/10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-4xl"
              >
                🎯
              </motion.div>
              <div className="w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-accent-blue" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <p className="text-red-300 font-semibold mb-2">Other apps</p>
                  <p className="text-red-200">Chaos → Overwhelm → Burnout</p>
                </div>
                <div className="p-6 bg-gradient-to-r from-accent-blue/20 to-accent-violet/20 rounded-lg border border-accent-blue/30">
                  <p className="text-accent-blue font-semibold mb-2">paragraph</p>
                  <p className="text-accent-cyan">Clarity → Confidence → Top Rank</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Tagline Strip */}
        <motion.div
          variants={taglineVariants}
          className="relative -mx-4 px-4 py-12 bg-gradient-to-r from-dark-bg via-dark-surface to-dark-bg border-t border-dark-border overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/5 via-accent-blue/5 to-accent-violet/5"></div>
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-cyan/10 to-transparent bg-[length:200%_100%]"
          />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="flex justify-center items-center gap-3 mb-4">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-8 h-8 text-accent-cyan" />
              </motion.div>
              <span className="text-3xl">✨</span>
            </div>
            <motion.h2
              animate={{
                textShadow: [
                  '0 0 20px rgba(0, 212, 255, 0.5)',
                  '0 0 40px rgba(0, 212, 255, 0.8)',
                  '0 0 20px rgba(0, 212, 255, 0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-2xl md:text-4xl font-bold text-white leading-tight"
            >
              paragraph isn't another coaching app.<br />
              <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">
                It's your Mission Control for NEETPG Success.
              </span>
            </motion.h2>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PitchStoryboard;