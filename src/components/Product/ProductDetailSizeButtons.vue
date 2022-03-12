<template>
  <p class="font-bold">사이즈</p>
  <div class="flex">
    <div v-for="size in cupSizes" :key="size">
      <button
        class="text-center h-12 w-24 cursor-pointer rounded border-2
               hover:bg-green-300"
        @click="selectOption(size.optionNo)"
        :class="{'bg-green-500 font-bold text-white': selected === size.optionNo }"
        :data-test="`${size.name}`"
      >
        <i v-if="size.name === 'Short'"
           class="fas fa-mug-hot fa-xs"/>
        <i v-if="size.name === 'Tall'"
           class="fas fa-mug-hot fa-sm"/>
        <i v-if="size.name === 'Grande'"
           class="fas fa-mug-hot fa-md"/>
        <i v-if="size.name === 'Venti'"
           class="fas fa-mug-hot fa-lg"/>
        {{ size.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailSizeButtons',
  props: {
    cupSizes: Array,
  },
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    selectOption(optionNo) {
      this.selected = optionNo;
      this.$emit('onSetCupSize', optionNo);
    },
  },
};
</script>

<style scoped>

</style>
