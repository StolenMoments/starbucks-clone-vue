<template>
  <section @click="this.$emit('onToggleModal')" @keydown="this.$emit('onToggleModal')">
    <section class="ModalBlock">
    </section>
    <section class="ModalContent">
      <div class="text-3xl font-bold">로그인에 실패했습니다</div>
      <div class="mt-4 text-md font-bold">화면 클릭, 스페이스바 / 엔터키를 누르면 창이 닫힙니다.</div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'LoginFailModal',
};
</script>

<style scoped>
.ModalBlock {
  @apply fixed h-full w-full flex justify-center items-center top-0 bg-gray-200 opacity-50
}

.ModalContent {
  @apply absolute inline-block top-72 h-1/5 w-1/2 flex flex-col justify-center
  items-center bg-white text-center
}

@media (max-width: 770px) {
  .ModalContent {
    @apply w-full
  }
}
</style>
