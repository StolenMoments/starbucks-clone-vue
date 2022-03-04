<template>
  <p class="font-bold">사이즈</p>
  <div class="flex">
    <div v-for="size in sizeList" :key="size">
      <button v-if="sizeObject[size]"
              class="text-center h-12 w-24 cursor-pointer rounded border-2
               hover:bg-green-300"
              :data-test="`${size}`"
      >
        <i v-if="size === 'Short'"
           class="fas fa-mug-hot fa-xs"/>
        <i v-if="size === 'Tall'"
           class="fas fa-mug-hot fa-sm"/>
        <i v-if="size === 'Grande'"
           class="fas fa-mug-hot fa-md"/>
        <i v-if="size === 'Venti'"
           class="fas fa-mug-hot fa-lg"/>
        {{ size }}
      </button>
      <button v-else
              class="h-12 w-24 cursor-auto rounded border-2 text-gray-200"
              :data-test="`${size}`">{{ size }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailSizeButtons',
  props: {
    sizeObject: Object,
    sizeList: Array,
  },
};
</script>

<style scoped>

</style>
