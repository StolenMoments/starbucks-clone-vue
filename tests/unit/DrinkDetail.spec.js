import { shallowMount } from '@vue/test-utils';
import DrinkDetail from '@/components/product/DrinkDetail.vue';

test('음료 이름을 보여준다.', () => {
  const wrapper = shallowMount(DrinkDetail, {
    data() {
      return {
        drink: {
          name: '카페 라떼',
          price: 5000,
          desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
          size: ['Short', 'Tall', 'Grande', 'Venti'],
          options: [
            {
              name: '에스프레소 샷',
              price: 500,
            }],
        },
      };
    },
  });
  const drinkName = wrapper.get('[data-test="drink-name"]');

  expect(drinkName.text())
    .toBe('카페 라떼');
});

test('음료 설명을 보여준다.', () => {
  const wrapper = shallowMount(DrinkDetail, {
    data() {
      return {
        drink: {
          name: '카페 라떼',
          price: 5000,
          desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
          size: ['Short', 'Tall', 'Grande', 'Venti'],
          options: [
            {
              name: '에스프레소 샷',
              price: 500,
            }],
        },
      };
    },
  });
  const drinkDesc = wrapper.get('[data-test="drink-desc"]');

  expect(drinkDesc.text())
    .toContain('풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진');
  expect(drinkDesc.text())
    .toContain('커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼');
});

test('음료 가격을 보여준다.', () => {
  const wrapper = shallowMount(DrinkDetail, {
    data() {
      return {
        drink: {
          name: '카페 라떼',
          price: 5000,
          desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
          size: ['Short', 'Tall', 'Grande', 'Venti'],
          options: [
            {
              name: '에스프레소 샷',
              price: 500,
            }],
        },
      };
    },
  });
  const drinkPrice = wrapper.get('[data-test="drink-price"]');

  expect(drinkPrice.text())
    .toBe('5,000');
});

test('HOT 버튼을 보여준다.', () => {
  const wrapper = shallowMount(DrinkDetail, {
    data() {
      return {
        drink: {
          name: '카페 라떼',
          price: 5000,
          desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
          size: ['Short', 'Tall', 'Grande', 'Venti'],
          options: [
            {
              name: '에스프레소 샷',
              price: 500,
            }],
        },
      };
    },
  });
  const hotButton = wrapper.get('[data-test="hot-button"]');

  expect(hotButton.element.tagName)
    .toBe('BUTTON');

  expect(hotButton.text())
    .toBe('HOT');
});

test('ICE 버튼을 보여준다.', () => {
  const wrapper = shallowMount(DrinkDetail, {
    data() {
      return {
        drink: {
          name: '카페 라떼',
          price: 5000,
          desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
          size: ['Short', 'Tall', 'Grande', 'Venti'],
          options: [
            {
              name: '에스프레소 샷',
              price: 500,
            }],
        },
      };
    },
  });
  const iceButton = wrapper.get('[data-test="ice-button"]');

  expect(iceButton.element.tagName)
    .toBe('BUTTON');

  expect(iceButton.text())
    .toBe('ICE');
});

describe('음료 사이즈 종류', () => {
  test('4가지 사이즈 모두 가능한 케이스', () => {
    // 1. 리스트에 있는 사이즈를 순회해서 버튼을 활성화 시킴
    // 2. 활성화가 되었는지 테스트

    // 테스트 에러 발생으로 작성 보류
    //   TypeError: Cannot read properties of null (reading 'classList')
    //
    //   141 |         const sizeButton = document.getElementById(validSize);
    //   142 |         console.log(sizeButton);
    // > 143 |         sizeButton.classList.remove('text-gray-200');
  });

  test('3가지 사이즈 가능한 케이스', () => {
    // 1. 리스트에 있는 사이즈를 순회해서 버튼을 활성화 시킴
    // 2. 활성화가 되었는지 테스트
  });

  test('2가지 사이즈 가능한 케이스', () => {
    // 1. 리스트에 있는 사이즈를 순회해서 버튼을 활성화 시킴
    // 2. 활성화가 되었는지 테스트
  });

  test('1가지 사이즈 가능한 케이스', () => {
    // 1. 리스트에 있는 사이즈를 순회해서 버튼을 활성화 시킴
    // 2. 활성화가 되었는지 테스트
  });
});

describe('컵 옵션 3가지', () => {
  const wrapper = shallowMount(DrinkDetail, {
    data() {
      return {
        drink: {
          name: '카페 라떼',
          price: 5000,
          desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
          size: ['Short', 'Tall', 'Grande', 'Venti'],
          options: [
            {
              name: '에스프레소 샷',
              price: 500,
            }],
        },
      };
    },
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
  const wrapper = shallowMount(DrinkDetail, {
    data() {
      return {
        drink: {
          name: '카페 라떼',
          price: 5000,
          desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
          size: ['Short', 'Tall', 'Grande', 'Venti'],
          options: [
            {
              name: '에스프레소 샷',
              price: 500,
            }],
        },
      };
    },
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

  test('퍼스널 옵션 1개 추가', () => {
    const personalOptionPrice = wrapper.get('[data-test="personal-option-price"]');

    expect(personalOptionPrice.text())
      .toBe('1,000');
  });
});

describe('총 금액 계산', () => {
  const wrapper = shallowMount(DrinkDetail, {
    data() {
      return {
        drink: {
          name: '카페 라떼',
          price: 5000,
          desc: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
          size: ['Short', 'Tall', 'Grande', 'Venti'],
          options: [
            {
              name: '에스프레소 샷',
              price: 500,
            }],
        },
      };
    },
  });

  test('기본 가격', () => {
    const totalPrice = wrapper.get('[data-test="personal-option-name"]');

    expect(totalPrice.text())
      .toBe('5,000');
  });

  test('3개 주문', () => {
    const totalPrice = wrapper.get('[data-test="personal-option-price"]');

    expect(totalPrice.text())
      .toBe('15,000');
  });

  test('3개 주문 + 옵션 1개 더 추가', () => {
    const totalPrice = wrapper.get('[data-test="total-price"]');

    expect(totalPrice.text())
      .toBe('15,500');
  });
});

describe('즐겨찾기, 담기, 주문하기 버튼', () => {
  const wrapper = shallowMount(DrinkDetail);

  test('즐겨찾기 버튼이 보여진다.', () => {
    const favorite = wrapper.get('[data-test="favorite"]');

    expect(favorite.element.tagName)
      .toBe('HEARTICON');
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
