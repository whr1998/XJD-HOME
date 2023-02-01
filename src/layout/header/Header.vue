<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
</script>

<template>
  <div class="header">
    <div class="nav">
      <div class="logo">LOGO</div>
      <div class="items">
        <ul>
          <li>
            <span>
              <a href="#">HOME</a>
            </span>
          </li>
          <li>
            <span>
              <a href="#">ABOUT</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="introduce"></div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100vh;
  min-width: var(--minWidth);
  background-color: #346c9c;
  .nav {
    width: 85vw;
    min-width: var(--minWidth);
    height: 150px;
    color: var(--color);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 162px;
      height: 100px;
      line-height: 100px;
      font-size: var(--midFontSize);
    }
    .items {
      height: 100px;
      line-height: 100px;
      ul {
        display: flex;
        li {
          span {
            display: inline-block;
            width: 120px;
            height: 60px;
            text-align: right;
            a {
              color: var(--color);
              font-size: var(--midFontSize);
            }
          }
        }
      }
    }
  }
  .introduce {
    width: 85vw;
    min-width: 1024px;
    margin: 0 auto;
    height: calc(100% - 250px);
    border: 1px solid #fff;
  }
}
</style>
