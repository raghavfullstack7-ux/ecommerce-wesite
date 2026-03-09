import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ArrowUpRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-chalk overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 pb-12 flex flex-col items-center justify-center">
        <div className="container-fashion relative z-10 w-full">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 px-4 py-1.5 bg-sale-neon rounded-full text-[10px] font-bold tracking-widest uppercase"
            >
              New Collection: Spring / Summer 2026
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-hero mb-8"
            >
              FIND CLOTHES <br />
              <span className="text-outline">THAT MATCH</span> <br />
              YOUR STYLE
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xl text-smoke font-medium text-lg md:text-xl mb-12 leading-relaxed"
            >
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link to="/category/all" className="btn-pill btn-primary text-center px-12 group">
                SHOP NOW
              </Link>
              <div className="flex items-center gap-8 pt-4 sm:pt-0 sm:pl-8 border-t sm:border-t-0 sm:border-l border-ink/5">
                <div>
                  <h3 className="text-3xl font-display leading-none">200+</h3>
                  <p className="text-xs text-smoke font-medium tracking-wide uppercase mt-1">International Brands</p>
                </div>
                <div>
                  <h3 className="text-3xl font-display leading-none">2,000+</h3>
                  <p className="text-xs text-smoke font-medium tracking-wide uppercase mt-1">High-Quality Products</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Stars Decoration */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute right-[10%] top-[30%] text-ink/10 hidden lg:block"
        >
          <Star size={100} fill="currentColor" />
        </motion.div>
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute left-[15%] bottom-[20%] text-ink/10 hidden lg:block"
        >
          <Star size={60} fill="currentColor" />
        </motion.div>
      </section>

      {/* Brand Bar */}
      <section className="bg-ink py-10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex gap-24 items-center px-12">
              <span className="text-chalk font-display text-4xl tracking-tighter opacity-80">VERSACE</span>
              <span className="text-chalk font-display text-4xl tracking-tighter opacity-80">ZARA</span>
              <span className="text-chalk font-display text-4xl tracking-tighter opacity-80">GUCCI</span>
              <span className="text-chalk font-display text-4xl tracking-tighter opacity-80">PRADA</span>
              <span className="text-chalk font-display text-4xl tracking-tighter opacity-80">CALVIN KLEIN</span>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-24 container-fashion">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-smoke text-[10px] font-bold tracking-[0.3em] uppercase mb-2">The Collection</p>
            <h2 className="text-5xl">NEW ARRIVALS</h2>
          </div>
          <Link to="/new-arrivals" className="hidden sm:flex items-center gap-2 text-sm font-bold border-b-2 border-ink pb-1 group">
            VIEW ALL <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group">
              <div className="aspect-[3/4] bg-ash rounded-[2rem] overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors" />
                <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-white p-4 rounded-full shadow-lg hover:scale-110 active:scale-90 transition-transform">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
              <h3 className="font-bold text-lg leading-tight mb-1">PREMIUM OVERSIZED TEE</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-gold">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <span className="text-xs font-medium text-smoke">4.5/5</span>
              </div>
              <p className="text-xl font-display tracking-tight">$120</p>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Dress Style */}
      <section className="py-24 container-fashion">
        <div className="bg-ash/50 rounded-[4rem] p-8 md:p-16">
          <h2 className="text-center text-5xl mb-16">BROWSE BY DRESS STYLE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 h-80 bg-white rounded-3xl p-8 group relative overflow-hidden">
               <h3 className="text-3xl relative z-10 text-ink">CASUAL</h3>
               <div className="absolute inset-0 hover:scale-110 transition-transform duration-700 bg-[url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800')] bg-cover opacity-20 mix-blend-multiply" />
            </div>
            <div className="md:col-span-2 h-80 bg-white rounded-3xl p-8 group relative overflow-hidden">
               <h3 className="text-3xl relative z-10 text-ink">FORMAL</h3>
               <div className="absolute inset-0 hover:scale-110 transition-transform duration-700 bg-[url('https://images.unsplash.com/photo-1507679722338-958427e9f4c3?q=80&w=800')] bg-cover opacity-20 mix-blend-multiply" />
            </div>
            <div className="md:col-span-2 h-80 bg-white rounded-3xl p-8 group relative overflow-hidden">
               <h3 className="text-3xl relative z-10 text-ink">PARTY</h3>
               <div className="absolute inset-0 hover:scale-110 transition-transform duration-700 bg-[url('https://images.unsplash.com/photo-1566730621103-51b48d207367?q=80&w=800')] bg-cover opacity-20 mix-blend-multiply" />
            </div>
            <div className="md:col-span-1 h-80 bg-white rounded-3xl p-8 group relative overflow-hidden">
               <h3 className="text-3xl relative z-10 text-ink">GYM</h3>
               <div className="absolute inset-0 hover:scale-110 transition-transform duration-700 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800')] bg-cover opacity-20 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .text-outline {
          -webkit-text-stroke: 1px var(--color-ink);
          color: transparent;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
