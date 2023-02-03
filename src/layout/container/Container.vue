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
</script>

<template>
  <article>
    <div class="container">
      <div class="infos">
        <div class="items" v-for="item in info">
          <img :src="item.img" alt="" />
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
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
