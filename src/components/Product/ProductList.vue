<template>
  <main class="container flex flex-col">
    <section class="mt-8 ml-6">
      <span class="font-bold text-2xl" data-test="category-name">{{ categoryName }}</span>
    </section>
    <section v-for="product in products" :key="product.id" class="ProductSection">
      <img alt="product image" :src="product.img"
           class="ProductImg" data-test="product-img"/>
      <div class="ProductText">
        <div>
          <span class="font-bold" data-test="product-name">{{ product.name }}</span>
          <ProductSuperscript v-if="product.isBest" type="Best" data-test="product-superscript"/>
          <ProductSuperscript v-if="product.isNew" type="New" data-test="product-superscript"/>
        </div>
        <p class="text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap"
           data-test="product-eng-name">
          {{ product.engName }}
        </p>
        <p data-test="product-price">{{ addComma(product.price) }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import ProductSuperscript from '@/components/Product/ProductSuperscript.vue';

export default {
  name: 'ProductList',
  components: { ProductSuperscript },
  data() {
    return {
      categoryName: '콜드 브루',
      products: [
        {
          id: 1,
          img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437226.jpg',
          isBest: false,
          isNew: false,
          name: '콜드 브루 오트 라떼',
          engName: 'Cold Brew With Oat Milk',
          price: 5800,
        },
        {
          id: 2,
          img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133657016.jpg',
          isBest: false,
          isNew: true,
          name: '돌체 콜드 브루',
          engName: 'Dolce Cold Brew',
          price: 6000,
        },
        {
          id: 3,
          img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319174.jpg',
          isBest: true,
          isNew: true,
          name: '바닐라 크림 콜드 브루',
          engName: 'Vanilla Cream Cold Brew',
          price: 5800,
        },
        {
          id: 4,
          img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091844065.jpg',
          isBest: true,
          isNew: false,
          name: '나이트로 콜드 브루',
          engName: 'Nitro Cold Brew',
          price: 6800,
        },
        {
          id: 5,
          img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202595.jpg',
          isBest: false,
          isNew: false,
          name: '콜드 브루',
          engName: 'Cold Brew',
          price: 4500,
        },
        {
          id: 6,
          img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346334.jpg',
          isBest: true,
          isNew: false,
          name: '시그니처 더 블랙 콜드 브루',
          engName: 'Signature The Black Cold Brew',
          price: 7500,
        },
      ],
    };
  },
  methods: {
    addComma(price) {
      return price ? `${price.toLocaleString('ko-KR')}원` : price;
    },
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
    @apply ml-2.5
  }

  .ProductImg {
    @apply h-16 w-16
  }

  .ProductText {
    @apply ml-3
  }
}
</style>
