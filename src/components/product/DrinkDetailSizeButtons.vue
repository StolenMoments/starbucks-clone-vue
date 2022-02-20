<template>
  <p class="font-bold">사이즈</p>
  <div class="flex place-content-between">
    <button v-if="drinkSize.Short"
            class="h-10 w-24 cursor-pointer rounded border-2 hover:bg-green-300">Short
    </button>
    <button v-else
            class="h-10 w-24 cursor-auto rounded border-2 text-gray-200">Short
    </button>
    <button v-if="drinkSize.Tall"
            class="h-10 w-24 cursor-pointer rounded border-2 hover:bg-green-300">Tall
    </button>
    <button v-else
            class="h-10 w-24 cursor-auto rounded border-2 text-gray-200">Tall
    </button>
    <button v-if="drinkSize.Grande"
            class="h-10 w-24 cursor-pointer rounded border-2 hover:bg-green-300">Grande
    </button>
    <button v-else
            class="h-10 w-24 cursor-auto rounded border-2 text-gray-200">Grande
    </button>
    <button v-if="drinkSize.Venti"
            class="h-10 w-24 cursor-pointer rounded border-2 hover:bg-green-300">Venti
    </button>
    <button v-else
            class="h-10 w-24 cursor-auto rounded border-2 text-gray-200">Venti
    </button>
  </div>
</template>

<script>
export default {
  name: 'DrinkDetailSizeButtons',
  props: {
    drinkSize: Object,
  },
};
</script>

<style scoped>

</style>
