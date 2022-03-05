<template>
  <button class="MenuButton" @click="toHome" data-test="home">
    <HomeIcon class="h-5 w-5 m-auto"/>
    <span>홈</span>
  </button>
  <button class="MenuButton" @click="toCart" data-test="cart">
    <ShoppingCartIcon class="h-5 w-5 m-auto"/>
    <span>장바구니</span>
  </button>
  <button class="MenuButton" data-test="settings">
    <CogIcon class="h-5 w-5 m-auto"/>
    <span>설정</span>
  </button>
</template>
<script>
import { HomeIcon, ShoppingCartIcon, CogIcon } from '@heroicons/vue/solid';

export default {
  name: 'MenuFooterBar',
  components: {
    HomeIcon,
    ShoppingCartIcon,
    CogIcon,
  },
  methods: {
    toHome() {
      this.$router.push('/');
    },
    toCart() {
      this.$router.push('/cart');
    },
  },
};
</script>

<style scoped>
.MenuButton {
  @apply w-full bg-gray-200 text-center
}

</style>
