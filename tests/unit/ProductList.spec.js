import ProductList from '@/components/Product/ProductList.vue';
import { mount } from '@vue/test-utils';

describe('렌더링 테스트', () => {
  const wrapper = mount(ProductList, {
    data() {
      return {
        categoryName: '에스프레소',
        products: [
          {
            productNo: 1,
            isHot: true,
            isNewProduct: false,
            nameKr: '카라멜 마끼아또',
            nameEng: 'Caramel Macchiato',
            price: 5000,
          },
          {
            productNo: 2,
            isHot: false,
            isNewProduct: false,
            nameKr: '카푸치노',
            nameEng: 'Cappuccino',
            price: 4500,
          },
          {
            productNo: 3,
            isHot: false,
            isNewProduct: true,
            nameKr: '슈크림 라떼',
            nameEng: 'Choux Cream Latte',
            price: 5500,
          },
        ],
      };
    },
  });

  test('카테고리 렌더링', () => {
    expect(wrapper.get('[data-test="category-name"')
      .text())
      .toBe('에스프레소');
  });

  test('음료명 한글 렌더링', () => {
    const productNames = wrapper.findAll('[data-test="product-name-kr"');

    expect(productNames.at(0)
      .text())
      .toBe('카라멜 마끼아또');
    expect(productNames.at(1)
      .text())
      .toBe('카푸치노');
    expect(productNames.at(2)
      .text())
      .toBe('슈크림 라떼');
  });

  test('음료명 영문 렌더링', () => {
    const productEngNames = wrapper.findAll('[data-test="product-name-eng"');

    expect(productEngNames.at(0)
      .text())
      .toBe('Caramel Macchiato');
    expect(productEngNames.at(1)
      .text())
      .toBe('Cappuccino');
    expect(productEngNames.at(2)
      .text())
      .toBe('Choux Cream Latte');
  });

  test('가격 렌더링', () => {
    const productPrices = wrapper.findAll('[data-test="product-price"');

    expect(productPrices.at(0)
      .text())
      .toBe('5,000원');
    expect(productPrices.at(1)
      .text())
      .toBe('4,500원');
    expect(productPrices.at(2)
      .text())
      .toBe('5,500원');
  });

  test('위첨자 렌더링', () => {
    const superscriptBest = wrapper.get('[data-test="superscript-hot"');
    const superscriptNew = wrapper.get('[data-test="superscript-new"');

    expect(superscriptBest.text())
      .toBe('Hot');
    expect(superscriptNew.text())
      .toBe('New');
  });
});
