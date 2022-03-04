<template>
  <main class="pb-16">
    <router-view></router-view>
  </main>
  <footer>
    <MenuFooterBar/>
  </footer>
</template>

<script>
import MenuFooterBar from '@/components/Menu/MenuFooterBar.vue';

export default {
  name: 'App',
  components: {
    MenuFooterBar,
  },
};

</script>
