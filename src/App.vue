<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/TheHeader.vue'
</script>

<template>
  <AppHeader />
  <RouterView />
</template>

<style lang="scss">
/* global styles here */
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('bootstrap/dist/css/bootstrap.min.css');

* {
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}
input:placeholder-shown {
  font-style: italic;
}
</style>