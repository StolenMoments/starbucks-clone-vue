<template>
  <section v-for="(item, index) in cart" :key="index" class="ProductSection">
    <label :for="item.product.productNo">
      <input :id="item.product.productNo" type="checkbox" data-test="select-product">
    </label>
    <img alt="product image" :src="item.product.imgUrl"
         class="ProductImg" data-test="product-img"
         @keydown="goDetail(item.product.productNo)"
         @click="goDetail(item.product.productNo)"/>
    <div class="ProductText">
      <button class="font-bold cursor-pointer hover:bg-blue-200"
              @click="goDetail(item.product.productNo)"
              data-test="product-name-kr">{{ item.product.nameKr }}
      </button>
      <p class="text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap"
         data-test="product-name-eng">
        {{ item.product.nameEng }}
      </p>
      <p class="ProductOption" data-test="primary-option">
        {{ item.cupSize.name }}
      </p>
      <p class="ProductOption" v-for="(option, index) in item.optionsInfo" :key="index"
         data-test="personal-option">
        <span v-if="item.options.at(index).quantity > 0">
        {{ option.name }} | {{ item.options.at(index).quantity }} |
        {{
            addComma(option.unitprice * (item.options.at(index).quantity - option.baseQuantity))
          }}
        </span>
      </p>
      <button class="font-bold text-blue-500 text-base underline" data-test="change-option">
        옵션변경
      </button>
      <div>
        <button @click="this.$emit('onSubtractItem', index)"
                :data-test="`subtract-product-count-${index}`">
          <MinusCircleIcon class="inline h-7 w-7 cursor-pointer rounded"/>
        </button>
        <span class="mr-2 ml-2" :data-test="`product-count-${index}`">
              {{ item.quantity }}
            </span>
        <button @click="this.$emit('onAddItem', index)"
                :data-test="`add-product-count-${index}`">
          <PlusCircleIcon class="inline h-7 w-7 cursor-pointer rounded"/>
        </button>
        <p class="mr-4 text-right text-bold text-xl"
           :data-test="`product-price-${index}`">
          {{ addComma(getProductPrice(item)) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/vue/outline';

export default {
  name: 'OrderCartItem',
  emits: ['onSubtractItem', 'onAddItem'],
  components: {
    PlusCircleIcon,
    MinusCircleIcon,
  },
  props: {
    cart: Array,
  },
  methods: {
    addComma(price) {
      if (!Number.isNaN(price)) {
        return `${price.toLocaleString('ko-KR')}원`;
      }
      return 0;
    },
    getProductPrice(item) {
      if (!item) return 0;
      let price = item.product.price * item.quantity;
      const {
        optionsInfo,
        options,
      } = item;
      for (let i = 0; i < optionsInfo.length; i += 1) {
        price += (optionsInfo[i].unitprice * (options[i].quantity - optionsInfo[i].baseQuantity));
      }
      return price;
    },
    goDetail(productNo) {
      this.$router.push(`/product/${productNo}`);
    },
  },
};
</script>

<style scoped>
.ProductSection {
  @apply ml-4 flex
}

.ProductImg {
  @apply h-20 w-20 ml-4 rounded-full cursor-pointer
}

.ProductText {
  @apply w-full ml-4 text-lg overflow-hidden text-ellipsis whitespace-nowrap
}

.ProductOption {
  @apply text-base text-gray-400
}

@media (max-width: 320px) {
  .ProductSection {
    @apply ml-2
  }

  .ProductImg {
    @apply h-16 w-16 ml-1
  }

  .ProductText {
    @apply ml-1 text-sm
  }

  .ProductOption {
    @apply text-sm text-gray-400
  }
}
</style>
