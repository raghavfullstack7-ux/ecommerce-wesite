import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children, title, subtitle }) => (
  <div className="min-h-screen flex items-center justify-center bg-parchment px-4 py-20">
     <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg"
     >
        <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-modal border border-ink/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-ink/5 -mr-16 -mt-16 rounded-full blur-3xl" />
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-ink/5 -ml-16 -mb-16 rounded-full blur-3xl" />
           
           <div className="mb-12 text-center">
              <h1 className="text-5xl mb-4">{title}</h1>
              <p className="text-smoke font-medium">{subtitle}</p>
           </div>
           
           {children}

            <div className="mt-12">
               <div className="relative flex items-center gap-4 mb-8">
                  <div className="h-px bg-ink/5 flex-1" />
                  <span className="text-[10px] font-bold text-smoke uppercase tracking-widest">Or continue with</span>
                  <div className="h-px bg-ink/5 flex-1" />
               </div>
               <button className="flex items-center justify-center gap-3 w-full p-4 bg-ash hover:bg-ink hover:text-white rounded-3xl transition-all group">
                  <Chrome size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Continue with Google</span>
               </button>
            </div>
        </div>
     </motion.div>
  </div>
);

export const LoginPage = () => {
  return (
    <AuthLayout title="WELCOME BACK" subtitle="Sign in to your account to continue shopping">
       <div className="space-y-6">
          <div className="relative">
             <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-smoke opacity-40" size={18} />
             <input type="email" placeholder="Email Address" className="auth-input pl-16" />
          </div>
          <div className="relative">
             <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-smoke opacity-40" size={18} />
             <input type="password" placeholder="Password" className="auth-input pl-16" />
          </div>
          <p className="text-right"><Link className="text-[10px] font-bold text-smoke hover:text-ink uppercase tracking-widest">Forgot Password?</Link></p>
           <button className="btn-pill btn-primary w-full py-5 flex items-center justify-center gap-3 hover:shadow-hover active:translate-y-0.5 transition-all group mt-8">
              SIGN IN <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
           </button>
          <p className="text-center text-sm font-medium mt-8">
             Don't have an account? <Link to="/signup" className="text-ink font-bold border-b-2 border-ink">Create Account</Link>
          </p>
       </div>
       <style>{`
          .auth-input {
             width: 100%;
             background: var(--color-ash);
             border: none;
             border-radius: 2rem;
             padding: 1.25rem 1.5rem;
             font-size: 0.875rem;
             font-weight: 500;
             transition: all 0.3s ease;
          }
          .auth-input:focus {
             background: white;
             box-shadow: 0 0 0 2px var(--color-ink);
             outline: none;
          }
       `}</style>
    </AuthLayout>
  );
};

export const SignupPage = () => {
  return (
    <AuthLayout title="JOIN THE CLUB" subtitle="Become a member and enjoy exclusive benefits">
       <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
             <div className="relative">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-smoke opacity-40" size={18} />
                <input type="text" placeholder="First Name" className="auth-input pl-16" />
             </div>
             <input type="text" placeholder="Last Name" className="auth-input" />
          </div>
          <div className="relative">
             <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-smoke opacity-40" size={18} />
             <input type="email" placeholder="Email Address" className="auth-input pl-16" />
          </div>
          <div className="relative">
             <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-smoke opacity-40" size={18} />
             <input type="password" placeholder="Password" className="auth-input pl-16" />
          </div>
           <button className="btn-pill btn-primary w-full py-5 flex items-center justify-center gap-3 hover:shadow-hover active:translate-y-0.5 transition-all group mt-8">
              CREATE ACCOUNT <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
           </button>
          <p className="text-center text-sm font-medium mt-8">
             Already a member? <Link to="/login" className="text-ink font-bold border-b-2 border-ink">Sign In</Link>
          </p>
       </div>
       <style>{`
          .auth-input {
             width: 100%;
             background: var(--color-ash);
             border: none;
             border-radius: 2rem;
             padding: 1.25rem 1.5rem;
             font-size: 0.875rem;
             font-weight: 500;
             transition: all 0.3s ease;
          }
          .auth-input:focus {
             background: white;
             box-shadow: 0 0 0 2px var(--color-ink);
             outline: none;
          }
       `}</style>
    </AuthLayout>
  );
};
