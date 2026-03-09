import { motion } from 'framer-motion';

const SettingsPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-12"
    >
       <h1 className="text-5xl mb-12">ACCOUNT SETTINGS</h1>
       
       <div className="space-y-12">
          <section>
             <h3 className="text-2xl mb-6">Personal Information</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="text-[10px] font-bold uppercase tracking-widest text-smoke mb-2 block">First Name</label>
                   <input type="text" defaultValue="John" className="fashion-input" />
                </div>
                <div>
                   <label className="text-[10px] font-bold uppercase tracking-widest text-smoke mb-2 block">Last Name</label>
                   <input type="text" defaultValue="Doe" className="fashion-input" />
                </div>
                <div className="md:col-span-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-smoke mb-2 block">Email Address</label>
                   <input type="email" defaultValue="john.doe@example.com" className="fashion-input" />
                </div>
             </div>
          </section>

          <section className="pt-12 border-t border-ink/5">
             <h3 className="text-2xl mb-6">Security</h3>
             <div className="space-y-6">
                <button className="btn-pill btn-secondary py-3 px-8 text-sm">CHANGE PASSWORD</button>
                <div className="flex items-center justify-between p-6 bg-ash/30 rounded-3xl">
                   <div>
                      <p className="font-bold">Two-Factor Authentication</p>
                      <p className="text-xs text-smoke font-medium">Add an extra layer of security to your account.</p>
                   </div>
                   <button className="w-12 h-6 bg-ink/10 rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1" /></button>
                </div>
             </div>
          </section>

          <button className="btn-pill btn-primary px-12 py-5 shadow-3d active:translate-y-1 active:shadow-none">SAVE CHANGES</button>
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
    </motion.div>
  );
};

export default SettingsPage;
