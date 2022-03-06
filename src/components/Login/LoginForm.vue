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
  <section v-if="isLoginFail" class="ModalBlock" @click="toggleModal" @keydown="toggleModal">
    <div class="ModalContent">
      <div class="text-3xl font-bold">로그인에 실패했습니다</div>
      <div class="mt-4 text-md font-bold">화면 클릭, 스페이스바 / 엔터키를 누르면 창이 닫힙니다.</div>
    </div>
  </section>
</template>

<script>
import RepositoryFactory from '@/components/Client/RepositoryFactory';

const userRepository = RepositoryFactory.get('user');

export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      isLoginFail: false,
    };
  },
  methods: {
    doLogin() {
      const payload = {
        username: this.username,
        password: this.password,
      };
      userRepository.login(payload)
        .then((response) => {
          const { data } = response;
          const authTokenStorageKey = 'authToken';
          sessionStorage.setItem(authTokenStorageKey, `${data.token_type} ${data.access_token}`);
          this.$router.push('/product?category=1');
        })
        .catch(() => {
          this.toggleModal();
        });
    },
    toggleModal() {
      this.isLoginFail = !this.isLoginFail;
    },
  },
};
</script>

<style scoped>
.LoginButton {
  @apply h-12 w-24 bg-blue-400  px-4 py-2 mt-1 mb-1 text-white font-bold rounded-2xl
  hover:bg-blue-500
}

.JoinButton {
  @apply h-12 w-24 border-blue-400 border-2 ml-1 px-4 py-2 mt-1 mb-1 font-bold rounded-2xl
  hover:bg-blue-200
}

.ModalBlock {
  @apply absolute h-full w-full flex justify-center items-center top-0 bg-gray-200
}

.ModalContent {
  @apply absolute h-1/4 w-1/2 flex flex-col justify-center items-center bg-white
}

</style>
