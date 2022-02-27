import OrderCart from '@/components/Order/OrderCart.vue';
import { mount } from '@vue/test-utils';

describe('텍스트 렌더링 테스트', () => {
  const wrapper = mount(OrderCart, {
    data() {
      return {
        products: [
          {
            id: 1,
            img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437226.jpg',
            name: '콜드 브루 오트 라떼',
            engName: 'Cold Brew With Oat Milk',
            temperature: 'ICED',
            size: 'Tall',
            cup: '매장컵',
            price: 5800,
            count: 2,
            option: [],
          },
          {
            id: 2,
            img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133657016.jpg',
            name: '돌체 콜드 브루',
            engName: 'Dolce Cold Brew',
            temperature: 'ICED',
            size: 'Grande',
            cup: '개인컵',
            price: 6000,
            count: 2,
            option: [
              {
                id: 7,
                name: '돌체 시럽',
                price: 600,
                count: 3,
                defaultCount: 0,
              },
            ],
          },
          {
            id: 3,
            img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[126197]_20210415154610012.jpg',
            name: '카라멜 마끼아또',
            engName: 'Caramel Macchiato',
            temperature: 'HOT',
            size: 'Venti',
            cup: '일회용컵',
            price: 6000,
            count: 1,
            option: [
              {
                id: 1,
                name: '에스프레소 샷',
                price: 600,
                count: 2,
                defaultCount: 1,
              },
            ],
          },
        ],
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
    const productNames = wrapper.findAll('[data-test="product-name"]');
    expect(productNames.at(0).text())
      .toBe('콜드 브루 오트 라떼');
    expect(productNames.at(1).text())
      .toBe('돌체 콜드 브루');
    expect(productNames.at(2).text())
      .toBe('카라멜 마끼아또');
  });

  test('상품명 영문', () => {
    const productEngNames = wrapper.findAll('[data-test="product-eng-name"]');
    expect(productEngNames.at(0).text())
      .toBe('Cold Brew With Oat Milk');
    expect(productEngNames.at(1).text())
      .toBe('Dolce Cold Brew');
    expect(productEngNames.at(2).text())
      .toBe('Caramel Macchiato');
  });

  test('기본 옵션', () => {
    const primaryOptions = wrapper.findAll('[data-test="primary-option"]');
    expect(primaryOptions.at(0)
      .text())
      .toBe('ICED | Tall | 매장컵');
    expect(primaryOptions.at(1)
      .text())
      .toBe('ICED | Grande | 개인컵');
    expect(primaryOptions.at(2)
      .text())
      .toBe('HOT | Venti | 일회용컵');
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
    const productPrices = wrapper.findAll('[data-test="product-price"]');
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
  test('전체 선택', () => {

  });
  test('선택 삭제', () => {

  });
  test('전체 삭제', () => {

  });
  test('단일 상품 선택', () => {

  });
  test('수량 조절', () => {

  });
  test('옵션 변경', () => {

  });
});
