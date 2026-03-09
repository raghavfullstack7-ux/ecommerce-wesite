import React from 'react';
import { motion } from 'framer-motion';

const BrandMarquee = () => {
  const brands = [
    'VERSACE',
    'ZARA',
    'GUCCI',
    'PRADA',
    'Calvin Klein'
  ];

  return (
    <div className="bg-ink py-10 overflow-hidden relative border-y-2 border-chalk/10">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear"
        }}
        className="flex gap-16 md:gap-32 items-center whitespace-nowrap whitespace-nowrap"
      >
        {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
          <span
            key={i}
            className="text-chalk font-display text-4xl md:text-5xl lg:text-6xl tracking-widest opacity-80 hover:opacity-100 transition-opacity cursor-default"
          >
            {brand}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandMarquee;
