import { mount } from '@vue/test-utils';
import LoginForm from '../../src/components/Login/LoginForm.vue';

test('입력한 아이디를 보여준다.', async () => {
  const wrapper = mount(LoginForm);
  const inputId = wrapper.get('[data-test="input-id"]');
  const showId = wrapper.get('[data-test="show-id"]');

  await inputId.setValue('user1234');
  expect(showId.text())
    .toBe('user1234');
});

test('입력한 패스워드를 보여준다.', async () => {
  const wrapper = mount(LoginForm);
  const inputPassword = wrapper.get('[data-test="input-password"]');
  const showPassword = wrapper.get('[data-test="show-password"]');

  await inputPassword.setValue('password1234');
  expect(showPassword.text())
    .toBe('password1234');
});
