import { motion } from 'framer-motion';
import { CreditCard, Truck, Lock, ShieldCheck } from 'lucide-react';

const CheckoutPage = () => {
  return (
    <div className="pt-32 pb-24 container-fashion">
       <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl mb-12 text-center">CHECKOUT</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {/* Shipping Info */}
             <div className="space-y-10">
                <div>
                   <h3 className="flex items-center gap-3 text-2xl mb-8">
                      <div className="w-10 h-10 rounded-2xl bg-ash flex items-center justify-center"><Truck size={20} /></div>
                      Shipping Address
                   </h3>
                   <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                         <input type="text" placeholder="First Name" className="fashion-input" />
                         <input type="text" placeholder="Last Name" className="fashion-input" />
                      </div>
                      <input type="email" placeholder="Email Address" className="fashion-input" />
                      <input type="text" placeholder="Street Address" className="fashion-input" />
                      <div className="grid grid-cols-2 gap-4">
                         <input type="text" placeholder="City" className="fashion-input" />
                         <input type="text" placeholder="Postcode" className="fashion-input" />
                      </div>
                   </div>
                </div>

                <div>
                   <h3 className="flex items-center gap-3 text-2xl mb-8">
                      <div className="w-10 h-10 rounded-2xl bg-ash flex items-center justify-center"><CreditCard size={20} /></div>
                      Payment Method
                   </h3>
                   <div className="grid grid-cols-2 gap-4">
                      <button className="p-6 rounded-[2rem] border-2 border-ink bg-white flex flex-col items-center gap-2 group transition-all">
                         <CreditCard size={24} />
                         <span className="text-xs font-bold uppercase tracking-widest">Credit Card</span>
                      </button>
                      <button className="p-6 rounded-[2rem] border-2 border-ink/5 bg-ash/30 flex flex-col items-center gap-2 group hover:border-ink/20 transition-all">
                         <div className="text-2xl font-serif text-blue-600 italic">PayPal</div>
                      </button>
                   </div>
                </div>
             </div>

             {/* Payment Details */}
             <div className="bg-white border border-ink/5 p-12 rounded-[3.5rem] h-fit">
                <h3 className="text-2xl mb-8">Card Details</h3>
                <div className="space-y-6">
                   <div className="relative">
                      <input type="text" placeholder="Card Number" className="fashion-input pl-12" />
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-smoke opacity-40" size={18} />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="MM/YY" className="fashion-input" />
                      <input type="text" placeholder="CVC" className="fashion-input" />
                   </div>
                   
                   <div className="pt-6 space-y-4">
                      <div className="flex justify-between text-smoke font-medium">
                         <span>Items Total</span>
                         <span>$452.00</span>
                      </div>
                      <div className="flex justify-between text-2xl font-display pt-4 border-t border-ink/5">
                         <span>YOU PAY</span>
                         <span>$467.00</span>
                      </div>
                   </div>

                   <button className="btn-pill btn-primary w-full py-5 flex items-center justify-center gap-3 shadow-3d active:translate-y-1 active:shadow-none mt-8">
                      PLACE ORDER
                   </button>
                   
                   <p className="flex items-center justify-center gap-2 text-[10px] text-smoke font-bold uppercase tracking-widest pt-4">
                      <ShieldCheck size={14} />
                      Encrypted and 100% Secure
                   </p>
                </div>
             </div>
          </div>
       </div>

       <style>{`
          .fashion-input {
             width: 100%;
             background: var(--color-ash);
             border: none;
             border-radius: 1.5rem;
             padding: 1rem 1.5rem;
             font-size: 0.875rem;
             font-weight: 500;
             transition: all 0.3s ease;
          }
          .fashion-input:focus {
             background: white;
             box-shadow: 0 0 0 2px var(--color-ink);
             outline: none;
          }
       `}</style>
    </div>
  );
};

export default CheckoutPage;
