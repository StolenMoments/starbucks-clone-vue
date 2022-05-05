<template>
  <section @click="onToggle" @keydown="onToggle">
    <section class="ModalBlock">
    </section>
    <section class="ModalContent">
      <div class="text-3xl font-bold">로그인에 실패했습니다</div>
      <div class="mt-4 text-md font-bold">화면을 클릭하면 창이 닫힙니다.</div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'LoginFailModal',
  methods: {
    onToggle() {
      this.$emit('onToggleModal');
    },
  },
};
</script>

<style scoped>
.ModalBlock {
  @apply fixed h-full w-full flex justify-center items-center top-0 bg-gray-200 opacity-50
}

.ModalContent {
  @apply absolute inline-block top-0 left-0 right-0 bottom-0 m-auto
  h-1/5 w-1/2 flex flex-col justify-center
  items-center bg-white text-center
}

@media (max-width: 770px) {
  .ModalContent {
    @apply w-full
  }
}
</style>
