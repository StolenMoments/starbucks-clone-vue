import Repository from '@/components/Client/Repository';

const resource = '/product';

export default class ProductRepository extends Repository {
  getProducts() {
    return this.client.get(`${resource}`, this.getAuthHeader());
  }

  getProductsByCategory(payload) {
    const { category } = payload;
    return this.client.get(`${resource}?category=${category}`, this.getAuthHeader());
  }

  getProduct(payload) {
    const { productNo } = payload;
    return this.client.get(`${resource}/${productNo}`, this.getAuthHeader());
  }
}
