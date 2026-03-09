import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hidden = localStorage.getItem('announcement-hidden');
    if (hidden) setIsVisible(false);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('announcement-hidden', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          id="announcement-bar"
          className="bg-ink text-chalk py-2.5 px-4 relative overflow-hidden z-[60]"
        >
          <div className="container-fashion flex justify-center items-center text-xs md:text-sm font-medium tracking-wide">
            <p>
              Sign up and get 20% off to your first order.{' '}
              <a href="/signup" className="underline font-bold hover:text-smoke transition-colors">
                Sign Up Now
              </a>
            </p>
            <button
              onClick={handleClose}
              className="absolute right-4 md:right-8 p-1 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close announcement"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
