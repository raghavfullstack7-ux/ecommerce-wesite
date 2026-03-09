import { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/authStore';

// Layouts
import Navbar from './components/layout/Navbar';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Footer from './components/layout/Footer';
import AccountLayout from './components/layout/AccountLayout';
import AdminLayout from './components/layout/AdminLayout';

// Components & Pages
import Preloader from './components/layout/Preloader';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/guards/ProtectedRoute';
import AdminRoute from './components/guards/AdminRoute';
import GuestRoute from './components/guards/GuestRoute';

// Lazy load pages for performance
const HomePage = lazy(() => import('./pages/HomePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));

// Import Auth Pages directly (they share a file)
import { LoginPage as Login, SignupPage as Signup } from './pages/AuthPages';
import OTPPage from './pages/auth/OTPPage';
import GoogleCallbackPage from './pages/auth/GoogleCallbackPage';

// Collection Pages
import OnSalePage from './pages/OnSalePage';
import NewArrivalsPage from './pages/NewArrivalsPage';
import BrandsPage from './pages/BrandsPage';

import ProfilePage from './pages/account/ProfilePage';
import SettingsPage from './pages/account/SettingsPage';


const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminProducts = lazy(() => import('./pages/admin/AdminProducts'));

const Orders = () => <div><h2 className="text-2xl font-display mb-6 uppercase tracking-tight">Your Orders</h2><p className="text-smoke font-medium">You haven't placed any orders yet. Start shopping to fill your history.</p></div>;
const Wishlist = () => <div><h2 className="text-2xl font-display mb-6 uppercase tracking-tight">Your Wishlist</h2><p className="text-smoke font-medium">Your wishlist is empty. Save items you love to find them here.</p></div>;

const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');
  const isAuthPath = ['/login', '/signup', '/verify-otp', '/auth/callback'].includes(location.pathname);
  
  // Hide bars for admin and auth pages
  const hideLayout = isAdminPath || isAuthPath;

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <AnnouncementBar />}
      {!hideLayout && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        
        {/* Protected Routes */}
        <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
        <Route path="/signup" element={<GuestRoute><Signup /></GuestRoute>} />
        <Route path="/verify-otp" element={<OTPPage />} />
        <Route path="/auth/callback" element={<GoogleCallbackPage />} />

        {/* Public Collections */}
        <Route path="/on-sale" element={<OnSalePage />} />
        <Route path="/new-arrivals" element={<NewArrivalsPage />} />
        <Route path="/brands" element={<BrandsPage />} />
          
        {/* Account Routes */}
        <Route path="/account" element={<ProtectedRoute><AccountLayout /></ProtectedRoute>}>
          <Route index element={<ProfilePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<div>Admin Orders</div>} />
          <Route path="customers" element={<div>Admin Customers</div>} />
          <Route path="settings" element={<div>Admin Settings</div>} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const { initialize } = useAuthStore();

  useEffect(() => {
    const init = async () => {
      try {
        await initialize();
      } finally {
        // Ensure we stop loading after a reasonable delay even if things take time
        setTimeout(() => setLoading(false), 2000);
      }
    };
    init();
  }, [initialize]);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Toaster position="bottom-right" />
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <LayoutWrapper>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-display text-2xl">LOADING...</div>}>
            <AppRoutes />
          </Suspense>
        </LayoutWrapper>
      )}
    </Router>
  );
}

export default App;
