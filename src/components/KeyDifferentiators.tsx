import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Layers, BarChart4 } from 'lucide-react';

const KeyDifferentiators: React.FC = () => {
  const features = [
    {
      icon: RefreshCw,
      title: 'Adaptive Gap Closure',
      description: 'Recursive MCQs trace your errors to the root.',
      gradient: 'from-accent-cyan to-accent-blue',
      delay: 0.1
    },
    {
      icon: Layers,
      title: 'Smart Resources',
      description: 'Each gap links to flashcards, videos & images.',
      gradient: 'from-accent-blue to-accent-violet',
      delay: 0.2
    },
    {
      icon: BarChart4,
      title: 'Hyperpersonalized Analytics',
      description: '20 dashboards designed only for your prep journey.',
      gradient: 'from-accent-violet to-accent-cyan',
      delay: 0.3
    }
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Makes paragraph{' '}
            <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">
              Different
            </span>
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                boxShadow: '0 25px 50px rgba(0, 212, 255, 0.2)'
              }}
              transition={{ 
                duration: 0.6, 
                delay: feature.delay,
                hover: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 bg-dark-surface/40 backdrop-blur-lg border border-dark-border rounded-3xl overflow-hidden h-full">
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-dark-text-primary mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-dark-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 blur-xl`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyDifferentiators;