import OrderPayment from '@/components/Order/OrderPayment.vue';
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    cart: [
      {
        quantity: 2,
        cupSize: {
          optionNo: 2,
          name: 'Tall',
        },
        options: [],
        product: {
          productNo: 1,
          nameKr: '콜드 브루 오트 라떼',
          nameEng: 'Cold Brew With Oat Milk',
          isNewProduct: true,
          isHot: false,
          imgUrl: 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/cappuccino.jpg',
          price: 5800,
        },
        optionsInfo: [],
      },
    ],
  },
  getters: {
    getTotalPrice(state) {
      function getProductPrice(item) {
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
      }

      let totalPrice = 0;
      if (state.cart.length === 0) return 0;
      for (let i = 0; i < state.cart.length; i += 1) {
        const item = state.cart.at(i);
        totalPrice += getProductPrice(item);
      }
      return totalPrice;
    },
  },
});

describe('텍스트 렌더링 테스트', () => {
  const wrapper = mount(OrderPayment, {
    global: {
      plugins: [store],
    },
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('결제하기 헤더 텍스트', () => {
    const orderPaymentHeader = wrapper.get('[data-test="payment-header"]');
    expect(orderPaymentHeader.text())
      .toBe('결제하기');
  });

  test('결제 수단 텍스트', () => {
    const paymentMethod = wrapper.get('[data-test="payment-method"]');
    expect(paymentMethod.text())
      .toBe('결제 수단');
  });

  test('신용카드 텍스트', () => {
    const methodCredit = wrapper.get('[data-test="method-credit"]');
    expect(methodCredit.text())
      .toBe('신용카드');
  });

  test('네이버페이 텍스트', () => {
    const methodNaverpay = wrapper.get('[data-test="method-naverpay"]');
    expect(methodNaverpay.text())
      .toBe('네이버페이');
  });

  test('카카오페이 텍스트', () => {
    const methodKakaopay = wrapper.get('[data-test="method-kakaopay"]');
    expect(methodKakaopay.text())
      .toBe('카카오페이');
  });

  test('주문 내역 요약 텍스트', () => {
    const summary = wrapper.get('[data-test="summary"]');
    expect(summary.text())
      .toBe('콜드 브루 오트 라떼 포함 1건 11,600원 결제합니다.');
  });

  test('결제하기 버튼 신용카드 선택 시 텍스트', async () => {
    const methodCredit = wrapper.get('[data-test="method-credit"]');
    await methodCredit.trigger('click');
    const doPayment = wrapper.get('[data-test="do-payment"]');
    expect(doPayment.text())
      .toBe('11,600원 신용카드 결제하기');
  });

  test('결제하기 버튼 네이버페이 선택 시 텍스트', async () => {
    const methodNaverpay = wrapper.get('[data-test="method-naverpay"]');
    await methodNaverpay.trigger('click');
    const doPayment = wrapper.get('[data-test="do-payment"]');
    expect(doPayment.text())
      .toBe('11,600원 네이버페이 결제하기');
  });

  test('결제하기 버튼 카카오페이 선택 시 텍스트', async () => {
    const methodKakaopay = wrapper.get('[data-test="method-kakaopay"]');
    await methodKakaopay.trigger('click');
    const doPayment = wrapper.get('[data-test="do-payment"]');
    expect(doPayment.text())
      .toBe('11,600원 카카오페이 결제하기');
  });

  test('결제하기 버튼 비활성 상태 텍스트', () => {
    const newWrapper = mount(OrderPayment, {
      global: {
        plugins: [store],
      },
    });

    const doPaymentDisabled = newWrapper.get('[data-test="do-payment-disabled"]');
    expect(doPaymentDisabled.text())
      .toBe('결제 수단을 선택해주세요');
  });
});
