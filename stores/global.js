import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    count: 0,
    cart: [],
  }),
  getters: {
    isInCart: (state) => {
      return (id) => state.cart.includes(id);
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    setCart(ids) {
      if (!ids || !Array.isArray(ids)) {
        this.cart = [];
      } else {
        this.cart = ids;
      }
    },
    addToCart(id) {
      if (!this.cart.includes(id)) {
        this.cart.push(id);
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },
    removeFromCart(id) {
      const index = this.cart.indexOf(id);
      if (index > -1) {
        this.cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },
  },
});
