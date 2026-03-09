import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const GoogleCallbackPage = () => {
  useEffect(() => {
    // Simulate callback handling
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
       <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
       >
          <div className="relative mb-8">
             <Loader2 size={64} className="text-ink animate-spin opacity-10" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-ink rounded-full animate-pulse" />
             </div>
          </div>
          <h1 className="text-3xl font-display mb-2">AUTHENTICATING...</h1>
          <p className="text-smoke font-medium">Please wait while we sync with Google.</p>
       </motion.div>
    </div>
  );
};

export default GoogleCallbackPage;
