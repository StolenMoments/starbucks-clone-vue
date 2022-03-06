<template>
  <section>
    <header class="flex flex-col bg-green-700 text-white" data-test="cart-header">
      <button class="inline-block flex justify-start w-fit" @click="goBack">
        <i class="fas fa-arrow-left fa-2x m-1.5"/>
      </button>
      <p class="mt-4 ml-4 mb-4 text-3xl">장바구니</p>
    </header>
    <section class="flex justify-between mt-4">
      <label for="selectAll" data-test="select-all">
        <input id="selectAll" class="ml-2 mr-2" type="checkbox">전체 선택
      </label>
      <div class="inline mr-2">
        <span data-test="delete-selected">선택 삭제</span>
        |
        <span data-test="delete-all">전체 삭제</span>
      </div>
    </section>
    <section class="mt-6">
      <section v-for="(item, index) in cart" :key="index" class="ProductSection">
        <label :for="item.product.productNo">
          <input :id="item.product.productNo" type="checkbox" data-test="select-product">
        </label>
        <img alt="product image" :src="item.product.imgUrl"
             class="ProductImg" data-test="product-img"/>
        <div class="ProductText">
          <span class="font-bold" data-test="product-name-kr">{{ item.product.nameKr }}</span>
          <p class="text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap"
             data-test="product-name-eng">
            {{ item.product.nameEng }}
          </p>
          <p class="ProductOption" data-test="primary-option">
            {{ item.cupSize.name }}
          </p>
          <p class="ProductOption" v-for="(option, index) in item.optionsInfo" :key="index"
             data-test="personal-option">
            {{ option.name }} | {{ item.options.at(index).quantity }} |
            {{
              addComma(option.unitprice * (item.options.at(index).quantity - option.baseQuantity))
            }}
          </p>
          <button class="font-bold text-blue-500 text-base underline" data-test="change-option">
            옵션변경
          </button>
          <div>
            <button @click="item.quantity -=1"
                    :disabled="item.quantity <= 1"
                    :data-test="`subtract-product-count-${index}`">
              <MinusCircleIcon class="inline h-7 w-7 cursor-pointer rounded"/>
            </button>
            <span class="mr-2 ml-2" :data-test="`product-count-${index}`">
              {{ item.quantity }}
            </span>
            <button @click="item.quantity += 1"
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
    </section>
    <footer class="flex flex-col justify-start mt-4 border-t-2">
      <div class="flex justify-between mt-4 text-right text-2xl">
        <span class="ml-4">총 금액</span>
        <span class="mr-4" data-test="total-price">
          {{ addComma(getTotalPrice) }}
        </span>
      </div>
      <button class="OrderButton" data-test="do-order">
        주문하기
      </button>
    </footer>
  </section>
</template>

<script>
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/vue/outline';
import RepositoryFactory from '@/components/Client/RepositoryFactory';

const orderRepository = RepositoryFactory.get('order');

export default {
  name: 'OrderCart',
  components: {
    PlusCircleIcon,
    MinusCircleIcon,
  },
  checked: [],
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    addComma(price) {
      return price ? `${price.toLocaleString('ko-KR')}원` : price;
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
    goBack() {
      this.$router.back();
    },
  },
  computed: {
    getTotalPrice() {
      let totalPrice = 0;
      if (!this.$data.cart) return 0;
      for (let i = 0; i < this.$data.cart.length; i += 1) {
        const item = this.$data.cart.at(i);
        totalPrice += this.getProductPrice(item);
      }
      return totalPrice;
    },
  },
  async mounted() {
    const response = await orderRepository.getProductsInCart();
    this.$data.cart = response.data.cart;
  },
};
</script>

<style scoped>
.ProductSection {
  @apply ml-4 flex
}

.ProductImg {
  @apply h-20 w-20 ml-4 rounded-full
}

.ProductText {
  @apply w-full ml-4 text-lg overflow-hidden text-ellipsis whitespace-nowrap
}

.ProductOption {
  @apply text-base text-gray-400
}

.OrderButton {
  @apply h-12 w-1/3 ml-auto mr-auto mt-4 bg-green-400 text-xl font-bold rounded-2xl
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
