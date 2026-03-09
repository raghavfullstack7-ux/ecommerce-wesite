import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Minus, Plus, ShoppingCart, Heart, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';

const ProductDetailPage = () => {
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  return (
    <div className="pt-32 pb-24 container-fashion">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images Gallery */}
          <div className="grid grid-cols-4 gap-4 aspect-square">
             <div className="col-span-1 flex flex-col gap-4">
                {[1,2,3].map(i => (
                   <div key={i} className="aspect-square bg-ash rounded-3xl overflow-hidden cursor-pointer hover:ring-2 ring-ink transition-all">
                      <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400')] bg-cover opacity-80" />
                   </div>
                ))}
             </div>
             <div className="col-span-3 bg-ash rounded-[3rem] overflow-hidden relative group">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200')] bg-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" />
                <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-90 transition-transform">
                   <Heart size={20} />
                </button>
             </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
             <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
             >
                <p className="text-smoke text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Summer 26 — Essentials</p>
                <h1 className="text-6xl mb-4">ONE LIFE GRAPHIC T-SHIRT</h1>
                <div className="flex items-center gap-4 mb-8">
                   <div className="flex text-gold">
                      {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="currentColor" />)}
                   </div>
                   <span className="text-sm font-medium">4.5/5 <span className="text-smoke ml-2">(120 Reviews)</span></span>
                </div>
                
                <div className="flex items-center gap-4 mb-8">
                   <span className="text-4xl font-display">$260</span>
                   <span className="text-2xl font-display text-smoke/40 line-through">$300</span>
                   <span className="bg-danger/10 text-danger text-xs font-bold px-3 py-1.5 rounded-full">-40%</span>
                </div>

                <p className="text-smoke font-medium leading-relaxed mb-10 pb-10 border-b border-ink/5">
                   This graphic t-shirt is perfect for any occasion. Crafted from premium breathable cotton, it offers both comfort and style. Whether you're heading out for a casual day or a night on the town, this shirt will keep you looking sharp.
                </p>

                {/* Color Selection */}
                <div className="mb-8">
                   <p className="font-bold text-sm mb-4">Select Colors</p>
                   <div className="flex gap-3">
                      {['#4F4631', '#314F4A', '#31344F'].map(c => (
                         <button key={c} style={{ backgroundColor: c }} className="w-10 h-10 rounded-full border-4 border-transparent hover:border-ink/10 transition-all shadow-inner" />
                      ))}
                   </div>
                </div>

                {/* Size Selection */}
                <div className="mb-10 pb-10 border-b border-ink/5">
                   <p className="font-bold text-sm mb-4">Choose Size</p>
                   <div className="flex flex-wrap gap-3">
                      {['Small', 'Medium', 'Large', 'X-Large'].map(size => (
                         <button 
                            key={size} 
                            onClick={() => setSelectedSize(size)}
                            className={`btn-pill py-3 px-8 text-sm font-bold ${selectedSize === size ? 'bg-ink text-white shadow-lg' : 'bg-ash text-smoke hover:text-ink'}`}
                         >
                            {size}
                         </button>
                      ))}
                   </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                   <div className="bg-ash rounded-full flex items-center p-1 px-4 gap-6">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:scale-120 transition-transform"><Minus size={16} /></button>
                      <span className="font-bold w-4 text-center">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:scale-120 transition-transform"><Plus size={16} /></button>
                   </div>
                   <button className="btn-pill btn-primary flex-1 flex items-center justify-center gap-3 py-5 shadow-3d active:translate-x-1 active:translate-y-1 active:shadow-none">
                      <ShoppingCart size={20} />
                      ADD TO CART
                   </button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 mt-12">
                   <div className="text-center p-4 bg-ash/30 rounded-3xl">
                      <Truck size={24} className="mx-auto mb-2 opacity-60" />
                      <p className="text-[10px] font-bold uppercase tracking-wider">Free Delivery</p>
                   </div>
                   <div className="text-center p-4 bg-ash/30 rounded-3xl">
                      <ShieldCheck size={24} className="mx-auto mb-2 opacity-60" />
                      <p className="text-[10px] font-bold uppercase tracking-wider">2 Year Warranty</p>
                   </div>
                   <div className="text-center p-4 bg-ash/30 rounded-3xl">
                      <RefreshCcw size={24} className="mx-auto mb-2 opacity-60" />
                      <p className="text-[10px] font-bold uppercase tracking-wider">Easy Returns</p>
                   </div>
                </div>
             </motion.div>
          </div>
       </div>

       {/* Tabs */}
       <div className="mt-24">
          <div className="flex border-b border-ink/5 mb-12">
             {['Product Details', 'Rating & Reviews', 'FAQs'].map(tab => (
                <button 
                  key={tab} 
                  className={`flex-1 py-6 text-xl font-display tracking-tight transition-all relative ${activeTab === tab.toLowerCase() ? 'text-ink' : 'text-smoke hover:text-ink/60'}`}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                >
                   {tab}
                   {activeTab === tab.toLowerCase() && <motion.div layoutId="tab" className="absolute bottom-0 left-0 w-full h-1 bg-ink" />}
                </button>
             ))}
          </div>
          
          <div className="min-h-[400px]">
             {/* Content based on activeTab */}
             <div className="prose max-w-none text-smoke font-medium leading-loose">
                <p>This is where the detailed specifications, reviews, or FAQs would go for this premium garment.</p>
             </div>
          </div>
       </div>
    </div>
  );
};

export default ProductDetailPage;
