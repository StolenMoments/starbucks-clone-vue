import store from '@/store';
import Client from './AxiosClient';

export default class Repository {
  constructor() {
    this.client = Client;
    this.basicToken = `Basic ${btoa(encodeURI('web-app:abcd1234'))}`;
  }

  getAuthHeader = () => ({
    headers: {
      Authorization: store.state.token,
    },
  });

  getBasicHeader() {
    return {
      headers: {
        Authorization: this.basicToken,
      },
    };
  }
}
