<template>
  <div>
    <form>
      <label for="user-id">아이디
        <input id="user-id" type="text" data-test="input-id" v-model="id">
      </label>

      <label for="user-password">패스워드
        <input id="user-password" type="password" data-test="input-password" v-model="password">
      </label>
    </form>
  </div>

  <div>
    <div>
      <span>아이디:</span>
      <span data-test="show-id">{{ id }}</span>
    </div>
    <div>
      <span>패스워드:</span>
      <span data-test="show-password">{{ password }}</span>
    </div>
  </div>
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
