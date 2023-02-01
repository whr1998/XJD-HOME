<script setup lang="ts">
import { ref, reactive } from 'vue';
const info = reactive([
  {
    name: 'ESTELLE',
    img: '../../../public/introduce/1.jpg',
    baike: '',
  },
  {
    name: 'ISHIHAR SATOMI',
    img: '../../../public/introduce/1.jpg',
    baike: '',
  },
  {
    name: 'SONGYI',
    img: '../../../public/introduce/1.jpg',
    baike: '',
  },
  {
    name: 'KIMCHAEHYUN',
    img: '../../../public/introduce/1.jpg',
    baike: '',
  },
]);
</script>

<template>
  <div class="container" v-for="item in info">
    <div class="inner">
      <div class="header">
        {{ item.name }}
      </div>
      <div class="detail">
        <img :src="item.img" alt="" />
        <div class="content"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-width: 1024px;
  background-color: #4e7ca1;
  .inner {
    width: 85vw;
    height: 100%;
    margin: 0 auto;
    min-width: 1024px;
    .header {
      height: 150px;
      line-height: 150px;
      color: var(--color);
      font-size: var(--midFontSize);
    }
    .detail {
      display: flex;
      img {
        width: 400px;
        height: 600px;
        border: 1px solid var(--color);
        object-fit: cover;
        object-position: 50% 20%;
      }
    }
  }
}
</style>
