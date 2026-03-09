import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { User, ShoppingBag, Heart, LogOut, ChevronRight, Settings } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const AccountLayout = () => {
  const { logout, user } = useAuthStore();

  const menuItems = [
    { label: 'Profile', icon: <User size={20} />, path: '/account/profile' },
    { label: 'Orders', icon: <ShoppingBag size={20} />, path: '/account/orders' },
    { label: 'Wishlist', icon: <Heart size={20} />, path: '/account/wishlist' },
    { label: 'Settings', icon: <Settings size={20} />, path: '/account/settings' },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-chalk min-h-screen">
      <div className="container-fashion">
        <div className="flex items-center gap-2 text-sm text-smoke mb-8 md:mb-12 uppercase tracking-widest font-medium">
          <NavLink to="/" className="hover:text-ink">Home</NavLink>
          <ChevronRight size={14} />
          <span className="text-ink font-bold">Account</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display mb-10">MY ACCOUNT</h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Account Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white border border-ink/10 rounded-2xl p-4 md:p-6 space-y-2">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center justify-between p-4 rounded-xl transition-all group
                    ${isActive ? 'bg-ink text-chalk' : 'hover:bg-ash text-smoke hover:text-ink'}
                  `}
                >
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <span className="font-bold">{item.label}</span>
                  </div>
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                </NavLink>
              ))}
              
              <button 
                onClick={logout}
                className="w-full flex items-center gap-4 p-4 rounded-xl text-danger hover:bg-danger/5 transition-all font-bold mt-4 pt-4 border-t border-ink/5"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </aside>

          {/* Account Content */}
          <main className="flex-1">
            <div className="bg-white border border-ink/10 rounded-2xl p-6 md:p-10 min-h-[500px]">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;
