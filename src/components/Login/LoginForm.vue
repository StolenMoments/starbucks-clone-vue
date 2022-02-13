<template>
  <form class="absolute flex h-full w-full flex-col items-center justify-center">
    <div class="mt-1 mb-1">
      <label for="user-id">
        <input id="user-id" type="text" placeholder="아이디" data-test="input-id" v-model="id">
      </label>
    </div>
    <div class="mt-1 mb-1">
      <label for="user-password">
        <input id="user-password" type="password" placeholder="패스워드" data-test="input-password"
               v-model="password">
      </label>
    </div>
    <button class="bg-blue-300 hover:bg-blue-400 px-4 py-2 mt-1 mb-1 text-white font-bold rounded"
            type="submit">
      로그인
    </button>
    <div>
      <span>아이디:</span>
      <span data-test="show-id">{{ id }}</span>
    </div>
    <div>
      <span>패스워드:</span>
      <span data-test="show-password">{{ password }}</span>
    </div>
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
