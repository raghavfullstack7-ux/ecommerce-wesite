import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, ChevronDown, Star } from 'lucide-react';
import { products } from '../data/mockData';

const CategoryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="pt-32 pb-24 container-fashion relative">
        <div className="flex flex-col lg:flex-row gap-12 relative">
           {/* Sidebar Filters */}
           <aside className="hidden lg:block w-72 shrink-0 h-fit lg:sticky lg:top-32 z-10">
              <div className="bg-white border border-ink/5 rounded-[2rem] p-8">
                 <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-display uppercase tracking-tight">Filters</h3>
                    <SlidersHorizontal size={20} className="text-smoke" />
                 </div>
                 
                 <div className="space-y-8">
                    <div>
                       <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-smoke mb-4">Categories</p>
                       <div className="flex flex-col gap-3">
                          {['T-shirts', 'Shorts', 'Shirts', 'Hoodies', 'Jeans'].map(cat => (
                             <button key={cat} className="flex items-center justify-between text-sm text-smoke hover:text-ink font-medium transition-colors group">
                                {cat} <ChevronDown size={14} className="-rotate-90 opacity-40 group-hover:opacity-100 transition-opacity" />
                             </button>
                          ))}
                       </div>
                    </div>

                    <div className="h-px bg-ink/5" />

                    <div>
                       <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-smoke mb-4">Price Range</p>
                       <input type="range" className="w-full accent-ink mb-2" />
                       <div className="flex justify-between text-xs font-bold font-mono">$50 — $200</div>
                    </div>

                    <div className="h-px bg-ink/5" />

                    <button className="btn-pill btn-primary w-full py-4 text-xs font-bold tracking-widest hover:shadow-hover active:translate-y-0.5 transition-all">APPLY FILTERS</button>
                 </div>
              </div>
           </aside>

           {/* Product Grid */}
           <main className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                 <div>
                    <h1 className="text-6xl md:text-7xl mb-2 font-display uppercase tracking-tight">THE COLLECTION</h1>
                    <p className="text-smoke text-xs font-medium uppercase tracking-widest">Showing 1-{products.length} of {products.length} Products</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <span className="text-[10px] uppercase font-bold text-smoke tracking-widest">Sort by:</span>
                    <button className="font-bold text-xs flex items-center gap-2 uppercase tracking-widest">Most Popular <ChevronDown size={16} /></button>
                 </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16">
                 {products.map((product, item) => (
                   <motion.div 
                     key={product.id}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: (item % 3) * 0.1 }}
                     className="group cursor-pointer"
                   >
                     <div className="aspect-[3/4] bg-ash rounded-[2.5rem] overflow-hidden mb-6 relative shadow-sm group-hover:shadow-hover transition-all duration-500">
                       <img src={`/src/assets/${product.image}`} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors" />
                     </div>
                     <h3 className="font-bold text-lg leading-tight mb-2 tracking-tight group-hover:text-smoke transition-colors uppercase">{product.name}</h3>
                     <div className="flex items-center gap-2 mb-3">
                       <div className="flex text-gold">
                         {[1,2,3,4,5].map(s => <Star key={s} size={12} fill={s <= Math.floor(product.rating) ? "currentColor" : "none"} />)}
                       </div>
                       <span className="text-[10px] font-bold text-smoke font-mono">{product.rating}/5</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <span className="text-2xl font-display tracking-tighter">${product.price}</span>
                        {product.originalPrice && (
                           <>
                              <span className="text-xl font-display tracking-tight text-smoke/30 line-through">${product.originalPrice}</span>
                              <span className="bg-danger/10 text-danger text-[9px] font-bold px-2 py-0.5 rounded-full">{product.discount}</span>
                           </>
                        )}
                     </div>
                   </motion.div>
                 ))}
              </div>

              <div className="mt-24 pt-12 border-t border-ink/5 flex items-center justify-between">
                 <button className="btn-pill btn-secondary py-3 px-8 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-ash transition-colors">Previous</button>
                 <div className="flex items-center gap-2">
                    {[1, 2, 3, '...', 10].map((p, i) => (
                       <button key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${p === 1 ? 'bg-ash text-ink' : 'text-smoke hover:bg-ash/50 transition-colors'}`}>{p}</button>
                    ))}
                 </div>
                 <button className="btn-pill btn-secondary py-3 px-8 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-ash transition-colors">Next</button>
              </div>
           </main>
        </div>
    </div>
  );
};

export default CategoryPage;
