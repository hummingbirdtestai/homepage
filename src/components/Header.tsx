import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const LogoImg: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  // Try multiple candidates in order
  const candidates = ['logo.png', 'paragraph-logo-transparent.png', 'image.png'];
  const [idx, setIdx] = useState(0);

  const handleError = useCallback(() => {
    setIdx((prev) => (prev + 1 < candidates.length ? prev + 1 : prev));
  }, []);

  return (
    <img
      // ✅ use RELATIVE path so it works even if app is hosted under a subpath
      src={candidates[idx]}
      alt="paragraph logo"
      loading="eager"
      decoding="async"
      onError={handleError}
      className="w-full h-full object-contain"
      {...props}
    />
  );
};

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute top-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center cursor-pointer group"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="w-32 h-32 flex items-center justify-center"
          >
            {/* ✅ Robust logo with fallbacks */}
            <LogoImg />
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;