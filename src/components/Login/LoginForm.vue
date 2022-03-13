<template>
  <div class="block h-80 flex justify-center items-center">
    <span class="text-5xl">멋쟁이 커피처럼</span>
  </div>
  <form class="flex h-full w-full flex-col items-center justify-center">
    <section class="mt-1 mb-1">
      <label for="username">
        <input id="username" type="text" placeholder="아이디" data-test="input-username"
               v-model="username">
      </label>
    </section>
    <section class="mt-1 mb-1">
      <label for="userPassword">
        <input id="userPassword" type="password" placeholder="패스워드" data-test="input-password"
               v-model="password" @keyup.enter="doLogin">
      </label>
    </section>
    <section class="flex">
      <button
        class="LoginButton" type="button" @click="doLogin" data-test="login-button">
        로그인
      </button>
      <button
        class="JoinButton" type="button">
        회원가입
      </button>
    </section>
    <section>
      <span>아이디:</span>
      <span data-test="show-id">{{ username }}</span>
    </section>
    <section>
      <span>패스워드:</span>
      <span data-test="show-password">{{ password }}</span>
    </section>
  </form>
  <LoginFailModal v-if="isLoginFail" v-on:onToggleModal="toggleModal"/>
</template>

<script>
import RepositoryFactory from '@/components/Client/RepositoryFactory';
import LoginFailModal from '@/components/Modal/LoginFailModal.vue';

const userRepository = RepositoryFactory.get('user');

export default {
  name: 'LoginForm',
  components: { LoginFailModal },
  data() {
    return {
      username: '',
      password: '',
      isLoginFail: false,
    };
  },
  methods: {
    async doLogin() {
      const payload = {
        username: this.username,
        password: this.password,
      };
      try {
        const response = await userRepository.login(payload);
        const { data } = response;
        const token = `${data.token_type} ${data.access_token}`;
        sessionStorage.setItem('token', token);
        this.$store.commit('setToken', token);
        await this.$router.push('/product?category=1');
      } catch (err) {
        this.toggleModal();
      }
    },
    toggleModal() {
      this.isLoginFail = !this.isLoginFail;
    },
  },
};
</script>

<style scoped>
.LoginButton {
  @apply h-12 w-24 bg-green-400  px-4 py-2 mt-1 mb-1 text-white font-bold rounded-2xl
  hover:bg-green-500
}

.JoinButton {
  @apply h-12 w-24 border-green-400 border-2 ml-1 px-4 py-2 mt-1 mb-1 font-bold rounded-2xl
  hover:bg-green-200
}
</style>
