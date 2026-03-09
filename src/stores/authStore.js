import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  
  login: (credentials) => {
    // Mock login
    set({ 
      user: { id: 1, name: 'John Doe', email: credentials.email, role: 'user' },
      isAuthenticated: true 
    });
  },
  
  logout: () => set({ user: null, isAuthenticated: false }),
  
  signup: (data) => {
    // Mock signup
    set({ 
      user: { id: 1, name: `${data.firstName} ${data.lastName}`, email: data.email, role: 'user' },
      isAuthenticated: true 
    });
  },
  
  updateProfile: (data) => {
    set((state) => ({
      user: { ...state.user, ...data }
    }));
  }
}));
