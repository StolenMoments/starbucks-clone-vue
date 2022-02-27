<template>
  <main>
    <header class="flex flex-col bg-green-700 text-white" data-test="cart-header">
      <i class="fas fa-arrow-left fa-2x m-1.5"/>
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
      <section v-for="product in products" :key="product.id" class="ProductSection">
        <label :for="product.id">
          <input :id="product.id" type="checkbox" data-test="select-product">
        </label>
        <img alt="product image" :src="product.img"
             class="ProductImg" data-test="product-img"/>
        <div class="ProductText">
          <span class="font-bold" data-test="product-name">{{ product.name }}</span>
          <p class="text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap"
             data-test="product-eng-name">
            {{ product.engName }}
          </p>
          <p class="ProductOption" data-test="primary-option">
            {{ `${product.temperature} | ${product.size} | ${product.cup}` }}
          </p>
          <p class="ProductOption" v-for="option in product.option" :key="option.id"
             data-test="personal-option">
            {{ option.name }} | {{ option.count }} |
            {{
              addComma(option.price * (option.count - option.defaultCount))
            }}
          </p>
          <button class="font-bold text-blue-500 text-base underline" data-test="change-option">
            옵션변경
          </button>
          <p class="mr-4 text-right text-bold text-xl" data-test="product-price">
            {{ addComma(getProductPrice(product)) }}
          </p>
        </div>
      </section>
    </section>
    <footer class="flex flex-col justify-start mt-4 border-t-2">
      <div class="flex justify-between mt-4 text-right text-2xl">
        <span class="ml-4">총 금액</span>
        <span class="mr-4" data-test="total-price">
          {{ addComma(getTotalPrice) }}
        </span>
      </div>
      <button class="OrderButton" data-test="do-order">
        주문하기
      </button>
    </footer>
  </main>
</template>

<script>
export default {
  name: 'OrderCart',
  checked: [],
  data() {
    return {
      products: [
        {
          id: 1,
          img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[38]_20210415154821991.jpg',
          name: '카푸치노',
          engName: 'Cappuccino',
          temperature: 'HOT',
          size: 'Grande',
          cup: '일회용컵',
          price: 4700,
          count: 2,
          option: [],
        },
        {
          id: 2,
          img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2022/02/[9200000000415]_20220210160909365.jpg',
          name: '슈크림 라떼',
          engName: 'Choux Cream Latte',
          temperature: 'HOT',
          size: 'Venti',
          cup: '개인컵',
          price: 5400,
          count: 2,
          option: [
            {
              id: 7,
              name: '바닐라 시럽',
              price: 600,
              count: 2,
              defaultCount: 0,
            },
          ],
        },
        {
          id: 3,
          img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[126197]_20210415154610012.jpg',
          name: '카라멜 마끼아또',
          engName: 'Caramel Macchiato',
          temperature: 'ICED',
          size: 'Tall',
          cup: '매장컵',
          price: 4200,
          count: 1,
          option: [
            {
              id: 1,
              name: '에스프레소 샷',
              price: 600,
              count: 3,
              defaultCount: 1,
            },
          ],
        },
      ],
    };
  },
  methods: {
    addComma(price) {
      return price ? `${price.toLocaleString('ko-KR')}원` : price;
    },
    getProductPrice(product) {
      let price = product.price * product.count;
      const { option } = product;
      for (let i = 0; i < option.length; i += 1) {
        price += (option[i].price * (option[i].count - option[i].defaultCount));
      }
      return price;
    },
  },
  computed: {
    getTotalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.$data.products.length; i += 1) {
        const product = this.$data.products.at(i);
        totalPrice += product.price * product.count;

        const { option } = product;
        for (let j = 0; j < option.length; j += 1) {
          totalPrice += (option[j].price * (option[j].count - option[j].defaultCount));
        }
      }
      return totalPrice;
    },
  },
};
</script>

<style scoped>
.ProductSection {
  @apply ml-4 flex
}

.ProductImg {
  @apply h-20 w-20 ml-4 rounded-full
}

.ProductText {
  @apply w-full ml-4 text-lg overflow-hidden text-ellipsis whitespace-nowrap
}

.ProductOption {
  @apply text-base text-gray-400
}

.OrderButton {
  @apply h-12 w-1/3 ml-auto mr-auto mt-4 bg-green-400 text-xl font-bold rounded-2xl
}

@media (max-width: 320px) {
  .ProductSection {
    @apply ml-2
  }

  .ProductImg {
    @apply h-16 w-16 ml-1
  }

  .ProductText {
    @apply ml-1 text-sm
  }

  .ProductOption {
    @apply text-sm text-gray-400
  }
}
</style>
