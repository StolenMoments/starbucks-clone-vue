<template>
  <main>
    <DrinkDetail/>
  </main>
  <footer>
    <MenuFooterBar/>
  </footer>
</template>

<script>
import MenuFooterBar from '@/components/Menu/MenuFooterBar.vue';
import DrinkDetail from '@/components/product/DrinkDetail.vue';

export default {
  name: 'App',
  components: {
    DrinkDetail,
    MenuFooterBar,
  },
};

</script>
