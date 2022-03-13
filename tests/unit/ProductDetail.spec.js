import { mount, shallowMount } from '@vue/test-utils';
import ProductDetail from '@/components/Product/ProductDetail.vue';

describe('음료 정보', () => {
  const wrapper = mount(ProductDetail, {
    data() {
      return {
        product: {
          nameKr: '카페 라떼',
          price: 5000,
          description: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
          cupSizes: [
            {
              name: 'Short',
              iconSize: 'text-sm',
              optionNo: 1,
            },
            {
              optionNo: 2,
              name: 'Tall',
              iconSize: 'text-md',
            },
          ],
          category: 2,
          options: [
            {
              name: '에스프레소 샷',
              unitprice: 500,
              count: 1,
              baseQuantity: 1,
              optionNo: 1,
              quantity: 1,
            }],
        },
        quantity: 1,
      };
    },
  });

  test('음료 이름을 보여준다.', () => {
    const productName = wrapper.get('[data-test="product-name-kr"]');

    expect(productName.text())
      .toBe('카페 라떼');
  });

  test('음료 설명을 보여준다.', () => {
    const productDesc = wrapper.get('[data-test="product-description"]');

    expect(productDesc.text())
      .toContain('풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진');
    expect(productDesc.text())
      .toContain('커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼');
  });

  test('음료 가격을 보여준다.', () => {
    const productPrice = wrapper.get('[data-test="product-price"]');

    expect(productPrice.text())
      .toBe('5,000');
  });
});

describe('음료 위첨자 표시', () => {
  test('인기 메뉴 위첨자', () => {
    const wrapper = mount(ProductDetail, {
      data() {
        return {
          product: {
            nameKr: '카페 라떼',
            price: 5000,
            isHot: true,
            isNewProduct: false,
            description: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            cupSizes: [
              {
                name: 'Short',
                iconSize: 'text-sm',
                optionNo: 1,
              },
              {
                optionNo: 2,
                name: 'Tall',
                iconSize: 'text-md',
              },
            ],
            category: 2,
            options: [
              {
                name: '에스프레소 샷',
                unitprice: 500,
                count: 1,
                baseQuantity: 1,
                optionNo: 1,
                quantity: 1,
              }],
          },
          quantity: 1,
        };
      },
    });

    expect(wrapper.get('[data-test="superscript-hot"]')
      .text())
      .toBe('Hot');
  });

  test('신 메뉴 위첨자', () => {
    const wrapper = mount(ProductDetail, {
      data() {
        return {
          product: {
            nameKr: '카페 라떼',
            price: 5000,
            isHot: true,
            isNewProduct: true,
            description: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            cupSizes: [
              {
                name: 'Short',
                iconSize: 'text-sm',
                optionNo: 1,
              },
              {
                optionNo: 2,
                name: 'Tall',
                iconSize: 'text-md',
              },
            ],
            category: 2,
            options: [
              {
                name: '에스프레소 샷',
                unitprice: 500,
                count: 1,
                baseQuantity: 1,
                optionNo: 1,
                quantity: 1,
              }],
          },
          quantity: 1,
        };
      },
    });

    expect(wrapper.get('[data-test="superscript-new"]')
      .text())
      .toBe('New');
  });
});

describe('음료 온도 선택 버튼', () => {
  const wrapper = shallowMount(ProductDetail);
  test('HOT 버튼을 보여준다.', () => {
    const hotButton = wrapper.get('[data-test="hot-button"]');

    expect(hotButton.element.tagName)
      .toBe('BUTTON');

    expect(hotButton.text())
      .toBe('HOT');
  });

  test('ICE 버튼을 보여준다.', () => {
    const iceButton = wrapper.get('[data-test="ice-button"]');

    expect(iceButton.element.tagName)
      .toBe('BUTTON');

    expect(iceButton.text())
      .toBe('ICED');
  });
});

describe('음료 사이즈 종류', () => {
  // 구조를 전부 리팩토링 해야함
});

describe('컵 옵션 3가지', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(ProductDetail, {
      data() {
        return {
          product: {
            nameKr: '카페 라떼',
            price: 5000,
            isHot: true,
            isNewProduct: true,
            description: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            cupSizes: [
              {
                name: 'Short',
                iconSize: 'text-sm',
                optionNo: 1,
              },
              {
                optionNo: 2,
                name: 'Tall',
                iconSize: 'text-md',
              },
            ],
            category: 2,
            options: [
              {
                name: '에스프레소 샷',
                unitprice: 500,
                count: 1,
                baseQuantity: 1,
                optionNo: 1,
                quantity: 1,
              }],
          },
          quantity: 1,
        };
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('매장컵 버튼을 보여준다.', () => {
    const storeCupButton = wrapper.get('[data-test="store-cup"]');

    expect(storeCupButton.element.tagName)
      .toBe('BUTTON');

    expect(storeCupButton.text())
      .toBe('매장컵');
  });

  test('개인컵 버튼을 보여준다.', () => {
    const personalCupButton = wrapper.get('[data-test="personal-cup"]');

    expect(personalCupButton.element.tagName)
      .toBe('BUTTON');

    expect(personalCupButton.text())
      .toBe('개인컵');
  });

  test('일회용컵 버튼을 보여준다.', () => {
    const disposableCupButton = wrapper.get('[data-test="disposable-cup"]');

    expect(disposableCupButton.element.tagName)
      .toBe('BUTTON');

    expect(disposableCupButton.text())
      .toBe('일회용컵');
  });
});

describe('음료 퍼스널 옵션', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(ProductDetail, {
      data() {
        return {
          product: {
            nameKr: '카페 라떼',
            price: 5000,
            isHot: true,
            isNewProduct: true,
            description: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            cupSizes: [
              {
                name: 'Short',
                iconSize: 'text-sm',
                optionNo: 1,
              },
              {
                optionNo: 2,
                name: 'Tall',
                iconSize: 'text-md',
              },
            ],
            category: 2,
            options: [
              {
                name: '에스프레소 샷',
                unitprice: 500,
                count: 1,
                baseQuantity: 1,
                optionNo: 1,
                quantity: 1,
              }],
          },
          quantity: 1,
        };
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('퍼스널 옵션 내용', () => {
    const personalOptionName = wrapper.get('[data-test="personal-option-name"]');

    expect(personalOptionName.text())
      .toBe('에스프레소 샷');
  });

  test('퍼스널 옵션 가격', () => {
    const personalOptionPrice = wrapper.get('[data-test="personal-option-price"]');

    expect(personalOptionPrice.text())
      .toBe('500');
  });

  test('퍼스널 옵션 1개 추가', async () => {
    const personalOptionCount = wrapper.get('[data-test="personal-option-count"]');
    const addOptionCount = wrapper.get('[data-test="add-option-quantity"]');

    addOptionCount.trigger('click');
    await wrapper.vm.$nextTick();
    expect(Number(personalOptionCount.text()))
      .toEqual(2);
  });
});

describe('총 금액 계산', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ProductDetail, {
      data() {
        return {
          product: {
            nameKr: '카페 라떼',
            price: 5000,
            isHot: true,
            isNewProduct: true,
            description: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            cupSizes: [
              {
                name: 'Short',
                iconSize: 'text-sm',
                optionNo: 1,
              },
              {
                optionNo: 2,
                name: 'Tall',
                iconSize: 'text-md',
              },
            ],
            category: 2,
            options: [
              {
                name: '에스프레소 샷',
                unitprice: 500,
                count: 1,
                baseQuantity: 1,
                optionNo: 1,
                quantity: 1,
              }],
          },
          quantity: 1,
        };
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('1개 주문', () => {
    const totalPrice = wrapper.get('[data-test="total-price"]');
    const orderCount = wrapper.get('[data-test="order-quantity"]');

    expect(Number(orderCount.text()))
      .toEqual(1);

    expect(totalPrice.text())
      .toBe('5,000');
  });

  test('3개 주문', async () => {
    const totalPrice = wrapper.get('[data-test="total-price"]');
    const orderCount = wrapper.get('[data-test="order-quantity"]');
    const addOrderCount = wrapper.get('[data-test="add-order-quantity"]');

    await addOrderCount.trigger('click');
    await addOrderCount.trigger('click');

    expect(Number(orderCount.text()))
      .toEqual(3);

    expect(totalPrice.text())
      .toBe('15,000');
  });

  test('3개 주문 + 옵션 1개 더 추가', async () => {
    const totalPrice = wrapper.get('[data-test="total-price"]');
    const orderCount = wrapper.get('[data-test="order-quantity"]');
    const addOrderCount = wrapper.get('[data-test="add-order-quantity"]');
    const addOptionCount = wrapper.get('[data-test="add-option-quantity"]');

    await addOrderCount.trigger('click');
    await addOrderCount.trigger('click');
    await addOptionCount.trigger('click');
    expect(Number(orderCount.text()))
      .toEqual(3);

    expect(totalPrice.text())
      .toBe('15,500');
  });
});

describe('즐겨찾기, 담기, 주문하기 버튼', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(ProductDetail, {
      data() {
        return {
          product: {
            nameKr: '카페 라떼',
            price: 5000,
            isHot: true,
            isNewProduct: true,
            description: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            cupSizes: [
              {
                name: 'Short',
                iconSize: 'text-sm',
                optionNo: 1,
              },
              {
                optionNo: 2,
                name: 'Tall',
                iconSize: 'text-md',
              },
            ],
            category: 2,
            options: [
              {
                name: '에스프레소 샷',
                unitprice: 500,
                count: 1,
                baseQuantity: 1,
                optionNo: 1,
                quantity: 1,
              }],
          },
          quantity: 1,
        };
      },
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('담기 버튼이 보여진다', () => {
    const addCart = wrapper.get('[data-test="add-cart"]');

    expect(addCart.text())
      .toBe('담기');
  });

  test('주문하기 버튼이 보여진다.', () => {
    const doOrder = wrapper.get('[data-test="do-order"]');

    expect(doOrder.text())
      .toBe('주문하기');
  });
});
