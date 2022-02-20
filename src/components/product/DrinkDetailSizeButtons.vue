<template>
  <p class="font-bold">사이즈</p>
  <div class="flex">
    <div v-for="size in sizeList" :key="size">
      <button v-if="sizeObject[size]"
              class="h-10 w-24 cursor-pointer rounded border-2 hover:bg-green-300">{{ size }}
      </button>
      <button v-else
              class="h-10 w-24 cursor-auto rounded border-2 text-gray-200">{{ size }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrinkDetailSizeButtons',
  props: {
    sizeObject: Object,
    sizeList: Array,
  },
};
</script>

<style scoped>

</style>
