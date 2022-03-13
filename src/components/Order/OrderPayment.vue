<template>
  <header class="flex flex-col bg-green-700 text-white" data-test="payment-header">
    <button class="inline-block flex justify-start w-fit" @click="goBack">
      <i class="fas fa-arrow-left fa-2x m-1.5"/>
    </button>
    <p class="mt-4 ml-4 mb-4 text-3xl">결제하기</p>
  </header>
  <section class="flex flex-col w-full mt-8 items-center justify-center">
    <header class="w-full max-w-sm text-2xl text-left" data-test="payment-method">
      결제 수단
    </header>
    <div class="flex w-full mt-4 bg- max-w-sm justify-evenly">
      <div class="PaymentMethod"
           :class="{'bg-gray-200 font-bold': selected === 'credit'}"
           @click="selectPaymentMethod('credit')"
           @keydown="selectPaymentMethod('credit')"
           data-test="method-credit">
        신용카드
      </div>
      <div class="PaymentMethod"
           :class="{'bg-green-200 font-bold': selected === 'naverpay'}"
           @click="selectPaymentMethod('naverpay')"
           @keydown="selectPaymentMethod('naverpay')"
           data-test="method-naverpay">
        <img src="https://developer.pay.naver.com/static/img/logo_black.png"
             class="h-10 w-24 mb-2"
             alt="naver"/>
        <div>네이버페이</div>
      </div>
      <div class="PaymentMethod"
           :class="{'bg-yellow-200 font-bold': selected === 'kakaopay'}"
           @click="selectPaymentMethod('kakaopay')"
           @keydown="selectPaymentMethod('kakaopay')"
           data-test="method-kakaopay">
        <img
          src="https://developers.kakao.com/tool/resource/static/img/button/pay/payment_icon_yellow_medium.png"
          class="h-10 w-24 mb-2"
          alt="naver"/>
        카카오페이
      </div>
    </div>
    <section class="mt-12 text-xl text-center" data-test="summary">
      {{ firstItemName }} 포함 {{ itemCount }}건 {{ addComma(totalPrice) }} 결제합니다.
    </section>
    <button v-if="selected"
            class="DoPaymentButton"
            @click="doPayment"
            data-test="do-payment">
      {{ addComma(totalPrice) }} {{ paymentMethodNameKr[selected] }} 결제하기
    </button>
    <button v-else
            class="block h-14 w-72 mt-12 rounded border-2 text-xl rounded-2xl"
            data-test="do-payment-disabled">
      결제 수단을 선택해주세요
    </button>
  </section>

</template>

<script>
export default {
  name: 'OrderPayment',
  data() {
    return {
      selected: '',
      paymentMethodNameKr: {
        credit: '신용카드',
        naverpay: '네이버페이',
        kakaopay: '카카오페이',
      },
      cart: this.$store.state.cart || [],
      firstItemName: this.$store.state.cart.at(0).product.nameKr || '',
      itemCount: this.$store.state.cart.length,
      totalPrice: this.$store.getters.getTotalPrice,
    };
  },
  methods: {
    addComma(price) {
      return price ? `${price.toLocaleString('ko-KR')}원` : price;
    },
    goBack() {
      this.$router.back();
    },
    selectPaymentMethod(paymentMethod) {
      this.selected = paymentMethod;
    },
    doPayment() {
      this.$router.push('/complete');
    },
  },
};
</script>

<style scoped>
.PaymentMethod {
  @apply flex flex-col h-24 w-28 border-2 border-gray-400 justify-center items-center rounded
  select-none text-xl
}

.DoPaymentButton {
  @apply block h-14 w-72 mt-12 cursor-pointer rounded border-2 bg-green-600 text-white
  text-xl font-bold rounded-2xl
}
</style>
