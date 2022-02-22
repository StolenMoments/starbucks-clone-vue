<template>
  <p class="font-bold">컵 선택</p>
  <button class="h-10 w-1/3 cursor-pointer rounded-l-2xl border-2 hover:bg-green-300"
          data-test="store-cup"
  >매장컵
  </button>
  <button class="h-10 w-1/3 cursor-pointer rounded border-2 hover:bg-green-300"
          data-test="personal-cup"
  >개인컵
  </button>
  <button class="h-10 w-1/3 cursor-pointer rounded-r-2xl border-2 hover:bg-green-300"
          data-test="disposable-cup"
  >일회용컵
  </button>
</template>

<script>
export default {
  name: 'DrinkDetailCupButtons',
};
</script>

<style scoped>

</style>
