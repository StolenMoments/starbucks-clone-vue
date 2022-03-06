<template>
  <section class="flex h-full w-full flex-col place-content-evenly items-center">
    <section class="relative">
      <button class="absolute h-6 w-6 top-2 left-2 rounded-xl bg-gray-200" @click="goBack">
        <ArrowCircleLeftIcon/>
      </button>
      <img alt="coffee" class="h-80 w-full max-w-sm" :src="product.imgUrl"/>
      <button class="absolute h-6 w-6 top-2 right-2 rounded-xl bg-gray-200">
        <ShareIcon/>
      </button>
    </section>
    <section class="mt-4 flex w-full max-w-sm">
      <span class="text-2xl font-bold" data-test="product-name-kr">{{ product.nameKr }}</span>
      <ProductSuperscript v-if="product.isHot" type="Hot" data-test="superscript-hot"/>
      <ProductSuperscript v-if="product.isNewProduct" type="New" data-test="superscript-new"/>
    </section>
    <section class="mt-4 w-full max-w-sm" data-test="product-description">
      <p>
        {{ product.description }}
      </p>
    </section>
    <section class="mt-4 w-full max-w-sm">
      <span class="text-xl font-bold" data-test="product-price">{{ addComma(product.price) }}</span>
      <span class="text-xl font-bold">원</span>
    </section>
    <section class="mt-4 w-full max-w-sm">
      <button
        class="h-10 w-1/2 cursor-pointer rounded-l-3xl border-2 hover:bg-red-300 hover:text-white"
        data-test="hot-button"
      >
        HOT
      </button>
      <button
        class="h-10 w-1/2 cursor-pointer rounded-r-3xl border-2 hover:bg-blue-300 hover:text-white"
        data-test="ice-button"
      >
        ICE
      </button>
    </section>
    <section class="mt-4 w-full max-w-sm">
      <ProductDetailSizeButtons :cupSizes="product.cupSizes"/>
    </section>
    <section class="mt-4 w-full max-w-sm">
      <ProductDetailCupButtons/>
    </section>
    <section class="mt-4 w-full max-w-sm">
      <p class="font-bold">퍼스널 옵션</p>
      <div class="mt-1 flex" v-for="(option, index) in product.options" :key="option.optionNo">
        <p class="mr-auto" data-test="personal-option-name">{{ option.name }}</p>
        <div class="ml-auto">
          <button @click="subtractOptionQuantity(index)"
                  data-test="subtract-option-quantity">
            <MinusCircleIcon class="inline h-7 w-7 cursor-pointer rounded"
            />
          </button>
          <span class="mr-2 ml-2" data-test="personal-option-count">
            {{ option.quantity = option.quantity ? option.quantity : option.baseQuantity }}
          </span>
          <button @click="addOptionQuantity(index)"
                  data-test="add-option-quantity">
            <PlusCircleIcon class="inline h-7 w-7 cursor-pointer rounded"
            />
          </button>
        </div>
        <p class="hidden" data-test="personal-option-price">{{ option.unitprice }}</p>
      </div>
    </section>
    <hr class="mt-2 w-full max-w-sm border-t-4"/>
    <section class="mt-4 flex w-full max-w-sm">
      <div class="mr-auto">
        <button @click="subtractOrderQuantity"
                data-test="subtract-order-count">
          <MinusCircleIcon class="inline h-7 w-7 cursor-pointer"/>
        </button>
        <span class="mr-2 ml-2" data-test="order-quantity">{{ quantity }}</span>
        <button @click="addOrderQuantity" data-test="add-order-quantity">
          <PlusCircleIcon class="inline h-7 w-7 cursor-pointer"/>
        </button>
      </div>
      <p class="ml-auto text-2xl">
        <span data-test="total-price">{{ addComma(getTotalPrice) }}</span>
        <span>원</span>
      </p>
    </section>
    <section class="mt-4 flex w-full max-w-sm">
      <HeartIcon class="inline h-7 w-7 cursor-pointer" data-test="favorite"/>
      <div class="ml-auto">
        <button class="h-10 w-16 cursor-pointer rounded border-2"
                @click="addToCart"
                data-test="add-cart">
          담기
        </button>
        <button class="h-10 w-24 cursor-pointer rounded border-2 bg-green-400" data-test="do-order">
          주문하기
        </button>
      </div>
    </section>
  </section>
</template>

<script>
import {
  PlusCircleIcon,
  MinusCircleIcon,
  ArrowCircleLeftIcon,
} from '@heroicons/vue/outline';
import { HeartIcon, ShareIcon } from '@heroicons/vue/solid';
import ProductDetailSizeButtons from '@/components/Product/ProductDetailSizeButtons.vue';
import ProductDetailCupButtons from '@/components/Product/ProductDetailCupButtons.vue';
import ProductSuperscript from '@/components/Product/ProductSuperscript.vue';
import RepositoryFactory from '@/components/Client/RepositoryFactory';

const productRepository = RepositoryFactory.get('product');
const orderRepository = RepositoryFactory.get('order');

export default {
  name: 'ProductDetail',
  components: {
    ProductSuperscript,
    ProductDetailCupButtons,
    ProductDetailSizeButtons,
    PlusCircleIcon,
    MinusCircleIcon,
    HeartIcon,
    ArrowCircleLeftIcon,
    ShareIcon,
  },
  data() {
    return {
      product: {},
      quantity: 1,
    };
  },
  methods: {
    addComma(price) {
      if (price) {
        return price.toLocaleString('ko-KR');
      }
      return 0;
    },
    addOrderQuantity() {
      if (this.$data.quantity < 50) {
        this.$data.quantity += 1;
      }
    },
    subtractOrderQuantity() {
      if (this.$data.quantity > 1) {
        this.$data.quantity -= 1;
      }
    },
    addOptionQuantity(index) {
      this.$data.product.options.at(index).quantity += 1;
    },
    subtractOptionQuantity(index) {
      if (this.$data.product.options.at(index).quantity > 1) {
        this.$data.product.options.at(index).quantity -= 1;
      }
    },
    goBack() {
      this.$router.back();
    },
    addToCart() {
      const payload = {
        productNo: this.$data.product.productNo,
        quantity: this.$data.quantity,
        cupSize: 2,
        options: this.$data.product.options,
      };
      orderRepository.addProductToCart(payload);
      this.$router.push('/cart');
    },
  },
  computed: {
    getTotalPrice() {
      if (!this.$data.product.options) {
        return 0;
      }

      let totalPrice = this.product.price * this.$data.quantity;
      for (let i = 0; i < this.$data.product.options.length; i += 1) {
        const option = this.$data.product.options[i];
        if (!option.quantity) {
          option.quantity = option.baseQuantity;
        }
        if (option.quantity > option.baseQuantity) {
          totalPrice += option.unitprice * (option.quantity - option.baseQuantity);
        }
      }

      return totalPrice;
    },
  },
  async mounted() {
    const payload = {
      productNo: this.$route.params.id,
    };
    const response = await productRepository.getProduct(payload);
    this.$data.product = response.data.product;
  },
};
</script>

<style scoped></style>
