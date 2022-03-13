import OrderCart from '@/components/Order/OrderCart.vue';
import { flushPromises, mount } from '@vue/test-utils';

const testCartList = [
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
  }, {
    quantity: 2,
    cupSize: {
      name: 'Grande',
      optionNo: 3,
    },
    options: [
      {
        optionNo: 2,
        quantity: 3,
      }],
    product: {
      productNo: 1,
      nameKr: '돌체 콜드 브루',
      nameEng: 'Dolce Cold Brew',
      isNewProduct: true,
      isHot: false,
      imgUrl: 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/cappuccino.jpg',
      price: 6000,
    },
    optionsInfo: [
      {
        name: '돌체 시럽',
        unitprice: 600,
        baseQuantity: 0,
        optionNo: 2,
      }],
  }, {
    quantity: 1,
    cupSize: {
      optionNo: 4,
      name: 'Venti',
    },
    options: [
      {
        optionNo: 1,
        quantity: 2,
      }],
    product: {
      productNo: 3,
      nameKr: '카라멜 마끼아또',
      nameEng: 'Caramel Macchiato',
      isNewProduct: false,
      isHot: true,
      imgUrl: 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/cappuccino.jpg',
      price: 6000,
    },
    optionsInfo: [
      {
        name: '에스프레소 샷',
        unitprice: 600,
        baseQuantity: 1,
        optionNo: 1,
      }],
  }];

const mockGetProducts = jest.fn();
jest.mock(
  '@/components/Client/OrderRepository',
  () => jest.fn()
    .mockImplementation(() => ({
      getProductsInCart: jest.fn(() => ({
        data: {
          cart: testCartList,
        },
      })),
    })),
);

describe('텍스트 렌더링 테스트', () => {
  beforeEach(() => {
    mockGetProducts.mockResolvedValueOnce({ data: { cart: testCartList } });
  });
  afterEach(() => {
    mockGetProducts.mockClear();
  });

  const wrapper = mount(OrderCart, {
    data() {
      return {
        cart: [],
      };
    },
  });

  test('장바구니', () => {
    expect(wrapper.get('[data-test="cart-header"]')
      .text())
      .toBe('장바구니');
  });

  test('전체 선택', () => {
    expect(wrapper.get('[data-test="select-all"]')
      .text())
      .toBe('전체 선택');
  });

  test('선택 삭제', () => {
    expect(wrapper.get('[data-test="delete-selected"]')
      .text())
      .toBe('선택 삭제');
  });

  test('전체 삭제', () => {
    expect(wrapper.get('[data-test="delete-all"]')
      .text())
      .toBe('전체 삭제');
  });

  test('상품명 한글', () => {
    const productNames = wrapper.findAll('[data-test="product-name-kr"]');
    expect(productNames.at(0)
      .text())
      .toBe('콜드 브루 오트 라떼');
    expect(productNames.at(1)
      .text())
      .toBe('돌체 콜드 브루');
    expect(productNames.at(2)
      .text())
      .toBe('카라멜 마끼아또');
  });

  test('상품명 영문', () => {
    const productEngNames = wrapper.findAll('[data-test="product-name-eng"]');
    expect(productEngNames.at(0)
      .text())
      .toBe('Cold Brew With Oat Milk');
    expect(productEngNames.at(1)
      .text())
      .toBe('Dolce Cold Brew');
    expect(productEngNames.at(2)
      .text())
      .toBe('Caramel Macchiato');
  });

  test('기본 옵션', () => {
    const primaryOptions = wrapper.findAll('[data-test="primary-option"]');
    expect(primaryOptions.at(0)
      .text())
      .toBe('Tall');
    expect(primaryOptions.at(1)
      .text())
      .toBe('Grande');
    expect(primaryOptions.at(2)
      .text())
      .toBe('Venti');
  });

  test('퍼스널 옵션', () => {
    const personalOptions = wrapper.findAll('[data-test="personal-option"]');
    expect(personalOptions.at(0)
      .text())
      .toBe('돌체 시럽 | 3 | 1,800원');
    expect(personalOptions.at(1)
      .text())
      .toBe('에스프레소 샷 | 2 | 600원');
  });

  test('옵션변경', () => {
    expect(wrapper.get('[data-test="change-option"]')
      .text())
      .toBe('옵션변경');
  });

  test('단일 상품 가격', () => {
    const productPrices = [];
    for (let i = 0; i < 3; i += 1) {
      productPrices.push(wrapper.get(`[data-test="product-price-${i}"]`));
    }

    expect(productPrices.at(0)
      .text())
      .toBe('11,600원');
    expect(productPrices.at(1)
      .text())
      .toBe('13,800원');
    expect(productPrices.at(2)
      .text())
      .toBe('6,600원');
  });

  test('총 주문 가격', () => {
    expect(wrapper.get('[data-test="total-price"')
      .text())
      .toBe('32,000원');
  });

  test('주문하기', () => {
    expect(wrapper.get('[data-test="do-order"]')
      .text())
      .toBe('주문하기');
  });
});

// 미구현
describe('기능 테스트', () => {
  beforeEach(() => {
    mockGetProducts.mockResolvedValueOnce({ data: { cart: testCartList } });
  });
  afterEach(() => {
    mockGetProducts.mockClear();
  });

  const wrapper = mount(OrderCart, {
    data() {
      return {
        cart: [],
      };
    },
  });
  test('수량 조절', async () => {
    const subtractProductButton = wrapper.get('[data-test="subtract-product-count-0"]');
    const addProductButton = wrapper.get('[data-test="add-product-count-0"]');
    const productCount = wrapper.get('[data-test="product-count-0"]');
    const productPrice = wrapper.get('[data-test="product-price-0"]');

    await addProductButton.trigger('click');
    await addProductButton.trigger('click');
    await addProductButton.trigger('click');
    await subtractProductButton.trigger('click');
    await flushPromises();

    expect(Number(productCount.text()))
      .toEqual(4);
    expect(productPrice.text())
      .toBe('23,200원');
  });
  test('전체 선택', () => {

  });
  test('선택 삭제', () => {

  });
  test('전체 삭제', () => {

  });
  test('단일 상품 선택', () => {

  });
  test('옵션 변경', () => {

  });
});
