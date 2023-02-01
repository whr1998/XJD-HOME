<script setup lang="ts">
import { ref, reactive } from 'vue';
</script>

<template>
  <div>
    <div style="height: 40px; border-bottom: 1px solid #ccc;" v-for="item in 100" :key="item">
        {{ item }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
