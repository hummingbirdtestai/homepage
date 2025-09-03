import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute top-0 left-0 right-0 z-50 p-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center cursor-pointer group"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 flex items-center justify-center" // Increased size from w-12 h-12 to w-20 h-20
          >
            <img
              src="/paragraph-logo-transparent.png" // ✅ fixed filename (no spaces)
              alt="paragraph logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
