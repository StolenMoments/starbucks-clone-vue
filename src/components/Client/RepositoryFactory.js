import ProductRepository from '@/components/Client/ProductRepository';
import UserRepository from '@/components/Client/UserRepository';
import OrderRepository from '@/components/Client/OrderRepository';

const repositories = {
  product: new ProductRepository(),
  user: new UserRepository(),
  order: new OrderRepository(),
};

export default {
  get: (name) => repositories[name],
};
