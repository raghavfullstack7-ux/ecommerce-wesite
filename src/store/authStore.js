import { create } from 'zustand';
import axiosInstance from '../utils/axiosInstance';

export const useAuthStore = create((set, get) => ({
  user:            null,
  isAuthenticated: false,
  isLoading:       true,
  isAdmin:         false,

  initialize: async () => {
    try {
      const res = await axiosInstance.get('/auth/me');
      const user = res.data.data.user;
      window.__accessToken__ = res.data.data.accessToken;
      set({
        user,
        isAuthenticated: true,
        isAdmin: ['admin', 'superadmin'].includes(user.role),
        isLoading: false
      });
    } catch (error) {
      console.error('Auth check failed:', error.message);
      set({ user: null, isAuthenticated: false, isAdmin: false, isLoading: false });
    }
  },

  register: async (data) => {
    const res = await axiosInstance.post('/auth/register', data);
    return res.data;
  },

  verifyEmail: async (email, otp) => {
    const res = await axiosInstance.post('/auth/verify-email', { email, otp });
    const { user, accessToken } = res.data.data;
    window.__accessToken__ = accessToken;
    set({ user, isAuthenticated: true, isAdmin: ['admin','superadmin'].includes(user.role) });
    return res.data;
  },

  login: async (email, password) => {
    const res = await axiosInstance.post('/auth/login', { email, password });
    const { user, accessToken } = res.data.data;
    window.__accessToken__ = accessToken;
    set({ user, isAuthenticated: true, isAdmin: ['admin','superadmin'].includes(user.role) });
    return res.data;
  },

  logout: async () => {
    try { await axiosInstance.post('/auth/logout'); } catch {}
    window.__accessToken__ = null;
    set({ user: null, isAuthenticated: false, isAdmin: false });
  },

  handleGoogleCallback: async (token) => {
    window.__accessToken__ = token;
    const res = await axiosInstance.get('/auth/me');
    const user = res.data.data.user;
    set({ user, isAuthenticated: true, isAdmin: ['admin','superadmin'].includes(user.role) });
  },

  updateUser: (userData) => set((state) => ({ user: { ...state.user, ...userData } })),
}));
