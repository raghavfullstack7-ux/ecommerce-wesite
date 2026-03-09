import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut, 
  ExternalLink,
  Search,
  Bell
} from 'lucide-react';

const AdminLayout = () => {
  const menuItems = [
    { label: 'Dashboard', icon: <BarChart3 size={20} />, path: '/admin/dashboard' },
    { label: 'Products', icon: <Package size={20} />, path: '/admin/products' },
    { label: 'Orders', icon: <ShoppingCart size={20} />, path: '/admin/orders' },
    { label: 'Customers', icon: <Users size={20} />, path: '/admin/customers' },
    { label: 'Settings', icon: <Settings size={20} />, path: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 flex">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r border-neutral-800 flex flex-col sticky top-0 h-screen overflow-y-auto">
        <div className="p-8 border-b border-neutral-800">
           <Link to="/admin" className="font-display text-2xl tracking-tighter text-chalk uppercase">SHOP.CO ADMIN</Link>
        </div>
        
        <nav className="flex-1 p-6 space-y-2">
           {menuItems.map(item => (
             <NavLink
               key={item.path}
               to={item.path}
               className={({ isActive }) => `
                 flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-medium
                 ${isActive ? 'bg-chalk text-ink' : 'text-neutral-500 hover:text-chalk hover:bg-neutral-900'}
               `}
             >
               {item.icon}
               {item.label}
             </NavLink>
           ))}
        </nav>

        <div className="p-6 border-t border-neutral-800">
           <Link to="/" className="flex items-center gap-4 px-4 py-3 text-neutral-500 hover:text-chalk transition-all">
             <ExternalLink size={20} />
             Live Site
           </Link>
           <button className="flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-all w-full text-left">
             <LogOut size={20} />
             Logout
           </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-h-screen flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-neutral-800 flex items-center justify-between px-10 sticky top-0 bg-neutral-950/80 backdrop-blur-md z-30">
           <div className="relative w-96">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
             <input 
               type="text" 
               placeholder="Search admin..."
               className="w-full bg-neutral-900 border-neutral-800 border rounded-full py-2.5 pl-12 pr-4 text-sm focus:border-chalk transition-all"
             />
           </div>
           
           <div className="flex items-center gap-6">
              <button className="relative text-neutral-400 hover:text-chalk">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-chalk rounded-full" />
              </button>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-chalk text-ink flex items-center justify-center font-bold">AD</div>
                 <div className="hidden lg:block">
                    <p className="text-sm font-bold leading-tight">Admin User</p>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Super Admin</p>
                 </div>
              </div>
           </div>
        </header>

        {/* Content */}
        <div className="p-10 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
