<template>
  <LoginForm/>
  <MenuFooterBar/>
</template>

<script>
import LoginForm from '@/components/Login/LoginForm.vue';
import MenuFooterBar from '@/components/Menu/MenuFooterBar.vue';

export default {
  name: 'App',
  components: { MenuFooterBar, LoginForm },
};

</script>
