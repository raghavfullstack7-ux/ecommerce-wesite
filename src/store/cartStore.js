import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'react-hot-toast';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product, quantity = 1, selectedSize = 'M', selectedColor = '') => {
        const { items } = get();
        const existingItemIndex = items.findIndex(
          (item) => 
            item.id === product.id && 
            item.selectedSize === selectedSize && 
            item.selectedColor === (selectedColor || item.selectedColor)
        );

        if (existingItemIndex > -1) {
          const newItems = [...items];
          newItems[existingItemIndex].quantity += quantity;
          set({ items: newItems });
        } else {
          set({ 
            items: [...items, { ...product, quantity, selectedSize, selectedColor }] 
          });
        }
        toast.success(`${product.name} added to cart!`);
      },

      removeItem: (productId, selectedSize, selectedColor) => {
        const { items } = get();
        const newItems = items.filter(
          (item) => 
            !(item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
        );
        set({ items: newItems });
        toast.error('Item removed from cart');
      },

      updateQuantity: (productId, selectedSize, selectedColor, quantity) => {
        const { items } = get();
        const newItems = items.map((item) => {
          if (item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor) {
            return { ...item, quantity: Math.max(1, quantity) };
          }
          return item;
        });
        set({ items: newItems });
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      getCartCount: () => {
        const { items } = get();
        return items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'shop-cart-storage',
    }
  )
);
