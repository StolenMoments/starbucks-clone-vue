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
      <OrderCartItem :cart="cart" v-on:onSubtractItem="subtractItem" v-on:onAddItem="addItem"/>
    </section>
    <footer class="flex flex-col justify-start mt-4 border-t-2">
      <div class="flex justify-between mt-4 text-right text-2xl">
        <span class="ml-4">총 금액</span>
        <span class="mr-4" data-test="total-price">
          {{ addComma(getTotalPrice) }}
        </span>
      </div>
      <button class="OrderButton" @click="goPayment" data-test="do-order">
        주문하기
      </button>
    </footer>
  </section>
</template>

<script>
import RepositoryFactory from '@/components/Client/RepositoryFactory';
import OrderCartItem from '@/components/Order/OrderCartItem.vue';

const orderRepository = RepositoryFactory.get('order');

export default {
  name: 'OrderCart',
  components: {
    OrderCartItem,
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
    goBack() {
      this.$router.back();
    },
    subtractItem(index) {
      if (this.cart.at(index).quantity > 1) {
        this.cart.at(index).quantity -= 1;
      }
    },
    addItem(index) {
      this.cart.at(index).quantity += 1;
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
    async getProducts() {
      const response = await orderRepository.getProductsInCart();
      this.$data.cart = response.data.cart;
      this.$store.commit('setCart', response.data.cart);
      sessionStorage.setItem('cart', JSON.stringify(response.data.cart));
    },
    goPayment() {
      this.$router.push('/payment');
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
  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.OrderButton {
  @apply h-12 w-1/3 ml-auto mr-auto mt-4 bg-green-400 text-xl font-bold rounded-2xl
}

</style>
