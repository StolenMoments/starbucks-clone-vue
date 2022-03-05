import Repository from '@/components/Client/Repository';

const cartPath = '/cart';
const orderPath = '/order';

export default class OrderRepository extends Repository {
  getProductsInCart() {
    return this.client.get(`${cartPath}`, this.getAuthHeader());
  }

  addProductToCart(payload) {
    return this.client.post(`${cartPath}`, payload, this.getAuthHeader());
  }

  order() {
    return this.client.post(`${orderPath}`, {}, this.getAuthHeader());
  }
}
