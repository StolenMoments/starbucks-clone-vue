<template>
  <section class="container flex flex-col">
    <section class="mt-8 ml-6">
      <span class="font-bold text-2xl" data-test="category-name">{{ categoryName }}</span>
    </section>
    <ProductListItem :products="products"/>
  </section>
</template>
<script>
import RepositoryFactory from '@/components/Client/RepositoryFactory';
import ProductListItem from '@/components/Product/ProductListItem.vue';

const productRepository = RepositoryFactory.get('product');

export default {
  name: 'ProductList',
  components: { ProductListItem },
  data() {
    return {
      categoryName: '콜드 브루',
      products: [],
    };
  },
  methods: {},
  created() {
    productRepository.getProducts()
      .then((response) => {
        this.products = response.data.products;
      });
  },
};
</script>

<style scoped>
</style>
