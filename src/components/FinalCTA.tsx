import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative p-12 md:p-16 bg-gradient-to-br from-dark-surface/60 to-dark-bg/60 backdrop-blur-lg border border-dark-border rounded-3xl text-center overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 rounded-full blur-2xl"
            />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex p-4 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-2xl mb-6"
                >
                  <Rocket className="w-10 h-10 text-white" />
                </motion.div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-dark-text-primary mb-6 leading-tight"
              >
                Stop drowning in content.{' '}
                <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">
                  Start flying with precision.
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 25px 50px rgba(0, 212, 255, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 bg-hero-gradient rounded-2xl font-bold text-white text-xl overflow-hidden transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-3">
                    Launch Your Prep with paragraph
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;