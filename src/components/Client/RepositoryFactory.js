import ProductRepository from '@/components/Client/ProductRepository';
import UserRepository from '@/components/Client/UserRepository';
import OrderRepository from '@/components/Client/OrderRepository';

const repositories = {
  product: ProductRepository,
  user: UserRepository,
  order: OrderRepository,
};

export default {
  get: (name) => repositories[name],
};
