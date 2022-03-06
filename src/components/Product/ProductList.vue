<template>
  <section class="container flex flex-col">
    <section class="mt-8 ml-6">
      <span class="font-bold text-2xl" data-test="category-name">{{ categoryName }}</span>
    </section>
    <section v-for="(product, index) in products" :key="index" class="ProductSection">
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
  </section>
</template>

<script>
import ProductSuperscript from '@/components/Product/ProductSuperscript.vue';
import ProductRepository from '@/components/Client/ProductRepository';

const productRepository = new ProductRepository();

export default {
  name: 'ProductList',
  components: { ProductSuperscript },
  data() {
    return {
      categoryName: '콜드 브루',
      products: [],
    };
  },
  methods: {
    addComma(price) {
      return price ? `${price.toLocaleString('ko-KR')}원` : price;
    },
  },
  async mounted() {
    const response = await productRepository.getProducts();
    this.$data.products = response.data.products;
  },
};
</script>

<style lang="postcss" scoped>
.ProductSection {
  @apply ml-4 mt-6 flex items-center
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
