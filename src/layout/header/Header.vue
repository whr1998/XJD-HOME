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
  min-width: var(--minWidth);
  color: var(--color-w);
  background-color: var(--backgroundColor);
  margin-bottom: 50px;
  nav {
    width: 85vw;
    min-width: var(--minWidth);
    height: 64px;
    line-height: 64px;
    color: var(--color);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 162px;
      font-size: var(--minFontSize);
    }
    .items {
      ul {
        display: flex;
        li {
          span {
            display: inline-block;
            width: 100px;
            height: 60px;
            text-align: right;
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


