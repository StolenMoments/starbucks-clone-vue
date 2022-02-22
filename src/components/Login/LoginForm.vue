<template>
  <form class="absolute flex h-full w-full flex-col items-center justify-center">
    <section class="mt-1 mb-1">
      <label for="userId">
        <input id="userId" type="text" placeholder="아이디" data-test="input-id" v-model="id">
      </label>
    </section>
    <section class="mt-1 mb-1">
      <label for="userPassword">
        <input id="userPassword" type="password" placeholder="패스워드" data-test="input-password"
               v-model="password">
      </label>
    </section>
    <button class="bg-blue-400 hover:bg-blue-500 px-4 py-2 mt-1 mb-1 text-white font-bold rounded"
            type="button">
      로그인
    </button>
    <section>
      <span>아이디:</span>
      <span data-test="show-id">{{ id }}</span>
    </section>
    <section>
      <span>패스워드:</span>
      <span data-test="show-password">{{ password }}</span>
    </section>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      id: '',
      password: '',
    };
  },
};
</script>

<style scoped>

</style>
