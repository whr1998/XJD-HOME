<script setup lang="ts">
import { ref, reactive } from 'vue';
import Container from './container/Container.vue';
import Header from './header/Header.vue';
</script>

<template>
  <div class="layout">
    <div class="header">
      <Header></Header>
    </div>
    <div class="container">
      <Container></Container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {

}
</style>
