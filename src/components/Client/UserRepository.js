import Repository from '@/components/Client/Repository';

const userInfoPath = '/info';
const joinPath = '/join';
const loginPath = '/login';

export default class UserRepository extends Repository {
  join(payload) {
    return this.client.post(joinPath, payload, this.getBasicHeader());
  }

  login(payload) {
    return this.client.post(loginPath, {
      ...payload,
      grant_type: 'password',
    }, this.getBasicHeader());
  }

  getUserInfo() {
    return this.client.get(userInfoPath, this.getAuthHeader());
  }
}
