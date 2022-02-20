import { shallowMount } from '@vue/test-utils';
import MenuFooterBar from '@/components/Menu/MenuFooterBar.vue';

test('footer 부분에 홈 메뉴가 표시된다.', () => {
  const menuFooterBar = shallowMount(MenuFooterBar);
  const home = menuFooterBar.get('[data-test="home"]');

  expect(home.text())
    .toBe('홈');
});

test('footer 부분에 장바구니 메뉴가 표시된다.', () => {
  const menuFooterBar = shallowMount(MenuFooterBar);
  const cart = menuFooterBar.get('[data-test="cart"]');

  expect(cart.text())
    .toBe('장바구니');
});

test('footer 부분에 설정 메뉴가 표시된다.', () => {
  const menuFooterBar = shallowMount(MenuFooterBar);
  const settings = menuFooterBar.get('[data-test="settings"]');

  expect(settings.text())
    .toBe('설정');
});
