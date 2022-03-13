import { createStore } from 'vuex';

export default createStore({
  state: {
    token: sessionStorage.getItem('token') || '',
    cart: JSON.parse(sessionStorage.getItem('cart')) || [],
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    getTotalPrice(state) {
      function getProductPrice(item) {
        if (!item) return 0;
        let price = item.product.price * item.quantity;
        const {
          optionsInfo,
          options,
        } = item;
        for (let i = 0; i < optionsInfo.length; i += 1) {
          price += (optionsInfo[i].unitprice * (options[i].quantity - optionsInfo[i].baseQuantity));
        }
        return price;
      }

      let totalPrice = 0;
      if (state.cart.length === 0) return 0;
      for (let i = 0; i < state.cart.length; i += 1) {
        const item = state.cart.at(i);
        totalPrice += getProductPrice(item);
      }
      return totalPrice;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setCart(state, cart) {
      state.cart = cart;
    },
  },
});
