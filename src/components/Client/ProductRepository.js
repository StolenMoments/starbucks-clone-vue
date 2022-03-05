import Repository from '@/components/Client/Repository';

const resource = '/product';

export default class ProductRepository extends Repository {
  getProductsByCategory(payload) {
    const { category } = payload;
    return this.client.get(`${resource}?category=${category}`);
  }

  getProduct(payload) {
    const { productNo } = payload;
    return this.client.get(`${resource}/${productNo}`);
  }
}
