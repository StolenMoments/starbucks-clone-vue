import { createStore } from 'vuex';

export default createStore({
  state: {
    token: sessionStorage.getItem('token') || '',
    cart: [],
  },
  getters: {
    getToken() {
      return this.state.token;
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
