<template>
  <main class="pb-16">
    <router-view></router-view>
  </main>
  <footer class="fixed flex bottom-0 w-full border-t-2">
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
