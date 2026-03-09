import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      coupon: null,
      
      addItem: (product, variant) => {
        const { items } = get();
        const existingItemIndex = items.findIndex(
          (item) => item.id === product.id && 
          item.size === variant.size && 
          item.color === variant.color
        );

        if (existingItemIndex > -1) {
          const newItems = [...items];
          newItems[existingItemIndex].quantity += variant.quantity || 1;
          set({ items: newItems });
        } else {
          set({ 
            items: [...items, { ...product, ...variant, quantity: variant.quantity || 1 }] 
          });
        }
      },

      removeItem: (id, size, color) => {
        set({
          items: get().items.filter(
            (item) => !(item.id === id && item.size === size && item.color === color)
          ),
        });
      },

      updateQuantity: (id, size, color, quantity) => {
        const newItems = get().items.map((item) => {
          if (item.id === id && item.size === size && item.color === color) {
            return { ...item, quantity: Math.max(1, quantity) };
          }
          return item;
        });
        set({ items: newItems });
      },

      clearCart: () => set({ items: [], coupon: null }),

      applyCoupon: (code) => set({ coupon: code }),

      // Computed values
      get subtotal() {
        return get().items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      },

      get discount() {
        const { coupon, subtotal } = get();
        if (coupon === 'SAVE20') return subtotal * 0.2;
        return 0;
      },

      get total() {
        const { subtotal, discount } = get();
        return subtotal - discount + (subtotal > 0 ? 15 : 0); // $15 flat delivery
      },

      get itemCount() {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      }
    }),
    {
      name: 'shop-co-cart-storage',
    }
  )
);
