<template>
  <main class="pb-16">
    <OrderCart/>
  </main>
  <footer>
    <MenuFooterBar/>
  </footer>
</template>

<script>
import MenuFooterBar from '@/components/Menu/MenuFooterBar.vue';
import OrderCart from '@/components/Order/OrderCart.vue';

export default {
  name: 'App',
  components: {
    OrderCart,
    MenuFooterBar,
  },
};

</script>
