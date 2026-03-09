import { motion } from 'framer-motion';
import { Plus, Search, Filter, MoreVertical, Edit3, Trash2 } from 'lucide-react';

const AdminProducts = () => {
  return (
    <div className="p-8">
       <div className="flex items-end justify-between mb-12">
          <div>
             <p className="text-smoke text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Inventory Management</p>
             <h1 className="text-5xl">PRODUCTS</h1>
          </div>
          <button className="btn-pill btn-primary py-4 px-10 flex items-center gap-3 shadow-3d active:translate-y-1 active:shadow-none">
             <Plus size={20} />
             ADD PRODUCT
          </button>
       </div>

       <div className="bg-white rounded-[3rem] border border-ink/5 overflow-hidden shadow-sm">
          <div className="p-8 border-b border-ink/5 flex flex-col sm:flex-row gap-6 justify-between bg-ash/10">
             <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-smoke opacity-40" size={18} />
                <input type="text" placeholder="Search product name, SKU..." className="w-full bg-white border border-ink/5 rounded-full py-3 pl-12 text-sm focus:ring-1 focus:ring-ink/20 transition-all outline-none" />
             </div>
             <button className="btn-pill btn-secondary py-3 px-8 text-xs font-bold flex items-center gap-2">
                <Filter size={16} /> FILTERS
             </button>
          </div>

          <div className="overflow-x-auto">
             <table className="w-full text-left">
                <thead>
                   <tr className="border-b border-ink/5 bg-ash/5">
                      <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-smoke">Product</th>
                      <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-smoke">Category</th>
                      <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-smoke">Price</th>
                      <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-smoke">Stock</th>
                      <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-smoke text-right">Actions</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-ink/5">
                   {[1, 2, 3, 4, 5].map((i) => (
                      <tr key={i} className="hover:bg-ash/10 transition-colors group">
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-12 bg-ash rounded-xl shrink-0" />
                               <div>
                                  <p className="font-bold text-sm">Premium T-Shirt Vol. {i}</p>
                                  <p className="text-[10px] text-smoke uppercase font-bold tracking-tight">SKU: SHO-P{i}22</p>
                               </div>
                            </div>
                         </td>
                         <td className="px-8 py-6"><span className="text-sm font-medium">Clothing / Casual</span></td>
                         <td className="px-8 py-6"><span className="text-sm font-bold">$120.00</span></td>
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-2">
                               <div className="w-2 h-2 rounded-full bg-emerald-500" />
                               <span className="text-sm font-medium">124 In Stock</span>
                            </div>
                         </td>
                         <td className="px-8 py-6 text-right">
                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                               <button className="p-2 hover:bg-ink hover:text-white rounded-lg transition-all"><Edit3 size={16} /></button>
                               <button className="p-2 hover:bg-danger hover:text-white rounded-lg transition-all"><Trash2 size={16} /></button>
                            </div>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
          
          <div className="p-8 border-t border-ink/5 flex items-center justify-between text-sm font-medium text-smoke">
             <span>Showing 5 of 124 Products</span>
             <div className="flex items-center gap-4">
                <button className="hover:text-ink transition-colors">Previous</button>
                <div className="flex items-center gap-2">
                   <button className="w-8 h-8 rounded-lg bg-ink text-white">1</button>
                   <button className="w-8 h-8 rounded-lg hover:bg-ash">2</button>
                   <button className="w-8 h-8 rounded-lg hover:bg-ash">3</button>
                </div>
                <button className="hover:text-ink transition-colors">Next</button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default AdminProducts;
