<template>
  <section class="absolute flex flex-col h-full w-full items-center justify-center">
    <div class="text-5xl font-bold">결제 성공</div>
    <button class="mt-4 text-3xl underline text-blue-700" @click="goHome">홈으로 이동</button>
  </section>
</template>

<script>
export default {
  name: 'OrderComplete',
  methods: {
    goHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>

</style>
