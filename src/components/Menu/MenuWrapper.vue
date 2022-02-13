<template>
  <footer class="fixed flex bottom-0 w-full border-t-2">
    <section class="w-full bg-gray-200 text-center">
      <HomeIcon class="h-5 w-5 m-auto"/>
      <span>홈</span>
    </section>
    <section class="w-full bg-gray-200 text-center">
      <ShoppingCartIcon class="h-5 w-5 m-auto"/>
      <span>장바구니</span>
    </section>
    <section class="w-full bg-gray-200 text-center">
      <CogIcon class="h-5 w-5 m-auto"/>
      <span>설정</span>
    </section>
  </footer>
</template>

<script>
import { HomeIcon, ShoppingCartIcon, CogIcon } from '@heroicons/vue/solid';

export default {
  name: 'MenuWrapper',
  components: {
    HomeIcon,
    ShoppingCartIcon,
    CogIcon,
  },
};
</script>

<style scoped>

</style>
