<template>
  <main class="pb-16">
    <ProductList/>
  </main>
  <footer>
    <MenuFooterBar/>
  </footer>
</template>

<script>
import MenuFooterBar from '@/components/Menu/MenuFooterBar.vue';
import ProductList from '@/components/Product/ProductList.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    MenuFooterBar,
  },
};

</script>
