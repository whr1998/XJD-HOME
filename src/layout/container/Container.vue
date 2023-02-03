<script setup lang="ts">
import { ref, reactive } from 'vue';
const info = reactive([
  {
    name: 'ESTELLE',
    // img: '../../../public/introduce/1.jpg',
    baike: '',
  },
  {
    name: 'ISHIHAR SATOMI',
    // img: '../../../public/introduce/2.png',
    baike: '',
  },
  {
    name: 'SONGYI',
    // img: '../../../public/introduce/3.png',
    baike: '',
  },
  {
    name: 'KIMCHAEHYUN',
    // img: '../../../public/introduce/4.png',
    baike: '',
  },
]);
const intros = reactive([
  {
    img: '../../../public/introduce/1.jpg',
    name: 'ESTELLE',
  },
  {
    img: '../../../public/introduce/2.png',
    name: 'ISHIHARA SATOMI',
  },
  {
    img: '../../../public/introduce/3.png',
    name: 'SONGYI',
  },
  {
    img: '../../../public/introduce/4.png',
    name: 'KIMCHAEHYUN',
  },
]);
</script>

<template>
  <article>
    <div class="banner">
      <el-carousel height="600px">
        <el-carousel-item v-for="item in intros" :key="item">
          <img :src="item.img" :alt="item.name" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container">
      <div class="infos">
        <div class="items" v-for="item in info">
          <!-- <img :src="item.img" alt="" /> -->
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.banner {
  width: 85vw;
  min-width: 1024px;
  margin: 0 auto;
  img {
    width: 85vw;
    min-width: 1024px;
    object-fit: cover;
  }
}
.container {
  width: 85vw;
  min-width: var(--minWidth);
  margin: 0 auto;
  .infos {
    display: flex;
    flex-wrap: wrap;
    .items {
      width: 49%;
      height: 300px;
      border: 2px solid var(--color);
      img {
        object-fit: cover;
        width: 200px;
        height: auto;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
