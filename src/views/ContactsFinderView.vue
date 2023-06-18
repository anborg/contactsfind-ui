<script setup lang="ts">
import ContactsFinder from "../components/ContactsFinder.vue";
</script>
<template>
  <main>
    <ContactsFinder />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;
}
</style>
