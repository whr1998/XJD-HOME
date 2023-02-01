<script setup lang="ts">
import { ref, reactive } from 'vue';
import { TreeData } from './Tree.const';

defineProps<{
  data: TreeData[];
}>();

const clickTab = (index: number) => {
  active.value = index
}

const active = ref(0)

</script>

<template>
  <div class="tree" v-for="(item, index) in data">
    <div @click.stop="clickTab(index)" class="item">
        <span>{{ item.icon }}</span>
        <span>{{ item.title }}</span>
    </div>
    <Tree v-if="item.children?.length" :data="item?.children" :class="[active == index ? 'show' : 'hidden']"></Tree>
  </div>
</template>

<style lang="scss" scoped>
.tree {
    margin-left: 10px;
    .item {
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
}

.show {
  display: block;
}

.hidden {
  display: none;
}
</style>
