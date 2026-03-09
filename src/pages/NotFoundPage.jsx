import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <h1 className="text-[12rem] font-display leading-none text-ink/5 select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          404
        </h1>
        
        <div className="bg-ash/50 backdrop-blur-sm p-12 rounded-[3rem] border border-ink/5 shadow-2xl relative z-10">
          <div className="w-20 h-20 bg-ink text-chalk rounded-full flex items-center justify-center mx-auto mb-8 shadow-3d">
            <ShoppingBag size={40} />
          </div>
          
          <h2 className="text-4xl font-display mb-4 tracking-tight">LOST IN STYLE?</h2>
          <p className="text-smoke font-medium mb-8 leading-relaxed">
            The page you're looking for seems to have gone out of stock. Let's get you back to the latest trends.
          </p>
          
          <Link 
            to="/" 
            className="btn-pill btn-primary inline-flex items-center gap-2 group w-full justify-center"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO TRENDS
          </Link>
        </div>
        
        <p className="mt-12 text-[10px] uppercase tracking-[0.3em] font-bold text-smoke/40">
          SHOP.CO — ARCHIVE — 2026
        </p>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
