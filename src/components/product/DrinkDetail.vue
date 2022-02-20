<template>
  <main class="flex h-full w-full flex-col place-content-evenly items-center">
    <section class="relative">
      <button class="absolute h-6 w-6 top-2 left-2 rounded-xl bg-gray-200">
        <ArrowCircleLeftIcon/>
      </button>
      <img alt="coffee" class="h-80 w-full max-w-sm" src="@/assets/coffee_sample.jpeg"/>
      <button class="absolute h-6 w-6 top-2 right-2 rounded-xl bg-gray-200">
        <ShareIcon/>
      </button>
    </section>
    <section class="mt-4 flex w-full max-w-sm">
      <span class="text-2xl font-bold">{{ drink.name }}</span>
      <span class="ml-1 text-xs text-pink-400">Best</span>
    </section>
    <section class="mt-4 w-full max-w-sm">
      <p>
        {{ drink.desc }}
      </p>
    </section>
    <section class="mt-4 w-full max-w-sm">
      <span class="text-xl font-bold">{{ addComma(drink.price) }}</span>
      <span class="text-xl font-bold">원</span>
    </section>
    <section class="mt-4 w-full max-w-sm">
      <button
        class="h-10 w-1/2 cursor-pointer rounded-l-3xl border-2 hover:bg-red-300 hover:text-white">
        HOT
      </button>
      <button
        class="h-10 w-1/2 cursor-pointer rounded-r-3xl border-2 hover:bg-blue-300 hover:text-white">
        ICE
      </button>
    </section>
    <section class="mt-4 w-full max-w-sm">
      <p class="font-bold">사이즈</p>
      <div class="flex place-content-between">
        <button class="h-10 w-24 cursor-pointer rounded border-2 hover:bg-green-300">Short</button>
        <button class="h-10 w-24 cursor-pointer rounded border-2 hover:bg-green-300">Tall</button>
        <button class="h-10 w-24 cursor-pointer rounded border-2 hover:bg-green-300">Grande</button>
        <button class="h-10 w-24 cursor-pointer rounded border-2 hover:bg-green-300">Venti</button>
      </div>
    </section>
    <section class="mt-4 w-full max-w-sm">
      <p class="font-bold">컵 선택</p>
      <button class="h-10 w-1/3 cursor-pointer rounded-l-2xl border-2 hover:bg-green-300">
        매장컵
      </button>
      <button class="h-10 w-1/3 cursor-pointer rounded border-2 hover:bg-green-300">개인컵</button>
      <button class="h-10 w-1/3 cursor-pointer rounded-r-2xl border-2 hover:bg-green-300">
        일회용컵
      </button>
    </section>
    <section class="mt-4 w-full max-w-sm">
      <p class="font-bold">퍼스널 옵션</p>
      <div class="mt-1 flex" v-for="option in drink.options" :key="option.name">
        <p class="mr-auto">{{ option.name }}</p>
        <div class="ml-auto">
          <MinusCircleIcon class="inline h-7 w-7 cursor-pointer rounded"/>
          <span class="mr-2 ml-2">1</span>
          <PlusCircleIcon class="inline h-7 w-7 cursor-pointer rounded"/>
        </div>
      </div>
    </section>
    <hr class="mt-2 w-full max-w-sm border-t-4"/>
    <section class="mt-4 flex w-full max-w-sm">
      <div class="mr-auto">
        <MinusCircleIcon class="inline h-7 w-7 cursor-pointer"/>
        <span class="mr-2 ml-2">1</span>
        <PlusCircleIcon class="inline h-7 w-7 cursor-pointer"/>
      </div>
      <p class="ml-auto text-2xl">
        <span>5,000</span>
        <span>원</span>
      </p>
    </section>
    <section class="mt-4 flex w-full max-w-sm">
      <HeartIcon class="inline h-7 w-7 cursor-pointer"/>
      <div class="ml-auto">
        <button class="h-10 w-16 cursor-pointer rounded border-2">담기</button>
        <button class="h-10 w-24 cursor-pointer rounded border-2 bg-green-400">주문하기</button>
      </div>
    </section>
  </main>
</template>

<script>
import {
  PlusCircleIcon,
  MinusCircleIcon,
  ArrowCircleLeftIcon,
} from '@heroicons/vue/outline';
import { HeartIcon, ShareIcon } from '@heroicons/vue/solid';

export default {
  name: 'DrinkDetail',
  components: {
    PlusCircleIcon,
    MinusCircleIcon,
    HeartIcon,
    ArrowCircleLeftIcon,
    ShareIcon,
  },
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
  methods: {
    addComma(price) {
      return price.toLocaleString('ko-KR');
    },
  },
};
</script>

<style scoped></style>
