<template>
  <LoginForm/>
  <MenuWrapper/>
</template>

<script>
import LoginForm from '@/components/Login/LoginForm.vue';
import MenuWrapper from '@/components/Menu/MenuWrapper.vue';

export default {
  name: 'App',
  components: { MenuWrapper, LoginForm },
};

</script>
