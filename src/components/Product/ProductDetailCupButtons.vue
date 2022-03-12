<template>
  <p class="font-bold">컵 선택</p>
  <button class="h-10 w-1/3 cursor-pointer rounded-l-2xl border-2 hover:bg-green-300"
          :class="{'bg-green-500 font-bold text-white': selected === 'storeCup'}"
          @click="selectCup('storeCup')"
          data-test="store-cup"
  >매장컵
  </button>
  <button class="h-10 w-1/3 cursor-pointer rounded border-2 hover:bg-green-300"
          :class="{'bg-green-500 font-bold text-white': selected === 'personalCup'}"
          @click="selectCup('personalCup')"
          data-test="personal-cup"
  >개인컵
  </button>
  <button class="h-10 w-1/3 cursor-pointer rounded-r-2xl border-2 hover:bg-green-300"
          @click="selectCup('disposableCup')"
          :class="{'bg-green-500 font-bold text-white': selected === 'disposableCup'}"
          data-test="disposable-cup"
  >일회용컵
  </button>
</template>

<script>
export default {
  name: 'ProductDetailCupButtons',
  data() {
    return {
      selected: '',
    };
  },
  methods: {
    selectCup(cup) {
      this.selected = cup;
    },
  },
};
</script>

<style scoped></style>
