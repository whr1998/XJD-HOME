<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';

</script>

<template>
  <div class="header">
    <div class="nav">
      <div class="logo">LOGO</div>
      <div class="items">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100vh;
  min-width: var(--minWidth);
  background-color: #346c9c;
  .nav {
    width: 80vw;
    min-width: var(--minWidth);
    height: 150px;
    line-height: 150px;
    color: #fff;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    .items {
      ul {
        display: flex;
      }
    }
  }
}
</style>
