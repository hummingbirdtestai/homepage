import React from 'react';
import { motion } from 'framer-motion';
import { Users, Radar } from 'lucide-react';

const CommunityBanner: React.FC = () => {
  return (
    <section className="relative py-20 px-4 my-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="relative p-12 md:p-16 bg-gradient-to-br from-dark-surface/60 to-dark-bg/60 backdrop-blur-lg border border-dark-border rounded-3xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-accent-blue/5 to-accent-violet/5"></div>
            
            {/* Animated radar circles */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 border-2 border-accent-cyan/30 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 w-16 h-16 border-2 border-accent-blue/20 rounded-full"
              />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center items-center gap-4 mb-8"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <Users className="w-12 h-12 text-accent-cyan" />
                </motion.div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Radar className="w-10 h-10 text-accent-violet" />
                </motion.div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-dark-text-primary mb-6 leading-tight"
              >
                You'll never prepare{' '}
                <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">
                  alone
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-dark-text-secondary leading-relaxed"
              >
                AI mentors guide you, and dynamic cohorts connect you with peers at your level.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityBanner;