


import { create } from "zustand";
import { persist } from "zustand/middleware";

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,
      addToCart(item) {
        const existingProduct = get().products.find((product) => product._id === item._id);

        if (existingProduct) {
          // Product is already in the cart, update the quantity
          set((state) => ({
            products: state.products.map((product) =>
              product._id === item._id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + item.price,
          }));
        } else {
          // Product is not in the cart, add it
          set((state) => ({
            products: [...state.products, { ...item, quantity: 1 }],
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + item.price,
          }));
        }
      },
      removeFromCart(item) {
        set((state) => ({
          products: state.products.filter((product) => product._id !== item._id),
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - item.price,
        }));
      },
      increaseQuantity(item) {
        set((state) => ({
          products: state.products.map((product) =>
            product._id === item._id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + item.price,
        }));
      },
      reduceQuantity(item) {
        const productToReduce = get().products.find((product) => product._id === item._id);

        if (productToReduce && productToReduce.quantity > 1) {
          set((state) => ({
            products: state.products.map((product) =>
              product._id === item._id
                ? { ...product, quantity: product.quantity - 1 }
                : product
            ),
            totalItems: state.totalItems - 1,
            totalPrice: state.totalPrice - item.price,
          }));
        }
      },
      clearCart() {
        set(() => ({
          products: [],
          totalPrice: 0,
          totalItems: 0,
        }));
      },
    }),
    { name: "cart", skipHydration: true }
  )
);




