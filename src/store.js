import { createStore } from 'vuex';

export default createStore({
  state: {
    token: '',
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
  },
});
