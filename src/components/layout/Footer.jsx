import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Twitter, Facebook, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ash pt-24 pb-12">
      <div className="container-fashion">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & Socials */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-3xl mb-6 block uppercase tracking-tighter">SHOP.CO</Link>
            <p className="text-charcoal text-sm leading-relaxed mb-8 max-w-xs">
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 border border-ink/10 rounded-full flex items-center justify-center hover:bg-ink hover:text-chalk transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 border border-ink/10 rounded-full flex items-center justify-center hover:bg-ink hover:text-chalk transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 border border-ink/10 rounded-full flex items-center justify-center hover:bg-ink hover:text-chalk transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 border border-ink/10 rounded-full flex items-center justify-center hover:bg-ink hover:text-chalk transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display text-lg mb-6 tracking-wider">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-charcoal">
              <li><Link to="/about" className="hover:text-ink transition-colors">About</Link></li>
              <li><Link to="/features" className="hover:text-ink transition-colors">Features</Link></li>
              <li><Link to="/works" className="hover:text-ink transition-colors">Works</Link></li>
              <li><Link to="/career" className="hover:text-ink transition-colors">Career</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 tracking-wider">Help</h4>
            <ul className="flex flex-col gap-4 text-sm text-charcoal">
              <li><Link to="/customer-support" className="hover:text-ink transition-colors">Customer Support</Link></li>
              <li><Link to="/delivery-details" className="hover:text-ink transition-colors">Delivery Details</Link></li>
              <li><Link to="/terms" className="hover:text-ink transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 tracking-wider">FAQ</h4>
            <ul className="flex flex-col gap-4 text-sm text-charcoal">
              <li><Link to="/account" className="hover:text-ink transition-colors">Account</Link></li>
              <li><Link to="/manage-deliveries" className="hover:text-ink transition-colors">Manage Deliveries</Link></li>
              <li><Link to="/orders" className="hover:text-ink transition-colors">Orders</Link></li>
              <li><Link to="/payments" className="hover:text-ink transition-colors">Payments</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-smoke">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex gap-4 items-center">
            {/* Payment Icons Placeholder */}
            <div className="h-8 bg-white px-4 rounded border border-ink/5 flex items-center text-[10px] font-bold text-smoke uppercase tracking-widest">Visa</div>
            <div className="h-8 bg-white px-4 rounded border border-ink/5 flex items-center text-[10px] font-bold text-smoke uppercase tracking-widest">MasterCard</div>
            <div className="h-8 bg-white px-4 rounded border border-ink/5 flex items-center text-[10px] font-bold text-smoke uppercase tracking-widest">PayPal</div>
            <div className="h-8 bg-white px-4 rounded border border-ink/5 flex items-center text-[10px] font-bold text-smoke uppercase tracking-widest">Apple Pay</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
