import LoginForm from '@/components/Login/LoginForm.vue';
import ProductDetail from '@/components/Product/ProductDetail.vue';
import ProductList from '@/components/Product/ProductList.vue';
import OrderCart from '@/components/Order/OrderCart.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import store from '@/store';

const login = LoginForm;
const productDetail = ProductDetail;
const productList = ProductList;
const orderCart = OrderCart;

const routes = [
  {
    path: '/',
    component: login,
    name: 'login',
  },
  {
    path: '/product',
    component: productList,
    name: 'list',
  },
  {
    path: '/product/:id',
    component: productDetail,
    name: 'detail',
  },
  {
    path: '/cart',
    component: orderCart,
    name: 'cart',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to) => {
  if (!store.state.token && to.name !== 'login') {
    return { name: 'login' };
  }
  return null;
});

export default router;