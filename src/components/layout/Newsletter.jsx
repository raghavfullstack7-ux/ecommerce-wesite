import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="container-fashion relative z-20 -mb-24">
      <div className="bg-ink rounded-[32px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        <h2 className="text-chalk font-display text-4xl md:text-5xl leading-[0.95] max-w-lg lg:text-left text-center">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        
        <div className="w-full max-w-sm flex flex-col gap-4">
          <div className="relative group">
            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-smoke group-focus-within:text-chalk transition-colors" size={20} />
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="w-full bg-white/10 border-none rounded-full py-4 pl-16 pr-6 text-chalk placeholder:text-smoke focus:ring-1 focus:ring-chalk/20 transition-all font-body"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-chalk text-ink font-bold py-4 rounded-full text-base hover:bg-ash transition-colors"
          >
            Subscribe to Newsletter
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
