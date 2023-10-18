import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({ count: 0, cart: [] }),
  actions: {
    increment() {
      this.count++;
    },
    addToCart(id) {
      if (!this.cart.includes(id)) {
        this.cart.push(id);
      }
    },
    removeFromCart(id) {
      const index = this.cart.indexOf(id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
  },
});
