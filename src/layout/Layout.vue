<script setup lang="ts">
import Container from './container/Container.vue';
import Header from './header/Header.vue';
import Footer from './footer/Footer.vue'
</script>

<template>
  <div class="layout">
    <div class="header">
      <Header></Header>
    </div>
    <div class="container">
      <Container></Container>
    </div>
    <div class="container">
      <Footer></Footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
