import { create } from "zustand";

export const useStore = create((set) => ({
  // cart
  cart: {
    foods: [],
  },

  // add to cart
  addFoodToCart: (data) =>
    set((state) => ({
      cart: {
        foods: [...state.cart.foods, data],
      },
    })),

  // comot from cart
  comotFoodFromCart: (index) =>
    set((state) => ({
      cart: {
        foods: state.cart.foods.filter((_, i) => i !=index),
      },
    })),

    // clear cart
    // clearCart: (index) =>
    // set((state) => ({
    //   cart: {
    //     foods: state.cart.foods.filter((_, index) => index !=index),
    //   },
    // })),

    // to clear all cart
    clearCart: () => 
    set(() => ({
      cart: {
        foods: []
      }
    }))
    


}));
