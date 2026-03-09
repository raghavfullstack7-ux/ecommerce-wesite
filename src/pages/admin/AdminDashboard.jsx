import { motion } from 'framer-motion';
import { LayoutDashboard, ShoppingBag, Users, Settings, ArrowUpRight, TrendingUp, DollarSign, Package } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Revenue', value: '$124,563.00', icon: DollarSign, trend: '+12.5%' },
    { label: 'Active Orders', value: '45', icon: ShoppingBag, trend: '+3.2%' },
    { label: 'Total Customers', value: '1,240', icon: Users, trend: '+18%' },
    { label: 'Avg Order Value', value: '$240.50', icon: TrendingUp, trend: '-2.1%' },
  ];

  return (
    <div className="p-8">
       <div className="flex items-end justify-between mb-12">
          <div>
             <p className="text-smoke text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Operations Overview</p>
             <h1 className="text-5xl">DASHBOARD</h1>
          </div>
          <div className="text-right">
             <p className="text-sm font-medium text-smoke">Monday, March 9, 2026</p>
             <button className="btn-pill btn-primary py-2 px-6 text-xs mt-2">DOWNLOAD REPORT</button>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
             <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-ink/5 shadow-sm"
             >
                <div className="flex justify-between items-start mb-6">
                   <div className="w-12 h-12 rounded-2xl bg-ash flex items-center justify-center">
                      <stat.icon size={22} className="opacity-60" />
                   </div>
                   <span className={`text-xs font-bold ${stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-danger'}`}>{stat.trend}</span>
                </div>
                <h3 className="text-[10px] font-bold text-smoke uppercase tracking-widest mb-1">{stat.label}</h3>
                <p className="text-3xl font-display">{stat.value}</p>
             </motion.div>
          ))}
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-[3rem] border border-ink/5 p-10 h-96">
             <h3 className="text-2xl mb-8">Sales Performance</h3>
             <div className="w-full h-full bg-ash/30 rounded-3xl flex items-center justify-center text-smoke font-medium italic">
                Analytics Visualization Coming Soon...
             </div>
          </div>
          <div className="bg-white rounded-[3rem] border border-ink/5 p-10">
             <h3 className="text-2xl mb-8">Recent Orders</h3>
             <div className="space-y-6">
                {[1, 2, 3, 4].map(i => (
                   <div key={i} className="flex items-center justify-between pb-6 border-b border-ink/5 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-ash flex items-center justify-center font-display text-sm">#ORD</div>
                         <div>
                            <p className="font-bold text-sm">Customer #{i}</p>
                            <p className="text-[10px] text-smoke uppercase font-bold">$240.00</p>
                         </div>
                      </div>
                      <span className="bg-emerald-100 text-emerald-600 text-[8px] font-bold px-2 py-1 rounded-full uppercase">Success</span>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};

export default AdminDashboard;
