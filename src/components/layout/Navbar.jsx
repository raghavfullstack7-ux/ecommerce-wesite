import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';
import axiosInstance from '../../utils/axiosInstance';
import { Search, ShoppingCart, User as UserIcon, Menu, X, ChevronDown, LogOut, Activity } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [apiStatus, setApiStatus] = useState('checking');
  const [annonceHeight, setAnnonceHeight] = useState(0);
  const cartCount = useCartStore((state) => state.getCartCount());
  const { isAuthenticated, user, logout } = useAuthStore();

  useEffect(() => {
    const bar = document.getElementById('announcement-bar');
    if (bar) {
      const resizeObserver = new ResizeObserver(entries => {
        setAnnonceHeight(entries[0].target.offsetHeight);
      });
      resizeObserver.observe(bar);
      return () => resizeObserver.disconnect();
    } else {
      setAnnonceHeight(0);
    }
  }, []);

  useEffect(() => {
    const checkApi = async () => {
      try {
        await axiosInstance.get('/health');
        setApiStatus('online');
      } catch {
        setApiStatus('offline');
      }
    };
    checkApi();
    const interval = setInterval(checkApi, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const userInitials = user ? `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}` : '';

  return (
    <header
      style={{ top: isScrolled ? 0 : `${annonceHeight}px` }}
      className={`fixed left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-ink/5 py-4' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-fashion flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 -ml-2 hover:bg-ash rounded-full transition-colors active:scale-90"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo & API Status */}
        <div className="flex items-center gap-4">
          <Link to="/" className="font-display text-2xl md:text-3xl tracking-tighter">
            SHOP.CO
          </Link>
          <div 
            title={`Backend Status: ${apiStatus.toUpperCase()}`}
            className={`w-2 h-2 rounded-full hidden sm:block ${
              apiStatus === 'online' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 
              apiStatus === 'offline' ? 'bg-danger animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 
              'bg-gold animate-bounce'
            }`}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-medium">
          <div className="group relative">
            <Link to="/category/all" className="flex items-center gap-1 hover:text-smoke transition-colors uppercase text-sm font-medium">
              Shop <ChevronDown size={14} />
            </Link>
          </div>
          <Link to="/on-sale" className="hover:text-smoke transition-colors uppercase text-sm">On Sale</Link>
          <Link to="/new-arrivals" className="hover:text-smoke transition-colors uppercase text-sm">New Arrivals</Link>
          <Link to="/brands" className="hover:text-smoke transition-colors uppercase text-sm">Brands</Link>
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8 bg-ash rounded-full px-4 py-2 text-smoke focus-within:ring-1 focus-within:ring-ink/20 transition-all">
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Search for products..." 
            className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 text-ink"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2">
            <Search size={22} />
          </button>
          <Link to="/cart" className="p-2 relative group">
            <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 bg-ink text-chalk text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold"
              >
                {cartCount}
              </motion.span>
            )}
          </Link>
          
          {isAuthenticated ? (
            <Link to="/account/profile" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-full bg-ink text-chalk flex items-center justify-center font-display text-sm border-2 border-transparent group-hover:border-ink/10 transition-all">
                {userInitials || <UserIcon size={18} />}
              </div>
            </Link>
          ) : (
            <Link to="/login" className="p-2 group">
              <UserIcon size={22} className="group-hover:scale-110 transition-transform" />
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white/95 backdrop-blur-2xl shadow-2xl z-[60] flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-ink/5">
                <span className="font-display text-2xl tracking-tighter">SHOP.CO</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-full bg-ash flex items-center justify-center hover:bg-ink hover:text-white transition-colors shadow-sm"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-8 px-6">
                <nav className="flex flex-col gap-8">
                  <div className="space-y-4">
                    <p className="text-[10px] uppercase tracking-widest text-smoke font-bold">Collections</p>
                    <div className="grid grid-cols-1 gap-4">
                      {['MEN', 'WOMEN', 'ACCESSORIES'].map((item, idx) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + idx * 0.1 }}
                        >
                          <Link 
                            to={`/category/${item.toLowerCase()}`} 
                            className="text-3xl font-display hover:translate-x-2 transition-transform block" 
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-ink/5 w-full" />

                  <div className="space-y-4">
                    <p className="text-[10px] uppercase tracking-widest text-smoke font-bold">Shop</p>
                    <div className="flex flex-col gap-4">
                      <Link to="/new-arrivals" className="text-lg font-medium flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                        New Arrivals <ChevronDown size={14} className="-rotate-90 opacity-40" />
                      </Link>
                      <Link to="/on-sale" className="text-lg font-medium flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                        On Sale <ChevronDown size={14} className="-rotate-90 opacity-40" />
                      </Link>
                      <Link to="/brands" className="text-lg font-medium flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                        Brands <ChevronDown size={14} className="-rotate-90 opacity-40" />
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>

              <div className="p-6 pb-12 bg-ash/30 border-t border-ink/5 mt-auto">
                {isAuthenticated ? (
                  <Link to="/account/profile" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 p-4 bg-white rounded-3xl shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center font-display shrink-0">
                      {userInitials || <UserIcon size={20} />}
                    </div>
                    <div className="overflow-hidden">
                      <p className="font-bold text-sm truncate">{user?.firstName} {user?.lastName}</p>
                      <p className="text-xs text-smoke">View Profile</p>
                    </div>
                  </Link>
                ) : (
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full py-5 text-center block rounded-3xl font-bold tracking-[0.1em]">
                    SIGN IN
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
