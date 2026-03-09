import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, ChevronDown, Star } from 'lucide-react';
import { products } from '../data/mockData';

const CategoryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="pt-32 pb-24 container-fashion">
       <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-72 shrink-0">
             <div className="bg-white border border-ink/5 rounded-[2rem] p-8 sticky top-32">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-2xl">Filters</h3>
                   <SlidersHorizontal size={20} className="text-smoke" />
                </div>
                
                <div className="space-y-8">
                   <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-smoke mb-4">Categories</p>
                      <div className="flex flex-col gap-3">
                         {['T-shirts', 'Shorts', 'Shirts', 'Hoodies', 'Jeans'].map(cat => (
                            <button key={cat} className="flex items-center justify-between text-smoke hover:text-ink font-medium transition-colors">
                               {cat} <ChevronDown size={14} className="-rotate-90 opacity-40" />
                            </button>
                         ))}
                      </div>
                   </div>

                   <div className="h-px bg-ink/5" />

                   <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-smoke mb-4">Price Range</p>
                      <input type="range" className="w-full accent-ink mb-2" />
                      <div className="flex justify-between text-sm font-bold">$50 — $200</div>
                   </div>

                   <div className="h-px bg-ink/5" />

                   <button className="btn-pill btn-primary w-full py-4 text-sm font-bold">APPLY FILTERS</button>
                </div>
             </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
             <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                <div>
                   <h1 className="text-5xl mb-2">CASUAL</h1>
                   <p className="text-smoke text-sm font-medium">Showing 1-10 of 100 Products</p>
                </div>
                <div className="flex items-center gap-4">
                   <span className="text-sm font-medium text-smoke">Sort by:</span>
                   <button className="font-bold text-sm flex items-center gap-2">Most Popular <ChevronDown size={16} /></button>
                </div>
             </div>

             <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: item * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[3/4] bg-ash rounded-[2rem] overflow-hidden mb-4 relative">
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg leading-tight mb-1">GRAPHIC PRINT T-SHIRT</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-gold">
                        {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                      </div>
                      <span className="text-xs font-medium text-smoke">4.5/5</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <span className="text-xl font-display tracking-tight">$145</span>
                       <span className="text-xl font-display tracking-tight text-smoke/40 line-through">$242</span>
                       <span className="bg-danger/10 text-danger text-[10px] font-bold px-2 py-1 rounded-full">-30%</span>
                    </div>
                  </motion.div>
                ))}
             </div>

             <div className="mt-24 pt-12 border-t border-ink/5 flex items-center justify-between">
                <button className="btn-pill btn-secondary py-3 px-6 text-sm flex items-center gap-2">Previous</button>
                <div className="flex items-center gap-2">
                   {[1, 2, 3, '...', 10].map((p, i) => (
                      <button key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${p === 1 ? 'bg-ash text-ink' : 'text-smoke hover:bg-ash/50'}`}>{p}</button>
                   ))}
                </div>
                <button className="btn-pill btn-secondary py-3 px-6 text-sm flex items-center gap-2">Next</button>
             </div>
          </main>
       </div>
    </div>
  );
};

export default CategoryPage;
