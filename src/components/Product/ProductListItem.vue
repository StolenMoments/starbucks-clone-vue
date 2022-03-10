<template>
  <section v-for="(product, index) in products" :key="index" class="ProductSection"
           @click="goDetail(product.productNo)" @keydown="goDetail(product.productNo)">
    <img alt="product image" :src="product.imgUrl"
         class="ProductImg" data-test="product-img"/>
    <div class="ProductText">
      <div>
        <span class="font-bold" data-test="product-name-kr">{{ product.nameKr }}</span>
        <ProductSuperscript v-if="product.isHot" type="Hot" data-test="superscript-hot"/>
        <ProductSuperscript v-if="product.isNewProduct" type="New" data-test="superscript-new"/>
      </div>
      <p class="text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap"
         data-test="product-name-eng">
        {{ product.nameEng }}
      </p>
      <p data-test="product-price">{{ addComma(product.price) }}</p>
    </div>
  </section>
</template>

<script>
import ProductSuperscript from '@/components/Product/ProductSuperscript.vue';

export default {
  name: 'ProductListItem',
  components: {
    ProductSuperscript,
  },
  props: {
    products: Array,
  },
  methods: {
    addComma(price) {
      return price ? `${price.toLocaleString('ko-KR')}원` : price;
    },
    goDetail(productNo) {
      this.$router.push(`/product/${productNo}`);
    },
  },
};
</script>

<style scoped>
.ProductSection {
  @apply ml-4 mt-6 flex items-center cursor-pointer hover:bg-gray-100
}

.ProductImg {
  @apply h-20 w-20 rounded-full
}

.ProductText {
  @apply ml-4 text-lg overflow-hidden text-ellipsis whitespace-nowrap
}

@media (max-width: 320px) {
  .ProductSection {
    @apply ml-2
  }

  .ProductImg {
    @apply h-16 w-16
  }

  .ProductText {
    @apply ml-2.5
  }
}
</style>
