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

const intros = reactive([
  {
    // img: '../../../public/introduce/1.jpg',
    name: 'ESTELLE',
  },
  {
    // img: '../../../public/introduce/2.png',
    name: 'ISHIHARA SATOMI',
  },
  {
    // img: '../../../public/introduce/3.png',
    name: 'SONGYI',
  },
  {
    // img: '../../../public/introduce/4.png',
    name: 'KIMCHAEHYUN',
  },
]);
</script>

<template>
  <header>
    <nav>
      <div class="logo">XJD  IDOL</div>
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
    <div class="banner">
      <div class="item" v-for="intro in intros">
        <!-- <img :src="intro.img" alt="" /> -->
        <p>{{ intro.name }}</p>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 100vh;
  min-width: var(--minWidth);
  nav {
    width: 85vw;
    min-width: var(--minWidth);
    height: 100px;
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
  .banner {
    width: 85vw;
    min-width: 1024px;
    margin: 0 auto;
    height: calc(100% - 200px);
    overflow: hidden;

    display: flex;
    .item {
      width: 25%;
      position: relative;
      border: 2px solid #fff;
      img {
        object-fit: cover;
        object-position: 50% 20%;
        position: absolute;
      }
      p {
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: #4e7ca1;
        text-align: center;
        color: #fff;
        position: absolute;
        bottom: 0;
        border-top: 2px solid var(--color);
        font-size: 20px;
      }
    }
  }
}
</style>
