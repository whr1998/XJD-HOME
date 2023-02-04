<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
const items = reactive([
  {
    name: 'HOME',
  },
  {
    name: 'ABOUT',
  },
]);
</script>

<template>
  <header>
    <nav>
      <div class="logo">XJD IDOL</div>
      <div class="items">
        <ul>
          <li v-for="item in items">
            <span>
              <a href="#">{{ item.name }}</a>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 64px;
  line-height: 64px;
  min-width: var(--minWidth);
  color: var(--color-w);
  background-color: var(--backgroundColor);
  margin-bottom: 50px;
  nav {
    width: 95vw;
    min-width: var(--minWidth);
    color: var(--color);
    margin: 0 auto;
    display: flex;
    align-items: center;
    .logo {
      width: 162px;
      font-size: var(--midFontSize);
    }
    .items {
      ul {
        display: flex;
        li {
          span {
            display: inline-block;
            width: 100px;
            text-align: center;
            a {
              color: var(--color-w);
              font-size: var(--minFontSize);
            }
          }
        }
      }
    }
  }
}
</style>
