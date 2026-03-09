import React from 'react';
import { motion } from 'framer-motion';

const StyleCategoryCard = ({ title, image, size = 'small' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`relative group cursor-pointer overflow-hidden rounded-3xl ${
        size === 'large' ? 'col-span-1 md:col-span-2 lg:col-span-3 h-[289px]' : 'col-span-1 h-[289px]'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
      <div className="absolute inset-0 bg-ash p-8 flex items-start z-20">
        <h3 className="font-display text-2xl md:text-4xl text-ink uppercase tracking-tight">{title}</h3>
      </div>
      
      {/* Actual background image would be here */}
      <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

const StyleSections = () => {
  const styles = [
    { title: 'Casual', size: 'small', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=400' },
    { title: 'Formal', size: 'large', image: 'https://images.unsplash.com/photo-1594932224030-94555811da6d?auto=format&fit=crop&q=80&w=800' },
    { title: 'Party', size: 'large', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800' },
    { title: 'Gym', size: 'small', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section className="py-24 bg-chalk">
      <div className="container-fashion bg-parchment rounded-[40px] px-8 py-16 md:px-16 md:py-20">
        <h2 className="text-center font-display text-4xl md:text-5xl lg:text-6xl mb-12 lg:mb-16">
          BROWSE BY DRESS STYLE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {styles.map((style, i) => (
            <StyleCategoryCard 
              key={i}
              title={style.title}
              image={style.image}
              size={style.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleSections;
