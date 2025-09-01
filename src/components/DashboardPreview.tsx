import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Clock, Target, TrendingUp } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  const cards = [
    {
      title: 'ERI Score',
      value: '847',
      subtitle: 'Expected Rank Index',
      icon: BarChart3,
      color: 'from-accent-cyan to-accent-blue',
      delay: 0.1
    },
    {
      title: 'Gap Chains',
      value: '23',
      subtitle: 'Active weak areas',
      icon: Target,
      color: 'from-accent-blue to-accent-violet',
      delay: 0.2
    },
    {
      title: 'Time-to-Mastery',
      value: '47d',
      subtitle: 'Current trajectory',
      icon: Clock,
      color: 'from-accent-violet to-accent-cyan',
      delay: 0.3
    },
    {
      title: 'Progress Velocity',
      value: '+12%',
      subtitle: 'This week',
      icon: TrendingUp,
      color: 'from-accent-cyan to-accent-violet',
      delay: 0.4
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">
            Your Flight Deck Dashboard
          </h2>
          <p className="text-dark-text-secondary text-lg max-w-2xl mx-auto">
            Every mistake becomes a map. Every map leads you to mastery.
          </p>
        </motion.div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 25px 50px rgba(0, 212, 255, 0.15)'
              }}
              transition={{ 
                duration: 0.6, 
                delay: card.delay,
                hover: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative p-6 bg-dark-surface/50 backdrop-blur-sm border border-dark-border rounded-2xl overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <card.icon className="w-8 h-8 text-accent-cyan group-hover:text-accent-blue transition-colors duration-300" />
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-2 h-2 bg-accent-cyan rounded-full opacity-60"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-dark-text-primary">
                      {card.value}
                    </h3>
                    <p className="text-sm text-dark-text-secondary font-medium">
                      {card.title}
                    </p>
                    <p className="text-xs text-dark-text-muted">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;