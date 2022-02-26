<template>
  <p class="font-bold">사이즈</p>
  <div class="flex">
    <div v-for="size in sizeList" :key="size">
      <button v-if="sizeObject[size]"
              class="h-12 w-24 cursor-pointer rounded border-2 hover:bg-green-300"
              :data-test="`${size}`"
      >
        <FasIcon v-if="size === 'Short'"
                 class="h-3 w-3" :icon="['fas','mug-hot']"/>
        <FasIcon v-if="size === 'Tall'"
                 class="h-3.5 w-3.5" :icon="['fas','mug-hot']"/>
        <FasIcon v-if="size === 'Grande'"
                 class="h-4 w-4" :icon="['fas','mug-hot']"/>
        <FasIcon v-if="size === 'Venti'"
                 class="h-5 w-5" :icon="['fas','mug-hot']"/>
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
  name: 'DrinkDetailSizeButtons',
  props: {
    sizeObject: Object,
    sizeList: Array,
  },
};
</script>

<style scoped>

</style>
