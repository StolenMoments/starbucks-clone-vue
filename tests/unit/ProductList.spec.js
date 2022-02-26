import ProductList from '@/components/Product/ProductList.vue';
import { mount } from '@vue/test-utils';

describe('렌더링 테스트', () => {
  const wrapper = mount(ProductList, {
    data() {
      return {
        categoryName: '에스프레소',
        products: [
          {
            id: 1,
            isBest: true,
            isNew: false,
            name: '카라멜 마끼아또',
            engName: 'Caramel Macchiato',
            price: 5000,
            desc: '향긋한 바닐라 시럽과 따뜻한 스팀 밀크 위에 풍성한 우유 거품을 얹고 점을 찍듯이 에스프레소를 부은 후 벌집 모양으로 카라멜 드리즐을 올린 달콤한 커피 음료',
          },
          {
            id: 2,
            isBest: false,
            isNew: false,
            name: '카푸치노',
            engName: 'Cappuccino',
            price: 4500,
            desc: '풍부하고 진한 에스프레소에 따뜻한 우유와 벨벳 같은 우유 거품이 1:1 비율로 어우러져 마무리된 커피 음료',
          },
          {
            id: 3,
            isBest: false,
            isNew: true,
            name: '슈크림 라떼',
            engName: 'Choux Cream Latte',
            price: 5500,
            desc: '오리지널 슈크림의 맛을 그대로 재현한,\nChoux is Coming!\n봄을 알리는 스타벅스의 시그니처 음료 슈크림 라떼!\n퍼스널 옵션을 선택하여 블론드/디카페인 원두로 즐겨보세요.',
          },
        ],
      };
    },
  });

  test('카테고리 렌더링', () => {
    expect(wrapper.get('[data-test="category-name"').text())
      .toBe('에스프레소');
  });

  test('음료명 한글 렌더링', () => {
    const productNames = wrapper.findAll('[data-test="product-name"');

    expect(productNames.at(0).text()).toBe('카라멜 마끼아또');
    expect(productNames.at(1).text()).toBe('카푸치노');
    expect(productNames.at(2).text()).toBe('슈크림 라떼');
  });

  test('음료명 영문 렌더링', () => {
    const productEngNames = wrapper.findAll('[data-test="product-eng-name"');

    expect(productEngNames.at(0).text()).toBe('Caramel Macchiato');
    expect(productEngNames.at(1).text()).toBe('Cappuccino');
    expect(productEngNames.at(2).text()).toBe('Choux Cream Latte');
  });

  test('가격 렌더링', () => {
    const productPrices = wrapper.findAll('[data-test="product-price"');

    expect(productPrices.at(0).text()).toBe('5,000원');
    expect(productPrices.at(1).text()).toBe('4,500원');
    expect(productPrices.at(2).text()).toBe('5,500원');
  });

  test('위첨자 렌더링', () => {
    const productSuperscripts = wrapper.findAll('[data-test="product-superscript"');

    expect(productSuperscripts.at(0).text()).toBe('Best');
    expect(productSuperscripts.at(1).text()).toBe('New');
  });
});
