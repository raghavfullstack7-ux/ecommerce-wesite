import { motion } from 'framer-motion';
import { User, Settings, ShoppingBag, Heart, LogOut } from 'lucide-react';

const ProfilePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-12"
    >
       <div className="flex items-center gap-8 mb-16">
          <div className="w-32 h-32 bg-ink text-white rounded-full flex items-center justify-center font-display text-4xl shadow-3d shrink-0">
             JD
          </div>
          <div>
             <h1 className="text-5xl mb-2">JOHN DOE</h1>
             <p className="text-smoke font-medium">Member since March 2026</p>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-ink/5 hover:border-ink/20 transition-all cursor-pointer group">
             <ShoppingBag size={32} className="mb-6 opacity-40 group-hover:opacity-100" />
             <h3 className="text-2xl mb-2">My Orders</h3>
             <p className="text-smoke text-sm font-medium">Track, return or buy things again.</p>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] border border-ink/5 hover:border-ink/20 transition-all cursor-pointer group">
             <Heart size={32} className="mb-6 opacity-40 group-hover:opacity-100" />
             <h3 className="text-2xl mb-2">Wishlist</h3>
             <p className="text-smoke text-sm font-medium">Keep track of items you love.</p>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] border border-ink/5 hover:border-ink/20 transition-all cursor-pointer group">
             <Settings size={32} className="mb-6 opacity-40 group-hover:opacity-100" />
             <h3 className="text-2xl mb-2">Account Settings</h3>
             <p className="text-smoke text-sm font-medium">Edit your profile and payment methods.</p>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] border border-ink/5 hover:text-danger hover:bg-danger/5 transition-all cursor-pointer group">
             <LogOut size={32} className="mb-6 opacity-40 group-hover:opacity-100" />
             <h3 className="text-2xl mb-2">Sign Out</h3>
             <p className="text-smoke text-sm font-medium group-hover:text-danger/60">Securely sign out of your account.</p>
          </div>
       </div>
    </motion.div>
  );
};

export default ProfilePage;
