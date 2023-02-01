<script setup lang="ts">
import { ref, reactive } from 'vue';
import { TreeData } from '../../components/Tree/Tree.const';
import Tree from '../../components/Tree/Tree.vue';

const treeData = reactive<TreeData[]>([
  {
    title: '1',
    icon: 'x',
    children: [
      {
        title: '1-1',
        icon: 'y',
      },
    ],
  },
  {
    title: '2',
    icon: 'x',
    children: [
      {
        title: '2-1',
        icon: 'y',
      },
      {
        title: '2-2',
        icon: 'z',
      },
    ],
  },
  {
    title: '3',
    icon: 'x',
  },
]);
</script>

<template>
  <div class="aside">
    <header>这里是icon和网站标题</header>
    <Tree :data="treeData"></Tree>
  </div>
</template>

<style lang="scss" scoped>
.aside {
  padding: 0 10px;
  header {
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
}
</style>
