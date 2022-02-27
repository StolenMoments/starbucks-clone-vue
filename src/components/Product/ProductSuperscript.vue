<template>
  <span v-if="type === 'Hot'" class="Hot">Hot</span>
  <span v-else-if="type === 'New'" class="New">New</span>
</template>

<script>
export default {
  name: 'ProductSuperscript',
  props: {
    type: String,
  },
};
</script>

<style lang="postcss" scoped>
.Hot {
  @apply ml-1 text-xs text-pink-400 italic
}

.New {
  @apply ml-1 text-xs text-green-400 italic
}
</style>
