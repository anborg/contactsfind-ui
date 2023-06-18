<script setup lang="ts">
// const props = 
defineProps({
  isDisabled: {
    type: Boolean,
    required: true,
    default: false,
  },
});
</script>
<template>
  <button :disabled="isDisabled"><slot></slot></button>
</template>

<style lang="scss" scoped>
button {
  padding: 8px 16px;
  border: none;
}
</style>
