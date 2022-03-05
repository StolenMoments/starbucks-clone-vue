import Client from './AxiosClient';

export default class Repository {
  constructor() {
    this.client = Client;
    this.authTokenStorageKey = 'authToken';
    this.basicToken = `Basic ${btoa(encodeURI('web-app:abcd1234'))}`;
  }

  getAuthHeader() {
    return {
      headers: {
        Authorization: sessionStorage.getItem(this.authTokenStorageKey),
      },
    };
  }

  getBasicHeader() {
    return {
      headers: {
        Authorization: this.basicToken,
      },
    };
  }
}
