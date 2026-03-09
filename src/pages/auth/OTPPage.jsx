import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OTPPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-parchment px-4 py-20">
       <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg"
       >
          <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-modal border border-ink/5 text-center">
             <div className="w-20 h-20 bg-sale-neon rounded-full flex items-center justify-center mx-auto mb-10 shadow-3d">
                <ShieldCheck size={40} className="text-ink" />
             </div>
             
             <h1 className="text-5xl mb-4 tracking-tighter">VERIFY IT'S YOU</h1>
             <p className="text-smoke font-medium mb-12">We've sent a code to your email. Enter it below to unlock your account.</p>
             
             <div className="flex justify-center gap-3 mb-10">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                   <input 
                      key={i} 
                      type="text" 
                      maxLength="1" 
                      className="w-12 h-16 bg-ash border-none rounded-2xl text-center text-3xl font-display focus:ring-2 focus:ring-ink focus:bg-white transition-all outline-none" 
                   />
                ))}
             </div>
             
             <button className="btn-pill btn-primary w-full py-5 flex items-center justify-center gap-3 shadow-3d active:translate-y-1 active:shadow-none group">
                CONFIRM CODE <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </button>
             
             <p className="mt-10 text-sm font-medium">
                Didn't receive the code? <button className="text-ink font-bold border-b-2 border-ink ml-1 hover:opacity-70 transition-opacity">Resend OTP</button>
             </p>
          </div>
       </motion.div>
    </div>
  );
};

export default OTPPage;
