import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div className="pt-32 pb-24 container-fashion">
       <h1 className="text-5xl mb-12">YOUR CART</h1>
       
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
             {[1, 2].map((item) => (
                <motion.div 
                   key={item}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="bg-white border border-ink/5 p-6 rounded-[2.5rem] flex gap-6 group hover:shadow-xl transition-all"
                >
                   <div className="w-32 h-32 bg-ash rounded-[1.5rem] overflow-hidden shrink-0">
                      <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400')] bg-cover opacity-80" />
                   </div>
                   
                   <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                         <div>
                            <h3 className="text-2xl mb-1">Gradient Graphic T-shirt</h3>
                            <p className="text-sm font-medium text-smoke mb-1">Size: <span className="text-ink">Large</span></p>
                            <p className="text-sm font-medium text-smoke">Color: <span className="text-ink">White</span></p>
                         </div>
                         <button className="text-danger p-2 hover:bg-danger/5 rounded-full transition-colors"><Trash2 size={20} /></button>
                      </div>
                      
                      <div className="flex justify-between items-end">
                         <span className="text-2xl font-display">$145</span>
                         <div className="bg-ash rounded-full flex items-center p-1 px-4 gap-4">
                            <button className="p-1 hover:scale-110"><Minus size={14} /></button>
                            <span className="font-bold text-sm">1</span>
                            <button className="p-1 hover:scale-110"><Plus size={14} /></button>
                         </div>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
             <div className="bg-white border border-ink/5 p-10 rounded-[3rem] sticky top-32">
                <h3 className="text-3xl mb-10">Order Summary</h3>
                
                <div className="space-y-6 mb-10">
                   <div className="flex justify-between font-medium">
                      <span className="text-smoke">Subtotal</span>
                      <span>$565</span>
                   </div>
                   <div className="flex justify-between font-medium">
                      <span className="text-smoke">Discount (-20%)</span>
                      <span className="text-danger">-$113</span>
                   </div>
                   <div className="flex justify-between font-medium">
                      <span className="text-smoke">Delivery Fee</span>
                      <span>$15</span>
                   </div>
                   <div className="h-px bg-ink/5 pt-2" />
                   <div className="flex justify-between">
                      <span className="text-2xl font-display">Total</span>
                      <span className="text-2xl font-display">$467</span>
                   </div>
                </div>

                <div className="flex gap-4 mb-8">
                   <div className="flex-1 relative">
                      <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-smoke" size={18} />
                      <input type="text" placeholder="Add promo code" className="w-full bg-ash border-none rounded-full py-4 pl-12 text-sm focus:ring-1 focus:ring-ink/20" />
                   </div>
                   <button className="btn-pill btn-primary px-8">Apply</button>
                </div>

                <Link to="/checkout" className="btn-pill btn-primary w-full py-5 flex items-center justify-center gap-3 shadow-3d active:translate-y-1 active:shadow-none group">
                   GO TO CHECKOUT <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
             </div>
          </div>
       </div>
    </div>
  );
};

export default CartPage;
