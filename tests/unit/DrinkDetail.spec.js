import { mount, shallowMount } from '@vue/test-utils';
import DrinkDetail from '@/components/Product/Drink/DrinkDetail.vue';

describe('음료 정보', () => {
  const wrapper = mount(DrinkDetail, {
    data() {
      return {
        drink: {
          name: '카페 라떼',
          price: 5000,
          desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
          size: {
            Short: true,
            Tall: true,
            Grande: true,
            Venti: true,
          },
          options: [
            {
              name: '에스프레소 샷',
              price: 500,
              count: 1,
            }],
        },
        orderCount: 1,
      };
    },
  });

  test('음료 이름을 보여준다.', () => {
    const drinkName = wrapper.get('[data-test="drink-name"]');

    expect(drinkName.text())
      .toBe('카페 라떼');
  });

  test('음료 설명을 보여준다.', () => {
    const drinkDesc = wrapper.get('[data-test="drink-desc"]');

    expect(drinkDesc.text())
      .toContain('풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진');
    expect(drinkDesc.text())
      .toContain('커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼');
  });

  test('음료 가격을 보여준다.', () => {
    const drinkPrice = wrapper.get('[data-test="drink-price"]');

    expect(drinkPrice.text())
      .toBe('5,000');
  });
});

describe('음료 위첨자 표시', () => {
  test('인기 메뉴 위첨자', () => {
    const wrapper = mount(DrinkDetail, {
      data() {
        return {
          drink: {
            name: '카페 라떼',
            isBest: true,
            isNew: false,
            price: 5000,
            desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            size: {
              Short: true,
              Tall: true,
              Grande: true,
              Venti: true,
            },
            options: [
              {
                name: '에스프레소 샷',
                price: 500,
                count: 1,
              }],
          },
          orderCount: 1,
        };
      },
    });

    expect(wrapper.get('[data-test="superscript-best"]')
      .text())
      .toBe('Best');
  });

  test('신 메뉴 위첨자', () => {
    const wrapper = mount(DrinkDetail, {
      data() {
        return {
          drink: {
            name: '카페 라떼',
            isBest: false,
            isNew: true,
            price: 5000,
            desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            size: {
              Short: true,
              Tall: true,
              Grande: true,
              Venti: true,
            },
            options: [
              {
                name: '에스프레소 샷',
                price: 500,
                count: 1,
              }],
          },
          orderCount: 1,
        };
      },
    });

    expect(wrapper.get('[data-test="superscript-new"]')
      .text())
      .toBe('New');
  });
});

describe('음료 온도 선택 버튼', () => {
  const wrapper = shallowMount(DrinkDetail);
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
      .toBe('ICE');
  });
});

describe('음료 사이즈 종류', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  let wrapper;
  const sizeList = ['Short', 'Tall', 'Grande', 'Venti'];
  const isActive = (classList) => {
    expect(classList.contains('cursor-pointer'))
      .toBe(true);
    expect(classList.contains('hover:bg-green-300'))
      .toBe(true);
    expect(classList.contains('cursor-auto'))
      .toBe(false);
    expect(classList.contains('text-gray-200'))
      .toBe(false);
  };
  const isInactive = (classList) => {
    expect(classList.contains('cursor-pointer'))
      .toBe(false);
    expect(classList.contains('hover:bg-green-300'))
      .toBe(false);
    expect(classList.contains('cursor-auto'))
      .toBe(true);
    expect(classList.contains('text-gray-200'))
      .toBe(true);
  };

  test('4가지 사이즈 모두 가능한 케이스', () => {
    wrapper = mount(DrinkDetail, {
      data() {
        return {
          drink: {
            name: '카페 라떼',
            price: 5000,
            desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            size: {
              Short: true,
              Tall: true,
              Grande: true,
              Venti: true,
            },
            options: [
              {
                name: '에스프레소 샷',
                price: 500,
                count: 1,
              }],
          },
          orderCount: 1,
        };
      },
    });

    for (let i = 0; i < sizeList.length; i += 1) {
      const sizeElement = wrapper.get(`[data-test="${sizeList[i]}"]`);

      expect(sizeElement.text())
        .toBe(sizeList[i]);
      isActive(sizeElement.element.classList);
    }
  });

  test('3가지 사이즈 가능한 케이스', () => {
    wrapper = mount(DrinkDetail, {
      data() {
        return {
          drink: {
            name: '카페 라떼',
            price: 5000,
            desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            size: {
              Short: true,
              Tall: true,
              Grande: true,
              Venti: false,
            },
            options: [
              {
                name: '에스프레소 샷',
                price: 500,
                count: 1,
              }],
          },
          orderCount: 1,
        };
      },
    });

    for (let i = 0; i < sizeList.length; i += 1) {
      const sizeElement = wrapper.get(`[data-test="${sizeList[i]}"]`);

      expect(sizeElement.text())
        .toBe(sizeList[i]);

      if (sizeList[i] === 'Venti') {
        isInactive(sizeElement.element.classList);
      } else {
        isActive(sizeElement.element.classList);
      }
    }
  });

  test('2가지 사이즈 가능한 케이스', () => {
    wrapper = mount(DrinkDetail, {
      data() {
        return {
          drink: {
            name: '카페 라떼',
            price: 5000,
            desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            size: {
              Short: false,
              Tall: true,
              Grande: true,
              Venti: false,
            },
            options: [
              {
                name: '에스프레소 샷',
                price: 500,
                count: 1,
              }],
          },
          orderCount: 1,
        };
      },
    });

    for (let i = 0; i < sizeList.length; i += 1) {
      const sizeElement = wrapper.get(`[data-test="${sizeList[i]}"]`);

      expect(sizeElement.text())
        .toBe(sizeList[i]);

      if (sizeList[i] === 'Short' || sizeList[i] === 'Venti') {
        isInactive(sizeElement.element.classList);
      } else {
        isActive(sizeElement.element.classList);
      }
    }
  });

  test('1가지 사이즈 가능한 케이스', () => {
    wrapper = mount(DrinkDetail, {
      data() {
        return {
          drink: {
            name: '카페 라떼',
            price: 5000,
            desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            size: {
              Short: false,
              Tall: false,
              Grande: true,
              Venti: false,
            },
            options: [
              {
                name: '에스프레소 샷',
                price: 500,
                count: 1,
              }],
          },
          orderCount: 1,
        };
      },
    });

    for (let i = 0; i < sizeList.length; i += 1) {
      const sizeElement = wrapper.get(`[data-test="${sizeList[i]}"]`);

      expect(sizeElement.text())
        .toBe(sizeList[i]);

      if (sizeList[i] === 'Grande') {
        isActive(sizeElement.element.classList);
      } else {
        isInactive(sizeElement.element.classList);
      }
    }
  });
});

describe('컵 옵션 3가지', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(DrinkDetail, {
      data() {
        return {
          drink: {
            name: '카페 라떼',
            price: 5000,
            desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            size: {
              Short: true,
              Tall: true,
              Grande: true,
              Venti: false,
            },
            options: [
              {
                name: '에스프레소 샷',
                price: 500,
                count: 1,
              }],
          },
          orderCount: 1,
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
    wrapper = shallowMount(DrinkDetail, {
      data() {
        return {
          drink: {
            name: '카페 라떼',
            price: 5000,
            desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            size: {
              Short: true,
              Tall: true,
              Grande: true,
              Venti: false,
            },
            options: [
              {
                name: '에스프레소 샷',
                price: 500,
                count: 1,
              }],
          },
          orderCount: 1,
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
    const addOptionCount = wrapper.get('[data-test="add-option-count"]');

    await addOptionCount.trigger('click');
    await wrapper.vm.$nextTick();
    expect(Number(personalOptionCount.text()))
      .toEqual(2);
  });
});

describe('총 금액 계산', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(DrinkDetail, {
      data() {
        return {
          drink: {
            name: '카페 라떼',
            price: 5000,
            desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            size: {
              Short: true,
              Tall: true,
              Grande: true,
              Venti: false,
            },
            options: [
              {
                name: '에스프레소 샷',
                price: 500,
                count: 1,
              }],
          },
          orderCount: 1,
        };
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('1개 주문', () => {
    const totalPrice = wrapper.get('[data-test="total-price"]');
    const orderCount = wrapper.get('[data-test="order-count"]');

    expect(Number(orderCount.text()))
      .toEqual(1);

    expect(totalPrice.text())
      .toBe('5,000');
  });

  test('3개 주문', async () => {
    const totalPrice = wrapper.get('[data-test="total-price"]');
    const orderCount = wrapper.get('[data-test="order-count"]');
    const addOrderCount = wrapper.get('[data-test="add-order-count"]');

    await addOrderCount.trigger('click');
    await addOrderCount.trigger('click');

    await wrapper.vm.$nextTick();

    expect(Number(orderCount.text()))
      .toEqual(3);

    expect(totalPrice.text())
      .toBe('15,000');
  });

  test('3개 주문 + 옵션 1개 더 추가', async () => {
    const totalPrice = wrapper.get('[data-test="total-price"]');
    const orderCount = wrapper.get('[data-test="order-count"]');
    const addOrderCount = wrapper.get('[data-test="add-order-count"]');
    const addOptionCount = wrapper.get('[data-test="add-option-count"]');

    await addOrderCount.trigger('click');
    await addOrderCount.trigger('click');
    await addOptionCount.trigger('click');
    await wrapper.vm.$nextTick();
    expect(Number(orderCount.text()))
      .toEqual(3);

    expect(totalPrice.text())
      .toBe('15,500');
  });
});

describe('즐겨찾기, 담기, 주문하기 버튼', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(DrinkDetail, {
      data() {
        return {
          drink: {
            name: '카페 라떼',
            price: 5000,
            desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
            size: {
              Short: true,
              Tall: true,
              Grande: true,
              Venti: false,
            },
            options: [
              {
                name: '에스프레소 샷',
                price: 500,
                count: 1,
              }],
          },
          orderCount: 1,
        };
      },
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('즐겨찾기 버튼이 보여진다.', () => {
    const favorite = wrapper.get('[data-test="favorite"]');

    expect(favorite.element.tagName)
      .toBe('HEART-ICON-STUB');
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
