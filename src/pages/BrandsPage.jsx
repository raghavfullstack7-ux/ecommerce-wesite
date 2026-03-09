import { motion } from 'framer-motion';

const BrandsPage = () => {
  const brands = [
    { name: 'VERSACE', logo: 'https://images.unsplash.com/photo-1550241895-12f5a6da3731?q=80&w=400' },
    { name: 'GUCCI', logo: 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=400' },
    { name: 'PRADA', logo: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400' },
    { name: 'ZARA', logo: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=400' },
    { name: 'CALVIN KLEIN', logo: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400' },
    { name: 'BALENCIAGA', logo: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=400' },
  ];

  return (
    <div className="pt-32 pb-24 container-fashion">
       <h1 className="text-7xl mb-16 text-center">OUR BRANDS</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, idx) => (
             <motion.div 
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-96 rounded-[3rem] overflow-hidden bg-ash"
             >
                <div 
                   className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                   style={{ backgroundImage: `url(${brand.logo})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute bottom-10 left-10">
                   <h2 className="text-4xl text-white tracking-widest">{brand.name}</h2>
                   <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-2">Explore Collection →</p>
                </div>
             </motion.div>
          ))}
       </div>
    </div>
  );
};

export default BrandsPage;
