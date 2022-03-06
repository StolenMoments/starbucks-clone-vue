import { mount } from '@vue/test-utils';
import LoginForm from '../../src/components/Login/LoginForm.vue';

describe('렌더링 테스트', () => {
  const wrapper = mount(LoginForm);
  test('아이디 입력 부분 렌더링', () => {
    expect(wrapper.get('[data-test="input-username"]')
      .attributes('placeholder'))
      .toBe('아이디');
  });

  test('패스워드 입력 부분 렌더링', () => {
    expect(wrapper.get('[data-test="input-password"]')
      .attributes('placeholder'))
      .toBe('패스워드');
  });

  test('로그인 버튼 렌더링', () => {
    expect(wrapper.get('[data-test="login-button"]')
      .text())
      .toBe('로그인');
  });
});

describe('기능 테스트', () => {
  const wrapper = mount(LoginForm);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('입력한 아이디를 보여준다.', async () => {
    const inputUsername = wrapper.get('[data-test="input-username"]');
    const showId = wrapper.get('[data-test="show-id"]');

    await inputUsername.setValue('user1234');
    expect(showId.text())
      .toBe('user1234');
  });

  test('입력한 패스워드를 보여준다.', async () => {
    const inputPassword = wrapper.get('[data-test="input-password"]');
    const showPassword = wrapper.get('[data-test="show-password"]');

    await inputPassword.setValue('password1234');
    expect(showPassword.text())
      .toBe('password1234');
  });

  test('로그인 성공 테스트', async () => {
    const inputUsername = wrapper.get('[data-test="input-username"]');
    const inputPassword = wrapper.get('[data-test="input-password"]');
    const loginButton = wrapper.get('[data-test="login-button"]');

    await inputUsername.setValue('testid');
    await inputPassword.setValue('testpassword');
    await loginButton.trigger('click');
  });

  test('로그인 실패 테스트', async () => {
    const inputUsername = wrapper.get('[data-test="input-username"]');
    const inputPassword = wrapper.get('[data-test="input-password"]');
    const loginButton = wrapper.get('[data-test="login-button"]');

    await inputUsername.setValue('failid');
    await inputPassword.setValue('failpassword');
    await loginButton.trigger('click');
  });
});
